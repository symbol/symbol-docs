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
const symbol_sdk_1 = require("symbol-sdk");
/* start block 01 */
// replace with network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
// replace with company private key
const companyPrivateKey = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
const companyAccount = symbol_sdk_1.Account.createFromPrivateKey(companyPrivateKey, networkType);
// replace with namespace name
const namespaceId = new symbol_sdk_1.NamespaceId('cc');
const name = 'ComfyClothingCompany';
const email = 'info@comfyclothingcompany';
const address = 'ComfyClothingCompany HQ';
const phone = '000-0000';
const nameMetadataTransaction = symbol_sdk_1.NamespaceMetadataTransaction.create(symbol_sdk_1.Deadline.create(), companyAccount.publicKey, symbol_sdk_1.KeyGenerator.generateUInt64Key('NAME'), namespaceId, name.length, name, networkType);
const emailMetadataTransaction = symbol_sdk_1.NamespaceMetadataTransaction.create(symbol_sdk_1.Deadline.create(), companyAccount.publicKey, symbol_sdk_1.KeyGenerator.generateUInt64Key('EMAIL'), namespaceId, email.length, email, networkType);
const addressMetadataTransaction = symbol_sdk_1.NamespaceMetadataTransaction.create(symbol_sdk_1.Deadline.create(), companyAccount.publicKey, symbol_sdk_1.KeyGenerator.generateUInt64Key('ADDRESS'), namespaceId, address.length, address, networkType);
const phoneMetadataTransaction = symbol_sdk_1.NamespaceMetadataTransaction.create(symbol_sdk_1.Deadline.create(), companyAccount.publicKey, symbol_sdk_1.KeyGenerator.generateUInt64Key('PHONE'), namespaceId, phone.length, phone, networkType);
/* end block 01 */
/* start block 02 */
const aggregateTransaction = symbol_sdk_1.AggregateTransaction.createComplete(symbol_sdk_1.Deadline.create(), [
    nameMetadataTransaction.toAggregate(companyAccount.publicAccount),
    emailMetadataTransaction.toAggregate(companyAccount.publicAccount),
    addressMetadataTransaction.toAggregate(companyAccount.publicAccount),
    phoneMetadataTransaction.toAggregate(companyAccount.publicAccount),
], networkType, [], symbol_sdk_1.UInt64.fromUint(2000000));
/* end block 02 */
/* start block 03 */
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '44D2225B8932C9A96DCB13508CBCDFFA9A9663BFBA2354FEEC8FCFCB7E19846C';
const signedTransaction = companyAccount.sign(aggregateTransaction, networkGenerationHash);
console.log(signedTransaction.hash);
const nodeUrl = 'http://api-2-01.us-west-1.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 03 */
