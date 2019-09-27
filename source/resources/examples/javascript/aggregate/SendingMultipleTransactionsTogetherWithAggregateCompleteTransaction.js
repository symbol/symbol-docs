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

const nem2Sdk = require("nem2-sdk");
const Account = nem2Sdk.Account,
    Deadline = nem2Sdk.Deadline,
    NetworkType = nem2Sdk.NetworkType,
    TransferTransaction = nem2Sdk.TransferTransaction,
    AggregateTransaction = nem2Sdk.AggregateTransaction,
    TransactionHttp = nem2Sdk.TransactionHttp,
    PlainMessage = nem2Sdk.PlainMessage,
    Address = nem2Sdk.Address,
    NetworkCurrencyMosaic = nem2Sdk.NetworkCurrencyMosaic;

/* start block 01 */
const transactionHttp = new TransactionHttp('http://localhost:3000');

const privateKey = process.env.PRIVATE_KEY;
const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

const aliceAddress =  process.env.ALICE_ADDRESS;
const aliceAccount = Address.createFromRawAddress(aliceAddress);

const bobAddress = process.env.BOB_ADDRESS;
const bobAccount = Address.createFromRawAddress(bobAddress);

const amount = NetworkCurrencyMosaic.createRelative(10);

const aliceTransferTransaction = TransferTransaction.create(Deadline.create(), aliceAccount, [amount], PlainMessage.create('payout'), NetworkType.MIJIN_TEST);
const bobTransferTransaction = TransferTransaction.create(Deadline.create(), bobAccount, [amount], PlainMessage.create('payout'), NetworkType.MIJIN_TEST);
/* end block 01 */

/* start block 02 */
const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [aliceTransferTransaction.toAggregate(account.publicAccount),
            bobTransferTransaction.toAggregate(account.publicAccount)],
    NetworkType.MIJIN_TEST,
    []
);
/* end block 02 */

/* start block 03 */
const networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
const signedTransaction = account.sign(aggregateTransaction, networkGenerationHash);

transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
/* end block 03 */
