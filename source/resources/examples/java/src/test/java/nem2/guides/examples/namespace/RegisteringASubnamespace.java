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

package nem2.guides.examples.namespace;

import io.nem.sdk.api.RepositoryFactory;
import io.nem.sdk.api.TransactionRepository;
import io.nem.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.sdk.model.account.Account;
import io.nem.sdk.model.blockchain.NetworkType;
import io.nem.sdk.model.namespace.NamespaceId;
import io.nem.sdk.model.transaction.NamespaceRegistrationTransaction;
import io.nem.sdk.model.transaction.NamespaceRegistrationTransactionFactory;
import io.nem.sdk.model.transaction.SignedTransaction;
import java.util.concurrent.ExecutionException;
import org.junit.jupiter.api.Test;

class RegisteringASubnamespace {

    @Test
    void registeringASubnamespace()
        throws ExecutionException, InterruptedException {

        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "http://localhost:3000")) {
            final String generationHash = repositoryFactory.getGenerationHash().toFuture().get();

            final NetworkType networkType = repositoryFactory
                .getNetworkType().toFuture().get();

            final TransactionRepository transactionRepository = repositoryFactory
                .createTransactionRepository();
            /* start block 01 */
            // Replace with private key
            final String privateKey = "";

            final Account account = Account
                .createFromPrivateKey(privateKey, networkType);

            // Replace with root namespace name
            final NamespaceId rootNamespaceId = new NamespaceId("foo");

            //Replace with subnamespace name
            final String subnamespaceName = "bar";

            final NamespaceRegistrationTransaction registerNamespaceTransaction = NamespaceRegistrationTransactionFactory
                .createSubNamespace(
                    networkType,
                    subnamespaceName,
                    rootNamespaceId
                ).build();

            final SignedTransaction signedTransaction = account
                .sign(registerNamespaceTransaction, generationHash);

            transactionRepository.announce(signedTransaction).toFuture().get();
            /* end block 01 */
        }
    }
}
