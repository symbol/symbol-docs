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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* start block 01 */
const js_sha3_1 = require("js-sha3");
const symbol_sdk_1 = require("symbol-sdk");
const validateTransactionInBlock = (leaf, height, blockHttp) => __awaiter(void 0, void 0, void 0, function* () {
    // 2. Obtain HRoot; in Symbol, this is stored in the block header.
    const HRoot = (yield blockHttp.getBlockByHeight(height).toPromise()).blockTransactionsHash;
    // 3. Request the merkleProof: H1, H7, H10
    const merkleProof = (yield blockHttp.getMerkleTransaction(height, leaf).toPromise()).merklePath;
    // 4. Calculate HRoot'.
    if (merkleProof.length === 0) {
        // There is a single item in the tree, so HRoot' = leaf.
        return leaf.toUpperCase() === HRoot.toUpperCase();
    }
    const HRoot0 = merkleProof
        .reduce((proofHash, pathItem) => {
        const hasher = js_sha3_1.sha3_256.create();
        if (pathItem.position === symbol_sdk_1.MerklePosition.Left) {
            return hasher.update(Buffer.from(pathItem.hash + proofHash, 'hex')).hex();
        }
        else {
            return hasher.update(Buffer.from(proofHash + pathItem.hash, 'hex')).hex();
        }
    }, leaf);
    // 5. Compare if the HRoot' equals to HRoot.
    return HRoot.toUpperCase() === HRoot0.toUpperCase();
});
const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
const repositoryHttp = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const blockHttp = repositoryHttp.createBlockRepository();
// Define block height
const height = symbol_sdk_1.UInt64.fromUint(1);
// 1. Calculate H(B); the hash of the element you want to validate if exists within a block.
const leaf = '1F4B55D42C9C91805E73317319DDDA633667D5E44EB0F03678FF7F130555DF4B'.toLowerCase();
validateTransactionInBlock(leaf, height, blockHttp).then((result) => console.log(result));
/* end block 01 */
