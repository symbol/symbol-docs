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

package symbol.guides.examples.account;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import io.nem.sdk.api.AccountRepository;
import io.nem.sdk.api.RepositoryFactory;
import io.nem.sdk.api.TransactionSearchCriteria;
import io.nem.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.sdk.model.account.PublicAccount;
import io.nem.sdk.model.blockchain.NetworkType;
import io.nem.sdk.model.transaction.Transaction;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.concurrent.ExecutionException;

class GettingConfirmedTransactions {

    @Test
    void gettingConfirmedTransactions()
        throws ExecutionException, InterruptedException {

        /* start block 01 */
        // replace with node endpoint
        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "http://api-xym-harvest-3-01.us-west-2.nemtech.network:3000")) {

            final AccountRepository accountRepository = repositoryFactory
                .createAccountRepository();
            final NetworkType networkType = repositoryFactory.getNetworkType().toFuture().get();
            // Replace with account address
            final String publicKey = "E59EF184A612D4C3C4D89B5950EB57262C69862B2F96E59C5043BF41765C482F";
            final PublicAccount publicAccount = PublicAccount
                .createFromPublicKey(publicKey, networkType);

            // Page size between 10 and 100
            Integer pageSize = 10;
            final TransactionSearchCriteria transactionSearchCriteria = new TransactionSearchCriteria();
            transactionSearchCriteria.pageSize(pageSize);

            final List<Transaction> transactions = accountRepository
                    .transactions(publicAccount, transactionSearchCriteria).toFuture().get();
            final Gson gson = new GsonBuilder().setPrettyPrinting().serializeNulls().create();
            System.out.println(gson.toJson(transactions));
        }
        /* end block 01 */
    }
}

