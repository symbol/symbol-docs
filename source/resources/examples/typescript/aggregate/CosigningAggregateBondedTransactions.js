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
const cosignAggregateBondedTransaction = (transaction, account) => {
    const cosignatureTransaction = symbol_sdk_1.CosignatureTransaction.create(transaction);
    return account.signCosignatureTransaction(cosignatureTransaction);
};
/* end block 01 */
/* start block 02 */
// replace with network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
// replace with private key
const privateKey = '0000000000000000000000000000000000000000000000000000000000000000';
const account = symbol_sdk_1.Account.createFromPrivateKey(privateKey, networkType);
// replace with node endpoint
// replace with transaction hash to cosign
const transactionHash = '0000000000000000000000000000000000000000000000000000000000000000';
/* end block 02 */
/* start block 03 */
const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
const accountHttp = repositoryFactory.createAccountRepository();
transactionHttp
    .getTransaction(transactionHash, symbol_sdk_1.TransactionGroup.Partial)
    .pipe(operators_1.map((transaction) => cosignAggregateBondedTransaction(transaction, account)), operators_1.mergeMap((cosignatureSignedTransaction) => transactionHttp.announceAggregateBondedCosignature(cosignatureSignedTransaction)))
    .subscribe((announcedTransaction) => console.log(announcedTransaction), (err) => console.error(err));
/* end block 03 */
