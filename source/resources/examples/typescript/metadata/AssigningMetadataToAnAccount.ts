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
    AccountMetadataTransaction, AggregateTransaction,
    Deadline,
    HashLockTransaction,
    Listener,
    NamespaceMosaicIdGenerator,
    NetworkCurrencyMosaic,
    NetworkType,
    PublicAccount,
    TransactionHttp,
    UInt64
} from 'nem2-sdk';
import {filter, mergeMap} from "rxjs/operators";

/* start block 01 */
const key = new UInt64(NamespaceMosaicIdGenerator.namespaceId('CERT'.toLowerCase()));
/* end block 01 */

/* start block 02 */
const alicePublicKey = process.env.ALICE_PUBLIC_KEY as string;
const alicePublicAccount = PublicAccount.createFromPublicKey(alicePublicKey, NetworkType.MIJIN_TEST);
const value = '123456';

const accountMetadataTransaction = AccountMetadataTransaction.create(
    Deadline.create(),
    alicePublicAccount.publicKey,
    key,
    value.length,
    value,
    NetworkType.MIJIN_TEST,
);
/* end block 02 */

/* start block 03 */
const bobPrivateKey = process.env.BOB_PRIVATE_KEY as string;
const bobAccount = Account.createFromPrivateKey(bobPrivateKey, NetworkType.MIJIN_TEST);

const aggregateTransaction = AggregateTransaction.createBonded(
    Deadline.create(),
    [accountMetadataTransaction.toAggregate(bobAccount.publicAccount)],
    NetworkType.MIJIN_TEST);
const networkGenerationHash = process.env.NETWORK_GENERATION_HASH as string;
const signedTransaction = bobAccount.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
/* end block 03 */

/* start block 04 */
const hashLockTransaction = HashLockTransaction.create(
    Deadline.create(),
    NetworkCurrencyMosaic.createRelative(10),
    UInt64.fromUint(480),
    signedTransaction,
    NetworkType.MIJIN_TEST);
const hashLockTransactionSigned = bobAccount.sign(hashLockTransaction, networkGenerationHash);
/* end block 04 */

/* start block 05 */
const nodeUrl = 'http://localhost:3000';
const listener = new Listener(nodeUrl);
const transactionHttp = new TransactionHttp(nodeUrl);

listener.open().then(() => {

    transactionHttp
        .announce(hashLockTransactionSigned)
        .subscribe(x => console.log(x), err => console.error(err));

    listener
        .confirmed(bobAccount.address)
        .pipe(
            filter((transaction) => transaction.transactionInfo !== undefined
                && transaction.transactionInfo.hash === hashLockTransactionSigned.hash),
            mergeMap(ignored => transactionHttp.announceAggregateBonded(signedTransaction))
        )
        .subscribe(announcedAggregateBonded => console.log(announcedAggregateBonded),
            err => console.error(err));
});
/* end block 05 */
