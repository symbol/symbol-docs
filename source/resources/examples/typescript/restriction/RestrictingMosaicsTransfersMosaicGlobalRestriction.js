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
// replace with mosaic id
const mosaicIdHex = '634a8ac3fc2b65b3';
const mosaicId = new symbol_sdk_1.MosaicId(mosaicIdHex);
const key = symbol_sdk_1.KeyGenerator.generateUInt64Key('KYC'.toLowerCase());
/* end block 01 */
/* start block 02 */
// replace with network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
const transaction = symbol_sdk_1.MosaicGlobalRestrictionTransaction
    .create(symbol_sdk_1.Deadline.create(), mosaicId, // mosaicId
key, // restrictionKey
symbol_sdk_1.UInt64.fromUint(0), // previousRestrictionValue
symbol_sdk_1.MosaicRestrictionType.NONE, // previousRestrictionType
symbol_sdk_1.UInt64.fromUint(1), // newRestrictionValue
symbol_sdk_1.MosaicRestrictionType.EQ, // newRestrictionType
networkType, undefined, symbol_sdk_1.UInt64.fromUint(2000000));
/* end block 02 */
/* start block 03 */
// replace with company private key
const privateKey = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
const account = symbol_sdk_1.Account.createFromPrivateKey(privateKey, networkType);
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash = '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';
const signedTransaction = account.sign(transaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 03 */
