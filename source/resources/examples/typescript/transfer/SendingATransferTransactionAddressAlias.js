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
/* start block 01 */
// Replace with network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
// Replace with aliased address
const recipientAddress = new symbol_sdk_1.NamespaceId('foo');
symbol_sdk_1.TransferTransaction.create(
  symbol_sdk_1.Deadline.create(epochAdjustment),
  recipientAddress,
  [],
  symbol_sdk_1.EmptyMessage,
  networkType,
  symbol_sdk_1.UInt64.fromUint(2000000),
);
/* end block 01 */
