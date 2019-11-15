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

package nem2.guides.examples.multisig;

import io.nem.sdk.api.RepositoryFactory;
import io.nem.sdk.api.TransactionRepository;
import io.nem.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.sdk.model.account.Account;
import io.nem.sdk.model.account.PublicAccount;
import io.nem.sdk.model.blockchain.NetworkType;
import io.nem.sdk.model.transaction.MultisigAccountModificationTransaction;
import io.nem.sdk.model.transaction.MultisigAccountModificationTransactionFactory;
import io.nem.sdk.model.transaction.SignedTransaction;
import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;
import java.util.concurrent.ExecutionException;
import org.junit.jupiter.api.Test;

class ConvertingAnAccountToMultisig {

    @Test
    void convertingAnAccountToMultisig()
        throws ExecutionException, InterruptedException {

        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "http://localhost:3000")) {

            final String generationHash = repositoryFactory.createBlockRepository()
                .getBlockByHeight(
                    BigInteger.ONE).toFuture().get().getGenerationHash();

            final NetworkType networkType = repositoryFactory.createNetworkRepository()
                .getNetworkType()
                .toFuture().get();

            final TransactionRepository transactionRepository = repositoryFactory
                .createTransactionRepository();

            // Replace with the private key of the account that you want to convert into multisig
            final String privateKey = "";

            // Replace with cosignatories public keys
            final String cosignatory1PublicKey = "";
            final String cosignatory2PublicKey = "";

            final Account account = Account.createFromPrivateKey(privateKey, networkType);

            final PublicAccount cosignatory1PublicAccount = PublicAccount
                .createFromPublicKey(cosignatory1PublicKey, networkType);
            final PublicAccount cosignatory2PublicAccount = PublicAccount
                .createFromPublicKey(cosignatory2PublicKey, networkType);

            final MultisigAccountModificationTransaction convertIntoMultisigTransaction = MultisigAccountModificationTransactionFactory
                .create(
                    networkType,
                    (byte) 1,
                    (byte) 1,
                    Arrays.asList(
                        cosignatory1PublicAccount,
                        cosignatory2PublicAccount
                    ), Collections.emptyList()
                ).build();

            final SignedTransaction signedTransaction = account
                .sign(convertIntoMultisigTransaction, generationHash);
            transactionRepository.announce(signedTransaction).toFuture().get();
        }
    }
}
