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

import { filter, map, mergeMap, toArray } from 'rxjs/operators';
import {
  Address,
  MosaicId,
  RepositoryFactoryHttp,
  TransactionGroup,
  TransactionType,
  TransferTransaction,
} from 'symbol-sdk';

/* start block 01 */
// replace with signer public key
const signerPublicKey =
  'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
// replace with recipient address
const recipientRawAddress = 'TB6Q5E-YACWBP-CXKGIL-I6XWCH-DRFLTB-KUK34I-YJQ';
const recipientAddress = Address.createFromRawAddress(recipientRawAddress);
// replace with mosaic id
const mosaicIdHex = '46BE9BC0626F9B1A';
// replace with mosaic divisibility
const divisibility = 6;
const mosaicId = new MosaicId(mosaicIdHex);
// replace with node endpoint
const nodeUrl = 'NODE_URL';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();

const searchCriteria = {
  group: TransactionGroup.Confirmed,
  signerPublicKey,
  recipientAddress,
  pageSize: 100,
  pageNumber: 1,
  type: [TransactionType.TRANSFER],
};

transactionHttp
  .search(searchCriteria)
  .pipe(
    map((_) => _.data),
    // Process each transaction individually.
    mergeMap((_) => _),
    // Map transaction as transfer transaction.
    map((_) => _ as TransferTransaction),
    // Filter transactions containing a given mosaic
    filter((_) => _.mosaics.length === 1 && _.mosaics[0].id.equals(mosaicId)),
    // Transform absolute amount to relative amount.
    map((_) => _.mosaics[0].amount.compact() / Math.pow(10, divisibility)),
    // Add all amounts into an array.
    toArray(),
    // Sum all the amounts.
    map((_) => _.reduce((a, b) => a + b, 0)),
  )
  .subscribe(
    (total) =>
      console.log(
        'Total',
        mosaicId.toHex(),
        'sent to account',
        recipientAddress.pretty(),
        'is:',
        total,
      ),
    (err) => console.error(err),
  );
/* end block 01 */
