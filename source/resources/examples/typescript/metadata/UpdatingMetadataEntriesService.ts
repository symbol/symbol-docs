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

import {of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {
    Account,
    AggregateTransaction,
    Deadline,
    HashLockTransaction,
    KeyGenerator,
    MetadataHttp,
    MetadataTransactionService,
    MetadataType,
    Mosaic,
    MosaicId,
    NetworkType,
    PublicAccount,
    RepositoryFactoryHttp,
    SignedTransaction,
    TransactionService,
    UInt64,
} from 'symbol-sdk';

/* start block 01 */
// replace with network type
const networkType = NetworkType.TEST_NET;
// replace with bob private key
const bobPrivateKey = '0000000000000000000000000000000000000000000000000000000000000000';
const bobAccount = Account.createFromPrivateKey(bobPrivateKey, networkType);
// replace with alice public key
const alicePublicKey = 'D04AB232742BB4AB3A1368BD4615E4E6D0224AB71A016BAF8520A332C9778737';
const alicePublicAccount = PublicAccount.createFromPublicKey(alicePublicKey, networkType);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
const metadataHttp = new MetadataHttp(nodeUrl);
const metadataService = new MetadataTransactionService(metadataHttp);

// replace with key and new value
const key = KeyGenerator.generateUInt64Key('CERT');
const newValue = '000000';

const accountMetadataTransaction = metadataService.createMetadataTransaction(
    Deadline.create(),
    networkType,
    MetadataType.Account,
    alicePublicAccount.address,
    key,
    newValue,
    bobAccount.publicAccount.address);
/* end block 01 */

/* start block 02 */
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash = '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';
const signedAggregateTransaction = accountMetadataTransaction
    .pipe(
        mergeMap((transaction) => {
            const aggregateTransaction = AggregateTransaction.createBonded(
                Deadline.create(),
                [transaction.toAggregate(bobAccount.publicAccount)],
                networkType,
                [],
                UInt64.fromUint(2000000));
            const signedTransaction = bobAccount.sign(aggregateTransaction, networkGenerationHash);
            return of(signedTransaction);
        }));
/* end block 02 */

/* start block 03 */
interface SignedAggregateHashLock {
    readonly aggregate: SignedTransaction;
    readonly hashLock: SignedTransaction;
}

// replace with symbol.xym id
const networkCurrencyMosaicId = new MosaicId('5E62990DCAC5BE8A');
// replace with network currency divisibility
const networkCurrencyDivisibility = 6;

const signedAggregateHashLock = signedAggregateTransaction.pipe(
    mergeMap((signedAggregateTransaction) => {
        const hashLockTransaction = HashLockTransaction.create(
            Deadline.create(),
            new Mosaic(networkCurrencyMosaicId,
                UInt64.fromUint(10 * Math.pow(10, networkCurrencyDivisibility))),
            UInt64.fromUint(480),
            signedAggregateTransaction,
            networkType,
            UInt64.fromUint(2000000));
        const signedTransaction = bobAccount.sign(hashLockTransaction, networkGenerationHash);
        const signedAggregateHashLock: SignedAggregateHashLock = {
            aggregate: signedAggregateTransaction,
            hashLock: signedTransaction,
        };
        console.log('Aggregate Transaction Hash:', signedAggregateTransaction.hash + '\n');
        console.log('HashLock Transaction Hash:', signedTransaction.hash + '\n');
        return of(signedAggregateHashLock);
    }));
/* end block 03 */

/* start block 04 */
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const listener = repositoryFactory.createListener();
const receiptHttp = repositoryFactory.createReceiptRepository();
const transactionHttp = repositoryFactory.createTransactionRepository();
const transactionService = new TransactionService(transactionHttp, receiptHttp);

listener.open().then(() => {
    signedAggregateHashLock.pipe(
        mergeMap((signedAggregateHashLock) =>
            transactionService.announceHashLockAggregateBonded(
                signedAggregateHashLock.hashLock,
                signedAggregateHashLock.aggregate,
                listener),
        ),
    ).subscribe(
        (ignored) => console.log('Transaction confirmed'),
        (err) => console.log(err),
        () => listener.close());
});
/* end block 04 */
