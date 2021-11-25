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

import io.nem.symbol.core.utils.ConvertUtils;
import io.nem.symbol.sdk.api.BinarySerialization;
import io.nem.symbol.sdk.api.RepositoryFactory;
import io.nem.symbol.sdk.api.TransactionRepository;
import io.nem.symbol.sdk.infrastructure.BinarySerializationImpl;
import io.nem.symbol.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.symbol.sdk.model.account.Account;
import io.nem.symbol.sdk.model.account.PublicAccount;
import io.nem.symbol.sdk.model.message.PlainMessage;
import io.nem.symbol.sdk.model.mosaic.Mosaic;
import io.nem.symbol.sdk.model.mosaic.NetworkCurrency;
import io.nem.symbol.sdk.model.namespace.NamespaceId;
import io.nem.symbol.sdk.model.network.NetworkType;
import io.nem.symbol.sdk.model.transaction.AggregateTransaction;
import io.nem.symbol.sdk.model.transaction.AggregateTransactionFactory;
import io.nem.symbol.sdk.model.transaction.CosignatureSignedTransaction;
import io.nem.symbol.sdk.model.transaction.CosignatureTransaction;
import io.nem.symbol.sdk.model.transaction.SignedTransaction;
import io.nem.symbol.sdk.model.transaction.TransferTransaction;
import io.nem.symbol.sdk.model.transaction.TransferTransactionFactory;
import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;
import org.junit.jupiter.api.Test;

public class AddingCosignaturesAggregateComplete {

    @Test
    void example() throws Exception {

        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "NODE_URL")) {
            // replace with recipient address


            /* start block 01 */
            NetworkType networkType = repositoryFactory.getNetworkType().toFuture().get();
            NetworkCurrency networkCurrency = repositoryFactory.getNetworkCurrency().toFuture()
                .get();

            // replace with alice private key
            String alicePrivatekey = "";
            Account aliceAccount = Account.createFromPrivateKey(alicePrivatekey, networkType);

            // replace with bob public key
            String bobPublicKey = "";
            PublicAccount bobPublicAccount = PublicAccount
                .createFromPublicKey(bobPublicKey, networkType);

            TransferTransaction aliceTransferTransaction = TransferTransactionFactory
                .create(networkType, bobPublicAccount.getAddress(),
                    Collections
                        .singletonList(networkCurrency.createRelative(BigInteger.valueOf(1000))),
                    PlainMessage.create("payout")).build();

            TransferTransaction bobTransferTransaction = TransferTransactionFactory
                .create(networkType, aliceAccount.getAddress(),
                    Collections.singletonList(
                        new Mosaic(new NamespaceId("collectible"), BigInteger.valueOf(1))),
                    PlainMessage.create("payout")).build();

            AggregateTransaction aggregateTransaction = AggregateTransactionFactory
                .createComplete(networkType, Arrays
                    .asList(aliceTransferTransaction.toAggregate(aliceAccount.getPublicAccount()),
                        bobTransferTransaction.toAggregate(bobPublicAccount)))
                .maxFee(BigInteger.valueOf(2000000)).build();
            /* end block 01 */

            /* start block 02 */
            String generationHash = repositoryFactory.getGenerationHash().toFuture().get();

            SignedTransaction signedTransactionNotComplete = aliceAccount
                .sign(aggregateTransaction, generationHash);
            System.out.println(signedTransactionNotComplete.getPayload());
            /* end block 02 */

            /* start block 03 */
            // replace with bob private key
            String bobPrivateKey = "";
            Account bobAccount = Account.createFromPrivateKey(bobPrivateKey, networkType);
            CosignatureSignedTransaction cosignedTransactionBob = CosignatureTransaction
                .create(aggregateTransaction)
                .signWith(bobAccount);

            System.out.println(cosignedTransactionBob.getSignature());
            System.out.println(cosignedTransactionBob.getParentHash());
            /* end block 03 */

            /* start block 04 */
            BinarySerialization serialization = BinarySerializationImpl.INSTANCE;

            AggregateTransactionFactory rectreatedAggregateTransactionFromPayload = (AggregateTransactionFactory) serialization
                .deserializeToFactory(
                    ConvertUtils.getBytes(signedTransactionNotComplete.getPayload()));

            //Added a new cosignature.
            rectreatedAggregateTransactionFromPayload.addCosignatures(cosignedTransactionBob);

            SignedTransaction signedTransactionComplete = aliceAccount
                .sign(rectreatedAggregateTransactionFromPayload.build(), generationHash);
            System.out.println(signedTransactionComplete.getHash());

            TransactionRepository transactionHttp = repositoryFactory.createTransactionRepository();

            transactionHttp.announce(signedTransactionComplete).toFuture().get();
            /* end block 04 */

        }

    }
}

