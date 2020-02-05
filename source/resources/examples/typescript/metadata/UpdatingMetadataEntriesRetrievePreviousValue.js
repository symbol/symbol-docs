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
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
/* start block 01 */
// replace with network type
const networkType = nem2_sdk_1.NetworkType.TEST_NET;
// replace with bob private key
const bobPrivateKey = '0000000000000000000000000000000000000000000000000000000000000000';
const bobAccount = nem2_sdk_1.Account.createFromPrivateKey(bobPrivateKey, networkType);
// replace with alice public key
const alicePublicKey = 'E59EF184A612D4C3C4D89B5950EB57262C69862B2F96E59C5043BF41765C482F';
const alicePublicAccount = nem2_sdk_1.PublicAccount.createFromPublicKey(alicePublicKey, networkType);
// replace with node endpoint
const nodeUrl = 'http://api-xym-harvest-20.us-west-1.nemtech.network:3000';
const repositoryFactory = new nem2_sdk_1.RepositoryFactoryHttp(nodeUrl);
const metadataHttp = repositoryFactory.createMetadataRepository();
// replace with key and new value
const key = nem2_sdk_1.KeyGenerator.generateUInt64Key('CERT');
const newValue = '000000';
const newValueBytes = nem2_sdk_1.Convert.utf8ToUint8(newValue);
const accountMetadataTransaction = metadataHttp.getAccountMetadataByKeyAndSender(alicePublicAccount.address, 'CERT', bobAccount.publicKey)
    .pipe(operators_1.mergeMap((metadata) => {
    const currentValueBytes = nem2_sdk_1.Convert.utf8ToUint8(metadata.metadataEntry.value);
    return rxjs_1.of(nem2_sdk_1.AccountMetadataTransaction.create(nem2_sdk_1.Deadline.create(), alicePublicAccount.publicKey, key, newValueBytes.length - currentValueBytes.length, nem2_sdk_1.Convert.decodeHex(nem2_sdk_1.Convert.xor(currentValueBytes, newValueBytes)), networkType));
}));
/* end block 01 */
