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

class SendingAMultisigTransactionAggregateBonded {

    @Test
    void sendingAMultisigTransactionAggregateBonded() throws ExecutionException, InterruptedException, MalformedURLException {
        // Replace with the cosignatory private key
        final String cosignatoryPrivateKey = "";

        // Replace with the multisig public key
        final String multisigAccountPublicKey = "";

        // Replace with recipient address
        final String recipientAddress = "SD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54";

        final Account cosignatoryAccount = Account.createFromPrivateKey(cosignatoryPrivateKey, NetworkType.MIJIN_TEST);
        final PublicAccount multisigPublicAccount = PublicAccount.createFromPublicKey(multisigAccountPublicKey, NetworkType.MIJIN_TEST);

        final TransferTransaction transferTransaction = TransferTransaction.create(
                Deadline.create(2, HOURS),
                Address.createFromRawAddress(recipientAddress),
                Collections.singletonList(XEM.createRelative(BigInteger.valueOf(10))),
                PlainMessage.create("sending 10 nem:xem"),
                NetworkType.MIJIN_TEST
        );

        final AggregateTransaction aggregateTransaction = AggregateTransaction.createBonded(
                Deadline.create(2, HOURS),
                Arrays.asList(
                        transferTransaction.toAggregate(multisigPublicAccount)
                ),
                NetworkType.MIJIN_TEST
        );

        final SignedTransaction aggregateSignedTransaction = cosignatoryAccount.sign(aggregateTransaction);

        // Creating the lock funds transaction and announce it

        final LockFundsTransaction lockFundsTransaction = LockFundsTransaction.create(
                Deadline.create(2, HOURS),
                XEM.createRelative(BigInteger.valueOf(10)),
                BigInteger.valueOf(480),
                aggregateSignedTransaction,
                NetworkType.MIJIN_TEST
        );

        final SignedTransaction lockFundsTransactionSigned = cosignatoryAccount.sign(lockFundsTransaction);

        final TransactionHttp transactionHttp = new TransactionHttp("http://localhost:3000");

        transactionHttp.announce(lockFundsTransactionSigned).toFuture().get();

        System.out.println(lockFundsTransactionSigned.getHash());

        final Listener listener = new Listener("http://localhost:3000");

        listener.open().get();

        final Transaction transaction = listener.confirmed(cosignatoryAccount.getAddress()).take(1).toFuture().get();

        System.out.println(transaction);

        transactionHttp.announceAggregateBonded(aggregateSignedTransaction).toFuture().get();

    }
}