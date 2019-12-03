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
const rxjs_1 = require("rxjs");
/* start block 01 */
const multisig2PrivateKey = process.env.MULTISIG_2_PRIVATE_KEY;
const multisigAccount2 = nem2_sdk_1.Account.createFromPrivateKey(multisig2PrivateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const cosignatoryAccount5PublicKey = process.env.COSIGNATORY_5_PUBLIC_KEY;
const cosignatory5 = nem2_sdk_1.PublicAccount.createFromPublicKey(cosignatoryAccount5PublicKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const cosignatoryAccount6PublicKey = process.env.COSIGNATORY_6_PUBLIC_KEY;
const cosignatory6 = nem2_sdk_1.PublicAccount.createFromPublicKey(cosignatoryAccount6PublicKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const convertMultisigAccount2Transaction = nem2_sdk_1.MultisigAccountModificationTransaction.create(nem2_sdk_1.Deadline.create(), 1, 1, [cosignatory5, cosignatory6], [], nem2_sdk_1.NetworkType.MIJIN_TEST);
/* end block 01 */
/* start block 02 */
const multisig3PrivateKey = process.env.MULTISIG_3_PRIVATE_KEY;
const multisigAccount3 = nem2_sdk_1.Account.createFromPrivateKey(multisig3PrivateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const cosignatoryAccount7PublicKey = process.env.COSIGNATORY_7_PUBLIC_KEY;
const cosignatory7 = nem2_sdk_1.PublicAccount.createFromPublicKey(cosignatoryAccount7PublicKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const cosignatoryAccount8PublicKey = process.env.COSIGNATORY_8_PUBLIC_KEY;
const cosignatory8 = nem2_sdk_1.PublicAccount.createFromPublicKey(cosignatoryAccount8PublicKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const cosignatoryAccount4PublicKey = process.env.COSIGNATORY_4_PUBLIC_KEY;
const cosignatory4 = nem2_sdk_1.PublicAccount.createFromPublicKey(cosignatoryAccount4PublicKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const convertMultisigAccount3Transaction = nem2_sdk_1.MultisigAccountModificationTransaction.create(nem2_sdk_1.Deadline.create(), 2, 1, [cosignatory7, cosignatory8, cosignatory4], [], nem2_sdk_1.NetworkType.MIJIN_TEST);
/* end block 02 */
/* start block 03 */
const multisig1PrivateKey = process.env.MULTISIG_1_PRIVATE_KEY;
const multisigAccount1 = nem2_sdk_1.Account.createFromPrivateKey(multisig1PrivateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const convertMultisigAccount1Transaction = nem2_sdk_1.MultisigAccountModificationTransaction.create(nem2_sdk_1.Deadline.create(), 3, 1, [multisigAccount2.publicAccount, multisigAccount3.publicAccount, cosignatory4], [], nem2_sdk_1.NetworkType.MIJIN_TEST);
/* end block 03 */
/* start block 04 */
const aggregateTransaction = nem2_sdk_1.AggregateTransaction.createBonded(nem2_sdk_1.Deadline.create(), [convertMultisigAccount2Transaction.toAggregate(multisigAccount2.publicAccount),
    convertMultisigAccount3Transaction.toAggregate(multisigAccount3.publicAccount),
    convertMultisigAccount1Transaction.toAggregate(multisigAccount1.publicAccount)], nem2_sdk_1.NetworkType.MIJIN_TEST);
const networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
const signedTransaction = multisigAccount1.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
const hashLockTransaction = nem2_sdk_1.HashLockTransaction.create(nem2_sdk_1.Deadline.create(), nem2_sdk_1.NetworkCurrencyMosaic.createRelative(10), nem2_sdk_1.UInt64.fromUint(480), signedTransaction, nem2_sdk_1.NetworkType.MIJIN_TEST);
const signedHashLockTransaction = multisigAccount1.sign(hashLockTransaction, networkGenerationHash);
const nodeUrl = 'http://localhost:3000';
const transactionHttp = new nem2_sdk_1.TransactionHttp(nodeUrl);
const listener = new nem2_sdk_1.Listener(nodeUrl);
const announceHashLockTransaction = (signedHashLockTransaction) => {
    return transactionHttp.announce(signedHashLockTransaction);
};
const announceAggregateTransaction = (listener, signedHashLockTransaction, signedAggregateTransaction, senderAddress) => {
    return listener
        .confirmed(senderAddress)
        .pipe(operators_1.filter((transaction) => transaction.transactionInfo !== undefined
        && transaction.transactionInfo.hash === signedHashLockTransaction.hash), operators_1.mergeMap(ignored => {
        listener.terminate();
        return transactionHttp.announceAggregateBonded(signedAggregateTransaction);
    }));
};
listener.open().then(() => {
    rxjs_1.merge(announceHashLockTransaction(signedHashLockTransaction), announceAggregateTransaction(listener, signedHashLockTransaction, signedTransaction, multisigAccount1.address))
        .subscribe(x => console.log('Transaction confirmed:', x.message), err => console.log(err));
});
/* end block 04 */
