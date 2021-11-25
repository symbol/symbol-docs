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
  KeyGenerator,
  MosaicGlobalRestrictionTransaction,
  MosaicId,
  MosaicRestrictionType,
  NetworkType,
  RepositoryFactoryHttp,
  UInt64,
} from 'symbol-sdk';

// Retrieve from node's /network/properties or RepositoryFactory
const epochAdjustment = 123456789;

/* start block 01 */
// replace with mosaic id
const mosaicIdHex = '634a8ac3fc2b65b3';
const mosaicId = new MosaicId(mosaicIdHex);
const key = KeyGenerator.generateUInt64Key('KYC'.toLowerCase());
/* end block 01 */

/* start block 02 */
// replace with network type
const networkType = NetworkType.TEST_NET;

const transaction = MosaicGlobalRestrictionTransaction.create(
  Deadline.create(epochAdjustment),
  mosaicId, // mosaicId
  key, // restrictionKey
  UInt64.fromUint(0), // previousRestrictionValue
  MosaicRestrictionType.NONE, // previousRestrictionType
  UInt64.fromUint(1), // newRestrictionValue
  MosaicRestrictionType.EQ, // newRestrictionType
  networkType,
  undefined,
  UInt64.fromUint(2000000),
);
/* end block 02 */

/* start block 03 */
// replace with company private key
const privateKey =
  'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
const account = Account.createFromPrivateKey(privateKey, networkType);
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash =
  '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';
const signedTransaction = account.sign(transaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'NODE_URL';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();

transactionHttp.announce(signedTransaction).subscribe(
  (x) => console.log(x),
  (err) => console.error(err),
);
/* end block 03 */
