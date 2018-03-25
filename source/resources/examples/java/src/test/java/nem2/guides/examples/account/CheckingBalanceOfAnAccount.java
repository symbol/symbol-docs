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
import io.nem.sdk.model.account.PublicAccount;
import io.nem.sdk.model.blockchain.NetworkType;
import org.junit.jupiter.api.Test;

import java.net.MalformedURLException;
import java.util.concurrent.ExecutionException;

class CheckingBalanceOfAnAccount {

    @Test
    void checkingBalanceFromAnAccount() throws ExecutionException, InterruptedException, MalformedURLException {
        final AccountHttp accountHttp = new AccountHttp("http://localhost:3000");

        final PublicAccount publicAccount = PublicAccount.createFromPublicKey("14A239D2ADB96753CFC160BB262F27B01BCCC8C74599F51771BC6BD39980F4E7", NetworkType.MIJIN_TEST);

        // TODO: unimplemented test
    }
}
