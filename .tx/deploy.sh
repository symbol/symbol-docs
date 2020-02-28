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
    tx push -s
}

tx_install
tx_init
tx_push
