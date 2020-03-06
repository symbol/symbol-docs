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
const symbol_sdk_1 = require("symbol-sdk");
/* start block 01 */
// replace with network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
// replace with private key
const privateKey = '1111111111111111111111111111111111111111111111111111111111111111';
const account = symbol_sdk_1.Account.createFromPrivateKey(privateKey, networkType);
// replace with mosaic id
const mosaicIdHex = '7cdf3b117a3c40cc';
const mosaicId = new symbol_sdk_1.MosaicId(mosaicIdHex);
// replace with mosaic divisibility
const divisibility = 0;
// replace with mosaic units to increase
const delta = 1000000;
const mosaicSupplyChangeTransaction = symbol_sdk_1.MosaicSupplyChangeTransaction.create(symbol_sdk_1.Deadline.create(), mosaicId, symbol_sdk_1.MosaicSupplyChangeAction.Increase, symbol_sdk_1.UInt64.fromUint(delta * Math.pow(10, divisibility)), networkType, symbol_sdk_1.UInt64.fromUint(2000000));
/* end block 01 */
/* start block 02 */
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '44D2225B8932C9A96DCB13508CBCDFFA9A9663BFBA2354FEEC8FCFCB7E19846C';
const signedTransaction = account.sign(mosaicSupplyChangeTransaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-2-01.us-west-1.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 02 */
