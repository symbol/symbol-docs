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

package nem2.guides.examples.blockchain;

import io.nem.sdk.infrastructure.BlockchainHttp;
import io.nem.sdk.model.blockchain.BlockInfo;
import org.junit.jupiter.api.Test;

import java.math.BigInteger;
import java.net.MalformedURLException;
import java.util.concurrent.ExecutionException;


class GettingBlockByHeight {

    @Test
    void gettingBlockByHeight() throws ExecutionException, InterruptedException, MalformedURLException {
        final BlockchainHttp blockchainHttp = new BlockchainHttp("http://localhost:3000");

        // Replace with block height
        final BigInteger blockHeight = BigInteger.valueOf(1);

        final BlockInfo blockInfo = blockchainHttp.getBlockByHeight(blockHeight).toFuture().get();

        System.out.print(blockInfo);
    }
}
