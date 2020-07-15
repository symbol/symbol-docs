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
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const symbol_sdk_1 = require("symbol-sdk");
/* start block 01 */
// replace with network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
// replace with bob private key
const bobPrivateKey = '0000000000000000000000000000000000000000000000000000000000000000';
const bobAccount = symbol_sdk_1.Account.createFromPrivateKey(bobPrivateKey, networkType);
// replace with alice public key
const alicePublicKey = 'D04AB232742BB4AB3A1368BD4615E4E6D0224AB71A016BAF8520A332C9778737';
const alicePublicAccount = symbol_sdk_1.PublicAccount.createFromPublicKey(alicePublicKey, networkType);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
const metadataHttp = new symbol_sdk_1.MetadataHttp(nodeUrl);
const metadataService = new symbol_sdk_1.MetadataTransactionService(metadataHttp);
// replace with key and new value
const key = symbol_sdk_1.KeyGenerator.generateUInt64Key('CERT');
const newValue = '000000';
const accountMetadataTransaction = metadataService.createMetadataTransaction(symbol_sdk_1.Deadline.create(), networkType, symbol_sdk_1.MetadataType.Account, alicePublicAccount.address, key, newValue, bobAccount.publicAccount.address);
/* end block 01 */
/* start block 02 */
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash = '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';
const signedAggregateTransaction = accountMetadataTransaction
    .pipe(operators_1.mergeMap((transaction) => {
    const aggregateTransaction = symbol_sdk_1.AggregateTransaction.createBonded(symbol_sdk_1.Deadline.create(), [transaction.toAggregate(bobAccount.publicAccount)], networkType, [], symbol_sdk_1.UInt64.fromUint(2000000));
    const signedTransaction = bobAccount.sign(aggregateTransaction, networkGenerationHash);
    return rxjs_1.of(signedTransaction);
}));
// replace with symbol.xym id
const networkCurrencyMosaicId = new symbol_sdk_1.MosaicId('5E62990DCAC5BE8A');
// replace with network currency divisibility
const networkCurrencyDivisibility = 6;
const signedAggregateHashLock = signedAggregateTransaction.pipe(operators_1.mergeMap((signedAggregateTransaction) => {
    const hashLockTransaction = symbol_sdk_1.HashLockTransaction.create(symbol_sdk_1.Deadline.create(), new symbol_sdk_1.Mosaic(networkCurrencyMosaicId, symbol_sdk_1.UInt64.fromUint(10 * Math.pow(10, networkCurrencyDivisibility))), symbol_sdk_1.UInt64.fromUint(480), signedAggregateTransaction, networkType, symbol_sdk_1.UInt64.fromUint(2000000));
    const signedTransaction = bobAccount.sign(hashLockTransaction, networkGenerationHash);
    const signedAggregateHashLock = {
        aggregate: signedAggregateTransaction,
        hashLock: signedTransaction,
    };
    console.log('Aggregate Transaction Hash:', signedAggregateTransaction.hash + '\n');
    console.log('HashLock Transaction Hash:', signedTransaction.hash + '\n');
    return rxjs_1.of(signedAggregateHashLock);
}));
/* end block 03 */
/* start block 04 */
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const listener = repositoryFactory.createListener();
const receiptHttp = repositoryFactory.createReceiptRepository();
const transactionHttp = repositoryFactory.createTransactionRepository();
const transactionService = new symbol_sdk_1.TransactionService(transactionHttp, receiptHttp);
listener.open().then(() => {
    signedAggregateHashLock.pipe(operators_1.mergeMap((signedAggregateHashLock) => transactionService.announceHashLockAggregateBonded(signedAggregateHashLock.hashLock, signedAggregateHashLock.aggregate, listener))).subscribe((ignored) => console.log('Transaction confirmed'), (err) => console.log(err), () => listener.close());
});
/* end block 04 */
