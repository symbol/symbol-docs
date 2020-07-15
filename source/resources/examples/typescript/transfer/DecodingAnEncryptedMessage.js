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
const operators_1 = require("rxjs/operators");
const symbol_sdk_1 = require("symbol-sdk");
/* start block 01 */
// replace with network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
// replace with certificate private key
const certificatePrivateKey = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
const certificateAccount = symbol_sdk_1.Account.createFromPrivateKey(certificatePrivateKey, networkType);
// replace with alice public key
const alicePublicKey = 'D04AB232742BB4AB3A1368BD4615E4E6D0224AB71A016BAF8520A332C9778737';
const alicePublicAccount = symbol_sdk_1.PublicAccount.createFromPublicKey(alicePublicKey, networkType);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
// replace with transaction hash
const transactionHash = '0000000000000000000000000000000000000000000000000000000000000000';
transactionHttp
    .getTransaction(transactionHash, symbol_sdk_1.TransactionGroup.Confirmed)
    .pipe(operators_1.map((x) => x))
    .subscribe((transaction) => {
    console.log('Raw message: ', transaction.message.payload);
    console.log('Message: ', certificateAccount.decryptMessage(transaction.message, alicePublicAccount).payload);
}, ((err) => console.log(err)));
/* end block 01 */
