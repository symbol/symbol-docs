"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const nem2_sdk_1 = require("nem2-sdk");
/* start block 01 */
// replace with network type
const networkType = nem2_sdk_1.NetworkType.TEST_NET;
// replace with mosaic id
const mosaicIdHex = '634a8ac3fc2b65b3';
const mosaicId = new nem2_sdk_1.MosaicId(mosaicIdHex);
// replace with address
const aliceRawAddress = 'TBULEA-UG2CZQ-ISUR44-2HWA6U-AKGWIX-HDABJV-IPS4';
const aliceAddress = nem2_sdk_1.Address.createFromRawAddress(aliceRawAddress);
// replace with address
const bobRawAddress = 'TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP';
const bobAddress = nem2_sdk_1.Address.createFromRawAddress(bobRawAddress);
const key = nem2_sdk_1.KeyGenerator.generateUInt64Key('KYC'.toLowerCase());
const aliceMosaicAddressRestrictionTransaction = nem2_sdk_1.MosaicAddressRestrictionTransaction
    .create(nem2_sdk_1.Deadline.create(), mosaicId, // mosaicId
key, // restrictionKey
aliceAddress, // address
nem2_sdk_1.UInt64.fromUint(1), // newRestrictionValue
networkType);
const bobMosaicAddressRestrictionTransaction = nem2_sdk_1.MosaicAddressRestrictionTransaction
    .create(nem2_sdk_1.Deadline.create(), mosaicId, // mosaicId
key, // restictionKey
bobAddress, // address
nem2_sdk_1.UInt64.fromUint(0), // newRestrictionValue
networkType);
/* end block 01 */
/* start block 02 */
// replace with company private key
const privateKey = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
const account = nem2_sdk_1.Account.createFromPrivateKey(privateKey, networkType);
const aggregateTransaction = nem2_sdk_1.AggregateTransaction.createComplete(nem2_sdk_1.Deadline.create(), [
    aliceMosaicAddressRestrictionTransaction.toAggregate(account.publicAccount),
    bobMosaicAddressRestrictionTransaction.toAggregate(account.publicAccount)
], networkType, []).setMaxFee(2);
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = 'CC42AAD7BD45E8C276741AB2524BC30F5529AF162AD12247EF9A98D6B54A385B';
const signedTransaction = account.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
// replace with node endpoint
const nodeUrl = 'http://api-harvest-20.us-west-1.nemtech.network:3000';
const transactionHttp = new nem2_sdk_1.TransactionHttp(nodeUrl);
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 02 */
