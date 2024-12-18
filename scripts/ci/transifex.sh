#!/bin/bash

set -ex

curl -o- https://raw.githubusercontent.com/transifex/cli/master/install.sh | bash

echo "[https://www.transifex.com]
rest_hostname = https://rest.api.transifex.com
token = ${TRANSIFEX_TOKEN}
" > ~/.transifexrc

echo "Publishing to Transifex..."
./tx push --source
echo "Finish pushing to Transifex"
