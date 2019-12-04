"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const nem2_sdk_1 = require("nem2-sdk");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
/* start block 01 */
// replace with network type
const networkType = nem2_sdk_1.NetworkType.TEST_NET;
// replace with private key
const multisig2PrivateKey = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
const multisigAccount2 = nem2_sdk_1.Account.createFromPrivateKey(multisig2PrivateKey, networkType);
// replace with public key
const cosignatoryAccount5PublicKey = '17E42BDF5B7FF5001DC96A262A1141FFBE3F09A3A45DE7C095AAEA14F45C0DA0';
const cosignatory5 = nem2_sdk_1.PublicAccount.createFromPublicKey(cosignatoryAccount5PublicKey, networkType);
// replace with public key
const cosignatoryAccount6PublicKey = 'E59EF184A612D4C3C4D89B5950EB57262C69862B2F96E59C5043BF41765C482F';
const cosignatory6 = nem2_sdk_1.PublicAccount.createFromPublicKey(cosignatoryAccount6PublicKey, networkType);
const convertMultisigAccount2Transaction = nem2_sdk_1.MultisigAccountModificationTransaction.create(nem2_sdk_1.Deadline.create(), 1, 1, [cosignatory5, cosignatory6], [], networkType);
/* end block 01 */
/* start block 02 */
// replace with private key
const multisig3PrivateKey = '1111111111111111111111111111111111111111111111111111111111111111';
const multisigAccount3 = nem2_sdk_1.Account.createFromPrivateKey(multisig3PrivateKey, networkType);
// replace with public key
const cosignatoryAccount7PublicKey = '38C22255DE39952C5D18803EC305A888D5DDE2C59BF3D4EFFAE6FC5FFCBF4F5D';
const cosignatory7 = nem2_sdk_1.PublicAccount.createFromPublicKey(cosignatoryAccount7PublicKey, networkType);
// replace with public key
const cosignatoryAccount8PublicKey = '9F784BF20318AE3CA6246C0EC2207FE095FFF7A84B6787E7E3C2CE4C3B92A2EA';
const cosignatory8 = nem2_sdk_1.PublicAccount.createFromPublicKey(cosignatoryAccount8PublicKey, networkType);
// replace with public key
const cosignatoryAccount4PublicKey = 'EB2B065D27C6A6FB322F2E568E1AAD9CD6C0F155675E2837058D4811F5C0247D';
const cosignatory4 = nem2_sdk_1.PublicAccount.createFromPublicKey(cosignatoryAccount4PublicKey, networkType);
const convertMultisigAccount3Transaction = nem2_sdk_1.MultisigAccountModificationTransaction.create(nem2_sdk_1.Deadline.create(), 2, 1, [cosignatory7, cosignatory8, cosignatory4], [], networkType);
/* end block 02 */
/* start block 03 */
// replace with private key
const multisig1PrivateKey = '0000000000000000000000000000000000000000000000000000000000000000';
const multisigAccount1 = nem2_sdk_1.Account.createFromPrivateKey(multisig1PrivateKey, networkType);
const convertMultisigAccount1Transaction = nem2_sdk_1.MultisigAccountModificationTransaction.create(nem2_sdk_1.Deadline.create(), 3, 1, [multisigAccount2.publicAccount, multisigAccount3.publicAccount, cosignatory4], [], networkType);
/* end block 03 */
/* start block 04 */
const aggregateTransaction = nem2_sdk_1.AggregateTransaction.createBonded(nem2_sdk_1.Deadline.create(), [convertMultisigAccount2Transaction.toAggregate(multisigAccount2.publicAccount),
    convertMultisigAccount3Transaction.toAggregate(multisigAccount3.publicAccount),
    convertMultisigAccount1Transaction.toAggregate(multisigAccount1.publicAccount)], networkType);
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '6C0350A10724FC325A1F06CEFC4CA14464BC472F566842D22418AEE0F8746B4C';
const signedTransaction = multisigAccount1.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
const hashLockTransaction = nem2_sdk_1.HashLockTransaction.create(nem2_sdk_1.Deadline.create(), nem2_sdk_1.NetworkCurrencyMosaic.createRelative(10), nem2_sdk_1.UInt64.fromUint(480), signedTransaction, networkType);
const signedHashLockTransaction = multisigAccount1.sign(hashLockTransaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.nemtech.network:3000';
const transactionHttp = new nem2_sdk_1.TransactionHttp(nodeUrl);
const listener = new nem2_sdk_1.Listener(nodeUrl);
const announceHashLockTransaction = (signedHashLockTransaction) => {
    return transactionHttp.announce(signedHashLockTransaction);
};
const announceAggregateTransaction = (listener, signedHashLockTransaction, signedAggregateTransaction, senderAddress) => {
    return listener
        .confirmed(senderAddress)
        .pipe(operators_1.filter((transaction) => transaction.transactionInfo !== undefined
        && transaction.transactionInfo.hash === signedHashLockTransaction.hash), operators_1.mergeMap(ignored => {
        listener.terminate();
        return transactionHttp.announceAggregateBonded(signedAggregateTransaction);
    }));
};
listener.open().then(() => {
    rxjs_1.merge(announceHashLockTransaction(signedHashLockTransaction), announceAggregateTransaction(listener, signedHashLockTransaction, signedTransaction, multisigAccount1.address))
        .subscribe(x => console.log('Transaction confirmed:', x.message), err => console.log(err));
});
/* end block 04 */
