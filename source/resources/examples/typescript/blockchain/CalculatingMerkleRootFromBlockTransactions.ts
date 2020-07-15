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

/* start block 01 */
import {sha3_256} from 'js-sha3';
import {MerkleTree} from 'merkletreejs/index';
import {QueryParams, RepositoryFactoryHttp, UInt64} from 'symbol-sdk';

const example = async () => {
    // replace with node url
    const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
    const repositoryHttp = new RepositoryFactoryHttp(nodeUrl);
    const blockHttp = repositoryHttp.createBlockRepository();
    // replace with block height
    const height = UInt64.fromUint(1);

    // 1. Obtain HRoot; in Symbol, this is stored in the block header.
    const HRoot = (await blockHttp.getBlockByHeight(height).toPromise()).blockTransactionsHash;
    // 2. Calculate HRoot' creating a Merkle tree with all the transactions within the block in natural order.
    // Note: This code snippet assumes that the block has less than 100 transactions.
    const queryParams = new QueryParams({pageSize: 100})
    const transactions = await blockHttp.getBlockTransactions(height, queryParams).toPromise();
    const leaves = transactions
        .sort((n1, n2) => n1.transactionInfo!.index - n2.transactionInfo!.index)
        .map((transaction) => transaction.transactionInfo!.hash);
    const tree = new MerkleTree(leaves, sha3_256, {
        duplicateOdd: true,
        hashLeaves: false,
        sort: false,
        sortLeaves: false,
        sortPairs: false,
        isBitcoinTree: false});
    const HRoot0 = tree.getRoot().toString('hex');
    // 3. Compare HRoot and HRoot'.
    return HRoot.toUpperCase() === HRoot0.toUpperCase();
};
/* end block 01 */

example().then((result) => console.log(result));
