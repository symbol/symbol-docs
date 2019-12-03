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
/* start block 01 */
var cosignAggregateBondedTransaction = function (transaction, account) {
    var cosignatureTransaction = nem2_sdk_1.CosignatureTransaction.create(transaction);
    return account.signCosignatureTransaction(cosignatureTransaction);
};
/* end block 01 */
/* start block 02 */
var privateKey = process.env.PRIVATE_KEY;
var account = nem2_sdk_1.Account.createFromPrivateKey(privateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
var nodeUrl = 'http://localhost:3000';
var accountHttp = new nem2_sdk_1.AccountHttp(nodeUrl);
var transactionHttp = new nem2_sdk_1.TransactionHttp(nodeUrl);
accountHttp
    .getAccountPartialTransactions(account.address)
    .pipe(operators_1.mergeMap(function (_) { return _; }), operators_1.filter(function (_) { return !_.signedByAccount(account.publicAccount); }), operators_1.map(function (transaction) { return cosignAggregateBondedTransaction(transaction, account); }), operators_1.mergeMap(function (cosignatureSignedTransaction) { return transactionHttp.announceAggregateBondedCosignature(cosignatureSignedTransaction); }))
    .subscribe(function (announcedTransaction) { return console.log(announcedTransaction); }, function (err) { return console.error(err); });
/* end block 02 */
