import { Account, AggregateTransaction, CosignatureSignedTransaction, CosignatureTransaction, Deadline, Mosaic, NamespaceId, NetworkCurrencyPublic, NetworkType, PlainMessage, PublicAccount, RepositoryFactoryHttp, TransactionMapping, TransferTransaction, UInt64 } from 'symbol-sdk';


const networkType = NetworkType.TEST_NET;

// replace with alice private key
const alicePrivatekey = '';
const aliceAccount =  Account.createFromPrivateKey(alicePrivatekey, networkType);

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
const nodeUrl = '';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();

transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 04 */
