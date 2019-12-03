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
var alicePrivateKey = process.env.ALICE_PRIVATE_KEY;
var aliceAccount = nem2_sdk_1.Account.createFromPrivateKey(alicePrivateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
var ticketDistributorPublicKey = process.env.TICKET_DISTRIBUTOR_PUBLIC_KEY;
var ticketDistributorPublicAccount = nem2_sdk_1.PublicAccount.createFromPublicKey(ticketDistributorPublicKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
var aliceToTicketDistributorTx = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), ticketDistributorPublicAccount.address, [nem2_sdk_1.NetworkCurrencyMosaic.createRelative(100)], nem2_sdk_1.PlainMessage.create('send 100 cat.currency to distributor'), nem2_sdk_1.NetworkType.MIJIN_TEST);
var ticketDistributorToAliceTx = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), aliceAccount.address, [new nem2_sdk_1.Mosaic(new nem2_sdk_1.MosaicId('7cdf3b117a3c40cc'), nem2_sdk_1.UInt64.fromUint(1))], nem2_sdk_1.PlainMessage.create('send 1 museum ticket to alice'), nem2_sdk_1.NetworkType.MIJIN_TEST);
/* end block 01 */
/* start block 02 */
var aggregateTransaction = nem2_sdk_1.AggregateTransaction.createBonded(nem2_sdk_1.Deadline.create(), [aliceToTicketDistributorTx.toAggregate(aliceAccount.publicAccount),
    ticketDistributorToAliceTx.toAggregate(ticketDistributorPublicAccount)], nem2_sdk_1.NetworkType.MIJIN_TEST);
var networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
var signedTransaction = aliceAccount.sign(aggregateTransaction, networkGenerationHash);
console.log("Aggregate Transaction Hash: " + signedTransaction.hash);
/* end block 02 */
/* start block 03 */
var hashLockTransaction = nem2_sdk_1.HashLockTransaction.create(nem2_sdk_1.Deadline.create(), nem2_sdk_1.NetworkCurrencyMosaic.createRelative(10), nem2_sdk_1.UInt64.fromUint(480), signedTransaction, nem2_sdk_1.NetworkType.MIJIN_TEST);
var signedHashLockTransaction = aliceAccount.sign(hashLockTransaction, networkGenerationHash);
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
    rxjs_1.merge(announceHashLockTransaction(signedHashLockTransaction), announceAggregateTransaction(listener, signedHashLockTransaction, signedTransaction, aliceAccount.address))
        .subscribe(function (x) { return console.log('Transaction confirmed:', x.message); }, function (err) { return console.log(err); });
});
/* end block 03 */
