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
// replace with network type
const networkType = nem2_sdk_1.NetworkType.TEST_NET;
// replace with aliased mosaicId
const mosaicId = new nem2_sdk_1.NamespaceId('foo');
nem2_sdk_1.TransferTransaction.create(nem2_sdk_1.Deadline.create(), nem2_sdk_1.Account.generateNewAccount(networkType).address, [new nem2_sdk_1.Mosaic(mosaicId, nem2_sdk_1.UInt64.fromUint(10000000))], nem2_sdk_1.EmptyMessage, networkType, nem2_sdk_1.UInt64.fromUint(2000000));
/* end block 01 */
