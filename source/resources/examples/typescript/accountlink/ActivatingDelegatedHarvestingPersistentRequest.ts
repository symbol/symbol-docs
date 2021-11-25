import {
  Account,
  Deadline,
  NetworkType,
  PersistentDelegationRequestTransaction,
  PublicAccount,
  RepositoryFactoryHttp,
  UInt64,
} from 'symbol-sdk';

/* start block 01 */
// Retrieve from node's /network/properties or RepositoryFactory
const epochAdjustment = 123456789;
// Set network type
const networkType = NetworkType.TEST_NET;
// Remote account private key
const remoteAccountPrivateKey =
  'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
const remoteAccount = Account.createFromPrivateKey(
  remoteAccountPrivateKey,
  networkType,
);
// Vrf account private key
const vrfAccountPrivateKey =
  'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB';
const vrfAccount = Account.createFromPrivateKey(
  vrfAccountPrivateKey,
  networkType,
);
// Announcer private key
const announcerAccountPrivateKey =
  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
const announcerAccount = Account.createFromPrivateKey(
  announcerAccountPrivateKey,
  networkType,
);
// Node account - Replace with publicKey by querying http://<node-url>:3000/node/info
const nodePublicTLSKey =
  '46DDDBCC4DB446BA1BEEF0294B51327BD2872625A235E658E3D1111F45FAD25D';
const nodeAccount = PublicAccount.createFromPublicKey(
  nodePublicTLSKey,
  networkType,
);
/* end block 01 */

/* start block 02 */
const persistentDelegationRequestTransaction = PersistentDelegationRequestTransaction.createPersistentDelegationRequestTransaction(
  Deadline.create(epochAdjustment),
  remoteAccount.privateKey,
  vrfAccount.privateKey,
  nodeAccount.publicKey,
  networkType,
  UInt64.fromUint(2000000),
);
/* end block 02 */

/* start block 03 */
// Replace with networkGenerationHashSeed by querying http://<node-url>:3000/node/info
const networkGenerationHash =
  '6C1B92391CCB41C96478471C2634C111D9E989DECD66130C0430B5B8D20117CD';
// Replace with any node in the network
const nodeUrl = 'NODE_URL';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
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
