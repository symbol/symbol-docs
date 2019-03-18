/*
 *
 * Copyright 2019 NEM
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

import {
    Account,
    AliasActionType,
    AliasTransaction,
    Deadline,
    MosaicId,
    NamespaceId,
    NetworkType,
    TransactionHttp
} from "nem2-sdk";

// 01 - Setup
const transactionHttp = new TransactionHttp('http://localhost:3000');
const privateKey = process.env.PRIVATE_KEY as string;
const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

const namespaceId = new NamespaceId('foo');
const mosaicId = new MosaicId('7cdf3b117a3c40cc');

// 02 - Create and announce aliasTransaction
const mosaicAliasTransaction = AliasTransaction.createForMosaic(
    Deadline.create(),
    AliasActionType.Link,
    namespaceId,
    mosaicId,
    NetworkType.MIJIN_TEST
);

const signedTransaction = account.sign(mosaicAliasTransaction);

transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));