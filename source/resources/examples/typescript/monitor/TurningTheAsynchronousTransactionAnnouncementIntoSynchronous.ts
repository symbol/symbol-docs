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
    EmptyMessage,
    NetworkCurrencyMosaic,
    NetworkType,
    TransactionHttp,
    TransferTransaction
} from 'nem2-sdk';


/* start block 01 */
// replace with recipient address
const rawRecipientAddress = '462EE976890916E54FA825D26BDD0235F5EB5B6A143C199AB0AE5EE9328E08CE';
const recipientAddress =  Address.createFromRawAddress(rawRecipientAddress);
// replace with network type
const networkType = NetworkType.MIJIN_TEST;

const transferTransaction = TransferTransaction.create(
    Deadline.create(),
   recipientAddress,
    [NetworkCurrencyMosaic.createRelative(10)],
    EmptyMessage,
    networkType);

// replace with sender private key
const privateKey = '1111111111111111111111111111111111111111111111111111111111111111';
const account = Account.createFromPrivateKey(privateKey, networkType);
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '6C0350A10724FC325A1F06CEFC4CA14464BC472F566842D22418AEE0F8746B4C';
const signedTransaction = account.sign(transferTransaction, networkGenerationHash);
/* end block 01 */

/* start block 02 */
const transactionHttp = new TransactionHttp('http://0.0.0.0:9000');

transactionHttp
    .announceSync(signedTransaction)
    .subscribe(x => {
        console.log(x);
        // TODO: send email to recipient
    },
    err => {
        console.error(err);
    }
);
/* end block 02 */
