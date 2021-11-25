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

import { toArray } from 'rxjs/operators';
import {
  Address,
  AggregateTransactionInfo,
  MosaicId,
  NamespaceId,
  NetworkType,
  Order,
  RepositoryFactoryHttp,
  TransactionGroup,
  TransactionPaginationStreamer,
  TransactionSearchCriteria,
  TransactionType,
  TransferTransaction,
  UInt64,
} from 'symbol-sdk';
import { DBServiceImpl } from './interfaces/DBServiceImpl';
import { ExchangeSymbolConfig } from './interfaces/ExchangeSymbolConfig';

const example = async (): Promise<void> => {
  /* start block processDeposits */
  // Mocks a database service
  const dbService = new DBServiceImpl();

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

  const repositoryFactory = new RepositoryFactoryHttp(config.apiUrl);
  const chainHttp = repositoryFactory.createChainRepository();
  const transactionHttp = repositoryFactory.createTransactionRepository();
  const transactionPaginationStreamer = new TransactionPaginationStreamer(
    transactionHttp,
  );

  // Get current chain height and latest finalized block
  const {
    height: currentHeight,
    latestFinalizedBlock: finalizationBlock,
  } = await chainHttp.getChainInfo().toPromise();
  const maxHeight = config.useFinalization
    ? finalizationBlock.height
    : currentHeight.subtract(UInt64.fromUint(config.requiredConfirmations));

  // 1. Look for confirmed transactions destined to the central account address,
  // in the desired block height range.
  const searchCriteria = {
    group: TransactionGroup.Confirmed,
    recipientAddress: config.centralAccountAddress,
    embedded: true,
    order: Order.Asc,
    type: [TransactionType.TRANSFER],
    fromHeight: dbService.getLastProcessedHeight(),
    toHeight: maxHeight,
  } as TransactionSearchCriteria;

  const data = await transactionPaginationStreamer
    .search(searchCriteria)
    .pipe(toArray() as any)
    .toPromise();

  // 2. Exclude invalid transactions
  const results = (data as TransferTransaction[]).filter((transaction) => {
    const transactionInfo = transaction.transactionInfo;
    if (!transactionInfo) return false;
    const transactionIndex = transactionInfo.index;
    const transactionHash =
      transactionInfo instanceof AggregateTransactionInfo
        ? transactionInfo.aggregateHash
        : transactionInfo.hash ?? '';

    return (
      // 2.a
      dbService.existsUser(transaction.message.payload) &&
      // 2.b
      transaction.mosaics.length === 1 &&
      (transaction.mosaics[0].id.toHex() === config.tokenId.toHex() ||
        transaction.mosaics[0].id.toHex() === config.tokenAlias.toHex()) &&
      // 2.c
      !dbService.existsTransaction(transactionHash, transactionIndex)
    );
  });

  // 3. Record the valid deposits in the exchange database
  results.forEach((transaction) => {
    const transactionInfo = transaction.transactionInfo;
    if (!transactionInfo) return;
    const transactionHash =
      transactionInfo instanceof AggregateTransactionInfo
        ? transactionInfo.aggregateHash
        : transactionInfo.hash ?? '';
    const transactionIndex = transactionInfo.index;
    const amount =
      transaction.mosaics[0].amount.compact() /
      Math.pow(10, config.tokenDivisibility);
    dbService.recordDeposit(
      transaction.message.payload,
      amount,
      transactionHash,
      transactionIndex,
    );
  });

  // 4. Store the last height that has been processed
  dbService.setLastProcessedHeight(maxHeight);
  /* end block processDeposits */
};

example();
