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

tx_install
tx_init

#  The $SKIP_TX_PUBLISH env variable can avoid republishing if the release process fails.
if [ "$SKIP_TX_PUBLISH" = "true" ]; then
   echo "Skipping publishing of tx"
   echo ""
else
   echo "Publishing TX"
   tx_push
echo ""
fi