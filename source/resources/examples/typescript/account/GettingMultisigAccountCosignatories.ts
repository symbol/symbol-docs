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

import {AccountHttp, Address} from "nem2-sdk";

/* start block 01 */
const accountHttp = new AccountHttp('http://localhost:3000');

const address = Address.createFromRawAddress('SCSGBN-HYJD6P-KJHACX-3R2BI3-QUMMOY-QSNW5J-ICLK');

accountHttp
    .getMultisigAccountInfo(address)
    .subscribe(accountInfo => console.log(accountInfo), err => console.error(err));
/* end block 01 */
