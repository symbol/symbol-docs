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
  MultisigAccountModificationTransaction,
  PublicAccount,
  RepositoryFactoryHttp,
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

    /* start block 01 */
    // Replace with cosignatory private key
    const cosignatoryPrivateKey =
      '1111111111111111111111111111111111111111111111111111111111111111';
    const cosignatoryAccount = Account.createFromPrivateKey(
      cosignatoryPrivateKey,
      networkType,
    );
    // Replace with multisig account private key
    const multisigAccountPublicKey =
      '3A537D5A1AF51158C42F80A199BB58351DBF3253C4A6A1B7BD1014682FB595EA';
    const multisigAccount = PublicAccount.createFromPublicKey(
      multisigAccountPublicKey,
      networkType,
    );
    /* end block 01 */

    /* start block 02 */
    const multisigAccountModificationTransaction = MultisigAccountModificationTransaction.create(
      Deadline.create(epochAdjustment),
      1,
      0,
      [],
      [],
      networkType,
    );
    /* end block 02 */

    /* start block 03 */
    const maxFee = UInt64.fromUint(2000000);
    const aggregateTransaction = AggregateTransaction.createComplete(
      Deadline.create(epochAdjustment),
      [multisigAccountModificationTransaction.toAggregate(multisigAccount)],
      networkType,
      [],
      maxFee,
    );

    const signedTransaction = cosignatoryAccount.sign(
      aggregateTransaction,
      networkGenerationHash,
    );
    console.log('Transaction Hash:', signedTransaction.hash);
    const transactionHttp = repositoryFactory.createTransactionRepository();

    transactionHttp.announce(signedTransaction).subscribe(
      (x) => console.log(x),
      (err) => console.error(err),
    );
    /* end block 03 */
  } catch (e) {
    console.log(e);
  }
};
example().then();
