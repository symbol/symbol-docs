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
/* start block 01 */
// replace with network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
// replace with mosaic id
const mosaicIdHex = '634a8ac3fc2b65b3';
const mosaicId = new symbol_sdk_1.MosaicId(mosaicIdHex);
// replace with address
const aliceRawAddress = 'TCHBDE-NCLKEB-ILBPWP-3JPB2X-NY64OE-7PYHHE-32I';
const aliceAddress = symbol_sdk_1.Address.createFromRawAddress(aliceRawAddress);
// replace with address
const bobRawAddress = 'TB6Q5E-YACWBP-CXKGIL-I6XWCH-DRFLTB-KUK34I-YJQ';
const bobAddress = symbol_sdk_1.Address.createFromRawAddress(bobRawAddress);
const key = symbol_sdk_1.KeyGenerator.generateUInt64Key('KYC'.toLowerCase());
const aliceMosaicAddressRestrictionTransaction = symbol_sdk_1.MosaicAddressRestrictionTransaction.create(
  symbol_sdk_1.Deadline.create(epochAdjustment),
  mosaicId, // mosaicId
  key, // restrictionKey
  aliceAddress, // address
  symbol_sdk_1.UInt64.fromUint(1), // newRestrictionValue
  networkType,
);
const bobMosaicAddressRestrictionTransaction = symbol_sdk_1.MosaicAddressRestrictionTransaction.create(
  symbol_sdk_1.Deadline.create(epochAdjustment),
  mosaicId, // mosaicId
  key, // restictionKey
  bobAddress, // address
  symbol_sdk_1.UInt64.fromUint(0), // newRestrictionValue
  networkType,
);
/* end block 01 */
/* start block 02 */
// replace with company private key
const privateKey =
  'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
const account = symbol_sdk_1.Account.createFromPrivateKey(
  privateKey,
  networkType,
);
const aggregateTransaction = symbol_sdk_1.AggregateTransaction.createComplete(
  symbol_sdk_1.Deadline.create(epochAdjustment),
  [
    aliceMosaicAddressRestrictionTransaction.toAggregate(account.publicAccount),
    bobMosaicAddressRestrictionTransaction.toAggregate(account.publicAccount),
  ],
  networkType,
  [],
  symbol_sdk_1.UInt64.fromUint(2000000),
);
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash =
  '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';
const signedTransaction = account.sign(
  aggregateTransaction,
  networkGenerationHash,
);
console.log(signedTransaction.hash);
// replace with node endpoint
const nodeUrl = 'NODE_URL';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp.announce(signedTransaction).subscribe(
  (x) => console.log(x),
  (err) => console.error(err),
);
/* end block 02 */
