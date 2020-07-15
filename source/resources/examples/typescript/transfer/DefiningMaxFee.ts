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

import {
    Account,
    Address,
    AggregateTransaction,
    Deadline,
    NetworkType,
    PlainMessage,
    RepositoryFactoryHttp,
    TransferTransaction,
} from 'symbol-sdk';

const example = async () => {
    /* start block 01 */
    const publicAccount1 = Account.generateNewAccount(NetworkType.TEST_NET).publicAccount;
    const publicAccount2 = Account.generateNewAccount(NetworkType.TEST_NET).publicAccount;
    // Get median fee multiplier
    const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
    const repositoryHttp = new RepositoryFactoryHttp(nodeUrl);
    const networkHttp = repositoryHttp.createNetworkRepository();
    const medianFeeMultiplier = (await networkHttp.getTransactionFees().toPromise()).medianFeeMultiplier;

    // Define transaction and set max fee
    const rawAddress = 'TB6Q5E-YACWBP-CXKGIL-I6XWCH-DRFLTB-KUK34I-YJQ';
    const recipientAddress = Address.createFromRawAddress(rawAddress);
    const transferTransaction = TransferTransaction.create(
        Deadline.create(),
        recipientAddress,
        [],
        PlainMessage.create('This is a test message'),
        NetworkType.TEST_NET)
    .setMaxFee(medianFeeMultiplier);
    /* end block 01 */

    /* start block 02 */
    // Define transaction and set max fee
    const requiredCosignatures = 1;
    const aggregateTransaction = AggregateTransaction
        .createBonded(
        Deadline.create(),
        [transferTransaction.toAggregate(publicAccount1),
            transferTransaction.toAggregate(publicAccount2)],
        NetworkType.TEST_NET,
        [])
    .setMaxFeeForAggregate(medianFeeMultiplier, 1);
    /* end block 02 */
};

example().then((result) => console.log(result));
