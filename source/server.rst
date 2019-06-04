######
Server
######

As a blockchain platform, NEM relies on a decentralized network of nodes to provide a powerful, stable, and secure platform for Smart Asset transactions.

These nodes are deployed using catapult-server software, carefully written in C++ to be NEM’s next core engine.

**Repository:** |catapult-server|

************
Installation
************

Catapult-server provides increased flexibility for the node owners. The same software can be used to configure two different types of nodes:

* **Peer node** (P2P Component): The peer node verifies or discards the transactions once the API pushes them into the P2P network. It runs the consensus algorithm, creates new blocks, and propagates the changes through the network.

* **API node** (API Component): The primary responsibility of the API node is to properly store data in the MongoDB database once transactions are validated.

You can test catapult-server software deploying your own network for development or learning purposes with |catapult-service-bootstrap|.

To build and run catapult-server only, follow the |instructions|.

******
Guides
******

* |running-catapult-locally|

Deploy a Catapult full node for learning and development purposes.

.. |running-catapult-locally| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap/" target="_blank"><b>Running Catapult locally</b></a>

**Upcoming guides**

* **Deploying a test net node** - `Participate <https://github.com/nemtech/nem2-docs/issues/143>`_

* **Configuring a private network** - `Participate <https://github.com/nemtech/nem2-docs/issues/143>`_

* **Creating a custom plugin** - `Participate <https://github.com/nemtech/nem2-docs/issues/143>`_

************************
Configuration Properties
************************

config-database.properties
==========================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **database**; ; ;
    databaseUri; string; Database uri.; mongodb://127.0.0.1:27017
    databaseName; string; Database name.; catapult
    maxWriterThreads; uint32_t; Maximum number of database writer threads.; 8
    **plugins**; ; ;
    catapult.mongo.plugins.accountlink; ; ; true
    catapult.mongo.plugins.aggregate; ; ; true
    catapult.mongo.plugins.lockhash; ; ; true
    catapult.mongo.plugins.locksecret; ; ; true
    catapult.mongo.plugins.mosaic; ; ; true
    catapult.mongo.plugins.multisig; ; ; true
    catapult.mongo.plugins.namespace; ; ; true
    catapult.mongo.plugins.property; ; ; true
    catapult.mongo.plugins.transfer; ; ; true

config-extensions-broker.properties
===================================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **extensions**; ; ;
    extension.addressextraction; ; ; true
    extension.mongo; ; ; true
    extension.zeromq; ; ; true
    extension.hashcache; ; ; true

config-extensions-recovery.properties
=====================================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **extensions**; ; ;
    extension.addressextraction; ; ; false
    extension.mongo; ; ; false
    extension.zeromq; ; ; false
    extension.hashcache; ; ; true

config-extensions-server.properties
===================================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **extensions**; ; ;
    extension.filespooling; ; ; false
    extension.partialtransaction; ; ; false
    extension.addressextraction; ; ; false
    extension.mongo; ; ; false
    extension.zeromq; ; ; false
    extension.eventsource; ; ; true
    extension.harvesting; ; ; true
    extension.syncsource; ; ; true
    extension.diagnostics; ; ; true
    extension.hashcache; ; ; true
    extension.networkheight; ; ; true
    extension.nodediscovery; ; ; true
    extension.packetserver; ; ; true
    extension.pluginhandlers; ; ; true
    extension.sync; ; ; true
    extension.timesync; ; ; true
    extension.transactionsink; ; ; true
    extension.unbondedpruning; ; ; true

config-harvesting.properties
============================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **harvesting**; ; ;
    harvestKey; string; Harvest key.;
    isAutoHarvestingEnabled; bool; Set to true if auto harvesting is enabled.; false
    maxUnlockedAccounts; uint32_t; Maximum number of unlocked accounts.; 5
    beneficiary; string; Public key of the account receiving part of the harvested fee.; 0000000000000000000000000000000000000000000000000000000000000000

config-inflation.properties
===========================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **inflation**; ; ;
    starting-at-height-1; ; ; 100
    starting-at-height-10000; ; ; 0

config-logging-recovery.properties
==================================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **console**; ; ;
    sinkType; utils::LogSinkType; Log sink type.; Sync
    level; utils::LogLevel; Log level.; Info
    colorMode; utils::LogColorMode; Console color mode.; Ansi
    **console.component.levels**; ; ;
    **file**; ; ;
    sinkType; utils::LogSinkType; Log sink type.; Async
    level; utils::LogLevel; Log level.; Debug
    directory; string; Log file directory.; logs
    filePattern; string; Log file pattern.; catapult_recovery%4N.log
    rotationSize; utils::FileSize; File rotation size.; 25MB
    maxTotalSize; utils::FileSize; Maximum size of all log files.; 2500MB
    minFreeSpace; utils::FileSize; Minimum size of free disk space in order to create log files.; 100MB
    **file.component.levels**; ; ;

config-logging-server.properties
================================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **console**; ; ;
    sinkType; utils::LogSinkType; Log sink type.; Sync
    level; utils::LogLevel; Log level.; Info
    colorMode; utils::LogColorMode; Console color mode.; Ansi
    **console.component.levels**; ; ;
    **file**; ; ;
    sinkType; utils::LogSinkType; Log sink type.; Async
    level; utils::LogLevel; Log level.; Info
    directory; string; Log file directory.; logs
    filePattern; string; Log file pattern.; catapult_server%4N.log
    rotationSize; utils::FileSize; File rotation size.; 25MB
    maxTotalSize; utils::FileSize; Maximum size of all log files.; 2500MB
    minFreeSpace; utils::FileSize; Minimum size of free disk space in order to create log files.; 100MB
    **file.component.levels**; ; ;

config-messaging.properties
===========================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **messaging**; ; ;
    subscriberPort; unsigned short; Subscriber port.; 7902

config-network.properties
=========================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **network**; ; ;
    identifier; NetworkIdentifier; Network identifier.; mijin-test
    publicKey; Key; Nemesis public key.; B4F12E7C9F6946091E2CB8B6D3A12B50D17CCBBF646386EA27CE2946A7423DCF
    generationHash; catapult::GenerationHash; Nemesis generation hash.; 57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6
    **chain**; ; ;
    shouldEnableVerifiableState; bool; Set to true if block chain should calculate state hashes so that state is fully verifiable at each block.; true
    shouldEnableVerifiableReceipts; bool; Set to true if block chain should calculate receipts so that state changes are fully verifiable at each block.; true
    currencyMosaicId; MosaicId; Mosaic id used as primary chain currency.; 0x0DC6'7FBE'1CAD'29E3
    harvestingMosaicId; MosaicId; Mosaic id used to provide harvesting ability.; 0x2651'4E2A'1EF3'3824
    blockGenerationTargetTime; utils::TimeSpan; Targeted time between blocks.; 15s
    blockTimeSmoothingFactor; uint32_t; *Note*: A higher value makes the network more biased. *Note*: This can lower security because it will increase the influence of time relative to importance.; 3000
    importanceGrouping; uint64_t; Number of blocks that should be treated as a group for importance purposes. *Note*: Importances will only be calculated at blocks that are multiples of this grouping number.; 39
    maxRollbackBlocks; uint32_t; Maximum number of blocks that can be rolled back.; 40
    maxDifficultyBlocks; uint32_t; Maximum number of blocks to use in a difficulty calculation.; 60
    maxTransactionLifetime; utils::TimeSpan; Maximum lifetime a transaction can have before it expires.; 24h
    maxBlockFutureTime; utils::TimeSpan; Maximum future time of a block that can be accepted.; 10s
    initialCurrencyAtomicUnits; Amount; Initial currency atomic units available in the network.; 8'998'999'998'000'000
    maxMosaicAtomicUnits; Amount; Maximum atomic units (total-supply * 10 ^ divisibility) of a mosaic allowed in the network.; 9'000'000'000'000'000
    totalChainImportance; Importance; Total whole importance units available in the network.; 15'000'000
    minHarvesterBalance; Amount; Minimum number of harvesting mosaic atomic units needed for an account to be eligible for harvesting.; 500
    harvestBeneficiaryPercentage; uint8_t; Percentage of the harvested fee that is collected by the beneficiary account.; 10
    blockPruneInterval; uint32_t; Number of blocks between cache pruning.; 360
    maxTransactionsPerBlock; uint32_t; Maximum number of transactions per block.; 200'000
    **plugin:catapult.plugins.accountlink**; ; ;
    dummy; ; ; to trigger plugin load
    **plugin:catapult.plugins.aggregate**; ; ;
    maxTransactionsPerAggregate; uint32_t; Maximum number of transactions per aggregate.; 1'000
    maxCosignaturesPerAggregate; uint8_t; Maximum number of cosignatures per aggregate.; 15
    enableStrictCosignatureCheck; bool; Set to true if cosignatures must exactly match component signers. Set to false if cosignatures should be validated externally.; false
    enableBondedAggregateSupport; bool; Set to true if bonded aggregates should be allowed. Set to false if bonded aggregates should be rejected.; true
    maxBondedTransactionLifetime; utils::TimeSpan; Maximum lifetime a bonded transaction can have before it expires.; 48h
    **plugin:catapult.plugins.lockhash**; ; ;
    lockedFundsPerAggregate; Amount; Amount that has to be locked per aggregate in partial cache.; 10'000'000
    maxHashLockDuration; utils::BlockSpan; Maximum number of blocks for which a hash lock can exist.; 2d
    **plugin:catapult.plugins.locksecret**; ; ;
    maxSecretLockDuration; utils::BlockSpan; Maximum number of blocks for which a secret lock can exist.; 30d
    minProofSize; uint16_t; Minimum size of a proof in bytes.; 1
    maxProofSize; uint16_t; Maximum size of a proof in bytes.; 1000
    **plugin:catapult.plugins.mosaic**; ; ;
    maxMosaicsPerAccount; uint16_t; Maximum number of mosaics that an account can own.; 10'000
    maxMosaicDuration; utils::BlockSpan; Maximum mosaic duration.; 3650d
    maxMosaicDivisibility; uint8_t; Maximum mosaic divisibility.; 6
    mosaicRentalFeeSinkPublicKey; Key; Public key of the mosaic rental fee sink account.; 53E140B5947F104CABC2D6FE8BAEDBC30EF9A0609C717D9613DE593EC2A266D3
    mosaicRentalFee; Amount; Mosaic rental fee.; 500'000'000
    **plugin:catapult.plugins.multisig**; ; ;
    maxMultisigDepth; uint8_t; Maximum number of multisig levels.; 3
    maxCosignersPerAccount; uint8_t; Maximum number of cosigners per account.; 10
    maxCosignedAccountsPerAccount; uint8_t; Maximum number of accounts a single account can cosign.; 5
    **plugin:catapult.plugins.namespace**; ; ;
    maxNameSize; uint8_t; Maximum namespace and mosaic name size.; 64
    maxNamespaceDuration; utils::BlockSpan; Maximum namespace duration.; 365d
    namespaceGracePeriodDuration; utils::BlockSpan; Grace period during which time only the previous owner can renew an expired namespace.; 0d
    reservedRootNamespaceNames; unordered_set<string>; Reserved root namespaces that cannot be claimed.; xem, nem, user, account, org, com, biz, net, edu, mil, gov, info
    namespaceRentalFeeSinkPublicKey; Key; Public key of the namespace rental fee sink account.; 3E82E1C1E4A75ADAA3CBA8C101C3CD31D9817A2EB966EB3B511FB2ED45B8E262
    rootNamespaceRentalFeePerBlock; Amount; Root namespace rental fee per block.; 1'000'000
    childNamespaceRentalFee; Amount; Child namespace rental fee.; 100'000'000
    maxChildNamespaces; uint16_t; Maximum number of children for a root namespace.; 500
    **plugin:catapult.plugins.property**; ; ;
    maxPropertyValues; uint16_t; Maximum number of property values.; 512
    **plugin:catapult.plugins.transfer**; ; ;
    maxMessageSize; uint16_t; Maximum transaction message size.; 1024

config-networkheight.properties
===============================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **networkheight**; ; ;
    maxNodes; uint8_t; Number of nodes that this node should communicate with during network height detection.; 5

config-node.properties
======================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **node**; ; ;
    port; unsigned short; Server port.; 7900
    apiPort; unsigned short; Server api port.; 7901
    shouldAllowAddressReuse; bool; Set to true if the server should reuse ports already in use.; false
    shouldUseSingleThreadPool; bool; Set to true if a single thread pool should be used, Set to false if multiple thread pools should be used.; false
    shouldUseCacheDatabaseStorage; bool; Set to true if cache data should be saved in a database.; true
    shouldEnableAutoSyncCleanup; bool; Set to true if temporary sync files should be automatically cleaned up. *Note*: This should be Set to false if broker process is running.; true
    shouldEnableTransactionSpamThrottling; bool; Set to true if transaction spam throttling should be enabled.; true
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
    shouldAbortWhenDispatcherIsFull; bool; Set to true if the process should terminate when any dispatcher is full.; true
    shouldAuditDispatcherInputs; bool; Set to true if all dispatcher inputs should be audited.; true
    outgoingSecurityMode; ionet::ConnectionSecurityMode; Security mode of outgoing connections initiated by this node.; None
    incomingSecurityModes; ionet::ConnectionSecurityMode; Accepted security modes of incoming connections initiated by other nodes.; None
    maxCacheDatabaseWriteBatchSize; utils::FileSize; Maximum cache database write batch size.; 5MB
    maxTrackedNodes; uint32_t; Maximum number of nodes to track in memory.; 5'000
    **localnode**; ; ;
    host; string; Node host (leave empty to auto-detect IP).;
    friendlyName; string; Node friendly name (leave empty to use address).;
    version; uint32_t; Node version.; 0
    roles; ionet::NodeRoles; Node roles.; Peer
    **outgoing_connections**; ; ;
    maxConnections; uint16_t; Maximum number of active connections.; 10
    maxConnectionAge; uint16_t; Maximum connection age.; 5
    maxConnectionBanAge; uint16_t; Maximum connection ban age.; 20
    numConsecutiveFailuresBeforeBanning; uint16_t; Number of consecutive connection failures before a connection is banned.; 3
    **incoming_connections**; ; ;
    maxConnections; uint16_t; Maximum number of active connections.; 512
    maxConnectionAge; uint16_t; Maximum connection age.; 10
    maxConnectionBanAge; uint16_t; Maximum connection ban age.; 20
    numConsecutiveFailuresBeforeBanning; uint16_t; Number of consecutive connection failures before a connection is banned.; 3
    backlogSize; uint16_t; Maximum size of the pending connections queue.; 512

config-pt.properties
====================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **partialtransactions**; ; ;
    cacheMaxResponseSize; utils::FileSize; Maximum size of a partial transactions response.; 20MB
    cacheMaxSize; uint32_t; Maximum size of the partial transactions cache.; 1'000'000

config-task.properties
======================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **age peers task for service Api Writers**; ; ;
    startDelay; utils::TimeSpan; Delay until the first execution of the task.; 1m
    repeatDelay; utils::TimeSpan; Delay until subsequent executions of the task.; 1m
    **age peers task for service Readers**; ; ;
    startDelay; utils::TimeSpan; Delay until the first execution of the task.; 1m
    repeatDelay; utils::TimeSpan; Delay until subsequent executions of the task.; 1m
    **batch partial transaction task**; ; ;
    startDelay; utils::TimeSpan; Delay until the first execution of the task.; 500ms
    repeatDelay; utils::TimeSpan; Delay until subsequent executions of the task.; 500ms
    **batch transaction task**; ; ;
    startDelay; utils::TimeSpan; Delay until the first execution of the task.; 500ms
    repeatDelay; utils::TimeSpan; Delay until subsequent executions of the task.; 500ms
    **connect peers task for service Pt**; ; ;
    startDelay; utils::TimeSpan; Delay until the first execution of the task.; 10ms
    repeatDelay; utils::TimeSpan; Delay until subsequent executions of the task.; 1m
    **connect peers task for service Sync**; ; ;
    startDelay; utils::TimeSpan; Delay until the first execution of the task.; 10ms
    repeatDelay; utils::TimeSpan; Delay until subsequent executions of the task.; 1m
    **harvesting task**; ; ;
    startDelay; utils::TimeSpan; Delay until the first execution of the task.; 30s
    repeatDelay; utils::TimeSpan; Delay until subsequent executions of the task.; 1s
    **logging task**; ; ;
    startDelay; utils::TimeSpan; Delay until the first execution of the task.; 1m
    repeatDelay; utils::TimeSpan; Delay until subsequent executions of the task.; 10m
    **network chain height detection**; ; ;
    startDelay; utils::TimeSpan; Delay until the first execution of the task.; 1s
    repeatDelay; utils::TimeSpan; Delay until subsequent executions of the task.; 15s
    **node discovery peers task**; ; ;
    startDelay; utils::TimeSpan; Delay until the first execution of the task.; 1m
    minDelay; utils::TimeSpan; Minimum delay between task executions.; 1m
    maxDelay; utils::TimeSpan; Maximum delay between task executions.; 10m
    numPhaseOneRounds; uint32_t; Number of rounds before deceleration starts.; 10
    numTransitionRounds; uint32_t; Number of transition rounds from minimum to maximum delay.; 20
    **node discovery ping task**; ; ;
    startDelay; utils::TimeSpan; Delay until the first execution of the task.; 2m
    repeatDelay; utils::TimeSpan; Delay until subsequent executions of the task.; 5m
    **pull partial transactions task**; ; ;
    startDelay; utils::TimeSpan; Delay until the first execution of the task.; 10s
    repeatDelay; utils::TimeSpan; Delay until subsequent executions of the task.; 3s
    **pull unconfirmed transactions task**; ; ;
    startDelay; utils::TimeSpan; Delay until the first execution of the task.; 4s
    repeatDelay; utils::TimeSpan; Delay until subsequent executions of the task.; 3s
    **synchronizer task**; ; ;
    startDelay; utils::TimeSpan; Delay until the first execution of the task.; 3s
    repeatDelay; utils::TimeSpan; Delay until subsequent executions of the task.; 3s
    **time synchronization task**; ; ;
    startDelay; utils::TimeSpan; Delay until the first execution of the task.; 1m
    minDelay; utils::TimeSpan; Minimum delay between task executions.; 3m
    maxDelay; utils::TimeSpan; Maximum delay between task executions.; 180m
    numPhaseOneRounds; uint32_t; Number of rounds before deceleration starts.; 5
    numTransitionRounds; uint32_t; Number of transition rounds from minimum to maximum delay.; 10

config-timesync.properties
==========================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **timesynchronization**; ; ;
    maxNodes; uint8_t; Number of nodes that this node should communicate with during time synchronization.; 20

config-user.properties
======================

.. csv-table::
    :header: "Property", "Type", "Description", "Default"
    :delim: ;

    **account**; ; ;
    bootKey; string; Boot key.; 0000000000000000000000000000000000000000000000000000000000000000
    **storage**; ; ;
    dataDirectory; string; Data directory.; ../data
    pluginsDirectory; string; Plugins directory.; .

.. |catapult-server| raw:: html

   <a href="https://github.com/nemtech/catapult-server" target="_blank">Catapult Server</a>

.. |catapult-service-bootstrap| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap" target="_blank">Catapult Service Bootstrap</a>

.. |instructions| raw:: html

   <a href="https://github.com/nemtech/catapult-server/blob/master/BUILDING.md" target="_blank">instructions for Ubuntu</a>
