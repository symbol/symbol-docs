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
    KeyGenerator,
    MosaicAddressRestrictionTransaction,
    MosaicId,
    NetworkType,
    UInt64,
} from 'nem2-sdk';
import {RepositoryFactoryHttp} from 'nem2-sdk/dist/src/infrastructure/RepositoryFactoryHttp';

/* start block 01 */
// replace with kyc mosaic id
const mosaicIdHex = '183D0802BCDB97AF';
const mosaicId = new MosaicId(mosaicIdHex);
// replace with alice address
const aliceRawAddress = 'TBULEA-UG2CZQ-ISUR44-2HWA6U-AKGWIX-HDABJV-IPS4';
const aliceAddress = Address.createFromRawAddress(aliceRawAddress);
// replace with bob address
const bobRawAddress = 'TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP';
const bobAddress = Address.createFromRawAddress(bobRawAddress);
// replace with carol address
const carolRawAddress = 'TCF7MK-FL6QYF-UHWVRZ-6UUCLN-YBDWLQ-ZZC37A-2O6R';
const carolAddress = Address.createFromRawAddress(carolRawAddress);
// replace with network type
const networkType = NetworkType.TEST_NET;

const key = KeyGenerator.generateUInt64Key('IsVerified'.toLowerCase());

const aliceMosaicAddressRestrictionTransaction = MosaicAddressRestrictionTransaction
    .create(
        Deadline.create(),
        mosaicId, // mosaicId
        key, // restrictionKey
        aliceAddress, // address
        UInt64.fromUint(1), // newRestrictionValue
        networkType);

const bobMosaicAddressRestrictionTransaction = MosaicAddressRestrictionTransaction
    .create(
        Deadline.create(),
        mosaicId, // mosaicId
        key, // restrictionKey
        bobAddress, // address
        UInt64.fromUint(2), // newRestrictionValue
        networkType);

const carolMosaicAddressRestrictionTransaction = MosaicAddressRestrictionTransaction
    .create(
        Deadline.create(),
        mosaicId, // mosaicId
        key, // restrictionKey
        carolAddress, // address
        UInt64.fromUint(2), // newRestrictionValue
        networkType);

// replace with kyc provider private key
const kycProviderPrivateKey = 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB';
const kycProviderAccount = Account.createFromPrivateKey(kycProviderPrivateKey, networkType);

const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [
        aliceMosaicAddressRestrictionTransaction.toAggregate(kycProviderAccount.publicAccount),
        bobMosaicAddressRestrictionTransaction.toAggregate(kycProviderAccount.publicAccount),
        carolMosaicAddressRestrictionTransaction.toAggregate(kycProviderAccount.publicAccount),
    ],
    networkType,
    [],
    UInt64.fromUint(2000000));

// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = 'CC42AAD7BD45E8C276741AB2524BC30F5529AF162AD12247EF9A98D6B54A385B';
const signedTransaction = kycProviderAccount.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
// replace with node endpoint
const nodeUrl = 'http://api-xym-harvest-20.us-west-1.nemtech.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl, networkType, networkGenerationHash);
const transactionHttp = repositoryFactory.createTransactionRepository();

transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 01 */
