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
    NetworkType = nem2Sdk.NetworkType,
    AccountHttp = nem2Sdk.AccountHttp,
    TransactionHttp = nem2Sdk.TransactionHttp,
    CosignatureTransaction = nem2Sdk.CosignatureTransaction,
    mergeMap = operators.mergeMap,
    filter = operators.filter,
    map = operators.map;

const cosignAggregateBondedTransaction = (transaction, account)  => {
    const cosignatureTransaction = CosignatureTransaction.create(transaction);
    return account.signCosignatureTransaction(cosignatureTransaction);
};

const privateKey = process.env.PRIVATE_KEY;
const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

const nodeUrl = 'http://localhost:3000';
const accountHttp = new AccountHttp(nodeUrl);
const transactionHttp = new TransactionHttp(nodeUrl);

accountHttp
    .aggregateBondedTransactions(account.publicAccount)
    .pipe(
        mergeMap((_) => _),
        filter((_) => !_.signedByAccount(account.publicAccount)),
        map(transaction => cosignAggregateBondedTransaction(transaction, account)),
        mergeMap(cosignatureSignedTransaction => transactionHttp.announceAggregateBondedCosignature(cosignatureSignedTransaction))
    )
    .subscribe(announcedTransaction => console.log(announcedTransaction),
        err => console.error(err));