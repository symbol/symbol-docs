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
const example = async () => {
  try {
    // Network information
    const nodeUrl = 'http://api-01.us-east-1.0.10.0.x.symboldev.network:3000';
    const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
    const epochAdjustment = await repositoryFactory
      .getEpochAdjustment()
      .toPromise();
    const networkType = await repositoryFactory.getNetworkType().toPromise();
    const networkGenerationHash = await repositoryFactory
      .getGenerationHash()
      .toPromise();
    // Returns the network main currency, symbol.xym
    const { currency } = await repositoryFactory.getCurrencies().toPromise();
    /* start block 01 */
    // Replace with recipient's address
    const rawRecipientAddress = 'TB6Q5E-YACWBP-CXKGIL-I6XWCH-DRFLTB-KUK34I-YJQ';
    const recipientAddress = symbol_sdk_1.Address.createFromRawAddress(
      rawRecipientAddress,
    );
    const maxFee = symbol_sdk_1.UInt64.fromUint(2000000);
    const transferTransaction = symbol_sdk_1.TransferTransaction.create(
      symbol_sdk_1.Deadline.create(epochAdjustment),
      recipientAddress,
      [currency.createRelative(10)],
      symbol_sdk_1.EmptyMessage,
      networkType,
      maxFee,
    );
    // Replace with sender's private key
    const privateKey =
      '1111111111111111111111111111111111111111111111111111111111111111';
    const account = symbol_sdk_1.Account.createFromPrivateKey(
      privateKey,
      networkType,
    );
    const signedTransaction = account.sign(
      transferTransaction,
      networkGenerationHash,
    );
    /* end block 01 */
    console.log('Sender address: ' + account.address.pretty());
    console.log('Recipient address: ' + recipientAddress.pretty());
    console.log(
      'Amount (absolute): ' +
        transferTransaction.mosaics[0].amount.compact().toLocaleString(),
    );
    /* start block 02 */
    const receiptHttp = repositoryFactory.createReceiptRepository();
    const transactionHttp = repositoryFactory.createTransactionRepository();
    const listener = repositoryFactory.createListener();
    const transactionService = new symbol_sdk_1.TransactionService(
      transactionHttp,
      receiptHttp,
    );
    console.log('Waiting for confirmation...');
    listener.open().then(() => {
      listener
        .unconfirmedAdded(account.address, signedTransaction.hash)
        .subscribe(() => console.log('Unconfirmed...'));
      transactionService.announce(signedTransaction, listener).subscribe(
        () => {
          console.log('Confirmed!');
          listener.close();
        },
        (error) => {
          console.log(error);
          listener.close();
        },
      );
    });
    /* end block 02 */
  } catch (e) {
    console.log(e);
  }
};
example().then();
