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
    AggregateTransaction,
    Deadline,
    Mosaic,
    MosaicId,
    NetworkType,
    PlainMessage,
    PublicAccount,
    RepositoryFactoryHttp,
    TransferTransaction,
    UInt64,
} from 'symbol-sdk';

/* start block 01 */
// replace network type
const networkType = NetworkType.TEST_NET;
// replace with cosignatory private key
const cosignatoryPrivateKey = '0000000000000000000000000000000000000000000000000000000000000000';
const cosignatoryAccount = Account.createFromPrivateKey(cosignatoryPrivateKey, networkType);
// replace with multisig account public key
const multisigAccountPublicKey = '3A537D5A1AF51158C42F80A199BB58351DBF3253C4A6A1B7BD1014682FB595EA';
const multisigAccount = PublicAccount.createFromPublicKey(multisigAccountPublicKey, networkType);
// replace with recipient address
const recipientRawAddress = 'TCVQ2R-XKJQKH-4RJZWG-DARWJ6-V4J4W7-F4DGH6-ZFAB';
const recipientAddress = Address.createFromRawAddress(recipientRawAddress);
// replace with symbol.xym id
const networkCurrencyMosaicId = new MosaicId('05D6A80DE3C9ADCA');
// replace with network currency divisibility
const networkCurrencyDivisibility = 6;
/* end block 01 */

/* start block 02 */
const transferTransaction = TransferTransaction.create(
    Deadline.create(),
    recipientAddress,
    [new Mosaic (networkCurrencyMosaicId,
        UInt64.fromUint(10 * Math.pow(10, networkCurrencyDivisibility)))],
    PlainMessage.create('sending 10 symbol.xym'),
    networkType);
/* end block 02 */

/* start block 03 */
const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [transferTransaction.toAggregate(multisigAccount)],
    networkType,
    [],
    UInt64.fromUint(2000000));
/* end block 03 */

/* start block 04 */
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash = 'ACECD90E7B248E012803228ADB4424F0D966D24149B72E58987D2BF2F2AF03C4';
const signedTransaction = cosignatoryAccount.sign(aggregateTransaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-02.ap-northeast-1.0941-v1.symboldev.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 04 */
