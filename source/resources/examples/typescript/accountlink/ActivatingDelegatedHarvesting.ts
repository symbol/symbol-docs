import {
    Account,
    AccountLinkTransaction,
    AggregateTransaction,
    Deadline,
    LinkAction,
    NetworkType,
    PersistentDelegationRequestTransaction,
    PublicAccount,
    TransactionHttp,
} from 'nem2-sdk';

/* start block 01 */
// replace with network type
const networkType = NetworkType.TEST_NET;
// replace with private key
const accountPrivateKey = '0000000000000000000000000000000000000000000000000000000000000000';
const account = Account.createFromPrivateKey(accountPrivateKey, networkType);

const remoteAccount = Account.generateNewAccount(networkType);
/* end block 01 */

/* start block 02 */
const accountLinkTransaction = AccountLinkTransaction.create(
    Deadline.create(),
    remoteAccount.publicKey,
    LinkAction.Link,
    networkType);
/* end block 02 */

/* start block 03 */
// replace with node publicKey (nodeUrl + '/node/info')
const nodePublicKey = '3A537D5A1AF51158C42F80A199BB58351DBF3253C4A6A1B7BD1014682FB595EA';
const nodePublicAccount = PublicAccount.createFromPublicKey(nodePublicKey, networkType);

const persistentDelegationRequestTransaction = PersistentDelegationRequestTransaction
    .createPersistentDelegationRequestTransaction(
        Deadline.create(),
        remoteAccount.privateKey,
        nodePublicAccount.publicKey,
        account.privateKey,
        networkType);
/* end block 03 */

/* start block 04 */
const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [
        accountLinkTransaction.toAggregate(account.publicAccount),
        persistentDelegationRequestTransaction.toAggregate(account.publicAccount),
    ],
    networkType,
    []);

// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '6C0350A10724FC325A1F06CEFC4CA14464BC472F566842D22418AEE0F8746B4C';
const signedTransaction = account.sign(aggregateTransaction, networkGenerationHash);

// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.nemtech.network:3000';
const transactionHttp = new TransactionHttp(nodeUrl);
transactionHttp
    .announce(signedTransaction)
    .subscribe(x=> console.log(x),err => console.error(err));
/* end block 04 */
