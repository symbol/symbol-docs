:orphan:

.. post:: 30 Oct, 2019
    :category: Network, Harvesting
    :excerpt: 1
    :nocomments:

###########################
Configuring node properties
###########################

Customize the node configurable parameters.

********
Packages
********

The instructions to configure the node vary depending on the package used to deploy the network.

Testnet Bootstrap
=================

After running a node for the first time, the file ``config-input.yaml`` will be generated in the folder``symbol-testnet-bootstrap/identity``.

To edit the node properties, follow the next steps:

1. If the node service is running, run ``sudo docker-compose down`` under the same directory you executed the ``up`` command.

2. Edit the properties file ``config-input.yaml`` with a text editor.

3. Save and apply the changes with the command ``sudo docker-compose up --build --detach``.

Service Bootstrap
=================

After running a network for the first time, the folder ``build/catapult-config`` contains all the properties files for the Peer and API nodes that compose the network.

For example, if you want to edit the ``peer-node-0`` properties, follow the next steps:

1. Stop all the services with the command ``./cmds/stop-all``.

2. Open the properties file to edit under ``peer-node-0/userconfig/resources`` with a text editor.

3. Save and apply the changes with the command ``./cmds/start-all -d``.

.. _node-properties:

**********
Properties
**********

Find below the list of configurable properties.

config-user.properties
======================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **account**; ; ; 
    enableDelegatedHarvestersAutoDetection; bool; Set to true if potential delegated harvesters should be automatically detected.; true
    **storage**; ; ; 
    dataDirectory; string; Data directory.; ../data
    certificateDirectory; string; Certificate directory.; ../certificate
    pluginsDirectory; string; Plugins directory.; .

config-node.properties
======================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **node**; ; ;
    port; unsigned short; Server port.; 7900
    maxIncomingConnectionsPerIdentity; uint32_t; Maximum number of incoming connections per identity over primary port.; 3
    enableAddressReuse; bool; Set to true if the server should reuse ports already in use.; false
    enableSingleThreadPool; bool; Set to true if a single thread pool should be used, Set to false if multiple thread pools should be used.; false
    enableCacheDatabaseStorage; bool; Set to true if cache data should be saved in a database.; true
    enableAutoSyncCleanup; bool; Set to true if temporary sync files should be automatically cleaned up. *Note*: This should be Set to false if broker process is running.; true
    enableTransactionSpamThrottling; bool; Set to true if transaction spam throttling should be enabled.; true
    transactionSpamThrottlingMaxBoostFee; Amount; Maximum fee that will boost a transaction through the spam throttle when spam throttling is enabled.; 10'000'000
    maxBlocksPerSyncAttempt; uint32_t; Maximum number of blocks per sync attempt.; 400
    maxChainBytesPerSyncAttempt; utils::FileSize; Maximum chain bytes per sync attempt.; 100MB
    shortLivedCacheTransactionDuration; utils::TimeSpan; Duration of a transaction in the short lived cache.; 10m
    shortLivedCacheBlockDuration; utils::TimeSpan; Duration of a block in the short lived cache.; 100m
    shortLivedCachePruneInterval; utils::TimeSpan; Time between short lived cache pruning.; 90s
    shortLivedCacheMaxSize; uint32_t; Maximum size of a short lived cache.; 10'000'000
    minFeeMultiplier; BlockFeeMultiplier; Minimum fee multiplier of transactions to propagate and include in blocks.; 0
    transactionSelectionStrategy; model::TransactionSelectionStrategy; Transaction selection strategy used for syncing and harvesting unconfirmed transactions.; oldest
    unconfirmedTransactionsCacheMaxResponseSize; utils::FileSize; Maximum size of an unconfirmed transactions response.; 20MB
    unconfirmedTransactionsCacheMaxSize; uint32_t; Maximum size of the unconfirmed transactions cache.; 1'000'000
    connectTimeout; utils::TimeSpan; Timeout for connecting to a peer.; 10s
    syncTimeout; utils::TimeSpan; Timeout for syncing with a peer.; 60s
    socketWorkingBufferSize; utils::FileSize; Initial socket working buffer size (socket reads will attempt to read buffers of roughly this size).; 512KB
    socketWorkingBufferSensitivity; uint32_t; Socket working buffer sensitivity (lower values will cause memory to be more aggressively reclaimed). *Note*: Set to 0 will disable memory reclamation.; 100
    maxPacketDataSize; utils::FileSize; Maximum packet data size.; 150MB
    blockDisruptorSize; uint32_t; Size of the block disruptor circular buffer.; 4096
    blockElementTraceInterval; uint32_t; Multiple of elements at which a block element should be traced through queue and completion.; 1
    transactionDisruptorSize; uint32_t; Size of the transaction disruptor circular buffer.; 16384
    transactionElementTraceInterval; uint32_t; Multiple of elements at which a transaction element should be traced through queue and completion.; 10
    enableDispatcherAbortWhenFull; bool; Set to true if the process should terminate when any dispatcher is full.; true
    enableDispatcherInputAuditing; bool; Set to true if all dispatcher inputs should be audited.; true
    maxCacheDatabaseWriteBatchSize; utils::FileSize; Maximum cache database write batch size.; 5MB
    maxTrackedNodes; uint32_t; Maximum number of nodes to track in memory.; 5'000
    batchVerificationRandomSource; string; Source of random numbers used in batch verification.; /dev/urandom
    trustedHosts; unordered_set<string>; Trusted hosts that are allowed to execute protected API calls on this node.;
    localNetworks; unordered_set<string>; Networks that should be treated as local.; 127.0.0.1
    **localnode**; ; ;
    host; string; Node host (leave empty to auto-detect IP).;
    friendlyName; string; Node friendly name (leave empty to use address).;
    version; uint32_t; Node version.; 0
    roles; ionet::NodeRoles; Node roles.; Peer
    **outgoing_connections**; ; ;
    maxConnections; uint16_t; Maximum number of active connections.; 10
    maxConnectionAge; uint16_t; Maximum connection age.; 200
    maxConnectionBanAge; uint16_t; Maximum connection ban age.; 20
    numConsecutiveFailuresBeforeBanning; uint16_t; Number of consecutive connection failures before a connection is banned.; 3
    **incoming_connections**; ; ;
    maxConnections; uint16_t; Maximum number of active connections.; 512
    maxConnectionAge; uint16_t; Maximum connection age.; 200
    maxConnectionBanAge; uint16_t; Maximum connection ban age.; 20
    numConsecutiveFailuresBeforeBanning; uint16_t; Number of consecutive connection failures before a connection is banned.; 3
    backlogSize; uint16_t; Maximum size of the pending connections queue.; 512
    **banning**; ; ;
    defaultBanDuration; utils::TimeSpan; Default duration for banning.; 12h
    maxBanDuration; utils::TimeSpan; Maximum duration for banning.; 72h
    keepAliveDuration; utils::TimeSpan; Duration to keep account in container after the ban expired.; 48h
    maxBannedNodes; uint32_t; Maximum number of banned nodes.; 5'000
    numReadRateMonitoringBuckets; uint16_t; Number of read rate monitoring buckets (Set to 0 to disable read rate monitoring).; 4
    readRateMonitoringBucketDuration; utils::TimeSpan; Duration of each read rate monitoring bucket.; 15s
    maxReadRateMonitoringTotalSize; utils::FileSize; Maximum size allowed during full read rate monitoring period.; 100MB

config-harvesting.properties
============================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **harvesting**; ; ; 
    harvesterSigningPrivateKey; string; Harvester signing private key.; 
    harvesterVrfPrivateKey; string; Harvester vrf private key.; 
    enableAutoHarvesting; bool; Set to true if auto harvesting is enabled.; false
    maxUnlockedAccounts; uint32_t; Maximum number of unlocked accounts.; 5
    delegatePrioritizationPolicy; harvesting::DelegatePrioritizationPolicy; Delegate harvester prioritization policy.; Importance
    beneficiaryAddress; Address; Address of the account receiving part of the harvested fee.; 

.. |catapult-service-bootstrap| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap" target="_blank">Catapult Service Bootstrap</a>
