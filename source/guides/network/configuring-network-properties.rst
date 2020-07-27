:orphan:

.. post:: 30 Oct, 2019
    :category: Network
    :excerpt: 1
    :nocomments:

##############################
Configuring network properties
##############################

Customize the network configurable parameters.

The directory ``ruby/catapult-templates/peer_node/resources`` of the |catapult-service-bootstrap| repository comes with a set of files to configure the network.

The ``.properties`` files provided can be edited with any text editor before launching a network for the first time.

**********
Properties
**********

Find below the list of configurable properties.

.. _config-network-properties:

config-network.properties
=========================

.. csv-table::
    :header: "Property", "Type", "Description", "Default MIJIN_TEST", "Default TEST_NET"
    :delim: ;

    **network**; ; ; ;
    identifier; NetworkIdentifier; Network identifier.; mijin-test; public-test
    nodeEqualityStrategy; NodeIdentityEqualityStrategy; Node equality strategy.; host; host
    nemesisSignerPublicKey; Key; Nemesis public key.; B4F12E7C9F6946091E2CB8B6D3A12B50D17CCBBF646386EA27CE2946A7423DCF;
    generationHash; catapult::GenerationHash; Nemesis generation hash.; 57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6;
    epochAdjustment; utils::TimeSpan; Nemesis epoch time adjustment.; 1573430400s; 1573430400s
    **chain**; ; ; ;
    enableVerifiableState; bool; Set to true if block chain should calculate state hashes so that state is fully verifiable at each block.; true; true
    enableVerifiableReceipts; bool; Set to true if block chain should calculate receipts so that state changes are fully verifiable at each block.; true; true
    currencyMosaicId; MosaicId; Mosaic id used as primary chain currency.; 0x24F4'26B8'D549'3D4B;
    harvestingMosaicId; MosaicId; Mosaic id used to provide harvesting ability.; 0x1D9C'DC7E'218C'A88D;
    blockGenerationTargetTime; utils::TimeSpan; Targeted time between blocks.; 30s; 15s
    blockTimeSmoothingFactor; uint32_t; *Note*: A higher value makes the network more biased. *Note*: This can lower security because it will increase the influence of time relative to importance.; 3000; 3000
    blockFinalizationInterval; uint32_t; Number of blocks between successive finalization attempts.; 30;
    importanceGrouping; uint64_t; Number of blocks that should be treated as a group for importance purposes. *Note*: Importances will only be calculated at blocks that are multiples of this grouping number.; 39; 1433
    importanceActivityPercentage; uint8_t; Percentage of importance resulting from fee generation and beneficiary usage.; 5; 5
    maxRollbackBlocks; uint32_t; Maximum number of blocks that can be rolled back.; 40; 398
    maxDifficultyBlocks; uint32_t; Maximum number of blocks to use in a difficulty calculation.; 60; 60
    defaultDynamicFeeMultiplier; BlockFeeMultiplier; Default multiplier to use for dynamic fees.; 10'000; 1'000
    maxTransactionLifetime; utils::TimeSpan; Maximum lifetime a transaction can have before it expires.; 24h; 24h
    maxBlockFutureTime; utils::TimeSpan; Maximum future time of a block that can be accepted.; 500ms; 500ms
    initialCurrencyAtomicUnits; Amount; Initial currency atomic units available in the network.; 8'998'999'998'000'000; 7'831'975'436'000'000
    maxMosaicAtomicUnits; Amount; Maximum atomic units (total-supply * 10 ^ divisibility) of a mosaic allowed in the network.; 9'000'000'000'000'000; 9'000'000'000'000'000
    totalChainImportance; Importance; Total whole importance units available in the network.; 15'000'000; 7'831'975'436'000'000
    minHarvesterBalance; Amount; Minimum number of harvesting mosaic atomic units needed for an account to be eligible for harvesting.; 500; 10'000'000'000
    maxHarvesterBalance; Amount; Maximum number of harvesting mosaic atomic units needed for an account to be eligible for harvesting.; 4'000'000; 50'000'000'000'000
    minVoterBalance; Amount; Minimum number of harvesting mosaic atomic units needed for an account to be eligible for voting.; 50'000; 50'000
    maxVotingKeysPerAccount; uint8_t; Maximum number of voting keys that can be registered at once per account.; 3; 
    minVotingKeyLifetime; uint32_t; Minimum number of finalization rounds for which voting key can be registered.; 72;
    maxVotingKeyLifetime; uint32_t; Maximum number of finalization rounds for which voting key can be registered.; 26280;
    harvestBeneficiaryPercentage; uint8_t; Percentage of the harvested fee that is collected by the beneficiary account.; 10; 25
    harvestNetworkPercentage; uint8_t; Percentage of the harvested fee that is collected by the network.; 5; 5
    harvestNetworkFeeSinkAddress; Address; Address of the harvest network fee sink account.; SBPJ3LE4SF7Y25RCEC6MA5BXBP6W2TGB2XKMIDY;
    blockPruneInterval; uint32_t; Number of blocks between cache pruning.; 360; 360
    maxTransactionsPerBlock; uint32_t; Maximum number of transactions per block.; 200'000; 1'500
    **plugin:catapult.plugins.accountlink**; ; ; ;
    dummy; ; ; to trigger plugin load
    **plugin:catapult.plugins.aggregate**; ; ; ;
    maxTransactionsPerAggregate; uint32_t; Maximum number of transactions per aggregate.; 1'000; 1'000
    maxCosignaturesPerAggregate; uint8_t; Maximum number of cosignatures per aggregate.; 15; 25
    enableStrictCosignatureCheck; bool; Set to true if cosignatures must exactly match component signers. Set to false if cosignatures should be validated externally.; false; false
    enableBondedAggregateSupport; bool; Set to true if bonded aggregates should be allowed. Set to false if bonded aggregates should be rejected.; true; true
    maxBondedTransactionLifetime; utils::TimeSpan; Maximum lifetime a bonded transaction can have before it expires.; 48h; 48h
    **plugin:catapult.plugins.lockhash**; ; ; ;
    lockedFundsPerAggregate; Amount; Amount that has to be locked per aggregate in partial cache.; 10'000'000; 10'000'000
    maxHashLockDuration; utils::BlockSpan; Maximum number of blocks for which a hash lock can exist.; 2d; 2d
    **plugin:catapult.plugins.locksecret**; ; ;
    maxSecretLockDuration; utils::BlockSpan; Maximum number of blocks for which a secret lock can exist.; 30d; 30d
    minProofSize; uint16_t; Minimum size of a proof in bytes.; 1; 1
    maxProofSize; uint16_t; Maximum size of a proof in bytes.; 1000; 1000
    **plugin:catapult.plugins.metadata**; ; ; ;
    maxValueSize; uint16_t; Maximum metadata value size.; 1024; 1024
    **plugin:catapult.plugins.mosaic**; ; ; ;
    maxMosaicsPerAccount; uint16_t; Maximum number of mosaics that an account can own.; 10'000; 1'000
    maxMosaicDuration; utils::BlockSpan; Maximum mosaic duration.; 3650d; 3650d
    maxMosaicDivisibility; uint8_t; Maximum mosaic divisibility.; 6; 6
    mosaicRentalFeeSinkAddress; Address; Address of the mosaic rental fee sink account.; SDKDPA36TE53BO24FD4KA6OPGOUSEVOU3O5SIFI;
    mosaicRentalFee; Amount; Mosaic rental fee.; 500; 500
    **plugin:catapult.plugins.multisig**; ; ; ;
    maxMultisigDepth; uint8_t; Maximum number of multisig levels.; 3; 3
    maxCosignatoriesPerAccount; uint32_t; Maximum number of cosignatories per account.; 10; 25
    maxCosignedAccountsPerAccount; uint32_t; Maximum number of accounts a single account can cosign.; 5; 25
    **plugin:catapult.plugins.namespace**; ; ; ;
    maxNameSize; uint8_t; Maximum namespace name size.; 64; 64
    maxChildNamespaces; uint16_t; Maximum number of children for a root namespace.; 500; 256
    maxNamespaceDepth; uint8_t; Maximum namespace depth.; 3; 3
    minNamespaceDuration; utils::BlockSpan; Minimum namespace duration.; 1m; 30d
    maxNamespaceDuration; utils::BlockSpan; Maximum namespace duration.; 365d; 365d
    namespaceGracePeriodDuration; utils::BlockSpan; Grace period during which time only the previous owner can renew an expired namespace.; 2m; 30d
    reservedRootNamespaceNames; unordered_set<string>; Reserved root namespaces that cannot be claimed.; xem, nem, user, account, org, com, biz, net, edu, mil, gov, info; symbol, symbl, xym, xem, nem, user, account, org, com, biz, net, edu, mil, gov, info
    namespaceRentalFeeSinkAddress; Address; Address of the namespace rental fee sink account.; SDTZ23JBJZP3GTKKM2P6FYCMXS6RQYPB6R477TQ; 
    rootNamespaceRentalFeePerBlock; Amount; Root namespace rental fee per block.; 1; 1
    childNamespaceRentalFee; Amount; Child namespace rental fee.; 100; 100
    **plugin:catapult.plugins.restrictionaccount**; ; ; ;
    maxAccountRestrictionValues; uint16_t; Maximum number of account restriction values.; 512; 512
    **plugin:catapult.plugins.restrictionmosaic**; ; ; ;
    maxMosaicRestrictionValues; uint8_t; Maximum number of mosaic restriction values.; 20; 20
    **plugin:catapult.plugins.transfer**; ; ; ;
    maxMessageSize; uint16_t; Maximum transaction message size.; 1024; 1024

config-inflation.properties
===========================

.. csv-table::
    :header: "Property", "Type", "Description", "Default MIJIN_TEST"
    :delim: ;

    **inflation**; ; ;
    starting-at-height-1; ; ; 100
    starting-at-height-10000; ; ; 0

.. |catapult-service-bootstrap| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap" target="_blank">Catapult Service Bootstrap</a>
