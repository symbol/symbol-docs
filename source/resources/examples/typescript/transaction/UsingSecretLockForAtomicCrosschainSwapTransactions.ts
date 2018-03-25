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
    Account, Deadline, HashType, NetworkType, SecretLockTransaction,
    TransactionHttp, UInt64, SecretProofTransaction, Address, Mosaic,
    MosaicId
} from 'nem2-sdk';

import { sha3_512 } from 'js-sha3';
import * as crypto from 'crypto';

// Alice is a PUBLIC net user
const alicePrivateKey = process.env.ALICE_PRIVATE_KEY as string;
const aliceAccount = Account.createFromPrivateKey(alicePrivateKey, NetworkType.MAIN_NET);

// Alice picks a random number and hashes it.
const random = crypto.randomBytes(10);
const hash = sha3_512.create();
const secret = hash.update(random).hex().toUpperCase();
const proof = random.toString('hex');

// Alice creates creates TX1 SecretLockTransaction{ H(x), B, MosaicId, Amount, valid for 96h }
const tx1 = SecretLockTransaction.create(
    Deadline.create(),
    new Mosaic(new MosaicId('alice:token'), UInt64.fromUint(10)),
    UInt64.fromUint(96*60), //assume one block per minute
    HashType.SHA3_512,
    secret,
    Address.createFromRawAddress('SDG4WG-FS7EQJ-KFQKXM-4IUCQG-PXUW5H-DJVIJB-OXJG'),
    NetworkType.MAIN_NET
);

// Alice sends TX1 to network (PUBLIC)
const tx1Signed = aliceAccount.sign(tx1);
const transactionHttp = new TransactionHttp('http://localhost:3000/');
transactionHttp.announce(tx1Signed).subscribe((x) => console.log(x));


// Bob is a PRIVATE network user
const bobPrivateKey = process.env.BOB_PRIVATE_KEY as string;
const bobAccount = Account.createFromPrivateKey(bobPrivateKey, NetworkType.MIJIN);


// B creates TX2 SecretLockTransaction{ H(x), A, MosaicId, Amount, valid for 84h }
const tx2 = SecretLockTransaction.create(
    Deadline.create(),
    new Mosaic(new MosaicId('bob:token'), UInt64.fromUint(10)),
    UInt64.fromUint(84*60), //assume one block per minute
    HashType.SHA3_512,
    secret,
    Address.createFromRawAddress('SD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54'),
    NetworkType.MIJIN
);

// Bob sends TX2 to network (PRIVATE)
const tx2Signed = bobAccount.sign(tx2);
transactionHttp.announce(tx2Signed).subscribe((x) => console.log(x));

// Alice waits until Txs are confirmed
// Alice spends TX2 transaction by sending SecretProofTransaction (in PRIVATE network)
const tx3 = SecretProofTransaction.create(
    Deadline.create(),
    HashType.SHA3_512,
    secret,
    proof,
    NetworkType.MIJIN
);

const tx3Signed = aliceAccount.sign(tx3);
transactionHttp.announce(tx3Signed).subscribe((x) => console.log(x));

// Bob spends TX1 transaction by sending SecretProofTransaction (in PUBLIC network)
const tx4 = SecretProofTransaction.create(
    Deadline.create(),
    HashType.SHA3_512,
    secret,
    proof,
    NetworkType.MAIN_NET
);
const tx4Signed = aliceAccount.sign(tx4);

transactionHttp.announce(tx4Signed).subscribe((x) => console.log(x));