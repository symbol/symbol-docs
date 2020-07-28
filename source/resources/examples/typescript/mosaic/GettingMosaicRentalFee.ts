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
    RepositoryFactoryHttp,
} from 'symbol-sdk';

const example = async () => {
    /* start block 01 */
    const nodeUrl = 'http://api-01.us-east-1.096x.symboldev.network:3000';
    const repositoryHttp = new RepositoryFactoryHttp(nodeUrl);

    const networkHttp = repositoryHttp.createNetworkRepository();
    networkHttp.getRentalFees().subscribe((rentalFees) => {
        console.log(rentalFees.effectiveMosaicRentalFee.compact());
    });
    /* end block 01 */
};

example().then((result) => console.log(result));
