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
import io.nem.sdk.model.account.Address;
import io.nem.sdk.model.account.PublicAccount;
import io.nem.sdk.model.blockchain.NetworkType;
import io.nem.sdk.model.mosaic.XEM;
import io.nem.sdk.model.transaction.*;
import org.junit.jupiter.api.Test;

import java.math.BigInteger;
import java.net.MalformedURLException;
import java.util.Arrays;
import java.util.Collections;
import java.util.concurrent.ExecutionException;

import static java.time.temporal.ChronoUnit.HOURS;

class AskingForMosaicsWithAggregateBondedTransaction {

    @Test
    void askingForMosaicsWithAggregateBondedTransaction() throws ExecutionException, InterruptedException, MalformedURLException {

        // Replace with a Alice's private key
        final String alicePrivateKey = "";

        // Replace with a Bob's public key
        final String bobPublicKey = "";

        final Account aliceAccount = Account.createFromPrivateKey(alicePrivateKey, NetworkType.MIJIN_TEST);
        final PublicAccount bobPublicAccount = PublicAccount.createFromPublicKey(bobPublicKey, NetworkType.MIJIN_TEST);

        final TransferTransaction transferTransaction1 = TransferTransaction.create(
            Deadline.create(2, HOURS),
            bobPublicAccount.getAddress(),
            Collections.emptyList(),
            PlainMessage.create("send me 20 XEM"),
            NetworkType.MIJIN_TEST
        );

        final TransferTransaction transferTransaction2 = TransferTransaction.create(
                Deadline.create(2, HOURS),
                aliceAccount.getAddress(),
                Collections.singletonList(XEM.createRelative(BigInteger.valueOf(20))),
                PlainMessage.Empty,
                NetworkType.MIJIN_TEST
        );

        final AggregateTransaction pullTransaction = AggregateTransaction.createBonded(
            Deadline.create(2, HOURS),
            Arrays.asList(
                transferTransaction1.toAggregate(aliceAccount.getPublicAccount()),
                transferTransaction2.toAggregate(bobPublicAccount)
            ),
            NetworkType.MIJIN_TEST
        );

        final SignedTransaction pullTransactionSigned = aliceAccount.sign(pullTransaction);

        // Creating the lock funds transaction and announce it
        final LockFundsTransaction lockFundsTransaction = LockFundsTransaction.create(
            Deadline.create(2, HOURS),
            XEM.createRelative(BigInteger.valueOf(10)),
            BigInteger.valueOf(480),
            pullTransactionSigned,
            NetworkType.MIJIN_TEST
        );

        final SignedTransaction lockFundsTransactionSigned = aliceAccount.sign(lockFundsTransaction);

        final TransactionHttp transactionHttp = new TransactionHttp("http://localhost:3000");

        transactionHttp.announce(lockFundsTransactionSigned).toFuture().get();

        System.out.println(lockFundsTransactionSigned.getHash());

        final Listener listener = new Listener("http://localhost:3000");

        listener.open().get();

        final Transaction transaction = listener.confirmed(aliceAccount.getAddress()).take(1).toFuture().get();

        transactionHttp.announceAggregateBonded(pullTransactionSigned).toFuture().get();
    }
}
