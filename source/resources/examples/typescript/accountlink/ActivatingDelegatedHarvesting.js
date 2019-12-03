"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nem2_sdk_1 = require("nem2-sdk");
/* start block 01 */
var accountPrivateKey = process.env.PRIVATE_KEY;
var account = nem2_sdk_1.Account.createFromPrivateKey(accountPrivateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
var remoteAccount = nem2_sdk_1.Account.generateNewAccount(nem2_sdk_1.NetworkType.MIJIN_TEST);
/* end block 01 */
/* start block 02 */
var accountLinkTransaction = nem2_sdk_1.AccountLinkTransaction.create(nem2_sdk_1.Deadline.create(), remoteAccount.publicKey, nem2_sdk_1.LinkAction.Link, nem2_sdk_1.NetworkType.MIJIN_TEST);
/* end block 02 */
/* start block 03 */
var nodePublicKey = process.env.NODE_PUBLIC_KEY;
var nodePublicAccount = nem2_sdk_1.PublicAccount.createFromPublicKey(nodePublicKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
var persistentDelegationRequestTransaction = nem2_sdk_1.PersistentDelegationRequestTransaction
    .createPersistentDelegationRequestTransaction(nem2_sdk_1.Deadline.create(), remoteAccount.privateKey, nodePublicAccount.publicKey, account.privateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
/* end block 03 */
/* start block 04 */
var aggregateTransaction = nem2_sdk_1.AggregateTransaction.createComplete(nem2_sdk_1.Deadline.create(), [
    accountLinkTransaction.toAggregate(account.publicAccount),
    persistentDelegationRequestTransaction.toAggregate(account.publicAccount),
], nem2_sdk_1.NetworkType.MIJIN_TEST, []);
var networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
var signedTransaction = account.sign(aggregateTransaction, networkGenerationHash);
var nodeUrl = 'http://localhost:3000';
var transactionHttp = new nem2_sdk_1.TransactionHttp(nodeUrl);
transactionHttp
    .announce(signedTransaction)
    .subscribe(function (x) { return console.log(x); }, function (err) { return console.error(err); });
/* end block 04 */
