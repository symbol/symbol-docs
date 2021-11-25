'use strict';
/*
 *
 * Copyright 2018-present NEM
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
 *
 */
Object.defineProperty(exports, '__esModule', { value: true });
const symbol_sdk_1 = require('symbol-sdk');
// Retrieve from node's /network/properties or RepositoryFactory
const epochAdjustment = 123456789;
const example = async () => {
  /* start block 01 */
  const publicAccount1 = symbol_sdk_1.Account.generateNewAccount(
    symbol_sdk_1.NetworkType.TEST_NET,
  ).publicAccount;
  const publicAccount2 = symbol_sdk_1.Account.generateNewAccount(
    symbol_sdk_1.NetworkType.TEST_NET,
  ).publicAccount;
  // Get median fee multiplier
  const nodeUrl = 'NODE_URL';
  const repositoryHttp = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
  const networkHttp = repositoryHttp.createNetworkRepository();
  const medianFeeMultiplier = (
    await networkHttp.getTransactionFees().toPromise()
  ).medianFeeMultiplier;
  // Define transaction and set max fee
  const rawAddress = 'TB6Q5E-YACWBP-CXKGIL-I6XWCH-DRFLTB-KUK34I-YJQ';
  const recipientAddress = symbol_sdk_1.Address.createFromRawAddress(
    rawAddress,
  );
  const transferTransaction = symbol_sdk_1.TransferTransaction.create(
    symbol_sdk_1.Deadline.create(epochAdjustment),
    recipientAddress,
    [],
    symbol_sdk_1.PlainMessage.create('This is a test message'),
    symbol_sdk_1.NetworkType.TEST_NET,
  ).setMaxFee(medianFeeMultiplier);
  /* end block 01 */
  /* start block 02 */
  // Define transaction and set max fee
  const aggregateTransaction = symbol_sdk_1.AggregateTransaction.createBonded(
    symbol_sdk_1.Deadline.create(epochAdjustment),
    [
      transferTransaction.toAggregate(publicAccount1),
      transferTransaction.toAggregate(publicAccount2),
    ],
    symbol_sdk_1.NetworkType.TEST_NET,
    [],
  ).setMaxFeeForAggregate(medianFeeMultiplier, 1);
  /* end block 02 */
  return aggregateTransaction;
};
example().then((result) => console.log(result));
