/*
 *
 * Copyright 2018-present NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package symbol.guides.examples.aggregate;

import io.nem.symbol.sdk.api.Listener;
import io.nem.symbol.sdk.api.RepositoryFactory;
import io.nem.symbol.sdk.api.TransactionRepository;
import io.nem.symbol.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.symbol.sdk.model.account.Account;
import io.nem.symbol.sdk.model.network.NetworkType;
import io.nem.symbol.sdk.model.transaction.AggregateTransaction;
import io.nem.symbol.sdk.model.transaction.CosignatureSignedTransaction;
import io.nem.symbol.sdk.model.transaction.CosignatureTransaction;
import java.util.function.BiFunction;
import org.junit.jupiter.api.Test;

class CosigningAggregateBondedTransactionsAutomatically {

    @Test
    void example() throws Exception {

        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "NODE_URL")) {
            // replace with recipient address

            /* start block 01 */
            BiFunction<AggregateTransaction, Account, CosignatureSignedTransaction> cosignAggregateBondedTransaction = ((transaction, account) -> CosignatureTransaction
                .create(transaction).signWith(account));
            /* end block 01 */

            /* start block 02 */
            NetworkType networkType = repositoryFactory.getNetworkType().toFuture().get();
            // replace with cosigner private key
            String privateKey = "";
            Account account = Account.createFromPrivateKey(privateKey, networkType);

            TransactionRepository transactionRepository = repositoryFactory.createTransactionRepository();

            try (Listener listener = repositoryFactory.createListener()) {
                listener.open().get();
                listener.aggregateBondedAdded(account.getAddress())
                    .filter(a -> a.signedByAccount(account.getPublicAccount()))
                    .map(a -> cosignAggregateBondedTransaction.apply(a, account))
                    .flatMap(transactionRepository::announceAggregateBondedCosignature).toFuture().get();
            }

            /* end block 02 */

        }

    }
}
