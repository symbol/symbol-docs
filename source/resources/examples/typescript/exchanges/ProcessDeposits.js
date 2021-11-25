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
const operators_1 = require('rxjs/operators');
const symbol_sdk_1 = require('symbol-sdk');
const DBServiceImpl_1 = require('./interfaces/DBServiceImpl');
const example = async () => {
  /* start block processDeposits */
  // Mocks a database service
  const dbService = new DBServiceImpl_1.DBServiceImpl();
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
  const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(
    config.apiUrl,
  );
  const chainHttp = repositoryFactory.createChainRepository();
  const transactionHttp = repositoryFactory.createTransactionRepository();
  const transactionPaginationStreamer = new symbol_sdk_1.TransactionPaginationStreamer(
    transactionHttp,
  );
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
  // 1. Look for confirmed transactions destined to the central account address,
  // in the desired block height range.
  const searchCriteria = {
    group: symbol_sdk_1.TransactionGroup.Confirmed,
    recipientAddress: config.centralAccountAddress,
    embedded: true,
    order: symbol_sdk_1.Order.Asc,
    type: [symbol_sdk_1.TransactionType.TRANSFER],
    fromHeight: dbService.getLastProcessedHeight(),
    toHeight: maxHeight,
  };
  const data = await transactionPaginationStreamer
    .search(searchCriteria)
    .pipe(operators_1.toArray())
    .toPromise();
  // 2. Exclude invalid transactions
  const results = data.filter((transaction) => {
    var _a;
    const transactionInfo = transaction.transactionInfo;
    if (!transactionInfo) return false;
    const transactionIndex = transactionInfo.index;
    const transactionHash =
      transactionInfo instanceof symbol_sdk_1.AggregateTransactionInfo
        ? transactionInfo.aggregateHash
        : (_a = transactionInfo.hash) !== null && _a !== void 0
        ? _a
        : '';
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
    var _a;
    const transactionInfo = transaction.transactionInfo;
    if (!transactionInfo) return;
    const transactionHash =
      transactionInfo instanceof symbol_sdk_1.AggregateTransactionInfo
        ? transactionInfo.aggregateHash
        : (_a = transactionInfo.hash) !== null && _a !== void 0
        ? _a
        : '';
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
