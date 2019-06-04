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

const nem2Sdk = require("nem2-sdk");
const operators = require('rxjs/operators');
const Account = nem2Sdk.Account,
    AggregateTransaction = nem2Sdk.AggregateTransaction,
    Deadline = nem2Sdk.Deadline,
    HashLockTransaction = nem2Sdk.HashLockTransaction,
    Listener = nem2Sdk.Listener,
    MultisigCosignatoryModification = nem2Sdk.MultisigCosignatoryModification,
    MultisigCosignatoryModificationType = nem2Sdk.MultisigCosignatoryModificationType,
    ModifyMultisigAccountTransaction = nem2Sdk.ModifyMultisigAccountTransaction,
    NetworkCurrencyMosaic = nem2Sdk.NetworkCurrencyMosaic,
    NetworkType = nem2Sdk.NetworkType,
    PublicAccount = nem2Sdk.PublicAccount,
    TransactionHttp = nem2Sdk.TransactionHttp,
    UInt64 = nem2Sdk.UInt64,
    filter = operators.filter,
    mergeMap = operators.mergeMap;

/* start block 01 */
const nodeUrl = 'http://localhost:3000';
const transactionHttp = new TransactionHttp(nodeUrl);
const listener = new Listener(nodeUrl);

const privateKey = process.env.MULTISIG_ACCOUNT_PUBLIC_KEY;
const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

const cosignatory1PublicKey = process.env.COSIGNATORY_1_PUBLIC_KEY;
const cosignatory1 = PublicAccount.createFromPublicKey(cosignatory1PublicKey, NetworkType.MIJIN_TEST);
const cosignatory2PublicKey = process.env.COSIGNATORY_2_PUBLIC_KEY;
const cosignatory2 = PublicAccount.createFromPublicKey(cosignatory2PublicKey, NetworkType.MIJIN_TEST);
/* end block 01 */

/* start block 02 */
const convertIntoMultisigTransaction = ModifyMultisigAccountTransaction.create(
    Deadline.create(),
    1,
    1,
    [
        new MultisigCosignatoryModification(
            MultisigCosignatoryModificationType.Add,
            cosignatory1,
        ),
        new MultisigCosignatoryModification(
            MultisigCosignatoryModificationType.Add,
            cosignatory2,
        )],
    NetworkType.MIJIN_TEST);
/* end block 02 */

/* start block 03 */
const aggregateTransaction = AggregateTransaction.createBonded(
    Deadline.create(),
    [convertIntoMultisigTransaction.toAggregate(account.publicAccount)],
    NetworkType.MIJIN_TEST);
/* end block 03 */

/* start block 04 */
const networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
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

const hashLockTransactionSigned = account.sign(hashLockTransaction, networkGenerationHash);

listener.open().then(() => {

    transactionHttp
        .announce(hashLockTransactionSigned)
        .subscribe(x => console.log(x), err => console.error(err));

    listener
        .confirmed(account.address)
        .pipe(
            filter((transaction) => transaction.transactionInfo !== undefined
                && transaction.transactionInfo.hash === hashLockTransactionSigned.hash),
            mergeMap(ignored => transactionHttp.announceAggregateBonded(signedTransaction))
        )
        .subscribe(announcedAggregateBonded => console.log(announcedAggregateBonded),
            err => console.error(err));
});
/* end block 05 */
