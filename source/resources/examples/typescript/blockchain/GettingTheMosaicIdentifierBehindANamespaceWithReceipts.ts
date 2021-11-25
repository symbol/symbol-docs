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
  Address,
  Deadline,
  Mosaic,
  NamespaceId,
  NetworkType,
  PlainMessage,
  RepositoryFactoryHttp,
  TransactionService,
  TransferTransaction,
  UInt64,
} from 'symbol-sdk';

// Retrieve from node's /network/properties or RepositoryFactory
const epochAdjustment = 123456789;

/* start block 01 */
const aliasedMosaic = new Mosaic(
  new NamespaceId('symbol.xym'),
  UInt64.fromUint(1000000),
);
/* end block 01 */

/* start block 02 */
// replace with network type
const networkType = NetworkType.TEST_NET;
const transferTransaction = TransferTransaction.create(
  Deadline.create(epochAdjustment),
  Address.createFromRawAddress('TCHBDE-NCLKEB-ILBPWP-3JPB2X-NY64OE-7PYHHE-32I'),
  [aliasedMosaic],
  PlainMessage.create('Test aliased mosaic'),
  networkType,
  UInt64.fromUint(2000000),
);

// replace with sender private key
const privateKey =
  '1111111111111111111111111111111111111111111111111111111111111111';
const account = Account.createFromPrivateKey(privateKey, networkType);
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash =
  '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';
const signedTransaction = account.sign(
  transferTransaction,
  networkGenerationHash,
);
console.log(signedTransaction.hash);
/* end block 02 */

/* start block 03 */
// replace with node endpoint
const nodeUrl = 'NODE_URL';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const receiptHttp = repositoryFactory.createReceiptRepository();
const transactionHttp = repositoryFactory.createTransactionRepository();
const listener = repositoryFactory.createListener();
const transactionService = new TransactionService(transactionHttp, receiptHttp);

listener.open().then(() => {
  transactionService
    .announce(signedTransaction, listener)
    .pipe(
      mergeMap((transaction) =>
        transactionService.resolveAliases([transaction.transactionInfo!.hash!]),
      ),
      map((transactions) => transactions[0] as TransferTransaction),
    )
    .subscribe(
      (transaction) => {
        console.log('Resolved MosaicId: ', transaction.mosaics[0].id.toHex());
        listener.close();
      },
      (err) => console.log(err),
    );
});
/* end block 03 */
