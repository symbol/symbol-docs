'use strict';
/*
 * Copyright 2019-present NEM Foundation
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
 */
Object.defineProperty(exports, '__esModule', { value: true });
const symbol_sdk_1 = require('symbol-sdk');
/* eslint-disable */
class DBServiceImpl {
  constructor() {
    // Stores the last blockchain height that has been processed.
    this.lastProcessedHeight = symbol_sdk_1.UInt64.fromUint(100000);
  }
  existsUser(uuid) {
    // Mockup: Assume all UUID are correct
    return true;
  }
  getUserAmount(uuid, tokenId) {
    // Mockup: Assume user always has funds
    return 1000;
  }
  existsTransaction(hash, index) {
    // Mockup: Assume transactions never exist
    return false;
  }
  getLastProcessedHeight() {
    // Mockup: Return the last processed height
    return this.lastProcessedHeight;
  }
  setLastProcessedHeight(height) {
    // Mockup: Store the last processed height
    this.lastProcessedHeight = height;
    console.log('Last processed height:', height.compact());
    return true;
  }
  recordDeposit(uuid, amount, hash, index) {
    // Mockup: Do nothing, just display
    console.log(
      'Recording deposit from',
      uuid,
      'amount',
      amount,
      'hash',
      hash,
      'index',
      index,
    );
    return false;
  }
  recordWithdrawal(uuid, amount, hash) {
    // Mockup: Do nothing, just display
    console.log(
      'Recording withdrawal from',
      uuid,
      'amount',
      amount,
      'hash',
      hash,
    );
    return false;
  }
}
exports.DBServiceImpl = DBServiceImpl;
