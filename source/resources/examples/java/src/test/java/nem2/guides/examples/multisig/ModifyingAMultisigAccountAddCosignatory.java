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

import io.nem.sdk.api.Listener;
import io.nem.sdk.api.RepositoryFactory;
import io.nem.sdk.api.TransactionRepository;
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
import io.nem.sdk.model.transaction.Transaction;
import java.math.BigInteger;
import java.util.Collections;
import java.util.concurrent.ExecutionException;
import org.junit.jupiter.api.Test;

class ModifyingAMultisigAccountAddCosignatory {

    @Test
    void modifyingAMultisigAccountAddCosignatory()
        throws ExecutionException, InterruptedException {
        //Todo: Implement
    }
}
