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

const nem2Sdk = require("nem2-sdk");
const operators = require('rxjs/operators');
const rxjs = require('rxjs');

const Account = nem2Sdk.Account,
    AggregateTransaction = nem2Sdk.AggregateTransaction,
    Deadline = nem2Sdk.Deadline,
    HashLockTransaction = nem2Sdk.HashLockTransaction,
    Listener = nem2Sdk.Listener,
    Mosaic = nem2Sdk.Mosaic,
    MosaicId = nem2Sdk.MosaicId,
    NetworkCurrencyMosaic = nem2Sdk.NetworkCurrencyMosaic,
    NetworkType = nem2Sdk.NetworkType,
    PlainMessage = nem2Sdk.PlainMessage,
    PublicAccount = nem2Sdk.PublicAccount,
    TransactionHttp = nem2Sdk.TransactionHttp,
    TransferTransaction = nem2Sdk.TransferTransaction,
    UInt64 = nem2Sdk.UInt64,
    filter = operators.filter,
    mergeMap = operators.mergeMap,
    merge = rxjs.merge;

/* start block 01 */
const alicePrivateKey = process.env.ALICE_PRIVATE_KEY;
const aliceAccount = Account.createFromPrivateKey(alicePrivateKey, NetworkType.MIJIN_TEST);

const ticketDistributorPublicKey = process.env.TICKET_DISTRIBUTOR_PUBLIC_KEY;
const ticketDistributorPublicAccount = PublicAccount.createFromPublicKey(ticketDistributorPublicKey, NetworkType.MIJIN_TEST);

const aliceToTicketDistributorTx = TransferTransaction.create(
    Deadline.create(),
    ticketDistributorPublicAccount.address,
    [NetworkCurrencyMosaic.createRelative(100)],
    PlainMessage.create('send 100 cat.currency to distributor'),
    NetworkType.MIJIN_TEST);

const ticketDistributorToAliceTx = TransferTransaction.create(
    Deadline.create(),
    aliceAccount.address,
    [new Mosaic(new MosaicId('7cdf3b117a3c40cc'), UInt64.fromUint(1))],
    PlainMessage.create('send 1 museum ticket to alice'),
    NetworkType.MIJIN_TEST);
/* end block 01 */

/* start block 02 */
const aggregateTransaction = AggregateTransaction.createBonded(Deadline.create(),
    [aliceToTicketDistributorTx.toAggregate(aliceAccount.publicAccount),
        ticketDistributorToAliceTx.toAggregate(ticketDistributorPublicAccount)],
    NetworkType.MIJIN_TEST);

const networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
const signedTransaction = aliceAccount.sign(aggregateTransaction, networkGenerationHash);
console.log("Aggregate Transaction Hash: " + signedTransaction.hash);
/* end block 02 */

/* start block 03 */
const hashLockTransaction = HashLockTransaction.create(
    Deadline.create(),
    NetworkCurrencyMosaic.createRelative(10),
    UInt64.fromUint(480),
    signedTransaction,
    NetworkType.MIJIN_TEST);

const signedHashLockTransaction = aliceAccount.sign(hashLockTransaction, networkGenerationHash);

const nodeUrl = 'http://localhost:3000';
const transactionHttp = new TransactionHttp(nodeUrl);
const listener = new Listener(nodeUrl);

const announceHashLockTransaction = (signedHashLockTransaction) => {
    return transactionHttp.announce(signedHashLockTransaction);
};

const announceAggregateTransaction = (listener,
                                      signedHashLockTransaction,
                                      signedAggregateTransaction,
                                      senderAddress) => {
    return listener
        .confirmed(senderAddress)
        .pipe(
            filter((transaction) => transaction.transactionInfo !== undefined
                && transaction.transactionInfo.hash === signedHashLockTransaction.hash),
            mergeMap(ignored => {
                listener.terminate();
                return transactionHttp.announceAggregateBonded(signedAggregateTransaction)
            })
        );
};

listener.open().then(() => {
    merge(announceHashLockTransaction(signedHashLockTransaction),
        announceAggregateTransaction(listener, signedHashLockTransaction, signedTransaction, aliceAccount.address))
        .subscribe(x => console.log('Transaction confirmed:', x),
            err=> console.log(err));
});
/* end block 03 */
