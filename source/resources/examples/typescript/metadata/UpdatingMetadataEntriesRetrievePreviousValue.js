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
const bobPrivateKey = process.env.BOB_PRIVATE_KEY;
const bobAccount = nem2_sdk_1.Account.createFromPrivateKey(bobPrivateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const alicePublicKey = process.env.ALICE_PUBLIC_KEY;
const alicePublicAccount = nem2_sdk_1.PublicAccount.createFromPublicKey(alicePublicKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const key = nem2_sdk_1.KeyGenerator.generateUInt64Key('CERT');
const newValue = '000000';
const newValueBytes = nem2_sdk_1.Convert.utf8ToUint8(newValue);
const nodeUrl = 'http://localhost:3000';
const metadata = new nem2_sdk_1.MetadataHttp(nodeUrl);
const accountMetadataTransaction = metadata.getAccountMetadataByKeyAndSender(alicePublicAccount.address, 'CERT', bobAccount.publicKey)
    .pipe(operators_1.mergeMap(metadata => {
    const currentValueBytes = nem2_sdk_1.Convert.utf8ToUint8(metadata.metadataEntry.value);
    return rxjs_1.of(nem2_sdk_1.AccountMetadataTransaction.create(nem2_sdk_1.Deadline.create(), alicePublicAccount.publicKey, key, newValueBytes.length - currentValueBytes.length, nem2_sdk_1.Convert.decodeHex(nem2_sdk_1.Convert.xor(currentValueBytes, newValueBytes)), nem2_sdk_1.NetworkType.MIJIN_TEST));
}));
/* end block 01 */
