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
// replace with network type
const networkType = NetworkType.TEST_NET;
// replace with private key
const mainAccountPrivateKey = '0000000000000000000000000000000000000000000000000000000000000000';
const mainAccount = Account.createFromPrivateKey(mainAccountPrivateKey, networkType);
const remoteAccount = Account.generateNewAccount(networkType);
// replace with private key
const announcerAccountPrivateKey = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
const announcerAccount = Account.createFromPrivateKey(announcerAccountPrivateKey, networkType);
/* end block 01 */

/* start block 02 */
// replace with node publicKey (nodeUrl + '/node/info')
const nodePublicKey = '3A537D5A1AF51158C42F80A199BB58351DBF3253C4A6A1B7BD1014682FB595EA';
const nodePublicAccount = PublicAccount.createFromPublicKey(nodePublicKey, networkType);

const persistentDelegationRequestTransaction = PersistentDelegationRequestTransaction
    .createPersistentDelegationRequestTransaction(
        Deadline.create(),
        remoteAccount.privateKey,
        nodePublicAccount.publicKey,
        networkType,
        UInt64.fromUint(2000000));
/* end block 02 */

/* start block 03 */
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash = 'ACECD90E7B248E012803228ADB4424F0D966D24149B72E58987D2BF2F2AF03C4';
const signedTransaction = announcerAccount.sign(persistentDelegationRequestTransaction, networkGenerationHash);

// replace with node endpoint
const nodeUrl = 'http://api-02.ap-northeast-1.0941-v1.symboldev.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 03 */
