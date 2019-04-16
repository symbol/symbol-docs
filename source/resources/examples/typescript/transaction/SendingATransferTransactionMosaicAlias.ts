/*
 *
 * Copyright 2018 NEM
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
    Address,
    Deadline,
    EmptyMessage,
    Mosaic,
    NamespaceId,
    NetworkType,
    TransactionHttp,
    TransferTransaction,
    UInt64,
} from 'nem2-sdk';

// 01 - Create Transfer Transaction
const recipientAddress = Address.createFromRawAddress('SD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54');

/* start block 01 */
const transferTransaction = TransferTransaction.create(
    Deadline.create(),
    recipientAddress,
    [new Mosaic(new NamespaceId('foo'),
            UInt64.fromUint(10000000))],
    EmptyMessage,
    NetworkType.MIJIN_TEST);
/* end block 01 */

// 02 - Signing the transaction
const privateKey = process.env.PRIVATE_KEY as string;

const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

const signedTransaction = account.sign(transferTransaction);

// 03 - Announcing the transaction
const transactionHttp = new TransactionHttp('http://localhost:3000');

transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
