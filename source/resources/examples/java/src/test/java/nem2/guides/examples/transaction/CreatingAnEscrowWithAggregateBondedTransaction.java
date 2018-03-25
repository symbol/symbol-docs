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

package nem2.guides.examples.transaction;

import io.nem.sdk.infrastructure.Listener;
import io.nem.sdk.infrastructure.TransactionHttp;
import io.nem.sdk.model.account.Account;
import io.nem.sdk.model.account.PublicAccount;
import io.nem.sdk.model.blockchain.NetworkType;
import io.nem.sdk.model.mosaic.Mosaic;
import io.nem.sdk.model.mosaic.MosaicId;
import io.nem.sdk.model.mosaic.XEM;
import io.nem.sdk.model.transaction.*;
import org.junit.jupiter.api.Test;

import java.math.BigInteger;
import java.net.MalformedURLException;
import java.util.Arrays;
import java.util.Collections;
import java.util.concurrent.ExecutionException;
import io.nem.sdk.model.mosaic.XEM;
import static java.time.temporal.ChronoUnit.HOURS;

class CreatingAnEscrowWithAggregateBondedTransaction {

    @Test
    void creatingAnEscrowWithAggregateBondedTransaction() throws ExecutionException, InterruptedException, MalformedURLException {

        // Replace with private key
        final String alicePrivateKey = "";

        // Replace with public key
        final String ticketDistributorPublicKey = "";

        final Account aliceAccount = Account.createFromPrivateKey(alicePrivateKey, NetworkType.MIJIN_TEST);
        final PublicAccount ticketDistributorPublicAccount = PublicAccount.createFromPublicKey(ticketDistributorPublicKey, NetworkType.MIJIN_TEST);

        final TransferTransaction aliceToTicketDistributorTx = TransferTransaction.create(
                Deadline.create(2, HOURS),
                ticketDistributorPublicAccount.getAddress(),
            Collections.singletonList(XEM.createRelative(BigInteger.valueOf(100))),
                PlainMessage.create("send 100 nem:xem to distributor"),
                NetworkType.MIJIN_TEST
        );

        final TransferTransaction ticketDistributorToAliceTx = TransferTransaction.create(
                Deadline.create(2, HOURS),
                aliceAccount.getAddress(),
                Collections.singletonList(new Mosaic(new MosaicId("museum:ticket"), BigInteger.valueOf(1))),
                PlainMessage.create("send 1 museum:ticket to alice"),
                NetworkType.MIJIN_TEST
        );

        final AggregateTransaction aggregateTransaction = AggregateTransaction.createBonded(
                Deadline.create(2, HOURS),
                Arrays.asList(
                        aliceToTicketDistributorTx.toAggregate(aliceAccount.getPublicAccount()),
                        ticketDistributorToAliceTx.toAggregate(ticketDistributorPublicAccount)
                ),
                NetworkType.MIJIN_TEST
        );

        final SignedTransaction aggregateSignedTransaction = aliceAccount.sign(aggregateTransaction);

        // Creating the lock funds transaction and announce it

        final LockFundsTransaction lockFundsTransaction = LockFundsTransaction.create(
                Deadline.create(2, HOURS),
                XEM.createRelative(BigInteger.valueOf(10)),
                BigInteger.valueOf(480),
                aggregateSignedTransaction,
                NetworkType.MIJIN_TEST
        );

        final SignedTransaction lockFundsTransactionSigned = aliceAccount.sign(lockFundsTransaction);

        final TransactionHttp transactionHttp = new TransactionHttp("http://localhost:3000");

        transactionHttp.announce(lockFundsTransactionSigned).toFuture().get();

        System.out.println(lockFundsTransactionSigned.getHash());

        final Listener listener = new Listener("http://localhost:3000");

        listener.open().get();

        final Transaction transaction = listener.confirmed(aliceAccount.getAddress()).take(1).toFuture().get();

        transactionHttp.announceAggregateBonded(aggregateSignedTransaction).toFuture().get();
    }
}
