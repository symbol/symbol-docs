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

import io.nem.sdk.infrastructure.TransactionHttp;
import io.nem.sdk.model.account.Account;
import io.nem.sdk.model.account.PublicAccount;
import io.nem.sdk.model.blockchain.NetworkType;
import io.nem.sdk.model.transaction.*;
import org.junit.jupiter.api.Test;

import java.net.MalformedURLException;
import java.util.Arrays;
import java.util.concurrent.ExecutionException;

import static java.time.temporal.ChronoUnit.HOURS;

class ConvertingAnAccountToMultisig {

    @Test
    void convertingAnAccountToMultisig() throws ExecutionException, InterruptedException, MalformedURLException {

        // Replace with the private key of the account that you want to convert into multisig
        final String privateKey = "";

        // Replace with cosignatories public keys
        final String cosignatory1PublicKey = "";
        final String cosignatory2PublicKey = "";

        final Account account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

        final PublicAccount cosignatory1PublicAccount = PublicAccount.createFromPublicKey(cosignatory1PublicKey, NetworkType.MIJIN_TEST);
        final PublicAccount cosignatory2PublicAccount = PublicAccount.createFromPublicKey(cosignatory2PublicKey, NetworkType.MIJIN_TEST);

        final ModifyMultisigAccountTransaction convertIntoMultisigTransaction = ModifyMultisigAccountTransaction.create(
            Deadline.create(2, HOURS),
            1,
            1,
            Arrays.asList(
                new MultisigCosignatoryModification(
                    MultisigCosignatoryModificationType.ADD,
                    cosignatory1PublicAccount
                ),
                new MultisigCosignatoryModification(
                    MultisigCosignatoryModificationType.ADD,
                    cosignatory2PublicAccount
                )
            ),
            NetworkType.MIJIN_TEST
        );

        final TransactionHttp transactionHttp = new TransactionHttp("http://localhost:3000");
        final SignedTransaction signedTransaction = account.sign(convertIntoMultisigTransaction);
        transactionHttp.announce(signedTransaction).toFuture().get();
    }
}
