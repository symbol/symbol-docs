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
// replace with network type
const networkType = nem2_sdk_1.NetworkType.TEST_NET;
// replace with sender private key
const privateKey = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
const account = nem2_sdk_1.Account.createFromPrivateKey(privateKey, networkType);
// replace with address
const aliceAddress = 'TBULEA-UG2CZQ-ISUR44-2HWA6U-AKGWIX-HDABJV-IPS4';
const aliceAccount = nem2_sdk_1.Address.createFromRawAddress(aliceAddress);
// replace with address
const bobAddress = 'TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP';
const bobAccount = nem2_sdk_1.Address.createFromRawAddress(bobAddress);
const amount = nem2_sdk_1.NetworkCurrencyMosaic.createRelative(10);
const aliceTransferTransaction = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), aliceAccount, [amount], nem2_sdk_1.PlainMessage.create('payout'), networkType);
const bobTransferTransaction = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), bobAccount, [amount], nem2_sdk_1.PlainMessage.create('payout'), networkType);
/* end block 01 */
/* start block 02 */
const aggregateTransaction = nem2_sdk_1.AggregateTransaction.createComplete(nem2_sdk_1.Deadline.create(), [aliceTransferTransaction.toAggregate(account.publicAccount),
    bobTransferTransaction.toAggregate(account.publicAccount)], networkType, []);
/* end block 02 */
/* start block 03 */
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '6C0350A10724FC325A1F06CEFC4CA14464BC472F566842D22418AEE0F8746B4C';
const signedTransaction = account.sign(aggregateTransaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.nemtech.network:3000';
const transactionHttp = new nem2_sdk_1.TransactionHttp(nodeUrl);
transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
/* end block 03 */
