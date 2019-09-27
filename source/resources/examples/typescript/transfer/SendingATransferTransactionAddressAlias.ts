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

import {
    Account,
    Deadline,
    EmptyMessage,
    NamespaceId,
    NetworkCurrencyMosaic,
    NetworkType,
    TransactionHttp,
    TransferTransaction,
} from 'nem2-sdk';

/* start block 01 */
const recipientAddress = new NamespaceId('foo');

const transferTransaction = TransferTransaction.create(
    Deadline.create(),
    recipientAddress,
    [NetworkCurrencyMosaic.createRelative(10)],
    EmptyMessage,
    NetworkType.MIJIN_TEST);
/* end block 01 */

const privateKey = process.env.PRIVATE_KEY as string;
const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);
const networkGenerationHash = process.env.NETWORK_GENERATION_HASH as string;

const signedTransaction = account.sign(transferTransaction, networkGenerationHash);

const transactionHttp = new TransactionHttp('http://localhost:3000');

transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
