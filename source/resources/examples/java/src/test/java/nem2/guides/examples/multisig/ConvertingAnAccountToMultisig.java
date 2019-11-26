/*
 *
 * Copyright 2018-present NEM
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

package nem2.guides.examples.multisig;

import io.nem.sdk.api.RepositoryFactory;
import io.nem.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.sdk.model.account.Account;
import io.nem.sdk.model.account.PublicAccount;
import io.nem.sdk.model.blockchain.NetworkType;
import io.nem.sdk.model.mosaic.NetworkCurrencyMosaic;
import io.nem.sdk.model.transaction.AggregateTransaction;
import io.nem.sdk.model.transaction.AggregateTransactionFactory;
import io.nem.sdk.model.transaction.HashLockTransaction;
import io.nem.sdk.model.transaction.HashLockTransactionFactory;
import io.nem.sdk.model.transaction.MultisigAccountModificationTransaction;
import io.nem.sdk.model.transaction.MultisigAccountModificationTransactionFactory;
import io.nem.sdk.model.transaction.SignedTransaction;
import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;
import java.util.concurrent.ExecutionException;
import org.junit.jupiter.api.Test;

class ConvertingAnAccountToMultisig {

    @Test
    void convertingAnAccountToMultisig()
        throws ExecutionException, InterruptedException {
        /* start block 01 */
        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "http://localhost:3000")) {

            final String generationHash = repositoryFactory.getGenerationHash().toFuture().get();
            final NetworkType networkType = repositoryFactory.getNetworkType().toFuture().get();

            // Replace with the private key of the account to convert into multisig
            final String privateKey = "'0000000000000000000000000000000000000000000000000000000000000000'";
            final Account account = Account.createFromPrivateKey(privateKey, networkType);

            // Replace with cosignatories public keys
            final String cosignatory1PublicKey = "1A6B1797FD323FEC48F71CDFE3D181B53D001FC2B56928DBA06C9319722B0FF8";
            final PublicAccount cosignatory1PublicAccount = PublicAccount
                .createFromPublicKey(cosignatory1PublicKey, networkType);
            final String cosignatory2PublicKey = "350E1AFCD10443C0F317E66B16E1093D868493782897922C6248D4D729B1D1A1";
            final PublicAccount cosignatory2PublicAccount = PublicAccount
                .createFromPublicKey(cosignatory2PublicKey, networkType);
            /* end block 01 */

            /* start block 02 */
            final MultisigAccountModificationTransaction multisigAccountModificationTransaction = MultisigAccountModificationTransactionFactory
                .create(
                    networkType,
                    (byte) 1,
                    (byte) 1,
                    Arrays.asList(
                        cosignatory1PublicAccount,
                        cosignatory2PublicAccount
                    ), Collections.emptyList()
                ).build();
            /* end block 02 */

            /* start block 03 */
            final AggregateTransaction aggregateTransaction = AggregateTransactionFactory
                .createBonded(
                    networkType,
                    Collections
                        .singletonList(multisigAccountModificationTransaction
                            .toAggregate(account.getPublicAccount()))
                )
                .build();
            /* end block 03 */

            /* start block 04 */

            final SignedTransaction signedTransaction = account
                .sign(multisigAccountModificationTransaction, generationHash);
            /* end block 04 */

            /* start block 05 */
            final HashLockTransaction hashLockTransaction = HashLockTransactionFactory.create(
                networkType,
                NetworkCurrencyMosaic.createRelative(BigInteger.valueOf(10)),
                BigInteger.valueOf(480),
                signedTransaction)
                .build();

            final SignedTransaction signedHashLockTransaction = account
                .sign(hashLockTransaction, generationHash);

            // Todo: Announce hashLock

            // Todo: Wait until confirmed

            // Todo: Announce aggregate

            /* end block 05 */
        }
    }
}
