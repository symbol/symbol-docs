"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const symbol_sdk_1 = require("symbol-sdk");
/* start block 01 */
// replace with network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
// replace with private key
const mainAccountPrivateKey = '0000000000000000000000000000000000000000000000000000000000000000';
const mainAccount = symbol_sdk_1.Account.createFromPrivateKey(mainAccountPrivateKey, networkType);
// replace with remote account
const remoteAccount = symbol_sdk_1.Account.generateNewAccount(networkType);
/* end block 01 */
/* start block 02 */
const accountLinkTransaction = symbol_sdk_1.AccountLinkTransaction.create(symbol_sdk_1.Deadline.create(), remoteAccount.publicKey, symbol_sdk_1.LinkAction.Link, networkType, symbol_sdk_1.UInt64.fromUint(2000000));
/* end block 02 */
/* start block 03 */
// replace with node endpoint
const nodeUrl = 'http://api-2-01.us-west-1.symboldev.network:3000';
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '44D2225B8932C9A96DCB13508CBCDFFA9A9663BFBA2354FEEC8FCFCB7E19846C';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
const signedTransaction = mainAccount.sign(accountLinkTransaction, networkGenerationHash);
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 03 */
