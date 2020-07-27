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

package symbol.guides.examples.account;

import io.nem.symbol.sdk.model.account.Account;
import io.nem.symbol.sdk.model.network.NetworkType;
import org.junit.jupiter.api.Test;

class CreatingAnAccount {

    @Test
    void creatingAnAccount() {

        /* start block 01 */
        final Account account = Account.generateNewAccount(NetworkType.TEST_NET);

        System.out.printf("Your new account address is: %s and its private key: %s",
            account.getAddress().plain(), account.getPrivateKey());
        /* end block 01 */
    }
}
