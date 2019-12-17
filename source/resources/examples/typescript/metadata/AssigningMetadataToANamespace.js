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
/* start block 01 */
// replace with network type
const networkType = nem2_sdk_1.NetworkType.TEST_NET;
// replace with company private key
const companyPrivateKey = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
const companyAccount = nem2_sdk_1.Account.createFromPrivateKey(companyPrivateKey, networkType);
// replace with namespace name
const namespaceId = new nem2_sdk_1.NamespaceId('cc');
const name = 'ComfyClothingCompany';
const email = 'info@comfyclothingcompany';
const address = 'ComfyClothingCompany HQ';
const phone = '000-0000';
const nameMetadataTransaction = nem2_sdk_1.NamespaceMetadataTransaction.create(nem2_sdk_1.Deadline.create(), companyAccount.publicKey, nem2_sdk_1.KeyGenerator.generateUInt64Key('NAME'), namespaceId, name.length, name, networkType);
const emailMetadataTransaction = nem2_sdk_1.NamespaceMetadataTransaction.create(nem2_sdk_1.Deadline.create(), companyAccount.publicKey, nem2_sdk_1.KeyGenerator.generateUInt64Key('EMAIL'), namespaceId, email.length, email, networkType);
const addressMetadataTransaction = nem2_sdk_1.NamespaceMetadataTransaction.create(nem2_sdk_1.Deadline.create(), companyAccount.publicKey, nem2_sdk_1.KeyGenerator.generateUInt64Key('ADDRESS'), namespaceId, address.length, address, networkType);
const phoneMetadataTransaction = nem2_sdk_1.NamespaceMetadataTransaction.create(nem2_sdk_1.Deadline.create(), companyAccount.publicKey, nem2_sdk_1.KeyGenerator.generateUInt64Key('PHONE'), namespaceId, phone.length, phone, networkType);
/* end block 01 */
/* start block 02 */
const aggregateTransaction = nem2_sdk_1.AggregateTransaction.createComplete(nem2_sdk_1.Deadline.create(), [
    nameMetadataTransaction.toAggregate(companyAccount.publicAccount),
    emailMetadataTransaction.toAggregate(companyAccount.publicAccount),
    addressMetadataTransaction.toAggregate(companyAccount.publicAccount),
    phoneMetadataTransaction.toAggregate(companyAccount.publicAccount),
], networkType, []).setMaxFee(2);
/* end block 02 */
/* start block 03 */
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = 'CC42AAD7BD45E8C276741AB2524BC30F5529AF162AD12247EF9A98D6B54A385B';
const signedTransaction = companyAccount.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
const nodeUrl = 'http://api-harvest-20.us-west-1.nemtech.network:3000';
const transactionHttp = new nem2_sdk_1.TransactionHttp(nodeUrl);
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 03 */
