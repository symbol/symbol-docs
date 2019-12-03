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
var nem2_sdk_1 = require("nem2-sdk");
/* start block 01 */
var sharesIdHex = process.env.SHARES_ID;
var sharesId = new nem2_sdk_1.MosaicId(sharesIdHex);
var kycIdHex = process.env.KYC_ID;
var kycId = new nem2_sdk_1.MosaicId(kycIdHex);
var key = nem2_sdk_1.KeyGenerator.generateUInt64Key('IsVerified'.toLowerCase());
var transaction = nem2_sdk_1.MosaicGlobalRestrictionTransaction
    .create(nem2_sdk_1.Deadline.create(), sharesId, // mosaicId
key, // restictionKey
nem2_sdk_1.UInt64.fromUint(0), // previousRestrictionValue
nem2_sdk_1.MosaicRestrictionType.NONE, // previousRestrictionType
nem2_sdk_1.UInt64.fromUint(2), // newRestrictionValue
nem2_sdk_1.MosaicRestrictionType.EQ, // newRestrictionType
nem2_sdk_1.NetworkType.MIJIN_TEST, kycId);
var comfyClothingCompanyPrivateKey = process.env.COMFY_CLOTHING_COMPANY_PRIVATE_KEY;
var comfyClothingCompnayAccount = nem2_sdk_1.Account.createFromPrivateKey(comfyClothingCompanyPrivateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
var networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
var signedTransaction = comfyClothingCompnayAccount.sign(transaction, networkGenerationHash);
console.log(signedTransaction.hash);
var transactionHttp = new nem2_sdk_1.TransactionHttp('http://localhost:3000');
transactionHttp
    .announce(signedTransaction)
    .subscribe(function (x) { return console.log(x); }, function (err) { return console.error(err); });
/* end block 01 */
