#!/bin/bash

set -ex

pushd source/resources/examples/typescript
npm install
npm run build
popd
