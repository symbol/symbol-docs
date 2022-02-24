#!/bin/bash

set -ex

tx_install() {
    pip install transifex-client
}

tx_init() {
    echo "[https://www.transifex.com]
hostname = https://www.transifex.com
username = ${TRANSIFEX_USER}
password = ${TRANSIFEX_PASSWORD}
" > ~/.transifexrc
}

tx_push() {
    tx push --source --parallel
}

echo "Publishing to Transifex..."
tx_install
tx_init
tx_push
echo "Finish pushing to Transifex"
