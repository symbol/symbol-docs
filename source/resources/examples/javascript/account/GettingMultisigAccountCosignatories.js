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

const nem2Sdk = require("nem2-sdk");

const AccountHttp = nem2Sdk.AccountHttp,
    Address = nem2Sdk.Address;

const accountHttp = new AccountHttp('http://localhost:3000');

const address = Address.createFromRawAddress('SCSGBN-HYJD6P-KJHACX-3R2BI3-QUMMOY-QSNW5J-ICLK');

accountHttp
    .getMultisigAccountInfo(address)
    .subscribe(accountInfo => console.log(accountInfo), err => console.error(err));