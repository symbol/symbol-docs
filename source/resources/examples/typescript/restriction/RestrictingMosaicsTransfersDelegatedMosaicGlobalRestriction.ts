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
  AggregateTransaction,
  Deadline,
  KeyGenerator,
  MosaicDefinitionTransaction,
  MosaicFlags,
  MosaicGlobalRestrictionTransaction,
  MosaicId,
  MosaicNonce,
  MosaicRestrictionType,
  NetworkType,
  RepositoryFactoryHttp,
  UInt64,
} from 'symbol-sdk';

// Retrieve from node's /network/properties or RepositoryFactory
const epochAdjustment = 123456789;

/* start block 01 */
const networkType = NetworkType.TEST_NET;
// replace with kyc provider private key
const kycProviderPrivateKey =
  'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB';
const kycProviderAccount = Account.createFromPrivateKey(
  kycProviderPrivateKey,
  networkType,
);

// Define KYC Mosaic Id
const mosaicNonce = MosaicNonce.createRandom();
const mosaicDefinitionTransaction = MosaicDefinitionTransaction.create(
  Deadline.create(epochAdjustment),
  mosaicNonce,
  MosaicId.createFromNonce(
    mosaicNonce,
    kycProviderAccount.publicAccount.address,
  ),
  MosaicFlags.create(true, true, true),
  0,
  UInt64.fromUint(0),
  networkType,
);
console.log('KYC MosaicId:', mosaicDefinitionTransaction.mosaicId.toHex());

// Define Mosaic global restriction Is_Verified = 1
const key = KeyGenerator.generateUInt64Key('IsVerified'.toLowerCase());
const mosaicGlobalRestrictionTransaction = MosaicGlobalRestrictionTransaction.create(
  Deadline.create(epochAdjustment),
  mosaicDefinitionTransaction.mosaicId, // mosaicId
  key, // restictionKey
  UInt64.fromUint(0), // previousRestrictionValue
  MosaicRestrictionType.NONE, // previousRestrictionType
  UInt64.fromUint(1), // newRestrictionValue
  MosaicRestrictionType.EQ, // newRestrictionType
  networkType,
);

const aggregateTransaction = AggregateTransaction.createComplete(
  Deadline.create(epochAdjustment),
  [
    mosaicDefinitionTransaction.toAggregate(kycProviderAccount.publicAccount),
    mosaicGlobalRestrictionTransaction.toAggregate(
      kycProviderAccount.publicAccount,
    ),
  ],
  networkType,
  [],
  UInt64.fromUint(2000000),
);
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash =
  '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';
const signedTransaction = kycProviderAccount.sign(
  aggregateTransaction,
  networkGenerationHash,
);
console.log(signedTransaction.hash);
// replace with node endpoint
const nodeUrl = 'NODE_URL';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();

transactionHttp.announce(signedTransaction).subscribe(
  (x) => console.log(x),
  (err) => console.error(err),
);
/* end block 01 */
