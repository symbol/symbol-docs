"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: max-line-length
const symbol_sdk_1 = require("symbol-sdk");
/* start block 01 */
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
// replace with alice private key
const alicePrivatekey = '';
const aliceAccount = symbol_sdk_1.Account.createFromPrivateKey(alicePrivatekey, networkType);
// replace with bob public key
const bobPublicKey = '';
const bobPublicAccount = symbol_sdk_1.PublicAccount.createFromPublicKey(bobPublicKey, networkType);
const aliceTransferTransaction = symbol_sdk_1.TransferTransaction.create(symbol_sdk_1.Deadline.create(), bobPublicAccount.address, [symbol_sdk_1.NetworkCurrencyPublic.createRelative(1000)], symbol_sdk_1.PlainMessage.create('payout'), networkType);
const bobTransferTransaction = symbol_sdk_1.TransferTransaction.create(symbol_sdk_1.Deadline.create(), aliceAccount.address, [new symbol_sdk_1.Mosaic(new symbol_sdk_1.NamespaceId('collectible'), symbol_sdk_1.UInt64.fromUint(1))], symbol_sdk_1.PlainMessage.create('payout'), networkType);
const aggregateTransaction = symbol_sdk_1.AggregateTransaction.createComplete(symbol_sdk_1.Deadline.create(), [aliceTransferTransaction.toAggregate(aliceAccount.publicAccount), bobTransferTransaction.toAggregate(bobPublicAccount)], networkType, [], symbol_sdk_1.UInt64.fromUint(2000000));
/* end block 01 */
/* start block 02 */
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const generationHash = '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';
const signedTransactionNotComplete = aliceAccount.sign(aggregateTransaction, generationHash);
console.log(signedTransactionNotComplete.payload);
/* end block 02 */
/* start block 03 */
// replace with bob private key
const bobPrivateKey = '';
const bobAccount = symbol_sdk_1.Account.createFromPrivateKey(bobPrivateKey, networkType);
const cosignedTransactionBob = symbol_sdk_1.CosignatureTransaction
    .signTransactionPayload(bobAccount, signedTransactionNotComplete.payload, generationHash);
console.log(cosignedTransactionBob.signature);
console.log(cosignedTransactionBob.parentHash);
/* end block 03 */
/* start block 04 */
const cosignatureSignedTransactions = [
    new symbol_sdk_1.CosignatureSignedTransaction(cosignedTransactionBob.parentHash, cosignedTransactionBob.signature, cosignedTransactionBob.signerPublicKey),
];
const rectreatedAggregateTransactionFromPayload = symbol_sdk_1.TransactionMapping
    .createFromPayload(signedTransactionNotComplete.payload);
const signedTransactionComplete = aliceAccount
    .signTransactionGivenSignatures(rectreatedAggregateTransactionFromPayload, cosignatureSignedTransactions, generationHash);
console.log(signedTransactionComplete.hash);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp
    .announce(signedTransactionComplete)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 04 */
