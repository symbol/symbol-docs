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
// replace with duration (in blocks)
const duration = symbol_sdk_1.UInt64.fromUint(0);
// replace with custom mosaic flags
const isSupplyMutable = true;
const isTransferable = true;
const isRestrictable = true;
// replace with custom divisibility
const divisibility = 0;
const nonce = symbol_sdk_1.MosaicNonce.createRandom();
const mosaicDefinitionTransaction = symbol_sdk_1.MosaicDefinitionTransaction.create(symbol_sdk_1.Deadline.create(), nonce, symbol_sdk_1.MosaicId.createFromNonce(nonce, account.address), symbol_sdk_1.MosaicFlags.create(isSupplyMutable, isTransferable, isRestrictable), divisibility, duration, networkType);
/* end block 01 */
/* start block 02 */
// replace with mosaic units to increase
const delta = 1000000;
const mosaicSupplyChangeTransaction = symbol_sdk_1.MosaicSupplyChangeTransaction.create(symbol_sdk_1.Deadline.create(), mosaicDefinitionTransaction.mosaicId, symbol_sdk_1.MosaicSupplyChangeAction.Increase, symbol_sdk_1.UInt64.fromUint(delta * Math.pow(10, divisibility)), networkType);
/* end block 02 */
/* start block 03 */
const aggregateTransaction = symbol_sdk_1.AggregateTransaction.createComplete(symbol_sdk_1.Deadline.create(), [
    mosaicDefinitionTransaction.toAggregate(account.publicAccount),
    mosaicSupplyChangeTransaction.toAggregate(account.publicAccount)
], networkType, [], symbol_sdk_1.UInt64.fromUint(2000000));
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash = '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';
const signedTransaction = account.sign(aggregateTransaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 03 */
