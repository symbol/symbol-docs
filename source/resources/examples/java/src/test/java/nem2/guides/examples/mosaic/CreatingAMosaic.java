/*
 *
 * Copyright 2018 NEM
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

package nem2.guides.examples.mosaic;

import io.nem.sdk.infrastructure.TransactionHttp;
import io.nem.sdk.model.account.Account;
import io.nem.sdk.model.blockchain.NetworkType;
import io.nem.sdk.model.mosaic.MosaicProperties;
import io.nem.sdk.model.mosaic.MosaicSupplyType;
import io.nem.sdk.model.transaction.*;
import org.junit.jupiter.api.Test;

import java.math.BigInteger;
import java.net.MalformedURLException;
import java.time.temporal.ChronoUnit;
import java.util.Arrays;
import java.util.concurrent.ExecutionException;

class CreatingAMosaic {

    @Test
    void creatingAMosaic() throws ExecutionException, InterruptedException, MalformedURLException {

        // Replace with private key
        final String privateKey = "";

        final Account account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

        // Replace with namespace name and mosaic name
        final String namespaceName = "foo";
        final String mosaicName = "token";

        MosaicDefinitionTransaction mosaicDefinitionTransaction = MosaicDefinitionTransaction.create(
                new Deadline(2, ChronoUnit.HOURS),
                mosaicName,
                namespaceName,
                new MosaicProperties(true, true, false, 0, BigInteger.valueOf(1000)),
                NetworkType.MIJIN_TEST
        );

        MosaicSupplyChangeTransaction mosaicSupplyChangeTransaction = MosaicSupplyChangeTransaction.create(
                new Deadline(2, ChronoUnit.HOURS),
                mosaicDefinitionTransaction.getMosaicId(),
                MosaicSupplyType.INCREASE,
                BigInteger.valueOf(1000000),
                NetworkType.MIJIN_TEST
        );

        AggregateTransaction aggregateTransaction = AggregateTransaction.createComplete(
                new Deadline(2, ChronoUnit.HOURS),
                Arrays.asList(
                        mosaicDefinitionTransaction.toAggregate(account.getPublicAccount()),
                        mosaicSupplyChangeTransaction.toAggregate(account.getPublicAccount())
                ),
                NetworkType.MIJIN_TEST
        );

        final SignedTransaction signedTransaction = account.sign(aggregateTransaction);

        final TransactionHttp transactionHttp = new TransactionHttp("http://localhost:3000");

        transactionHttp.announce(signedTransaction).toFuture().get();
    }
}
