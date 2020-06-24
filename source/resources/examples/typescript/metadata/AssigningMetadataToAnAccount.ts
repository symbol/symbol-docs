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
    AccountMetadataTransaction,
    AggregateTransaction,
    Deadline,
    HashLockTransaction,
    KeyGenerator,
    Mosaic,
    MosaicId,
    NetworkType,
    PublicAccount,
    RepositoryFactoryHttp,
    TransactionService,
    UInt64,
} from 'symbol-sdk';

/* start block 01 */
// replace with key
const key = KeyGenerator.generateUInt64Key('CERT');
/* end block 01 */

/* start block 02 */
// replace with network type
const networkType = NetworkType.TEST_NET;

// replace with public key
const alicePublicKey = 'D04AB232742BB4AB3A1368BD4615E4E6D0224AB71A016BAF8520A332C9778737';
const alicePublicAccount = PublicAccount.createFromPublicKey(alicePublicKey, networkType);
// replace with value
const value = '123456';

const accountMetadataTransaction = AccountMetadataTransaction.create(
    Deadline.create(),
    alicePublicAccount.address,
    key,
    value.length,
    value,
    networkType,
);
/* end block 02 */

/* start block 03 */
// replace with bob private key
const bobPrivateKey = '0000000000000000000000000000000000000000000000000000000000000000';
const bobAccount = Account.createFromPrivateKey(bobPrivateKey, networkType);

const aggregateTransaction = AggregateTransaction.createBonded(
    Deadline.create(),
    [accountMetadataTransaction.toAggregate(bobAccount.publicAccount)],
    networkType,
    [],
    UInt64.fromUint(2000000));

// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash = '4009619EB7A9F824C5D0EE0E164E0F99CCD7906A475D7768FD60B452204BD0A2';
const signedTransaction = bobAccount.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
/* end block 03 */

/* start block 04 */
// replace with symbol.xym id
const networkCurrencyMosaicId = new MosaicId('05D6A80DE3C9ADCA');
// replace with network currency divisibility
const networkCurrencyDivisibility = 6;

const hashLockTransaction = HashLockTransaction.create(
    Deadline.create(),
    new Mosaic(networkCurrencyMosaicId,
        UInt64.fromUint(10 * Math.pow(10, networkCurrencyDivisibility))),
    UInt64.fromUint(480),
    signedTransaction,
    networkType,
    UInt64.fromUint(2000000));
const signedHashLockTransaction = bobAccount.sign(hashLockTransaction, networkGenerationHash);
/* end block 04 */

/* start block 05 */
// replace with node endpoint
const nodeUrl = 'http://api-01.ap-northeast-1.testnet-0951-v1.symboldev.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const listener = repositoryFactory.createListener();
const receiptHttp = repositoryFactory.createReceiptRepository();
const transactionHttp = repositoryFactory.createTransactionRepository();
const transactionService = new TransactionService(transactionHttp, receiptHttp);

listener.open().then(() => {
    transactionService
        .announceHashLockAggregateBonded(signedHashLockTransaction, signedTransaction, listener)
        .subscribe(
            (x) => console.log(x),
            (err) => console.log(err),
            () => listener.close());
});
/* end block 05 */
