/*
 *
 * Copyright 2019 NEM
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
    NamespaceId = nem2Sdk.NamespaceId,
    EmptyMessage = nem2Sdk.EmptyMessage,
    NetworkCurrencyMosaic = nem2Sdk.NetworkCurrencyMosaic;

// 01 - Create Transfer Transaction
const recipientAddress = new NamespaceId('foo');

/* start block 01 */
const transferTransaction = TransferTransaction.create(
    Deadline.create(),
    recipientAddress,
    [NetworkCurrencyMosaic.createRelative(10)],
    EmptyMessage,
    NetworkType.MIJIN_TEST);
/* end block 01 */

// 02 - Signing the transaction
const privateKey = process.env.PRIVATE_KEY;

const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

const signedTransaction = account.sign(transferTransaction);

// 03 - Announcing the transaction
const transactionHttp = new TransactionHttp('http://localhost:3000');

transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
