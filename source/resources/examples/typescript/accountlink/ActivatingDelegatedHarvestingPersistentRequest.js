'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const symbol_sdk_1 = require('symbol-sdk');
/* start block 01 */
// Retrieve from node's /network/properties or RepositoryFactory
const epochAdjustment = 123456789;
// Set network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
// Remote account private key
const remoteAccountPrivateKey =
  'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
const remoteAccount = symbol_sdk_1.Account.createFromPrivateKey(
  remoteAccountPrivateKey,
  networkType,
);
// Vrf account private key
const vrfAccountPrivateKey =
  'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB';
const vrfAccount = symbol_sdk_1.Account.createFromPrivateKey(
  vrfAccountPrivateKey,
  networkType,
);
// Announcer private key
const announcerAccountPrivateKey =
  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
const announcerAccount = symbol_sdk_1.Account.createFromPrivateKey(
  announcerAccountPrivateKey,
  networkType,
);
// Node account - Replace with publicKey by querying http://<node-url>:3000/node/info
const nodePublicTLSKey =
  '46DDDBCC4DB446BA1BEEF0294B51327BD2872625A235E658E3D1111F45FAD25D';
const nodeAccount = symbol_sdk_1.PublicAccount.createFromPublicKey(
  nodePublicTLSKey,
  networkType,
);
/* end block 01 */
/* start block 02 */
const persistentDelegationRequestTransaction = symbol_sdk_1.PersistentDelegationRequestTransaction.createPersistentDelegationRequestTransaction(
  symbol_sdk_1.Deadline.create(epochAdjustment),
  remoteAccount.privateKey,
  vrfAccount.privateKey,
  nodeAccount.publicKey,
  networkType,
  symbol_sdk_1.UInt64.fromUint(2000000),
);
/* end block 02 */
/* start block 03 */
// Replace with networkGenerationHashSeed by querying http://<node-url>:3000/node/info
const networkGenerationHash =
  '6C1B92391CCB41C96478471C2634C111D9E989DECD66130C0430B5B8D20117CD';
// Replace with any node in the network
const nodeUrl = 'NODE_URL';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
const signedTransaction = announcerAccount.sign(
  persistentDelegationRequestTransaction,
  networkGenerationHash,
);
console.log('Transaction hash:', signedTransaction.hash);
transactionHttp.announce(signedTransaction).subscribe(
  (x) => console.log(x),
  (err) => console.error(err),
);
/* end block 03 */
