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
/* start block 01 */
var password = new nem2_sdk_1.Password('password');
var privateKey = process.env.PRIVATE_KEY;
var wallet = nem2_sdk_1.SimpleWallet.createFromPrivateKey('wallet-name', password, privateKey, nem2_sdk_1.NetworkType.MIJIN_TEST);
var account = wallet.open(password);
console.log('Your account address is:', account.address.pretty(), 'and its private key', account.privateKey);
/* end block 01 */