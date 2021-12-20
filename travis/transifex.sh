#!/bin/bash

tx_install() {
    pip install transifex-client
}

tx_init() {
    echo "[https://www.transifex.com]
hostname = https://www.transifex.com
username = $TRANSIFEX_USER
password = $TRANSIFEX_PASSWORD
token =" > ~/.transifexrc
}

tx_push() {
    tx push --source --parallel
}

#  The $SKIP_TX_PUBLISH env variable can avoid republishing if the release process fails.
if [ "$SKIP_TX_PUBLISH" = "true" ]; then
   echo "Skipping publishing of tx"
else
   echo "Updating Transifex..." && echo -en "travis_fold:start:Transifex\\r"
   tx_install
   tx_init
   tx_push
   echo -en "travis_fold:end:Transifex\\r"
fi