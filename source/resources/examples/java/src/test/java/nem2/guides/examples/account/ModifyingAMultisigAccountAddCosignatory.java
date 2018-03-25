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

package nem2.guides.examples.account;

import io.nem.sdk.infrastructure.Listener;
import io.nem.sdk.infrastructure.TransactionHttp;
import io.nem.sdk.model.account.Account;
import io.nem.sdk.model.account.PublicAccount;
import io.nem.sdk.model.blockchain.NetworkType;
import io.nem.sdk.model.mosaic.XEM;
import io.nem.sdk.model.transaction.*;
import org.junit.jupiter.api.Test;

import java.math.BigInteger;
import java.net.MalformedURLException;
import java.util.Collections;
import java.util.concurrent.ExecutionException;

import static java.time.temporal.ChronoUnit.HOURS;

class ModifyingAMultisigAccountAddCosignatory {

    @Test
    void modifyingAMultisigAccountAddCosignatory() throws ExecutionException, InterruptedException, MalformedURLException {

        // Replace with the multisig public key
        final String cosignatoryPrivateKey = "";
        final String multisigAccountPublicKey = "";
        final String newCosignatoryPublicKey = "";

        final Account cosignatoryAccount = Account.createFromPrivateKey(cosignatoryPrivateKey, NetworkType.MIJIN_TEST);
        final PublicAccount newCosignatoryAccount = PublicAccount.createFromPublicKey(newCosignatoryPublicKey, NetworkType.MIJIN_TEST);
        final PublicAccount multisigAccount = PublicAccount.createFromPublicKey(multisigAccountPublicKey, NetworkType.MIJIN_TEST);

        final MultisigCosignatoryModification multisigCosignatoryModification = new MultisigCosignatoryModification(
            MultisigCosignatoryModificationType.ADD,
            newCosignatoryAccount
        );

        final ModifyMultisigAccountTransaction modifyMultisigAccountTransaction = ModifyMultisigAccountTransaction.create(
            Deadline.create(2, HOURS),
            0,
            0,
            Collections.singletonList(multisigCosignatoryModification),
            NetworkType.MIJIN_TEST
        );

        final AggregateTransaction aggregateTransaction = AggregateTransaction.createBonded(
            Deadline.create(2, HOURS),
            Collections.singletonList(modifyMultisigAccountTransaction.toAggregate(multisigAccount)),
            NetworkType.MIJIN_TEST
        );

        final SignedTransaction signedTransaction = cosignatoryAccount.sign(aggregateTransaction);

        final LockFundsTransaction lockFundsTransaction = LockFundsTransaction.create(
            Deadline.create(2, HOURS),
            XEM.createRelative(BigInteger.valueOf(10)),
            BigInteger.valueOf(480),
            signedTransaction,
            NetworkType.MIJIN_TEST
        );

        final SignedTransaction lockFundsTransactionSigned = cosignatoryAccount.sign(lockFundsTransaction);

        final TransactionHttp transactionHttp = new TransactionHttp("http://localhost:3000");

        transactionHttp.announce(lockFundsTransactionSigned).toFuture().get();

        // announce signed transaction
        final Listener listener = new Listener("http://localhost:3000");

        listener.open().get();

        final Transaction transaction = listener.confirmed(cosignatoryAccount.getAddress()).toFuture().get();

        transactionHttp.announceAggregateBonded(signedTransaction).toFuture().get();
    }
}
