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
  AliasAction,
  AliasTransaction,
  Deadline,
  NamespaceId,
  RepositoryFactoryHttp,
  UInt64,
} from 'symbol-sdk';

const example = async (): Promise<void> => {
  try {
    // Network information
    const nodeUrl = 'http://api-01.us-east-1.testnet.symboldev.network:3000';
    const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
    const epochAdjustment = await repositoryFactory
      .getEpochAdjustment()
      .toPromise();
    const networkType = await repositoryFactory.getNetworkType().toPromise();
    const networkGenerationHash = await repositoryFactory
      .getGenerationHash()
      .toPromise();

    /* start block 01 */
    // Replace with namespace name
    const namespaceId = new NamespaceId('foo');
    // Replace with address
    const rawAddress = 'TCHBDE-NCLKEB-ILBPWP-3JPB2X-NY64OE-7PYHHE-32I';
    const address = Address.createFromRawAddress(rawAddress);
    /* end block 01 */

    /* start block 02 */
    const addressAliasTransaction = AliasTransaction.createForAddress(
      Deadline.create(epochAdjustment),
      AliasAction.Link,
      namespaceId,
      address,
      networkType,
      UInt64.fromUint(2000000),
    );

    // Replace with private key
    const privateKey =
      '1111111111111111111111111111111111111111111111111111111111111111';
    const account = Account.createFromPrivateKey(privateKey, networkType);

    const signedTransaction = account.sign(
      addressAliasTransaction,
      networkGenerationHash,
    );
    console.log('Signed transaction hash: ' + signedTransaction.hash);

    const transactionHttp = repositoryFactory.createTransactionRepository();
    transactionHttp.announce(signedTransaction).subscribe(
      (x) => console.log(x),
      (err) => console.error(err),
    );
    /* end block 02 */
  } catch (e) {
    console.log(e);
  }
};
example().then();
