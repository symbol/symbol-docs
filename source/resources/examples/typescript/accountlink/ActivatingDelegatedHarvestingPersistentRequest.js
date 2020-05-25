"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const symbol_sdk_1 = require("symbol-sdk");
/* start block 01 */
// replace with network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
// replace with private key
const mainAccountPrivateKey = '0000000000000000000000000000000000000000000000000000000000000000';
const mainAccount = symbol_sdk_1.Account.createFromPrivateKey(mainAccountPrivateKey, networkType);
const remoteAccount = symbol_sdk_1.Account.generateNewAccount(networkType);
// replace with private key
const announcerAccountPrivateKey = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
const announcerAccount = symbol_sdk_1.Account.createFromPrivateKey(announcerAccountPrivateKey, networkType);
/* end block 01 */
/* start block 02 */
// replace with node publicKey (nodeUrl + '/node/info')
const nodePublicKey = '3A537D5A1AF51158C42F80A199BB58351DBF3253C4A6A1B7BD1014682FB595EA';
const nodePublicAccount = symbol_sdk_1.PublicAccount.createFromPublicKey(nodePublicKey, networkType);
const persistentDelegationRequestTransaction = symbol_sdk_1.PersistentDelegationRequestTransaction
    .createPersistentDelegationRequestTransaction(symbol_sdk_1.Deadline.create(), remoteAccount.privateKey, nodePublicAccount.publicKey, networkType, symbol_sdk_1.UInt64.fromUint(2000000));
/* end block 02 */
/* start block 03 */
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash = '4009619EB7A9F824C5D0EE0E164E0F99CCD7906A475D7768FD60B452204BD0A2';
const signedTransaction = announcerAccount.sign(persistentDelegationRequestTransaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-01.ap-northeast-1.testnet-0951-v1.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 03 */
