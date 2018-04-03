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

import {AccountHttp, NetworkType, PublicAccount, QueryParams} from "nem2-sdk";

const accountHttp = new AccountHttp('http://localhost:3000');

// Replace with public key
const publicKey = '7D08373CFFE4154E129E04F0827E5F3D6907587E348757B0F87D2F839BF88246';

/**
 * Page size between 10 and 100, otherwise 10
 */
const pageSize = 10;

accountHttp.transactions(
    PublicAccount.createFromPublicKey(publicKey, NetworkType.MIJIN_TEST),
    new QueryParams(pageSize)
).subscribe(transactions => console.log(transactions),
    err => console.error(err)
);