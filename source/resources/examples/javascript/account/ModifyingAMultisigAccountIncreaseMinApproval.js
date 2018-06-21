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
    ModifyMultisigAccountTransaction = nem2Sdk.ModifyMultisigAccountTransaction,
    NetworkType = nem2Sdk.NetworkType,
    PublicAccount = nem2Sdk.PublicAccount,
    Deadline = nem2Sdk.Deadline,
    AggregateTransaction = nem2Sdk.AggregateTransaction,
    TransactionHttp = nem2Sdk.TransactionHttp;

// 01 - Setup
const transactionHttp = new TransactionHttp('http://localhost:3000');

const cosignatoryPrivateKey = process.env.COSIGNATORY_1_PRIVATE_KEY;
const cosignatoryAccount = Account.createFromPrivateKey(cosignatoryPrivateKey, NetworkType.MIJIN_TEST);

const multisigAccountPublicKey = '202B3861F34F6141E120742A64BC787D6EBC59C9EFB996F4856AA9CBEE11CD31';
const multisigAccount = PublicAccount.createFromPublicKey(multisigAccountPublicKey, NetworkType.MIJIN_TEST);

// 02 - Create ModifyMultisigAccountTransaction
const modifyMultisigAccountTransaction = ModifyMultisigAccountTransaction.create(
    Deadline.create(),
    1,
    0,
    [],
    NetworkType.MIJIN_TEST);

// 03 - Wrap ModifyMultisigAccountTransaction inside an aggregate transaction and announce it
const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [modifyMultisigAccountTransaction.toAggregate(multisigAccount)],
    NetworkType.MIJIN_TEST,
    []);

const signedTransaction = cosignatoryAccount.sign(aggregateTransaction);

transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));