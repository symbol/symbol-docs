package symbol.guides.examples.account;

import io.nem.symbol.sdk.api.AccountRepository;
import io.nem.symbol.sdk.api.RepositoryFactory;
import io.nem.symbol.sdk.api.TransactionPaginationStreamer;
import io.nem.symbol.sdk.api.TransactionRepository;
import io.nem.symbol.sdk.api.TransactionSearchCriteria;
import io.nem.symbol.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.symbol.sdk.model.account.PublicAccount;
import io.nem.symbol.sdk.model.network.NetworkType;
import io.nem.symbol.sdk.model.transaction.Transaction;
import io.nem.symbol.sdk.model.transaction.TransactionGroup;
import io.reactivex.Observable;
import java.util.concurrent.ExecutionException;
import org.junit.jupiter.api.Test;

class GettingConfirmedTransactions {

    @Test
    void gettingAccountInformation()
        throws ExecutionException, InterruptedException {


        // replace with node endpoint
        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "NODE_URL")) {

            /* start block 01 */
            // replace with signer public key
            NetworkType networkType = repositoryFactory.getNetworkType().toFuture().get();
            PublicAccount signer = PublicAccount.createFromPublicKey(
                "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                networkType);
            /* end block 01 */

            /* start block 02 */
            final TransactionRepository transactionRepository = repositoryFactory
                .createTransactionRepository();

            TransactionPaginationStreamer streamer = new TransactionPaginationStreamer(
                transactionRepository);

            Observable<Transaction> transactions = streamer
                .search(new TransactionSearchCriteria(TransactionGroup.CONFIRMED)
                    .address(signer.getAddress()));

            System.out.println(transactions.toList().toFuture().get());
            /* end block 02 */
        }

    }
}
