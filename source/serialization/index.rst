#############
Serialization
#############

The `catbuffer schemas <https://github.com/symbol/symbol/tree/dev/catbuffer/schemas>`_ repository defines how the different Symbol entities type should be serialized (for example, Transactions). In combination with the catbuffer-generators project, developers can generate builder classes for a given set of programming languages.

.. raw:: html

   <style>.bs-sidenav ul ul ul > li {display: none;}</style>
   <div id="serialization">

Basic Types
***********

.. raw:: html

   <div class="big-table3">
   <div id="amount"><b>Amount</b></div>
   <div>8&nbsp;ubytes</div>
   <div class="description"><p>A quantity of mosaics in <a href="/concepts/mosaic.html#divisibility">absolute units</a>. <br/>It can only be positive or zero. Negative quantities must be indicated by other means (See for example <a href="/serialization#mosaicsupplychangetransactionv1" title="Change the total supply of a mosaic (V1, latest).">MosaicSupplyChangeTransactionV1</a> and <a href="/serialization#mosaicsupplychangeaction" title="Enumeration of mosaic supply change actions.">MosaicSupplyChangeAction</a>). </p></div>
   <div id="blockduration"><b>BlockDuration</b></div>
   <div>8&nbsp;ubytes</div>
   <div class="description"><p>A time lapse, expressed in number of blocks. </p></div>
   <div id="blockfeemultiplier"><b>BlockFeeMultiplier</b></div>
   <div>4&nbsp;ubytes</div>
   <div class="description"><p>Multiplier applied to the size of a transaction to obtain its fee, in <a href="/concepts/mosaic.html#divisibility">absolute units</a>. <br/>See the <a href="/concepts/fees.html">fees documentation</a>. </p></div>
   <div id="difficulty"><b>Difficulty</b></div>
   <div>8&nbsp;ubytes</div>
   <div class="description"><p>How hard it was to harvest this block. <br/>The initial value is 1e14 and it will remain like this as long as blocks are generated every <code class="docutils literal">blockGenerationTargetTime</code> seconds (<a href="/guides/network/configuring-network-properties.html">network property</a>). <br/>If blocks start taking more or less time than the configured value, the difficulty will be adjusted (in the range of 1e13 to 1e15) to try to hit the target time. <br/>See the <a href="/symbol-technicalref/main.pdf">Technical Reference</a> section 8.1. </p></div>
   <div id="finalizationepoch"><b>FinalizationEpoch</b></div>
   <div>4&nbsp;ubytes</div>
   <div class="description"><p>Index of a <a href="/concepts/block.html#finalization">finalization</a> epoch. <br/>The first epoch is number 1 and contains only the first block (the <a href="/concepts/block.html#block-creation">Nemesis</a> block). Epoch duration (in blocks) is defined by the <code class="docutils literal">votingSetGrouping</code> network property. </p></div>
   <div id="finalizationpoint"><b>FinalizationPoint</b></div>
   <div>4&nbsp;ubytes</div>
   <div class="description"><p>A particular point in time inside a <a href="/concepts/block.html#finalization">finalization</a> epoch. <br/>See the <a href="/symbol-technicalref/main.pdf">Technical Reference</a> section 15.2. </p></div>
   <div id="height"><b>Height</b></div>
   <div>8&nbsp;ubytes</div>
   <div class="description"><p>Index of a block in the blockchain. <br/>The first block (the <a href="/concepts/block.html#block-creation">Nemesis</a> block) has height 1 and each subsequent block increases height by 1. </p></div>
   <div id="importance"><b>Importance</b></div>
   <div>8&nbsp;ubytes</div>
   <div class="description"><p><a href="/concepts/consensus-algorithm.html#importance-score">Importance score</a> for an account. <br/>See also <a href="/serialization#importanceheight" title="Block height at which an Importance was calculated.">ImportanceHeight</a> and <a href="/serialization#importancesnapshot" title="temporal importance information">ImportanceSnapshot</a>. </p></div>
   <div id="importanceheight"><b>ImportanceHeight</b></div>
   <div>8&nbsp;ubytes</div>
   <div class="description"><p><a href="/serialization#block" title="binary layout for a block">Block</a> height at which an <a href="/serialization#importance" title="Importance score for an account.">Importance</a> was calculated. </p></div>
   <div id="unresolvedmosaicid"><b>UnresolvedMosaicId</b></div>
   <div>8&nbsp;ubytes</div>
   <div class="description"><p>Either a <a href="/serialization#mosaicid" title="A Mosaic identifier.">MosaicId</a> or a <a href="/serialization#namespaceid" title="">NamespaceId</a>. <br/>The <strong>most</strong>-significant bit of the first byte is 0 for <a href="/serialization#mosaicid" title="A Mosaic identifier.">MosaicId</a>'s and 1 for <a href="/serialization#namespaceid" title="">NamespaceId</a>'s. </p></div>
   <div id="mosaicid"><b>MosaicId</b></div>
   <div>8&nbsp;ubytes</div>
   <div class="description"><p>A <a href="/concepts/mosaic.html">Mosaic</a> identifier. </p></div>
   <div id="timestamp"><b>Timestamp</b></div>
   <div>8&nbsp;ubytes</div>
   <div class="description"><p>Number of milliseconds elapsed since the creation of the <a href="/concepts/block.html#block-creation">Nemesis</a> block. <br/>The Nemesis block creation time can be found in the <code class="docutils literal">epochAdjustment</code> field returned by the <a href="/symbol-openapi/v1.0.1/#operation/getNetworkProperties">/network/properties</a> REST endpoint. This is the number of seconds elapsed since the <a href="https://en.wikipedia.org/wiki/Unix_time">UNIX epoch</a> and it is always 1615853185 for Symbol's MAINNET. </p></div>
   <div id="unresolvedaddress"><b>UnresolvedAddress</b></div>
   <div>24&nbsp;ubytes</div>
   <div class="description"><p>Either an <a href="/serialization#address" title="An address identifies an account and is derived from its PublicKey.">Address</a> or a <a href="/serialization#namespaceid" title="">NamespaceId</a>. <br/>The <strong>least</strong>-significant bit of the first byte is 0 for Addresses and 1 for <a href="/serialization#namespaceid" title="">NamespaceId</a>'s. </p></div>
   <div id="address"><b>Address</b></div>
   <div>24&nbsp;ubytes</div>
   <div class="description"><p>An <a href="/concepts/cryptography.html#address">address</a> identifies an account and is derived from its <a href="/serialization#publickey" title="A 32-byte (256 bit) integer derived from a private key.">PublicKey</a>. </p></div>
   <div id="hash256"><b>Hash256</b></div>
   <div>32&nbsp;ubytes</div>
   <div class="description"><p>A 32-byte (256 bit) hash. <br/>The exact algorithm is unspecified as it can change depending on where it is used. </p></div>
   <div id="hash512"><b>Hash512</b></div>
   <div>64&nbsp;ubytes</div>
   <div class="description"><p>A 64-byte (512 bit) hash. <br/>The exact algorithm is unspecified as it can change depending on where it is used. </p></div>
   <div id="publickey"><b>PublicKey</b></div>
   <div>32&nbsp;ubytes</div>
   <div class="description"><p>A 32-byte (256 bit) integer derived from a private key. <br/>It serves as the public identifier of the <a href="/concepts/cryptography.html#key-pair">key pair</a> and can be disseminated widely. It is used to prove that an entity was signed with the paired private key. </p></div>
   <div id="votingpublickey"><b>VotingPublicKey</b></div>
   <div>32&nbsp;ubytes</div>
   <div class="description"><p>A <a href="/serialization#publickey" title="A 32-byte (256 bit) integer derived from a private key.">PublicKey</a> used for voting during the <a href="/concepts/block.html#finalization">finalization process</a>. </p></div>
   <div id="signature"><b>Signature</b></div>
   <div>64&nbsp;ubytes</div>
   <div class="description"><p>A 64-byte (512 bit) array certifying that the signed data has not been modified. <br/>Symbol currently uses <a href="https://ed25519.cr.yp.to/">Ed25519</a> signatures. </p></div>
   <div id="proofgamma"><b>ProofGamma</b></div>
   <div>32&nbsp;ubytes</div>
   <div class="description"></div>
   <div id="proofverificationhash"><b>ProofVerificationHash</b></div>
   <div>16&nbsp;ubytes</div>
   <div class="description"></div>
   <div id="proofscalar"><b>ProofScalar</b></div>
   <div>32&nbsp;ubytes</div>
   <div class="description"></div>
   <div id="namespaceid"><b>NamespaceId</b></div>
   <div>8&nbsp;ubytes</div>
   <div class="description"></div>
   <div id="mosaicnonce"><b>MosaicNonce</b></div>
   <div>4&nbsp;ubytes</div>
   <div class="description"></div>
   <div id="mosaicrestrictionkey"><b>MosaicRestrictionKey</b></div>
   <div>8&nbsp;ubytes</div>
   <div class="description"></div>
   <div id="scopedmetadatakey"><b>ScopedMetadataKey</b></div>
   <div>8&nbsp;ubytes</div>
   <div class="description"></div>
   </div>

Enumerations
************

.. _linkaction:

LinkAction
==========

.. raw:: html
   :file: LinkAction.html

.. _networktype:

NetworkType
===========

.. raw:: html
   :file: NetworkType.html

.. _transactiontype:

TransactionType
===============

.. raw:: html
   :file: TransactionType.html

.. _blocktype:

BlockType
=========

.. raw:: html
   :file: BlockType.html

.. _receipttype:

ReceiptType
===========

.. raw:: html
   :file: ReceiptType.html

.. _namespaceregistrationtype:

NamespaceRegistrationType
=========================

.. raw:: html
   :file: NamespaceRegistrationType.html

.. _aliasaction:

AliasAction
===========

.. raw:: html
   :file: AliasAction.html

.. _lockhashalgorithm:

LockHashAlgorithm
=================

.. raw:: html
   :file: LockHashAlgorithm.html

.. _mosaicflags:

MosaicFlags
===========

.. raw:: html
   :file: MosaicFlags.html

.. _mosaicsupplychangeaction:

MosaicSupplyChangeAction
========================

.. raw:: html
   :file: MosaicSupplyChangeAction.html

.. _accountrestrictionflags:

AccountRestrictionFlags
=======================

.. raw:: html
   :file: AccountRestrictionFlags.html

.. _mosaicrestrictiontype:

MosaicRestrictionType
=====================

.. raw:: html
   :file: MosaicRestrictionType.html

.. _accounttype:

AccountType
===========

.. raw:: html
   :file: AccountType.html

.. _accountkeytypeflags:

AccountKeyTypeFlags
===================

.. raw:: html
   :file: AccountKeyTypeFlags.html

.. _accountstateformat:

AccountStateFormat
==================

.. raw:: html
   :file: AccountStateFormat.html

.. _lockstatus:

LockStatus
==========

.. raw:: html
   :file: LockStatus.html

.. _metadatatype:

MetadataType
============

.. raw:: html
   :file: MetadataType.html

.. _namespacealiastype:

NamespaceAliasType
==================

.. raw:: html
   :file: NamespaceAliasType.html

.. _mosaicrestrictionentrytype:

MosaicRestrictionEntryType
==========================

.. raw:: html
   :file: MosaicRestrictionEntryType.html

Structures
**********

.. _mosaic:

Mosaic
======

.. raw:: html
   :file: Mosaic.html

.. _unresolvedmosaic:

UnresolvedMosaic
================

.. raw:: html
   :file: UnresolvedMosaic.html

.. _transaction:

Transaction
===========

.. raw:: html
   :file: Transaction.html

.. _embeddedtransaction:

EmbeddedTransaction
===================

.. raw:: html
   :file: EmbeddedTransaction.html

.. _vrfproof:

VrfProof
========

.. raw:: html
   :file: VrfProof.html

.. _block:

Block
=====

.. raw:: html
   :file: Block.html

.. _nemesisblockv1:
.. _nemesisblock:

NemesisBlockV1
==============

.. raw:: html
   :file: NemesisBlockV1.html

.. _normalblockv1:
.. _normalblock:

NormalBlockV1
=============

.. raw:: html
   :file: NormalBlockV1.html

.. _importanceblockv1:
.. _importanceblock:

ImportanceBlockV1
=================

.. raw:: html
   :file: ImportanceBlockV1.html

.. _finalizationround:

FinalizationRound
=================

.. raw:: html
   :file: FinalizationRound.html

.. _finalizedblockheader:

FinalizedBlockHeader
====================

.. raw:: html
   :file: FinalizedBlockHeader.html

.. _receipt:

Receipt
=======

.. raw:: html
   :file: Receipt.html

.. _harvestfeereceipt:

HarvestFeeReceipt
=================

.. raw:: html
   :file: HarvestFeeReceipt.html

.. _inflationreceipt:

InflationReceipt
================

.. raw:: html
   :file: InflationReceipt.html

.. _lockhashcreatedfeereceipt:

LockHashCreatedFeeReceipt
=========================

.. raw:: html
   :file: LockHashCreatedFeeReceipt.html

.. _lockhashcompletedfeereceipt:

LockHashCompletedFeeReceipt
===========================

.. raw:: html
   :file: LockHashCompletedFeeReceipt.html

.. _lockhashexpiredfeereceipt:

LockHashExpiredFeeReceipt
=========================

.. raw:: html
   :file: LockHashExpiredFeeReceipt.html

.. _locksecretcreatedfeereceipt:

LockSecretCreatedFeeReceipt
===========================

.. raw:: html
   :file: LockSecretCreatedFeeReceipt.html

.. _locksecretcompletedfeereceipt:

LockSecretCompletedFeeReceipt
=============================

.. raw:: html
   :file: LockSecretCompletedFeeReceipt.html

.. _locksecretexpiredfeereceipt:

LockSecretExpiredFeeReceipt
===========================

.. raw:: html
   :file: LockSecretExpiredFeeReceipt.html

.. _mosaicexpiredreceipt:

MosaicExpiredReceipt
====================

.. raw:: html
   :file: MosaicExpiredReceipt.html

.. _mosaicrentalfeereceipt:

MosaicRentalFeeReceipt
======================

.. raw:: html
   :file: MosaicRentalFeeReceipt.html

.. _namespaceexpiredreceipt:

NamespaceExpiredReceipt
=======================

.. raw:: html
   :file: NamespaceExpiredReceipt.html

.. _namespacedeletedreceipt:

NamespaceDeletedReceipt
=======================

.. raw:: html
   :file: NamespaceDeletedReceipt.html

.. _namespacerentalfeereceipt:

NamespaceRentalFeeReceipt
=========================

.. raw:: html
   :file: NamespaceRentalFeeReceipt.html

.. _receiptsource:

ReceiptSource
=============

.. raw:: html
   :file: ReceiptSource.html

.. _addressresolutionentry:

AddressResolutionEntry
======================

.. raw:: html
   :file: AddressResolutionEntry.html

.. _addressresolutionstatement:

AddressResolutionStatement
==========================

.. raw:: html
   :file: AddressResolutionStatement.html

.. _mosaicresolutionentry:

MosaicResolutionEntry
=====================

.. raw:: html
   :file: MosaicResolutionEntry.html

.. _mosaicresolutionstatement:

MosaicResolutionStatement
=========================

.. raw:: html
   :file: MosaicResolutionStatement.html

.. _transactionstatement:

TransactionStatement
====================

.. raw:: html
   :file: TransactionStatement.html

.. _blockstatement:

BlockStatement
==============

.. raw:: html
   :file: BlockStatement.html

.. _accountkeylinktransactionv1:
.. _accountkeylinktransaction:

AccountKeyLinkTransactionV1
===========================

.. raw:: html
   :file: AccountKeyLinkTransactionV1.html

.. _embeddedaccountkeylinktransactionv1:
.. _embeddedaccountkeylinktransaction:

EmbeddedAccountKeyLinkTransactionV1
===================================

.. raw:: html
   :file: EmbeddedAccountKeyLinkTransactionV1.html

.. _nodekeylinktransactionv1:
.. _nodekeylinktransaction:

NodeKeyLinkTransactionV1
========================

.. raw:: html
   :file: NodeKeyLinkTransactionV1.html

.. _embeddednodekeylinktransactionv1:
.. _embeddednodekeylinktransaction:

EmbeddedNodeKeyLinkTransactionV1
================================

.. raw:: html
   :file: EmbeddedNodeKeyLinkTransactionV1.html

.. _cosignature:

Cosignature
===========

.. raw:: html
   :file: Cosignature.html

.. _detachedcosignature:

DetachedCosignature
===================

.. raw:: html
   :file: DetachedCosignature.html

.. _aggregatecompletetransactionv1:
.. _aggregatecompletetransaction:

AggregateCompleteTransactionV1
==============================

.. raw:: html
   :file: AggregateCompleteTransactionV1.html

.. _aggregatecompletetransactionv2:

AggregateCompleteTransactionV2
==============================

.. raw:: html
   :file: AggregateCompleteTransactionV2.html

.. _aggregatecompletetransactionv3:

AggregateCompleteTransactionV3
==============================

.. raw:: html
   :file: AggregateCompleteTransactionV3.html

.. _aggregatebondedtransactionv1:
.. _aggregatebondedtransaction:

AggregateBondedTransactionV1
============================

.. raw:: html
   :file: AggregateBondedTransactionV1.html

.. _aggregatebondedtransactionv2:

AggregateBondedTransactionV2
============================

.. raw:: html
   :file: AggregateBondedTransactionV2.html

.. _aggregatebondedtransactionv3:

AggregateBondedTransactionV3
============================

.. raw:: html
   :file: AggregateBondedTransactionV3.html

.. _votingkeylinktransactionv1:
.. _votingkeylinktransaction:

VotingKeyLinkTransactionV1
==========================

.. raw:: html
   :file: VotingKeyLinkTransactionV1.html

.. _embeddedvotingkeylinktransactionv1:
.. _embeddedvotingkeylinktransaction:

EmbeddedVotingKeyLinkTransactionV1
==================================

.. raw:: html
   :file: EmbeddedVotingKeyLinkTransactionV1.html

.. _vrfkeylinktransactionv1:
.. _vrfkeylinktransaction:

VrfKeyLinkTransactionV1
=======================

.. raw:: html
   :file: VrfKeyLinkTransactionV1.html

.. _embeddedvrfkeylinktransactionv1:
.. _embeddedvrfkeylinktransaction:

EmbeddedVrfKeyLinkTransactionV1
===============================

.. raw:: html
   :file: EmbeddedVrfKeyLinkTransactionV1.html

.. _hashlocktransactionv1:
.. _hashlocktransaction:

HashLockTransactionV1
=====================

.. raw:: html
   :file: HashLockTransactionV1.html

.. _embeddedhashlocktransactionv1:
.. _embeddedhashlocktransaction:

EmbeddedHashLockTransactionV1
=============================

.. raw:: html
   :file: EmbeddedHashLockTransactionV1.html

.. _secretlocktransactionv1:
.. _secretlocktransaction:

SecretLockTransactionV1
=======================

.. raw:: html
   :file: SecretLockTransactionV1.html

.. _embeddedsecretlocktransactionv1:
.. _embeddedsecretlocktransaction:

EmbeddedSecretLockTransactionV1
===============================

.. raw:: html
   :file: EmbeddedSecretLockTransactionV1.html

.. _secretprooftransactionv1:
.. _secretprooftransaction:

SecretProofTransactionV1
========================

.. raw:: html
   :file: SecretProofTransactionV1.html

.. _embeddedsecretprooftransactionv1:
.. _embeddedsecretprooftransaction:

EmbeddedSecretProofTransactionV1
================================

.. raw:: html
   :file: EmbeddedSecretProofTransactionV1.html

.. _accountmetadatatransactionv1:
.. _accountmetadatatransaction:

AccountMetadataTransactionV1
============================

.. raw:: html
   :file: AccountMetadataTransactionV1.html

.. _embeddedaccountmetadatatransactionv1:
.. _embeddedaccountmetadatatransaction:

EmbeddedAccountMetadataTransactionV1
====================================

.. raw:: html
   :file: EmbeddedAccountMetadataTransactionV1.html

.. _mosaicmetadatatransactionv1:
.. _mosaicmetadatatransaction:

MosaicMetadataTransactionV1
===========================

.. raw:: html
   :file: MosaicMetadataTransactionV1.html

.. _embeddedmosaicmetadatatransactionv1:
.. _embeddedmosaicmetadatatransaction:

EmbeddedMosaicMetadataTransactionV1
===================================

.. raw:: html
   :file: EmbeddedMosaicMetadataTransactionV1.html

.. _namespacemetadatatransactionv1:
.. _namespacemetadatatransaction:

NamespaceMetadataTransactionV1
==============================

.. raw:: html
   :file: NamespaceMetadataTransactionV1.html

.. _embeddednamespacemetadatatransactionv1:
.. _embeddednamespacemetadatatransaction:

EmbeddedNamespaceMetadataTransactionV1
======================================

.. raw:: html
   :file: EmbeddedNamespaceMetadataTransactionV1.html

.. _mosaicdefinitiontransactionv1:
.. _mosaicdefinitiontransaction:

MosaicDefinitionTransactionV1
=============================

.. raw:: html
   :file: MosaicDefinitionTransactionV1.html

.. _embeddedmosaicdefinitiontransactionv1:
.. _embeddedmosaicdefinitiontransaction:

EmbeddedMosaicDefinitionTransactionV1
=====================================

.. raw:: html
   :file: EmbeddedMosaicDefinitionTransactionV1.html

.. _mosaicsupplychangetransactionv1:
.. _mosaicsupplychangetransaction:

MosaicSupplyChangeTransactionV1
===============================

.. raw:: html
   :file: MosaicSupplyChangeTransactionV1.html

.. _embeddedmosaicsupplychangetransactionv1:
.. _embeddedmosaicsupplychangetransaction:

EmbeddedMosaicSupplyChangeTransactionV1
=======================================

.. raw:: html
   :file: EmbeddedMosaicSupplyChangeTransactionV1.html

.. _mosaicsupplyrevocationtransactionv1:
.. _mosaicsupplyrevocationtransaction:

MosaicSupplyRevocationTransactionV1
===================================

.. raw:: html
   :file: MosaicSupplyRevocationTransactionV1.html

.. _embeddedmosaicsupplyrevocationtransactionv1:
.. _embeddedmosaicsupplyrevocationtransaction:

EmbeddedMosaicSupplyRevocationTransactionV1
===========================================

.. raw:: html
   :file: EmbeddedMosaicSupplyRevocationTransactionV1.html

.. _multisigaccountmodificationtransactionv1:
.. _multisigaccountmodificationtransaction:

MultisigAccountModificationTransactionV1
========================================

.. raw:: html
   :file: MultisigAccountModificationTransactionV1.html

.. _embeddedmultisigaccountmodificationtransactionv1:
.. _embeddedmultisigaccountmodificationtransaction:

EmbeddedMultisigAccountModificationTransactionV1
================================================

.. raw:: html
   :file: EmbeddedMultisigAccountModificationTransactionV1.html

.. _addressaliastransactionv1:
.. _addressaliastransaction:

AddressAliasTransactionV1
=========================

.. raw:: html
   :file: AddressAliasTransactionV1.html

.. _embeddedaddressaliastransactionv1:
.. _embeddedaddressaliastransaction:

EmbeddedAddressAliasTransactionV1
=================================

.. raw:: html
   :file: EmbeddedAddressAliasTransactionV1.html

.. _mosaicaliastransactionv1:
.. _mosaicaliastransaction:

MosaicAliasTransactionV1
========================

.. raw:: html
   :file: MosaicAliasTransactionV1.html

.. _embeddedmosaicaliastransactionv1:
.. _embeddedmosaicaliastransaction:

EmbeddedMosaicAliasTransactionV1
================================

.. raw:: html
   :file: EmbeddedMosaicAliasTransactionV1.html

.. _namespaceregistrationtransactionv1:
.. _namespaceregistrationtransaction:

NamespaceRegistrationTransactionV1
==================================

.. raw:: html
   :file: NamespaceRegistrationTransactionV1.html

.. _embeddednamespaceregistrationtransactionv1:
.. _embeddednamespaceregistrationtransaction:

EmbeddedNamespaceRegistrationTransactionV1
==========================================

.. raw:: html
   :file: EmbeddedNamespaceRegistrationTransactionV1.html

.. _accountaddressrestrictiontransactionv1:
.. _accountaddressrestrictiontransaction:

AccountAddressRestrictionTransactionV1
======================================

.. raw:: html
   :file: AccountAddressRestrictionTransactionV1.html

.. _embeddedaccountaddressrestrictiontransactionv1:
.. _embeddedaccountaddressrestrictiontransaction:

EmbeddedAccountAddressRestrictionTransactionV1
==============================================

.. raw:: html
   :file: EmbeddedAccountAddressRestrictionTransactionV1.html

.. _accountmosaicrestrictiontransactionv1:
.. _accountmosaicrestrictiontransaction:

AccountMosaicRestrictionTransactionV1
=====================================

.. raw:: html
   :file: AccountMosaicRestrictionTransactionV1.html

.. _embeddedaccountmosaicrestrictiontransactionv1:
.. _embeddedaccountmosaicrestrictiontransaction:

EmbeddedAccountMosaicRestrictionTransactionV1
=============================================

.. raw:: html
   :file: EmbeddedAccountMosaicRestrictionTransactionV1.html

.. _accountoperationrestrictiontransactionv1:
.. _accountoperationrestrictiontransaction:

AccountOperationRestrictionTransactionV1
========================================

.. raw:: html
   :file: AccountOperationRestrictionTransactionV1.html

.. _embeddedaccountoperationrestrictiontransactionv1:
.. _embeddedaccountoperationrestrictiontransaction:

EmbeddedAccountOperationRestrictionTransactionV1
================================================

.. raw:: html
   :file: EmbeddedAccountOperationRestrictionTransactionV1.html

.. _mosaicaddressrestrictiontransactionv1:
.. _mosaicaddressrestrictiontransaction:

MosaicAddressRestrictionTransactionV1
=====================================

.. raw:: html
   :file: MosaicAddressRestrictionTransactionV1.html

.. _embeddedmosaicaddressrestrictiontransactionv1:
.. _embeddedmosaicaddressrestrictiontransaction:

EmbeddedMosaicAddressRestrictionTransactionV1
=============================================

.. raw:: html
   :file: EmbeddedMosaicAddressRestrictionTransactionV1.html

.. _mosaicglobalrestrictiontransactionv1:
.. _mosaicglobalrestrictiontransaction:

MosaicGlobalRestrictionTransactionV1
====================================

.. raw:: html
   :file: MosaicGlobalRestrictionTransactionV1.html

.. _embeddedmosaicglobalrestrictiontransactionv1:
.. _embeddedmosaicglobalrestrictiontransaction:

EmbeddedMosaicGlobalRestrictionTransactionV1
============================================

.. raw:: html
   :file: EmbeddedMosaicGlobalRestrictionTransactionV1.html

.. _transfertransactionv1:
.. _transfertransaction:

TransferTransactionV1
=====================

.. raw:: html
   :file: TransferTransactionV1.html

.. _embeddedtransfertransactionv1:
.. _embeddedtransfertransaction:

EmbeddedTransferTransactionV1
=============================

.. raw:: html
   :file: EmbeddedTransferTransactionV1.html

.. _pinnedvotingkey:

PinnedVotingKey
===============

.. raw:: html
   :file: PinnedVotingKey.html

.. _importancesnapshot:

ImportanceSnapshot
==================

.. raw:: html
   :file: ImportanceSnapshot.html

.. _heightactivitybucket:

HeightActivityBucket
====================

.. raw:: html
   :file: HeightActivityBucket.html

.. _heightactivitybuckets:

HeightActivityBuckets
=====================

.. raw:: html
   :file: HeightActivityBuckets.html

.. _accountstate:

AccountState
============

.. raw:: html
   :file: AccountState.html

.. _hashlockinfo:

HashLockInfo
============

.. raw:: html
   :file: HashLockInfo.html

.. _metadatavalue:

MetadataValue
=============

.. raw:: html
   :file: MetadataValue.html

.. _metadataentry:

MetadataEntry
=============

.. raw:: html
   :file: MetadataEntry.html

.. _mosaicproperties:

MosaicProperties
================

.. raw:: html
   :file: MosaicProperties.html

.. _mosaicdefinition:

MosaicDefinition
================

.. raw:: html
   :file: MosaicDefinition.html

.. _mosaicentry:

MosaicEntry
===========

.. raw:: html
   :file: MosaicEntry.html

.. _multisigentry:

MultisigEntry
=============

.. raw:: html
   :file: MultisigEntry.html

.. _namespacelifetime:

NamespaceLifetime
=================

.. raw:: html
   :file: NamespaceLifetime.html

.. _namespacealias:

NamespaceAlias
==============

.. raw:: html
   :file: NamespaceAlias.html

.. _namespacepath:

NamespacePath
=============

.. raw:: html
   :file: NamespacePath.html

.. _rootnamespacehistory:

RootNamespaceHistory
====================

.. raw:: html
   :file: RootNamespaceHistory.html

.. _accountrestrictionaddressvalue:

AccountRestrictionAddressValue
==============================

.. raw:: html
   :file: AccountRestrictionAddressValue.html

.. _accountrestrictionmosaicvalue:

AccountRestrictionMosaicValue
=============================

.. raw:: html
   :file: AccountRestrictionMosaicValue.html

.. _accountrestrictiontransactiontypevalue:

AccountRestrictionTransactionTypeValue
======================================

.. raw:: html
   :file: AccountRestrictionTransactionTypeValue.html

.. _accountrestrictionsinfo:

AccountRestrictionsInfo
=======================

.. raw:: html
   :file: AccountRestrictionsInfo.html

.. _accountrestrictions:

AccountRestrictions
===================

.. raw:: html
   :file: AccountRestrictions.html

.. _addresskeyvalue:

AddressKeyValue
===============

.. raw:: html
   :file: AddressKeyValue.html

.. _addresskeyvalueset:

AddressKeyValueSet
==================

.. raw:: html
   :file: AddressKeyValueSet.html

.. _restrictionrule:

RestrictionRule
===============

.. raw:: html
   :file: RestrictionRule.html

.. _globalkeyvalue:

GlobalKeyValue
==============

.. raw:: html
   :file: GlobalKeyValue.html

.. _globalkeyvalueset:

GlobalKeyValueSet
=================

.. raw:: html
   :file: GlobalKeyValueSet.html

.. _mosaicaddressrestrictionentry:

MosaicAddressRestrictionEntry
=============================

.. raw:: html
   :file: MosaicAddressRestrictionEntry.html

.. _mosaicglobalrestrictionentry:

MosaicGlobalRestrictionEntry
============================

.. raw:: html
   :file: MosaicGlobalRestrictionEntry.html

.. _mosaicrestrictionentry:

MosaicRestrictionEntry
======================

.. raw:: html
   :file: MosaicRestrictionEntry.html

.. _secretlockinfo:

SecretLockInfo
==============

.. raw:: html
   :file: SecretLockInfo.html

Inner Structures
****************

These are structures only meant to be included inside other structures.
Their description is already present in the containing structures above and is only repeated here for completeness.

.. raw:: html

   </div>
