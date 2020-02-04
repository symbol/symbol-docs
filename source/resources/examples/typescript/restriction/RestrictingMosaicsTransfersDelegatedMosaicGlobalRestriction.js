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
const networkType = nem2_sdk_1.NetworkType.TEST_NET;
// replace with kyc provider private key
const kycProviderPrivateKey = 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB';
const kycProviderAccount = nem2_sdk_1.Account.createFromPrivateKey(kycProviderPrivateKey, networkType);
// Define KYC Mosaic Id
const mosaicNonce = nem2_sdk_1.MosaicNonce.createRandom();
const mosaicDefinitionTransaction = nem2_sdk_1.MosaicDefinitionTransaction.create(nem2_sdk_1.Deadline.create(), mosaicNonce, nem2_sdk_1.MosaicId.createFromNonce(mosaicNonce, kycProviderAccount.publicAccount), nem2_sdk_1.MosaicFlags.create(true, true, true), 0, nem2_sdk_1.UInt64.fromUint(0), networkType);
console.log('KYC MosaicId:', mosaicDefinitionTransaction.mosaicId.toHex());
// Define Mosaic global restriction Is_Verified = 1
const key = nem2_sdk_1.KeyGenerator.generateUInt64Key('IsVerified'.toLowerCase());
const mosaicGlobalRestrictionTransaction = nem2_sdk_1.MosaicGlobalRestrictionTransaction
    .create(nem2_sdk_1.Deadline.create(), mosaicDefinitionTransaction.mosaicId, // mosaicId
key, // restictionKey
nem2_sdk_1.UInt64.fromUint(0), // previousRestrictionValue
nem2_sdk_1.MosaicRestrictionType.NONE, // previousRestrictionType
nem2_sdk_1.UInt64.fromUint(1), // newRestrictionValue
nem2_sdk_1.MosaicRestrictionType.EQ, // newRestrictionType
networkType);
const aggregateTransaction = nem2_sdk_1.AggregateTransaction.createComplete(nem2_sdk_1.Deadline.create(), [
    mosaicDefinitionTransaction.toAggregate(kycProviderAccount.publicAccount),
    mosaicGlobalRestrictionTransaction.toAggregate(kycProviderAccount.publicAccount)
], networkType, [], nem2_sdk_1.UInt64.fromUint(2000000));
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = 'CC42AAD7BD45E8C276741AB2524BC30F5529AF162AD12247EF9A98D6B54A385B';
const signedTransaction = kycProviderAccount.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
// replace with node endpoint
const nodeUrl = 'http://api-xym-harvest-20.us-west-1.nemtech.network:3000';
const repositoryFactory = new nem2_sdk_1.RepositoryFactoryHttp(nodeUrl, networkType, networkGenerationHash);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 01 */
