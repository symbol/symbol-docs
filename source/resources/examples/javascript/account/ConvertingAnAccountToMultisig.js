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
const TransactionHttp = nem2Sdk.TransactionHttp,
    Account = nem2Sdk.Account,
    PublicAccount = nem2Sdk.PublicAccount,
    ModifyMultisigAccountTransaction = nem2Sdk.ModifyMultisigAccountTransaction,
    Deadline = nem2Sdk.Deadline,
    MultisigCosignatoryModification = nem2Sdk.MultisigCosignatoryModification,
    MultisigCosignatoryModificationType = nem2Sdk.MultisigCosignatoryModificationType,
    NetworkType = nem2Sdk.NetworkType;

// 01 - Setup
const transactionHttp = new TransactionHttp('http://localhost:3000');

const privateKey = process.env.PRIVATE_KEY; // Private key of the account to convert into multisig
const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

const cosignatory1PublicKey = '7D08373CFFE4154E129E04F0827E5F3D6907587E348757B0F87D2F839BF88246';
const cosignatory1 = PublicAccount.createFromPublicKey(cosignatory1PublicKey, NetworkType.MIJIN_TEST);
const cosignatory2PublicKey = 'F82527075248B043994F1CAFD965F3848324C9ABFEC506BC05FBCF5DD7307C9D';
const cosignatory2 = PublicAccount.createFromPublicKey(cosignatory2PublicKey, NetworkType.MIJIN_TEST);

// 02 - Create ModifyMultisigAccountTransaction
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

// 03 - Sign and announce the transaction from the account to convert into multisig
const signedTransaction = account.sign(convertIntoMultisigTransaction);

transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));