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
    // Replace with candidate multisig private key
    const privateKey =
      'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
    const account = Account.createFromPrivateKey(privateKey, networkType);
    // Replace with cosignatory 1 public key
    const cosignatory1PublicKey =
      'D04AB232742BB4AB3A1368BD4615E4E6D0224AB71A016BAF8520A332C9778737';
    const cosignatory1 = PublicAccount.createFromPublicKey(
      cosignatory1PublicKey,
      networkType,
    );
    // Replace with cosignatory 2 public key
    const cosignatory2PublicKey =
      '462EE976890916E54FA825D26BDD0235F5EB5B6A143C199AB0AE5EE9328E08CE';
    const cosignatory2 = PublicAccount.createFromPublicKey(
      cosignatory2PublicKey,
      networkType,
    );
    /* end block 01 */

    /* start block 02 */
    const multisigAccountModificationTransaction = MultisigAccountModificationTransaction.create(
      Deadline.create(epochAdjustment),
      1,
      1,
      [cosignatory1.address, cosignatory2.address],
      [],
      networkType,
    );
    /* end block 02 */

    /* start block 03 */
    const maxFee = UInt64.fromUint(2000000);
    const aggregateTransaction = AggregateTransaction.createBonded(
      Deadline.create(epochAdjustment),
      [
        multisigAccountModificationTransaction.toAggregate(
          account.publicAccount,
        ),
      ],
      networkType,
      [],
      maxFee,
    );
    /* end block 03 */

    /* start block 04 */
    const signedTransaction = account.sign(
      aggregateTransaction,
      networkGenerationHash,
    );
    console.log('Aggregate transaction hash: ' + signedTransaction.hash);
    /* end block 04 */

    /* start block 05 */
    const hashLockTransaction = HashLockTransaction.create(
      Deadline.create(epochAdjustment),
      currency.createRelative(10),
      UInt64.fromUint(480),
      signedTransaction,
      networkType,
      maxFee,
    );

    const signedHashLockTransaction = account.sign(
      hashLockTransaction,
      networkGenerationHash,
    );
    console.log('Hashlock transaction hash: ' + signedHashLockTransaction.hash);

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
    /* end block 05 */
  } catch (e) {
    console.log(e);
  }
};
example().then();
