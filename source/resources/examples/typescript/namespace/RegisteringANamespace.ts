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
  NamespaceRegistrationTransaction,
  NetworkType,
  RepositoryFactoryHttp,
  UInt64,
} from 'symbol-sdk';

const example = async (): Promise<void> => {
  const nodeUrl = 'http://api-01.us-east-1.testnet.symboldev.network:3000';
  const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
  // Retrieve from node's /network/properties or RepositoryFactory
  const epochAdjustment = await repositoryFactory
    .getEpochAdjustment()
    .toPromise();
  const networkType = await repositoryFactory.getNetworkType().toPromise();
  const networkGenerationHash = await repositoryFactory
    .getGenerationHash()
    .toPromise();
  
  /* start block 01 */
  // replace with namespace name
  const namespaceName = 'foo';
  // replace with duration (in blocks)
  const duration = UInt64.fromUint(172800);
  // replace with network type
  
  const namespaceRegistrationTransaction = NamespaceRegistrationTransaction.createRootNamespace(
    Deadline.create(epochAdjustment),
    namespaceName,
    duration,
    networkType,
    UInt64.fromUint(2000000),
  );
  
  // replace with private key
  const privateKey =
    '1111111111111111111111111111111111111111111111111111111111111111';
  const account = Account.createFromPrivateKey(privateKey, networkType);
  // replace with meta.networkGenerationHash (nodeUrl + '/node/info')
  const signedTransaction = account.sign(
    namespaceRegistrationTransaction,
    networkGenerationHash,
  );
  // replace with node endpoint
  
  const transactionHttp = repositoryFactory.createTransactionRepository();
  
  transactionHttp.announce(signedTransaction).subscribe(
    (x) => console.log(x),
    (err) => console.error(err),
  );
  /* end block 01 */

}
example().then();
