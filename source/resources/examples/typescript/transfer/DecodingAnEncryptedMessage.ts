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

import { map } from 'rxjs/operators';
import {
  Account,
  NetworkType,
  PublicAccount,
  RepositoryFactoryHttp,
  TransactionGroup,
  TransferTransaction,
} from 'symbol-sdk';

/* start block 01 */
// replace with network type
const networkType = NetworkType.TEST_NET;

// replace with certificate private key
const certificatePrivateKey =
  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
const certificateAccount = Account.createFromPrivateKey(
  certificatePrivateKey,
  networkType,
);
// replace with alice public key
const alicePublicKey =
  'D04AB232742BB4AB3A1368BD4615E4E6D0224AB71A016BAF8520A332C9778737';
const alicePublicAccount = PublicAccount.createFromPublicKey(
  alicePublicKey,
  networkType,
);
// replace with node endpoint
const nodeUrl = 'NODE_URL';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
// replace with transaction hash
const transactionHash =
  '0000000000000000000000000000000000000000000000000000000000000000';

transactionHttp
  .getTransaction(transactionHash, TransactionGroup.Confirmed)
  .pipe(map((x) => x as TransferTransaction))
  .subscribe(
    (transaction) => {
      console.log('Raw message: ', transaction.message.payload);
      console.log(
        'Message: ',
        certificateAccount.decryptMessage(
          transaction.message,
          alicePublicAccount,
        ).payload,
      );
    },
    (err) => console.log(err),
  );
/* end block 01 */
