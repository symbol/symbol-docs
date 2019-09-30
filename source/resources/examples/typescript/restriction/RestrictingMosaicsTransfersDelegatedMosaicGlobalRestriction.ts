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

import {
    Account,
    AggregateTransaction,
    Deadline,
    MosaicDefinitionTransaction,
    MosaicFlags,
    MosaicGlobalRestrictionTransaction,
    MosaicId,
    MosaicNonce,
    MosaicRestrictionType,
    NamespaceMosaicIdGenerator,
    NetworkType,
    TransactionHttp,
    UInt64
} from 'nem2-sdk';

/* start block 01 */
const kycProviderPrivateKey = process.env.KYC_PROVIDER_PRIVATE_KEY as string;
const kycProviderAccount = Account.createFromPrivateKey(kycProviderPrivateKey, NetworkType.MIJIN_TEST);

const mosaicNonce = MosaicNonce.createRandom();
const mosaicDefinitionTransaction = MosaicDefinitionTransaction.create(
    Deadline.create(),
    mosaicNonce,
    MosaicId.createFromNonce(mosaicNonce, kycProviderAccount.publicAccount),
    MosaicFlags.create(true, true, true),
    0,
    UInt64.fromUint(0),
    NetworkType.MIJIN_TEST);
console.log(mosaicDefinitionTransaction.mosaicId);

const key = 'IsVerified'.toLowerCase();
const mosaicGlobalRestrictionTransaction = MosaicGlobalRestrictionTransaction
    .create(
        Deadline.create(),
        mosaicDefinitionTransaction.mosaicId, // mosaicId
        new MosaicId([0,0]), // referenceMosaicId
        new UInt64(NamespaceMosaicIdGenerator.namespaceId(key)), // restictionKey
        UInt64.fromUint(0), // previousRestrictionValue
        MosaicRestrictionType.NONE, // previousRestrictionType
        UInt64.fromUint(1), // newRestrictionValue
        MosaicRestrictionType.EQ, // newRestrictionType
        NetworkType.MIJIN_TEST);

const networkGenerationHash = process.env.NETWORK_GENERATION_HASH as string;

const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [
        mosaicDefinitionTransaction.toAggregate(kycProviderAccount.publicAccount),
        mosaicGlobalRestrictionTransaction.toAggregate(kycProviderAccount.publicAccount)],
    NetworkType.MIJIN_TEST,
    []
);
const signedTransaction = kycProviderAccount.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);

const transactionHttp = new TransactionHttp('http://localhost:3000');
transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
/* end block 01 */
