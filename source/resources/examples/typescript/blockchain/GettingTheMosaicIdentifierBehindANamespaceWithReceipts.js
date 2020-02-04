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
const nem2_sdk_1 = require("nem2-sdk");
const operators_1 = require("rxjs/operators");
/* start block 01 */
const aliasedMosaic = new nem2_sdk_1.Mosaic(new nem2_sdk_1.NamespaceId('symbol.xym'), nem2_sdk_1.UInt64.fromUint(1000000));
/* end block 01 */
/* start block 02 */
// replace with network type
const networkType = nem2_sdk_1.NetworkType.TEST_NET;
const transferTransaction = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), nem2_sdk_1.Address.createFromRawAddress('TBULEA-UG2CZQ-ISUR44-2HWA6U-AKGWIX-HDABJV-IPS4'), [aliasedMosaic], nem2_sdk_1.PlainMessage.create('Test aliased mosaic'), networkType, nem2_sdk_1.UInt64.fromUint(2000000));
// replace with sender private key
const privateKey = '1111111111111111111111111111111111111111111111111111111111111111';
const account = nem2_sdk_1.Account.createFromPrivateKey(privateKey, networkType);
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = 'CC42AAD7BD45E8C276741AB2524BC30F5529AF162AD12247EF9A98D6B54A385B';
const signedTransaction = account.sign(transferTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
/* end block 02 */
/* start block 03 */
// replace with node endpoint
const nodeUrl = 'http://api-xym-harvest-20.us-west-1.nemtech.network:3000';
const repositoryFactory = new nem2_sdk_1.RepositoryFactoryHttp(nodeUrl);
const receiptHttp = repositoryFactory.createReceiptRepository();
const transactionHttp = repositoryFactory.createTransactionRepository();
const listener = repositoryFactory.createListener();
const transactionService = new nem2_sdk_1.TransactionService(transactionHttp, receiptHttp);
listener.open().then(() => {
    transactionService
        .announce(signedTransaction, listener)
        .pipe(operators_1.mergeMap((transaction) => transactionService.resolveAliases([transaction.transactionInfo.hash])), operators_1.map((transactions) => transactions[0]))
        .subscribe((transaction) => {
        console.log('Resolved MosaicId: ', transaction.mosaics[0].id.toHex());
        listener.close();
    }, (err) => console.log(err));
});
/* end block 03 */
