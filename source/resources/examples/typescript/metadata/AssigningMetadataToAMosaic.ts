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
    AggregateTransaction,
    Deadline,
    KeyGenerator,
    MosaicMetadataTransaction,
    NamespaceId,
    NetworkType,
    TransactionHttp
} from 'nem2-sdk';

/* start block 01 */
const companyPrivateKey = process.env.COMPANY_PRIVATE_KEY as string;
const companyAccount = Account.createFromPrivateKey(companyPrivateKey, NetworkType.MIJIN_TEST);
const mosaicId = new NamespaceId('cc.shares');

const isin = 'US00000000';
const isinMetadataTransaction = MosaicMetadataTransaction.create(
    Deadline.create(),
    companyAccount.publicKey,
    KeyGenerator.generateUInt64Key('ISIN'),
    mosaicId,
    isin.length,
    isin,
    NetworkType.MIJIN_TEST,
);
/* end block 01 */

/* start block 02 */
const name = 'ComfyClothingCompany';
const nameMetadataTransaction = MosaicMetadataTransaction.create(
    Deadline.create(),
    companyAccount.publicKey,
    KeyGenerator.generateUInt64Key('NAME'),
    mosaicId,
    name.length,
    name,
    NetworkType.MIJIN_TEST,
);
/* end block 02 */

/* start block 03 */
const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [isinMetadataTransaction.toAggregate(companyAccount.publicAccount),
        nameMetadataTransaction.toAggregate(companyAccount.publicAccount)],
    NetworkType.MIJIN_TEST,
    []);

/* end block 03 */

/* start block 04 */
const networkGenerationHash = process.env.NETWORK_GENERATION_HASH as string;
const signedTransaction = companyAccount.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);

const nodeUrl = 'http://localhost:3000';
const transactionHttp = new TransactionHttp(nodeUrl);
transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
/* end block 04 */
