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
    AccountMetadataTransaction,
    Deadline,
    KeyGenerator,
    MetadataHttp,
    NetworkType,
    PublicAccount
} from 'nem2-sdk';
import {mergeMap} from "rxjs/operators";
import {of} from "rxjs";

/* start block 01 */
const nodeUrl = 'http://localhost:3000';
const metadata = new MetadataHttp(nodeUrl);

const bobPrivateKey = process.env.BOB_PRIVATE_KEY as string;
const bobAccount = Account.createFromPrivateKey(bobPrivateKey, NetworkType.MIJIN_TEST);

const alicePublicKey = process.env.ALICE_PUBLIC_KEY as string;
const alicePublicAccount = PublicAccount.createFromPublicKey(alicePublicKey, NetworkType.MIJIN_TEST);
const key = KeyGenerator.generateUInt64Key('CERT');
const newValue = '000000';

const accountMetadataTransaction = metadata.getAccountMetadataByKeyAndSender(alicePublicAccount.address, 'CERT', bobAccount.publicKey)
    .pipe( mergeMap(metadata => {
        const previousValue = metadata.metadataEntry.value;
        return of(AccountMetadataTransaction.create(
            Deadline.create(),
            alicePublicAccount.publicKey,
            key,
            newValue.length - previousValue.length,
            newValue,
            NetworkType.MIJIN_TEST,
        ))
    }));
/* end block 01 */
