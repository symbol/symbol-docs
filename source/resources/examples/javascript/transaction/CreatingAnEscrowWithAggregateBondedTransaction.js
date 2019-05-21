/*
 *
 * Copyright 2018 NEM
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

const Account = nem2Sdk.Account,
    Deadline = nem2Sdk.Deadline,
    NetworkType = nem2Sdk.NetworkType,
    TransferTransaction = nem2Sdk.TransferTransaction,
    TransactionHttp = nem2Sdk.TransactionHttp,
    PlainMessage = nem2Sdk.PlainMessage,
    NetworkCurrencyMosaic = nem2Sdk.NetworkCurrencyMosaic,
    AggregateTransaction = nem2Sdk.AggregateTransaction,
    HashLockTransaction = nem2Sdk.HashLockTransaction,
    UInt64 = nem2Sdk.UInt64,
    Listener = nem2Sdk.Listener,
    Mosaic = nem2Sdk.Mosaic,
    MosaicId = nem2Sdk.MosaicId,
    PublicAccount = nem2Sdk.PublicAccount,
    filter = operators.filter,
    mergeMap = operators.mergeMap;

/* start block 01 */
const nodeUrl = 'http://localhost:3000';
const transactionHttp = new TransactionHttp(nodeUrl);
const listener = new Listener(nodeUrl);

const alicePrivateKey = process.env.PRIVATE_KEY;
const aliceAccount = Account.createFromPrivateKey(alicePrivateKey, NetworkType.MIJIN_TEST);

const ticketDistributorPublicKey = 'F82527075248B043994F1CAFD965F3848324C9ABFEC506BC05FBCF5DD7307C9D';
const ticketDistributorPublicAccount = PublicAccount.createFromPublicKey(ticketDistributorPublicKey, NetworkType.MIJIN_TEST);

const aliceToTicketDistributorTx = TransferTransaction.create(
    Deadline.create(),
    ticketDistributorPublicAccount.address,
    [NetworkCurrencyMosaic.createRelative(100)],
    PlainMessage.create('send 100 xem to distributor'),
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
    [aliceToTicketDistributorTx.toAggregate(aliceAccount.publicAccount),git reset --soft HEAD^1
        ticketDistributorToAliceTx.toAggregate(ticketDistributorPublicAccount)],
    NetworkType.MIJIN_TEST);

const signedTransaction = aliceAccount.sign(aggregateTransaction);
console.log("Aggregate Transaction Hash: " + signedTransaction.hash);
/* end block 02 */

/* start block 03 */
const hashLockTransaction = HashLockTransaction.create(
    Deadline.create(),
    new Mosaic(
        new MosaicId('0dc67fbe1cad29e3'), //Replace with your network currency mosaic id
        UInt64.fromUint(10000000)
    ),
    UInt64.fromUint(480),
    signedTransaction,
    NetworkType.MIJIN_TEST);

const hashLockTransactionSigned = aliceAccount.sign(hashLockTransaction);

listener.open().then(() => {

    transactionHttp
        .announce(hashLockTransactionSigned)
        .subscribe(x => console.log(x), err => console.error(err));

    listener
        .confirmed(aliceAccount.address)
        .pipe(
            filter((transaction) => transaction.transactionInfo !== undefined
                && transaction.transactionInfo.hash === hashLockTransactionSigned.hash),
            mergeMap(ignored => transactionHttp.announceAggregateBonded(signedTransaction))
        )
        .subscribe(announcedAggregateBonded => console.log(announcedAggregateBonded),
            err => console.error(err));
});
/* end block 03 */
