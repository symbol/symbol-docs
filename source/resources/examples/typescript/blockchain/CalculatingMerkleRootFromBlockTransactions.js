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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* start block 01 */
const js_sha3_1 = require("js-sha3");
const index_1 = require("merkletreejs/index");
const nem2_sdk_1 = require("nem2-sdk");
const example = () => __awaiter(this, void 0, void 0, function* () {
    // replace with node url
    const nodeUrl = 'http://api-xym-3-01.ap-northeast-1.nemtech.network:3000';
    const repositoryHttp = new nem2_sdk_1.RepositoryFactoryHttp(nodeUrl);
    const blockHttp = repositoryHttp.createBlockRepository();
    // replace with block height
    const height = nem2_sdk_1.UInt64.fromUint(1);
    // 1. Obtain HRoot; in Symbol, this is stored in the block header.
    const HRoot = (yield blockHttp.getBlockByHeight(height).toPromise()).blockTransactionsHash;
    // 2. Calculate HRoot' creating a Merkle tree with all the transactions within the block in natural order.
    const queryParams = new nem2_sdk_1.QueryParams().setPageSize(100);
    const transactions = yield blockHttp.getBlockTransactions(height, queryParams).toPromise();
    const leaves = transactions
        .sort((n1, n2) => n1.transactionInfo.index - n2.transactionInfo.index)
        .map((transaction) => transaction.transactionInfo.hash);
    const tree = new index_1.MerkleTree(leaves, js_sha3_1.sha3_256, {
        duplicateOdd: true,
        hashLeaves: false,
        sort: false,
        sortLeaves: false,
        sortPairs: false,
        isBitcoinTree: false
    });
    const HRoot0 = tree.getRoot().toString('hex');
    // 3. Compare HRoot and HRoot'.
    return HRoot.toUpperCase() === HRoot0.toUpperCase();
});
/* end block 01 */
example().then((result) => console.log(result));
