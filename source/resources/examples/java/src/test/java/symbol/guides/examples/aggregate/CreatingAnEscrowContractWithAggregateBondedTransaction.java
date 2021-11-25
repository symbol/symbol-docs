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
import io.nem.symbol.sdk.model.account.PublicAccount;
import io.nem.symbol.sdk.model.message.PlainMessage;
import io.nem.symbol.sdk.model.mosaic.MosaicId;
import io.nem.symbol.sdk.model.mosaic.NetworkCurrency;
import io.nem.symbol.sdk.model.mosaic.NetworkCurrencyBuilder;
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
import java.util.Arrays;
import java.util.Collections;
import org.junit.jupiter.api.Test;

class CreatingAnEscrowContractWithAggregateBondedTransaction {

    @Test
    void example() throws Exception {

        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "NODE_URL")) {

            /* start block 01 */
            NetworkType networkType = repositoryFactory.getNetworkType().toFuture().get();

            // replace with alice private key
            String alicePrivatekey = "";
            Account aliceAccount = Account.createFromPrivateKey(alicePrivatekey, networkType);

            // replace with bob public key
            String ticketDistributorPublicKey = "";
            PublicAccount ticketDistributorPublicAccount = PublicAccount
                .createFromPublicKey(ticketDistributorPublicKey, networkType);

            // replace with ticket mosaic id
            MosaicId ticketMosaicId = new MosaicId("7cdf3b117a3c40cc");
            int ticketDivisibility = 0;
            NetworkCurrency ticketCurrency = new NetworkCurrencyBuilder(ticketMosaicId, ticketDivisibility).build();
            // replace with ticket mosaic id divisibility
            NetworkCurrency networkCurrency = repositoryFactory.getNetworkCurrency().toFuture().get();

            TransferTransaction aliceToTicketDistributorTx = TransferTransactionFactory
                .create(networkType, ticketDistributorPublicAccount.getAddress(),
                    Collections.singletonList(networkCurrency.createRelative(BigInteger.valueOf(100))),
                    PlainMessage.create("send 100 symbol.xym to distributor")).build();

            TransferTransaction ticketDistributorToAliceTx = TransferTransactionFactory
                .create(networkType, aliceAccount.getAddress(),
                    Collections.singletonList(ticketCurrency.createRelative(BigInteger.ONE)),
                    PlainMessage.create("send 1 museum ticket to customer")).build();

            /* end block 01 */

            /* start block 02 */
            AggregateTransaction aggregateTransaction = AggregateTransactionFactory.createBonded(networkType, Arrays
                .asList(aliceToTicketDistributorTx.toAggregate(aliceAccount.getPublicAccount()),
                    ticketDistributorToAliceTx.toAggregate(ticketDistributorPublicAccount)))
                .maxFee(BigInteger.valueOf(2000000)).build();

            String generationHash = repositoryFactory.getGenerationHash().toFuture().get();
            SignedTransaction signedTransaction = aliceAccount.sign(aggregateTransaction, generationHash);
            /* end block 02 */

            /* start block 03 */
            HashLockTransaction hashLockTransaction = HashLockTransactionFactory
                .create(networkType, networkCurrency.createRelative(BigDecimal.valueOf(10)), BigInteger.valueOf(480),
                    signedTransaction).build();

            SignedTransaction signedHashLockTransaction = aliceAccount.sign(hashLockTransaction, generationHash);
            try (Listener listener = repositoryFactory.createListener()) {
                listener.open().get();
                TransactionService transactionService = new TransactionServiceImpl(repositoryFactory);

                transactionService.announceHashLockAggregateBonded(listener, signedHashLockTransaction, signedTransaction).toFuture()
                    .get();
            }
            /* end block 03 */

        }

    }
}
