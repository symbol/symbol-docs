 #!/bin/sh

# Optionally use --profile announcer
symbol-cli transaction persistentharvestdelegation \
    --remote-private-key <REMOTE_PRIVATE_KEY> \
    --recipient-public-key <NODE_PUBLIC_TLS_KEY> \
    --vrf-private-key <VRF_PRIVATE_KEY> \
    --sync
