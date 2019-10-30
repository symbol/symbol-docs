:orphan:

.. post:: 30 Oct, 2019
    :category: Network
    :excerpt: 1
    :nocomments:

#######################
Editing node parameters
#######################

****
User
****

.. csv-table:: config-user.properties
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **account**; ; ;
    bootPrivateKey; string; Boot private key.; 0000000000000000000000000000000000000000000000000000000000000000
    enableDelegatedHarvestersAutoDetection; bool; Set to true if potential delegated harvesters should be automatically detected.; true
    **storage**; ; ;
    dataDirectory; string; Data directory.; ../data
    pluginsDirectory; string; Plugins directory.; .

****
Node
****

.. csv-table:: config-node.properties
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **node**; ; ;
    port; unsigned short; Server port.; 7900
    apiPort; unsigned short; Server api port.; 7901
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
    outgoingSecurityMode; ionet::ConnectionSecurityMode; Security mode of outgoing connections initiated by this node.; None
    incomingSecurityModes; ionet::ConnectionSecurityMode; Accepted security modes of incoming connections initiated by other nodes.; None
    maxCacheDatabaseWriteBatchSize; utils::FileSize; Maximum cache database write batch size.; 5MB
    maxTrackedNodes; uint32_t; Maximum number of nodes to track in memory.; 5'000
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

**********
Harvesting
**********

.. csv-table:: config-harvesting.properties
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **harvesting**; ; ;
    harvesterPrivateKey; string; Harvester private key.;
    enableAutoHarvesting; bool; Set to true if auto harvesting is enabled.; false
    maxUnlockedAccounts; uint32_t; Maximum number of unlocked accounts.; 5
    delegatePrioritizationPolicy; harvesting::DelegatePrioritizationPolicy; Delegate harvester prioritization policy.; Importance
    beneficiaryPublicKey; string; Public key of the account receiving part of the harvested fee.; 0000000000000000000000000000000000000000000000000000000000000000
