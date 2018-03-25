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
import io.nem.sdk.model.account.Address;
import io.nem.sdk.model.account.PublicAccount;
import io.nem.sdk.model.blockchain.NetworkType;
import io.nem.sdk.model.mosaic.XEM;
import io.nem.sdk.model.transaction.TransactionType;
import io.nem.sdk.model.transaction.TransferTransaction;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.net.MalformedURLException;
import java.util.concurrent.ExecutionException;

class GettingTheAmountOfXEMSentToAnAccount {

    @Test
    void gettingTheAmountOfXEMSentToAnAccount() throws ExecutionException, InterruptedException, MalformedURLException {

        // Replace with public key
        final String originPublicKey = "";

        // Replace with recipient address
        final String recipientAddress = "SB2RPH-EMTFMB-KELX2Y-Q3MZTD-RV7DQG-UZEADV-CYKC";

        // Replace with public key
        final PublicAccount originAccount = PublicAccount.createFromPublicKey(originPublicKey, NetworkType.MIJIN_TEST);

        // Replace with address
        final Address address = Address.createFromRawAddress(recipientAddress);

        final AccountHttp accountHttp = new AccountHttp("http://localhost:3000");

        final BigInteger total = accountHttp.outgoingTransactions(originAccount)
                .flatMapIterable(tx -> tx) // Transform transaction array to single transactions to process them
                .filter(tx -> tx.getType().equals(TransactionType.TRANSFER)) // Filter transfer transactions
                .map(tx -> (TransferTransaction) tx) // Map transaction as transfer transaction
                .filter(tx -> tx.getRecipient().equals(address)) // Filter transactions from to account
                .filter(tx -> tx.getMosaics().size() == 1 && tx.getMosaics().get(0).getId().equals(XEM.MOSAICID)) // Filter xem transactions
                .map(tx -> tx.getMosaics().get(0).getAmount().divide(BigDecimal.valueOf(Math.pow(10, XEM.DIVISIBILITY)).toBigInteger())) // Map only amount in xem
                .toList() // Add all mosaics amounts into one array
                .map(amounts -> amounts.stream().reduce(BigInteger.ZERO, BigInteger::add))
                .toFuture()
                .get();

        System.out.println("Total xem send to account " + address.pretty() + " is: " + total.toString());
    }
}
