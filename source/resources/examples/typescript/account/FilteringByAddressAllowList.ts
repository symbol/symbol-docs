/*
 *
 * Copyright 2019 NEM
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
    AccountPropertyTransaction,
    Address,
    Deadline,
    NetworkType,
    PropertyModificationType,
    PropertyType,
    TransactionHttp
} from "nem2-sdk";

/* start block 01 */
const companyAddress = Address.createFromRawAddress('SBI774-YMFDZI-FPEPC5-4EKRC2-5DKDZJ-H2QVRW-4HBP');
const addressFilter = AccountPropertyTransaction.createAddressFilter(PropertyModificationType.Add, companyAddress);
/* end block 01 */

/* start block 02 */
const transaction = AccountPropertyTransaction
    .createAddressPropertyModificationTransaction(
        Deadline.create(),
        PropertyType.AllowAddress,
        [addressFilter],
        NetworkType.MIJIN_TEST);
/* end block 02 */

/* start block 03 */
const productPrivateKey = process.env.PRIVATE_KEY as string;
const productAccount = Account.createFromPrivateKey(productPrivateKey, NetworkType.MIJIN_TEST)
const signedTransaction = productAccount.sign(transaction);

const transactionHttp = new TransactionHttp('http://localhost:3000');
transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
/* end block 03 */
