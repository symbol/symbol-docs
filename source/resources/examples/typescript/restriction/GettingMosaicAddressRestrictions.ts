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

import {
  Address,
  MosaicAddressRestrictionItem,
  MosaicId,
  RepositoryFactoryHttp,
} from 'symbol-sdk';

/* start block 01 */
// replace with address
const rawAddress = 'TCHBDE-NCLKEB-ILBPWP-3JPB2X-NY64OE-7PYHHE-32I';
const address = Address.createFromRawAddress(rawAddress);
// replace with mosaic id
const mosaicIdHex = '634a8ac3fc2b65b3';
const mosaicId = new MosaicId(mosaicIdHex);
// replace with node endpoint
const nodeUrl = 'NODE_URL';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const restrictionHttp = repositoryFactory.createRestrictionMosaicRepository();

const criteria = { mosaicId, targetAddress: address };
restrictionHttp.search(criteria).subscribe(
  (mosaicAddressRestrictions) => {
    if (mosaicAddressRestrictions.data.length > 0) {
      mosaicAddressRestrictions.data.forEach((mosaicRestriction) => {
        mosaicRestriction.restrictions.forEach(
          (value: MosaicAddressRestrictionItem) => {
            console.log('\n', value.key, value.restrictionValue);
          },
        );
      });
    } else {
      console.log(
        '\n The address does not have mosaic address restrictions assigned.',
      );
    }
  },
  (err) => console.log(err),
);
/* end block 01 */
