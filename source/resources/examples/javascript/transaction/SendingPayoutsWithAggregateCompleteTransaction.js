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
    AggregateTransaction = nem2Sdk.AggregateTransaction,
    TransactionHttp = nem2Sdk.TransactionHttp,
    PlainMessage = nem2Sdk.PlainMessage,
    Address = nem2Sdk.Address,
    XEM = nem2Sdk.XEM;


// 01 - Setup
const transactionHttp = new TransactionHttp('http://localhost:3000');

const privateKey = process.env.PRIVATE_KEY;
const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

const brotherAddress = 'SDG4WG-FS7EQJ-KFQKXM-4IUCQG-PXUW5H-DJVIJB-OXJG';
const brotherAccount = Address.createFromRawAddress(brotherAddress);

const sisterAddress = 'SCGPXB-2A7T4I-W5MQCX-FQY4UQ-W5JNU5-F55HGK-HBUN';
const sisterAccount = Address.createFromRawAddress(sisterAddress);

const amount = XEM.createRelative(10); // 10 xem represent 10 000 000 micro xem

const brotherTransferTransaction = TransferTransaction.create(Deadline.create(), brotherAccount, [amount], PlainMessage.create('payout'), NetworkType.MIJIN_TEST);
const sisterTransferTransaction = TransferTransaction.create(Deadline.create(), sisterAccount, [amount], PlainMessage.create('payout'), NetworkType.MIJIN_TEST);

const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [brotherTransferTransaction.toAggregate(account.publicAccount),
        sisterTransferTransaction.toAggregate(account.publicAccount)],
    NetworkType.MIJIN_TEST,
    []
);

// 02 - Sign and announce aggregate complete transaction
const signedTransaction = account.sign(aggregateTransaction);

transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));