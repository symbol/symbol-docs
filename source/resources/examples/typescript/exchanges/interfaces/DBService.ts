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

export interface DBService {
  /**
   * Check if user uuid exist.
   * @param uuid User unique identifier.
   * @returns boolean
   */
  existsUser(uuid: string): boolean;

  /**
   * Gets the user relative amount of tokenId mosaics.
   * @param uuid User unique identifier.
   * @param tokenId Mosaic identifier.
   * @returns number
   */
  getUserAmount(uuid: string, tokenId: MosaicId): number;

  /**
   * Check if transaction hash exist.
   * @param hash Transaction hash.
   * @param index Transaction index within an aggregate transaction.
   * @returns boolean
   */
  existsTransaction(hash: string, index: number): boolean;

  /**
   * Get the last processed block height.
   * @returns Transaction
   */
  getLastProcessedHeight(): UInt64;

  /**
   * Set the last processed block height.
   * @param height Height of the last block that has been processed
   * @returns boolean
   */
  setLastProcessedHeight(height: UInt64): boolean;

  /**
   * Records symbol.xym deposits for a given user.
   * The transaction hash and index is also stored for record-keeping, and to avoid
   * processing the same transaction more than once.
   * @param uuid User unique identifier.
   * @param amount Absolute amount of symbol.xym tokens.
   * @param hash Transaction hash.
   * @param index Transaction index within an aggregate transaction.
   * @returns boolean
   */
  recordDeposit(
    uuid: string,
    amount: number,
    hash: string,
    index: number,
  ): boolean;

  /**
   * Records symbol.xym withdrawal for a given user.
   * @param uuid User unique identifier.
   * @param amount Absolute amount of symbol.xym tokens.
   * @param hash Transaction hash.
   * @returns boolean
   */
  recordWithdrawal(uuid: string, amount: number, hash: string): boolean;
}
