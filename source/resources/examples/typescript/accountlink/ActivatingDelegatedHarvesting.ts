import {
    Account,
    AccountLinkTransaction,
    AggregateTransaction,
    Deadline,
    LinkAction,
    NetworkType,
    PersistentDelegationRequestTransaction,
    PersistentHarvestingDelegationMessage,
    PublicAccount,
    TransactionHttp,
} from 'nem2-sdk';

/* start block 01 */
const accountPrivateKey = process.env.PRIVATE_KEY as string;
const account = Account.createFromPrivateKey(accountPrivateKey, NetworkType.MIJIN_TEST);

const remoteAccount = Account.generateNewAccount(NetworkType.MIJIN_TEST);
/* end block 01 */

/* start block 02 */
const accountLinkTransaction = AccountLinkTransaction.create(
    Deadline.create(),
    remoteAccount.publicKey,
    LinkAction.Link,
    NetworkType.MIJIN_TEST);
/* end block 02 */

/* start block 03 */
const nodePublicKey = process.env.NODE_PUBLIC_KEY as string;
const nodePublicAccount = PublicAccount.createFromPublicKey(nodePublicKey, NetworkType.MIJIN_TEST);

const persistentDelegationRequestTransaction = PersistentDelegationRequestTransaction
    .createPersistentDelegationRequestTransaction(
        Deadline.create(),
        remoteAccount.privateKey,
        nodePublicAccount.publicKey,
        account.privateKey,
        NetworkType.MIJIN_TEST);
/* end block 03 */

/* start block 04 */
const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [
        accountLinkTransaction.toAggregate(account.publicAccount),
        persistentDelegationRequestTransaction.toAggregate(account.publicAccount),
    ],
    NetworkType.MIJIN_TEST,
    []);

const networkGenerationHash = process.env.NETWORK_GENERATION_HASH as string;
const signedTransaction = account.sign(aggregateTransaction, networkGenerationHash);

const nodeUrl = 'http://localhost:3000';
const transactionHttp = new TransactionHttp(nodeUrl);
transactionHttp
    .announce(signedTransaction)
    .subscribe(x=> console.log(x),err => console.error(err));
/* end block 04 */
