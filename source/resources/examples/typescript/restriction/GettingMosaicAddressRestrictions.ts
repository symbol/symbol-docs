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

import {Address, MosaicId, RepositoryFactoryHttp} from 'symbol-sdk';

/* start block 01 */
// replace with address
const rawAddress = 'TCHBDE-NCLKEB-ILBPWP-3JPB2X-NY64OE-7PYHHE-32I';
const address = Address.createFromRawAddress(rawAddress);
// replace with mosaic id
const mosaicIdHex = '634a8ac3fc2b65b3';
const mosaicId = new MosaicId(mosaicIdHex);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const restrictionHttp = repositoryFactory.createRestrictionMosaicRepository();

restrictionHttp.getMosaicAddressRestriction(mosaicId, address)
    .subscribe((mosaicAddressRestrictions) => {
        if (mosaicAddressRestrictions.restrictions.size > 0) {
            mosaicAddressRestrictions.restrictions.forEach((value: string, key: string) => {
                console.log('\n', key, value);
            });
        } else {
            console.log('\n The address does not have mosaic address restrictions assigned.');
        }
    }, (err) => console.log(err));
/* end block 01 */
