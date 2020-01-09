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
// replace with alice private key
const alicePrivateKey = '1111111111111111111111111111111111111111111111111111111111111111';
const aliceAccount = nem2_sdk_1.Account.createFromPrivateKey(alicePrivateKey, networkType);
// replace with ticket distributor public key
const ticketDistributorPublicKey = '20330294DC18D96BDEEF32FB02338A6462A0469CB451A081DE2F05B4302C0C0A';
const ticketDistributorPublicAccount = nem2_sdk_1.PublicAccount.createFromPublicKey(ticketDistributorPublicKey, networkType);
// replace with ticket mosaic id
const ticketMosaicId = new nem2_sdk_1.MosaicId('7cdf3b117a3c40cc');
// replace with ticket mosaic id divisibility
const ticketDivisibility = 0;
// replace with nem.xem id
const networkCurrencyMosaicId = new nem2_sdk_1.MosaicId('75AF035421401EF0');
// replace with network currency divisibility
const networkCurrencyDivisibility = 6;
const aliceToTicketDistributorTx = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), ticketDistributorPublicAccount.address, [new nem2_sdk_1.Mosaic(networkCurrencyMosaicId, nem2_sdk_1.UInt64.fromUint(100 * Math.pow(10, networkCurrencyDivisibility)))], nem2_sdk_1.PlainMessage.create('send 100 nem.xem to distributor'), networkType);
const ticketDistributorToAliceTx = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), aliceAccount.address, [new nem2_sdk_1.Mosaic(ticketMosaicId, nem2_sdk_1.UInt64.fromUint(1 * Math.pow(10, ticketDivisibility)))], nem2_sdk_1.PlainMessage.create('send 1 museum ticket to customer'), networkType);
/* end block 01 */
/* start block 02 */
const aggregateTransaction = nem2_sdk_1.AggregateTransaction.createBonded(nem2_sdk_1.Deadline.create(), [aliceToTicketDistributorTx.toAggregate(aliceAccount.publicAccount),
    ticketDistributorToAliceTx.toAggregate(ticketDistributorPublicAccount)], networkType, [], nem2_sdk_1.UInt64.fromUint(2000000));
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = 'CC42AAD7BD45E8C276741AB2524BC30F5529AF162AD12247EF9A98D6B54A385B';
const signedTransaction = aliceAccount.sign(aggregateTransaction, networkGenerationHash);
console.log('Aggregate Transaction Hash:', signedTransaction.hash);
/* end block 02 */
/* start block 03 */
const hashLockTransaction = nem2_sdk_1.HashLockTransaction.create(nem2_sdk_1.Deadline.create(), new nem2_sdk_1.Mosaic(networkCurrencyMosaicId, nem2_sdk_1.UInt64.fromUint(10 * Math.pow(10, networkCurrencyDivisibility))), nem2_sdk_1.UInt64.fromUint(480), signedTransaction, networkType, nem2_sdk_1.UInt64.fromUint(2000000));
const signedHashLockTransaction = aliceAccount.sign(hashLockTransaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-harvest-20.us-west-1.nemtech.network:3000';
const listener = new nem2_sdk_1.Listener(nodeUrl);
const transactionService = new nem2_sdk_1.TransactionService(nodeUrl);
listener.open().then(() => {
    transactionService.announceHashLockAggregateBonded(signedHashLockTransaction, signedTransaction, listener);
});
/* end block 03 */
