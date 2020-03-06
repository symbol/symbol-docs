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
const symbol_sdk_1 = require("symbol-sdk");
/* start block 01 */
// replace with kyc mosaic id
const mosaicIdHex = '183D0802BCDB97AF';
const mosaicId = new symbol_sdk_1.MosaicId(mosaicIdHex);
// replace with alice address
const aliceRawAddress = 'TBULEA-UG2CZQ-ISUR44-2HWA6U-AKGWIX-HDABJV-IPS4';
const aliceAddress = symbol_sdk_1.Address.createFromRawAddress(aliceRawAddress);
// replace with bob address
const bobRawAddress = 'TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP';
const bobAddress = symbol_sdk_1.Address.createFromRawAddress(bobRawAddress);
// replace with carol address
const carolRawAddress = 'TCF7MK-FL6QYF-UHWVRZ-6UUCLN-YBDWLQ-ZZC37A-2O6R';
const carolAddress = symbol_sdk_1.Address.createFromRawAddress(carolRawAddress);
// replace with network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
const key = symbol_sdk_1.KeyGenerator.generateUInt64Key('IsVerified'.toLowerCase());
const aliceMosaicAddressRestrictionTransaction = symbol_sdk_1.MosaicAddressRestrictionTransaction
    .create(symbol_sdk_1.Deadline.create(), mosaicId, // mosaicId
key, // restrictionKey
aliceAddress, // address
symbol_sdk_1.UInt64.fromUint(1), // newRestrictionValue
networkType);
const bobMosaicAddressRestrictionTransaction = symbol_sdk_1.MosaicAddressRestrictionTransaction
    .create(symbol_sdk_1.Deadline.create(), mosaicId, // mosaicId
key, // restrictionKey
bobAddress, // address
symbol_sdk_1.UInt64.fromUint(2), // newRestrictionValue
networkType);
const carolMosaicAddressRestrictionTransaction = symbol_sdk_1.MosaicAddressRestrictionTransaction
    .create(symbol_sdk_1.Deadline.create(), mosaicId, // mosaicId
key, // restrictionKey
carolAddress, // address
symbol_sdk_1.UInt64.fromUint(2), // newRestrictionValue
networkType);
// replace with kyc provider private key
const kycProviderPrivateKey = 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB';
const kycProviderAccount = symbol_sdk_1.Account.createFromPrivateKey(kycProviderPrivateKey, networkType);
const aggregateTransaction = symbol_sdk_1.AggregateTransaction.createComplete(symbol_sdk_1.Deadline.create(), [
    aliceMosaicAddressRestrictionTransaction.toAggregate(kycProviderAccount.publicAccount),
    bobMosaicAddressRestrictionTransaction.toAggregate(kycProviderAccount.publicAccount),
    carolMosaicAddressRestrictionTransaction.toAggregate(kycProviderAccount.publicAccount),
], networkType, [], symbol_sdk_1.UInt64.fromUint(2000000));
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '44D2225B8932C9A96DCB13508CBCDFFA9A9663BFBA2354FEEC8FCFCB7E19846C';
const signedTransaction = kycProviderAccount.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
// replace with node endpoint
const nodeUrl = 'http://api-2-01.us-west-1.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 01 */
