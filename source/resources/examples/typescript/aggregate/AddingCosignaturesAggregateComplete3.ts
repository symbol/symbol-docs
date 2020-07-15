import { Account, AggregateTransaction, CosignatureSignedTransaction, CosignatureTransaction, Deadline, Mosaic, NamespaceId, NetworkCurrencyPublic, NetworkType, PlainMessage, PublicAccount, RepositoryFactoryHttp, TransactionMapping, TransferTransaction, UInt64 } from 'symbol-sdk';

/* Bob cosigns the transaction and shares the resulting transaciton signature and parent hash (offchain) with Alice*/
// replace with bob private key

const networkType = NetworkType.TEST_NET;
const bobPrivateKey = '';
const bobAccount = Account.createFromPrivateKey(bobPrivateKey, networkType);
const cosignedTransactionBob = CosignatureTransaction.signTransactionPayload(bobAccount, signedTransactionAlice.payload, generationHash);
console.log(cosignedTransactionBob.signature);
console.log(cosignedTransactionBob.parentHash);
