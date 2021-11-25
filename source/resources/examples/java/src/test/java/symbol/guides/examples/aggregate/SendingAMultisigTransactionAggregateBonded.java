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
import io.nem.symbol.sdk.api.TransactionService;
import io.nem.symbol.sdk.infrastructure.TransactionServiceImpl;
import io.nem.symbol.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.symbol.sdk.model.account.Account;
import io.nem.symbol.sdk.model.account.Address;
import io.nem.symbol.sdk.model.message.PlainMessage;
import io.nem.symbol.sdk.model.mosaic.NetworkCurrency;
import io.nem.symbol.sdk.model.network.NetworkType;
import io.nem.symbol.sdk.model.transaction.AggregateTransaction;
import io.nem.symbol.sdk.model.transaction.AggregateTransactionFactory;
import io.nem.symbol.sdk.model.transaction.HashLockTransaction;
import io.nem.symbol.sdk.model.transaction.HashLockTransactionFactory;
import io.nem.symbol.sdk.model.transaction.SignedTransaction;
import io.nem.symbol.sdk.model.transaction.TransferTransaction;
import io.nem.symbol.sdk.model.transaction.TransferTransactionFactory;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Collections;
import org.junit.jupiter.api.Test;

class SendingAMultisigTransactionAggregateBonded {

    @Test
    void example() throws Exception {

        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "NODE_URL")) {

            /* start block 01 */
            NetworkType networkType = repositoryFactory.getNetworkType().toFuture().get();

            // replace with cosignatory private key
            String cosignatoryPrivateKey = "";
            Account cosignatoryAccount = Account.createFromPrivateKey(cosignatoryPrivateKey, networkType);

            // replace with cosignatory private key
            String multisigAccountPublicKey = "";
            Account multisigAccount = Account.createFromPrivateKey(multisigAccountPublicKey, networkType);

            // replace with recipient address
            String recipientRawAddress = "TCWYXK-VYBMO4-NBCUF3-AXKJMX-CGVSYQ-OS7ZG2-TLI";
            Address recipientAddress = Address.createFromRawAddress(recipientRawAddress);

            NetworkCurrency networkCurrency = repositoryFactory.getNetworkCurrency().toFuture().get();

            TransferTransaction transferTransaction = TransferTransactionFactory.create(networkType, recipientAddress,
                Collections.singletonList(networkCurrency.createRelative(BigInteger.valueOf(10))),
                PlainMessage.create("sending 10 symbol.xym")).build();

            AggregateTransaction aggregateTransaction = AggregateTransactionFactory.createBonded(networkType,
                Collections.singletonList(transferTransaction.toAggregate(multisigAccount.getPublicAccount())))
                .maxFee(BigInteger.valueOf(2000000)).build();

            String generationHash = repositoryFactory.getGenerationHash().toFuture().get();
            SignedTransaction signedTransaction = cosignatoryAccount.sign(aggregateTransaction, generationHash);
            /* end block 01 */

            /* start block 02 */
            HashLockTransaction hashLockTransaction = HashLockTransactionFactory
                .create(networkType, networkCurrency.createRelative(BigDecimal.valueOf(10)), BigInteger.valueOf(480),
                    signedTransaction).build();

            SignedTransaction signedHashLockTransaction = cosignatoryAccount.sign(hashLockTransaction, generationHash);

            try (Listener listener = repositoryFactory.createListener()) {
                listener.open().get();
                TransactionService transactionService = new TransactionServiceImpl(repositoryFactory);

                transactionService
                    .announceHashLockAggregateBonded(listener, signedHashLockTransaction, signedTransaction).toFuture()
                    .get();
            }

            /* end block 02 */

        }

    }
}
