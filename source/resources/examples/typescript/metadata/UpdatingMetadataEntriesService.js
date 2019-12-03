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
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
/* start block 01 */
// replace with network type
const networkType = nem2_sdk_1.NetworkType.TEST_NET;
// replace with bob private key
const bobPrivateKey = '0000000000000000000000000000000000000000000000000000000000000000';
const bobAccount = nem2_sdk_1.Account.createFromPrivateKey(bobPrivateKey, networkType);
// replace with alice public key
const alicePublicKey = 'E59EF184A612D4C3C4D89B5950EB57262C69862B2F96E59C5043BF41765C482F';
const alicePublicAccount = nem2_sdk_1.PublicAccount.createFromPublicKey(alicePublicKey, networkType);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.nemtech.network:3000';
const metadataHttp = new nem2_sdk_1.MetadataHttp(nodeUrl);
const metadataService = new nem2_sdk_1.MetadataTransactionService(metadataHttp);
// replace with key and new value
const key = nem2_sdk_1.KeyGenerator.generateUInt64Key('CERT');
const newValue = '000000';
const accountMetadataTransaction = metadataService.createMetadataTransaction(nem2_sdk_1.Deadline.create(), networkType, nem2_sdk_1.MetadataType.Account, alicePublicAccount, key, newValue, bobAccount.publicAccount);
/* end block 01 */
/* start block 02 */
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '6C0350A10724FC325A1F06CEFC4CA14464BC472F566842D22418AEE0F8746B4C';
const signedAggregateTransaction = accountMetadataTransaction
    .pipe(operators_1.mergeMap(transaction => {
    const aggregateTransaction = nem2_sdk_1.AggregateTransaction.createComplete(nem2_sdk_1.Deadline.create(), [transaction.toAggregate(bobAccount.publicAccount)], networkType, []);
    const signedTransaction = bobAccount.sign(aggregateTransaction, networkGenerationHash);
    return rxjs_1.of(signedTransaction);
}));
const signedAggregateHashLock = signedAggregateTransaction.pipe(operators_1.mergeMap(signedAggregateTransaction => {
    const hashLockTransaction = nem2_sdk_1.HashLockTransaction.create(nem2_sdk_1.Deadline.create(), nem2_sdk_1.NetworkCurrencyMosaic.createRelative(10), nem2_sdk_1.UInt64.fromUint(480), signedAggregateTransaction, networkType);
    const signedTransaction = bobAccount.sign(hashLockTransaction, networkGenerationHash);
    const signedAggregateHashLock = {
        aggregate: signedAggregateTransaction,
        hashLock: signedTransaction
    };
    console.log('Aggregate Transaction Hash:', signedAggregateTransaction.hash + '\n');
    console.log('HashLock Transaction Hash:', signedTransaction.hash + '\n');
    return rxjs_1.of(signedAggregateHashLock);
}));
/* end block 03 */
/* start block 04 */
const listener = new nem2_sdk_1.Listener(nodeUrl);
const transactionHttp = new nem2_sdk_1.TransactionHttp(nodeUrl);
const announceHashLockTransaction = (signedHashLockTransaction) => transactionHttp.announce(signedHashLockTransaction);
const announceAggregateTransaction = (signedHashLockTransaction, signedAggregateTransaction) => {
    return listener
        .confirmed(bobAccount.address)
        .pipe(operators_1.filter((transaction) => transaction.transactionInfo !== undefined
        && transaction.transactionInfo.hash === signedHashLockTransaction.hash), operators_1.mergeMap(ignored => {
        listener.terminate();
        return transactionHttp.announceAggregateBonded(signedAggregateTransaction);
    }));
};
listener.open().then(() => {
    signedAggregateHashLock.pipe(operators_1.mergeMap(signedAggregateHashLock => rxjs_1.merge(announceHashLockTransaction(signedAggregateHashLock.hashLock), announceAggregateTransaction(signedAggregateHashLock.hashLock, signedAggregateHashLock.aggregate))))
        .subscribe(x => console.log('Transaction confirmed:', x.message), err => console.log(err));
});
/* end block 04 */
