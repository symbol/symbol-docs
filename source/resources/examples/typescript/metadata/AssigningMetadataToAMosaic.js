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
var companyPrivateKey = process.env.COMPANY_PRIVATE_KEY;
var companyAccount = nem2_sdk_1.Account.createFromPrivateKey(companyPrivateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
var mosaicId = new nem2_sdk_1.NamespaceId('cc.shares');
var isin = 'US00000000';
var isinMetadataTransaction = nem2_sdk_1.MosaicMetadataTransaction.create(nem2_sdk_1.Deadline.create(), companyAccount.publicKey, nem2_sdk_1.KeyGenerator.generateUInt64Key('ISIN'), mosaicId, isin.length, isin, nem2_sdk_1.NetworkType.MIJIN_TEST);
/* end block 01 */
/* start block 02 */
var name = 'ComfyClothingCompany';
var nameMetadataTransaction = nem2_sdk_1.MosaicMetadataTransaction.create(nem2_sdk_1.Deadline.create(), companyAccount.publicKey, nem2_sdk_1.KeyGenerator.generateUInt64Key('NAME'), mosaicId, name.length, name, nem2_sdk_1.NetworkType.MIJIN_TEST);
/* end block 02 */
/* start block 03 */
var aggregateTransaction = nem2_sdk_1.AggregateTransaction.createComplete(nem2_sdk_1.Deadline.create(), [isinMetadataTransaction.toAggregate(companyAccount.publicAccount),
    nameMetadataTransaction.toAggregate(companyAccount.publicAccount)], nem2_sdk_1.NetworkType.MIJIN_TEST, []);
/* end block 03 */
/* start block 04 */
var networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
var signedTransaction = companyAccount.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
var nodeUrl = 'http://localhost:3000';
var transactionHttp = new nem2_sdk_1.TransactionHttp(nodeUrl);
transactionHttp
    .announce(signedTransaction)
    .subscribe(function (x) { return console.log(x); }, function (err) { return console.error(err); });
/* end block 04 */
