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

import io.nem.sdk.model.account.Account;
import io.nem.sdk.model.blockchain.NetworkType;
import org.junit.jupiter.api.Test;

import java.util.concurrent.ExecutionException;

class CreatingAnAccount {

    @Test
    void creatingAnAccount() throws ExecutionException, InterruptedException {
        // Replace with a private key
        final String privateKey = "AC4091B7B9127FB4009CE3EADFD89116F6A80AB768C4681B12CD55D7196078F4";

        final Account account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);
    }
}
