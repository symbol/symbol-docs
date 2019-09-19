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
    Account, AggregateTransaction,
    Deadline,
    MosaicDefinitionTransaction,
    MosaicGlobalRestrictionTransaction,
    MosaicId,
    MosaicNonce,
    MosaicProperties,
    MosaicRestrictionType,
    NetworkType,
    TransactionHttp,
    UInt64
} from 'nem2-sdk';

/* start block 01 */
const mosaicIdHexa = process.env.MOSAIC_ID as string;
const mosaicId = new MosaicId(mosaicIdHexa);

const privateKey = process.env.PRIVATE_KEY as string;
const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

const mosaicNonce = MosaicNonce.createRandom();
const mosaicDefinitionTransaction = MosaicDefinitionTransaction.create(
    Deadline.create(),
    mosaicNonce,
    MosaicId.createFromNonce(mosaicNonce, account.publicAccount),
    MosaicProperties.create({
        supplyMutable: true,
        transferable: true,
        divisibility: 0,
        duration: UInt64.fromUint(1000),
        restrictable: true
    }),
    NetworkType.MIJIN_TEST);

const mosaicGlobalRestrictionTransaction = MosaicGlobalRestrictionTransaction
    .create(
        Deadline.create(),
        mosaicId,
        mosaicDefinitionTransaction.mosaicId,
        UInt64.fromHex('1FE'),
        UInt64.fromUint(0),
        MosaicRestrictionType.NONE,
        UInt64.fromUint(1),
        MosaicRestrictionType.EQ,
        NetworkType.MIJIN_TEST);

const networkGenerationHash = process.env.NETWORK_GENERATION_HASH as string;

const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [
        mosaicDefinitionTransaction.toAggregate(account.publicAccount),
        mosaicGlobalRestrictionTransaction.toAggregate(account.publicAccount)],
    NetworkType.MIJIN_TEST,
    []
);
const signedTransaction = account.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);

const transactionHttp = new TransactionHttp('http://localhost:3000');
transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
/* end block 01 */
