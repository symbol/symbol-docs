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
    Address, TransferTransaction, Deadline, PublicAccount, XEM, PlainMessage, NetworkType,
    AggregateTransaction, Account, LockFundsTransaction, TransactionHttp, Listener, UInt64
} from "nem2-sdk";

// Replace with the cosignatory private key
const cosignatoryPrivateKey = process.env.COSIGNATORY_1_PRIVATE_KEY as string;

// Replace with the multisig public key
const multisigAccountPublicKey = '202B3861F34F6141E120742A64BC787D6EBC59C9EFB996F4856AA9CBEE11CD31';

// Replace with recipient address
const recipientAddress = 'SD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54';

const multisigAccount = PublicAccount.createFromPublicKey(multisigAccountPublicKey, NetworkType.MIJIN_TEST);

const cosignatoryAccount = Account.createFromPrivateKey(cosignatoryPrivateKey, NetworkType.MIJIN_TEST);

const transferTransaction = TransferTransaction.create(
    Deadline.create(),
    Address.createFromRawAddress(recipientAddress),
    [XEM.createRelative(10)],
    PlainMessage.create('sending 10 nem:xem'),
    NetworkType.MIJIN_TEST
);

const aggregateTransaction = AggregateTransaction.createBonded(
    Deadline.create(),
    [
        transferTransaction.toAggregate(multisigAccount),
    ],
    NetworkType.MIJIN_TEST
);

//Signing the aggregate transaction
const signedTransaction = cosignatoryAccount.sign(aggregateTransaction);

//Creating the lock funds transaction and announce it

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

    transactionHttp.announce(lockFundsTransactionSigned).subscribe(x => console.log(x),
        err => console.error(err));

    listener.confirmed(cosignatoryAccount.address)
        .filter((transaction) => transaction.transactionInfo !== undefined
            && transaction.transactionInfo.hash === lockFundsTransactionSigned.hash)
        .flatMap(ignored => transactionHttp.announceAggregateBonded(signedTransaction))
        .subscribe(announcedAggregateBonded => console.log(announcedAggregateBonded),
            err => console.error(err));
});