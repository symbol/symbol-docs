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
var rawAddress = process.env.ADDRESS;
var originAddress = nem2_sdk_1.Address.createFromRawAddress(rawAddress);
var recipientRawAddress = process.env.ADDRESS;
var recipientAddress = nem2_sdk_1.Address.createFromRawAddress(recipientRawAddress);
var mosaicIdHex = process.env.MOSAIC_ID_HEX;
var divisibility = 6;
var mosaicId = new nem2_sdk_1.MosaicId(mosaicIdHex);
var accountHttp = new nem2_sdk_1.AccountHttp('http://localhost:3000');
accountHttp
    .getAccountOutgoingTransactions(originAddress)
    .pipe(operators_1.mergeMap(function (_) { return _; }), // Transform transaction array to single transactions to process them
operators_1.filter(function (_) { return _.type === nem2_sdk_1.TransactionType.TRANSFER; }), // Filter transfer transactions
operators_1.map(function (_) { return _; }), // Map transaction as transfer transaction
operators_1.filter(function (_) { return _.recipientAddress instanceof nem2_sdk_1.Address && _.recipientAddress.equals(recipientAddress); }), // Filter transactions from to account
operators_1.filter(function (_) { return _.mosaics.length === 1 && _.mosaics[0].id.equals(mosaicId); }), // Filter mosaicId transactions
operators_1.map(function (_) { return _.mosaics[0].amount.compact() / Math.pow(10, divisibility); }), // Map relative amount
operators_1.toArray(), // Add all mosaics amounts into one array
operators_1.map(function (_) { return _.reduce(function (a, b) { return a + b; }, 0); }))
    .subscribe(function (total) { return console.log('Total ' + mosaicId.toHex() + ' sent to account', recipientAddress.pretty(), 'is:', total); }, function (err) { return console.error(err); });
/* end block 01 */
