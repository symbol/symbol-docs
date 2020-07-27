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

package symbol.guides.examples.blockchain;

import io.nem.symbol.sdk.api.NamespaceRepository;
import io.nem.symbol.sdk.api.RepositoryFactory;
import io.nem.symbol.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.symbol.sdk.model.mosaic.MosaicId;
import io.nem.symbol.sdk.model.namespace.NamespaceId;
import org.junit.jupiter.api.Test;

import java.util.concurrent.ExecutionException;

class GettingTheCurrentMosaicIdentifierBehindANamespace {

    @Test
    void gettingTheCurrentMosaicIdentifierBehindANamespace()
        throws ExecutionException, InterruptedException {

        /* start block 01 */
        // replace with node endpoint
        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
                "http://api-01.us-east-1.096x.symboldev.network:3000")) {
            final NamespaceRepository namespaceRepository = repositoryFactory.createNamespaceRepository();
            final NamespaceId namespaceId = NamespaceId.createFromName("symbol.xym");
            final MosaicId mosaicId = namespaceRepository.getLinkedMosaicId(namespaceId)
                    .toFuture().get();
            System.out.print(mosaicId.getIdAsHex());
        }
        /* end block 01 */
    }
}
