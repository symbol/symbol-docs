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
const symbol_sdk_1 = require("symbol-sdk");
const example = () => __awaiter(void 0, void 0, void 0, function* () {
    /* start block 01 */
    const publicAccount1 = symbol_sdk_1.Account.generateNewAccount(symbol_sdk_1.NetworkType.TEST_NET).publicAccount;
    const publicAccount2 = symbol_sdk_1.Account.generateNewAccount(symbol_sdk_1.NetworkType.TEST_NET).publicAccount;
    // Get median fee multiplier
    const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
    const repositoryHttp = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
    const networkHttp = repositoryHttp.createNetworkRepository();
    const medianFeeMultiplier = (yield networkHttp.getTransactionFees().toPromise()).medianFeeMultiplier;
    // Define transaction and set max fee
    const rawAddress = 'TB6Q5E-YACWBP-CXKGIL-I6XWCH-DRFLTB-KUK34I-YJQ';
    const recipientAddress = symbol_sdk_1.Address.createFromRawAddress(rawAddress);
    const transferTransaction = symbol_sdk_1.TransferTransaction.create(symbol_sdk_1.Deadline.create(), recipientAddress, [], symbol_sdk_1.PlainMessage.create('This is a test message'), symbol_sdk_1.NetworkType.TEST_NET)
        .setMaxFee(medianFeeMultiplier);
    /* end block 01 */
    /* start block 02 */
    // Define transaction and set max fee
    const requiredCosignatures = 1;
    const aggregateTransaction = symbol_sdk_1.AggregateTransaction
        .createBonded(symbol_sdk_1.Deadline.create(), [transferTransaction.toAggregate(publicAccount1),
        transferTransaction.toAggregate(publicAccount2)], symbol_sdk_1.NetworkType.TEST_NET, [])
        .setMaxFeeForAggregate(medianFeeMultiplier, 1);
    /* end block 02 */
});
example().then((result) => console.log(result));
