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

import io.nem.sdk.infrastructure.AccountHttp;
import io.nem.sdk.infrastructure.Listener;
import io.nem.sdk.infrastructure.TransactionHttp;
import io.nem.sdk.model.account.Account;
import io.nem.sdk.model.blockchain.NetworkType;
import io.nem.sdk.model.transaction.AggregateTransaction;
import io.nem.sdk.model.transaction.CosignatureSignedTransaction;
import io.nem.sdk.model.transaction.CosignatureTransaction;
import io.nem.sdk.model.transaction.Transaction;
import org.junit.jupiter.api.Test;

import java.net.MalformedURLException;
import java.util.concurrent.ExecutionException;

class SigningAnnouncedAggregateBondedTransactionsAutomatically {

    @Test
    void signingAnnouncedAggregateBondedTransactionsAutomatically() throws ExecutionException, InterruptedException, MalformedURLException {
        // Replace with a private key
        final String privateKey = "";

        final Account account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

        final AccountHttp accountHttp = new AccountHttp("http://localhost:3000");

        final TransactionHttp transactionHttp = new TransactionHttp("http://localhost:3000");

        final Listener listener = new Listener("http://localhost:3000");

        listener.open().get();

        final AggregateTransaction transaction = listener.aggregateBondedAdded(account.getAddress()).take(1).toFuture().get();

        if (!transaction.signedByAccount(account.getPublicAccount())) {
            // Filter aggregates that need my signature
            final CosignatureTransaction cosignatureTransaction = CosignatureTransaction.create(transaction);

            final CosignatureSignedTransaction cosignatureSignedTransaction = account.signCosignatureTransaction(cosignatureTransaction);

            transactionHttp.announceAggregateBondedCosignature(cosignatureSignedTransaction).toFuture().get();
        }
    }
}
