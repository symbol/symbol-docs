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
const certificatePrivateAccount = process.env.CERTIFICATE_PRIVATE_KEY;
const certificateAccount = nem2_sdk_1.Account.createFromPrivateKey(certificatePrivateAccount, nem2_sdk_1.NetworkType.MIJIN_TEST);
const alicePublicKey = process.env.ALICE_PUBLIC_KEY;
const alicePublicAccount = nem2_sdk_1.PublicAccount.createFromPublicKey(alicePublicKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const transactionHttp = new nem2_sdk_1.TransactionHttp('http://localhost:3000');
const transactionHash = process.env.TRANSACTION_HASH;
transactionHttp
    .getTransaction(transactionHash)
    .pipe(operators_1.map(x => x))
    .subscribe(transaction => {
    console.log("Raw message: ", transaction.message.payload);
    console.log("Message: ", certificateAccount.decryptMessage(transaction.message, alicePublicAccount, nem2_sdk_1.NetworkType.MIJIN_TEST).payload);
}, (err => console.log(err)));
/* end block 01 */
