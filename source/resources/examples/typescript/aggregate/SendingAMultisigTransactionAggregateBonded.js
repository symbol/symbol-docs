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
var cosignatoryPrivateKey = process.env.COSIGNATORY_1_PRIVATE_KEY;
var cosignatoryAccount = nem2_sdk_1.Account.createFromPrivateKey(cosignatoryPrivateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
var multisigAccountPublicKey = process.env.MULTISIG_PUBLIC_KEY;
var multisigAccount = nem2_sdk_1.PublicAccount.createFromPublicKey(multisigAccountPublicKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
var recipientAddress = nem2_sdk_1.Address.createFromRawAddress('SD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54');
var transferTransaction = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), recipientAddress, [nem2_sdk_1.NetworkCurrencyMosaic.createRelative(10)], nem2_sdk_1.PlainMessage.create('sending 10 cat.currency'), nem2_sdk_1.NetworkType.MIJIN_TEST);
/* start block 01 */
var aggregateTransaction = nem2_sdk_1.AggregateTransaction.createBonded(nem2_sdk_1.Deadline.create(), [transferTransaction.toAggregate(multisigAccount)], nem2_sdk_1.NetworkType.MIJIN_TEST);
var networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
var signedTransaction = cosignatoryAccount.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
/* end block 01 */
/* start block 02 */
var hashLockTransaction = nem2_sdk_1.HashLockTransaction.create(nem2_sdk_1.Deadline.create(), nem2_sdk_1.NetworkCurrencyMosaic.createRelative(10), nem2_sdk_1.UInt64.fromUint(480), signedTransaction, nem2_sdk_1.NetworkType.MIJIN_TEST);
var signedHashLockTransaction = cosignatoryAccount.sign(hashLockTransaction, networkGenerationHash);
var nodeUrl = 'http://localhost:3000';
var transactionHttp = new nem2_sdk_1.TransactionHttp(nodeUrl);
var listener = new nem2_sdk_1.Listener(nodeUrl);
var announceHashLockTransaction = function (signedHashLockTransaction) {
    return transactionHttp.announce(signedHashLockTransaction);
};
var announceAggregateTransaction = function (listener, signedHashLockTransaction, signedAggregateTransaction, senderAddress) {
    return listener
        .confirmed(senderAddress)
        .pipe(operators_1.filter(function (transaction) { return transaction.transactionInfo !== undefined
        && transaction.transactionInfo.hash === signedHashLockTransaction.hash; }), operators_1.mergeMap(function (ignored) {
        listener.terminate();
        return transactionHttp.announceAggregateBonded(signedAggregateTransaction);
    }));
};
listener.open().then(function () {
    rxjs_1.merge(announceHashLockTransaction(signedHashLockTransaction), announceAggregateTransaction(listener, signedHashLockTransaction, signedTransaction, cosignatoryAccount.address))
        .subscribe(function (x) { return console.log('Transaction confirmed:', x.message); }, function (err) { return console.log(err); });
});
/* end block 02 */
