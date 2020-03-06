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
// replace with alice private key
const alicePrivateKey = '1111111111111111111111111111111111111111111111111111111111111111';
const aliceAccount = symbol_sdk_1.Account.createFromPrivateKey(alicePrivateKey, networkType);
// replace with ticket distributor public key
const ticketDistributorPublicKey = '20330294DC18D96BDEEF32FB02338A6462A0469CB451A081DE2F05B4302C0C0A';
const ticketDistributorPublicAccount = symbol_sdk_1.PublicAccount.createFromPublicKey(ticketDistributorPublicKey, networkType);
// replace with ticket mosaic id
const ticketMosaicId = new symbol_sdk_1.MosaicId('7cdf3b117a3c40cc');
// replace with ticket mosaic id divisibility
const ticketDivisibility = 0;
// replace with symbol.xym id
const networkCurrencyMosaicId = new symbol_sdk_1.MosaicId('51A99028058245A8');
// replace with network currency divisibility
const networkCurrencyDivisibility = 6;
const aliceToTicketDistributorTx = symbol_sdk_1.TransferTransaction.create(symbol_sdk_1.Deadline.create(), ticketDistributorPublicAccount.address, [new symbol_sdk_1.Mosaic(networkCurrencyMosaicId, symbol_sdk_1.UInt64.fromUint(100 * Math.pow(10, networkCurrencyDivisibility)))], symbol_sdk_1.PlainMessage.create('send 100 symbol.xym to distributor'), networkType);
const ticketDistributorToAliceTx = symbol_sdk_1.TransferTransaction.create(symbol_sdk_1.Deadline.create(), aliceAccount.address, [new symbol_sdk_1.Mosaic(ticketMosaicId, symbol_sdk_1.UInt64.fromUint(1 * Math.pow(10, ticketDivisibility)))], symbol_sdk_1.PlainMessage.create('send 1 museum ticket to customer'), networkType);
/* end block 01 */
/* start block 02 */
const aggregateTransaction = symbol_sdk_1.AggregateTransaction.createBonded(symbol_sdk_1.Deadline.create(), [aliceToTicketDistributorTx.toAggregate(aliceAccount.publicAccount),
    ticketDistributorToAliceTx.toAggregate(ticketDistributorPublicAccount)], networkType, [], symbol_sdk_1.UInt64.fromUint(2000000));
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '44D2225B8932C9A96DCB13508CBCDFFA9A9663BFBA2354FEEC8FCFCB7E19846C';
const signedTransaction = aliceAccount.sign(aggregateTransaction, networkGenerationHash);
console.log('Aggregate Transaction Hash:', signedTransaction.hash);
/* end block 02 */
/* start block 03 */
const hashLockTransaction = symbol_sdk_1.HashLockTransaction.create(symbol_sdk_1.Deadline.create(), new symbol_sdk_1.Mosaic(networkCurrencyMosaicId, symbol_sdk_1.UInt64.fromUint(10 * Math.pow(10, networkCurrencyDivisibility))), symbol_sdk_1.UInt64.fromUint(480), signedTransaction, networkType, symbol_sdk_1.UInt64.fromUint(2000000));
const signedHashLockTransaction = aliceAccount.sign(hashLockTransaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-2-01.us-west-1.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const listener = repositoryFactory.createListener();
const receiptHttp = repositoryFactory.createReceiptRepository();
const transactionHttp = repositoryFactory.createTransactionRepository();
const transactionService = new symbol_sdk_1.TransactionService(transactionHttp, receiptHttp);
listener.open().then(() => {
    transactionService
        .announceHashLockAggregateBonded(signedHashLockTransaction, signedTransaction, listener)
        .subscribe((x) => console.log(x), (err) => console.log(err), () => listener.close());
});
/* end block 03 */
