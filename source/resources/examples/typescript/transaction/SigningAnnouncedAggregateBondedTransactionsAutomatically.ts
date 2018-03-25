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

import {Account, CosignatureTransaction, Listener, NetworkType, PublicAccount, TransactionHttp} from "nem2-sdk";

const privateKey = process.env.PRIVATE_KEY as string;

const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

const listener = new Listener('http://localhost:3000');

const transactionHttp = new TransactionHttp('http://localhost:3000');

listener.open().then(() => {

    listener.aggregateBondedAdded(account.address)
        .filter((transaction) => !transaction.signedByAccount(account.publicAccount))
        .subscribe((aggregateTransaction) => {

            const cosignatureTransaction = CosignatureTransaction.create(aggregateTransaction);

            const cosignatureSignedTransaction = account.signCosignatureTransaction(cosignatureTransaction);

            transactionHttp.announceAggregateBondedCosignature(cosignatureSignedTransaction).subscribe(x => console.log(x));
        });
});

