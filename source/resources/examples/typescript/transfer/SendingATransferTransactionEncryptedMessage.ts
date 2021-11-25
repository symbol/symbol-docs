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
  Deadline,
  PublicAccount,
  RepositoryFactoryHttp,
  TransferTransaction,
  UInt64,
} from 'symbol-sdk';

const example = async (): Promise<void> => {
  //Network information
  const nodeUrl = 'NODE_URL';
  const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
  const epochAdjustment = await repositoryFactory
    .getEpochAdjustment()
    .toPromise();

  /* start block 01 */
  const networkType = await repositoryFactory.getNetworkType().toPromise();
  // replace with alice private key
  const alicePrivateKey =
    '1111111111111111111111111111111111111111111111111111111111111111';
  const aliceAccount = Account.createFromPrivateKey(
    alicePrivateKey,
    networkType,
  );
  // replace with certificate public key
  const certificatePublicKey =
    '3A537D5A1AF51158C42F80A199BB58351DBF3253C4A6A1B7BD1014682FB595EA';
  const certificatePublicAccount = PublicAccount.createFromPublicKey(
    certificatePublicKey,
    networkType,
  );

  const encryptedMessage = aliceAccount.encryptMessage(
    'This message is secret',
    certificatePublicAccount,
  );
  /* end block 01 */

  /* start block 02 */
  const transferTransaction = TransferTransaction.create(
    Deadline.create(epochAdjustment),
    certificatePublicAccount.address,
    [],
    encryptedMessage,
    networkType,
    UInt64.fromUint(2000000),
  );
  /* end block 02 */

  /* start block 03 */
  const networkGenerationHash = await repositoryFactory
    .getGenerationHash()
    .toPromise();
  const signedTransaction = aliceAccount.sign(
    transferTransaction,
    networkGenerationHash,
  );
  console.log(signedTransaction.hash);
  /* end block 03 */

  /* start block 04 */
  const transactionRepository = repositoryFactory.createTransactionRepository();

  const response = await transactionRepository
    .announce(signedTransaction)
    .toPromise();
  console.log(response);
  /* end block 04 */
};
example().then();
