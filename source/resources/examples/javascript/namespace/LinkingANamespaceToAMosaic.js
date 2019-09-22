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

const nem2Sdk = require("nem2-sdk");
const Account = nem2Sdk.Account,
    AliasAction = nem2Sdk.AliasAction,
    AliasTransaction = nem2Sdk.AliasTransaction,
    Deadline = nem2Sdk.Deadline,
    MosaicId = nem2Sdk.MosaicId,
    NamespaceId = nem2Sdk.NamespaceId,
    NetworkType = nem2Sdk.NetworkType,
    TransactionHttp = nem2Sdk.TransactionHttp;

/* start block 01 */
const namespaceName = process.env.NAMESPACE_NAME;
const namespaceId = new NamespaceId(namespaceName);
const mosaicIdHexa = process.env.MOSAIC_ID_HEXA;
const mosaicId = new MosaicId(mosaicIdHexa);
/* end block 01 */

/* start block 02 */
const mosaicAliasTransaction = AliasTransaction.createForMosaic(
    Deadline.create(),
    AliasAction.Link,
    namespaceId,
    mosaicId,
    NetworkType.MIJIN_TEST
);

const privateKey = process.env.PRIVATE_KEY;
const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);
const networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
const signedTransaction = account.sign(mosaicAliasTransaction, networkGenerationHash);

const transactionHttp = new TransactionHttp('http://localhost:3000');
transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
/* end block 02 */
