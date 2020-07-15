"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const symbol_sdk_1 = require("symbol-sdk");
/* start block 01 */
// replace with network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
// replace with multisig public key
const multisigAccountPublicKey = '3A537D5A1AF51158C42F80A199BB58351DBF3253C4A6A1B7BD1014682FB595EA';
const multisigAccount = symbol_sdk_1.PublicAccount.createFromPublicKey(multisigAccountPublicKey, networkType);
// replace with cosignatory public key
const cosignatoryToRemovePublicKey = '17E42BDF5B7FF5001DC96A262A1141FFBE3F09A3A45DE7C095AAEA14F45C0DA0';
const cosignatoryToRemove = symbol_sdk_1.PublicAccount.createFromPublicKey(cosignatoryToRemovePublicKey, networkType);
// replace with cosignatory private key
const cosignatoryPrivateKey = '1111111111111111111111111111111111111111111111111111111111111111';
const cosignatoryAccount = symbol_sdk_1.Account.createFromPrivateKey(cosignatoryPrivateKey, networkType);
const multisigAccountModificationTransaction = symbol_sdk_1.MultisigAccountModificationTransaction.create(symbol_sdk_1.Deadline.create(), 0, 0, [], [cosignatoryToRemove.address], networkType);
const aggregateTransaction = symbol_sdk_1.AggregateTransaction.createComplete(symbol_sdk_1.Deadline.create(), [multisigAccountModificationTransaction.toAggregate(multisigAccount)], networkType, [], symbol_sdk_1.UInt64.fromUint(2000000));
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash = '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';
const signedTransaction = cosignatoryAccount.sign(aggregateTransaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 01 */
