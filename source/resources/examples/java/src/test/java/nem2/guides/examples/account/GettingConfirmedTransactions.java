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

import io.nem.sdk.infrastructure.AccountHttp;
import io.nem.sdk.infrastructure.QueryParams;
import io.nem.sdk.model.account.PublicAccount;
import io.nem.sdk.model.blockchain.NetworkType;
import io.nem.sdk.model.transaction.Transaction;
import org.junit.jupiter.api.Test;

import java.net.MalformedURLException;
import java.util.List;
import java.util.concurrent.ExecutionException;

class GettingConfirmedTransactions {

    @Test
    void gettingConfirmedTransactions() throws ExecutionException, InterruptedException, MalformedURLException {
        final AccountHttp accountHttp = new AccountHttp("http://localhost:3000");

        // Replace with public key
        final String publicKey = "";

        final PublicAccount publicAccount = PublicAccount.createFromPublicKey(publicKey, NetworkType.MIJIN_TEST);

        // Page size between 10 and 100, otherwise 10
        int pageSize = 20;

        final List<Transaction> transactions = accountHttp.transactions(publicAccount, new QueryParams(pageSize, null)).toFuture().get();

        System.out.print(transactions);
    }
}
