/*
 *
 * Copyright 2018 NEM
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
    HashType,
    Mosaic,
    MosaicId,
    NetworkType,
    SecretLockTransaction,
    SecretProofTransaction,
    TransactionHttp,
    UInt64,
    XEM
} from 'nem2-sdk';
import {sha3_512} from 'js-sha3';
import * as crypto from 'crypto';


// 01 - Set up
const alicePublicChainAccount = Account.createFromPrivateKey('', NetworkType.MAIN_NET);
const alicePrivateChainAccount = Account.createFromPrivateKey('', NetworkType.MIJIN);

const bobPublicChainAccount = Account.createFromPrivateKey('', NetworkType.MAIN_NET);
const bobPrivateChainAccount = Account.createFromPrivateKey('', NetworkType.MIJIN);

const privateChainTransactionHttp = new TransactionHttp('http://localhost:3000');
const publicChainTransactionHttp = new TransactionHttp('http://localhost:3000');


// 02 - Alice picks a random number and hashes it.
const random = crypto.randomBytes(10);
const hash = sha3_512.create();
const secret = hash.update(random).hex().toUpperCase();
const proof = random.toString('hex');

// 03 - Alice creates creates TX1 SecretLockTransaction{ H(x), B, MosaicId, Amount, valid for 96h }
const tx1 = SecretLockTransaction.create(
    Deadline.create(),
    new Mosaic(new MosaicId('alice:token'), UInt64.fromUint(10)),
    UInt64.fromUint(96*60), // assuming one block per minute
    HashType.SHA3_512,
    secret,
    bobPrivateChainAccount.address,
    NetworkType.MIJIN);

// 04 - Alice sends TX1 to the private chain
const tx1Signed = alicePrivateChainAccount.sign(tx1);
privateChainTransactionHttp
    .announce(tx1Signed)
    .subscribe(x => console.log(x),err => console.error(err));

// 05 - B creates TX2 SecretLockTransaction{ H(x), A, MosaicId, Amount, valid for 84h }
const tx2 = SecretLockTransaction.create(
    Deadline.create(),
    new Mosaic(new MosaicId('bob:token'), UInt64.fromUint(10)),
    UInt64.fromUint(84*60), // assuming one block per minute
    HashType.SHA3_512,
    secret,
    alicePublicChainAccount.address,
    NetworkType.MAIN_NET);

// 06 - Bob sends TX2 to public chain
const tx2Signed = bobPublicChainAccount.sign(tx2);
publicChainTransactionHttp
    .announce(tx2Signed)
    .subscribe(x => console.log(x), err => console.error(err));

// 07 - Alice spends TX2 transaction by sending to the public chain the SecretProofTransaction{ H(x), x }
const tx3 = SecretProofTransaction.create(
    Deadline.create(),
    HashType.SHA3_512,
    secret,
    proof,
    NetworkType.MAIN_NET);

const tx3Signed = alicePublicChainAccount.sign(tx3);
publicChainTransactionHttp
    .announce(tx3Signed)
    .subscribe(x => console.log(x), err => console.error(err));

// 08 - Bob spends TX1 transaction by sending to the private chain the SecretProofTransaction{ H(x), x }
const tx4 = SecretProofTransaction.create(
    Deadline.create(),
    HashType.SHA3_512,
    secret,
    proof,
    NetworkType.MIJIN);

const tx4Signed = bobPrivateChainAccount.sign(tx4);
privateChainTransactionHttp
    .announce(tx4Signed)
    .subscribe(x => console.log(x), err => console.error(err));