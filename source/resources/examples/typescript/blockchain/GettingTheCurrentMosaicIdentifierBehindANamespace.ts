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

import { NamespaceId, RepositoryFactoryHttp } from 'symbol-sdk';

/* start block 01 */
// Replace with namespace name
const namespaceId = new NamespaceId('symbol.xym');

// Replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.0.10.0.x.symboldev.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const namespaceHttp = repositoryFactory.createNamespaceRepository();

namespaceHttp.getLinkedMosaicId(namespaceId).subscribe(
  (mosaicId) => console.log(mosaicId!.toHex()),
  (err) => console.log(err),
);
/* end block 01 */
