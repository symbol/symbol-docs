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

// replace network type
const networkType = NetworkType.TEST_NET;
// replace with cosignatory private key
const cosignatoryPrivateKey =
  '0000000000000000000000000000000000000000000000000000000000000000';
const cosignatoryAccount = Account.createFromPrivateKey(
  cosignatoryPrivateKey,
  networkType,
);
// replace with multisig account public key
const multisigAccountPublicKey =
  '3A537D5A1AF51158C42F80A199BB58351DBF3253C4A6A1B7BD1014682FB595EA';
const multisigAccount = PublicAccount.createFromPublicKey(
  multisigAccountPublicKey,
  networkType,
);
// replace with recipient address
const recipientRawAddress = 'TCWYXK-VYBMO4-NBCUF3-AXKJMX-CGVSYQ-OS7ZG2-TLI';
const recipientAddress = Address.createFromRawAddress(recipientRawAddress);
// replace with symbol.xym id
const networkCurrencyMosaicId = new MosaicId('5E62990DCAC5BE8A');
// replace with network currency divisibility
const networkCurrencyDivisibility = 6;

const transferTransaction = TransferTransaction.create(
  Deadline.create(epochAdjustment),
  recipientAddress,
  [
    new Mosaic(
      networkCurrencyMosaicId,
      UInt64.fromUint(10 * Math.pow(10, networkCurrencyDivisibility)),
    ),
  ],
  PlainMessage.create('sending 10 symbol.xym'),
  networkType,
);

/* start block 01 */
const aggregateTransaction = AggregateTransaction.createBonded(
  Deadline.create(epochAdjustment),
  [transferTransaction.toAggregate(multisigAccount)],
  networkType,
  [],
  UInt64.fromUint(2000000),
);

// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash =
  '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';
const signedTransaction = cosignatoryAccount.sign(
  aggregateTransaction,
  networkGenerationHash,
);
console.log(signedTransaction.hash);
/* end block 01 */

/* start block 02 */
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

const signedHashLockTransaction = cosignatoryAccount.sign(
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
/* end block 02 */
