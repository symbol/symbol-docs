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

package nem2.guides.examples.blockchain;

import io.nem.sdk.api.BlockRepository;
import io.nem.sdk.api.RepositoryFactory;
import io.nem.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.sdk.model.blockchain.BlockInfo;
import java.math.BigInteger;
import java.net.MalformedURLException;
import java.util.concurrent.ExecutionException;
import org.junit.jupiter.api.Test;


class GettingBlockByHeight {

    @Test
    void gettingBlockByHeight()
        throws ExecutionException, InterruptedException {
        /* start block 01 */

        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "http://localhost:3000")) {
            final BlockRepository blockRepository = repositoryFactory.createBlockRepository();

            // Replace with block height
            final BigInteger blockHeight = BigInteger.valueOf(1);

            final BlockInfo blockInfo = blockRepository.getBlockByHeight(blockHeight).toFuture()
                .get();

            System.out.print(blockInfo);
            /* end block 01 */
        }

    }
}
