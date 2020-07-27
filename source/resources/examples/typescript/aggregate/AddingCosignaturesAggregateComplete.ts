import { Account, AggregateTransaction, CosignatureSignedTransaction, CosignatureTransaction, Deadline, Mosaic, NamespaceId, NetworkCurrencyPublic, NetworkType, PlainMessage, PublicAccount, RepositoryFactoryHttp, TransactionMapping, TransferTransaction, UInt64 } from 'symbol-sdk';

/* start block 01 */
/* Alice wants to announce the following aggregate transaction to the network as complete:
    - Alice -> 1000 -> xem -> Bob
    - Bob -> 1 collectible -> Alice
*/

const networkType = NetworkType.TEST_NET;

// replace with alice private key
const alicePrivatekey = '';
const aliceAccount =  Account.createFromPrivateKey(alicePrivatekey, networkType);

// replace with bob public key
const bobPublicKey = '';
const bobPublicAccount = PublicAccount.createFromPublicKey(bobPublicKey, networkType);

const aliceTransferTransaction = TransferTransaction.create(
    Deadline.create(),
    bobPublicAccount.address,
    [NetworkCurrencyPublic.createRelative(1000)],
    PlainMessage.create('payout'),
    networkType,
);

const bobTransferTransaction = TransferTransaction.create(
    Deadline.create(),
    aliceAccount.address,
    [new Mosaic(new NamespaceId('collectible'), UInt64.fromHex('1'))],
    PlainMessage.create('payout'),
    networkType,
);

const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [aliceTransferTransaction.toAggregate(aliceAccount.publicAccount), bobTransferTransaction.toAggregate(bobPublicKey)],
    networkType,
    [],
    UInt64.fromUint(2000000),
);
/* end block 01 */

/* start block 02 */
/*  However, she wants to avoid using the network partial cache to not loose 10 xem if Bob never signs the transaction.
    Instead,  Alice signs the aggregate transation and shares the resulting payload (offchain) with Bob */

// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const generationHash = '';

const signedTransactionAlice = aliceAccount.sign(aggregateTransaction, generationHash);
console.log(signedTransactionAlice.payload);
/* end block 02 */

/* start block 03 */
/* Bob cosigns the transaction and shares the resulting transaciton signature and parent hash (offchain) with Alice*/
// replace with bob private key
const bobPrivateKey = '';
const bobAccount = Account.createFromPrivateKey(bobPrivateKey, networkType);
const cosignedTransactionBob = CosignatureTransaction.signTransactionPayload(bobAccount, signedTransactionAlice.payload, generationHash);
console.log(cosignedTransactionBob.signature);
console.log(cosignedTransactionBob.parentHash);
/* end block 03 */

/* start block 04 */
/* Alice collects the cosignatures, recreate the transaction, and announces it to the network as complete. */
const cosignatureSignedTransactions = [
    new CosignatureSignedTransaction(
        cosignedTransactionBob.parentHash,
        cosignedTransactionBob.signature,
         cosignedTransactionBob.signerPublicKey),
];
const rectreatedAggregateTransactionFromPayload= TransactionMapping
.createFromPayload(signedTransactionAlice.payload) as AggregateTransaction;

const signedTransaction = aliceAccount
    .signTransactionGivenSignatures(rectreatedAggregateTransactionFromPayload, cosignatureSignedTransactions, generationHash);

// replace with node endpoint
const nodeUrl = 'http://api-01.ap-northeast-1.testnet-0951-v1.symboldev.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();

transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 04 */
