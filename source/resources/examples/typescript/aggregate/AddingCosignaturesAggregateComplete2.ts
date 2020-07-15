import { Account, AggregateTransaction, CosignatureSignedTransaction, CosignatureTransaction, Deadline, Mosaic, NamespaceId, NetworkCurrencyPublic, NetworkType, PlainMessage, PublicAccount, RepositoryFactoryHttp, TransactionMapping, TransferTransaction, UInt64 } from 'symbol-sdk';

const networkType = NetworkType.TEST_NET;

// replace with alice private key
const alicePrivatekey = '';
const aliceAccount =  Account.createFromPrivateKey(alicePrivatekey, networkType);

const generationHash = '';

const signedTransactionAlice = aliceAccount.sign(aggregateTransaction, generationHash);
console.log(signedTransactionAlice.payload);
