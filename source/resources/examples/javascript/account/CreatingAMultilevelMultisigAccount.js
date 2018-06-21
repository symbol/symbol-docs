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

const Account = nem2Sdk.Account,
    PublicAccount = nem2Sdk.PublicAccount,
    MultisigCosignatoryModification = nem2Sdk.MultisigCosignatoryModification,
    MultisigCosignatoryModificationType = nem2Sdk.MultisigCosignatoryModificationType,
    ModifyMultisigAccountTransaction = nem2Sdk.ModifyMultisigAccountTransaction,
    Deadline = nem2Sdk.Deadline,
    NetworkType = nem2Sdk.NetworkType,
    TransactionHttp = nem2Sdk.TransactionHttp;

// 01 - Create multisig #2 (1-of-2)
const multisig2PrivateKey = process.env.MULTISIG_2_PRIVATE_KEY;
const multisigAccount2 = Account.createFromPrivateKey(multisig2PrivateKey, NetworkType.MIJIN_TEST);

const cosignatoryAccount5PublicKey = '7D08373CFFE4154E129E04F0827E5F3D6907587E348757B0F87D2F839BF88246';
const cosignatory5 = PublicAccount.createFromPublicKey(cosignatoryAccount5PublicKey, NetworkType.MIJIN_TEST);

const cosignatoryAccount6PublicKey = '28AE57EC0E81967880C483BE99D4B6AF38E5DCD9F8B89D41F2E7619CFDB447C5';
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

const transactionHttp = new TransactionHttp('http://localhost:3000');

const signedTransaction2 = multisigAccount2.sign(convertMultisigAccount2Transaction);

transactionHttp
    .announce(signedTransaction2)
    .subscribe(x => console.log(x), err => console.error(err));

// 02 - Create multisig #3 (2-of-3)
const multisig3PrivateKey = process.env.MULTISIG_3_PRIVATE_KEY;
const multisigAccount3 = Account.createFromPrivateKey(multisig3PrivateKey, NetworkType.MIJIN_TEST);

const cosignatoryAccount7PublicKey = 'DAD5B5B7F7AE4ACEAB3F6A5FE05EA3186208D219A04B6C047C39A2B0EFF49511';
const cosignatory7 = PublicAccount.createFromPublicKey(cosignatoryAccount7PublicKey, NetworkType.MIJIN_TEST);

const cosignatoryAccount8PublicKey = 'E29302E0AF530292EABEDADF2DE2953BBFBB0BDD9A1F51FA0C857E87828BABA9';
const cosignatory8 = PublicAccount.createFromPublicKey(cosignatoryAccount8PublicKey, NetworkType.MIJIN_TEST);

const cosignatoryAccount4PublicKey = '473233D6B89671DCA4D334CF1059C31356CBF18120E484E33EEA9BDC09EEA515';
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

const signedTransaction3 = multisigAccount3.sign(convertMultisigAccount3Transaction);

transactionHttp
    .announce(signedTransaction3)
    .subscribe(x => console.log(x), err => console.error(err));

// 03 - Create multisig #1 (3-of-3)
const multisig1PrivateKey = process.env.MULTISIG_1_PRIVATE_KEY;
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

const signedTransaction1 = multisigAccount1.sign(convertMultisigAccount1Transaction);

transactionHttp
    .announce(signedTransaction1)
    .subscribe(x => console.log(x), err => console.error(err));