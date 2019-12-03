"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nem2_sdk_1 = require("nem2-sdk");
/* start block 01 */
const accountPrivateKey = process.env.PRIVATE_KEY;
const account = nem2_sdk_1.Account.createFromPrivateKey(accountPrivateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const remoteAccount = nem2_sdk_1.Account.generateNewAccount(nem2_sdk_1.NetworkType.MIJIN_TEST);
/* end block 01 */
/* start block 02 */
const accountLinkTransaction = nem2_sdk_1.AccountLinkTransaction.create(nem2_sdk_1.Deadline.create(), remoteAccount.publicKey, nem2_sdk_1.LinkAction.Link, nem2_sdk_1.NetworkType.MIJIN_TEST);
/* end block 02 */
/* start block 03 */
const nodePublicKey = process.env.NODE_PUBLIC_KEY;
const nodePublicAccount = nem2_sdk_1.PublicAccount.createFromPublicKey(nodePublicKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
const persistentDelegationRequestTransaction = nem2_sdk_1.PersistentDelegationRequestTransaction
    .createPersistentDelegationRequestTransaction(nem2_sdk_1.Deadline.create(), remoteAccount.privateKey, nodePublicAccount.publicKey, account.privateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
/* end block 03 */
/* start block 04 */
const aggregateTransaction = nem2_sdk_1.AggregateTransaction.createComplete(nem2_sdk_1.Deadline.create(), [
    accountLinkTransaction.toAggregate(account.publicAccount),
    persistentDelegationRequestTransaction.toAggregate(account.publicAccount),
], nem2_sdk_1.NetworkType.MIJIN_TEST, []);
const networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
const signedTransaction = account.sign(aggregateTransaction, networkGenerationHash);
const nodeUrl = 'http://localhost:3000';
const transactionHttp = new nem2_sdk_1.TransactionHttp(nodeUrl);
transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
/* end block 04 */
