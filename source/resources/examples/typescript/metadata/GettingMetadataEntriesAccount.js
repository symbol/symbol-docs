"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const symbol_sdk_1 = require("symbol-sdk");
/* start block 01 */
// Replace with address
const rawAddress = 'TCHBDE-NCLKEB-ILBPWP-3JPB2X-NY64OE-7PYHHE-32I';
const address = symbol_sdk_1.Address.createFromRawAddress(rawAddress);
// Replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const metadataHttp = repositoryFactory.createMetadataRepository();
const searchCriteria = { targetAddress: address, metadataType: symbol_sdk_1.MetadataType.Account };
metadataHttp.search(searchCriteria)
    .subscribe((metadata) => {
    if (metadata.totalEntries > 0) {
        console.log('Page', metadata.pageNumber, 'of', metadata.totalPages);
        metadata.data
            .map((entry) => {
            const metadataEntry = entry.metadataEntry;
            console.log('\n \n Key:\t', metadataEntry.scopedMetadataKey);
            console.log('\n ---');
            console.log('\n Value:\t', metadataEntry.value);
            console.log('\n Sender Address:\t', metadataEntry.sourceAddress.pretty());
            console.log('\n Target address:\t', metadataEntry.targetAddress.pretty());
            console.log('\n Scoped metadata key:\t', metadataEntry.scopedMetadataKey.toHex());
        });
    }
    else {
        console.log('\n The address does not have metadata entries assigned.');
    }
}, (err) => console.log(err));
/* end block 01 */
