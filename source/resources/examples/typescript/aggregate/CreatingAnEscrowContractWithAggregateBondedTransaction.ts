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
  HashLockTransaction,
  Mosaic,
  MosaicId,
  NetworkType,
  PlainMessage,
  PublicAccount,
  RepositoryFactoryHttp,
  TransactionService,
  TransferTransaction,
  UInt64,
} from 'symbol-sdk';

// Retrieve from node's /network/properties or RepositoryFactory
const epochAdjustment = 123456789;

/* start block 01 */
// replace with network type
const networkType = NetworkType.TEST_NET;
// replace with alice private key
const alicePrivateKey =
  '1111111111111111111111111111111111111111111111111111111111111111';
const aliceAccount = Account.createFromPrivateKey(alicePrivateKey, networkType);
// replace with ticket distributor public key
const ticketDistributorPublicKey =
  '20330294DC18D96BDEEF32FB02338A6462A0469CB451A081DE2F05B4302C0C0A';
const ticketDistributorPublicAccount = PublicAccount.createFromPublicKey(
  ticketDistributorPublicKey,
  networkType,
);
// replace with ticket mosaic id
const ticketMosaicId = new MosaicId('7cdf3b117a3c40cc');
// replace with ticket mosaic id divisibility
const ticketDivisibility = 0;
// replace with symbol.xym id
const networkCurrencyMosaicId = new MosaicId('5E62990DCAC5BE8A');
// replace with network currency divisibility
const networkCurrencyDivisibility = 6;

const aliceToTicketDistributorTx = TransferTransaction.create(
  Deadline.create(epochAdjustment),
  ticketDistributorPublicAccount.address,
  [
    new Mosaic(
      networkCurrencyMosaicId,
      UInt64.fromUint(100 * Math.pow(10, networkCurrencyDivisibility)),
    ),
  ],
  PlainMessage.create('send 100 symbol.xym to distributor'),
  networkType,
);

const ticketDistributorToAliceTx = TransferTransaction.create(
  Deadline.create(epochAdjustment),
  aliceAccount.address,
  [
    new Mosaic(
      ticketMosaicId,
      UInt64.fromUint(1 * Math.pow(10, ticketDivisibility)),
    ),
  ],
  PlainMessage.create('send 1 museum ticket to customer'),
  networkType,
);
/* end block 01 */

/* start block 02 */
const aggregateTransaction = AggregateTransaction.createBonded(
  Deadline.create(epochAdjustment),
  [
    aliceToTicketDistributorTx.toAggregate(aliceAccount.publicAccount),
    ticketDistributorToAliceTx.toAggregate(ticketDistributorPublicAccount),
  ],
  networkType,
  [],
  UInt64.fromUint(2000000),
);

// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash =
  '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';
const signedTransaction = aliceAccount.sign(
  aggregateTransaction,
  networkGenerationHash,
);
console.log('Aggregate Transaction Hash:', signedTransaction.hash);
/* end block 02 */

/* start block 03 */
const hashLockTransaction = HashLockTransaction.create(
  Deadline.create(epochAdjustment),
  new Mosaic(
    networkCurrencyMosaicId,
    UInt64.fromUint(10 * Math.pow(10, networkCurrencyDivisibility)),
  ),
  UInt64.fromUint(480),
  signedTransaction,
  networkType,
  UInt64.fromUint(2000000),
);

const signedHashLockTransaction = aliceAccount.sign(
  hashLockTransaction,
  networkGenerationHash,
);

// replace with node endpoint
const nodeUrl = 'NODE_URL';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const listener = repositoryFactory.createListener();
const receiptHttp = repositoryFactory.createReceiptRepository();
const transactionHttp = repositoryFactory.createTransactionRepository();
const transactionService = new TransactionService(transactionHttp, receiptHttp);

listener.open().then(() => {
  transactionService
    .announceHashLockAggregateBonded(
      signedHashLockTransaction,
      signedTransaction,
      listener,
    )
    .subscribe(
      (x) => console.log(x),
      (err) => console.log(err),
      () => listener.close(),
    );
});
/* end block 03 */
