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

/* start block 01 */
const accountHttp = new AccountHttp('http://localhost:3000');

const rawAddress = process.env.ADDRESS as string;
const address = Address.createFromRawAddress(rawAddress);

const pageSize = 10; // Page size between 10 and 100, otherwise 10

accountHttp
    .getAccountTransactions(address, new QueryParams(pageSize))
    .subscribe(transactions => console.log(transactions), err => console.error(err));
/* end block 01 */
