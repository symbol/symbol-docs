'use strict';
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
Object.defineProperty(exports, '__esModule', { value: true });
const rxjs_1 = require('rxjs');
const operators_1 = require('rxjs/operators');
const symbol_sdk_1 = require('symbol-sdk');
const DBServiceImpl_1 = require('./interfaces/DBServiceImpl');
const example = async () => {
  var _a, _b;
  /* start block sendWithdrawal */
  // Mocks a database service
  const dbService = new DBServiceImpl_1.DBServiceImpl();
  // Exchange configuration
  const config = {
    // Replace with your node URL
    apiUrl: 'NODE_URL',
    // Use MAIN_NET or TEST_NET
    networkType: symbol_sdk_1.NetworkType.TEST_NET,
    // Replace with value from http://<API-NODE-URL>:3000/network/properties
    networkGenerationHashSeed:
      '3B5E1FA6445653C971A50687E75E6D09FB30481055E3990C84B25E9222DC1155',
    // Replace with the account central address
    centralAccountAddress: symbol_sdk_1.Address.createFromRawAddress(
      'TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA',
    ),
    // Use 6BED913FA20223F8 for MAIN_NET or 091F837E059AE13C for TEST_NET
    tokenId: new symbol_sdk_1.MosaicId('091F837E059AE13C'),
    tokenAlias: new symbol_sdk_1.NamespaceId('symbol.xym'),
    tokenDivisibility: 6,
    requiredConfirmations: 20,
    useFinalization: true,
  };
  // Repositories
  const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(
    config.apiUrl,
  );
  const listener = repositoryFactory.createListener();
  const transactionHttp = repositoryFactory.createTransactionRepository();
  const chainHttp = repositoryFactory.createChainRepository();
  const transactionService = new symbol_sdk_1.TransactionService(
    transactionHttp,
    repositoryFactory.createReceiptRepository(),
  );
  const transactionPaginationStreamer = new symbol_sdk_1.TransactionPaginationStreamer(
    transactionHttp,
  );
  // Replace with exchange account private key
  const exchangeAccountPrivateKey = process.env.PRIVATE_KEY;
  const exchangeAccount = symbol_sdk_1.Account.createFromPrivateKey(
    exchangeAccountPrivateKey,
    config.networkType,
  );
  // Replace with destination address from user's request
  const userRawAddress = process.env.RECIPIENT_ADDRESS;
  const userAddress = symbol_sdk_1.Address.createFromRawAddress(userRawAddress);
  // Replace with the source UUID from user's request
  const uuid = process.env.UUID;
  // Replace with amount of tokens to transfer from user's request
  const relativeAmount = parseFloat(process.env.AMOUNT);
  // Check that the user has enough funds
  if (dbService.getUserAmount(uuid, config.tokenId) < relativeAmount) {
    throw Error('User ' + uuid + ' does not have enough funds.');
  }
  // 1. Create withdrawal transaction
  const absoluteAmount =
    relativeAmount * Math.pow(10, config.tokenDivisibility);
  const token = new symbol_sdk_1.Mosaic(
    config.tokenId,
    symbol_sdk_1.UInt64.fromUint(absoluteAmount),
  );
  const epochAdjustment = await repositoryFactory
    .getEpochAdjustment()
    .toPromise();
  const withdrawalTransaction = symbol_sdk_1.TransferTransaction.create(
    symbol_sdk_1.Deadline.create(epochAdjustment),
    userAddress,
    [token],
    symbol_sdk_1.EmptyMessage,
    config.networkType,
    symbol_sdk_1.UInt64.fromUint(200000),
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
    (_b =
      (_a = transaction.transactionInfo) === null || _a === void 0
        ? void 0
        : _a.height.compact()) !== null && _b !== void 0
      ? _b
      : 0,
  );
  listener.close();
  /* end block sendWithdrawal */
  // Polling loop, every 30s
  const poller = rxjs_1.timer(0, 30000).subscribe(async () => {
    var _a, _b;
    /* start block pollWithdrawal */
    // Get current chain height and latest finalized block
    const {
      height: currentHeight,
      latestFinalizedBlock: finalizationBlock,
    } = await chainHttp.getChainInfo().toPromise();
    const maxHeight = config.useFinalization
      ? finalizationBlock.height
      : currentHeight.subtract(
          symbol_sdk_1.UInt64.fromUint(config.requiredConfirmations),
        );
    // Bail out if there have been no new (final) transactions since last check
    const lastProcessedHeight = dbService.getLastProcessedHeight();
    if (lastProcessedHeight.equals(maxHeight)) return;
    // Look for confirmed transactions signed by the central account address,
    // in the desired block height range.
    const searchCriteria = {
      group: symbol_sdk_1.TransactionGroup.Confirmed,
      signerPublicKey: exchangeAccount.publicKey,
      embedded: true,
      order: symbol_sdk_1.Order.Asc,
      type: [symbol_sdk_1.TransactionType.TRANSFER],
      fromHeight: lastProcessedHeight.add(symbol_sdk_1.UInt64.fromUint(1)),
      toHeight: maxHeight,
    };
    const data = await transactionPaginationStreamer
      .search(searchCriteria)
      .pipe(operators_1.toArray())
      .toPromise();
    console.log(
      'Processing',
      data.length,
      'entries from height',
      (_a = searchCriteria.fromHeight) === null || _a === void 0
        ? void 0
        : _a.compact(),
      'to',
      (_b = searchCriteria.toHeight) === null || _b === void 0
        ? void 0
        : _b.compact(),
    );
    // Record the valid withdrawals in the exchange database
    data.forEach((transaction) => {
      var _a;
      const transactionInfo = transaction.transactionInfo;
      if (!transactionInfo) return;
      const transactionHash =
        transactionInfo instanceof symbol_sdk_1.AggregateTransactionInfo
          ? transactionInfo.aggregateHash
          : (_a = transactionInfo.hash) !== null && _a !== void 0
          ? _a
          : '';
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
