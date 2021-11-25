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

import io.nem.symbol.core.crypto.PublicKey;
import io.nem.symbol.sdk.api.RepositoryFactory;
import io.nem.symbol.sdk.api.TransactionPaginationStreamer;
import io.nem.symbol.sdk.api.TransactionRepository;
import io.nem.symbol.sdk.api.TransactionSearchCriteria;
import io.nem.symbol.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.symbol.sdk.model.account.Address;
import io.nem.symbol.sdk.model.mosaic.NetworkCurrency;
import io.nem.symbol.sdk.model.transaction.Transaction;
import io.nem.symbol.sdk.model.transaction.TransactionGroup;
import io.nem.symbol.sdk.model.transaction.TransactionType;
import io.nem.symbol.sdk.model.transaction.TransferTransaction;
import io.reactivex.Observable;
import java.math.BigInteger;
import java.util.Collections;
import java.util.concurrent.ExecutionException;
import org.junit.jupiter.api.Test;

class GettingTheAmountOfAssetsSentToAnAccount {

    @Test
    void gettingTheAmountOfAssetsSentToAnAccount()
        throws ExecutionException, InterruptedException {
        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "NODE_URL")) {

            /* start block 01 */
            // replace with signer public key
            PublicKey signerPublicKey = PublicKey.fromHexString(
                "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            // replace with recipient address
            String recipientRawAddress = "TB6Q5E-YACWBP-CXKGIL-I6XWCH-DRFLTB-KUK34I-YJQ";
            Address recipientAddress = Address.createFromRawAddress(recipientRawAddress);
            NetworkCurrency networkCurrency = repositoryFactory.getNetworkCurrency().toFuture()
                .get();

            final TransactionRepository transactionRepository = repositoryFactory
                .createTransactionRepository();

            TransactionPaginationStreamer streamer = new TransactionPaginationStreamer(
                transactionRepository);

            Observable<Transaction> transactions = streamer
                .search(new TransactionSearchCriteria(TransactionGroup.CONFIRMED).transactionTypes(
                    Collections.singletonList(TransactionType.TRANSFER))
                    .recipientAddress(recipientAddress)
                    .signerPublicKey(signerPublicKey));

            BigInteger total = transactions.map(t -> (TransferTransaction) t)
                .flatMap(t -> Observable.fromIterable(t.getMosaics())).filter(mosaic ->
                    networkCurrency.getMosaicId().map(mosaicId -> mosaic.getId().equals(mosaicId))
                        .orElse(false) || networkCurrency.getNamespaceId()
                        .map(mosaicId -> mosaic.getId().equals(mosaicId)).orElse(false)).reduce(
                    BigInteger.ZERO, (acc, mosaic) -> acc.add(mosaic.getAmount())).toFuture()
                .get();

            System.out.println("Total " + networkCurrency.getUnresolvedMosaicId().getIdAsHex() +
                " sent to account " + recipientAddress.pretty() +
                " is:" + total);
            /* end block 01 */

        }
    }
}
