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

package nem2.guides.examples.account;

import io.nem.sdk.api.RepositoryFactory;
import io.nem.sdk.api.TransactionRepository;
import io.nem.sdk.infrastructure.Listener;
import io.nem.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.sdk.model.account.Account;
import io.nem.sdk.model.account.PublicAccount;
import io.nem.sdk.model.blockchain.NetworkType;
import io.nem.sdk.model.mosaic.NetworkCurrencyMosaic;
import io.nem.sdk.model.transaction.AggregateTransaction;
import io.nem.sdk.model.transaction.AggregateTransactionFactory;
import io.nem.sdk.model.transaction.HashLockTransaction;
import io.nem.sdk.model.transaction.HashLockTransactionFactory;
import io.nem.sdk.model.transaction.MultisigAccountModificationTransaction;
import io.nem.sdk.model.transaction.MultisigAccountModificationTransactionFactory;
import io.nem.sdk.model.transaction.SignedTransaction;
import io.nem.sdk.model.transaction.Transaction;
import java.math.BigInteger;
import java.util.Collections;
import java.util.concurrent.ExecutionException;
import org.junit.jupiter.api.Test;

class ModifyingAMultisigAccountAddCosignatory {

    @Test
    void modifyingAMultisigAccountAddCosignatory()
        throws ExecutionException, InterruptedException {

        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "http://localhost:3000");
            final Listener listener = repositoryFactory.createListener()) {

            final String generationHash = repositoryFactory.createBlockRepository()
                .getBlockByHeight(
                    BigInteger.ONE).toFuture().get().getGenerationHash();

            final NetworkType networkType = repositoryFactory.createNetworkRepository()
                .getNetworkType()
                .toFuture().get();

            final TransactionRepository transactionRepository = repositoryFactory
                .createTransactionRepository();

            // Replace with the multisig public key
            final String cosignatoryPrivateKey = "";
            final String multisigAccountPublicKey = "";
            final String newCosignatoryPublicKey = "";

            final Account cosignatoryAccount = Account
                .createFromPrivateKey(cosignatoryPrivateKey, networkType);
            final PublicAccount newCosignatoryAccount = PublicAccount
                .createFromPublicKey(newCosignatoryPublicKey, networkType);
            final PublicAccount multisigAccount = PublicAccount
                .createFromPublicKey(multisigAccountPublicKey, networkType);

            final MultisigAccountModificationTransaction modifyMultisigAccountTransaction = MultisigAccountModificationTransactionFactory
                .create(networkType,
                    (byte) 0,
                    (byte) 0,
                    Collections.singletonList(newCosignatoryAccount),
                    Collections.emptyList()
                ).build();

            final AggregateTransaction aggregateTransaction = AggregateTransactionFactory
                .createBonded(
                    networkType,
                    Collections
                        .singletonList(modifyMultisigAccountTransaction
                            .toAggregate(multisigAccount))
                ).build();

            final SignedTransaction signedTransaction = cosignatoryAccount
                .sign(aggregateTransaction, generationHash);

            final HashLockTransaction lockFundsTransaction = HashLockTransactionFactory.create(
                networkType,
                NetworkCurrencyMosaic.createRelative(BigInteger.valueOf(10)),
                BigInteger.valueOf(480),
                signedTransaction
            ).build();

            final SignedTransaction lockFundsTransactionSigned = cosignatoryAccount
                .sign(lockFundsTransaction, generationHash);

            transactionRepository.announce(lockFundsTransactionSigned).toFuture().get();

            // announce signed transaction

            listener.open().get();

            final Transaction transaction = listener.confirmed(cosignatoryAccount.getAddress())
                .toFuture().get();

            transactionRepository.announceAggregateBonded(signedTransaction).toFuture().get();
        }
    }
}
