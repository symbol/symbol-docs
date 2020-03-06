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

import {Address, Metadata, RepositoryFactoryHttp} from 'symbol-sdk';

/* start block 01 */
// Replace with address
const rawAddress = 'TBULEA-UG2CZQ-ISUR44-2HWA6U-AKGWIX-HDABJV-IPS4';
const address = Address.createFromRawAddress(rawAddress);
// Replace with node endpoint
const nodeUrl = 'http://api-01.us-west-1.symboldev.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const metadataHttp = repositoryFactory.createMetadataRepository();

metadataHttp.getAccountMetadata(address)
    .subscribe((metadata) => {
        if (metadata.length > 0) {
            metadata
                .map((entry: Metadata) => {
                    const metadataEntry = entry.metadataEntry;
                    console.log('\n \n Key:\t', metadataEntry.scopedMetadataKey);
                    console.log('\n ---' );
                    console.log('\n Value:\t', metadataEntry.value);
                    console.log('\n Sender Public Key:\t', metadataEntry.senderPublicKey);
                    console.log('\n Scoped Metadata Key:\t', metadataEntry.targetPublicKey);
                });
        } else {
            console.log('\n The address does not have metadata entries assigned.');
        }
    }, (err) => console.log(err));
/* end block 01 */
