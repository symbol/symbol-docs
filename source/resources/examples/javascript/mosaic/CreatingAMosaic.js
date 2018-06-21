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

const nem2Sdk = require("nem2-sdk");
const Account = nem2Sdk.Account,
    Deadline = nem2Sdk.Deadline,
    NetworkType = nem2Sdk.NetworkType,
    MosaicDefinitionTransaction = nem2Sdk.MosaicDefinitionTransaction,
    MosaicSupplyChangeTransaction = nem2Sdk.MosaicSupplyChangeTransaction,
    MosaicProperties = nem2Sdk.MosaicProperties,
    MosaicSupplyType = nem2Sdk.MosaicSupplyType,
    TransactionHttp = nem2Sdk.TransactionHttp,
    AggregateTransaction = nem2Sdk.AggregateTransaction,
    UInt64 = nem2Sdk.UInt64;


// 01 - Setup
const transactionHttp = new TransactionHttp('http://localhost:3000');

const privateKey = process.env.PRIVATE_KEY;
const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

// Replace with namespace name and mosaic name
const namespaceName = 'foo';
const mosaicName = 'token';

// 02 - Create Mosaic Definition Transaction
const mosaicDefinitionTransaction = MosaicDefinitionTransaction.create(
    Deadline.create(),
    mosaicName,
    namespaceName,
    MosaicProperties.create({
        supplyMutable: true,
        transferable: true,
        levyMutable: false,
        divisibility: 0,
        duration: UInt64.fromUint(1000)
    }),
    NetworkType.MIJIN_TEST);

// 03 - Create Supply Change Transaction
const mosaicSupplyChangeTransaction = MosaicSupplyChangeTransaction.create(
    Deadline.create(),
    mosaicDefinitionTransaction.mosaicId,
    MosaicSupplyType.Increase,
    UInt64.fromUint(1000000),
    NetworkType.MIJIN_TEST);

// 04 - Wrap both transactions inside an aggregate transaction
const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [
        mosaicDefinitionTransaction.toAggregate(account.publicAccount),
        mosaicSupplyChangeTransaction.toAggregate(account.publicAccount)
    ],
    NetworkType.MIJIN_TEST,
    []);

const signedTransaction = account.sign(aggregateTransaction);

transactionHttp
    .announce(signedTransaction)
    .subscribe(x=> console.log(x),err => console.error(err));