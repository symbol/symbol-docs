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
import {filter, mergeMap} from 'rxjs/operators';
import {merge} from "rxjs";

/* start block 01 */
// replace with network type
const networkType = NetworkType.TEST_NET;
// replace with multisig public key
const multisigAccountPublicKey = '3A537D5A1AF51158C42F80A199BB58351DBF3253C4A6A1B7BD1014682FB595EA';
const multisigAccount = PublicAccount.createFromPublicKey(multisigAccountPublicKey, networkType);
// replace with new cosignatory public key
const newCosignatoryPublicKey = '17E42BDF5B7FF5001DC96A262A1141FFBE3F09A3A45DE7C095AAEA14F45C0DA0';
const newCosignatoryAccount = PublicAccount.createFromPublicKey(newCosignatoryPublicKey, networkType);
/* end block 01 */

/* start block 02 */
const multisigAccountModificationTransaction = MultisigAccountModificationTransaction.create(
    Deadline.create(),
    0,
    0,
    [newCosignatoryAccount],
    [],
    networkType);
/* end block 02 */

/* start block 03 */
const aggregateTransaction = AggregateTransaction.createBonded(
    Deadline.create(),
    [multisigAccountModificationTransaction.toAggregate(multisigAccount)],
    networkType);

// replace with cosignatory private key
const cosignatoryPrivateKey = '1111111111111111111111111111111111111111111111111111111111111111';
const cosignatoryAccount = Account.createFromPrivateKey(cosignatoryPrivateKey, networkType);
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '6C0350A10724FC325A1F06CEFC4CA14464BC472F566842D22418AEE0F8746B4C';
const signedTransaction = cosignatoryAccount.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
/* end block 03 */

/* start block 04 */
const hashLockTransaction = HashLockTransaction.create(
    Deadline.create(),
    NetworkCurrencyMosaic.createRelative(10),
    UInt64.fromUint(480),
    signedTransaction,
    networkType);

const signedHashLockTransaction = cosignatoryAccount.sign(hashLockTransaction, networkGenerationHash);

// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.nemtech.network:3000';
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
        announceAggregateTransaction(listener, signedHashLockTransaction, signedTransaction, cosignatoryAccount.address))
        .subscribe(x => console.log('Transaction confirmed:', x.message),
            err=> console.log(err));
});
/* end block 04 */
