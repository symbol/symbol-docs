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
var nem2_sdk_1 = require("nem2-sdk");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
/* start block 01 */
var nodeUrl = 'http://localhost:3000';
var metadataHttp = new nem2_sdk_1.MetadataHttp(nodeUrl);
var metadataService = new nem2_sdk_1.MetadataTransactionService(metadataHttp);
var bobPrivateKey = process.env.BOB_PRIVATE_KEY;
var bobAccount = nem2_sdk_1.Account.createFromPrivateKey(bobPrivateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
var alicePublicKey = process.env.ALICE_PUBLIC_KEY;
var alicePublicAccount = nem2_sdk_1.PublicAccount.createFromPublicKey(alicePublicKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
var key = nem2_sdk_1.KeyGenerator.generateUInt64Key('CERT');
var newValue = '000000';
var accountMetadataTransaction = metadataService.createMetadataTransaction(nem2_sdk_1.Deadline.create(), nem2_sdk_1.NetworkType.MIJIN_TEST, nem2_sdk_1.MetadataType.Account, alicePublicAccount, key, newValue, bobAccount.publicAccount);
/* end block 01 */
/* start block 02 */
var networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
var signedAggregateTransaction = accountMetadataTransaction
    .pipe(operators_1.mergeMap(function (transaction) {
    var aggregateTransaction = nem2_sdk_1.AggregateTransaction.createComplete(nem2_sdk_1.Deadline.create(), [transaction.toAggregate(bobAccount.publicAccount)], nem2_sdk_1.NetworkType.MIJIN_TEST, []);
    var signedTransaction = bobAccount.sign(aggregateTransaction, networkGenerationHash);
    return rxjs_1.of(signedTransaction);
}));
var signedAggregateHashLock = signedAggregateTransaction.pipe(operators_1.mergeMap(function (signedAggregateTransaction) {
    var hashLockTransaction = nem2_sdk_1.HashLockTransaction.create(nem2_sdk_1.Deadline.create(), nem2_sdk_1.NetworkCurrencyMosaic.createRelative(10), nem2_sdk_1.UInt64.fromUint(480), signedAggregateTransaction, nem2_sdk_1.NetworkType.MIJIN_TEST);
    var signedTransaction = bobAccount.sign(hashLockTransaction, networkGenerationHash);
    var signedAggregateHashLock = {
        aggregate: signedAggregateTransaction,
        hashLock: signedTransaction
    };
    console.log('Aggregate Transaction Hash:', signedAggregateTransaction.hash + '\n');
    console.log('HashLock Transaction Hash:', signedTransaction.hash + '\n');
    return rxjs_1.of(signedAggregateHashLock);
}));
/* end block 03 */
/* start block 04 */
var listener = new nem2_sdk_1.Listener(nodeUrl);
var transactionHttp = new nem2_sdk_1.TransactionHttp(nodeUrl);
var announceHashLockTransaction = function (signedHashLockTransaction) { return transactionHttp.announce(signedHashLockTransaction); };
var announceAggregateTransaction = function (signedHashLockTransaction, signedAggregateTransaction) {
    return listener
        .confirmed(bobAccount.address)
        .pipe(operators_1.filter(function (transaction) { return transaction.transactionInfo !== undefined
        && transaction.transactionInfo.hash === signedHashLockTransaction.hash; }), operators_1.mergeMap(function (ignored) {
        listener.terminate();
        return transactionHttp.announceAggregateBonded(signedAggregateTransaction);
    }));
};
listener.open().then(function () {
    signedAggregateHashLock.pipe(operators_1.mergeMap(function (signedAggregateHashLock) { return rxjs_1.merge(announceHashLockTransaction(signedAggregateHashLock.hashLock), announceAggregateTransaction(signedAggregateHashLock.hashLock, signedAggregateHashLock.aggregate)); }))
        .subscribe(function (x) { return console.log('Transaction confirmed:', x.message); }, function (err) { return console.log(err); });
});
/* end block 04 */
