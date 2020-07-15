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

package symbol.guides.examples.metadata;

import io.nem.symbol.sdk.api.MetadataRepository;
import io.nem.symbol.sdk.api.RepositoryFactory;
import io.nem.symbol.sdk.infrastructure.vertx.JsonHelperJackson2;
import io.nem.symbol.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.symbol.sdk.model.metadata.Metadata;
import io.nem.symbol.sdk.model.mosaic.MosaicId;
import io.nem.symbol.sdk.model.transaction.JsonHelper;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;

class GettingMetadataEntriesMosaic {

    @Test
    void gettingMetadataEntriesMosaic()
            throws ExecutionException, InterruptedException {
        /* start block 01 */
        // replace with node endpoint
        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
                "http://api-01.us-east-1.096x.symboldev.network:3000")) {
            final MetadataRepository metadataRepository = repositoryFactory.createMetadataRepository();

            // replace with mosaic id
            final  String mosaicIdHex = "0DC67FBE1CAD29E3";
            final MosaicId mosaicId = new MosaicId(mosaicIdHex);

            final List<Metadata> metadata = metadataRepository.getMosaicMetadata(mosaicId, Optional.empty())
                    .toFuture().get();
            final JsonHelper helper = new JsonHelperJackson2();
            System.out.println(helper.prettyPrint(metadata));
        }
        /* end block 01 */
    }
}
