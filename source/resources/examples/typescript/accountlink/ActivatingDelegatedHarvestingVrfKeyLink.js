'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const symbol_sdk_1 = require('symbol-sdk');
/* start block 01 */
// Retrieve from node's /network/properties or RepositoryFactory
const epochAdjustment = 123456789;
// Set network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
// Main account private key for signing transaction
const mainAccountPrivateKey =
  '0000000000000000000000000000000000000000000000000000000000000000';
const mainAccount = symbol_sdk_1.Account.createFromPrivateKey(
  mainAccountPrivateKey,
  networkType,
);
// Generate a new account as vrf account
const vrfAccount = symbol_sdk_1.Account.generateNewAccount(networkType);
console.log('Vrf account Private Key:', vrfAccount.privateKey);
/* end block 01 */
/* start block 02 */
const vrfLinkTransaction = symbol_sdk_1.VrfKeyLinkTransaction.create(
  symbol_sdk_1.Deadline.create(epochAdjustment),
  vrfAccount.publicKey,
  symbol_sdk_1.LinkAction.Link,
  networkType,
  symbol_sdk_1.UInt64.fromUint(2000000),
); // Absolute number
/* end block 02 */
/* start block 03 */
// Replace with any node in the network
const nodeUrl = 'NODE_URL';
// Replace with networkGenerationHashSeed by querying http://<node-url>:3000/node/info
const networkGenerationHash =
  '6C1B92391CCB41C96478471C2634C111D9E989DECD66130C0430B5B8D20117CD';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
const signedTransaction = mainAccount.sign(
  vrfLinkTransaction,
  networkGenerationHash,
);
console.log('Transaction hash:', signedTransaction.hash);
transactionHttp.announce(signedTransaction).subscribe(
  (x) => console.log(x),
  (err) => console.error(err),
);
/* end block 03 */
