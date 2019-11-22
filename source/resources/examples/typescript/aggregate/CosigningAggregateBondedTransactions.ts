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

import {
    Account,
    AccountHttp,
    AggregateTransaction,
    CosignatureSignedTransaction,
    CosignatureTransaction,
    NetworkType,
    TransactionHttp
} from 'nem2-sdk';
import {filter, map, mergeMap} from "rxjs/operators";

/* start block 01 */
const cosignAggregateBondedTransaction = (transaction: AggregateTransaction, account: Account): CosignatureSignedTransaction => {
    const cosignatureTransaction = CosignatureTransaction.create(transaction);
    return account.signCosignatureTransaction(cosignatureTransaction);
};
/* end block 01 */

/* start block 02 */
const privateKey = process.env.PRIVATE_KEY as string;
const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

const nodeUrl = 'http://localhost:3000';
const accountHttp = new AccountHttp(nodeUrl);
const transactionHttp = new TransactionHttp(nodeUrl);

accountHttp
    .getAccountPartialTransactions(account.address)
    .pipe(
        mergeMap((_) => _),
        filter((_) => !_.signedByAccount(account.publicAccount)),
        map(transaction => cosignAggregateBondedTransaction(transaction, account)),
        mergeMap(cosignatureSignedTransaction => transactionHttp.announceAggregateBondedCosignature(cosignatureSignedTransaction))
    )
    .subscribe(announcedTransaction => console.log(announcedTransaction),
        err => console.error(err));
/* end block 02 */
