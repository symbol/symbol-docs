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
/* start block 01 */
const rawRecipientAddress = process.env.RECIPIENT_ADDRESS;
const recipientAddress = nem2_sdk_1.Address.createFromRawAddress(rawRecipientAddress);
const transferTransaction = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), recipientAddress, [nem2_sdk_1.NetworkCurrencyMosaic.createRelative(10)], nem2_sdk_1.EmptyMessage, nem2_sdk_1.NetworkType.MIJIN_TEST);
const privateKey = process.env.PRIVATE_KEY;
const account = nem2_sdk_1.Account.createFromPrivateKey(privateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
const signedTransaction = account.sign(transferTransaction, networkGenerationHash);
/* end block 01 */
/* start block 02 */
const transactionHttp = new nem2_sdk_1.TransactionHttp('http://0.0.0.0:9000');
transactionHttp
    .announceSync(signedTransaction)
    .subscribe(x => {
    console.log(x);
    // TODO: send email to Bob
}, err => {
    console.error(err);
});
/* end block 02 */
