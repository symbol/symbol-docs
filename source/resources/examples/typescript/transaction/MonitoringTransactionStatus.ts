/*
 *
 * Copyright 2019 NEM
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
    Listener,
    NetworkType,
    PlainMessage,
    TransactionHttp,
    TransferTransaction
} from "nem2-sdk";
import {filter, first, map, mergeMap, skip, timeout} from "rxjs/operators";

/* start block 01 */
const recipientAddress = Address.createFromRawAddress("SD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54");
const transferTransaction = TransferTransaction.create(
    Deadline.create(),
    recipientAddress,
    [],
    PlainMessage.create('Test'),
    NetworkType.MIJIN_TEST);
/* end block 01 */

/* start block 02 */
const privateKey = process.env.PRIVATE_KEY as string;
const signer = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);
const networkGenerationHash = process.env.NETWORK_GENERATION_HASH as string;
const signedTransaction = signer.sign(transferTransaction, networkGenerationHash);
/* end block 02 */

/* start block 03 */
const url = 'http://localhost:3000';
const listener = new Listener(url);
const transactionHttp = new TransactionHttp(url);

const amountOfConfirmationsToSkip = 5;

listener.open().then(() => {
/* end block 03 */

/* start block 04 */
    const newBlockSubscription = listener
        .newBlock()
        .pipe(timeout(30000)) // time in milliseconds when to timeout.
        .subscribe(block => {
                console.log("New block created:" + block.height.compact());
            },
            error => {
                console.error(error);
                listener.terminate();
            });
/* end block 04 */

/* start block 05 */
    listener
        .status(signer.address)
        .pipe(filter(error => error.hash === signedTransaction.hash))
        .subscribe(error => {
                console.log("❌:" + error.status);
                newBlockSubscription.unsubscribe();
                listener.close();
            },
            error => console.error(error));
/* end block 05 */

/* start block 06 */
    listener
        .unconfirmedAdded(signer.address)
        .pipe(filter(transaction => (transaction.transactionInfo !== undefined
            && transaction.transactionInfo.hash === signedTransaction.hash)))
        .subscribe(ignored => console.log("⏳: Transaction status changed to unconfirmed"),
            error => console.error(error));
/* end block 06 */

/* start block 07 */
    listener
        .confirmed(signer.address)
        .pipe(
            filter(transaction =>(transaction.transactionInfo !== undefined
                && transaction.transactionInfo.hash === signedTransaction.hash)),
            mergeMap(transaction => {
                return listener.newBlock()
                    .pipe(
                        skip(amountOfConfirmationsToSkip),
                        first(),
                        map( ignored => transaction))
            })
        )
        .subscribe(ignored => {
            console.log("✅: Transaction confirmed");
            newBlockSubscription.unsubscribe();
            listener.close();
        }, error => console.error(error));
/* end block 07 */

/* start block 08 */
    transactionHttp
        .announce(signedTransaction)
        .subscribe(x => console.log(x),
            error => console.error(error));
});
/* end block 08 */
