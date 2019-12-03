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
const nem2_sdk_1 = require("nem2-sdk");
/* start block 01 */
const rawAddress = process.env.COMPANY_ADDRESS;
const address = nem2_sdk_1.Address.createFromRawAddress(rawAddress);
const restrictionHttp = new nem2_sdk_1.RestrictionAccountHttp('http://localhost:3000');
restrictionHttp.getAccountRestrictions(address)
    .subscribe((accountRestrictions) => {
    if (accountRestrictions.length > 0) {
        accountRestrictions
            .filter((accountRestriction) => accountRestriction.values.length > 0)
            .map((accountRestriction) => {
            console.log('\n', nem2_sdk_1.AccountRestrictionFlags[accountRestriction.restrictionFlags], accountRestriction.values.toString());
        });
    }
    else {
        console.log('The address does not have account restriction assigned.');
    }
}, (err) => console.log(err));
/* end block 01 */
