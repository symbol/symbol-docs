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
    Address,
    Deadline,
    Mosaic,
    MosaicId,
    NetworkType,
    PlainMessage,
    TransactionHttp,
    TransferTransaction,
    UInt64,
} from 'nem2-sdk';

/* start block 01 */
// replace with mosaicId
const mosaicIdHex = '7cdf3b117a3c40cc';
const mosaicId = new MosaicId(mosaicIdHex);
// replace with customer address
const rawAddress = 'TBULEA-UG2CZQ-ISUR44-2HWA6U-AKGWIX-HDABJV-IPS4';
const recipientAddress = Address.createFromRawAddress(rawAddress);
// replace with network type
const networkType = NetworkType.TEST_NET;

const transferTransaction = TransferTransaction.create(
    Deadline.create(),
    recipientAddress,
    [new Mosaic(mosaicId, UInt64.fromUint(1))],
    PlainMessage.create('enjoy your ticket'),
    networkType
);
/* end block 01 */

/* start block 02 */
// replace with ticket vendor private key
const privateKey = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '6C0350A10724FC325A1F06CEFC4CA14464BC472F566842D22418AEE0F8746B4C';

const account = Account.createFromPrivateKey(privateKey,networkType);
const signedTransaction = account.sign(transferTransaction, networkGenerationHash);
/* end block 02 */

/* start block 03 */
// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.nemtech.network:3000';
const transactionHttp = new TransactionHttp(nodeUrl);

transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
/* end block 03 */
