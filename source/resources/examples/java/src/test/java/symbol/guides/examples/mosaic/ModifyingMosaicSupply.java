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

package symbol.guides.examples.mosaic;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Arrays;
import java.util.concurrent.ExecutionException;

import io.nem.symbol.sdk.api.RepositoryFactory;
import io.nem.symbol.sdk.api.TransactionRepository;
import io.nem.symbol.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.symbol.sdk.model.account.Account;
import io.nem.symbol.sdk.model.network.NetworkType;
import io.nem.symbol.sdk.model.mosaic.MosaicId;
import io.nem.symbol.sdk.model.mosaic.MosaicSupplyChangeActionType;
import io.nem.symbol.sdk.model.transaction.*;
import org.junit.jupiter.api.Test;

class ModifyingMosaicSupply {

    @Test
    void modifyingMosaicSupply()
        throws ExecutionException, InterruptedException {
        /* start block 01 */
        // replace with node endpoint
        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
                "NODE_URL")) {
            final NetworkType networkType = repositoryFactory.getNetworkType().toFuture().get();
            // replace with private key
            final String privateKey = "1111111111111111111111111111111111111111111111111111111111111111";
            final Account account = Account
                    .createFromPrivateKey(privateKey, networkType);
            // replace with mosaic id
            final String mosaicIdHex = "7cdf3b117a3c40cc";
            final MosaicId mosaicId = new MosaicId(mosaicIdHex);
            // replace with mosaic divisibility
            final int divisibility = 0;
            // replace with mosaic units to increase
            final int delta = 1000000;

            final MosaicSupplyChangeTransaction mosaicSupplyChangeTransaction = MosaicSupplyChangeTransactionFactory
                    .create(
                            networkType,
                            mosaicId,
                            MosaicSupplyChangeActionType.INCREASE,
                            BigDecimal.valueOf(delta * Math.pow(10, divisibility)).toBigInteger())
                    .maxFee(BigInteger.valueOf(2000000)).build();
            /* end block 01 */

            /* start block 02 */
            final String generationHash = repositoryFactory.getGenerationHash().toFuture().get();

            final SignedTransaction signedTransaction = account
                    .sign(mosaicSupplyChangeTransaction, generationHash);


            final TransactionRepository transactionRepository = repositoryFactory
                    .createTransactionRepository();
            transactionRepository.announce(signedTransaction).toFuture().get();
        }
        /* end block 02 */

    }
}
