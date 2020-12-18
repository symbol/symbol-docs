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
  EmptyMessage,
  Mosaic,
  NamespaceId,
  NetworkType,
  TransferTransaction,
  UInt64,
} from 'symbol-sdk';

// Retrieve from node's /network/properties or RepositoryFactory
const epochAdjustment = 123456789;

/* start block 01 */
// replace with network type
const networkType = NetworkType.TEST_NET;
// replace with aliased mosaicId
const mosaicId = new NamespaceId('foo');
TransferTransaction.create(
  Deadline.create(epochAdjustment),
  Account.generateNewAccount(networkType).address,
  [new Mosaic(mosaicId, UInt64.fromUint(10000000))],
  EmptyMessage,
  networkType,
  UInt64.fromUint(2000000),
);
/* end block 01 */
