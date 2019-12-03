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
const aliasedMosaic = new nem2_sdk_1.Mosaic(new nem2_sdk_1.NamespaceId('cat.currency'), nem2_sdk_1.UInt64.fromUint(1000000));
/* end block 01 */
/* start block 02 */
const transferTransaction = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), nem2_sdk_1.Address.createFromRawAddress('TBULEA-UG2CZQ-ISUR44-2HWA6U-AKGWIX-HDABJV-IPS4'), [aliasedMosaic], nem2_sdk_1.PlainMessage.create('Test aliased mosaic'), nem2_sdk_1.NetworkType.MIJIN_TEST);
const privateKey = process.env.PRIVATE_KEY;
const account = nem2_sdk_1.Account.createFromPrivateKey(privateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const networkGenerationHash = process.env.GENERATION_HASH;
const signedTransaction = account.sign(transferTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
/* end block 02 */
/* start block 03 */
const nodeUrl = 'http://localhost:3000';
const receiptHttp = new nem2_sdk_1.ReceiptHttp(nodeUrl);
const transactionHttp = new nem2_sdk_1.TransactionHttp(nodeUrl);
const listener = new nem2_sdk_1.Listener(nodeUrl);
listener.open().then(() => {
    transactionHttp
        .announce(signedTransaction)
        .subscribe(x => console.log(x), err => console.error(err));
    /* end block 03 */
    /* start block 04 */
    listener
        .confirmed(account.address)
        .pipe(
    // Get the block height where the transaction was included
    operators_1.filter((transaction) => transaction.transactionInfo !== undefined
        && transaction.transactionInfo.hash === signedTransaction.hash), 
    // Get the list of receipts triggered for that block
    operators_1.mergeMap((transaction) => receiptHttp.getBlockReceipts(transaction.transactionInfo.height.toString())), 
    // Iterate over each resolution statement. Find the resolution for the aliased MosaicId.
    operators_1.map((receipts) => receipts.mosaicResolutionStatements), operators_1.mergeMap((resolutionStatements) => resolutionStatements), operators_1.filter((resolutionStatement) => resolutionStatement.unresolved instanceof nem2_sdk_1.NamespaceId
        && resolutionStatement.unresolved.toHex() === aliasedMosaic.id.toHex()))
        .subscribe((resolutionStatement) => {
        resolutionStatement.resolutionEntries.map((entry) => {
            console.log("Resolved MosaicId: ", entry.resolved);
            console.log("PrimaryId: ", entry.source.primaryId);
            console.log("SecondaryId: ", entry.source.secondaryId);
        });
        listener.terminate();
    }, err => console.log(err));
});
/* end block 04 */
