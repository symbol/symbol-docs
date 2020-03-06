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
    Mosaic,
    MosaicId,
    NetworkType,
    PlainMessage,
    RepositoryFactoryHttp,
    TransferTransaction,
    UInt64,
} from 'symbol-sdk';

/* start block 01 */
// replace with network type
const networkType = NetworkType.TEST_NET;
// replace with sender private key
const privateKey = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
const account = Account.createFromPrivateKey(privateKey, networkType);
// replace with address
const aliceAddress =  'TBULEA-UG2CZQ-ISUR44-2HWA6U-AKGWIX-HDABJV-IPS4';
const aliceAccount = Address.createFromRawAddress(aliceAddress);
// replace with address
const bobAddress = 'TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP';
const bobAccount = Address.createFromRawAddress(bobAddress);
// replace with symbol.xym id
const networkCurrencyMosaicId = new MosaicId('51A99028058245A8');
// replace with network currency divisibility
const networkCurrencyDivisibility = 6;

const mosaic = new Mosaic (networkCurrencyMosaicId,
    UInt64.fromUint(10 * Math.pow(10, networkCurrencyDivisibility)));

const aliceTransferTransaction = TransferTransaction.create(
    Deadline.create(),
    aliceAccount,
    [mosaic],
    PlainMessage.create('payout'),
    networkType);
const bobTransferTransaction = TransferTransaction.create(
    Deadline.create(),
    bobAccount,
    [mosaic],
    PlainMessage.create('payout'),
    networkType);
/* end block 01 */

/* start block 02 */
const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [aliceTransferTransaction.toAggregate(account.publicAccount),
        bobTransferTransaction.toAggregate(account.publicAccount)],
    networkType,
    [],
    UInt64.fromUint(2000000));
/* end block 02 */

/* start block 03 */
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '44D2225B8932C9A96DCB13508CBCDFFA9A9663BFBA2354FEEC8FCFCB7E19846C';
const signedTransaction = account.sign(aggregateTransaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-west-1.symboldev.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();

transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 03 */
