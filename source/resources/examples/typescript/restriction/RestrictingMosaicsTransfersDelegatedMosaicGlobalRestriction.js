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
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
// replace with kyc provider private key
const kycProviderPrivateKey = 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB';
const kycProviderAccount = symbol_sdk_1.Account.createFromPrivateKey(kycProviderPrivateKey, networkType);
// Define KYC Mosaic Id
const mosaicNonce = symbol_sdk_1.MosaicNonce.createRandom();
const mosaicDefinitionTransaction = symbol_sdk_1.MosaicDefinitionTransaction.create(symbol_sdk_1.Deadline.create(), mosaicNonce, symbol_sdk_1.MosaicId.createFromNonce(mosaicNonce, kycProviderAccount.publicAccount.address), symbol_sdk_1.MosaicFlags.create(true, true, true), 0, symbol_sdk_1.UInt64.fromUint(0), networkType);
console.log('KYC MosaicId:', mosaicDefinitionTransaction.mosaicId.toHex());
// Define Mosaic global restriction Is_Verified = 1
const key = symbol_sdk_1.KeyGenerator.generateUInt64Key('IsVerified'.toLowerCase());
const mosaicGlobalRestrictionTransaction = symbol_sdk_1.MosaicGlobalRestrictionTransaction
    .create(symbol_sdk_1.Deadline.create(), mosaicDefinitionTransaction.mosaicId, // mosaicId
key, // restictionKey
symbol_sdk_1.UInt64.fromUint(0), // previousRestrictionValue
symbol_sdk_1.MosaicRestrictionType.NONE, // previousRestrictionType
symbol_sdk_1.UInt64.fromUint(1), // newRestrictionValue
symbol_sdk_1.MosaicRestrictionType.EQ, // newRestrictionType
networkType);
const aggregateTransaction = symbol_sdk_1.AggregateTransaction.createComplete(symbol_sdk_1.Deadline.create(), [
    mosaicDefinitionTransaction.toAggregate(kycProviderAccount.publicAccount),
    mosaicGlobalRestrictionTransaction.toAggregate(kycProviderAccount.publicAccount)
], networkType, [], symbol_sdk_1.UInt64.fromUint(2000000));
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash = '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';
const signedTransaction = kycProviderAccount.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 01 */
