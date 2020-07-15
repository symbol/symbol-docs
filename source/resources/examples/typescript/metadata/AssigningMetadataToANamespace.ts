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
    NamespaceId,
    NamespaceMetadataTransaction,
    NetworkType,
    RepositoryFactoryHttp,
    UInt64,
} from 'symbol-sdk';

/* start block 01 */
// replace with network type
const networkType = NetworkType.TEST_NET;
// replace with company private key
const companyPrivateKey = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
const companyAccount = Account.createFromPrivateKey(companyPrivateKey, networkType);
// replace with namespace name
const namespaceId = new NamespaceId('cc');
const name = 'ComfyClothingCompany';
const email = 'info@comfyclothingcompany';
const address = 'ComfyClothingCompany HQ';
const phone = '000-0000';

const nameMetadataTransaction = NamespaceMetadataTransaction.create(
    Deadline.create(),
    companyAccount.address,
    KeyGenerator.generateUInt64Key('NAME'),
    namespaceId,
    name.length,
    name,
    networkType,
);

const emailMetadataTransaction = NamespaceMetadataTransaction.create(
    Deadline.create(),
    companyAccount.address,
    KeyGenerator.generateUInt64Key('EMAIL'),
    namespaceId,
    email.length,
    email,
    networkType,
);

const addressMetadataTransaction = NamespaceMetadataTransaction.create(
    Deadline.create(),
    companyAccount.address,
    KeyGenerator.generateUInt64Key('ADDRESS'),
    namespaceId,
    address.length,
    address,
    networkType,
);

const phoneMetadataTransaction = NamespaceMetadataTransaction.create(
    Deadline.create(),
    companyAccount.address,
    KeyGenerator.generateUInt64Key('PHONE'),
    namespaceId,
    phone.length,
    phone,
    networkType,
);
/* end block 01 */

/* start block 02 */
const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [
        nameMetadataTransaction.toAggregate(companyAccount.publicAccount),
        emailMetadataTransaction.toAggregate(companyAccount.publicAccount),
        addressMetadataTransaction.toAggregate(companyAccount.publicAccount),
        phoneMetadataTransaction.toAggregate(companyAccount.publicAccount),
    ],
    networkType,
    [],
    UInt64.fromUint(2000000));
/* end block 02 */

/* start block 03 */
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash = '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';
const signedTransaction = companyAccount.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);

const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();

transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 03 */
