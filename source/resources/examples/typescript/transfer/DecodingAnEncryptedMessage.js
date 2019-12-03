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
const nem2_sdk_1 = require("nem2-sdk");
const operators_1 = require("rxjs/operators");
/* start block 01 */
// replace with network type
const networkType = nem2_sdk_1.NetworkType.TEST_NET;
// replace with certificate private key
const certificatePrivateKey = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
const certificateAccount = nem2_sdk_1.Account.createFromPrivateKey(certificatePrivateKey, networkType);
// replace with alice public key
const alicePublicKey = '6C0350A10724FC325A1F06CEFC4CA14464BC472F566842D22418AEE0F8746B4C';
const alicePublicAccount = nem2_sdk_1.PublicAccount.createFromPublicKey(alicePublicKey, networkType);
// replace with nodeUrl
const nodeUrl = 'http://api-01.us-east-1.nemtech.network:3000/';
const transactionHttp = new nem2_sdk_1.TransactionHttp(nodeUrl);
// replace with transaction hash
const transactionHash = '0000000000000000000000000000000000000000000000000000000000000000';
transactionHttp
    .getTransaction(transactionHash)
    .pipe(operators_1.map(x => x))
    .subscribe(transaction => {
    console.log("Raw message: ", transaction.message.payload);
    console.log("Message: ", certificateAccount.decryptMessage(transaction.message, alicePublicAccount, networkType).payload);
}, (err => console.log(err)));
/* end block 01 */
