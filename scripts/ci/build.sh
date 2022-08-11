#!/bin/bash

set -ex

make gettext

echo "Building docs..."
make alldocs

echo "Linking Check..."
make linkcheck

