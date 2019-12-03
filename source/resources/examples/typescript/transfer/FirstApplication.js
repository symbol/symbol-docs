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
// replace with mosaicId
var mosaicIdHex = '7cdf3b117a3c40cc';
var mosaicId = new nem2_sdk_1.MosaicId(mosaicIdHex);
// replace with customer address
var rawAddress = 'TBULEA-UG2CZQ-ISUR44-2HWA6U-AKGWIX-HDABJV-IPS4';
var recipientAddress = nem2_sdk_1.Address.createFromRawAddress(rawAddress);
// replace with network type
var networkType = nem2_sdk_1.NetworkType.TEST_NET;
var transferTransaction = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), recipientAddress, [new nem2_sdk_1.Mosaic(mosaicId, nem2_sdk_1.UInt64.fromUint(1))], nem2_sdk_1.PlainMessage.create('enjoy your ticket'), networkType);
/* end block 01 */
/* start block 02 */
// replace with ticket vendor private key
var privateKey = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
// replace with meta.generationHash (nodeUrl + '/block/1')
var networkGenerationHash = '6C0350A10724FC325A1F06CEFC4CA14464BC472F566842D22418AEE0F8746B4C';
var account = nem2_sdk_1.Account.createFromPrivateKey(privateKey, networkType);
var signedTransaction = account.sign(transferTransaction, networkGenerationHash);
/* end block 02 */
/* start block 03 */
// replace with nodeUrl
var nodeUrl = 'http://api-01.us-east-1.nemtech.network:3000';
var transactionHttp = new nem2_sdk_1.TransactionHttp(nodeUrl);
transactionHttp
    .announce(signedTransaction)
    .subscribe(function (x) { return console.log(x); }, function (err) { return console.error(err); });
/* end block 03 */
