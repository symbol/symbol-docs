/*
 * Copyright 2019-present NEM Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { timer } from 'rxjs';
import { toArray } from 'rxjs/operators';
import {
  Account,
  Address,
  AggregateTransactionInfo,
  Deadline,
  EmptyMessage,
  Mosaic,
  MosaicId,
  NamespaceId,
  NetworkType,
  Order,
  RepositoryFactoryHttp,
  TransactionGroup,
  TransactionPaginationStreamer,
  TransactionSearchCriteria,
  TransactionService,
  TransactionType,
  TransferTransaction,
  UInt64,
} from 'symbol-sdk';
import { DBServiceImpl } from './interfaces/DBServiceImpl';
import { ExchangeSymbolConfig } from './interfaces/ExchangeSymbolConfig';

const example = async (): Promise<void> => {
  /* start block sendWithdrawal */
  // Mocks a database service
  const dbService = new DBServiceImpl();

  // Exchange configuration
  const config: ExchangeSymbolConfig = {
    // Replace with your node URL
    apiUrl: 'NODE_URL',
    // Use MAIN_NET or TEST_NET
    networkType: NetworkType.TEST_NET,
    // Replace with value from http://<API-NODE-URL>:3000/network/properties
    networkGenerationHashSeed:
      '3B5E1FA6445653C971A50687E75E6D09FB30481055E3990C84B25E9222DC1155',
    // Replace with the account central address
    centralAccountAddress: Address.createFromRawAddress(
      'TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA',
    ),
    // Use 6BED913FA20223F8 for MAIN_NET or 091F837E059AE13C for TEST_NET
    tokenId: new MosaicId('091F837E059AE13C'),
    tokenAlias: new NamespaceId('symbol.xym'),
    tokenDivisibility: 6,
    requiredConfirmations: 20,
    useFinalization: true,
  };

  // Repositories
  const repositoryFactory = new RepositoryFactoryHttp(config.apiUrl);
  const listener = repositoryFactory.createListener();
  const transactionHttp = repositoryFactory.createTransactionRepository();
  const chainHttp = repositoryFactory.createChainRepository();
  const transactionService = new TransactionService(
    transactionHttp,
    repositoryFactory.createReceiptRepository(),
  );
  const transactionPaginationStreamer = new TransactionPaginationStreamer(
    transactionHttp,
  );

  // Replace with exchange account private key
  const exchangeAccountPrivateKey = process.env.PRIVATE_KEY as string;
  const exchangeAccount = Account.createFromPrivateKey(
    exchangeAccountPrivateKey,
    config.networkType,
  );
  // Replace with destination address from user's request
  const userRawAddress = process.env.RECIPIENT_ADDRESS as string;
  const userAddress = Address.createFromRawAddress(userRawAddress);
  // Replace with the source UUID from user's request
  const uuid = process.env.UUID as string;
  // Replace with amount of tokens to transfer from user's request
  const relativeAmount = parseFloat(process.env.AMOUNT as string);

  // Check that the user has enough funds
  if (dbService.getUserAmount(uuid, config.tokenId) < relativeAmount) {
    throw Error('User ' + uuid + ' does not have enough funds.');
  }

  // 1. Create withdrawal transaction
  const absoluteAmount =
    relativeAmount * Math.pow(10, config.tokenDivisibility);
  const token = new Mosaic(config.tokenId, UInt64.fromUint(absoluteAmount));

  const epochAdjustment = await repositoryFactory
    .getEpochAdjustment()
    .toPromise();

  const withdrawalTransaction = TransferTransaction.create(
    Deadline.create(epochAdjustment),
    userAddress,
    [token],
    EmptyMessage,
    config.networkType,
    UInt64.fromUint(200000), // Fixed max fee of 0.2 XYM
  );

  // 2. Sign transaction
  const signedTransaction = exchangeAccount.sign(
    withdrawalTransaction,
    config.networkGenerationHashSeed,
  );

  // 3. Announce transaction and wait for confirmation
  console.log('Announcing transaction', signedTransaction.hash);
  await listener.open();
  const transaction = await transactionService
    .announce(signedTransaction, listener)
    .toPromise();
  console.log(
    'Transaction confirmed at height',
    transaction.transactionInfo?.height.compact() ?? 0,
  );
  listener.close();
  /* end block sendWithdrawal */

  // Polling loop, every 30s
  const poller = timer(0, 30000).subscribe(async () => {
    /* start block pollWithdrawal */
    // Get current chain height and latest finalized block
    const {
      height: currentHeight,
      latestFinalizedBlock: finalizationBlock,
    } = await chainHttp.getChainInfo().toPromise();
    const maxHeight = config.useFinalization
      ? finalizationBlock.height
      : currentHeight.subtract(UInt64.fromUint(config.requiredConfirmations));

    // Bail out if there have been no new (final) transactions since last check
    const lastProcessedHeight = dbService.getLastProcessedHeight();
    if (lastProcessedHeight.equals(maxHeight)) return;

    // Look for confirmed transactions signed by the central account address,
    // in the desired block height range.
    const searchCriteria = {
      group: TransactionGroup.Confirmed,
      signerPublicKey: exchangeAccount.publicKey,
      embedded: true,
      order: Order.Asc,
      type: [TransactionType.TRANSFER],
      fromHeight: lastProcessedHeight.add(UInt64.fromUint(1)),
      toHeight: maxHeight,
    } as TransactionSearchCriteria;

    const data = await transactionPaginationStreamer
      .search(searchCriteria)
      .pipe(toArray() as any)
      .toPromise();

    console.log(
      'Processing',
      (data as TransferTransaction[]).length,
      'entries from height',
      searchCriteria.fromHeight?.compact(),
      'to',
      searchCriteria.toHeight?.compact(),
    );

    // Record the valid withdrawals in the exchange database
    (data as TransferTransaction[]).forEach((transaction) => {
      const transactionInfo = transaction.transactionInfo;
      if (!transactionInfo) return;
      const transactionHash =
        transactionInfo instanceof AggregateTransactionInfo
          ? transactionInfo.aggregateHash
          : transactionInfo.hash ?? '';
      const amount =
        transaction.mosaics[0].amount.compact() /
        Math.pow(10, config.tokenDivisibility);
      dbService.recordWithdrawal(uuid, amount, transactionHash);
    });

    // Store the last height that has been processed
    dbService.setLastProcessedHeight(maxHeight);

    /* end block pollWithdrawal */
  });
};

example();
