/*
 *
 * Copyright 2018 NEM
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
    AggregateTransaction,
    Deadline,
    HashLockTransaction,
    Listener,
    ModifyMultisigAccountTransaction,
    MultisigCosignatoryModification,
    MultisigCosignatoryModificationType,
    NetworkCurrencyMosaic,
    NetworkType,
    PublicAccount,
    TransactionHttp,
    UInt64
} from "nem2-sdk";
import {filter, mergeMap} from "rxjs/operators";

/* start block 01 */
const multisig2PrivateKey = process.env.MULTISIG_2_PRIVATE_KEY as string;
const multisigAccount2 = Account.createFromPrivateKey(multisig2PrivateKey, NetworkType.MIJIN_TEST);

const cosignatoryAccount5PublicKey = process.env.COSIGNATORY_5_PUBLIC_KEY as string;
const cosignatory5 = PublicAccount.createFromPublicKey(cosignatoryAccount5PublicKey, NetworkType.MIJIN_TEST);

const cosignatoryAccount6PublicKey = process.env.COSIGNATORY_6_PUBLIC_KEY as string;
const cosignatory6 = PublicAccount.createFromPublicKey(cosignatoryAccount6PublicKey, NetworkType.MIJIN_TEST);

const convertMultisigAccount2Transaction = ModifyMultisigAccountTransaction.create(
    Deadline.create(),
    1,
    1,
    [
        new MultisigCosignatoryModification(
            MultisigCosignatoryModificationType.Add,
            cosignatory5,
        ),
        new MultisigCosignatoryModification(
            MultisigCosignatoryModificationType.Add,
            cosignatory6,
        )],
    NetworkType.MIJIN_TEST);
/* end block 01 */

/* start block 02 */
const multisig3PrivateKey = process.env.MULTISIG_3_PRIVATE_KEY as string;
const multisigAccount3 = Account.createFromPrivateKey(multisig3PrivateKey, NetworkType.MIJIN_TEST);

const cosignatoryAccount7PublicKey = process.env.COSIGNATORY_7_PUBLIC_KEY as string;
const cosignatory7 = PublicAccount.createFromPublicKey(cosignatoryAccount7PublicKey, NetworkType.MIJIN_TEST);

const cosignatoryAccount8PublicKey = process.env.COSIGNATORY_8_PUBLIC_KEY as string;
const cosignatory8 = PublicAccount.createFromPublicKey(cosignatoryAccount8PublicKey, NetworkType.MIJIN_TEST);

const cosignatoryAccount4PublicKey = process.env.COSIGNATORY_4_PUBLIC_KEY as string;
const cosignatory4 = PublicAccount.createFromPublicKey(cosignatoryAccount4PublicKey, NetworkType.MIJIN_TEST);

const convertMultisigAccount3Transaction = ModifyMultisigAccountTransaction.create(
    Deadline.create(),
    2,
    1,
    [
        new MultisigCosignatoryModification(
            MultisigCosignatoryModificationType.Add,
            cosignatory7,
        ),
        new MultisigCosignatoryModification(
            MultisigCosignatoryModificationType.Add,
            cosignatory8,
        ),
        new MultisigCosignatoryModification(
            MultisigCosignatoryModificationType.Add,
            cosignatory4,
        )],
    NetworkType.MIJIN_TEST);
/* end block 02 */

/* start block 03 */
const multisig1PrivateKey = process.env.MULTISIG_1_PRIVATE_KEY as string;
const multisigAccount1 = Account.createFromPrivateKey(multisig1PrivateKey, NetworkType.MIJIN_TEST);

const convertMultisigAccount1Transaction = ModifyMultisigAccountTransaction.create(
    Deadline.create(),
    3,
    1,
    [
        new MultisigCosignatoryModification(
            MultisigCosignatoryModificationType.Add,
            multisigAccount2.publicAccount,
        ),
        new MultisigCosignatoryModification(
            MultisigCosignatoryModificationType.Add,
            multisigAccount3.publicAccount,
        ),
        new MultisigCosignatoryModification(
            MultisigCosignatoryModificationType.Add,
            cosignatory4,
        )],
    NetworkType.MIJIN_TEST);
/* end block 03 */

/* start block 04 */
const aggregateTransaction = AggregateTransaction.createBonded(
    Deadline.create(),
    [convertMultisigAccount2Transaction.toAggregate(multisigAccount2.publicAccount),
        convertMultisigAccount3Transaction.toAggregate(multisigAccount3.publicAccount),
        convertMultisigAccount1Transaction.toAggregate(multisigAccount1.publicAccount)],
    NetworkType.MIJIN_TEST);

const networkGenerationHash = process.env.NETWORK_GENERATION_HASH as string;
const signedTransaction = multisigAccount1.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);

const hashLockTransaction = HashLockTransaction.create(
    Deadline.create(),
    NetworkCurrencyMosaic.createRelative(10),
    UInt64.fromUint(480),
    signedTransaction,
    NetworkType.MIJIN_TEST);

const hashLockTransactionSigned = multisigAccount1.sign(hashLockTransaction, networkGenerationHash);

const nodeUrl = 'http://localhost:3000';
const transactionHttp = new TransactionHttp(nodeUrl);
const listener = new Listener(nodeUrl);

listener.open().then(() => {

    transactionHttp
        .announce(hashLockTransactionSigned)
        .subscribe(x => console.log(x), err => console.error(err));

    listener
        .confirmed(multisigAccount1.address)
        .pipe(
            filter((transaction) => transaction.transactionInfo !== undefined
                && transaction.transactionInfo.hash === hashLockTransactionSigned.hash),
            mergeMap(ignored => transactionHttp.announceAggregateBonded(signedTransaction))
        )
        .subscribe(announcedAggregateBonded => console.log(announcedAggregateBonded),
            err => console.error(err));
});
/* end block 04 */

