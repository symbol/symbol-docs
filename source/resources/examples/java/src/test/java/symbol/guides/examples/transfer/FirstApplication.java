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

package symbol.guides.examples.transfer;

import io.nem.symbol.sdk.api.RepositoryFactory;
import io.nem.symbol.sdk.api.TransactionRepository;
import io.nem.symbol.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.symbol.sdk.model.account.Account;
import io.nem.symbol.sdk.model.account.Address;
import io.nem.symbol.sdk.model.account.UnresolvedAddress;
import io.nem.symbol.sdk.model.network.NetworkType;
import io.nem.symbol.sdk.model.message.PlainMessage;
import io.nem.symbol.sdk.model.mosaic.Mosaic;
import io.nem.symbol.sdk.model.mosaic.MosaicId;
import io.nem.symbol.sdk.model.transaction.SignedTransaction;
import io.nem.symbol.sdk.model.transaction.TransferTransaction;
import io.nem.symbol.sdk.model.transaction.TransferTransactionFactory;
import org.junit.jupiter.api.Test;

import java.math.BigInteger;
import java.util.Collections;
import java.util.concurrent.ExecutionException;

class FirstApplication {

    @Test
    void firstApplication()
            throws ExecutionException, InterruptedException {
        /* start block 01 */
        // replace with node endpoint
        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
                "http://api-01.us-east-1.096x.symboldev.network:3000")) {
            // replace with mosaic id
            final String mosaicIdHex = "7cdf3b117a3c40cc";
            final MosaicId mosaicId = new MosaicId(mosaicIdHex);

            // replace with customer address
            final String rawAddress = "TCHBDE-NCLKEB-ILBPWP-3JPB2X-NY64OE-7PYHHE-32I";
            final UnresolvedAddress recipientAddress = Address.createFromRawAddress(rawAddress);
            final NetworkType networkType = repositoryFactory.getNetworkType().toFuture().get();

            final Mosaic mosaic = new Mosaic(mosaicId, BigInteger.valueOf(1));
            final TransferTransaction transferTransaction = TransferTransactionFactory
                    .create(
                            networkType,
                            recipientAddress,
                            Collections.singletonList(mosaic),
                            PlainMessage.create("Enjoy your ticket"))
                    .maxFee(BigInteger.valueOf(2000000)).build();
            /* end block 01 */

            /* start block 02 */
            // replace with ticket vendor private key
            final String privateKey = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
            // replace with network generation hash
            final String generationHash = repositoryFactory.getGenerationHash().toFuture().get();

            final Account account = Account
                    .createFromPrivateKey(privateKey, networkType);
            final SignedTransaction signedTransaction = account
                    .sign(transferTransaction, generationHash);
            /* end block 02 */

            /* start block 03 */
            final TransactionRepository transactionRepository = repositoryFactory
                    .createTransactionRepository();
            transactionRepository.announce(signedTransaction).toFuture().get();
        }
        /* end block 03 */
    }
}

