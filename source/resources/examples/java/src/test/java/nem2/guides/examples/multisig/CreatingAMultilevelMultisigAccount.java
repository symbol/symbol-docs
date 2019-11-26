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
import java.util.Arrays;
import java.util.Collections;
import java.util.concurrent.ExecutionException;
import org.junit.jupiter.api.Test;

class CreatingAMultilevelMultisigAccount {

    @Test
    void creatingAMultilevelMultisigAccount()
        throws ExecutionException, InterruptedException {

        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "http://localhost:3000")) {

            final String generationHash = repositoryFactory.getGenerationHash().toFuture().get();
            final NetworkType networkType = repositoryFactory.getNetworkType().toFuture().get();

            final TransactionRepository transactionRepository = repositoryFactory
                .createTransactionRepository();

            // Create multisig #2 (1-of-2)

            // Replace with the private key of the account that you want to convert into multisig
            final String multisig2PrivateKey = "";

            // Replace with cosignatories public keys
            final String cosignatory5PublicKey = "";
            final String cosignatory6PublicKey = "";

            final Account multisigAccount2 = Account
                .createFromPrivateKey(multisig2PrivateKey, networkType);

            final PublicAccount cosignatory5PublicAccount = PublicAccount
                .createFromPublicKey(cosignatory5PublicKey, networkType);
            final PublicAccount cosignatory6PublicAccount = PublicAccount
                .createFromPublicKey(cosignatory6PublicKey, networkType);

            final MultisigAccountModificationTransaction convertMultisigAccount2Transaction = MultisigAccountModificationTransactionFactory
                .create(
                    networkType,
                    (byte) 1,
                    (byte) 1,
                    Arrays.asList(cosignatory5PublicAccount, cosignatory6PublicAccount
                    ), Collections.emptyList()
                ).build();

            final SignedTransaction signedTransaction2 = multisigAccount2
                .sign(convertMultisigAccount2Transaction, generationHash);

            transactionRepository.announce(signedTransaction2).toFuture().get();

            // Create multisig #3 (2-of-3)

            // Replace with the private key of the account that you want to convert into multisig
            final String multisig3PrivateKey = "";

            // Replace with cosignatories public keys
            final String cosignatory7PublicKey = "";
            final String cosignatory8PublicKey = "";
            final String cosignatory4PublicKey = "";

            final Account multisigAccount3 = Account
                .createFromPrivateKey(multisig3PrivateKey, networkType);

            final PublicAccount cosignatory7PublicAccount = PublicAccount
                .createFromPublicKey(cosignatory7PublicKey, networkType);
            final PublicAccount cosignatory8PublicAccount = PublicAccount
                .createFromPublicKey(cosignatory8PublicKey, networkType);
            final PublicAccount cosignatory4PublicAccount = PublicAccount
                .createFromPublicKey(cosignatory4PublicKey, networkType);

            final MultisigAccountModificationTransaction convertMultisigAccount3Transaction = MultisigAccountModificationTransactionFactory
                .create(
                    networkType,
                    (byte) 2,
                    (byte) 1,
                    Arrays.asList(
                        cosignatory7PublicAccount,
                        cosignatory8PublicAccount,
                        cosignatory4PublicAccount
                    ),
                    Collections.emptyList()
                ).build();

            final SignedTransaction signedTransaction3 = multisigAccount3
                .sign(convertMultisigAccount3Transaction, generationHash);

            transactionRepository.announce(signedTransaction3).toFuture().get();

            // Create multisig #1 (3-of-3)

            // Replace with the private key of the account that you want to convert into multisig
            final String multisig1PrivateKey = "";

            final Account multisigAccount1 = Account
                .createFromPrivateKey(multisig1PrivateKey, networkType);

            final MultisigAccountModificationTransaction convertMultisigAccount1Transaction = MultisigAccountModificationTransactionFactory
                .create(networkType,
                    (byte) 3,
                    (byte) 1,
                    Arrays.asList(

                        multisigAccount2.getPublicAccount()
                        ,
                        multisigAccount3.getPublicAccount()
                        ,
                        cosignatory4PublicAccount

                    ),
                    Collections.emptyList()
                ).build();

            final SignedTransaction signedTransaction1 = multisigAccount1
                .sign(convertMultisigAccount1Transaction, generationHash);

            transactionRepository.announce(signedTransaction1).toFuture().get();
        }

    }
}
