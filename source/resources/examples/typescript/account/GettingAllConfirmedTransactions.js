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
var nodeUrl = 'http://localhost:3000';
var accountHttp = new nem2_sdk_1.AccountHttp(nodeUrl);
var pageSize = 100;
var allTransactions = true;
var rawAddress = process.env.ADDRESS;
var address = nem2_sdk_1.Address.createFromRawAddress(rawAddress);
accountHttp
    .getAccountTransactions(address, new nem2_sdk_1.QueryParams(pageSize, undefined))
    .pipe(operators_1.expand(function (transactions) { return transactions.length >= pageSize && allTransactions
    ? accountHttp.getAccountTransactions(address, new nem2_sdk_1.QueryParams(pageSize, transactions[transactions.length - 1].transactionInfo.id))
    : rxjs_1.EMPTY; }), operators_1.concatMap(function (transactions) { return transactions; }), operators_1.toArray())
    .subscribe(function (transactions) {
    console.log(transactions);
}, function (err) { return console.log(err); });
