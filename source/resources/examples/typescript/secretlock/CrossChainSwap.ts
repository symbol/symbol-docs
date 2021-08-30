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

import * as crypto from 'crypto';
import { sha3_256 } from 'js-sha3';
import {
  Account,
  Deadline,
  LockHashAlgorithm,
  Mosaic,
  MosaicId,
  NetworkType,
  SecretLockTransaction,
  SecretProofTransaction,
  TransactionHttp,
  UInt64,
} from 'symbol-sdk';

// Retrieve from node's /network/properties or RepositoryFactory
const epochAdjustment = 123456789;

/* start block 01 */
const alicePublicChainAccount = Account.createFromPrivateKey(
  '',
  NetworkType.MAIN_NET,
);
const alicePrivateChainAccount = Account.createFromPrivateKey(
  '',
  NetworkType.MIJIN,
);

const bobPublicChainAccount = Account.createFromPrivateKey(
  '',
  NetworkType.MAIN_NET,
);
const bobPrivateChainAccount = Account.createFromPrivateKey(
  '',
  NetworkType.MIJIN,
);

const privateChainTransactionHttp = new TransactionHttp(
  'http://localhost:3000',
);
const publicChainTransactionHttp = new TransactionHttp('http://localhost:3000');

const publicChainGenerationHash = process.env.NETWORK_GENERATION_HASH as string;
const privateChainGenerationHash = process.env
  .NETWORK_GENERATION_HASH as string;

/* end block 01 */

/* start block 02 */
const random = crypto.randomBytes(20);
const proof = random.toString('hex');
console.log('Proof:', proof);
const hash = sha3_256.create();
const secret = hash.update(random).hex().toUpperCase();
console.log('Secret:', secret);
/* end block 02 */

/* start block 03 */
const tx1 = SecretLockTransaction.create(
  Deadline.create(epochAdjustment),
  new Mosaic(new MosaicId('00D3378709746FC4'), UInt64.fromUint(10)),
  UInt64.fromUint((96 * 3600) / 30), // assuming one block every 30 seconds
  LockHashAlgorithm.Op_Sha3_256,
  secret,
  bobPrivateChainAccount.address,
  NetworkType.MIJIN,
);
/* end block 03 */

/* start block 04 */
const tx1Signed = alicePrivateChainAccount.sign(
  tx1,
  privateChainGenerationHash,
);
privateChainTransactionHttp.announce(tx1Signed).subscribe(
  (x) => console.log(x),
  (err) => console.error(err),
);
/* end block 04 */

/* start block 05 */
const tx2 = SecretLockTransaction.create(
  Deadline.create(epochAdjustment),
  new Mosaic(new MosaicId('10293DE77C684F71'), UInt64.fromUint(10)),
  UInt64.fromUint((84 * 3600) / 30), // assuming one block every 30 seconds
  LockHashAlgorithm.Op_Sha3_256,
  secret,
  alicePublicChainAccount.address,
  NetworkType.MAIN_NET,
  UInt64.fromUint(2000000),
);
/* end block 05 */

/* start block 06 */
const tx2Signed = bobPublicChainAccount.sign(tx2, publicChainGenerationHash);
publicChainTransactionHttp.announce(tx2Signed).subscribe(
  (x) => console.log(x),
  (err) => console.error(err),
);
/* end block 06 */

/* start block 07 */
const tx3 = SecretProofTransaction.create(
  Deadline.create(epochAdjustment),
  LockHashAlgorithm.Op_Sha3_256,
  secret,
  alicePublicChainAccount.address,
  proof,
  NetworkType.MAIN_NET,
  UInt64.fromUint(2000000),
);

const tx3Signed = alicePublicChainAccount.sign(tx3, publicChainGenerationHash);
publicChainTransactionHttp.announce(tx3Signed).subscribe(
  (x) => console.log(x),
  (err) => console.error(err),
);
/* end block 07 */

/* start block 08 */
const tx4 = SecretProofTransaction.create(
  Deadline.create(epochAdjustment),
  LockHashAlgorithm.Op_Sha3_256,
  secret,
  bobPrivateChainAccount.address,
  proof,
  NetworkType.MIJIN,
);

const tx4Signed = bobPrivateChainAccount.sign(tx4, privateChainGenerationHash);
privateChainTransactionHttp.announce(tx4Signed).subscribe(
  (x) => console.log(x),
  (err) => console.error(err),
);
/* end block 08 */
