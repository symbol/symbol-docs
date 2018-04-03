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
const AccountHttp = nem2Sdk.AccountHttp,
    Address = nem2Sdk.Address,
    NetworkType = nem2Sdk.NetworkType,
    PublicAccount = nem2Sdk.PublicAccount,
    TransactionType = nem2Sdk.TransactionType,
    XEM = nem2Sdk.XEM,
    TransferTransaction = nem2Sdk.TransferTransaction;

// Replace with public key
const originPublicKey = '7D08373CFFE4154E129E04F0827E5F3D6907587E348757B0F87D2F839BF88246';

// Replace with recipient address
const recipientAddress = 'SDG4WG-FS7EQJ-KFQKXM-4IUCQG-PXUW5H-DJVIJB-OXJG';

const originAccount = PublicAccount.createFromPublicKey(originPublicKey, NetworkType.MIJIN_TEST);

// Replace with address
const address = Address.createFromRawAddress(recipientAddress);

const accountHttp = new AccountHttp('http://localhost:3000');

accountHttp
    .outgoingTransactions(originAccount)
    .flatMap((_) => _) // Transform transaction array to single transactions to process them
    .filter((_) => _.type === TransactionType.TRANSFER) // Filter transfer transactions
    .map((_) => _ as TransferTransaction) // Map transaction as transfer transaction
    .filter((_) => _.recipient.equals(address)) // Filter transactions from to account
    .filter((_) => _.mosaics.length === 1 && _.mosaics[0].id.equals(XEM.MOSAIC_ID)) // Filter xem transactions
    .map((_) => _.mosaics[0].amount.compact() / Math.pow(10, XEM.DIVISIBILITY)) // Map only amount in xem
    .toArray() // Add all mosaics amounts into one array
    .map((_) => _.reduce((a, b) => a + b, 0))
    .subscribe((total) => {
        console.log('Total xem send to account', address.pretty(), 'is:', total);
    });