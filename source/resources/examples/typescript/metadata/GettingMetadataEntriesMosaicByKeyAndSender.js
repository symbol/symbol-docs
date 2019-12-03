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
var mosaicIdHex = process.env.MOSAIC_ID;
var mosaicId = new nem2_sdk_1.MosaicId(mosaicIdHex);
var senderPublicKey = process.env.SENDER_PUBLIC_KEY;
var keyHex = process.env.KEY;
var metadataHttp = new nem2_sdk_1.MetadataHttp('http://localhost:3000');
metadataHttp.getMosaicMetadataByKeyAndSender(mosaicId, keyHex, senderPublicKey)
    .subscribe(function (metadata) {
    var metadataEntry = metadata.metadataEntry;
    console.log('\n \n' + 'Key:\t', metadataEntry.scopedMetadataKey);
    console.log('\n' + '---');
    console.log('\n' + 'Value:\t', metadataEntry.value);
    console.log('\n' + 'Sender Public Key:\t', metadataEntry.senderPublicKey);
    console.log('\n' + 'Scoped Metadata Key:\t', metadataEntry.targetPublicKey);
    console.log('\n' + 'TargetId:\t', metadataEntry.targetId);
}, function (err) { return console.log(err); });
/* end block 01 */
