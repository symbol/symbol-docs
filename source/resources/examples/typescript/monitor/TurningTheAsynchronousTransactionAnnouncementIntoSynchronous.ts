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
    Mosaic,
    MosaicId,
    NetworkType,
    TransactionService,
    TransferTransaction,
    UInt64,
} from 'nem2-sdk';
import {RepositoryFactoryHttp} from 'nem2-sdk/dist/src/infrastructure/RepositoryFactoryHttp';
import {merge} from 'rxjs';
import {filter, tap} from 'rxjs/operators';

/* start block 01 */
// replace with recipient address
const rawRecipientAddress = 'TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP';
const recipientAddress = Address.createFromRawAddress(rawRecipientAddress);
// replace with network type
const networkType = NetworkType.TEST_NET;
// replace with symbol.xym id
const networkCurrencyMosaicId = new MosaicId('75AF035421401EF0');
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
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = 'CC42AAD7BD45E8C276741AB2524BC30F5529AF162AD12247EF9A98D6B54A385B';
const signedTransaction = account.sign(transferTransaction, networkGenerationHash);
/* end block 01 */

/* start block 02 */
const nodeUrl = 'http://api-xym-harvest-20.us-west-1.nemtech.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl, networkType, networkGenerationHash);
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
