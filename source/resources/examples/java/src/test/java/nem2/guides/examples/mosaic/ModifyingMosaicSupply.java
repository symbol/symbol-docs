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
import io.nem.sdk.model.mosaic.MosaicId;
import io.nem.sdk.model.mosaic.MosaicProperties;
import io.nem.sdk.model.mosaic.MosaicSupplyType;
import io.nem.sdk.model.transaction.Deadline;
import io.nem.sdk.model.transaction.MosaicDefinitionTransaction;
import io.nem.sdk.model.transaction.MosaicSupplyChangeTransaction;
import io.nem.sdk.model.transaction.SignedTransaction;
import org.junit.jupiter.api.Test;

import java.math.BigInteger;
import java.net.MalformedURLException;
import java.time.temporal.ChronoUnit;
import java.util.concurrent.ExecutionException;

class ModifyingMosaicSupply {

    @Test
    void modifyingMosaicSupply() throws ExecutionException, InterruptedException, MalformedURLException {

        // Replace with private key
        final String privateKey = "";

        final Account account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

        // Replace with mosaic id
        final MosaicId mosaicId = new MosaicId("foo:token"); // replace with mosaic full name

        MosaicSupplyChangeTransaction mosaicSupplyChangeTransaction = MosaicSupplyChangeTransaction.create(
                new Deadline(2, ChronoUnit.HOURS),
                mosaicId,
                MosaicSupplyType.INCREASE,
                BigInteger.valueOf(2000000),
                NetworkType.MIJIN_TEST
        );

        final SignedTransaction signedTransaction = account.sign(mosaicSupplyChangeTransaction);

        final TransactionHttp transactionHttp = new TransactionHttp("http://localhost:3000");

        transactionHttp.announce(signedTransaction).toFuture().get();
    }
}
