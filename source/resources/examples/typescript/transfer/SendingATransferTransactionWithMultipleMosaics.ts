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
    Address,
    Deadline,
    Mosaic,
    MosaicId,
    NetworkType,
    PlainMessage,
    TransactionHttp,
    TransferTransaction,
    UInt64,
    NetworkCurrencyMosaic
} from 'nem2-sdk';

// 01 - Create Transfer Transaction
const recipientRawAddress = process.env.RECIPIENT_RAW_ADDRESS as string;
const recipientAddress = Address.createFromRawAddress(recipientRawAddress);

const transferTransaction = TransferTransaction.create(
    Deadline.create(),
    recipientAddress,
    /* start block 01 */
    [new Mosaic( new MosaicId('7cdf3b117a3c40cc'), UInt64.fromUint(1000)),
        NetworkCurrencyMosaic.createRelative(10)],
    /* end block 01 */
    PlainMessage.create('Welcome To NEM'),
    NetworkType.MIJIN_TEST);

// 02 - Signing the transaction
const privateKey = process.env.PRIVATE_KEY as string;
const account = Account.createFromPrivateKey(privateKey,NetworkType.MIJIN_TEST);
const networkGenerationHash = process.env.NETWORK_GENERATION_HASH as string;

const signedTransaction = account.sign(transferTransaction, networkGenerationHash);

// 03 - Announcing the transaction
const transactionHttp = new TransactionHttp('http://localhost:3000');
transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
