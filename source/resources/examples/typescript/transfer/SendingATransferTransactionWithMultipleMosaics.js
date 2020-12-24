'use strict';
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
Object.defineProperty(exports, '__esModule', { value: true });
const symbol_sdk_1 = require('symbol-sdk');
// Retrieve from node's /network/properties or RepositoryFactory
const epochAdjustment = 123456789;
// replace with recipient address
const rawAddress = 'TB6Q5E-YACWBP-CXKGIL-I6XWCH-DRFLTB-KUK34I-YJQ';
const recipientAddress = symbol_sdk_1.Address.createFromRawAddress(rawAddress);
// replace with network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
const transferTransaction = symbol_sdk_1.TransferTransaction.create(
  symbol_sdk_1.Deadline.create(epochAdjustment),
  recipientAddress,
  /* start block 01 */
  [
    new symbol_sdk_1.Mosaic(
      new symbol_sdk_1.MosaicId('7CDF3B117A3C40CC'),
      symbol_sdk_1.UInt64.fromUint(1000),
    ),
    new symbol_sdk_1.Mosaic(
      new symbol_sdk_1.MosaicId('5E62990DCAC5BE8A'),
      symbol_sdk_1.UInt64.fromUint(10 * Math.pow(10, 6)),
    ),
  ],
  /* end block 01 */
  symbol_sdk_1.PlainMessage.create('This is a test message'),
  networkType,
  symbol_sdk_1.UInt64.fromUint(2000000),
);
console.log(transferTransaction);
