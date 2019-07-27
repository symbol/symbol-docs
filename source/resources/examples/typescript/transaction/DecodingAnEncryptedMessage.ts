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

import {Account, NetworkType, PublicAccount, TransactionHttp, TransferTransaction} from 'nem2-sdk';
import {map} from "rxjs/operators";

/* start block 01 */
const certificatePrivateAccount = process.env.CERTIFICATE_PRIVATE_KEY as string;
const certificateAccount = Account.createFromPrivateKey(certificatePrivateAccount, NetworkType.MIJIN_TEST);

const alicePublicKey = process.env.ALICE_PUBLIC_KEY as string;
const alicePublicAccount = PublicAccount.createFromPublicKey(alicePublicKey, NetworkType.MIJIN_TEST);

const transactionHttp = new TransactionHttp('http://localhost:3000');

const transactionHash = process.env.TRANSACTION_HASH as string;

transactionHttp
    .getTransaction(transactionHash)
    .pipe(
        map( x => x as TransferTransaction )
    )
    .subscribe(transaction => {
        console.log("Raw message: ", transaction.message.payload);
        console.log("Message: ", certificateAccount.decryptMessage(transaction.message, alicePublicAccount).payload);
    }, (err => console.log(err)));
/* end block 01 */

