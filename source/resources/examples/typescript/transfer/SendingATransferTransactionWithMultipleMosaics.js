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
// replace with recipient address
var rawAddress = 'TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP';
var recipientAddress = nem2_sdk_1.Address.createFromRawAddress(rawAddress);
// replace with network type
var networkType = nem2_sdk_1.NetworkType.TEST_NET;
var ignored = nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), recipientAddress, 
/* start block 01 */
[new nem2_sdk_1.Mosaic(new nem2_sdk_1.MosaicId('7cdf3b117a3c40cc'), nem2_sdk_1.UInt64.fromUint(1000)),
    nem2_sdk_1.NetworkCurrencyMosaic.createRelative(10)], 
/* end block 01 */
nem2_sdk_1.PlainMessage.create('This is a test message'), networkType);
