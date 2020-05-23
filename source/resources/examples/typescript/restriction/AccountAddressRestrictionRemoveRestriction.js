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
const companyRawAddress = 'TCVQ2R-XKJQKH-4RJZWG-DARWJ6-V4J4W7-F4DGH6-ZFAB';
const companyAddress = symbol_sdk_1.Address.createFromRawAddress(companyRawAddress);
/* end block 01 */
/* start block 02 */
// replace with network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
const transaction = symbol_sdk_1.AccountRestrictionTransaction
    .createAddressRestrictionModificationTransaction(symbol_sdk_1.Deadline.create(), symbol_sdk_1.AddressRestrictionFlag.AllowIncomingAddress, [], [companyAddress], networkType, symbol_sdk_1.UInt64.fromUint(2000000));
/* end block 02 */
/* start block 03 */
// replace with product private key
const productPrivateKey = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash = 'ACECD90E7B248E012803228ADB4424F0D966D24149B72E58987D2BF2F2AF03C4';
const productAccount = symbol_sdk_1.Account.createFromPrivateKey(productPrivateKey, networkType);
const signedTransaction = productAccount.sign(transaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-02.ap-northeast-1.0941-v1.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 03 */
