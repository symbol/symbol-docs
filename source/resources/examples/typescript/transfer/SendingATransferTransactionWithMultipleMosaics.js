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
// replace with recipient address
const rawAddress = 'TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP';
const recipientAddress = nem2_sdk_1.Address.createFromRawAddress(rawAddress);
// replace with network type
const networkType = nem2_sdk_1.NetworkType.TEST_NET;
const ignored = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), recipientAddress, 
/* start block 01 */
[new nem2_sdk_1.Mosaic(new nem2_sdk_1.MosaicId('7CDF3B117A3C40CC'), nem2_sdk_1.UInt64.fromUint(1000)),
    new nem2_sdk_1.Mosaic(new nem2_sdk_1.MosaicId('51A99028058245A8'), nem2_sdk_1.UInt64.fromUint(10 * Math.pow(10, 6)))], 
/* end block 01 */
nem2_sdk_1.PlainMessage.create('This is a test message'), networkType, nem2_sdk_1.UInt64.fromUint(2000000));
