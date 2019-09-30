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
    Deadline,
    MosaicGlobalRestrictionTransaction,
    MosaicId,
    MosaicRestrictionType,
    NamespaceMosaicIdGenerator,
    NetworkType,
    TransactionHttp,
    UInt64
} from 'nem2-sdk';

/* start block 01 */
const sharesIdHexa = process.env.SHARES_ID as string;
const sharesId = new MosaicId(sharesIdHexa);

const kycIdHexa = process.env.KYC_ID as string;
const kycId = new MosaicId(kycIdHexa);

const key = 'IsVerified'.toLowerCase();

const transaction = MosaicGlobalRestrictionTransaction
    .create(
        Deadline.create(),
        sharesId,  // mosaicId
        new UInt64(NamespaceMosaicIdGenerator.namespaceId(key)), // restictionKey
        UInt64.fromUint(0), // previousRestrictionValue
        MosaicRestrictionType.NONE, // previousRestrictionType
        UInt64.fromUint(2), // newRestrictionValue
        MosaicRestrictionType.EQ,  // newRestrictionType
        NetworkType.MIJIN_TEST,
        kycId, // referenceMosaicId
    );

const comfyClothingCompanyPrivateKey = process.env.COMFY_CLOTHING_COMPANY_PRIVATE_KEY as string;
const comfyClothingCompnayAccount = Account.createFromPrivateKey(comfyClothingCompanyPrivateKey, NetworkType.MIJIN_TEST);

const networkGenerationHash = process.env.NETWORK_GENERATION_HASH as string;
const signedTransaction = comfyClothingCompnayAccount.sign(transaction, networkGenerationHash);
console.log(signedTransaction.hash);

const transactionHttp = new TransactionHttp('http://localhost:3000');
transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
/* end block 01 */
