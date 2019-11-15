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
    AggregateTransaction,
    CosignatoryModificationAction,
    Deadline,
    HashLockTransaction,
    Listener,
    MultisigAccountModificationTransaction,
    MultisigCosignatoryModification,
    NetworkCurrencyMosaic,
    NetworkType,
    PublicAccount,
    SignedTransaction,
    TransactionHttp,
    UInt64
} from "nem2-sdk";
import {filter, mergeMap} from "rxjs/operators";
import {merge} from "rxjs";

/* start block 01 */
// Replace with the private key of the account to convert into multisig
const privateKey = '0000000000000000000000000000000000000000000000000000000000000000';
const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

// Replace with cosignatories public keys
const cosignatory1PublicKey = '1A6B1797FD323FEC48F71CDFE3D181B53D001FC2B56928DBA06C9319722B0FF8';
const cosignatory1 = PublicAccount.createFromPublicKey(cosignatory1PublicKey, NetworkType.MIJIN_TEST);
const cosignatory2PublicKey = '350E1AFCD10443C0F317E66B16E1093D868493782897922C6248D4D729B1D1A1';
const cosignatory2 = PublicAccount.createFromPublicKey(cosignatory2PublicKey, NetworkType.MIJIN_TEST);
/* end block 01 */

/* start block 02 */
const multisigAccountModificationTransaction = MultisigAccountModificationTransaction.create(
    Deadline.create(),
    1,
    1,
    [
        new MultisigCosignatoryModification(
            CosignatoryModificationAction.Add,
            cosignatory1,
        ),
        new MultisigCosignatoryModification(
            CosignatoryModificationAction.Add,
            cosignatory2,
        )],
    NetworkType.MIJIN_TEST);
/* end block 02 */

/* start block 03 */
const aggregateTransaction = AggregateTransaction.createBonded(
    Deadline.create(),
    [multisigAccountModificationTransaction.toAggregate(account.publicAccount)],
    NetworkType.MIJIN_TEST);
/* end block 03 */

/* start block 04 */
// Replace with your networkGenerationHash - http://localhost:300/block/1
const networkGenerationHash = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
const signedTransaction = account.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
/* end block 04 */

/* start block 05 */
const hashLockTransaction = HashLockTransaction.create(
    Deadline.create(),
    NetworkCurrencyMosaic.createRelative(10),
    UInt64.fromUint(480),
    signedTransaction,
    NetworkType.MIJIN_TEST);

const signedHashLockTransaction = account.sign(hashLockTransaction, networkGenerationHash);

const nodeUrl = 'http://localhost:3000';
const transactionHttp = new TransactionHttp(nodeUrl);
const listener = new Listener(nodeUrl);

const announceHashLockTransaction = (signedHashLockTransaction: SignedTransaction) => {
    return transactionHttp.announce(signedHashLockTransaction);
};

const announceAggregateTransaction = (listener: Listener,
                                      signedHashLockTransaction: SignedTransaction,
                                      signedAggregateTransaction: SignedTransaction,
                                      senderAddress: Address) => {
    return listener
        .confirmed(senderAddress)
        .pipe(
            filter((transaction) => transaction.transactionInfo !== undefined
                && transaction.transactionInfo.hash === signedHashLockTransaction.hash),
            mergeMap(ignored => {
                listener.terminate();
                return transactionHttp.announceAggregateBonded(signedAggregateTransaction)
            })
        );
};

listener.open().then(() => {
    merge(announceHashLockTransaction(signedHashLockTransaction),
        announceAggregateTransaction(listener, signedHashLockTransaction, signedTransaction, account.address))
        .subscribe(x => console.log('Transaction confirmed:', x.message),
            err=> console.log(err));
});
/* end block 05 */
