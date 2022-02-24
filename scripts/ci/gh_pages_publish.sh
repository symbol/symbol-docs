#!/bin/bash

set -ex

bash scripts/ci/transifex.sh
bash scripts/ci/deploy.sh
