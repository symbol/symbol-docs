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
    HashLockTransaction,
    KeyGenerator,
    Listener,
    MetadataHttp,
    MetadataTransactionService,
    MetadataType,
    NetworkCurrencyMosaic,
    NetworkType,
    PublicAccount,
    SignedTransaction,
    TransactionHttp,
    UInt64
} from 'nem2-sdk';
import {filter, mergeMap} from "rxjs/operators";
import {merge, of} from "rxjs";

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

/* start block 02 */
const networkGenerationHash = process.env.NETWORK_GENERATION_HASH as string;
const signedAggregateTransaction = accountMetadataTransaction
    .pipe(
        mergeMap(transaction => {
            const aggregateTransaction = AggregateTransaction.createComplete(
                Deadline.create(),
                [transaction.toAggregate(bobAccount.publicAccount)],
                NetworkType.MIJIN_TEST,
                []);
            const signedTransaction = bobAccount.sign(aggregateTransaction, networkGenerationHash);
            return of(signedTransaction);
        }));
/* end block 02 */

/* start block 03 */
interface SignedAggregateHashLock {
    readonly aggregate: SignedTransaction;
    readonly hashLock: SignedTransaction;
}

const signedAggregateHashLock = signedAggregateTransaction.pipe(
    mergeMap(signedAggregateTransaction => {
        const hashLockTransaction = HashLockTransaction.create(
            Deadline.create(),
            NetworkCurrencyMosaic.createRelative(10),
            UInt64.fromUint(480),
            signedAggregateTransaction,
            NetworkType.MIJIN_TEST);
        const signedTransaction = bobAccount.sign(hashLockTransaction, networkGenerationHash);
        const signedAggregateHashLock: SignedAggregateHashLock = {
            aggregate: signedAggregateTransaction,
            hashLock: signedTransaction
        };
        console.log('Aggregate Transaction Hash:', signedAggregateTransaction.hash + '\n');
        console.log('HashLock Transaction Hash:', signedTransaction.hash + '\n');
        return of(signedAggregateHashLock);
    }));
/* end block 03 */

/* start block 04 */
const listener = new Listener(nodeUrl);
const transactionHttp = new TransactionHttp(nodeUrl);

const announceAggregateTransaction = (signedHashLockTransaction: SignedTransaction, signedAggregateTransaction: SignedTransaction) => {
    return listener
        .confirmed(bobAccount.address)
        .pipe(
            filter((transaction) => transaction.transactionInfo !== undefined
                && transaction.transactionInfo.hash === signedHashLockTransaction.hash),
            mergeMap(ignored => transactionHttp.announceAggregateBonded(signedAggregateTransaction))
        );
};

listener.open().then(() => {

    signedAggregateHashLock.pipe(
        mergeMap(signedAggregateHashLock => merge(
            transactionHttp.announce(signedAggregateHashLock.hashLock),
            announceAggregateTransaction(signedAggregateHashLock.hashLock,
                signedAggregateHashLock.aggregate))))
        .subscribe(x => {
            listener.terminate();
            console.log('Aggregate transaction confirmed:', x)
        }, err => {
            listener.terminate();
            console.log(err)
        });
});
/* end block 04 */
