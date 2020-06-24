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
// replace with account address
const rawAddress = 'TAXQUT-QQNS6J-EJG7PL-C6FRVJ-2USS44-GLMVUL-PGQ';
const address = symbol_sdk_1.Address.createFromRawAddress(rawAddress);
const nodeUrl = 'http://api-01.ap-northeast-1.testnet-0951-v1.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
const searchCriteria = { group: symbol_sdk_1.TransactionGroup.Partial, address, pageNumber: 1, pageSize: 100 };
transactionHttp
    .search(searchCriteria)
    .subscribe((page) => console.log(page.data), (err) => console.error(err));
/* end block 01 */