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
    Deadline, HashLockTransaction,
    KeyGenerator,
    MetadataHttp,
    MetadataTransactionService,
    MetadataType, NetworkCurrencyMosaic,
    NetworkType,
    PublicAccount, SignedTransaction, TransactionHttp, UInt64
} from 'nem2-sdk';
import {mergeMap} from "rxjs/operators";
import {of} from "rxjs";

/* start block 01 */
const nodeUrl = 'http://localhost:3000';
const metadataHttp = new MetadataHttp(nodeUrl);
const metadataService = new MetadataTransactionService(metadataHttp);

const bobPrivateKey = process.env.BOB_PRIVATE_KEY as string;
const bobAccount = Account.createFromPrivateKey(bobPrivateKey, NetworkType.MIJIN_TEST);

const alicePublicKey = process.env.ALICE_PUBLIC_KEY as string;
const alicePublicAccount = PublicAccount.createFromPublicKey(alicePublicKey, NetworkType.MIJIN_TEST);
const key = KeyGenerator.generateUInt64Key('CERT');
const newValue = '000000';

const accountMetadataTransaction = metadataService.createMetadataTransaction(
    Deadline.create(),
    NetworkType.MIJIN_TEST,
    MetadataType.Account,
    alicePublicAccount,
    key,
    newValue,
    bobAccount.publicAccount);
/* end block 01 */

const networkGenerationHash = process.env.NETWORK_GENERATION_HASH as string;

interface SignedAggregateHashLock {
    readonly aggregate: SignedTransaction;
    readonly hashLock: SignedTransaction;
}

accountMetadataTransaction
    .pipe(
        mergeMap( transaction => {
            const aggregateTransaction = AggregateTransaction.createComplete(
                Deadline.create(),
                [transaction.toAggregate(bobAccount.publicAccount)],
                NetworkType.MIJIN_TEST,
                []);
            const signedTransaction = bobAccount.sign(aggregateTransaction, networkGenerationHash);
            console.log(signedTransaction.hash);
            return of(signedTransaction);
        }),
        mergeMap( signedAggregateTransaction => {
            const hashLockTransaction = HashLockTransaction.create(
                Deadline.create(),
                NetworkCurrencyMosaic.createRelative(10),
                UInt64.fromUint(480),
                signedAggregateTransaction,
                NetworkType.MIJIN_TEST);
            const signedTransaction = bobAccount.sign(hashLockTransaction, networkGenerationHash);
            const signedAggregateHashLock : SignedAggregateHashLock = { aggregate: signedAggregateTransaction, hashLock: signedTransaction }
            return of(signedAggregateHashLock);
            }
        )
    );


