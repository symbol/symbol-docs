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

import {Account, Deadline, NamespaceRegistrationTransaction, NetworkType, TransactionHttp} from 'nem2-sdk';

/* start block 01 */
// replace with root namespace name
const rootNamespaceName = 'foo';
// replace with root subnamespace name
const subnamespaceName = 'bar';
// replace with network type
const networkType = NetworkType.TEST_NET;

const namespaceRegistrationTransaction = NamespaceRegistrationTransaction.createSubNamespace(
    Deadline.create(),
    subnamespaceName,
    rootNamespaceName,
    networkType).setMaxFee(2);

// replace with private key
const privateKey = '1111111111111111111111111111111111111111111111111111111111111111';
const account = Account.createFromPrivateKey(privateKey, networkType);
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = 'CC42AAD7BD45E8C276741AB2524BC30F5529AF162AD12247EF9A98D6B54A385B';
const signedTransaction = account.sign(namespaceRegistrationTransaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-harvest-20.us-west-1.nemtech.network:3000';
const transactionHttp = new TransactionHttp(nodeUrl);

transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 01 */
