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
import io.nem.symbol.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.symbol.sdk.model.account.Address;
import io.nem.symbol.sdk.model.account.UnresolvedAddress;
import io.nem.symbol.sdk.model.blockchain.NetworkType;
import io.nem.symbol.sdk.model.message.PlainMessage;
import io.nem.symbol.sdk.model.mosaic.Mosaic;
import io.nem.symbol.sdk.model.mosaic.MosaicId;
import io.nem.symbol.sdk.model.transaction.TransferTransactionFactory;
import org.junit.jupiter.api.Test;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.concurrent.ExecutionException;

class SendingATransferTransactionWithMultipleMosaics {

    @Test
    void sendingATransferTransactionWithMultipleMosaics()
            throws ExecutionException, InterruptedException {
        // replace with node endpoint
        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
                "http://api-02.ap-northeast-1.0941-v1.symboldev.network:3000")) {
            // replace with recipient address
            final String rawAddress = "TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP";
            final UnresolvedAddress recipientAddress = Address.createFromRawAddress(rawAddress);
            final NetworkType networkType = repositoryFactory.getNetworkType().toFuture().get();

            TransferTransactionFactory
                    .create(
                            networkType,
                            recipientAddress,
                            /* start block 01 */
                            Arrays.asList(new Mosaic(new MosaicId("7CDF3B117A3C40CC"),
                                            BigInteger.valueOf(1000)),
                                    new Mosaic(new MosaicId("05D6A80DE3C9ADCA"),
                                            BigInteger.valueOf(10000000))),
                            /* end block 01 */
                            PlainMessage.create("This is a test message"))
                    .maxFee(BigInteger.valueOf(2000000)).build();
        }
    }
}

