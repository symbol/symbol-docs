#!/bin/bash

set -ex

python -m pip install transifex-client

echo "[https://www.transifex.com]
hostname = https://www.transifex.com
username = ${TRANSIFEX_USER}
password = ${TRANSIFEX_PASSWORD}
" > ~/.transifexrc

echo "Publishing to Transifex..."
tx push --source --parallel
echo "Finish pushing to Transifex"
