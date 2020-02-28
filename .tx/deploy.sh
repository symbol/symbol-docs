#!/bin/bash

pip install transifex-client
sudo echo $'[https://www.transifex.com]\nhostname = https://api.transifex.com\nusername = '"$TRANSIFEX_USER"$'\npassword = '"$TRANSIFEX_PASSWORD"$'\n' > ~/.transifexrc
tx push -s
