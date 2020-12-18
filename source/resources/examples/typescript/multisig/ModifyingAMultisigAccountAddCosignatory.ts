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
  MultisigAccountModificationTransaction,
  PublicAccount,
  RepositoryFactoryHttp,
  TransactionService,
  UInt64,
} from 'symbol-sdk';

const example = async (): Promise<void> => {
  try {
    // Network information
    const nodeUrl = 'http://api-01.us-east-1.0.10.0.x.symboldev.network:3000';
    const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
    const epochAdjustment = await repositoryFactory
      .getEpochAdjustment()
      .toPromise();
    const networkType = await repositoryFactory.getNetworkType().toPromise();
    const networkGenerationHash = await repositoryFactory
      .getGenerationHash()
      .toPromise();
    // Returns the network main currency, symbol.xym
    const { currency } = await repositoryFactory.getCurrencies().toPromise();

    /* start block 01 */
    // Replace with multisig public key
    const multisigAccountPublicKey =
      '3A537D5A1AF51158C42F80A199BB58351DBF3253C4A6A1B7BD1014682FB595EA';
    const multisigAccount = PublicAccount.createFromPublicKey(
      multisigAccountPublicKey,
      networkType,
    );
    // Replace with new cosignatory public key
    const newCosignatoryPublicKey =
      '17E42BDF5B7FF5001DC96A262A1141FFBE3F09A3A45DE7C095AAEA14F45C0DA0';
    const newCosignatoryAccount = PublicAccount.createFromPublicKey(
      newCosignatoryPublicKey,
      networkType,
    );
    /* end block 01 */

    /* start block 02 */
    const multisigAccountModificationTransaction = MultisigAccountModificationTransaction.create(
      Deadline.create(epochAdjustment),
      0,
      0,
      [newCosignatoryAccount.address],
      [],
      networkType,
    );
    /* end block 02 */

    /* start block 03 */
    const maxFee = UInt64.fromUint(2000000);
    const aggregateTransaction = AggregateTransaction.createBonded(
      Deadline.create(epochAdjustment),
      [multisigAccountModificationTransaction.toAggregate(multisigAccount)],
      networkType,
      [],
      maxFee,
    );

    // Replace with cosignatory private key
    const cosignatoryPrivateKey =
      '1111111111111111111111111111111111111111111111111111111111111111';
    const cosignatoryAccount = Account.createFromPrivateKey(
      cosignatoryPrivateKey,
      networkType,
    );
    console.log(cosignatoryAccount.address.plain());
    const signedTransaction = cosignatoryAccount.sign(
      aggregateTransaction,
      networkGenerationHash,
    );
    console.log('Aggregate transaction hash: ' + signedTransaction.hash);
    /* end block 03 */

    /* start block 04 */
    const hashLockTransaction = HashLockTransaction.create(
      Deadline.create(epochAdjustment),
      currency.createRelative(10),
      UInt64.fromUint(480),
      signedTransaction,
      networkType,
      maxFee,
    );

    const signedHashLockTransaction = cosignatoryAccount.sign(
      hashLockTransaction,
      networkGenerationHash,
    );
    console.log('Transaction Hash:', signedHashLockTransaction.hash);

    const listener = repositoryFactory.createListener();
    const receiptHttp = repositoryFactory.createReceiptRepository();
    const transactionHttp = repositoryFactory.createTransactionRepository();
    const transactionService = new TransactionService(
      transactionHttp,
      receiptHttp,
    );

    console.log('Waiting for confirmation...');
    listener.open().then(() => {
      transactionService
        .announceHashLockAggregateBonded(
          signedHashLockTransaction,
          signedTransaction,
          listener,
        )
        .subscribe(
          () => {
            console.log('Confirmed!');
            listener.close();
          },
          (err) => {
            console.log(err);
            listener.close();
          },
        );
    });
    /* end block 04 */
  } catch (e) {
    console.log(e);
  }
};
example().then();
