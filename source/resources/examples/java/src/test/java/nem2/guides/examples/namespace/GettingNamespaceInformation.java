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

package nem2.guides.examples.namespace;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import io.nem.sdk.api.NamespaceRepository;
import io.nem.sdk.api.RepositoryFactory;
import io.nem.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.sdk.model.namespace.NamespaceId;
import io.nem.sdk.model.namespace.NamespaceInfo;
import java.net.MalformedURLException;
import java.util.concurrent.ExecutionException;
import org.junit.jupiter.api.Test;

class GettingNamespaceInformation {

    @Test
    void gettingNamespaceInformation()
        throws ExecutionException, InterruptedException, MalformedURLException {

        /* start block 01 */
        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "http://api-xym-harvest-20.us-west-1.nemtech.network:3000")) {
            // replace with namespace name
            final NamespaceId namespaceId = NamespaceId.createFromName("foo");

            final NamespaceRepository namespaceRepository = repositoryFactory
                .createNamespaceRepository();

            final NamespaceInfo namespaceInfo = namespaceRepository.getNamespace(namespaceId)
                .toFuture()
                .get();
            final Gson gson = new GsonBuilder().setPrettyPrinting().serializeNulls().create();
            System.out.println(gson.toJson(namespaceInfo));
        }
    }
    /* end block 01 */
}
