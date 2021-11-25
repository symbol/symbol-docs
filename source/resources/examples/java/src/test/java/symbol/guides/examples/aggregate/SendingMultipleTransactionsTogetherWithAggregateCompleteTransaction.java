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
import io.nem.symbol.sdk.model.mosaic.Mosaic;
import io.nem.symbol.sdk.model.mosaic.NetworkCurrency;
import io.nem.symbol.sdk.model.network.NetworkType;
import io.nem.symbol.sdk.model.transaction.AggregateTransaction;
import io.nem.symbol.sdk.model.transaction.AggregateTransactionFactory;
import io.nem.symbol.sdk.model.transaction.SignedTransaction;
import io.nem.symbol.sdk.model.transaction.TransferTransaction;
import io.nem.symbol.sdk.model.transaction.TransferTransactionFactory;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;
import org.junit.jupiter.api.Test;

class SendingMultipleTransactionsTogetherWithAggregateCompleteTransaction {

    @Test
    void example() throws Exception {

        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "NODE_URL")) {

            /* start block 01 */
            NetworkType networkType = repositoryFactory.getNetworkType().toFuture().get();

            // replace with sender private key
            String privateKey = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
            Account account = Account.createFromPrivateKey(privateKey, networkType);
            // replace with address
            String aliceAddress = "TCHBDE-NCLKEB-ILBPWP-3JPB2X-NY64OE-7PYHHE-32I";
            Address aliceAccount = Address.createFromRawAddress(aliceAddress);
            // replace with address
            String bobAddress = "TB6Q5E-YACWBP-CXKGIL-I6XWCH-DRFLTB-KUK34I-YJQ";
            Address bobAccount = Address.createFromRawAddress(bobAddress);

            NetworkCurrency networkCurrency = repositoryFactory.getNetworkCurrency().toFuture().get();

            Mosaic mosaic = networkCurrency.createRelative(BigDecimal.valueOf(10));

            TransferTransaction aliceTransferTransaction = TransferTransactionFactory
                .create(networkType, aliceAccount, Collections.singletonList(mosaic), PlainMessage.create("payout"))
                .build();

            TransferTransaction bobTransferTransaction = TransferTransactionFactory
                .create(networkType, bobAccount, Collections.singletonList(mosaic), PlainMessage.create("payout"))
                .build();

            /* end block 01 */

            /* start block 02 */
            AggregateTransaction aggregateTransaction = AggregateTransactionFactory.createComplete(networkType, Arrays
                .asList(aliceTransferTransaction.toAggregate(account.getPublicAccount()),
                    bobTransferTransaction.toAggregate(account.getPublicAccount()))).maxFee(BigInteger.valueOf(2000000))
                .build();
            /* end block 02 */

            /* start block 03 */
            String generationHash = repositoryFactory.getGenerationHash().toFuture().get();
            SignedTransaction signedTransaction = account.sign(aggregateTransaction, generationHash);

            try (Listener listener = repositoryFactory.createListener()) {
                listener.open().get();
                TransactionService transactionService = new TransactionServiceImpl(repositoryFactory);
                transactionService.announce(listener, signedTransaction).toFuture().get();

            }
            /* end block 03 */
        }

    }
}
