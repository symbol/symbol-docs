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
const recipientAddress = nem2_sdk_1.Address.createFromRawAddress("SD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54");
const transferTransaction = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), recipientAddress, [], nem2_sdk_1.PlainMessage.create('Test'), nem2_sdk_1.NetworkType.MIJIN_TEST);
/* end block 01 */
/* start block 02 */
const privateKey = process.env.PRIVATE_KEY;
const signer = nem2_sdk_1.Account.createFromPrivateKey(privateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
const signedTransaction = signer.sign(transferTransaction, networkGenerationHash);
/* end block 02 */
/* start block 03 */
const url = 'http://localhost:3000';
const listener = new nem2_sdk_1.Listener(url);
const transactionHttp = new nem2_sdk_1.TransactionHttp(url);
const amountOfConfirmationsToSkip = 5;
listener.open().then(() => {
    /* end block 03 */
    /* start block 04 */
    const newBlockSubscription = listener
        .newBlock()
        .pipe(operators_1.timeout(30000)) // time in milliseconds when to timeout.
        .subscribe(block => {
        console.log("New block created:" + block.height.compact());
    }, error => {
        console.error(error);
        listener.terminate();
    });
    /* end block 04 */
    /* start block 05 */
    listener
        .status(signer.address)
        .pipe(operators_1.filter(error => error.hash === signedTransaction.hash))
        .subscribe(error => {
        console.log("❌:" + error.status);
        newBlockSubscription.unsubscribe();
        listener.terminate();
    }, error => console.error(error));
    /* end block 05 */
    /* start block 06 */
    listener
        .unconfirmedAdded(signer.address)
        .pipe(operators_1.filter(transaction => (transaction.transactionInfo !== undefined
        && transaction.transactionInfo.hash === signedTransaction.hash)))
        .subscribe(ignored => console.log("⏳: Transaction status changed to unconfirmed"), error => console.error(error));
    /* end block 06 */
    /* start block 07 */
    listener
        .confirmed(signer.address)
        .pipe(operators_1.filter(transaction => (transaction.transactionInfo !== undefined
        && transaction.transactionInfo.hash === signedTransaction.hash)), operators_1.mergeMap(transaction => {
        return listener.newBlock()
            .pipe(operators_1.skip(amountOfConfirmationsToSkip), operators_1.first(), operators_1.map(ignored => transaction));
    }))
        .subscribe(ignored => {
        console.log("✅: Transaction confirmed");
        newBlockSubscription.unsubscribe();
        listener.terminate();
    }, error => console.error(error));
    /* end block 07 */
    /* start block 08 */
    transactionHttp
        .announce(signedTransaction)
        .subscribe(x => console.log(x), error => console.error(error));
});
/* end block 08 */
