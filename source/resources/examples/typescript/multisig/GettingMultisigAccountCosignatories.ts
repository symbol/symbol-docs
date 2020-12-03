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

import { Address, RepositoryFactoryHttp } from 'symbol-sdk';

/* start block 01 */
// replace with multisig address
const rawAddress = 'TAEG6L-KWXRA7-PSWUEE-ILQPG4-3V5CYZ-S5652T-JTUU';
const address = Address.createFromRawAddress(rawAddress);

// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.0.10.0.x.symboldev.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const multisigHttp = repositoryFactory.createMultisigRepository();

multisigHttp.getMultisigAccountInfo(address).subscribe(
  (multisigInfo) => console.log(multisigInfo),
  (err) => console.error(err),
);
/* end block 01 */
