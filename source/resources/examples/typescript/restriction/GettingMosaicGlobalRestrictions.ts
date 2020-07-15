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

import {MosaicGlobalRestrictionItem, MosaicId, MosaicRestrictionType, RepositoryFactoryHttp} from 'symbol-sdk';

/* start block 01 */
// replace with mosaic id
const mosaicIdHex = '634a8ac3fc2b65b3';
const mosaicId = new MosaicId(mosaicIdHex);
// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const restrictionHttp = repositoryFactory.createRestrictionMosaicRepository();

restrictionHttp.getMosaicGlobalRestriction(mosaicId)
    .subscribe((mosaicGlobalRestrictions) => {
        if (mosaicGlobalRestrictions.restrictions.size > 0) {
            console.log('Key\t', 'Reference MosaicId\t', 'Restriction Type\t', 'Restriction Value');
            mosaicGlobalRestrictions.restrictions.forEach((value: MosaicGlobalRestrictionItem, key: string) => {
                console.log('\n' + key + '\t', value.referenceMosaicId.toHex() +
                    '\t', MosaicRestrictionType[value.restrictionType] +
                    '\t', value.restrictionValue);
            });
        } else {
            console.log('\n The mosaic does not have mosaic global restrictions assigned.');
        }
    }, (err) => console.log(err));
/* end block 01 */
