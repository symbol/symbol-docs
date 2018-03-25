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
import io.nem.sdk.model.account.AccountInfo;
import io.nem.sdk.model.account.Address;
import org.junit.jupiter.api.Test;

import java.net.MalformedURLException;
import java.util.concurrent.ExecutionException;

class GettingAccountInformation {

    @Test
    void gettingAccountInformation() throws ExecutionException, InterruptedException, MalformedURLException {
        final AccountHttp accountHttp = new AccountHttp("http://localhost:3000");

        // Replace with address
        final String address = "SD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54";

        final AccountInfo accountInfo = accountHttp.getAccountInfo(Address.createFromRawAddress(address)).toFuture().get();

        System.out.println(accountInfo);
    }
}
