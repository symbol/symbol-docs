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
const nem2_sdk_1 = require("nem2-sdk");
/* start block 01 */
// replace with network type
const networkType = nem2_sdk_1.NetworkType.TEST_NET;
// replace with multisig public key
const multisigAccountPublicKey = '3A537D5A1AF51158C42F80A199BB58351DBF3253C4A6A1B7BD1014682FB595EA';
const multisigAccount = nem2_sdk_1.PublicAccount.createFromPublicKey(multisigAccountPublicKey, networkType);
// replace with new cosignatory public key
const newCosignatoryPublicKey = '17E42BDF5B7FF5001DC96A262A1141FFBE3F09A3A45DE7C095AAEA14F45C0DA0';
const newCosignatoryAccount = nem2_sdk_1.PublicAccount.createFromPublicKey(newCosignatoryPublicKey, networkType);
/* end block 01 */
/* start block 02 */
const multisigAccountModificationTransaction = nem2_sdk_1.MultisigAccountModificationTransaction.create(nem2_sdk_1.Deadline.create(), 0, 0, [newCosignatoryAccount], [], networkType);
/* end block 02 */
/* start block 03 */
const aggregateTransaction = nem2_sdk_1.AggregateTransaction.createBonded(nem2_sdk_1.Deadline.create(), [multisigAccountModificationTransaction.toAggregate(multisigAccount)], networkType, [], nem2_sdk_1.UInt64.fromUint(2000000));
// replace with cosignatory private key
const cosignatoryPrivateKey = '1111111111111111111111111111111111111111111111111111111111111111';
const cosignatoryAccount = nem2_sdk_1.Account.createFromPrivateKey(cosignatoryPrivateKey, networkType);
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = 'CC42AAD7BD45E8C276741AB2524BC30F5529AF162AD12247EF9A98D6B54A385B';
const signedTransaction = cosignatoryAccount.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
/* end block 03 */
/* start block 04 */
// replace with symbol.xym id
const networkCurrencyMosaicId = new nem2_sdk_1.MosaicId('75AF035421401EF0');
// replace with network currency divisibility
const networkCurrencyDivisibility = 6;
const hashLockTransaction = nem2_sdk_1.HashLockTransaction.create(nem2_sdk_1.Deadline.create(), new nem2_sdk_1.Mosaic(networkCurrencyMosaicId, nem2_sdk_1.UInt64.fromUint(10 * Math.pow(10, networkCurrencyDivisibility))), nem2_sdk_1.UInt64.fromUint(480), signedTransaction, networkType, nem2_sdk_1.UInt64.fromUint(2000000));
const signedHashLockTransaction = cosignatoryAccount.sign(hashLockTransaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-xym-harvest-20.us-west-1.nemtech.network:3000';
const repositoryFactory = new nem2_sdk_1.RepositoryFactoryHttp(nodeUrl, networkType, networkGenerationHash);
const listener = repositoryFactory.createListener();
const receiptHttp = repositoryFactory.createReceiptRepository();
const transactionHttp = repositoryFactory.createTransactionRepository();
const transactionService = new nem2_sdk_1.TransactionService(transactionHttp, receiptHttp);
listener.open().then(() => {
    transactionService.announceHashLockAggregateBonded(signedHashLockTransaction, signedTransaction, listener);
    listener.close();
});
/* end block 04 */
