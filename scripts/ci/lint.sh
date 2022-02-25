#!/bin/bash

set -ex

pushd source/resources/examples/typescript
npm run lint
popd
