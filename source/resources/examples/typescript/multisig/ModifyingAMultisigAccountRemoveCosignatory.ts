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
    MultisigAccountModificationTransaction,
    NetworkType,
    PublicAccount,
    RepositoryFactoryHttp,
    UInt64,
} from 'symbol-sdk';

/* start block 01 */
// replace with network type
const networkType = NetworkType.TEST_NET;
// replace with multisig public key
const multisigAccountPublicKey = '3A537D5A1AF51158C42F80A199BB58351DBF3253C4A6A1B7BD1014682FB595EA';
const multisigAccount = PublicAccount.createFromPublicKey(multisigAccountPublicKey, networkType);
// replace with cosignatory public key
const cosignatoryToRemovePublicKey = '17E42BDF5B7FF5001DC96A262A1141FFBE3F09A3A45DE7C095AAEA14F45C0DA0';
const cosignatoryToRemove = PublicAccount.createFromPublicKey(cosignatoryToRemovePublicKey, networkType);
// replace with cosignatory private key
const cosignatoryPrivateKey = '1111111111111111111111111111111111111111111111111111111111111111';
const cosignatoryAccount =  Account.createFromPrivateKey(cosignatoryPrivateKey, networkType);

const multisigAccountModificationTransaction = MultisigAccountModificationTransaction.create(
    Deadline.create(),
    0,
    0,
    [],
    [cosignatoryToRemove],
    networkType);

const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [multisigAccountModificationTransaction.toAggregate(multisigAccount)],
    networkType,
    [],
    UInt64.fromUint(2000000));

// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '44D2225B8932C9A96DCB13508CBCDFFA9A9663BFBA2354FEEC8FCFCB7E19846C';
const signedTransaction = cosignatoryAccount.sign(aggregateTransaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-west-1.symboldev.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();

transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 01 */
