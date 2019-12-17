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

import {Account, Deadline, NetworkType, PublicAccount, TransactionHttp, TransferTransaction} from 'nem2-sdk';

/* start block 01 */
// replace with network type
const networkType = NetworkType.TEST_NET;
// replace with alice private key
const alicePrivateKey = '1111111111111111111111111111111111111111111111111111111111111111';
const aliceAccount = Account.createFromPrivateKey(alicePrivateKey, networkType);
// replace with certificate public key
const certificatePublicKey = '3A537D5A1AF51158C42F80A199BB58351DBF3253C4A6A1B7BD1014682FB595EA';
const certificatePublicAccount = PublicAccount.createFromPublicKey(certificatePublicKey, networkType);

const encryptedMessage = aliceAccount
    .encryptMessage('This message is secret',
        certificatePublicAccount,
        networkType);
/* end block 01 */

/* start block 02 */
const transferTransaction = TransferTransaction.create(
    Deadline.create(),
    certificatePublicAccount.address,
    [],
    encryptedMessage,
    networkType).setMaxFee(2);
/* end block 02 */

/* start block 03 */
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = 'CC42AAD7BD45E8C276741AB2524BC30F5529AF162AD12247EF9A98D6B54A385B';
const signedTransaction = aliceAccount.sign(transferTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
/* end block 03 */

/* start block 04 */
const nodeUrl = 'http://api-harvest-20.us-west-1.nemtech.network:3000';
const transactionHttp = new TransactionHttp(nodeUrl);

transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 04 */
