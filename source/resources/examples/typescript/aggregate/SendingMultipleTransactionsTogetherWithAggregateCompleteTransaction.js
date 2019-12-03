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
/* start block 01 */
var privateKey = process.env.PRIVATE_KEY;
var account = nem2_sdk_1.Account.createFromPrivateKey(privateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
var aliceAddress = process.env.ALICE_ADDRESS;
var aliceAccount = nem2_sdk_1.Address.createFromRawAddress(aliceAddress);
var bobAddress = process.env.BOB_ADDRESS;
var bobAccount = nem2_sdk_1.Address.createFromRawAddress(bobAddress);
var amount = nem2_sdk_1.NetworkCurrencyMosaic.createRelative(10);
var aliceTransferTransaction = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), aliceAccount, [amount], nem2_sdk_1.PlainMessage.create('payout'), nem2_sdk_1.NetworkType.MIJIN_TEST);
var bobTransferTransaction = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), bobAccount, [amount], nem2_sdk_1.PlainMessage.create('payout'), nem2_sdk_1.NetworkType.MIJIN_TEST);
/* end block 01 */
/* start block 02 */
var aggregateTransaction = nem2_sdk_1.AggregateTransaction.createComplete(nem2_sdk_1.Deadline.create(), [aliceTransferTransaction.toAggregate(account.publicAccount),
    bobTransferTransaction.toAggregate(account.publicAccount)], nem2_sdk_1.NetworkType.MIJIN_TEST, []);
/* end block 02 */
/* start block 03 */
var networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
var signedTransaction = account.sign(aggregateTransaction, networkGenerationHash);
var transactionHttp = new nem2_sdk_1.TransactionHttp('http://localhost:3000');
transactionHttp
    .announce(signedTransaction)
    .subscribe(function (x) { return console.log(x); }, function (err) { return console.error(err); });
/* end block 03 */
