// tslint:disable-next-line: max-line-length
import {
  Account,
  AggregateTransaction,
  CosignatureSignedTransaction,
  CosignatureTransaction,
  Deadline,
  Mosaic,
  NamespaceId,
  NetworkCurrencies,
  NetworkType,
  PlainMessage,
  PublicAccount,
  RepositoryFactoryHttp,
  TransactionMapping,
  TransferTransaction,
  UInt64,
} from 'symbol-sdk';

// Retrieve from node's /network/properties or RepositoryFactory
const epochAdjustment = 123456789;

/* start block 01 */
const networkType = NetworkType.TEST_NET;

// replace with alice private key
const alicePrivatekey = '';
const aliceAccount = Account.createFromPrivateKey(alicePrivatekey, networkType);

// replace with bob public key
const bobPublicKey = '';
const bobPublicAccount = PublicAccount.createFromPublicKey(
  bobPublicKey,
  networkType,
);

const aliceTransferTransaction = TransferTransaction.create(
  Deadline.create(epochAdjustment),
  bobPublicAccount.address,
  [NetworkCurrencies.PUBLIC.currency.createRelative(1000)],
  PlainMessage.create('payout'),
  networkType,
);

const bobTransferTransaction = TransferTransaction.create(
  Deadline.create(epochAdjustment),
  aliceAccount.address,
  [new Mosaic(new NamespaceId('collectible'), UInt64.fromUint(1))],
  PlainMessage.create('payout'),
  networkType,
);

const aggregateTransaction = AggregateTransaction.createComplete(
  Deadline.create(epochAdjustment),
  [
    aliceTransferTransaction.toAggregate(aliceAccount.publicAccount),
    bobTransferTransaction.toAggregate(bobPublicAccount),
  ],
  networkType,
  [],
  UInt64.fromUint(2000000),
);
/* end block 01 */

/* start block 02 */
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const generationHash =
  '1DFB2FAA9E7F054168B0C5FCB84F4DEB62CC2B4D317D861F3168D161F54EA78B';

const signedTransactionNotComplete = aliceAccount.sign(
  aggregateTransaction,
  generationHash,
);
console.log(signedTransactionNotComplete.payload);
/* end block 02 */

/* start block 03 */
// replace with bob private key
const bobPrivateKey = '';
const bobAccount = Account.createFromPrivateKey(bobPrivateKey, networkType);
const cosignedTransactionBob = CosignatureTransaction.signTransactionPayload(
  bobAccount,
  signedTransactionNotComplete.payload,
  generationHash,
);
console.log(cosignedTransactionBob.signature);
console.log(cosignedTransactionBob.parentHash);
/* end block 03 */

/* start block 04 */
const cosignatureSignedTransactions = [
  new CosignatureSignedTransaction(
    cosignedTransactionBob.parentHash,
    cosignedTransactionBob.signature,
    cosignedTransactionBob.signerPublicKey,
  ),
];
const rectreatedAggregateTransactionFromPayload = TransactionMapping.createFromPayload(
  signedTransactionNotComplete.payload,
) as AggregateTransaction;

const signedTransactionComplete = aliceAccount.signTransactionGivenSignatures(
  rectreatedAggregateTransactionFromPayload,
  cosignatureSignedTransactions,
  generationHash,
);
console.log(signedTransactionComplete.hash);

// replace with node endpoint
const nodeUrl = 'NODE_URL';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();

transactionHttp.announce(signedTransactionComplete).subscribe(
  (x) => console.log(x),
  (err) => console.error(err),
);
/* end block 04 */
