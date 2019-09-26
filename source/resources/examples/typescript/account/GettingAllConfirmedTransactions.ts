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

import {AccountHttp, Address, QueryParams} from "nem2-sdk";
import {concatMap, expand, toArray} from "rxjs/operators";
import {EMPTY} from 'rxjs'

const nodeUrl = 'http://localhost:3000';
const accountHttp = new AccountHttp(nodeUrl);

const pageSize = 100;
const allTransactions = true;

const rawAddress = process.env.ADDRESS as string;
const address = Address.createFromRawAddress(rawAddress);

accountHttp
    .transactions(address, new QueryParams(pageSize, undefined))
    .pipe(
        expand( (transactions) => transactions.length >= pageSize && allTransactions
            ? accountHttp.transactions(address, new QueryParams(pageSize, transactions[transactions.length - 1].transactionInfo!.id))
            : EMPTY),
        concatMap(transactions => transactions),
        toArray()
    )
    .subscribe(transactions => {
        console.log(transactions);
    },err => console.log(err));
