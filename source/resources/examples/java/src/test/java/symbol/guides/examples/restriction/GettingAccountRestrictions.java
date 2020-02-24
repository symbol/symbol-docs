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

package symbol.guides.examples.restriction;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import io.nem.sdk.api.RepositoryFactory;
import io.nem.sdk.api.RestrictionAccountRepository;
import io.nem.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.sdk.model.account.AccountRestrictions;
import io.nem.sdk.model.account.Address;
import org.junit.jupiter.api.Test;

import java.util.concurrent.ExecutionException;

class GettingAccountRestrictions {

    @Test
    void gettingAccountRestrictions()
            throws ExecutionException, InterruptedException {
        /* start block 01 */
        // replace with node endpoint
        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
                "http://api-xym-harvest-3-01.us-west-2.nemtech.network:3000")) {
            final RestrictionAccountRepository restrictionRepository = repositoryFactory
                    .createRestrictionAccountRepository();

            // replace with address
            final String rawAddress = "TAEG6L-KWXRA7-PSWUEE-ILQPG4-3V5CYZ-S5652T-JTUU";
            final Address address = Address.createFromRawAddress(rawAddress);

            final AccountRestrictions restrictions = restrictionRepository
                    .getAccountRestrictions(address)
                    .toFuture().get();
            final Gson gson = new GsonBuilder().setPrettyPrinting().serializeNulls().create();
            System.out.println(gson.toJson(restrictions));
        }
        /* end block 01 */
    }
}
