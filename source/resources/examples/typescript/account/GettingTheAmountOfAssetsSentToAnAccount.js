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
const operators_1 = require("rxjs/operators");
const symbol_sdk_1 = require("symbol-sdk");
/* start block 01 */
// replace with sender address
const senderRawAddress = 'TBULEA-UG2CZQ-ISUR44-2HWA6U-AKGWIX-HDABJV-IPS4';
const senderAddress = symbol_sdk_1.Address.createFromRawAddress(senderRawAddress);
// replace with recipient address
const recipientRawAddress = 'TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP';
const recipientAddress = symbol_sdk_1.Address.createFromRawAddress(recipientRawAddress);
// replace with mosaic id
const mosaicIdHex = '46BE9BC0626F9B1A';
// replace with mosaic divisibility
const divisibility = 6;
const mosaicId = new symbol_sdk_1.MosaicId(mosaicIdHex);
// replace with node endpoint
const nodeUrl = 'http://api-2-01.us-west-1.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const accountHttp = repositoryFactory.createAccountRepository();
accountHttp
    .getAccountOutgoingTransactions(senderAddress)
    .pipe(operators_1.mergeMap((_) => _), // Transform transaction array to single transactions to process them
operators_1.filter((_) => _.type === symbol_sdk_1.TransactionType.TRANSFER), // Filter transfer transactions
operators_1.map((_) => _), // Map transaction as transfer transaction
operators_1.filter((_) => _.recipientAddress instanceof symbol_sdk_1.Address
    && _.recipientAddress.equals(recipientAddress)), // Filter transactions from to account
operators_1.filter((_) => _.mosaics.length === 1 && _.mosaics[0].id.equals(mosaicId)), // Filter mosaicId transactions
operators_1.map((_) => _.mosaics[0].amount.compact() / Math.pow(10, divisibility)), // Map relative amount
operators_1.toArray(), // Add all mosaics amounts into one array
operators_1.map((_) => _.reduce((a, b) => a + b, 0)))
    .subscribe((total) => console.log('Total', mosaicId.toHex(), 'sent to account', recipientAddress.pretty(), 'is:', total), (err) => console.error(err));
/* end block 01 */
