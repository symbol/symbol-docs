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
    Account, Deadline, PublicAccount, NetworkType, ModifyMultisigAccountTransaction,
    MultisigCosignatoryModificationType, AggregateTransaction, MultisigCosignatoryModification, LockFundsTransaction,
    TransactionHttp, XEM, Listener, UInt64
} from "nem2-sdk";

// Replace with the multisig public key
const cosignatoryPrivateKey = process.env.COSIGNATORY_1_PRIVATE_KEY as string;
const multisigAccountPublicKey = '202B3861F34F6141E120742A64BC787D6EBC59C9EFB996F4856AA9CBEE11CD31';
const newCosignatoryPublicKey = 'CD4EE677BD0642C93910CB93214954A9D70FBAAE1FFF1FF530B1FB52389568F1';

const cosignatoryAccount = Account.createFromPrivateKey(cosignatoryPrivateKey, NetworkType.MIJIN_TEST);
const newCosignatoryAccount =  PublicAccount.createFromPublicKey(newCosignatoryPublicKey, NetworkType.MIJIN_TEST);
const multisigAccount = PublicAccount.createFromPublicKey(multisigAccountPublicKey, NetworkType.MIJIN_TEST);

const multisigCosignatoryModification = new MultisigCosignatoryModification(MultisigCosignatoryModificationType.Add,newCosignatoryAccount);

const modifyMultisigAccountTransaction = ModifyMultisigAccountTransaction.create(
    Deadline.create(),
    0,
    0,
    [
        multisigCosignatoryModification
    ],
    NetworkType.MIJIN_TEST
);

const aggregateTransaction = AggregateTransaction.createBonded(
    Deadline.create(),
    [
        modifyMultisigAccountTransaction.toAggregate(multisigAccount),
    ],
    NetworkType.MIJIN_TEST
);

const signedTransaction = cosignatoryAccount.sign(aggregateTransaction);

const lockFundsTransaction = LockFundsTransaction.create(
    Deadline.create(),
    XEM.createRelative(10),
    UInt64.fromUint(480),
    signedTransaction,
    NetworkType.MIJIN_TEST);

const lockFundsTransactionSigned = cosignatoryAccount.sign(lockFundsTransaction);

const transactionHttp = new TransactionHttp('http://localhost:3000');

// announce signed transaction
const listener = new Listener('http://localhost:3000');

listener.open().then(() => {

    transactionHttp.announce(lockFundsTransactionSigned).subscribe(x => console.log(x));

    listener.confirmed(cosignatoryAccount.address).subscribe(transaction => {

        if (transaction.transactionInfo && transaction.transactionInfo.hash == lockFundsTransactionSigned.hash) {

            transactionHttp.announceAggregateBonded(signedTransaction).subscribe(x => console.log(x));
        }
    });
});