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
var namespaceName = process.env.NAMESPACE_NAME;
var namespaceId = new nem2_sdk_1.NamespaceId(namespaceName);
var rawAddress = process.env.ADDRESS;
var address = nem2_sdk_1.Address.createFromRawAddress(rawAddress);
/* end block 01 */
/* start block 02 */
var addressAliasTransaction = nem2_sdk_1.AliasTransaction.createForAddress(nem2_sdk_1.Deadline.create(), nem2_sdk_1.AliasAction.Link, namespaceId, address, nem2_sdk_1.NetworkType.MIJIN_TEST);
var privateKey = process.env.PRIVATE_KEY;
var account = nem2_sdk_1.Account.createFromPrivateKey(privateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
var networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
var signedTransaction = account.sign(addressAliasTransaction, networkGenerationHash);
var transactionHttp = new nem2_sdk_1.TransactionHttp('http://localhost:3000');
transactionHttp
    .announce(signedTransaction)
    .subscribe(function (x) { return console.log(x); }, function (err) { return console.error(err); });
/* end block 02 */
