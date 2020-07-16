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

import {merge} from 'rxjs';
import {filter, tap} from 'rxjs/operators';
import {
    Account,
    Address,
    Deadline,
    EmptyMessage,
    Mosaic,
    MosaicId,
    NetworkType,
    RepositoryFactoryHttp,
    TransactionService,
    TransferTransaction,
    UInt64,
} from 'symbol-sdk';

/* start block 01 */
// replace with recipient address
const rawRecipientAddress = 'TB6Q5E-YACWBP-CXKGIL-I6XWCH-DRFLTB-KUK34I-YJQ';
const recipientAddress = Address.createFromRawAddress(rawRecipientAddress);
// replace with network type
const networkType = NetworkType.TEST_NET;
// replace with symbol.xym id
const networkCurrencyMosaicId = new MosaicId('5E62990DCAC5BE8A');
// replace with network currency divisibility
const networkCurrencyDivisibility = 6;

const transferTransaction = TransferTransaction.create(
    Deadline.create(),
    recipientAddress,
    [new Mosaic(networkCurrencyMosaicId,
        UInt64.fromUint(10 * Math.pow(10, networkCurrencyDivisibility)))],
    EmptyMessage,
    networkType,
    UInt64.fromUint(2000000));

// replace with sender private key
const privateKey = '1111111111111111111111111111111111111111111111111111111111111111';
const account = Account.createFromPrivateKey(privateKey, networkType);
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash = '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';
const signedTransaction = account.sign(transferTransaction, networkGenerationHash);
/* end block 01 */

/* start block 02 */
const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const receiptHttp = repositoryFactory.createReceiptRepository();
const transactionHttp = repositoryFactory.createTransactionRepository();
const listener = repositoryFactory.createListener();
const transactionService = new TransactionService(transactionHttp, receiptHttp);

listener.open().then(() => {
    merge(transactionService.announce(signedTransaction, listener),
        listener
            .status(account.address)
            .pipe(
                filter((error) => error.hash === signedTransaction.hash),
                tap((error) => {
                    throw new Error(error.code);
                })))
        .subscribe((transaction) => {
            console.log(transaction);
            // TODO: send email to recipient
            listener.close();
        }, (err) => console.error(err));
});
/* end block 02 */
