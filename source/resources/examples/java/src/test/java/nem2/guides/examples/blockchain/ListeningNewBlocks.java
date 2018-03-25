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

import java.net.MalformedURLException;
import java.util.concurrent.ExecutionException;

import io.nem.sdk.infrastructure.Listener;
import io.nem.sdk.model.blockchain.BlockInfo;
import org.junit.jupiter.api.Test;


class ListeningNewBlocks {

    @Test
    void listeningNewBlocks() throws ExecutionException, InterruptedException, MalformedURLException {
        Listener listener = new Listener("http://localhost:3000");

        listener.open().get();

        BlockInfo blockInfo = listener.newBlock().take(1).toFuture().get();

        System.out.println(blockInfo);
    }
}
