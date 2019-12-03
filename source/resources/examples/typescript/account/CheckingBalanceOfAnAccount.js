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
var nem2_sdk_1 = require("nem2-sdk");
var operators_1 = require("rxjs/operators");
/* start block 01 */
var rawAddress = process.env.ADDRESS;
var address = nem2_sdk_1.Address.createFromRawAddress(rawAddress);
var url = 'http://localhost:3000';
var accountHttp = new nem2_sdk_1.AccountHttp(url);
var mosaicHttp = new nem2_sdk_1.MosaicHttp(url);
var mosaicService = new nem2_sdk_1.MosaicService(accountHttp, mosaicHttp);
mosaicService
    .mosaicsAmountViewFromAddress(address)
    .pipe(operators_1.mergeMap(function (_) { return _; }))
    .subscribe(function (mosaic) { return console.log('You have', mosaic.relativeAmount(), mosaic.fullName()); }, function (err) { return console.error(err); });
/* end block 01 */
