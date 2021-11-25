import {
  Account,
  Deadline,
  LinkAction,
  NetworkType,
  NodeKeyLinkTransaction,
  PublicAccount,
  RepositoryFactoryHttp,
  UInt64,
} from 'symbol-sdk';

/* start block 01 */
// Retrieve from node's /network/properties or RepositoryFactory
const epochAdjustment = 123456789;
// Set network type
const networkType = NetworkType.TEST_NET;
// Main account private key for signing transaction
const mainAccountPrivateKey =
  '0000000000000000000000000000000000000000000000000000000000000000';
const mainAccount = Account.createFromPrivateKey(
  mainAccountPrivateKey,
  networkType,
);
// Node account
const nodePublicTLSKey =
  '70E06C112848A652D635755B7530D3096A978321D09B8D8DC17505CAE09565C5';
const nodeAccount = PublicAccount.createFromPublicKey(
  nodePublicTLSKey,
  networkType,
);
/* end block 01 */

/* start block 02 */
const nodeLinkTransaction = NodeKeyLinkTransaction.create(
  Deadline.create(epochAdjustment),
  nodeAccount.publicKey,
  LinkAction.Link,
  networkType,
  UInt64.fromUint(2000000),
); // Absolute number
/* end block 02 */

/* start block 03 */
// Replace with any node in the network
const nodeUrl = 'NODE_URL';
// Replace with networkGenerationHashSeed by querying http://<node-url>:3000/node/info
const networkGenerationHash =
  '6C1B92391CCB41C96478471C2634C111D9E989DECD66130C0430B5B8D20117CD';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
const signedTransaction = mainAccount.sign(
  nodeLinkTransaction,
  networkGenerationHash,
);
console.log('Transaction hash:', signedTransaction.hash);

transactionHttp.announce(signedTransaction).subscribe(
  (x) => console.log(x),
  (err) => console.error(err),
);
/* end block 03 */
