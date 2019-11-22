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

import {AccountHttp, Address, MosaicId, TransactionType, TransferTransaction} from 'nem2-sdk';
import {filter, map, mergeMap, toArray} from 'rxjs/operators';

/* start block 01 */
const rawAddress = process.env.ADDRESS as string;
const originAddress = Address.createFromRawAddress(rawAddress);

const recipientRawAddress = process.env.ADDRESS as string;
const recipientAddress = Address.createFromRawAddress(recipientRawAddress);

const mosaicIdHex = process.env.MOSAIC_ID_HEX as string;
const divisibility = 6;
const mosaicId = new MosaicId(mosaicIdHex);

const accountHttp = new AccountHttp('http://localhost:3000');
accountHttp
    .getAccountOutgoingTransactions(originAddress)
    .pipe(
        mergeMap((_) => _), // Transform transaction array to single transactions to process them
        filter((_) => _.type === TransactionType.TRANSFER), // Filter transfer transactions
        map((_) => _ as TransferTransaction), // Map transaction as transfer transaction
        filter((_) => _.recipientAddress instanceof Address &&_.recipientAddress.equals(recipientAddress)), // Filter transactions from to account
        filter((_) => _.mosaics.length === 1 && _.mosaics[0].id.equals(mosaicId)), // Filter mosaicId transactions
        map((_) => _.mosaics[0].amount.compact() / Math.pow(10, divisibility)), // Map relative amount
        toArray(), // Add all mosaics amounts into one array
        map((_) => _.reduce((a, b) => a + b, 0))
    )
    .subscribe(
        total => console.log('Total '+ mosaicId.toHex() +' sent to account', recipientAddress.pretty(), 'is:', total),
        err => console.error(err)
    );
/* end block 01 */
