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
    Deadline,
    NetworkType,
    PlainMessage,
    PublicAccount,
    TransactionHttp,
    TransferTransaction,
    NetworkCurrencyMosaic
} from "nem2-sdk";

/* start block 01 */
const transactionHttp = new TransactionHttp( 'http://localhost:3000');

const cosignatoryPrivateKey = process.env.COSIGNATORY_1_PRIVATE_KEY as string;
const cosignatoryAccount = Account.createFromPrivateKey(cosignatoryPrivateKey, NetworkType.MIJIN_TEST);

const multisigAccountPublicKey = process.env.MULTISIG_ACCOUNT_PUBLIC_KEY as string;
const multisigAccount = PublicAccount.createFromPublicKey(multisigAccountPublicKey, NetworkType.MIJIN_TEST);

const recipientAddress = Address.createFromRawAddress('SD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54');
/* end block 01 */

/* start block 02 */
const transferTransaction = TransferTransaction.create(
    Deadline.create(),
    recipientAddress,
    [NetworkCurrencyMosaic.createRelative(10)],
    PlainMessage.create('sending 10 cat.currency'),
    NetworkType.MIJIN_TEST);
/* end block 02 */

/* start block 03 */
const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [transferTransaction.toAggregate(multisigAccount),],
    NetworkType.MIJIN_TEST,
    []);
/* end block 03 */

/* start block 04 */
const networkGenerationHash = process.env.NETWORK_GENERATION_HASH as string;
const signedTransaction = cosignatoryAccount.sign(aggregateTransaction, networkGenerationHash);

transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
/* end block 04 */
