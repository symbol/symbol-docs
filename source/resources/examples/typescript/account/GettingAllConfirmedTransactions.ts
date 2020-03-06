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

import {EMPTY} from 'rxjs';
import {concatMap, expand, toArray} from 'rxjs/operators';
import {Address, QueryParams, RepositoryFactoryHttp} from 'symbol-sdk';

// replace with account address
const rawAddress = 'TBULEA-UG2CZQ-ISUR44-2HWA6U-AKGWIX-HDABJV-IPS4';
const address = Address.createFromRawAddress(rawAddress);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-west-1.symboldev.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const accountHttp = repositoryFactory.createAccountRepository();

const allTransactions = true;
const pageSize = 100;

accountHttp
    .getAccountTransactions(address, new QueryParams({pageSize}))
    .pipe(
        expand( (transactions) => {
            if (transactions.length === pageSize && allTransactions) {
                const queryParams = new QueryParams({pageSize, id: transactions[transactions.length - 1].transactionInfo!.id});
                return accountHttp.getAccountTransactions(address, queryParams);
            }
            return EMPTY;
        }),
        concatMap((transactions) => transactions),
        toArray(),
    )
    .subscribe((transactions) => {
        console.log(transactions);
    }, (err) => console.log(err));
