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

import { map, mergeMap } from 'rxjs/operators';
import {
  Account,
  AggregateTransaction,
  CosignatureSignedTransaction,
  CosignatureTransaction,
  NetworkType,
  RepositoryFactoryHttp,
  TransactionGroup,
} from 'symbol-sdk';

/* start block 01 */
const cosignAggregateBondedTransaction = (
  transaction: AggregateTransaction,
  account: Account,
): CosignatureSignedTransaction => {
  const cosignatureTransaction = CosignatureTransaction.create(transaction);
  return account.signCosignatureTransaction(cosignatureTransaction);
};
/* end block 01 */

/* start block 02 */
// replace with network type
const networkType = NetworkType.TEST_NET;
// replace with private key
const privateKey =
  '0000000000000000000000000000000000000000000000000000000000000000';
const account = Account.createFromPrivateKey(privateKey, networkType);
// replace with node endpoint
// replace with transaction hash to cosign
const transactionHash =
  '0000000000000000000000000000000000000000000000000000000000000000';
/* end block 02 */

/* start block 03 */
const nodeUrl = 'NODE_URL';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();

transactionHttp
  .getTransaction(transactionHash, TransactionGroup.Partial)
  .pipe(
    map((transaction) =>
      cosignAggregateBondedTransaction(
        transaction as AggregateTransaction,
        account,
      ),
    ),
    mergeMap((cosignatureSignedTransaction) =>
      transactionHttp.announceAggregateBondedCosignature(
        cosignatureSignedTransaction,
      ),
    ),
  )
  .subscribe(
    (announcedTransaction) => console.log(announcedTransaction),
    (err) => console.error(err),
  );
/* end block 03 */
