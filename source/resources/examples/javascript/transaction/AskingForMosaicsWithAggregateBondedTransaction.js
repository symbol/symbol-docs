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
const Account = nem2Sdk.Account,
    Deadline = nem2Sdk.Deadline,
    NetworkType = nem2Sdk.NetworkType,
    TransferTransaction = nem2Sdk.TransferTransaction,
    TransactionHttp = nem2Sdk.TransactionHttp,
    PlainMessage = nem2Sdk.PlainMessage,
    EmptyMessage = nem2Sdk.EmptyMessage,
    XEM = nem2Sdk.XEM,
    AggregateTransaction = nem2Sdk.AggregateTransaction,
    LockFundsTransaction = nem2Sdk.LockFundsTransaction,
    UInt64 = nem2Sdk.UInt64,
    Listener = nem2Sdk.Listener;

// Replace with private key
const alicePrivateKey = process.env.ALICE_PRIVATE_KEY;

// Replace with public key
const bobPublicKey = 'F82527075248B043994F1CAFD965F3848324C9ABFEC506BC05FBCF5DD7307C9D';


const aliceAccount = Account.createFromPrivateKey(alicePrivateKey, NetworkType.MIJIN_TEST);
const bobAccount = PublicAccount.createFromPublicKey(bobPublicKey, NetworkType.MIJIN_TEST);

const transferTransaction1 = TransferTransaction.create(
    Deadline.create(),
    bobAccount.address,
    [],
    PlainMessage.create('send me 20 XEM'),
    NetworkType.MIJIN_TEST,
);

const transferTransaction2 = TransferTransaction.create(
    Deadline.create(),
    aliceAccount.address,
    [XEM.createRelative(20)],
    EmptyMessage,
    NetworkType.MIJIN_TEST,
);

const aggregateTransaction = AggregateTransaction.createBonded(
    Deadline.create(),
    [
        transferTransaction1.toAggregate(aliceAccount.publicAccount),
        transferTransaction2.toAggregate(bobAccount)
    ],
    NetworkType.MIJIN_TEST
);

const signedTransaction = aliceAccount.sign(aggregateTransaction);

//Creating the lock funds transaction and announce it
const lockFundsTransaction = LockFundsTransaction.create(
    Deadline.create(),
    XEM.createRelative(10),
    UInt64.fromUint(480),
    signedTransaction,
    NetworkType.MIJIN_TEST);

const lockFundsTransactionSigned = aliceAccount.sign(lockFundsTransaction);

const transactionHttp = new TransactionHttp('http://localhost:3000');

const listener = new Listener('http://localhost:3000');

listener.open().then(() => {

    transactionHttp.announce(lockFundsTransactionSigned).subscribe(
        x => console.log(x),
        err => console.error(err));

    listener.confirmed(aliceAccount.address)
        .filter((transaction) => transaction.transactionInfo !== undefined
            && transaction.transactionInfo.hash === lockFundsTransactionSigned.hash)
        .flatMap(ignored => transactionHttp.announceAggregateBonded(signedTransaction))
        .subscribe(announcedAggregateBonded => console.log(announcedAggregateBonded),
            err => console.error(err));
});