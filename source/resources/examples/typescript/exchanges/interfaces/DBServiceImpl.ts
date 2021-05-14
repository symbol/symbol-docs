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

import { MosaicId, UInt64 } from 'symbol-sdk';
import { DBService } from './DBService';

/* eslint-disable */
export class DBServiceImpl implements DBService {
  // Stores the last blockchain height that has been processed.
  lastProcessedHeight = UInt64.fromUint(100000);

  existsUser(uuid: string) {
    // Mockup: Assume all UUID are correct
    return true;
  }

  getUserAmount(uuid: string, tokenId: MosaicId) {
    // Mockup: Assume user always has funds
    return 1000;
  }

  existsTransaction(hash: string, index: number) {
    // Mockup: Assume transactions never exist
    return false;
  }

  getLastProcessedHeight() {
    // Mockup: Return the last processed height
    return this.lastProcessedHeight;
  }

  setLastProcessedHeight(height: UInt64) {
    // Mockup: Store the last processed height
    this.lastProcessedHeight = height;
    console.log('Last processed height:', height.compact());
    return true;
  }

  recordDeposit(uuid: string, amount: number, hash: string, index: number) {
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

  recordWithdrawal(uuid: string, amount: number, hash: string) {
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
