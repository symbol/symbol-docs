#############
Serialization
#############

The `catbuffer schemas <https://github.com/symbol/symbol/tree/dev/catbuffer/schemas>`_ repository defines how the different Symbol
entities type should be serialized (for example, Transactions). In combination with the catbuffer generators project, developers can
generate builder classes for a given set of programming languages.

.. raw:: html

   <style>.bs-sidenav ul ul ul > li {display: none;}</style>
   <div id="serialization">

Basic Types
***********

.. raw:: html

   <div class="big-table3">
   <div id="amount"><b>Amount</b></div>
   <div>8&nbsp;ubytes</div>
   <div class="description"><p>A quantity of mosaics in <a href="/concepts/mosaic.html#divisibility">absolute units</a>. <br/>It can only be positive or zero. Negative quantities must be indicated by other means (See for example <a href="/serialization#mosaicsupplychangetransaction" title="Change the total supply of a mosaic.">MosaicSupplyChangeTransaction</a> and <a href="/serialization#mosaicsupplychangeaction" title="Enumeration of mosaic supply change actions.">MosaicSupplyChangeAction</a>). </p></div>
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
   <div class="description"><p>Block height at which an <a href="/serialization#importance" title="Importance score for an account.">Importance</a> was calculated. </p></div>
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
   <div id="scopedmetadatakey"><b>ScopedMetadataKey</b></div>
   <div>8&nbsp;ubytes</div>
   <div class="description"></div>
   <div id="mosaicnonce"><b>MosaicNonce</b></div>
   <div>4&nbsp;ubytes</div>
   <div class="description"></div>
   <div id="mosaicrestrictionkey"><b>MosaicRestrictionKey</b></div>
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

.. _namespacealiastype:

NamespaceAliasType
==================

.. raw:: html
   :file: NamespaceAliasType.html

.. _accountrestrictionflags:

AccountRestrictionFlags
=======================

.. raw:: html
   :file: AccountRestrictionFlags.html

.. _transactiontype:

TransactionType
===============

.. raw:: html
   :file: TransactionType.html

.. _mosaicrestrictiontype:

MosaicRestrictionType
=====================

.. raw:: html
   :file: MosaicRestrictionType.html

.. _mosaicrestrictionentrytype:

MosaicRestrictionEntryType
==========================

.. raw:: html
   :file: MosaicRestrictionEntryType.html

.. _lockhashalgorithm:

LockHashAlgorithm
=================

.. raw:: html
   :file: LockHashAlgorithm.html

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

.. _vrfproof:

VrfProof
========

.. raw:: html
   :file: VrfProof.html

.. _nemesisblockheader:

NemesisBlockHeader
==================

.. raw:: html
   :file: NemesisBlockHeader.html

.. _normalblockheader:

NormalBlockHeader
=================

.. raw:: html
   :file: NormalBlockHeader.html

.. _importanceblockheader:

ImportanceBlockHeader
=====================

.. raw:: html
   :file: ImportanceBlockHeader.html

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

.. _balancetransferreceipt:

BalanceTransferReceipt
======================

.. raw:: html
   :file: BalanceTransferReceipt.html

.. _balancechangereceipt:

BalanceChangeReceipt
====================

.. raw:: html
   :file: BalanceChangeReceipt.html

.. _inflationreceipt:

InflationReceipt
================

.. raw:: html
   :file: InflationReceipt.html

.. _mosaicexpiryreceipt:

MosaicExpiryReceipt
===================

.. raw:: html
   :file: MosaicExpiryReceipt.html

.. _namespaceexpiryreceipt:

NamespaceExpiryReceipt
======================

.. raw:: html
   :file: NamespaceExpiryReceipt.html

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

.. _addressresolutionstatement:

AddressResolutionStatement
==========================

.. raw:: html
   :file: AddressResolutionStatement.html

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

.. _accountkeylinktransaction:

AccountKeyLinkTransaction
=========================

.. raw:: html
   :file: AccountKeyLinkTransaction.html

.. _embeddedaccountkeylinktransaction:

EmbeddedAccountKeyLinkTransaction
=================================

.. raw:: html
   :file: EmbeddedAccountKeyLinkTransaction.html

.. _nodekeylinktransaction:

NodeKeyLinkTransaction
======================

.. raw:: html
   :file: NodeKeyLinkTransaction.html

.. _embeddednodekeylinktransaction:

EmbeddedNodeKeyLinkTransaction
==============================

.. raw:: html
   :file: EmbeddedNodeKeyLinkTransaction.html

.. _detachedcosignature:

DetachedCosignature
===================

.. raw:: html
   :file: DetachedCosignature.html

.. _aggregatecompletetransaction:

AggregateCompleteTransaction
============================

.. raw:: html
   :file: AggregateCompleteTransaction.html

.. _aggregatebondedtransaction:

AggregateBondedTransaction
==========================

.. raw:: html
   :file: AggregateBondedTransaction.html

.. _votingkeylinktransaction:

VotingKeyLinkTransaction
========================

.. raw:: html
   :file: VotingKeyLinkTransaction.html

.. _embeddedvotingkeylinktransaction:

EmbeddedVotingKeyLinkTransaction
================================

.. raw:: html
   :file: EmbeddedVotingKeyLinkTransaction.html

.. _vrfkeylinktransaction:

VrfKeyLinkTransaction
=====================

.. raw:: html
   :file: VrfKeyLinkTransaction.html

.. _embeddedvrfkeylinktransaction:

EmbeddedVrfKeyLinkTransaction
=============================

.. raw:: html
   :file: EmbeddedVrfKeyLinkTransaction.html

.. _hashlocktransaction:

HashLockTransaction
===================

.. raw:: html
   :file: HashLockTransaction.html

.. _embeddedhashlocktransaction:

EmbeddedHashLockTransaction
===========================

.. raw:: html
   :file: EmbeddedHashLockTransaction.html

.. _secretlocktransaction:

SecretLockTransaction
=====================

.. raw:: html
   :file: SecretLockTransaction.html

.. _embeddedsecretlocktransaction:

EmbeddedSecretLockTransaction
=============================

.. raw:: html
   :file: EmbeddedSecretLockTransaction.html

.. _secretprooftransaction:

SecretProofTransaction
======================

.. raw:: html
   :file: SecretProofTransaction.html

.. _embeddedsecretprooftransaction:

EmbeddedSecretProofTransaction
==============================

.. raw:: html
   :file: EmbeddedSecretProofTransaction.html

.. _accountmetadatatransaction:

AccountMetadataTransaction
==========================

.. raw:: html
   :file: AccountMetadataTransaction.html

.. _embeddedaccountmetadatatransaction:

EmbeddedAccountMetadataTransaction
==================================

.. raw:: html
   :file: EmbeddedAccountMetadataTransaction.html

.. _mosaicmetadatatransaction:

MosaicMetadataTransaction
=========================

.. raw:: html
   :file: MosaicMetadataTransaction.html

.. _embeddedmosaicmetadatatransaction:

EmbeddedMosaicMetadataTransaction
=================================

.. raw:: html
   :file: EmbeddedMosaicMetadataTransaction.html

.. _namespacemetadatatransaction:

NamespaceMetadataTransaction
============================

.. raw:: html
   :file: NamespaceMetadataTransaction.html

.. _embeddednamespacemetadatatransaction:

EmbeddedNamespaceMetadataTransaction
====================================

.. raw:: html
   :file: EmbeddedNamespaceMetadataTransaction.html

.. _mosaicdefinitiontransaction:

MosaicDefinitionTransaction
===========================

.. raw:: html
   :file: MosaicDefinitionTransaction.html

.. _embeddedmosaicdefinitiontransaction:

EmbeddedMosaicDefinitionTransaction
===================================

.. raw:: html
   :file: EmbeddedMosaicDefinitionTransaction.html

.. _mosaicsupplychangetransaction:

MosaicSupplyChangeTransaction
=============================

.. raw:: html
   :file: MosaicSupplyChangeTransaction.html

.. _embeddedmosaicsupplychangetransaction:

EmbeddedMosaicSupplyChangeTransaction
=====================================

.. raw:: html
   :file: EmbeddedMosaicSupplyChangeTransaction.html

.. _mosaicsupplyrevocationtransaction:

MosaicSupplyRevocationTransaction
=================================

.. raw:: html
   :file: MosaicSupplyRevocationTransaction.html

.. _embeddedmosaicsupplyrevocationtransaction:

EmbeddedMosaicSupplyRevocationTransaction
=========================================

.. raw:: html
   :file: EmbeddedMosaicSupplyRevocationTransaction.html

.. _multisigaccountmodificationtransaction:

MultisigAccountModificationTransaction
======================================

.. raw:: html
   :file: MultisigAccountModificationTransaction.html

.. _embeddedmultisigaccountmodificationtransaction:

EmbeddedMultisigAccountModificationTransaction
==============================================

.. raw:: html
   :file: EmbeddedMultisigAccountModificationTransaction.html

.. _addressaliastransaction:

AddressAliasTransaction
=======================

.. raw:: html
   :file: AddressAliasTransaction.html

.. _embeddedaddressaliastransaction:

EmbeddedAddressAliasTransaction
===============================

.. raw:: html
   :file: EmbeddedAddressAliasTransaction.html

.. _mosaicaliastransaction:

MosaicAliasTransaction
======================

.. raw:: html
   :file: MosaicAliasTransaction.html

.. _embeddedmosaicaliastransaction:

EmbeddedMosaicAliasTransaction
==============================

.. raw:: html
   :file: EmbeddedMosaicAliasTransaction.html

.. _namespaceregistrationtransaction:

NamespaceRegistrationTransaction
================================

.. raw:: html
   :file: NamespaceRegistrationTransaction.html

.. _embeddednamespaceregistrationtransaction:

EmbeddedNamespaceRegistrationTransaction
========================================

.. raw:: html
   :file: EmbeddedNamespaceRegistrationTransaction.html

.. _accountaddressrestrictiontransaction:

AccountAddressRestrictionTransaction
====================================

.. raw:: html
   :file: AccountAddressRestrictionTransaction.html

.. _embeddedaccountaddressrestrictiontransaction:

EmbeddedAccountAddressRestrictionTransaction
============================================

.. raw:: html
   :file: EmbeddedAccountAddressRestrictionTransaction.html

.. _accountmosaicrestrictiontransaction:

AccountMosaicRestrictionTransaction
===================================

.. raw:: html
   :file: AccountMosaicRestrictionTransaction.html

.. _embeddedaccountmosaicrestrictiontransaction:

EmbeddedAccountMosaicRestrictionTransaction
===========================================

.. raw:: html
   :file: EmbeddedAccountMosaicRestrictionTransaction.html

.. _accountoperationrestrictiontransaction:

AccountOperationRestrictionTransaction
======================================

.. raw:: html
   :file: AccountOperationRestrictionTransaction.html

.. _embeddedaccountoperationrestrictiontransaction:

EmbeddedAccountOperationRestrictionTransaction
==============================================

.. raw:: html
   :file: EmbeddedAccountOperationRestrictionTransaction.html

.. _mosaicaddressrestrictiontransaction:

MosaicAddressRestrictionTransaction
===================================

.. raw:: html
   :file: MosaicAddressRestrictionTransaction.html

.. _embeddedmosaicaddressrestrictiontransaction:

EmbeddedMosaicAddressRestrictionTransaction
===========================================

.. raw:: html
   :file: EmbeddedMosaicAddressRestrictionTransaction.html

.. _mosaicglobalrestrictiontransaction:

MosaicGlobalRestrictionTransaction
==================================

.. raw:: html
   :file: MosaicGlobalRestrictionTransaction.html

.. _embeddedmosaicglobalrestrictiontransaction:

EmbeddedMosaicGlobalRestrictionTransaction
==========================================

.. raw:: html
   :file: EmbeddedMosaicGlobalRestrictionTransaction.html

.. _transfertransaction:

TransferTransaction
===================

.. raw:: html
   :file: TransferTransaction.html

.. _embeddedtransfertransaction:

EmbeddedTransferTransaction
===========================

.. raw:: html
   :file: EmbeddedTransferTransaction.html

Inner Structures
****************

These are structures only meant to be included inside other structures.
Their description is already present in the containing structures above and is only repeated here for completeness.

.. _sizeprefixedentity:

SizePrefixedEntity
==================

.. raw:: html
   :file: SizePrefixedEntity.html

.. _verifiableentity:

VerifiableEntity
================

.. raw:: html
   :file: VerifiableEntity.html

.. _entitybody:

EntityBody
==========

.. raw:: html
   :file: EntityBody.html

.. _blockheader:

BlockHeader
===========

.. raw:: html
   :file: BlockHeader.html

.. _importanceblockfooter:

ImportanceBlockFooter
=====================

.. raw:: html
   :file: ImportanceBlockFooter.html

.. _receipt:

Receipt
=======

.. raw:: html
   :file: Receipt.html

.. _stateheader:

StateHeader
===========

.. raw:: html
   :file: StateHeader.html

.. _transaction:

Transaction
===========

.. raw:: html
   :file: Transaction.html

.. _embeddedtransactionheader:

EmbeddedTransactionHeader
=========================

.. raw:: html
   :file: EmbeddedTransactionHeader.html

.. _embeddedtransaction:

EmbeddedTransaction
===================

.. raw:: html
   :file: EmbeddedTransaction.html

.. _accountkeylinktransactionbody:

AccountKeyLinkTransactionBody
=============================

.. raw:: html
   :file: AccountKeyLinkTransactionBody.html

.. _nodekeylinktransactionbody:

NodeKeyLinkTransactionBody
==========================

.. raw:: html
   :file: NodeKeyLinkTransactionBody.html

.. _cosignature:

Cosignature
===========

.. raw:: html
   :file: Cosignature.html

.. _aggregatetransactionbody:

AggregateTransactionBody
========================

.. raw:: html
   :file: AggregateTransactionBody.html

.. _votingkeylinktransactionbody:

VotingKeyLinkTransactionBody
============================

.. raw:: html
   :file: VotingKeyLinkTransactionBody.html

.. _vrfkeylinktransactionbody:

VrfKeyLinkTransactionBody
=========================

.. raw:: html
   :file: VrfKeyLinkTransactionBody.html

.. _hashlocktransactionbody:

HashLockTransactionBody
=======================

.. raw:: html
   :file: HashLockTransactionBody.html

.. _secretlocktransactionbody:

SecretLockTransactionBody
=========================

.. raw:: html
   :file: SecretLockTransactionBody.html

.. _secretprooftransactionbody:

SecretProofTransactionBody
==========================

.. raw:: html
   :file: SecretProofTransactionBody.html

.. _accountmetadatatransactionbody:

AccountMetadataTransactionBody
==============================

.. raw:: html
   :file: AccountMetadataTransactionBody.html

.. _mosaicmetadatatransactionbody:

MosaicMetadataTransactionBody
=============================

.. raw:: html
   :file: MosaicMetadataTransactionBody.html

.. _namespacemetadatatransactionbody:

NamespaceMetadataTransactionBody
================================

.. raw:: html
   :file: NamespaceMetadataTransactionBody.html

.. _mosaicdefinitiontransactionbody:

MosaicDefinitionTransactionBody
===============================

.. raw:: html
   :file: MosaicDefinitionTransactionBody.html

.. _mosaicsupplychangetransactionbody:

MosaicSupplyChangeTransactionBody
=================================

.. raw:: html
   :file: MosaicSupplyChangeTransactionBody.html

.. _mosaicsupplyrevocationtransactionbody:

MosaicSupplyRevocationTransactionBody
=====================================

.. raw:: html
   :file: MosaicSupplyRevocationTransactionBody.html

.. _multisigaccountmodificationtransactionbody:

MultisigAccountModificationTransactionBody
==========================================

.. raw:: html
   :file: MultisigAccountModificationTransactionBody.html

.. _addressaliastransactionbody:

AddressAliasTransactionBody
===========================

.. raw:: html
   :file: AddressAliasTransactionBody.html

.. _mosaicaliastransactionbody:

MosaicAliasTransactionBody
==========================

.. raw:: html
   :file: MosaicAliasTransactionBody.html

.. _namespaceregistrationtransactionbody:

NamespaceRegistrationTransactionBody
====================================

.. raw:: html
   :file: NamespaceRegistrationTransactionBody.html

.. _accountaddressrestrictiontransactionbody:

AccountAddressRestrictionTransactionBody
========================================

.. raw:: html
   :file: AccountAddressRestrictionTransactionBody.html

.. _accountmosaicrestrictiontransactionbody:

AccountMosaicRestrictionTransactionBody
=======================================

.. raw:: html
   :file: AccountMosaicRestrictionTransactionBody.html

.. _accountoperationrestrictiontransactionbody:

AccountOperationRestrictionTransactionBody
==========================================

.. raw:: html
   :file: AccountOperationRestrictionTransactionBody.html

.. _mosaicaddressrestrictiontransactionbody:

MosaicAddressRestrictionTransactionBody
=======================================

.. raw:: html
   :file: MosaicAddressRestrictionTransactionBody.html

.. _mosaicglobalrestrictiontransactionbody:

MosaicGlobalRestrictionTransactionBody
======================================

.. raw:: html
   :file: MosaicGlobalRestrictionTransactionBody.html

.. _transfertransactionbody:

TransferTransactionBody
=======================

.. raw:: html
   :file: TransferTransactionBody.html

.. raw:: html

   </div>
