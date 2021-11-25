'use strict';
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
Object.defineProperty(exports, '__esModule', { value: true });
const operators_1 = require('rxjs/operators');
const symbol_sdk_1 = require('symbol-sdk');
/* start block 01 */
// replace with signer public key
const signerPublicKey =
  'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
// replace with recipient address
const recipientRawAddress = 'TB6Q5E-YACWBP-CXKGIL-I6XWCH-DRFLTB-KUK34I-YJQ';
const recipientAddress = symbol_sdk_1.Address.createFromRawAddress(
  recipientRawAddress,
);
// replace with mosaic id
const mosaicIdHex = '46BE9BC0626F9B1A';
// replace with mosaic divisibility
const divisibility = 6;
const mosaicId = new symbol_sdk_1.MosaicId(mosaicIdHex);
// replace with node endpoint
const nodeUrl = 'NODE_URL';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
const searchCriteria = {
  group: symbol_sdk_1.TransactionGroup.Confirmed,
  signerPublicKey,
  recipientAddress,
  pageSize: 100,
  pageNumber: 1,
  type: [symbol_sdk_1.TransactionType.TRANSFER],
};
transactionHttp
  .search(searchCriteria)
  .pipe(
    operators_1.map((_) => _.data),
    // Process each transaction individually.
    operators_1.mergeMap((_) => _),
    // Map transaction as transfer transaction.
    operators_1.map((_) => _),
    // Filter transactions containing a given mosaic
    operators_1.filter(
      (_) => _.mosaics.length === 1 && _.mosaics[0].id.equals(mosaicId),
    ),
    // Transform absolute amount to relative amount.
    operators_1.map(
      (_) => _.mosaics[0].amount.compact() / Math.pow(10, divisibility),
    ),
    // Add all amounts into an array.
    operators_1.toArray(),
    // Sum all the amounts.
    operators_1.map((_) => _.reduce((a, b) => a + b, 0)),
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
