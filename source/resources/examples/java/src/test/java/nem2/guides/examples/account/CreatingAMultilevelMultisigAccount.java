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

class CreatingAMultilevelMultisigAccount {

    @Test
    void creatingAMultilevelMultisigAccount() throws ExecutionException, InterruptedException, MalformedURLException {
        final TransactionHttp transactionHttp = new TransactionHttp("http://localhost:3000");

        // Create multisig #2 (1-of-2)

        // Replace with the private key of the account that you want to convert into multisig
        final String multisig2PrivateKey = "";

        // Replace with cosignatories public keys
        final String cosignatory5PublicKey = "";
        final String cosignatory6PublicKey = "";

        final Account multisigAccount2 = Account.createFromPrivateKey(multisig2PrivateKey, NetworkType.MIJIN_TEST);

        final PublicAccount cosignatory5PublicAccount = PublicAccount.createFromPublicKey(cosignatory5PublicKey, NetworkType.MIJIN_TEST);
        final PublicAccount cosignatory6PublicAccount = PublicAccount.createFromPublicKey(cosignatory6PublicKey, NetworkType.MIJIN_TEST);

        final ModifyMultisigAccountTransaction convertMultisigAccount2Transaction = ModifyMultisigAccountTransaction.create(
                Deadline.create(2, HOURS),
                1,
                1,
                Arrays.asList(
                    new MultisigCosignatoryModification(
                        MultisigCosignatoryModificationType.ADD,
                        cosignatory5PublicAccount
                    ),
                    new MultisigCosignatoryModification(
                        MultisigCosignatoryModificationType.ADD,
                        cosignatory6PublicAccount
                    )
                ),
                NetworkType.MIJIN_TEST
        );


        final SignedTransaction signedTransaction2 = multisigAccount2.sign(convertMultisigAccount2Transaction);

        transactionHttp.announce(signedTransaction2).toFuture().get();

        // Create multisig #3 (2-of-3)

        // Replace with the private key of the account that you want to convert into multisig
        final String multisig3PrivateKey = "";

        // Replace with cosignatories public keys
        final String cosignatory7PublicKey = "";
        final String cosignatory8PublicKey = "";
        final String cosignatory4PublicKey = "";

        final Account multisigAccount3 = Account.createFromPrivateKey(multisig3PrivateKey, NetworkType.MIJIN_TEST);

        final PublicAccount cosignatory7PublicAccount = PublicAccount.createFromPublicKey(cosignatory7PublicKey, NetworkType.MIJIN_TEST);
        final PublicAccount cosignatory8PublicAccount = PublicAccount.createFromPublicKey(cosignatory8PublicKey, NetworkType.MIJIN_TEST);
        final PublicAccount cosignatory4PublicAccount = PublicAccount.createFromPublicKey(cosignatory4PublicKey, NetworkType.MIJIN_TEST);

        final ModifyMultisigAccountTransaction convertMultisigAccount3Transaction = ModifyMultisigAccountTransaction.create(
                Deadline.create(2, HOURS),
                2,
                1,
                Arrays.asList(
                        new MultisigCosignatoryModification(
                                MultisigCosignatoryModificationType.ADD,
                                cosignatory7PublicAccount
                                ),
                        new MultisigCosignatoryModification(
                                MultisigCosignatoryModificationType.ADD,
                                cosignatory8PublicAccount
                                ),
                        new MultisigCosignatoryModification(
                                MultisigCosignatoryModificationType.ADD,
                                cosignatory4PublicAccount
                                )
                ),
                NetworkType.MIJIN_TEST
        );

        final SignedTransaction signedTransaction3 = multisigAccount3.sign(convertMultisigAccount3Transaction);

        transactionHttp.announce(signedTransaction3).toFuture().get();


        // Create multisig #1 (3-of-3)

        // Replace with the private key of the account that you want to convert into multisig
        final String multisig1PrivateKey = "";

        final Account multisigAccount1 = Account.createFromPrivateKey(multisig1PrivateKey, NetworkType.MIJIN_TEST);

        final ModifyMultisigAccountTransaction convertMultisigAccount1Transaction = ModifyMultisigAccountTransaction.create(
                Deadline.create(2, HOURS),
                3,
                1,
                Arrays.asList(
                        new MultisigCosignatoryModification(
                                MultisigCosignatoryModificationType.ADD,
                                multisigAccount2.getPublicAccount()
                        ),
                        new MultisigCosignatoryModification(
                                MultisigCosignatoryModificationType.ADD,
                                multisigAccount3.getPublicAccount()
                        ),
                        new MultisigCosignatoryModification(
                                MultisigCosignatoryModificationType.ADD,
                                cosignatory4PublicAccount
                        )
                ),
                NetworkType.MIJIN_TEST
        );

        final SignedTransaction signedTransaction1 = multisigAccount1.sign(convertMultisigAccount1Transaction);

        transactionHttp.announce(signedTransaction1).toFuture().get();

    }
}
