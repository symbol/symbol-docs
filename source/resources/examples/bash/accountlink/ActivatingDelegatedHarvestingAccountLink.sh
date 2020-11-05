#!/bin/sh

symbol-cli transaction accountkeylink \
    --linked-public-key <REMOTE_PUBLIC_KEY> \
    --action Link \
    --sync
