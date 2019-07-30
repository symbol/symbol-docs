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
    BlockHttp,
    Deadline,
    Listener,
    Mosaic,
    MosaicAlias,
    MosaicId,
    NamespaceId,
    NetworkType,
    PlainMessage,
    ResolutionEntry,
    ResolutionStatement,
    TransactionHttp,
    TransferTransaction,
    UInt64,
} from 'nem2-sdk';
import {filter, map, mergeMap} from "rxjs/operators";

/* start block 01 */
const aliasedMosaic = new Mosaic(
    new NamespaceId('cat.currency'),
    UInt64.fromUint(1000000)
);
/* end block 01 */

/* start block 02 */
const transferTransaction = TransferTransaction.create(
    Deadline.create(),
    Address.createFromRawAddress('SD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54'),
    [aliasedMosaic],
    PlainMessage.create('Test aliased mosaic'),
    NetworkType.MIJIN_TEST);

const privateKey = process.env.PRIVATE_KEY as string;
const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);
const networkGenerationHash = process.env.GENERATION_HASH as string;

const signedTransaction = account.sign(transferTransaction, networkGenerationHash);

console.log("TransactionHash: ", signedTransaction.hash);
/* end block 02 */

/* start block 03 */
const nodeUrl = 'http://localhost:3000';
const blockHttp = new BlockHttp(nodeUrl);
const transactionHttp = new TransactionHttp(nodeUrl);
const listener = new Listener(nodeUrl);

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
            filter((transaction) => transaction.transactionInfo !== undefined
                && transaction.transactionInfo.hash === signedTransaction.hash),
            // Get the list of receipts triggered for that block
            mergeMap((transaction) => blockHttp.getBlockReceipts(transaction.transactionInfo!.height.compact())),
            // Iterate over each resolution statement. Find the resolution for the aliased MosaicId.
            map((receipts) => receipts.mosaicResolutionStatements),
            mergeMap((resolutionStatements) => resolutionStatements),
            filter((resolutionStatement) => resolutionStatement.unresolved instanceof MosaicId &&
                resolutionStatement.unresolved.toHex() === aliasedMosaic.id.toHex())
        )
        .subscribe((resolutionStatement:ResolutionStatement) => {
            resolutionStatement.resolutionEntries.map((entry:ResolutionEntry) => {
                const entryResolved = <MosaicAlias> entry.resolved;
                console.log("Resolved MosaicId: ", entryResolved.mosaicId.toHex());
                console.log("PrimaryId: ", entry.source.primaryId);
                console.log("SecondaryId: ", entry.source.secondaryId);
            });
        }, err => console.log(err));
});
/* end block 04 */
