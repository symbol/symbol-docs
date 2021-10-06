#############
Serialization
#############

The `catbuffer schemas <https://github.com/symbol/catbuffer-schemas>`_ repository defines how the different Symbol entities type should be serialized (for example, Transactions). In combination with the `catbuffer-generators <https://github.com/symbol/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages.

.. raw:: html

   <style>.bs-sidenav ul ul ul > li {display: none;}</style>

Basic Types
***********

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Name</th><th>Size</th><th style="width: 100%">Description</th></tr>
   <tr id="amount">
   <td><b>Amount</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="blockduration">
   <td><b>BlockDuration</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="blockfeemultiplier">
   <td><b>BlockFeeMultiplier</b></td>
   <td>4&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="difficulty">
   <td><b>Difficulty</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="finalizationepoch">
   <td><b>FinalizationEpoch</b></td>
   <td>4&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="finalizationpoint">
   <td><b>FinalizationPoint</b></td>
   <td>4&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="height">
   <td><b>Height</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="importance">
   <td><b>Importance</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="importanceheight">
   <td><b>ImportanceHeight</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="unresolvedmosaicid">
   <td><b>UnresolvedMosaicId</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="mosaicid">
   <td><b>MosaicId</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="timestamp">
   <td><b>Timestamp</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="unresolvedaddress">
   <td><b>UnresolvedAddress</b></td>
   <td>24&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="address">
   <td><b>Address</b></td>
   <td>24&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="hash256">
   <td><b>Hash256</b></td>
   <td>32&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="hash512">
   <td><b>Hash512</b></td>
   <td>64&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="publickey">
   <td><b>PublicKey</b></td>
   <td>32&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="votingpublickey">
   <td><b>VotingPublicKey</b></td>
   <td>32&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="signature">
   <td><b>Signature</b></td>
   <td>64&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="proofgamma">
   <td><b>ProofGamma</b></td>
   <td>32&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="proofverificationhash">
   <td><b>ProofVerificationHash</b></td>
   <td>16&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="proofscalar">
   <td><b>ProofScalar</b></td>
   <td>32&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="namespaceid">
   <td><b>NamespaceId</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="scopedmetadatakey">
   <td><b>ScopedMetadataKey</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="mosaicnonce">
   <td><b>MosaicNonce</b></td>
   <td>4&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr id="mosaicrestrictionkey">
   <td><b>MosaicRestrictionKey</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   </tbody></table>

Enumerations
************

.. _linkaction:

LinkAction
==========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/types.cats#L39">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/LinkAction.h#L28">catapult model</a></td></tr>
       </table></div>
   <p>enumeration of link actions </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">UNLINK</code></td>
   <td><p>unlink account </p></td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">LINK</code></td>
   <td><p>link account </p></td>
   </tr>
   </tbody></table>

.. _networktype:

NetworkType
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/entity.cats#L4">schema</a></td></tr>
       </table></div>
   <p>enumeration of network types </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x68</td>
   <td><code class="docutils literal">MAINNET</code></td>
   <td><p>public network </p></td>
   </tr>
   <tr>
   <td>0x98</td>
   <td><code class="docutils literal">TESTNET</code></td>
   <td><p>public test network </p></td>
   </tr>
   </tbody></table>

.. _blocktype:

BlockType
=========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 2 bytes = 0x2</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/block.cats#L8">schema</a></td></tr>
       </table></div>
   <p>enumeration of block types </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x8043</td>
   <td><code class="docutils literal">NEMESIS</code></td>
   <td><p>nemesis block </p></td>
   </tr>
   <tr>
   <td>0x8143</td>
   <td><code class="docutils literal">NORMAL</code></td>
   <td><p>normal block </p></td>
   </tr>
   <tr>
   <td>0x8243</td>
   <td><code class="docutils literal">IMPORTANCE</code></td>
   <td><p>importance block </p></td>
   </tr>
   </tbody></table>

.. _receipttype:

ReceiptType
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 2 bytes = 0x2</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/receipts.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/ReceiptType.h#L59">catapult model</a></td></tr>
       </table></div>
   <p>enumeration of receipt types </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">RESERVED</code></td>
   <td><p>reserved receipt type </p></td>
   </tr>
   <tr>
   <td>0x124d</td>
   <td><code class="docutils literal">MOSAIC_RENTAL_FEE</code></td>
   <td><p>mosaic rental fee receipt type </p></td>
   </tr>
   <tr>
   <td>0x134e</td>
   <td><code class="docutils literal">NAMESPACE_RENTAL_FEE</code></td>
   <td><p>namespace rental fee receipt type </p></td>
   </tr>
   <tr>
   <td>0x2143</td>
   <td><code class="docutils literal">HARVEST_FEE</code></td>
   <td><p>harvest fee receipt type </p></td>
   </tr>
   <tr>
   <td>0x2248</td>
   <td><code class="docutils literal">LOCK_HASH_COMPLETED</code></td>
   <td><p>lock hash completed receipt type </p></td>
   </tr>
   <tr>
   <td>0x2348</td>
   <td><code class="docutils literal">LOCK_HASH_EXPIRED</code></td>
   <td><p>lock hash expired receipt type </p></td>
   </tr>
   <tr>
   <td>0x2252</td>
   <td><code class="docutils literal">LOCK_SECRET_COMPLETED</code></td>
   <td><p>lock secret completed receipt type </p></td>
   </tr>
   <tr>
   <td>0x2352</td>
   <td><code class="docutils literal">LOCK_SECRET_EXPIRED</code></td>
   <td><p>lock secret expired receipt type </p></td>
   </tr>
   <tr>
   <td>0x3148</td>
   <td><code class="docutils literal">LOCK_HASH_CREATED</code></td>
   <td><p>lock hash created receipt type </p></td>
   </tr>
   <tr>
   <td>0x3152</td>
   <td><code class="docutils literal">LOCK_SECRET_CREATED</code></td>
   <td><p>lock secret created receipt type </p></td>
   </tr>
   <tr>
   <td>0x414d</td>
   <td><code class="docutils literal">MOSAIC_EXPIRED</code></td>
   <td><p>mosaic expired receipt type </p></td>
   </tr>
   <tr>
   <td>0x414e</td>
   <td><code class="docutils literal">NAMESPACE_EXPIRED</code></td>
   <td><p>namespace expired receipt type </p></td>
   </tr>
   <tr>
   <td>0x424e</td>
   <td><code class="docutils literal">NAMESPACE_DELETED</code></td>
   <td><p>namespace deleted receipt type </p></td>
   </tr>
   <tr>
   <td>0x5143</td>
   <td><code class="docutils literal">INFLATION</code></td>
   <td><p>inflation receipt type </p></td>
   </tr>
   <tr>
   <td>0xe143</td>
   <td><code class="docutils literal">TRANSACTION_GROUP</code></td>
   <td><p>transaction group receipt type </p></td>
   </tr>
   <tr>
   <td>0xf143</td>
   <td><code class="docutils literal">ADDRESS_ALIAS_RESOLUTION</code></td>
   <td><p>address alias resolution receipt type </p></td>
   </tr>
   <tr>
   <td>0xf243</td>
   <td><code class="docutils literal">MOSAIC_ALIAS_RESOLUTION</code></td>
   <td><p>mosaic alias resolution receipt type </p></td>
   </tr>
   </tbody></table>

.. _namespaceregistrationtype:

NamespaceRegistrationType
=========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/namespace_types.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/NamespaceTypes.h#L28">catapult model</a></td></tr>
       </table></div>
   <p>enumeration of namespace registration types </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">ROOT</code></td>
   <td><p>root namespace </p></td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">CHILD</code></td>
   <td><p>child namespace </p></td>
   </tr>
   </tbody></table>

.. _aliasaction:

AliasAction
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/namespace_types.cats#L12">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/NamespaceTypes.h#L37">catapult model</a></td></tr>
       </table></div>
   <p>enumeration of alias actions </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">UNLINK</code></td>
   <td><p>unlink alias </p></td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">LINK</code></td>
   <td><p>link alias </p></td>
   </tr>
   </tbody></table>

.. _accounttype:

AccountType
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state_types.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/state/AccountState.h#L32">catapult model</a></td></tr>
       </table></div>
   <p>enumeration of account types </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">UNLINKED</code></td>
   <td><p>account is not linked to another account </p></td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">MAIN</code></td>
   <td><p>account is a balance-holding account that is linked to a remote harvester account </p></td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">REMOTE</code></td>
   <td><p>account is a remote harvester account that is linked to a balance-holding account </p></td>
   </tr>
   <tr>
   <td>0x3</td>
   <td><code class="docutils literal">REMOTE_UNLINKED</code></td>
   <td><p>account is a remote harvester eligible account that is unlinked <br/><b>Note:</b> this allows an account that has previously been used as remote to be reused as a remote </p></td>
   </tr>
   </tbody></table>

.. _accountkeytypeflags:

AccountKeyTypeFlags
===================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state_types.cats#L19">schema</a></td></tr>
       </table></div>
   <p>enumeration of account key type flags </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">UNSET</code></td>
   <td><p>unset key </p></td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">LINKED</code></td>
   <td><p>linked account public key <br/><b>Note:</b> this can be either a remote or main account public key depending on context </p></td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">NODE</code></td>
   <td><p>node public key on which remote is allowed to harvest </p></td>
   </tr>
   <tr>
   <td>0x4</td>
   <td><code class="docutils literal">VRF</code></td>
   <td><p>VRF public key </p></td>
   </tr>
   </tbody></table>

.. _accountstateformat:

AccountStateFormat
==================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state_types.cats#L34">schema</a></td></tr>
       </table></div>
   <p>enumeration of account state formats </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">REGULAR</code></td>
   <td><p>regular account </p></td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">HIGH_VALUE</code></td>
   <td><p>high value account eligible to harvest </p></td>
   </tr>
   </tbody></table>

.. _lockstatus:

LockStatus
==========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/lock_info.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_shared/src/state/LockInfo.h#L28">catapult model</a></td></tr>
       </table></div>
   <p>lock status for lock transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">UNUSED</code></td>
   <td><p>lock is unused </p></td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">USED</code></td>
   <td><p>lock was already used </p></td>
   </tr>
   </tbody></table>

.. _metadatatype:

MetadataType
============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/metadata_entry_types.cats#L6">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/MetadataTypes.h#L34">catapult model</a></td></tr>
       </table></div>
   <p>enum for the different types of metadata </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">ACCOUNT</code></td>
   <td><p>account metadata </p></td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">MOSAIC</code></td>
   <td><p>mosaic metadata </p></td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">NAMESPACE</code></td>
   <td><p>namespace metadata </p></td>
   </tr>
   </tbody></table>

.. _mosaicflags:

MosaicFlags
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_types.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicFlags.h#L29">catapult model</a></td></tr>
       </table></div>
   <p>enumeration of mosaic property flags </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">NONE</code></td>
   <td><p>no flags present </p></td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">SUPPLY_MUTABLE</code></td>
   <td><p>mosaic supports supply changes even when mosaic owner owns partial supply </p></td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">TRANSFERABLE</code></td>
   <td><p>mosaic supports transfers between arbitrary accounts <br/><b>Note:</b> when not set, mosaic can only be transferred to and from mosaic owner </p></td>
   </tr>
   <tr>
   <td>0x4</td>
   <td><code class="docutils literal">RESTRICTABLE</code></td>
   <td><p>mosaic supports custom restrictions configured by mosaic owner </p></td>
   </tr>
   </tbody></table>

.. _mosaicsupplychangeaction:

MosaicSupplyChangeAction
========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_types.cats#L19">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicTypes.h#L28">catapult model</a></td></tr>
       </table></div>
   <p>enumeration of mosaic supply change actions </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">DECREASE</code></td>
   <td><p>decreases the supply </p></td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">INCREASE</code></td>
   <td><p>increases the supply </p></td>
   </tr>
   </tbody></table>

.. _namespacealiastype:

NamespaceAliasType
==================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/namespace_history_types.cats#L13">schema</a></td></tr>
       </table></div>
   <p>namespace alias type </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">NONE</code></td>
   <td><p>no alias </p></td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">MOSAIC_ID</code></td>
   <td><p>if alias is mosaicId </p></td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">ADDRESS</code></td>
   <td><p>if alias is address </p></td>
   </tr>
   </tbody></table>

.. _accountrestrictionflags:

AccountRestrictionFlags
=======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 2 bytes = 0x2</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/restriction_account_types.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_account/src/model/AccountRestrictionFlags.h#L29">catapult model</a></td></tr>
       </table></div>
   <p>enumeration of account restriction flags </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">ADDRESS</code></td>
   <td><p>restriction type is an address </p></td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">MOSAIC_ID</code></td>
   <td><p>restriction type is a mosaic identifier </p></td>
   </tr>
   <tr>
   <td>0x4</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><p>restriction type is a transaction type </p></td>
   </tr>
   <tr>
   <td>0x4000</td>
   <td><code class="docutils literal">OUTGOING</code></td>
   <td><p>restriction is interpreted as outgoing </p></td>
   </tr>
   <tr>
   <td>0x8000</td>
   <td><code class="docutils literal">BLOCK</code></td>
   <td><p>restriction is interpreted as blocking (instead of allowing) operation </p></td>
   </tr>
   </tbody></table>

.. _transactiontype:

TransactionType
===============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 2 bytes = 0x2</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/transaction_type.cats#L2">schema</a></td></tr>
       </table></div>
   <p>enumeration of transaction types </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x414c</td>
   <td><code class="docutils literal">ACCOUNT_KEY_LINK</code></td>
   <td><p>account key link transaction </p></td>
   </tr>
   <tr>
   <td>0x424c</td>
   <td><code class="docutils literal">NODE_KEY_LINK</code></td>
   <td><p>node key link transaction </p></td>
   </tr>
   <tr>
   <td>0x4141</td>
   <td><code class="docutils literal">AGGREGATE_COMPLETE</code></td>
   <td><p>aggregate complete transaction </p></td>
   </tr>
   <tr>
   <td>0x4241</td>
   <td><code class="docutils literal">AGGREGATE_BONDED</code></td>
   <td><p>aggregate bonded transaction </p></td>
   </tr>
   <tr>
   <td>0x4143</td>
   <td><code class="docutils literal">VOTING_KEY_LINK</code></td>
   <td><p>voting key link transaction </p></td>
   </tr>
   <tr>
   <td>0x4243</td>
   <td><code class="docutils literal">VRF_KEY_LINK</code></td>
   <td><p>vrf key link transaction </p></td>
   </tr>
   <tr>
   <td>0x4148</td>
   <td><code class="docutils literal">HASH_LOCK</code></td>
   <td><p>hash lock transaction </p></td>
   </tr>
   <tr>
   <td>0x4152</td>
   <td><code class="docutils literal">SECRET_LOCK</code></td>
   <td><p>secret lock transaction </p></td>
   </tr>
   <tr>
   <td>0x4252</td>
   <td><code class="docutils literal">SECRET_PROOF</code></td>
   <td><p>secret proof transaction </p></td>
   </tr>
   <tr>
   <td>0x4144</td>
   <td><code class="docutils literal">ACCOUNT_METADATA</code></td>
   <td><p>account metadata transaction </p></td>
   </tr>
   <tr>
   <td>0x4244</td>
   <td><code class="docutils literal">MOSAIC_METADATA</code></td>
   <td><p>mosaic metadata transaction </p></td>
   </tr>
   <tr>
   <td>0x4344</td>
   <td><code class="docutils literal">NAMESPACE_METADATA</code></td>
   <td><p>namespace metadata transaction </p></td>
   </tr>
   <tr>
   <td>0x414d</td>
   <td><code class="docutils literal">MOSAIC_DEFINITION</code></td>
   <td><p>mosaic definition transaction </p></td>
   </tr>
   <tr>
   <td>0x424d</td>
   <td><code class="docutils literal">MOSAIC_SUPPLY_CHANGE</code></td>
   <td><p>mosaic supply change transaction </p></td>
   </tr>
   <tr>
   <td>0x4155</td>
   <td><code class="docutils literal">MULTISIG_ACCOUNT_MODIFICATION</code></td>
   <td><p>multisig account modification transaction </p></td>
   </tr>
   <tr>
   <td>0x424e</td>
   <td><code class="docutils literal">ADDRESS_ALIAS</code></td>
   <td><p>address alias transaction </p></td>
   </tr>
   <tr>
   <td>0x434e</td>
   <td><code class="docutils literal">MOSAIC_ALIAS</code></td>
   <td><p>mosaic alias transaction </p></td>
   </tr>
   <tr>
   <td>0x414e</td>
   <td><code class="docutils literal">NAMESPACE_REGISTRATION</code></td>
   <td><p>namespace registration transaction </p></td>
   </tr>
   <tr>
   <td>0x4150</td>
   <td><code class="docutils literal">ACCOUNT_ADDRESS_RESTRICTION</code></td>
   <td><p>account address restriction transaction </p></td>
   </tr>
   <tr>
   <td>0x4250</td>
   <td><code class="docutils literal">ACCOUNT_MOSAIC_RESTRICTION</code></td>
   <td><p>account mosaic restriction transaction </p></td>
   </tr>
   <tr>
   <td>0x4350</td>
   <td><code class="docutils literal">ACCOUNT_OPERATION_RESTRICTION</code></td>
   <td><p>account operation restriction transaction </p></td>
   </tr>
   <tr>
   <td>0x4251</td>
   <td><code class="docutils literal">MOSAIC_ADDRESS_RESTRICTION</code></td>
   <td><p>mosaic address restriction transaction </p></td>
   </tr>
   <tr>
   <td>0x4151</td>
   <td><code class="docutils literal">MOSAIC_GLOBAL_RESTRICTION</code></td>
   <td><p>mosaic global restriction transaction </p></td>
   </tr>
   <tr>
   <td>0x4154</td>
   <td><code class="docutils literal">TRANSFER</code></td>
   <td><p>transfer transaction </p></td>
   </tr>
   </tbody></table>

.. _mosaicrestrictiontype:

MosaicRestrictionType
=====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_mosaic/restriction_mosaic_types.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/model/MosaicRestrictionTypes.h#L28">catapult model</a></td></tr>
       </table></div>
   <p>enumeration of mosaic restriction types </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">NONE</code></td>
   <td><p>uninitialized value indicating no restriction </p></td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">EQ</code></td>
   <td><p>allow if equal </p></td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">NE</code></td>
   <td><p>allow if not equal </p></td>
   </tr>
   <tr>
   <td>0x3</td>
   <td><code class="docutils literal">LT</code></td>
   <td><p>allow if less than </p></td>
   </tr>
   <tr>
   <td>0x4</td>
   <td><code class="docutils literal">LE</code></td>
   <td><p>allow if less than or equal </p></td>
   </tr>
   <tr>
   <td>0x5</td>
   <td><code class="docutils literal">GT</code></td>
   <td><p>allow if greater than </p></td>
   </tr>
   <tr>
   <td>0x6</td>
   <td><code class="docutils literal">GE</code></td>
   <td><p>allow if greater than or equal </p></td>
   </tr>
   </tbody></table>

.. _mosaicrestrictionentrytype:

MosaicRestrictionEntryType
==========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_types.cats#L5">schema</a></td></tr>
       </table></div>
   <p>type of mosaic restriction entry </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">ADDRESS</code></td>
   <td><p>address restriction </p></td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">GLOBAL</code></td>
   <td><p>global (mosaic) restriction </p></td>
   </tr>
   </tbody></table>

.. _lockhashalgorithm:

LockHashAlgorithm
=================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_secret/lock_secret_types.cats#L2">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_secret/src/model/LockHashAlgorithm.h#L28">catapult model</a></td></tr>
       </table></div>
   <p>enumeration of lock hash algorithms </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">SHA3_256</code></td>
   <td><p>input is hashed using sha-3 256 </p></td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">HASH_160</code></td>
   <td><p>input is hashed twice: first with sha-256 and then with ripemd-160 (bitcoin's OP_HASH160) </p></td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">HASH_256</code></td>
   <td><p>input is hashed twice with sha-256 (bitcoin's OP_HASH256) </p></td>
   </tr>
   </tbody></table>

Structures
**********

.. _mosaic:

Mosaic
======

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/types.cats#L23">schema</a></td></tr>
       </table></div>
   <p>binary layout for a mosaic </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#mosaicid" title="">MosaicId</a></td>
   <td><p>mosaic identifier </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">amount</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>mosaic amount </p></td>
   </tr>
   </tbody></table>

.. _unresolvedmosaic:

UnresolvedMosaic
================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/types.cats#L31">schema</a></td></tr>
       </table></div>
   <p>binary layout for an unresolved mosaic </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>mosaic identifier </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">amount</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>mosaic amount </p></td>
   </tr>
   </tbody></table>

.. _vrfproof:

VrfProof
========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 80 bytes = 0x50</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/block.cats#L19">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/crypto/Vrf.h#L44">catapult model</a></td></tr>
       </table></div>
   <p>verfiable random function proof </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">gamma</code></td>
   <td><a href="#proofgamma" title="">ProofGamma</a></td>
   <td><p>gamma </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verification_hash</code></td>
   <td><a href="#proofverificationhash" title="">ProofVerificationHash</a></td>
   <td><p>verification hash </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scalar</code></td>
   <td><a href="#proofscalar" title="">ProofScalar</a></td>
   <td><p>scalar </p></td>
   </tr>
   </tbody></table>

.. _nemesisblockheader:

NemesisBlockHeader
==================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 427 bytes = 0x1ab</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/block.cats#L83">schema</a></td></tr>
       </table></div>
   <p>binary layout for a nemesis block header </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">BLOCK_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">BLOCK_TYPE</code></td>
   <td><a href="#blocktype" title="enumeration of block types">BlockType</a></td>
   <td><b>const</b> <code class="docutils literal">NEMESIS</code> (<code class="docutils literal">0x8043</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#blockheader" title="binary layout for a block header">BlockHeader</a><span style="float:right">372 bytes = 0x174</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#blocktype" title="enumeration of block types">BlockType</a></td>
   <td><p>block type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td><p>block height </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">timestamp</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>number of milliseconds elapsed since creation of nemesis block </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">difficulty</code></td>
   <td><a href="#difficulty" title="">Difficulty</a></td>
   <td><p>block difficulty </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">generation_hash_proof</code></td>
   <td><a href="#vrfproof" title="verfiable random function proof">VrfProof</a></td>
   <td><p>generation hash proof </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_block_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>previous block hash </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>hash of the transactions in this block </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">receipts_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>hash of the receipts generated by this block </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">state_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>hash of the global chain state at this block </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">beneficiary_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>beneficiary address designated by harvester </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee_multiplier</code></td>
   <td><a href="#blockfeemultiplier" title="">BlockFeeMultiplier</a></td>
   <td><p>fee multiplier applied to block transactions </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#importanceblockfooter" title="binary layout for an importance block footer">ImportanceBlockFooter</a><span style="float:right">52 bytes = 0x34</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">voting_eligible_accounts_count</code></td>
   <td>byte[4]</td>
   <td><p>number of voting eligible accounts </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">harvesting_&ZeroWidthSpace;eligible_&ZeroWidthSpace;accounts_&ZeroWidthSpace;count</code></td>
   <td>byte[8]</td>
   <td><p>number of harvesting eligible accounts </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">total_voting_balance</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>total balance eligible for voting </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_importance_block_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>previous importance block hash </p></td>
   </tr>
   </tbody></table>

.. _normalblockheader:

NormalBlockHeader
=================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 379 bytes = 0x17b</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/block.cats#L91">schema</a></td></tr>
       </table></div>
   <p>binary layout for a normal block header </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">BLOCK_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">BLOCK_TYPE</code></td>
   <td><a href="#blocktype" title="enumeration of block types">BlockType</a></td>
   <td><b>const</b> <code class="docutils literal">NORMAL</code> (<code class="docutils literal">0x8143</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#blockheader" title="binary layout for a block header">BlockHeader</a><span style="float:right">372 bytes = 0x174</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#blocktype" title="enumeration of block types">BlockType</a></td>
   <td><p>block type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td><p>block height </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">timestamp</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>number of milliseconds elapsed since creation of nemesis block </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">difficulty</code></td>
   <td><a href="#difficulty" title="">Difficulty</a></td>
   <td><p>block difficulty </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">generation_hash_proof</code></td>
   <td><a href="#vrfproof" title="verfiable random function proof">VrfProof</a></td>
   <td><p>generation hash proof </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_block_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>previous block hash </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>hash of the transactions in this block </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">receipts_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>hash of the receipts generated by this block </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">state_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>hash of the global chain state at this block </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">beneficiary_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>beneficiary address designated by harvester </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee_multiplier</code></td>
   <td><a href="#blockfeemultiplier" title="">BlockFeeMultiplier</a></td>
   <td><p>fee multiplier applied to block transactions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">block_header_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#blockheader" title="binary layout for a block header">BlockHeader</a> on 8-byte boundary </p></td>
   </tr>
   </tbody></table>

.. _importanceblockheader:

ImportanceBlockHeader
=====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 427 bytes = 0x1ab</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/block.cats#L101">schema</a></td></tr>
       </table></div>
   <p>binary layout for an importance block header </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">BLOCK_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">BLOCK_TYPE</code></td>
   <td><a href="#blocktype" title="enumeration of block types">BlockType</a></td>
   <td><b>const</b> <code class="docutils literal">IMPORTANCE</code> (<code class="docutils literal">0x8243</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#blockheader" title="binary layout for a block header">BlockHeader</a><span style="float:right">372 bytes = 0x174</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#blocktype" title="enumeration of block types">BlockType</a></td>
   <td><p>block type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td><p>block height </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">timestamp</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>number of milliseconds elapsed since creation of nemesis block </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">difficulty</code></td>
   <td><a href="#difficulty" title="">Difficulty</a></td>
   <td><p>block difficulty </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">generation_hash_proof</code></td>
   <td><a href="#vrfproof" title="verfiable random function proof">VrfProof</a></td>
   <td><p>generation hash proof </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_block_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>previous block hash </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>hash of the transactions in this block </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">receipts_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>hash of the receipts generated by this block </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">state_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>hash of the global chain state at this block </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">beneficiary_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>beneficiary address designated by harvester </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee_multiplier</code></td>
   <td><a href="#blockfeemultiplier" title="">BlockFeeMultiplier</a></td>
   <td><p>fee multiplier applied to block transactions </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#importanceblockfooter" title="binary layout for an importance block footer">ImportanceBlockFooter</a><span style="float:right">52 bytes = 0x34</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">voting_eligible_accounts_count</code></td>
   <td>byte[4]</td>
   <td><p>number of voting eligible accounts </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">harvesting_&ZeroWidthSpace;eligible_&ZeroWidthSpace;accounts_&ZeroWidthSpace;count</code></td>
   <td>byte[8]</td>
   <td><p>number of harvesting eligible accounts </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">total_voting_balance</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>total balance eligible for voting </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_importance_block_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>previous importance block hash </p></td>
   </tr>
   </tbody></table>

.. _finalizationround:

FinalizationRound
=================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8 bytes = 0x8</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/finalization/finalization_round.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/FinalizationRound.h#L30">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for finalization round </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">epoch</code></td>
   <td><a href="#finalizationepoch" title="">FinalizationEpoch</a></td>
   <td><p>finalization epoch </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">point</code></td>
   <td><a href="#finalizationpoint" title="">FinalizationPoint</a></td>
   <td><p>finalization point </p></td>
   </tr>
   </tbody></table>

.. _finalizedblockheader:

FinalizedBlockHeader
====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 48 bytes = 0x30</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/finalization/finalized_block_header.cats#L4">schema</a></td></tr>
       </table></div>
   <p>binary layout for finalized block header </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">round</code></td>
   <td><a href="#finalizationround" title="binary layout for finalization round">FinalizationRound</a></td>
   <td><p>finalization round </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td><p>finalization height </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>finalization hash </p></td>
   </tr>
   </tbody></table>

.. _balancetransferreceipt:

BalanceTransferReceipt
======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 72 bytes = 0x48</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/receipts.cats#L67">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/Receipt.h#L48">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a balance transfer receipt </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#receipt" title="binary layout for a receipt entity">Receipt</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>receipt version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipttype" title="enumeration of receipt types">ReceiptType</a></td>
   <td><p>receipt type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#mosaic" title="binary layout for a mosaic">Mosaic</a></td>
   <td><p>mosaic </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">sender_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>mosaic sender address </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>mosaic recipient address </p></td>
   </tr>
   </tbody></table>

.. _balancechangereceipt:

BalanceChangeReceipt
====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 48 bytes = 0x30</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/receipts.cats#L80">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/Receipt.h#L81">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a balance change receipt </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#receipt" title="binary layout for a receipt entity">Receipt</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>receipt version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipttype" title="enumeration of receipt types">ReceiptType</a></td>
   <td><p>receipt type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#mosaic" title="binary layout for a mosaic">Mosaic</a></td>
   <td><p>mosaic </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>account address </p></td>
   </tr>
   </tbody></table>

.. _inflationreceipt:

InflationReceipt
================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 24 bytes = 0x18</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/receipts.cats#L90">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/Receipt.h#L105">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an inflation receipt </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#receipt" title="binary layout for a receipt entity">Receipt</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>receipt version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipttype" title="enumeration of receipt types">ReceiptType</a></td>
   <td><p>receipt type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#mosaic" title="binary layout for a mosaic">Mosaic</a></td>
   <td><p>mosaic </p></td>
   </tr>
   </tbody></table>

.. _mosaicexpiryreceipt:

MosaicExpiryReceipt
===================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/receipts.cats#L97">schema</a></td></tr>
       </table></div>
   <p>binary layout for a mosaic expiry receipt </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#receipt" title="binary layout for a receipt entity">Receipt</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>receipt version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipttype" title="enumeration of receipt types">ReceiptType</a></td>
   <td><p>receipt type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">artifact_id</code></td>
   <td><a href="#mosaicid" title="">MosaicId</a></td>
   <td><p>expiring mosaic id </p></td>
   </tr>
   </tbody></table>

.. _namespaceexpiryreceipt:

NamespaceExpiryReceipt
======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/namespace_receipts.cats#L5">schema</a></td></tr>
       </table></div>
   <p>binary layout for a namespace expiry receipt </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#receipt" title="binary layout for a receipt entity">Receipt</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>receipt version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipttype" title="enumeration of receipt types">ReceiptType</a></td>
   <td><p>receipt type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">artifact_id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>expiring namespace id </p></td>
   </tr>
   </tbody></table>

.. _receiptsource:

ReceiptSource
=============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8 bytes = 0x8</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/resolution_statement/resolution_statement_types.cats#L2">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/ReceiptSource.h#L30">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for receipt source </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">primary_id</code></td>
   <td>byte[4]</td>
   <td><p>transaction primary source (e.g. index within block) </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secondary_id</code></td>
   <td>byte[4]</td>
   <td><p>transaction secondary source (e.g. index within aggregate) </p></td>
   </tr>
   </tbody></table>

.. _addressresolutionentry:

AddressResolutionEntry
======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 32 bytes = 0x20</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/resolution_statement/resolution_statement_types.cats#L10">schema</a></td></tr>
       </table></div>
   <p>binary layout for address resolution entry </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">source</code></td>
   <td><a href="#receiptsource" title="binary layout for receipt source">ReceiptSource</a></td>
   <td><p>source of resolution within block </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">resolved</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>resolved value </p></td>
   </tr>
   </tbody></table>

.. _mosaicresolutionentry:

MosaicResolutionEntry
=====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/resolution_statement/resolution_statement_types.cats#L18">schema</a></td></tr>
       </table></div>
   <p>binary layout for mosaic resolution entry </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">source</code></td>
   <td><a href="#receiptsource" title="binary layout for receipt source">ReceiptSource</a></td>
   <td><p>source of resolution within block </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">resolved</code></td>
   <td><a href="#mosaicid" title="">MosaicId</a></td>
   <td><p>resolved value </p></td>
   </tr>
   </tbody></table>

.. _mosaicresolutionstatement:

MosaicResolutionStatement
=========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/resolution_statement/resolution_statements.cats#L5">schema</a></td></tr>
       </table></div>
   <p>binary layout for a mosaic resolution statement </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#receipt" title="binary layout for a receipt entity">Receipt</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>receipt version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipttype" title="enumeration of receipt types">ReceiptType</a></td>
   <td><p>receipt type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">unresolved</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>unresolved mosaic </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">resolution_entries</code></td>
   <td><a href="#mosaicresolutionentry" title="binary layout for mosaic resolution entry">MosaicResolutionEntry</a></td>
   <td><p>resolution entries </p></td>
   </tr>
   </tbody></table>

.. _addressresolutionstatement:

AddressResolutionStatement
==========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 32 bytes = 0x20</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/resolution_statement/resolution_statements.cats#L15">schema</a></td></tr>
       </table></div>
   <p>binary layout for an address resolution statement </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#receipt" title="binary layout for a receipt entity">Receipt</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>receipt version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipttype" title="enumeration of receipt types">ReceiptType</a></td>
   <td><p>receipt type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">unresolved</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>unresolved address </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">resolution_entries</code></td>
   <td><a href="#addressresolutionentry" title="binary layout for address resolution entry">AddressResolutionEntry</a></td>
   <td><p>resolution entries </p></td>
   </tr>
   </tbody></table>

.. _pinnedvotingkey:

PinnedVotingKey
===============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 40 bytes = 0x28</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state_types.cats#L42">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/PinnedVotingKey.h#L32">catapult model</a></td></tr>
       </table></div>
   <p>pinned voting key </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">voting_key</code></td>
   <td><a href="#votingpublickey" title="">VotingPublicKey</a></td>
   <td><p>voting key </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">start_epoch</code></td>
   <td><a href="#finalizationepoch" title="">FinalizationEpoch</a></td>
   <td><p>start finalization epoch </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">end_epoch</code></td>
   <td><a href="#finalizationepoch" title="">FinalizationEpoch</a></td>
   <td><p>end finalization epoch </p></td>
   </tr>
   </tbody></table>

.. _importancesnapshot:

ImportanceSnapshot
==================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state_types.cats#L53">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/state/AccountImportanceSnapshots.h#L32">catapult model</a></td></tr>
       </table></div>
   <p>temporal importance information </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">importance</code></td>
   <td><a href="#importance" title="">Importance</a></td>
   <td><p>account importance </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">height</code></td>
   <td><a href="#importanceheight" title="">ImportanceHeight</a></td>
   <td><p>importance height </p></td>
   </tr>
   </tbody></table>

.. _heightactivitybucket:

HeightActivityBucket
====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 28 bytes = 0x1c</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state_types.cats#L61">schema</a></td></tr>
       </table></div>
   <p>account activity bucket </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">start_height</code></td>
   <td><a href="#importanceheight" title="">ImportanceHeight</a></td>
   <td><p>activity start height </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">total_fees_paid</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>total fees paid by account </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">beneficiary_count</code></td>
   <td>byte[4]</td>
   <td><p>number of times account has been used as a beneficiary </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">raw_score</code></td>
   <td>byte[8]</td>
   <td><p>raw importance score </p></td>
   </tr>
   </tbody></table>

.. _heightactivitybuckets:

HeightActivityBuckets
=====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 140 bytes = 0x8c</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state.cats#L5">schema</a></td></tr>
       </table></div>
   <p>account activity buckets </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">buckets</code></td>
   <td><a href="#heightactivitybucket" title="account activity bucket">HeightActivityBucket</a>&ZeroWidthSpace;[5]</td>
   <td><p>account activity buckets </p></td>
   </tr>
   </tbody></table>

.. _accountstate:

AccountState
============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 332+ bytes = 0x14c+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state.cats#L10">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/cache_core/AccountStateCacheUtils.h#L31">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for non-historical account state </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#stateheader" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>serialization version </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>address of account </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td><p>height at which address has been obtained </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>public key of account </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">public_key_height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td><p>height at which public key has been obtained </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_type</code></td>
   <td><a href="#accounttype" title="enumeration of account types">AccountType</a></td>
   <td><p>type of account </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">format</code></td>
   <td><a href="#accountstateformat" title="enumeration of account state formats">AccountStateFormat</a></td>
   <td><p>account format </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">supplemental_public_keys_mask</code></td>
   <td><a href="#accountkeytypeflags" title="enumeration of account key type flags">AccountKeyTypeFlags</a></td>
   <td><p>mask of supplemental public key flags </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">voting_public_keys_count</code></td>
   <td>byte[1]</td>
   <td><p>number of voting public keys </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>linked account public key </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">node_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>node public key </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">vrf_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>vrf public key </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">voting_public_keys</code></td>
   <td><a href="#pinnedvotingkey" title="pinned voting key">PinnedVotingKey</a>&ZeroWidthSpace;[voting_public_keys_count]</td>
   <td><p>voting public keys </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">importance_snapshots</code></td>
   <td><a href="#importancesnapshot" title="temporal importance information">ImportanceSnapshot</a></td>
   <td><p>current importance snapshot of the account </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">activity_buckets</code></td>
   <td><a href="#heightactivitybuckets" title="account activity buckets">HeightActivityBuckets</a></td>
   <td><p>activity buckets of the account </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">balances_count</code></td>
   <td>byte[2]</td>
   <td><p>number of total balances (mosaics) </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">balances</code></td>
   <td><a href="#mosaic" title="binary layout for a mosaic">Mosaic</a>&ZeroWidthSpace;[balances_count]</td>
   <td><p>balances of account </p></td>
   </tr>
   </tbody></table>

.. _hashlockinfo:

HashLockInfo
============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 83 bytes = 0x53</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/hash_lock.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/extensions/mongo/plugins/lock_hash/tests/test/HashLockMapperTestUtils.h#L29">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for hash lock transaction info </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#stateheader" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>serialization version </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">owner_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>owner address </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#mosaic" title="binary layout for a mosaic">Mosaic</a></td>
   <td><p>mosaic associated with lock </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">end_height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td><p>height at which the lock expires </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">status</code></td>
   <td><a href="#lockstatus" title="lock status for lock transaction">LockStatus</a></td>
   <td><p>flag indicating whether or not the lock was already used </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>hash </p></td>
   </tr>
   </tbody></table>

.. _metadatavalue:

MetadataValue
=============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 2+ bytes = 0x2+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/metadata_entry_types.cats#L17">schema</a></td></tr>
       </table></div>
   <p>binary layout of a metadata entry value </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[2]</td>
   <td><p>size of the value </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">data</code></td>
   <td>byte[size]</td>
   <td><p>data of the value </p></td>
   </tr>
   </tbody></table>

.. _metadataentry:

MetadataEntry
=============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 69+ bytes = 0x45+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/metadata_entry.cats#L6">schema</a></td></tr>
       </table></div>
   <p>binary layout of a metadata entry </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#stateheader" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>serialization version </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">source_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>metadata source address (provider) </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>metadata target address </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td><a href="#scopedmetadatakey" title="">ScopedMetadataKey</a></td>
   <td><p>metadata key scoped to source, target and type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_id</code></td>
   <td>byte[8]</td>
   <td><p>target id </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">metadata_type</code></td>
   <td><a href="#metadatatype" title="enum for the different types of metadata">MetadataType</a></td>
   <td><p>metadata type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td><a href="#metadatavalue" title="binary layout of a metadata entry value">MetadataValue</a></td>
   <td><p>value </p></td>
   </tr>
   </tbody></table>

.. _mosaicproperties:

MosaicProperties
================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 10 bytes = 0xa</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/mosaic_entry_types.cats#L5">schema</a></td></tr>
       </table></div>
   <p>binary layout for mosaic properties </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">flags</code></td>
   <td><a href="#mosaicflags" title="enumeration of mosaic property flags">MosaicFlags</a></td>
   <td><p>mosaic flags </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">divisibility</code></td>
   <td>byte[1]</td>
   <td><p>mosaic divisibility </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#blockduration" title="">BlockDuration</a></td>
   <td><p>mosaic duration </p></td>
   </tr>
   </tbody></table>

.. _mosaicdefinition:

MosaicDefinition
================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 46 bytes = 0x2e</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/mosaic_entry_types.cats#L16">schema</a></td></tr>
       </table></div>
   <p>binary layout for mosaic definition </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">start_height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td><p>block height </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">owner_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>mosaic owner </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">revision</code></td>
   <td>byte[4]</td>
   <td><p>revision </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">properties</code></td>
   <td><a href="#mosaicproperties" title="binary layout for mosaic properties">MosaicProperties</a></td>
   <td><p>properties </p></td>
   </tr>
   </tbody></table>

.. _mosaicentry:

MosaicEntry
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 64 bytes = 0x40</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/mosaic_entry.cats#L5">schema</a></td></tr>
       </table></div>
   <p>binary layout for mosaic entry </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#stateheader" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>serialization version </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#mosaicid" title="">MosaicId</a></td>
   <td><p>entry id </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">supply</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>total supply amount </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">definition</code></td>
   <td><a href="#mosaicdefinition" title="binary layout for mosaic definition">MosaicDefinition</a></td>
   <td><p>definition comprised of entry properties </p></td>
   </tr>
   </tbody></table>

.. _multisigentry:

MultisigEntry
=============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 50+ bytes = 0x32+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/multisig_entry.cats#L5">schema</a></td></tr>
       </table></div>
   <p>binary layout for a multisig entry </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#stateheader" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>serialization version </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">min_approval</code></td>
   <td>byte[4]</td>
   <td><p>minimum approval for modifications </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">min_removal</code></td>
   <td>byte[4]</td>
   <td><p>minimum approval for removal </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>account address </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">cosignatory_addresses_count</code></td>
   <td>byte[8]</td>
   <td><p>number of cosignatories </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">cosignatory_addresses</code></td>
   <td><a href="#address" title="">Address</a>&ZeroWidthSpace;[cosignatory_addresses_count]</td>
   <td><p>cosignatories for account </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">multisig_addresses_count</code></td>
   <td>byte[8]</td>
   <td><p>number of other accounts for which the entry is cosignatory </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">multisig_addresses</code></td>
   <td><a href="#address" title="">Address</a>&ZeroWidthSpace;[multisig_addresses_count]</td>
   <td><p>accounts for which the entry is cosignatory </p></td>
   </tr>
   </tbody></table>

.. _namespacelifetime:

NamespaceLifetime
=================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/namespace_history_types.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/state/NamespaceLifetime.h#L28">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for namespace lifetime </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">lifetime_start</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td><p>start height </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">lifetime_end</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td><p>end height </p></td>
   </tr>
   </tbody></table>

.. _namespacealias:

NamespaceAlias
==============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 33 bytes = 0x21</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/namespace_history_types.cats#L24">schema</a></td></tr>
       </table></div>
   <p>binary layout for alias </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">namespace_alias_type</code></td>
   <td><a href="#namespacealiastype" title="namespace alias type">NamespaceAliasType</a></td>
   <td><p>namespace alias type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_alias</code></td>
   <td><a href="#mosaicid" title="">MosaicId</a></td>
   <td><p>mosaic alias </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_alias</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>address alias </p></td>
   </tr>
   </tbody></table>

.. _namespacepath:

NamespacePath
=============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 34+ bytes = 0x22+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/namespace_history_types.cats#L35">schema</a></td></tr>
       </table></div>
   <p>binary layout for a namespace path </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">path_size</code></td>
   <td>byte[1]</td>
   <td><p>number of paths (excluding root id) </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">path</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a>&ZeroWidthSpace;[path_size]</td>
   <td><p>namespace path (excluding root id) </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">alias</code></td>
   <td><a href="#namespacealias" title="binary layout for alias">NamespaceAlias</a></td>
   <td><p>namespace alias </p></td>
   </tr>
   </tbody></table>

.. _rootnamespacehistory:

RootNamespaceHistory
====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 91+ bytes = 0x5b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/namespace_history.cats#L5">schema</a></td></tr>
       </table></div>
   <p>binary layout for non-historical root namespace history </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#stateheader" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>serialization version </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>id of the root namespace history </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">owner_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>namespace owner address </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">lifetime</code></td>
   <td><a href="#namespacelifetime" title="binary layout for namespace lifetime">NamespaceLifetime</a></td>
   <td><p>lifetime in blocks </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">root_alias</code></td>
   <td><a href="#namespacealias" title="binary layout for alias">NamespaceAlias</a></td>
   <td><p>root namespace alias </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">children_count</code></td>
   <td>byte[8]</td>
   <td><p>number of children </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">paths</code></td>
   <td><a href="#namespacepath" title="binary layout for a namespace path">NamespacePath</a>&ZeroWidthSpace;[children_count]</td>
   <td><p>save child sub-namespace paths </p></td>
   </tr>
   </tbody></table>

.. _accountrestrictionaddressvalue:

AccountRestrictionAddressValue
==============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8+ bytes = 0x8+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_account_types.cats#L5">schema</a></td></tr>
       </table></div>
   <p>binary layout for address based account restriction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_values_count</code></td>
   <td>byte[8]</td>
   <td><p>number of restrictions for a particular account </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_values</code></td>
   <td><a href="#address" title="">Address</a>&ZeroWidthSpace;[restriction_values_count]</td>
   <td><p>restriction values </p></td>
   </tr>
   </tbody></table>

.. _accountrestrictionmosaicvalue:

AccountRestrictionMosaicValue
=============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8+ bytes = 0x8+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_account_types.cats#L13">schema</a></td></tr>
       </table></div>
   <p>binary layout for mosaic id based account restriction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_values_count</code></td>
   <td>byte[8]</td>
   <td><p>number of restrictions for a particular account </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_values</code></td>
   <td><a href="#mosaicid" title="">MosaicId</a>&ZeroWidthSpace;[restriction_values_count]</td>
   <td><p>restriction values </p></td>
   </tr>
   </tbody></table>

.. _accountrestrictiontransactiontypevalue:

AccountRestrictionTransactionTypeValue
======================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8+ bytes = 0x8+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_account_types.cats#L21">schema</a></td></tr>
       </table></div>
   <p>binary layout for transaction type based account restriction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_values_count</code></td>
   <td>byte[8]</td>
   <td><p>number of restrictions for a particular account </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_values</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a>&ZeroWidthSpace;[restriction_values_count]</td>
   <td><p>restriction values </p></td>
   </tr>
   </tbody></table>

.. _accountrestrictionsinfo:

AccountRestrictionsInfo
=======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 26+ bytes = 0x1a+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_account_types.cats#L29">schema</a></td></tr>
       </table></div>
   <p>binary layout for account restrictions </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#accountrestrictionflags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td><p>raw restriction flags </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_restrictions</code></td>
   <td><a href="#accountrestrictionaddressvalue" title="binary layout for address based account restriction">AccountRestrictionAddressValue</a></td>
   <td><p>address restrictions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id_restrictions</code></td>
   <td><a href="#accountrestrictionmosaicvalue" title="binary layout for mosaic id based account restriction">AccountRestrictionMosaicValue</a></td>
   <td><p>mosaic identifier restrictions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transaction_type_restrictions</code></td>
   <td><a href="#accountrestrictiontransactiontypevalue" title="binary layout for transaction type based account restriction">AccountRestrictionTransactionTypeValue</a></td>
   <td><p>transaction type restrictions </p></td>
   </tr>
   </tbody></table>

.. _accountrestrictions:

AccountRestrictions
===================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 34+ bytes = 0x22+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_account.cats#L6">schema</a></td></tr>
       </table></div>
   <p>binary layout for account restrictions </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#stateheader" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>serialization version </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>address on which restrictions are placed </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restrictions_count</code></td>
   <td>byte[8]</td>
   <td><p>number of restrictions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restrictions</code></td>
   <td><a href="#accountrestrictionsinfo" title="binary layout for account restrictions">AccountRestrictionsInfo</a>&ZeroWidthSpace;[restrictions_count]</td>
   <td><p>account restrictions </p></td>
   </tr>
   </tbody></table>

.. _addresskeyvalue:

AddressKeyValue
===============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_types.cats#L13">schema</a></td></tr>
       </table></div>
   <p>layout for mosaic address restriction key-value pair </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">key</code></td>
   <td><a href="#mosaicrestrictionkey" title="">MosaicRestrictionKey</a></td>
   <td><p>key for value </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[8]</td>
   <td><p>value associated by key </p></td>
   </tr>
   </tbody></table>

.. _addresskeyvalueset:

AddressKeyValueSet
==================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1+ byte = 0x1+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_types.cats#L21">schema</a></td></tr>
       </table></div>
   <p>binary layout for mosaic address restriction key-value set </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">key_value_count</code></td>
   <td>byte[1]</td>
   <td><p>number of key value pairs </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">keys</code></td>
   <td><a href="#addresskeyvalue" title="layout for mosaic address restriction key-value pair">AddressKeyValue</a>&ZeroWidthSpace;[key_value_count]</td>
   <td><p>key value array </p></td>
   </tr>
   </tbody></table>

.. _restrictionrule:

RestrictionRule
===============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 17 bytes = 0x11</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_types.cats#L29">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/state/MosaicGlobalRestriction.h#L33">catapult model</a></td></tr>
       </table></div>
   <p>binary layout of restriction rule being applied </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">reference_mosaic_id</code></td>
   <td><a href="#mosaicid" title="">MosaicId</a></td>
   <td><p>identifier of the mosaic providing the restriction key </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_value</code></td>
   <td>byte[8]</td>
   <td><p>restriction value </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_type</code></td>
   <td><a href="#mosaicrestrictiontype" title="enumeration of mosaic restriction types">MosaicRestrictionType</a></td>
   <td><p>restriction type </p></td>
   </tr>
   </tbody></table>

.. _globalkeyvalue:

GlobalKeyValue
==============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 25 bytes = 0x19</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_types.cats#L40">schema</a></td></tr>
       </table></div>
   <p>binary layout for a global key-value </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">key</code></td>
   <td><a href="#mosaicrestrictionkey" title="">MosaicRestrictionKey</a></td>
   <td><p>key associated with a restriction rule </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_rule</code></td>
   <td><a href="#restrictionrule" title="binary layout of restriction rule being applied">RestrictionRule</a></td>
   <td><p>restriction rule (the value) associated with a key </p></td>
   </tr>
   </tbody></table>

.. _globalkeyvalueset:

GlobalKeyValueSet
=================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1+ byte = 0x1+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_types.cats#L48">schema</a></td></tr>
       </table></div>
   <p>binary layout for a global restriction key-value set </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">key_value_count</code></td>
   <td>byte[1]</td>
   <td><p>number of key value pairs </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">keys</code></td>
   <td><a href="#globalkeyvalue" title="binary layout for a global key-value">GlobalKeyValue</a>&ZeroWidthSpace;[key_value_count]</td>
   <td><p>key value array </p></td>
   </tr>
   </tbody></table>

.. _mosaicaddressrestrictionentry:

MosaicAddressRestrictionEntry
=============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 33+ bytes = 0x21+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_entry.cats#L5">schema</a></td></tr>
       </table></div>
   <p>binary layout for a mosaic restriction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#mosaicid" title="">MosaicId</a></td>
   <td><p>identifier of the mosaic to which the restriction applies </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>address being restricted </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">key_pairs</code></td>
   <td><a href="#addresskeyvalueset" title="binary layout for mosaic address restriction key-value set">AddressKeyValueSet</a></td>
   <td><p>address key value restriction set </p></td>
   </tr>
   </tbody></table>

.. _mosaicglobalrestrictionentry:

MosaicGlobalRestrictionEntry
============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 9+ bytes = 0x9+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_entry.cats#L16">schema</a></td></tr>
       </table></div>
   <p>binary layout for a mosaic restriction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#mosaicid" title="">MosaicId</a></td>
   <td><p>identifier of the mosaic to which the restriction applies </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">key_pairs</code></td>
   <td><a href="#globalkeyvalueset" title="binary layout for a global restriction key-value set">GlobalKeyValueSet</a></td>
   <td><p>global key value restriction set </p></td>
   </tr>
   </tbody></table>

.. _mosaicrestrictionentry:

MosaicRestrictionEntry
======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 45+ bytes = 0x2d+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_entry.cats#L24">schema</a></td></tr>
       </table></div>
   <p>binary layout for a mosaic restriction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#stateheader" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>serialization version </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entry_type</code></td>
   <td><a href="#mosaicrestrictionentrytype" title="type of mosaic restriction entry">MosaicRestrictionEntryType</a></td>
   <td><p>type of restriction being placed upon the entity </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_entry</code></td>
   <td><a href="#mosaicaddressrestrictionentry" title="binary layout for a mosaic restriction">MosaicAddressRestrictionEntry</a></td>
   <td><p>address restriction rule </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">global_entry</code></td>
   <td><a href="#mosaicglobalrestrictionentry" title="binary layout for a mosaic restriction">MosaicGlobalRestrictionEntry</a></td>
   <td><p>global mosaic rule </p></td>
   </tr>
   </tbody></table>

.. _secretlockinfo:

SecretLockInfo
==============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 108 bytes = 0x6c</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/secret_lock.cats#L6">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/extensions/mongo/plugins/lock_secret/tests/test/SecretLockMapperTestUtils.h#L29">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for serialized lock transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#stateheader" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>serialization version </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">owner_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>owner address </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#mosaic" title="binary layout for a mosaic">Mosaic</a></td>
   <td><p>mosaic associated with lock </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">end_height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td><p>height at which the lock expires </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">status</code></td>
   <td><a href="#lockstatus" title="lock status for lock transaction">LockStatus</a></td>
   <td><p>flag indicating whether or not the lock was already used </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash_algorithm</code></td>
   <td><a href="#lockhashalgorithm" title="enumeration of lock hash algorithms">LockHashAlgorithm</a></td>
   <td><p>hash algorithm </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secret</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>transaction secret </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>transaction recipient </p></td>
   </tr>
   </tbody></table>

.. _accountkeylinktransaction:

AccountKeyLinkTransaction
=========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 164 bytes = 0xa4</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/account_link/account_key_link.cats#L14">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/account_link/src/model/AccountKeyLinkTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   <p>This transaction is <strong>required</strong> for all accounts wanting to activate <em>remote</em> or <code>delegated</code> harvesting. <br/><a href="http://google.com">Announce</a> an <a href="#accountkeylinktransaction" title="This transaction is required for all accounts wanting to activate remote or delegated harvesting.">AccountKeyLinkTransaction</a> to delegate the account importance score to a proxy account. </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_KEY_LINK</code> (<code class="docutils literal">0x414c</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#accountkeylinktransactionbody" title="Shared content between AccountKeyLinkTransactionBody and EmbeddedAccountKeyLinkTransaction">AccountKeyLinkTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>linked public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#linkaction" title="enumeration of link actions">LinkAction</a></td>
   <td><p>link action </p></td>
   </tr>
   </tbody></table>

.. _embeddedaccountkeylinktransaction:

EmbeddedAccountKeyLinkTransaction
=================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 84 bytes = 0x54</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/account_link/account_key_link.cats#L22">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/account_link/src/model/AccountKeyLinkTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   <p>Embedded version of <a href="#accountkeylinktransaction" title="This transaction is required for all accounts wanting to activate remote or delegated harvesting.">AccountKeyLinkTransaction</a> </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_KEY_LINK</code> (<code class="docutils literal">0x414c</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#accountkeylinktransactionbody" title="Shared content between AccountKeyLinkTransactionBody and EmbeddedAccountKeyLinkTransaction">AccountKeyLinkTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>linked public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#linkaction" title="enumeration of link actions">LinkAction</a></td>
   <td><p>link action </p></td>
   </tr>
   </tbody></table>

.. _nodekeylinktransaction:

NodeKeyLinkTransaction
======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 164 bytes = 0xa4</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/account_link/node_key_link.cats#L14">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/account_link/src/model/NodeKeyLinkTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   <p>This transaction is required for all accounts willing to activate delegated harvesting. <br/>Announce a <a href="#nodekeylinktransaction" title="This transaction is required for all accounts willing to activate delegated harvesting.">NodeKeyLinkTransaction</a> to link an account with a public key used by TLS to create sessions. </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">NODE_KEY_LINK</code> (<code class="docutils literal">0x424c</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#nodekeylinktransactionbody" title="Shared content between NodeKeyLinkTransaction and EmbeddedNodeKeyLinkTransaction">NodeKeyLinkTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>linked public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#linkaction" title="enumeration of link actions">LinkAction</a></td>
   <td><p>link action </p></td>
   </tr>
   </tbody></table>

.. _embeddednodekeylinktransaction:

EmbeddedNodeKeyLinkTransaction
==============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 84 bytes = 0x54</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/account_link/node_key_link.cats#L22">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/account_link/src/model/NodeKeyLinkTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   <p>Embedded version of <a href="#nodekeylinktransaction" title="This transaction is required for all accounts willing to activate delegated harvesting.">NodeKeyLinkTransaction</a> </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">NODE_KEY_LINK</code> (<code class="docutils literal">0x424c</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#nodekeylinktransactionbody" title="Shared content between NodeKeyLinkTransaction and EmbeddedNodeKeyLinkTransaction">NodeKeyLinkTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>linked public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#linkaction" title="enumeration of link actions">LinkAction</a></td>
   <td><p>link action </p></td>
   </tr>
   </tbody></table>

.. _detachedcosignature:

DetachedCosignature
===================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 136 bytes = 0x88</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/aggregate/cosignature.cats#L15">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/Cosignature.h#L55">catapult model</a></td></tr>
       </table></div>
   <p>cosignature detached from an aggregate transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#cosignature" title="cosignature attached to an aggregate transaction">Cosignature</a><span style="float:right">104 bytes = 0x68</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[8]</td>
   <td><p>version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>cosigner public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>cosigner signature </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">parent_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>hash of the aggregate transaction that is signed by this cosignature </p></td>
   </tr>
   </tbody></table>

.. _aggregatecompletetransaction:

AggregateCompleteTransaction
============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 171+ bytes = 0xab+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/aggregate/aggregate.cats#L23">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/aggregate/src/model/AggregateTransaction.h#L57">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an aggregate complete transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">AGGREGATE_COMPLETE</code> (<code class="docutils literal">0x4141</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#aggregatetransactionbody" title="binary layout for an aggregate transaction">AggregateTransactionBody</a><span style="float:right">40+ bytes = 0x28+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>aggregate hash of an aggregate's transactions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">payload_size</code></td>
   <td>byte[4]</td>
   <td><p>transaction payload size in bytes <br/><b>Note:</b> this is the total number of bytes occupied by all sub-transactions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">aggregate_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of AggregateTransactionHeader on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions</code></td>
   <td><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a>&ZeroWidthSpace;[payload_size]</td>
   <td><p>sub-transaction data (transactions are variable sized and payload size is in bytes) </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">cosignatures</code></td>
   <td><a href="#cosignature" title="cosignature attached to an aggregate transaction">Cosignature</a></td>
   <td><p>cosignatures data (fills remaining body space after transactions) </p></td>
   </tr>
   </tbody></table>

.. _aggregatebondedtransaction:

AggregateBondedTransaction
==========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 171+ bytes = 0xab+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/aggregate/aggregate.cats#L31">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/aggregate/src/model/AggregateTransaction.h#L57">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an aggregate bonded transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">AGGREGATE_BONDED</code> (<code class="docutils literal">0x4241</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#aggregatetransactionbody" title="binary layout for an aggregate transaction">AggregateTransactionBody</a><span style="float:right">40+ bytes = 0x28+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>aggregate hash of an aggregate's transactions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">payload_size</code></td>
   <td>byte[4]</td>
   <td><p>transaction payload size in bytes <br/><b>Note:</b> this is the total number of bytes occupied by all sub-transactions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">aggregate_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of AggregateTransactionHeader on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions</code></td>
   <td><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a>&ZeroWidthSpace;[payload_size]</td>
   <td><p>sub-transaction data (transactions are variable sized and payload size is in bytes) </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">cosignatures</code></td>
   <td><a href="#cosignature" title="cosignature attached to an aggregate transaction">Cosignature</a></td>
   <td><p>cosignatures data (fills remaining body space after transactions) </p></td>
   </tr>
   </tbody></table>

.. _votingkeylinktransaction:

VotingKeyLinkTransaction
========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 172 bytes = 0xac</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/coresystem/voting_key_link.cats#L18">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/coresystem/src/model/VotingKeyLinkTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded voting key link transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">VOTING_KEY_LINK</code> (<code class="docutils literal">0x4143</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#votingkeylinktransactionbody" title="binary layout for a voting key link transaction">VotingKeyLinkTransactionBody</a><span style="float:right">41 bytes = 0x29</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#votingpublickey" title="">VotingPublicKey</a></td>
   <td><p>linked public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">start_epoch</code></td>
   <td><a href="#finalizationepoch" title="">FinalizationEpoch</a></td>
   <td><p>start finalization epoch </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">end_epoch</code></td>
   <td><a href="#finalizationepoch" title="">FinalizationEpoch</a></td>
   <td><p>end finalization epoch </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#linkaction" title="enumeration of link actions">LinkAction</a></td>
   <td><p>link action </p></td>
   </tr>
   </tbody></table>

.. _embeddedvotingkeylinktransaction:

EmbeddedVotingKeyLinkTransaction
================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 92 bytes = 0x5c</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/coresystem/voting_key_link.cats#L26">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/coresystem/src/model/VotingKeyLinkTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded voting key link transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">VOTING_KEY_LINK</code> (<code class="docutils literal">0x4143</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#votingkeylinktransactionbody" title="binary layout for a voting key link transaction">VotingKeyLinkTransactionBody</a><span style="float:right">41 bytes = 0x29</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#votingpublickey" title="">VotingPublicKey</a></td>
   <td><p>linked public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">start_epoch</code></td>
   <td><a href="#finalizationepoch" title="">FinalizationEpoch</a></td>
   <td><p>start finalization epoch </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">end_epoch</code></td>
   <td><a href="#finalizationepoch" title="">FinalizationEpoch</a></td>
   <td><p>end finalization epoch </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#linkaction" title="enumeration of link actions">LinkAction</a></td>
   <td><p>link action </p></td>
   </tr>
   </tbody></table>

.. _vrfkeylinktransaction:

VrfKeyLinkTransaction
=====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 164 bytes = 0xa4</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/coresystem/vrf_key_link.cats#L12">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/coresystem/src/model/VrfKeyLinkTransaction.h#L33">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded vrf key link transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">VRF_KEY_LINK</code> (<code class="docutils literal">0x4243</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#vrfkeylinktransactionbody" title="binary layout for a vrf key link transaction">VrfKeyLinkTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>linked public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#linkaction" title="enumeration of link actions">LinkAction</a></td>
   <td><p>link action </p></td>
   </tr>
   </tbody></table>

.. _embeddedvrfkeylinktransaction:

EmbeddedVrfKeyLinkTransaction
=============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 84 bytes = 0x54</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/coresystem/vrf_key_link.cats#L20">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/coresystem/src/model/VrfKeyLinkTransaction.h#L33">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded vrf key link transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">VRF_KEY_LINK</code> (<code class="docutils literal">0x4243</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#vrfkeylinktransactionbody" title="binary layout for a vrf key link transaction">VrfKeyLinkTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>linked public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#linkaction" title="enumeration of link actions">LinkAction</a></td>
   <td><p>link action </p></td>
   </tr>
   </tbody></table>

.. _hashlocktransaction:

HashLockTransaction
===================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 187 bytes = 0xbb</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_hash/hash_lock.cats#L15">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_hash/src/model/HashLockTransaction.h#L57">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded hash lock transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">HASH_LOCK</code> (<code class="docutils literal">0x4148</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#hashlocktransactionbody" title="binary layout for a hash lock transaction">HashLockTransactionBody</a><span style="float:right">56 bytes = 0x38</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#unresolvedmosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a></td>
   <td><p>lock mosaic </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#blockduration" title="">BlockDuration</a></td>
   <td><p>number of blocks for which a lock should be valid </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>lock hash </p></td>
   </tr>
   </tbody></table>

.. _embeddedhashlocktransaction:

EmbeddedHashLockTransaction
===========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 107 bytes = 0x6b</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_hash/hash_lock.cats#L23">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_hash/src/model/HashLockTransaction.h#L57">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded hash lock transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">HASH_LOCK</code> (<code class="docutils literal">0x4148</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#hashlocktransactionbody" title="binary layout for a hash lock transaction">HashLockTransactionBody</a><span style="float:right">56 bytes = 0x38</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#unresolvedmosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a></td>
   <td><p>lock mosaic </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#blockduration" title="">BlockDuration</a></td>
   <td><p>number of blocks for which a lock should be valid </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>lock hash </p></td>
   </tr>
   </tbody></table>

.. _secretlocktransaction:

SecretLockTransaction
=====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 212 bytes = 0xd4</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_secret/secret_lock.cats#L22">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_secret/src/model/SecretLockTransaction.h#L64">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded secret lock transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">SECRET_LOCK</code> (<code class="docutils literal">0x4152</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#secretlocktransactionbody" title="binary layout for a secret lock transaction">SecretLockTransactionBody</a><span style="float:right">81 bytes = 0x51</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>locked mosaic recipient address </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secret</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>secret </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#unresolvedmosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a></td>
   <td><p>locked mosaic </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#blockduration" title="">BlockDuration</a></td>
   <td><p>number of blocks for which a lock should be valid </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash_algorithm</code></td>
   <td><a href="#lockhashalgorithm" title="enumeration of lock hash algorithms">LockHashAlgorithm</a></td>
   <td><p>hash algorithm </p></td>
   </tr>
   </tbody></table>

.. _embeddedsecretlocktransaction:

EmbeddedSecretLockTransaction
=============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 132 bytes = 0x84</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_secret/secret_lock.cats#L30">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_secret/src/model/SecretLockTransaction.h#L64">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded secret lock transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">SECRET_LOCK</code> (<code class="docutils literal">0x4152</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#secretlocktransactionbody" title="binary layout for a secret lock transaction">SecretLockTransactionBody</a><span style="float:right">81 bytes = 0x51</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>locked mosaic recipient address </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secret</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>secret </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#unresolvedmosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a></td>
   <td><p>locked mosaic </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#blockduration" title="">BlockDuration</a></td>
   <td><p>number of blocks for which a lock should be valid </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash_algorithm</code></td>
   <td><a href="#lockhashalgorithm" title="enumeration of lock hash algorithms">LockHashAlgorithm</a></td>
   <td><p>hash algorithm </p></td>
   </tr>
   </tbody></table>

.. _secretprooftransaction:

SecretProofTransaction
======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 190+ bytes = 0xbe+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_secret/secret_proof.cats#L22">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_secret/src/model/SecretProofTransaction.h#L69">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded secret proof transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">SECRET_PROOF</code> (<code class="docutils literal">0x4252</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#secretprooftransactionbody" title="binary layout for a secret proof transaction">SecretProofTransactionBody</a><span style="float:right">59+ bytes = 0x3b+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>locked mosaic recipient address </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secret</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>secret </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">proof_size</code></td>
   <td>byte[2]</td>
   <td><p>proof size in bytes </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash_algorithm</code></td>
   <td><a href="#lockhashalgorithm" title="enumeration of lock hash algorithms">LockHashAlgorithm</a></td>
   <td><p>hash algorithm </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">proof</code></td>
   <td>byte[proof_size]</td>
   <td><p>proof data </p></td>
   </tr>
   </tbody></table>

.. _embeddedsecretprooftransaction:

EmbeddedSecretProofTransaction
==============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 110+ bytes = 0x6e+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_secret/secret_proof.cats#L30">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_secret/src/model/SecretProofTransaction.h#L69">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded secret proof transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">SECRET_PROOF</code> (<code class="docutils literal">0x4252</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#secretprooftransactionbody" title="binary layout for a secret proof transaction">SecretProofTransactionBody</a><span style="float:right">59+ bytes = 0x3b+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>locked mosaic recipient address </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secret</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>secret </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">proof_size</code></td>
   <td>byte[2]</td>
   <td><p>proof size in bytes </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash_algorithm</code></td>
   <td><a href="#lockhashalgorithm" title="enumeration of lock hash algorithms">LockHashAlgorithm</a></td>
   <td><p>hash algorithm </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">proof</code></td>
   <td>byte[proof_size]</td>
   <td><p>proof data </p></td>
   </tr>
   </tbody></table>

.. _accountmetadatatransaction:

AccountMetadataTransaction
==========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 167+ bytes = 0xa7+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/account_metadata.cats#L23">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/AccountMetadataTransaction.h#L38">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded account metadata transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_METADATA</code> (<code class="docutils literal">0x4144</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#accountmetadatatransactionbody" title="binary layout for an account metadata transaction">AccountMetadataTransactionBody</a><span style="float:right">36+ bytes = 0x24+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>metadata target address </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td><p>metadata key scoped to source, target and type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td><p>change in value size in bytes </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td><p>value size in bytes </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td><p>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value) </p></td>
   </tr>
   </tbody></table>

.. _embeddedaccountmetadatatransaction:

EmbeddedAccountMetadataTransaction
==================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 87+ bytes = 0x57+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/account_metadata.cats#L31">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/AccountMetadataTransaction.h#L38">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded account metadata transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_METADATA</code> (<code class="docutils literal">0x4144</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#accountmetadatatransactionbody" title="binary layout for an account metadata transaction">AccountMetadataTransactionBody</a><span style="float:right">36+ bytes = 0x24+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>metadata target address </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td><p>metadata key scoped to source, target and type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td><p>change in value size in bytes </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td><p>value size in bytes </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td><p>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value) </p></td>
   </tr>
   </tbody></table>

.. _mosaicmetadatatransaction:

MosaicMetadataTransaction
=========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 175+ bytes = 0xaf+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/mosaic_metadata.cats#L26">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/MosaicMetadataTransaction.h#L45">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded mosaic metadata transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_METADATA</code> (<code class="docutils literal">0x4244</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaicmetadatatransactionbody" title="binary layout for a mosaic metadata transaction">MosaicMetadataTransactionBody</a><span style="float:right">44+ bytes = 0x2c+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>metadata target address </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td><p>metadata key scoped to source, target and type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>target mosaic identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td><p>change in value size in bytes </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td><p>value size in bytes </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td><p>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value) </p></td>
   </tr>
   </tbody></table>

.. _embeddedmosaicmetadatatransaction:

EmbeddedMosaicMetadataTransaction
=================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 95+ bytes = 0x5f+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/mosaic_metadata.cats#L34">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/MosaicMetadataTransaction.h#L45">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded mosaic metadata transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_METADATA</code> (<code class="docutils literal">0x4244</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaicmetadatatransactionbody" title="binary layout for a mosaic metadata transaction">MosaicMetadataTransactionBody</a><span style="float:right">44+ bytes = 0x2c+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>metadata target address </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td><p>metadata key scoped to source, target and type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>target mosaic identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td><p>change in value size in bytes </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td><p>value size in bytes </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td><p>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value) </p></td>
   </tr>
   </tbody></table>

.. _namespacemetadatatransaction:

NamespaceMetadataTransaction
============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 175+ bytes = 0xaf+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/namespace_metadata.cats#L27">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/NamespaceMetadataTransaction.h#L46">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded namespace metadata transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">NAMESPACE_METADATA</code> (<code class="docutils literal">0x4344</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#namespacemetadatatransactionbody" title="binary layout for a namespace metadata transaction">NamespaceMetadataTransactionBody</a><span style="float:right">44+ bytes = 0x2c+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>metadata target address </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td><p>metadata key scoped to source, target and type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_namespace_id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>target namespace identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td><p>change in value size in bytes </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td><p>value size in bytes </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td><p>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value) </p></td>
   </tr>
   </tbody></table>

.. _embeddednamespacemetadatatransaction:

EmbeddedNamespaceMetadataTransaction
====================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 95+ bytes = 0x5f+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/namespace_metadata.cats#L35">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/NamespaceMetadataTransaction.h#L46">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded namespace metadata transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">NAMESPACE_METADATA</code> (<code class="docutils literal">0x4344</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#namespacemetadatatransactionbody" title="binary layout for a namespace metadata transaction">NamespaceMetadataTransactionBody</a><span style="float:right">44+ bytes = 0x2c+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>metadata target address </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td><p>metadata key scoped to source, target and type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_namespace_id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>target namespace identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td><p>change in value size in bytes </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td><p>value size in bytes </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td><p>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value) </p></td>
   </tr>
   </tbody></table>

.. _mosaicdefinitiontransaction:

MosaicDefinitionTransaction
===========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 153 bytes = 0x99</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_definition.cats#L22">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicDefinitionTransaction.h#L65">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded mosaic definition transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_DEFINITION</code> (<code class="docutils literal">0x414d</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaicdefinitiontransactionbody" title="binary layout for a mosaic definition transaction">MosaicDefinitionTransactionBody</a><span style="float:right">22 bytes = 0x16</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">id</code></td>
   <td><a href="#mosaicid" title="">MosaicId</a></td>
   <td><p>mosaic identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#blockduration" title="">BlockDuration</a></td>
   <td><p>mosaic duration </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">nonce</code></td>
   <td><a href="#mosaicnonce" title="">MosaicNonce</a></td>
   <td><p>mosaic nonce </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">flags</code></td>
   <td><a href="#mosaicflags" title="enumeration of mosaic property flags">MosaicFlags</a></td>
   <td><p>mosaic flags </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">divisibility</code></td>
   <td>byte[1]</td>
   <td><p>mosaic divisibility </p></td>
   </tr>
   </tbody></table>

.. _embeddedmosaicdefinitiontransaction:

EmbeddedMosaicDefinitionTransaction
===================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 73 bytes = 0x49</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_definition.cats#L30">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicDefinitionTransaction.h#L65">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded mosaic definition transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_DEFINITION</code> (<code class="docutils literal">0x414d</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaicdefinitiontransactionbody" title="binary layout for a mosaic definition transaction">MosaicDefinitionTransactionBody</a><span style="float:right">22 bytes = 0x16</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">id</code></td>
   <td><a href="#mosaicid" title="">MosaicId</a></td>
   <td><p>mosaic identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#blockduration" title="">BlockDuration</a></td>
   <td><p>mosaic duration </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">nonce</code></td>
   <td><a href="#mosaicnonce" title="">MosaicNonce</a></td>
   <td><p>mosaic nonce </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">flags</code></td>
   <td><a href="#mosaicflags" title="enumeration of mosaic property flags">MosaicFlags</a></td>
   <td><p>mosaic flags </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">divisibility</code></td>
   <td>byte[1]</td>
   <td><p>mosaic divisibility </p></td>
   </tr>
   </tbody></table>

.. _mosaicsupplychangetransaction:

MosaicSupplyChangeTransaction
=============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 148 bytes = 0x94</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_supply_change.cats#L16">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicSupplyChangeTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded mosaic supply change transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_SUPPLY_CHANGE</code> (<code class="docutils literal">0x424d</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaicsupplychangetransactionbody" title="binary layout for a mosaic supply change transaction">MosaicSupplyChangeTransactionBody</a><span style="float:right">17 bytes = 0x11</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>affected mosaic identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">delta</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>change amount </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">action</code></td>
   <td><a href="#mosaicsupplychangeaction" title="enumeration of mosaic supply change actions">MosaicSupplyChangeAction</a></td>
   <td><p>supply change action </p></td>
   </tr>
   </tbody></table>

.. _embeddedmosaicsupplychangetransaction:

EmbeddedMosaicSupplyChangeTransaction
=====================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 68 bytes = 0x44</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_supply_change.cats#L24">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicSupplyChangeTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded mosaic supply change transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_SUPPLY_CHANGE</code> (<code class="docutils literal">0x424d</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaicsupplychangetransactionbody" title="binary layout for a mosaic supply change transaction">MosaicSupplyChangeTransactionBody</a><span style="float:right">17 bytes = 0x11</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>affected mosaic identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">delta</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>change amount </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">action</code></td>
   <td><a href="#mosaicsupplychangeaction" title="enumeration of mosaic supply change actions">MosaicSupplyChangeAction</a></td>
   <td><p>supply change action </p></td>
   </tr>
   </tbody></table>

.. _multisigaccountmodificationtransaction:

MultisigAccountModificationTransaction
======================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 139+ bytes = 0x8b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/multisig/multisig_account_modification.cats#L27">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/multisig/src/model/MultisigAccountModificationTransaction.h#L83">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded multisig account modification transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MULTISIG_ACCOUNT_MODIFICATION</code> (<code class="docutils literal">0x4155</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#multisigaccountmodificationtransactionbody" title="binary layout for a multisig account modification transaction">MultisigAccountModificationTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">min_removal_delta</code></td>
   <td>byte[1]</td>
   <td><p>relative change of the minimal number of cosignatories required when removing an account </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">min_approval_delta</code></td>
   <td>byte[1]</td>
   <td><p>relative change of the minimal number of cosignatories required when approving a transaction </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_additions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of cosignatory address additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_deletions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of cosignatory address deletions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">multisig_&ZeroWidthSpace;account_&ZeroWidthSpace;modification_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align addressAdditions on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_additions</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a>&ZeroWidthSpace;[address_additions_count]</td>
   <td><p>cosignatory address additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_deletions</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a>&ZeroWidthSpace;[address_deletions_count]</td>
   <td><p>cosignatory address deletions </p></td>
   </tr>
   </tbody></table>

.. _embeddedmultisigaccountmodificationtransaction:

EmbeddedMultisigAccountModificationTransaction
==============================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 59+ bytes = 0x3b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/multisig/multisig_account_modification.cats#L35">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/multisig/src/model/MultisigAccountModificationTransaction.h#L83">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded multisig account modification transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MULTISIG_ACCOUNT_MODIFICATION</code> (<code class="docutils literal">0x4155</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#multisigaccountmodificationtransactionbody" title="binary layout for a multisig account modification transaction">MultisigAccountModificationTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">min_removal_delta</code></td>
   <td>byte[1]</td>
   <td><p>relative change of the minimal number of cosignatories required when removing an account </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">min_approval_delta</code></td>
   <td>byte[1]</td>
   <td><p>relative change of the minimal number of cosignatories required when approving a transaction </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_additions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of cosignatory address additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_deletions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of cosignatory address deletions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">multisig_&ZeroWidthSpace;account_&ZeroWidthSpace;modification_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align addressAdditions on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_additions</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a>&ZeroWidthSpace;[address_additions_count]</td>
   <td><p>cosignatory address additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_deletions</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a>&ZeroWidthSpace;[address_deletions_count]</td>
   <td><p>cosignatory address deletions </p></td>
   </tr>
   </tbody></table>

.. _addressaliastransaction:

AddressAliasTransaction
=======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 164 bytes = 0xa4</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/address_alias.cats#L16">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/AddressAliasTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded address alias transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ADDRESS_ALIAS</code> (<code class="docutils literal">0x424e</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#addressaliastransactionbody" title="binary layout for an address alias transaction">AddressAliasTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">namespace_id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>identifier of the namespace that will become an alias </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>aliased address </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">alias_action</code></td>
   <td><a href="#aliasaction" title="enumeration of alias actions">AliasAction</a></td>
   <td><p>alias action </p></td>
   </tr>
   </tbody></table>

.. _embeddedaddressaliastransaction:

EmbeddedAddressAliasTransaction
===============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 84 bytes = 0x54</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/address_alias.cats#L24">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/AddressAliasTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded address alias transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ADDRESS_ALIAS</code> (<code class="docutils literal">0x424e</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#addressaliastransactionbody" title="binary layout for an address alias transaction">AddressAliasTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">namespace_id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>identifier of the namespace that will become an alias </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>aliased address </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">alias_action</code></td>
   <td><a href="#aliasaction" title="enumeration of alias actions">AliasAction</a></td>
   <td><p>alias action </p></td>
   </tr>
   </tbody></table>

.. _mosaicaliastransaction:

MosaicAliasTransaction
======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 148 bytes = 0x94</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/mosaic_alias.cats#L16">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/MosaicAliasTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded mosaic alias transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_ALIAS</code> (<code class="docutils literal">0x434e</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaicaliastransactionbody" title="binary layout for an mosaic alias transaction">MosaicAliasTransactionBody</a><span style="float:right">17 bytes = 0x11</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">namespace_id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>identifier of the namespace that will become an alias </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#mosaicid" title="">MosaicId</a></td>
   <td><p>aliased mosaic identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">alias_action</code></td>
   <td><a href="#aliasaction" title="enumeration of alias actions">AliasAction</a></td>
   <td><p>alias action </p></td>
   </tr>
   </tbody></table>

.. _embeddedmosaicaliastransaction:

EmbeddedMosaicAliasTransaction
==============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 68 bytes = 0x44</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/mosaic_alias.cats#L24">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/MosaicAliasTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded mosaic alias transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_ALIAS</code> (<code class="docutils literal">0x434e</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaicaliastransactionbody" title="binary layout for an mosaic alias transaction">MosaicAliasTransactionBody</a><span style="float:right">17 bytes = 0x11</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">namespace_id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>identifier of the namespace that will become an alias </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#mosaicid" title="">MosaicId</a></td>
   <td><p>aliased mosaic identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">alias_action</code></td>
   <td><a href="#aliasaction" title="enumeration of alias actions">AliasAction</a></td>
   <td><p>alias action </p></td>
   </tr>
   </tbody></table>

.. _namespaceregistrationtransaction:

NamespaceRegistrationTransaction
================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 157+ bytes = 0x9d+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/namespace_registration.cats#L25">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/NamespaceRegistrationTransaction.h#L95">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded namespace registration transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">NAMESPACE_REGISTRATION</code> (<code class="docutils literal">0x414e</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#namespaceregistrationtransactionbody" title="binary layout for a namespace registration transaction">NamespaceRegistrationTransactionBody</a><span style="float:right">26+ bytes = 0x1a+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#blockduration" title="">BlockDuration</a></td>
   <td><p>namespace duration </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">parent_id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>parent namespace identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>namespace identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">registration_type</code></td>
   <td><a href="#namespaceregistrationtype" title="enumeration of namespace registration types">NamespaceRegistrationType</a></td>
   <td><p>namespace registration type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">name_size</code></td>
   <td>byte[1]</td>
   <td><p>namespace name size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">name</code></td>
   <td>byte[name_size]</td>
   <td><p>namespace name </p></td>
   </tr>
   </tbody></table>

.. _embeddednamespaceregistrationtransaction:

EmbeddedNamespaceRegistrationTransaction
========================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 77+ bytes = 0x4d+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/namespace_registration.cats#L33">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/NamespaceRegistrationTransaction.h#L95">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded namespace registration transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">NAMESPACE_REGISTRATION</code> (<code class="docutils literal">0x414e</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#namespaceregistrationtransactionbody" title="binary layout for a namespace registration transaction">NamespaceRegistrationTransactionBody</a><span style="float:right">26+ bytes = 0x1a+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#blockduration" title="">BlockDuration</a></td>
   <td><p>namespace duration </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">parent_id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>parent namespace identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>namespace identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">registration_type</code></td>
   <td><a href="#namespaceregistrationtype" title="enumeration of namespace registration types">NamespaceRegistrationType</a></td>
   <td><p>namespace registration type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">name_size</code></td>
   <td>byte[1]</td>
   <td><p>namespace name size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">name</code></td>
   <td>byte[name_size]</td>
   <td><p>namespace name </p></td>
   </tr>
   </tbody></table>

.. _accountaddressrestrictiontransaction:

AccountAddressRestrictionTransaction
====================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 139+ bytes = 0x8b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_address_restriction.cats#L25">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_account/src/model/AccountRestrictionSharedTransaction.h#L86">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded account address restriction transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_ADDRESS_RESTRICTION</code> (<code class="docutils literal">0x4150</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#accountaddressrestrictiontransactionbody" title="binary layout for an account address restriction transaction">AccountAddressRestrictionTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#accountrestrictionflags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td><p>account restriction flags </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction deletions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align restrictionAdditions on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td><p>account restriction additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td><p>account restriction deletions </p></td>
   </tr>
   </tbody></table>

.. _embeddedaccountaddressrestrictiontransaction:

EmbeddedAccountAddressRestrictionTransaction
============================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 59+ bytes = 0x3b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_address_restriction.cats#L33">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_account/src/model/AccountRestrictionSharedTransaction.h#L86">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded account address restriction transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_ADDRESS_RESTRICTION</code> (<code class="docutils literal">0x4150</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#accountaddressrestrictiontransactionbody" title="binary layout for an account address restriction transaction">AccountAddressRestrictionTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#accountrestrictionflags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td><p>account restriction flags </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction deletions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align restrictionAdditions on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td><p>account restriction additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td><p>account restriction deletions </p></td>
   </tr>
   </tbody></table>

.. _accountmosaicrestrictiontransaction:

AccountMosaicRestrictionTransaction
===================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 139+ bytes = 0x8b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_mosaic_restriction.cats#L25">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_account/src/model/AccountRestrictionSharedTransaction.h#L86">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded account mosaic restriction transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_MOSAIC_RESTRICTION</code> (<code class="docutils literal">0x4250</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#accountmosaicrestrictiontransactionbody" title="binary layout for an account mosaic restriction transaction">AccountMosaicRestrictionTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#accountrestrictionflags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td><p>account restriction flags </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction deletions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align restrictionAdditions on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td><p>account restriction additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td><p>account restriction deletions </p></td>
   </tr>
   </tbody></table>

.. _embeddedaccountmosaicrestrictiontransaction:

EmbeddedAccountMosaicRestrictionTransaction
===========================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 59+ bytes = 0x3b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_mosaic_restriction.cats#L33">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_account/src/model/AccountRestrictionSharedTransaction.h#L86">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded account mosaic restriction transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_MOSAIC_RESTRICTION</code> (<code class="docutils literal">0x4250</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#accountmosaicrestrictiontransactionbody" title="binary layout for an account mosaic restriction transaction">AccountMosaicRestrictionTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#accountrestrictionflags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td><p>account restriction flags </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction deletions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align restrictionAdditions on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td><p>account restriction additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td><p>account restriction deletions </p></td>
   </tr>
   </tbody></table>

.. _accountoperationrestrictiontransaction:

AccountOperationRestrictionTransaction
======================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 139+ bytes = 0x8b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_operation_restriction.cats#L25">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_account/src/model/AccountOperationRestrictionTransaction.h#L30">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded account operation restriction transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_OPERATION_RESTRICTION</code> (<code class="docutils literal">0x4350</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#accountoperationrestrictiontransactionbody" title="binary layout for an account operation restriction transaction">AccountOperationRestrictionTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#accountrestrictionflags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td><p>account restriction flags </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction deletions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align restrictionAdditions on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td><p>account restriction additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td><p>account restriction deletions </p></td>
   </tr>
   </tbody></table>

.. _embeddedaccountoperationrestrictiontransaction:

EmbeddedAccountOperationRestrictionTransaction
==============================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 59+ bytes = 0x3b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_operation_restriction.cats#L33">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_account/src/model/AccountOperationRestrictionTransaction.h#L30">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded account operation restriction transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_OPERATION_RESTRICTION</code> (<code class="docutils literal">0x4350</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#accountoperationrestrictiontransactionbody" title="binary layout for an account operation restriction transaction">AccountOperationRestrictionTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#accountrestrictionflags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td><p>account restriction flags </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction deletions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align restrictionAdditions on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td><p>account restriction additions </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td><p>account restriction deletions </p></td>
   </tr>
   </tbody></table>

.. _mosaicaddressrestrictiontransaction:

MosaicAddressRestrictionTransaction
===================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 187 bytes = 0xbb</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_mosaic/mosaic_address_restriction.cats#L21">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/model/MosaicAddressRestrictionTransaction.h#L62">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded mosaic address restriction transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_ADDRESS_RESTRICTION</code> (<code class="docutils literal">0x4251</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaicaddressrestrictiontransactionbody" title="binary layout for a mosaic address restriction transaction">MosaicAddressRestrictionTransactionBody</a><span style="float:right">56 bytes = 0x38</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>identifier of the mosaic to which the restriction applies </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_key</code></td>
   <td>byte[8]</td>
   <td><p>restriction key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_value</code></td>
   <td>byte[8]</td>
   <td><p>previous restriction value </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_value</code></td>
   <td>byte[8]</td>
   <td><p>new restriction value </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>address being restricted </p></td>
   </tr>
   </tbody></table>

.. _embeddedmosaicaddressrestrictiontransaction:

EmbeddedMosaicAddressRestrictionTransaction
===========================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 107 bytes = 0x6b</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_mosaic/mosaic_address_restriction.cats#L29">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/model/MosaicAddressRestrictionTransaction.h#L62">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded mosaic address restriction transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_ADDRESS_RESTRICTION</code> (<code class="docutils literal">0x4251</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaicaddressrestrictiontransactionbody" title="binary layout for a mosaic address restriction transaction">MosaicAddressRestrictionTransactionBody</a><span style="float:right">56 bytes = 0x38</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>identifier of the mosaic to which the restriction applies </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_key</code></td>
   <td>byte[8]</td>
   <td><p>restriction key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_value</code></td>
   <td>byte[8]</td>
   <td><p>previous restriction value </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_value</code></td>
   <td>byte[8]</td>
   <td><p>new restriction value </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>address being restricted </p></td>
   </tr>
   </tbody></table>

.. _mosaicglobalrestrictiontransaction:

MosaicGlobalRestrictionTransaction
==================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 173 bytes = 0xad</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_mosaic/mosaic_global_restriction.cats#L28">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/model/MosaicGlobalRestrictionTransaction.h#L69">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded mosaic global restriction transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_GLOBAL_RESTRICTION</code> (<code class="docutils literal">0x4151</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaicglobalrestrictiontransactionbody" title="binary layout for a mosaic global restriction transaction">MosaicGlobalRestrictionTransactionBody</a><span style="float:right">42 bytes = 0x2a</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>identifier of the mosaic being restricted </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">reference_mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>identifier of the mosaic providing the restriction key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_key</code></td>
   <td>byte[8]</td>
   <td><p>restriction key relative to the reference mosaic identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_value</code></td>
   <td>byte[8]</td>
   <td><p>previous restriction value </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_value</code></td>
   <td>byte[8]</td>
   <td><p>new restriction value </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_type</code></td>
   <td><a href="#mosaicrestrictiontype" title="enumeration of mosaic restriction types">MosaicRestrictionType</a></td>
   <td><p>previous restriction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_type</code></td>
   <td><a href="#mosaicrestrictiontype" title="enumeration of mosaic restriction types">MosaicRestrictionType</a></td>
   <td><p>new restriction type </p></td>
   </tr>
   </tbody></table>

.. _embeddedmosaicglobalrestrictiontransaction:

EmbeddedMosaicGlobalRestrictionTransaction
==========================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 93 bytes = 0x5d</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_mosaic/mosaic_global_restriction.cats#L36">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/model/MosaicGlobalRestrictionTransaction.h#L69">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded mosaic global restriction transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_GLOBAL_RESTRICTION</code> (<code class="docutils literal">0x4151</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaicglobalrestrictiontransactionbody" title="binary layout for a mosaic global restriction transaction">MosaicGlobalRestrictionTransactionBody</a><span style="float:right">42 bytes = 0x2a</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>identifier of the mosaic being restricted </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">reference_mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>identifier of the mosaic providing the restriction key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_key</code></td>
   <td>byte[8]</td>
   <td><p>restriction key relative to the reference mosaic identifier </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_value</code></td>
   <td>byte[8]</td>
   <td><p>previous restriction value </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_value</code></td>
   <td>byte[8]</td>
   <td><p>new restriction value </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_type</code></td>
   <td><a href="#mosaicrestrictiontype" title="enumeration of mosaic restriction types">MosaicRestrictionType</a></td>
   <td><p>previous restriction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_type</code></td>
   <td><a href="#mosaicrestrictiontype" title="enumeration of mosaic restriction types">MosaicRestrictionType</a></td>
   <td><p>new restriction type </p></td>
   </tr>
   </tbody></table>

.. _transfertransaction:

TransferTransaction
===================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 163+ bytes = 0xa3+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/transfer/transfer.cats#L27">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/transfer/src/model/TransferTransaction.h#L81">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a non-embedded transfer transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">TRANSFER</code> (<code class="docutils literal">0x4154</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transfertransactionbody" title="binary layout for a transfer transaction">TransferTransactionBody</a><span style="float:right">32+ bytes = 0x20+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>recipient address </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">message_size</code></td>
   <td>byte[2]</td>
   <td><p>size of attached message </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaics_count</code></td>
   <td>byte[1]</td>
   <td><p>number of attached mosaics </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transfer_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align mosaics on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transfer_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;2</code></td>
   <td>byte[1]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align mosaics on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaics</code></td>
   <td><a href="#unresolvedmosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a>&ZeroWidthSpace;[mosaics_count]</td>
   <td><p>attached mosaics </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">message</code></td>
   <td>byte[message_size]</td>
   <td><p>attached message </p></td>
   </tr>
   </tbody></table>

.. _embeddedtransfertransaction:

EmbeddedTransferTransaction
===========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 83+ bytes = 0x53+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/transfer/transfer.cats#L35">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/transfer/src/model/TransferTransaction.h#L81">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded transfer transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_VERSION</code></td>
   <td>byte[1]</td>
   <td><b>const</b> <code class="docutils literal">1</code><br/></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">TRANSFER</code> (<code class="docutils literal">0x4154</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transfertransactionbody" title="binary layout for a transfer transaction">TransferTransactionBody</a><span style="float:right">32+ bytes = 0x20+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>recipient address </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">message_size</code></td>
   <td>byte[2]</td>
   <td><p>size of attached message </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaics_count</code></td>
   <td>byte[1]</td>
   <td><p>number of attached mosaics </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transfer_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align mosaics on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transfer_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;2</code></td>
   <td>byte[1]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align mosaics on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaics</code></td>
   <td><a href="#unresolvedmosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a>&ZeroWidthSpace;[mosaics_count]</td>
   <td><p>attached mosaics </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">message</code></td>
   <td>byte[message_size]</td>
   <td><p>attached message </p></td>
   </tr>
   </tbody></table>

Inner Structures
****************

These are structures only meant to be included inside other structures.
Their description is already present in the containing structures above and is only repeated here for completeness.

.. _sizeprefixedentity:

SizePrefixedEntity
==================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 4 bytes = 0x4</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/entity.cats#L12">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/SizePrefixedEntity.h#L32">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a size-prefixed entity </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#blockheader" title="binary layout for a block header">BlockHeader</a>, <a href="#receipt" title="binary layout for a receipt entity">Receipt</a>, <a href="#transaction" title="binary layout for a transaction">Transaction</a>, <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a>
   </tr></td>

   </tbody></table>

.. _verifiableentity:

VerifiableEntity
================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 68 bytes = 0x44</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/entity.cats#L17">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/VerifiableEntity.h#L47">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a verifiable entity </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#blockheader" title="binary layout for a block header">BlockHeader</a>, <a href="#transaction" title="binary layout for a transaction">Transaction</a>
   </tr></td>

   </tbody></table>

.. _entitybody:

EntityBody
==========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 38 bytes = 0x26</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/entity.cats#L25">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/EntityBody.h#L33">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a blockchain entity (block or transaction) </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#blockheader" title="binary layout for a block header">BlockHeader</a>, <a href="#transaction" title="binary layout for a transaction">Transaction</a>, <a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a>
   </tr></td>

   </tbody></table>

.. _blockheader:

BlockHeader
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 372 bytes = 0x174</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/block.cats#L30">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/WeakEntityInfo.h#L28">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a block header </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#blocktype" title="enumeration of block types">BlockType</a></td>
   <td><p>block type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td><p>block height </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">timestamp</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>number of milliseconds elapsed since creation of nemesis block </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">difficulty</code></td>
   <td><a href="#difficulty" title="">Difficulty</a></td>
   <td><p>block difficulty </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">generation_hash_proof</code></td>
   <td><a href="#vrfproof" title="verfiable random function proof">VrfProof</a></td>
   <td><p>generation hash proof </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_block_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>previous block hash </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>hash of the transactions in this block </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">receipts_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>hash of the receipts generated by this block </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">state_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>hash of the global chain state at this block </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">beneficiary_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>beneficiary address designated by harvester </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee_multiplier</code></td>
   <td><a href="#blockfeemultiplier" title="">BlockFeeMultiplier</a></td>
   <td><p>fee multiplier applied to block transactions </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#nemesisblockheader" title="binary layout for a nemesis block header">NemesisBlockHeader</a>, <a href="#normalblockheader" title="binary layout for a normal block header">NormalBlockHeader</a>, <a href="#importanceblockheader" title="binary layout for an importance block header">ImportanceBlockHeader</a>
   </tr></td>

   </tbody></table>

.. _importanceblockfooter:

ImportanceBlockFooter
=====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 52 bytes = 0x34</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/block.cats#L69">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/Block.h#L85">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an importance block footer </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">voting_eligible_accounts_count</code></td>
   <td>byte[4]</td>
   <td><p>number of voting eligible accounts </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">harvesting_&ZeroWidthSpace;eligible_&ZeroWidthSpace;accounts_&ZeroWidthSpace;count</code></td>
   <td>byte[8]</td>
   <td><p>number of harvesting eligible accounts </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">total_voting_balance</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>total balance eligible for voting </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_importance_block_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>previous importance block hash </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#nemesisblockheader" title="binary layout for a nemesis block header">NemesisBlockHeader</a>, <a href="#importanceblockheader" title="binary layout for an importance block header">ImportanceBlockHeader</a>
   </tr></td>

   </tbody></table>

.. _receipt:

Receipt
=======

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8 bytes = 0x8</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/receipts.cats#L57">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/Receipt.h#L35">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a receipt entity </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>receipt version </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipttype" title="enumeration of receipt types">ReceiptType</a></td>
   <td><p>receipt type </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#balancetransferreceipt" title="binary layout for a balance transfer receipt">BalanceTransferReceipt</a>, <a href="#balancechangereceipt" title="binary layout for a balance change receipt">BalanceChangeReceipt</a>, <a href="#inflationreceipt" title="binary layout for an inflation receipt">InflationReceipt</a>, <a href="#mosaicexpiryreceipt" title="binary layout for a mosaic expiry receipt">MosaicExpiryReceipt</a>, <a href="#namespaceexpiryreceipt" title="binary layout for a namespace expiry receipt">NamespaceExpiryReceipt</a>, <a href="#mosaicresolutionstatement" title="binary layout for a mosaic resolution statement">MosaicResolutionStatement</a>, <a href="#addressresolutionstatement" title="binary layout for an address resolution statement">AddressResolutionStatement</a>
   </tr></td>

   </tbody></table>

.. _stateheader:

StateHeader
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 2 bytes = 0x2</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/state_header.cats#L2">schema</a></td></tr>
       </table></div>
   <p>header common to all serialized states </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td><p>serialization version </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#accountstate" title="binary layout for non-historical account state">AccountState</a>, <a href="#hashlockinfo" title="binary layout for hash lock transaction info">HashLockInfo</a>, <a href="#metadataentry" title="binary layout of a metadata entry">MetadataEntry</a>, <a href="#mosaicentry" title="binary layout for mosaic entry">MosaicEntry</a>, <a href="#multisigentry" title="binary layout for a multisig entry">MultisigEntry</a>, <a href="#rootnamespacehistory" title="binary layout for non-historical root namespace history">RootNamespaceHistory</a>, <a href="#accountrestrictions" title="binary layout for account restrictions">AccountRestrictions</a>, <a href="#mosaicrestrictionentry" title="binary layout for a mosaic restriction">MosaicRestrictionEntry</a>, <a href="#secretlockinfo" title="binary layout for serialized lock transaction">SecretLockInfo</a>
   </tr></td>

   </tbody></table>

.. _transaction:

Transaction
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 128 bytes = 0x80</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/transaction.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/tests/test/local/RealTransactionFactory.h#L28">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#verifiableentity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align byte[64] on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>entity signature </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>transaction fee </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td><p>transaction deadline </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#accountkeylinktransaction" title="This transaction is required for all accounts wanting to activate remote or delegated harvesting.">AccountKeyLinkTransaction</a>, <a href="#nodekeylinktransaction" title="This transaction is required for all accounts willing to activate delegated harvesting.">NodeKeyLinkTransaction</a>, <a href="#aggregatecompletetransaction" title="binary layout for an aggregate complete transaction">AggregateCompleteTransaction</a>, <a href="#aggregatebondedtransaction" title="binary layout for an aggregate bonded transaction">AggregateBondedTransaction</a>, <a href="#votingkeylinktransaction" title="binary layout for a non-embedded voting key link transaction">VotingKeyLinkTransaction</a>, <a href="#vrfkeylinktransaction" title="binary layout for a non-embedded vrf key link transaction">VrfKeyLinkTransaction</a>, <a href="#hashlocktransaction" title="binary layout for a non-embedded hash lock transaction">HashLockTransaction</a>, <a href="#secretlocktransaction" title="binary layout for a non-embedded secret lock transaction">SecretLockTransaction</a>, <a href="#secretprooftransaction" title="binary layout for a non-embedded secret proof transaction">SecretProofTransaction</a>, <a href="#accountmetadatatransaction" title="binary layout for a non-embedded account metadata transaction">AccountMetadataTransaction</a>, <a href="#mosaicmetadatatransaction" title="binary layout for a non-embedded mosaic metadata transaction">MosaicMetadataTransaction</a>, <a href="#namespacemetadatatransaction" title="binary layout for a non-embedded namespace metadata transaction">NamespaceMetadataTransaction</a>, <a href="#mosaicdefinitiontransaction" title="binary layout for a non-embedded mosaic definition transaction">MosaicDefinitionTransaction</a>, <a href="#mosaicsupplychangetransaction" title="binary layout for a non-embedded mosaic supply change transaction">MosaicSupplyChangeTransaction</a>, <a href="#multisigaccountmodificationtransaction" title="binary layout for a non-embedded multisig account modification transaction">MultisigAccountModificationTransaction</a>, <a href="#addressaliastransaction" title="binary layout for a non-embedded address alias transaction">AddressAliasTransaction</a>, <a href="#mosaicaliastransaction" title="binary layout for a non-embedded mosaic alias transaction">MosaicAliasTransaction</a>, <a href="#namespaceregistrationtransaction" title="binary layout for a non-embedded namespace registration transaction">NamespaceRegistrationTransaction</a>, <a href="#accountaddressrestrictiontransaction" title="binary layout for a non-embedded account address restriction transaction">AccountAddressRestrictionTransaction</a>, <a href="#accountmosaicrestrictiontransaction" title="binary layout for a non-embedded account mosaic restriction transaction">AccountMosaicRestrictionTransaction</a>, <a href="#accountoperationrestrictiontransaction" title="binary layout for a non-embedded account operation restriction transaction">AccountOperationRestrictionTransaction</a>, <a href="#mosaicaddressrestrictiontransaction" title="binary layout for a non-embedded mosaic address restriction transaction">MosaicAddressRestrictionTransaction</a>, <a href="#mosaicglobalrestrictiontransaction" title="binary layout for a non-embedded mosaic global restriction transaction">MosaicGlobalRestrictionTransaction</a>, <a href="#transfertransaction" title="binary layout for a non-embedded transfer transaction">TransferTransaction</a>
   </tr></td>

   </tbody></table>

.. _embeddedtransactionheader:

EmbeddedTransactionHeader
=========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8 bytes = 0x8</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/transaction.cats#L20">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/EmbeddedTransaction.h#L39">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded transaction header </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a>
   </tr></td>

   </tbody></table>

.. _embeddedtransaction:

EmbeddedTransaction
===================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 48 bytes = 0x30</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/transaction.cats#L27">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/TransactionPlugin.h#L32">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an embedded transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#sizeprefixedentity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td><p>entity size </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#embeddedtransactionheader" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary </p></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>entity signer's public key </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of <a href="#entitybody" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td><p>entity version </p></td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#networktype" title="enumeration of network types">NetworkType</a></td>
   <td><p>entity network </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a></td>
   <td><p>transaction type </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#embeddedaccountkeylinktransaction" title="Embedded version of AccountKeyLinkTransaction">EmbeddedAccountKeyLinkTransaction</a>, <a href="#embeddednodekeylinktransaction" title="Embedded version of NodeKeyLinkTransaction">EmbeddedNodeKeyLinkTransaction</a>, <a href="#embeddedvotingkeylinktransaction" title="binary layout for an embedded voting key link transaction">EmbeddedVotingKeyLinkTransaction</a>, <a href="#embeddedvrfkeylinktransaction" title="binary layout for an embedded vrf key link transaction">EmbeddedVrfKeyLinkTransaction</a>, <a href="#embeddedhashlocktransaction" title="binary layout for an embedded hash lock transaction">EmbeddedHashLockTransaction</a>, <a href="#embeddedsecretlocktransaction" title="binary layout for an embedded secret lock transaction">EmbeddedSecretLockTransaction</a>, <a href="#embeddedsecretprooftransaction" title="binary layout for an embedded secret proof transaction">EmbeddedSecretProofTransaction</a>, <a href="#embeddedaccountmetadatatransaction" title="binary layout for an embedded account metadata transaction">EmbeddedAccountMetadataTransaction</a>, <a href="#embeddedmosaicmetadatatransaction" title="binary layout for an embedded mosaic metadata transaction">EmbeddedMosaicMetadataTransaction</a>, <a href="#embeddednamespacemetadatatransaction" title="binary layout for an embedded namespace metadata transaction">EmbeddedNamespaceMetadataTransaction</a>, <a href="#embeddedmosaicdefinitiontransaction" title="binary layout for an embedded mosaic definition transaction">EmbeddedMosaicDefinitionTransaction</a>, <a href="#embeddedmosaicsupplychangetransaction" title="binary layout for an embedded mosaic supply change transaction">EmbeddedMosaicSupplyChangeTransaction</a>, <a href="#embeddedmultisigaccountmodificationtransaction" title="binary layout for an embedded multisig account modification transaction">EmbeddedMultisigAccountModificationTransaction</a>, <a href="#embeddedaddressaliastransaction" title="binary layout for an embedded address alias transaction">EmbeddedAddressAliasTransaction</a>, <a href="#embeddedmosaicaliastransaction" title="binary layout for an embedded mosaic alias transaction">EmbeddedMosaicAliasTransaction</a>, <a href="#embeddednamespaceregistrationtransaction" title="binary layout for an embedded namespace registration transaction">EmbeddedNamespaceRegistrationTransaction</a>, <a href="#embeddedaccountaddressrestrictiontransaction" title="binary layout for an embedded account address restriction transaction">EmbeddedAccountAddressRestrictionTransaction</a>, <a href="#embeddedaccountmosaicrestrictiontransaction" title="binary layout for an embedded account mosaic restriction transaction">EmbeddedAccountMosaicRestrictionTransaction</a>, <a href="#embeddedaccountoperationrestrictiontransaction" title="binary layout for an embedded account operation restriction transaction">EmbeddedAccountOperationRestrictionTransaction</a>, <a href="#embeddedmosaicaddressrestrictiontransaction" title="binary layout for an embedded mosaic address restriction transaction">EmbeddedMosaicAddressRestrictionTransaction</a>, <a href="#embeddedmosaicglobalrestrictiontransaction" title="binary layout for an embedded mosaic global restriction transaction">EmbeddedMosaicGlobalRestrictionTransaction</a>, <a href="#embeddedtransfertransaction" title="binary layout for an embedded transfer transaction">EmbeddedTransferTransaction</a>
   </tr></td>

   </tbody></table>

.. _accountkeylinktransactionbody:

AccountKeyLinkTransactionBody
=============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 33 bytes = 0x21</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/account_link/account_key_link.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/account_link/src/model/AccountKeyLinkTransaction.h#L32">catapult model</a></td></tr>
       </table></div>
   <p>Shared content between <a href="#accountkeylinktransactionbody" title="Shared content between AccountKeyLinkTransactionBody and EmbeddedAccountKeyLinkTransaction">AccountKeyLinkTransactionBody</a> and <a href="#embeddedaccountkeylinktransaction" title="Embedded version of AccountKeyLinkTransaction">EmbeddedAccountKeyLinkTransaction</a> </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>linked public key </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#linkaction" title="enumeration of link actions">LinkAction</a></td>
   <td><p>link action </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#accountkeylinktransaction" title="This transaction is required for all accounts wanting to activate remote or delegated harvesting.">AccountKeyLinkTransaction</a>, <a href="#embeddedaccountkeylinktransaction" title="Embedded version of AccountKeyLinkTransaction">EmbeddedAccountKeyLinkTransaction</a>
   </tr></td>

   </tbody></table>

.. _nodekeylinktransactionbody:

NodeKeyLinkTransactionBody
==========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 33 bytes = 0x21</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/account_link/node_key_link.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/account_link/src/model/NodeKeyLinkTransaction.h#L32">catapult model</a></td></tr>
       </table></div>
   <p>Shared content between <a href="#nodekeylinktransaction" title="This transaction is required for all accounts willing to activate delegated harvesting.">NodeKeyLinkTransaction</a> and <a href="#embeddednodekeylinktransaction" title="Embedded version of NodeKeyLinkTransaction">EmbeddedNodeKeyLinkTransaction</a> </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>linked public key </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#linkaction" title="enumeration of link actions">LinkAction</a></td>
   <td><p>link action </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#nodekeylinktransaction" title="This transaction is required for all accounts willing to activate delegated harvesting.">NodeKeyLinkTransaction</a>, <a href="#embeddednodekeylinktransaction" title="Embedded version of NodeKeyLinkTransaction">EmbeddedNodeKeyLinkTransaction</a>
   </tr></td>

   </tbody></table>

.. _cosignature:

Cosignature
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 104 bytes = 0x68</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/aggregate/cosignature.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/Cosignature.h#L30">catapult model</a></td></tr>
       </table></div>
   <p>cosignature attached to an aggregate transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[8]</td>
   <td><p>version </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>cosigner public key </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td><p>cosigner signature </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#detachedcosignature" title="cosignature detached from an aggregate transaction">DetachedCosignature</a>
   </tr></td>

   </tbody></table>

.. _aggregatetransactionbody:

AggregateTransactionBody
========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 40+ bytes = 0x28+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/aggregate/aggregate.cats#L5">schema</a></td></tr>
       </table></div>
   <p>binary layout for an aggregate transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>aggregate hash of an aggregate's transactions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">payload_size</code></td>
   <td>byte[4]</td>
   <td><p>transaction payload size in bytes <br/><b>Note:</b> this is the total number of bytes occupied by all sub-transactions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">aggregate_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align end of AggregateTransactionHeader on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions</code></td>
   <td><a href="#embeddedtransaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a>&ZeroWidthSpace;[payload_size]</td>
   <td><p>sub-transaction data (transactions are variable sized and payload size is in bytes) </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">cosignatures</code></td>
   <td><a href="#cosignature" title="cosignature attached to an aggregate transaction">Cosignature</a></td>
   <td><p>cosignatures data (fills remaining body space after transactions) </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#aggregatecompletetransaction" title="binary layout for an aggregate complete transaction">AggregateCompleteTransaction</a>, <a href="#aggregatebondedtransaction" title="binary layout for an aggregate bonded transaction">AggregateBondedTransaction</a>
   </tr></td>

   </tbody></table>

.. _votingkeylinktransactionbody:

VotingKeyLinkTransactionBody
============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 41 bytes = 0x29</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/coresystem/voting_key_link.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/coresystem/src/model/VotingKeyLinkTransaction.h#L31">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a voting key link transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#votingpublickey" title="">VotingPublicKey</a></td>
   <td><p>linked public key </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">start_epoch</code></td>
   <td><a href="#finalizationepoch" title="">FinalizationEpoch</a></td>
   <td><p>start finalization epoch </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">end_epoch</code></td>
   <td><a href="#finalizationepoch" title="">FinalizationEpoch</a></td>
   <td><p>end finalization epoch </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#linkaction" title="enumeration of link actions">LinkAction</a></td>
   <td><p>link action </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#votingkeylinktransaction" title="binary layout for a non-embedded voting key link transaction">VotingKeyLinkTransaction</a>, <a href="#embeddedvotingkeylinktransaction" title="binary layout for an embedded voting key link transaction">EmbeddedVotingKeyLinkTransaction</a>
   </tr></td>

   </tbody></table>

.. _vrfkeylinktransactionbody:

VrfKeyLinkTransactionBody
=========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 33 bytes = 0x21</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/coresystem/vrf_key_link.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/coresystem/src/model/VrfKeyLinkTransaction.h#L31">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a vrf key link transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#publickey" title="">PublicKey</a></td>
   <td><p>linked public key </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#linkaction" title="enumeration of link actions">LinkAction</a></td>
   <td><p>link action </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#vrfkeylinktransaction" title="binary layout for a non-embedded vrf key link transaction">VrfKeyLinkTransaction</a>, <a href="#embeddedvrfkeylinktransaction" title="binary layout for an embedded vrf key link transaction">EmbeddedVrfKeyLinkTransaction</a>
   </tr></td>

   </tbody></table>

.. _hashlocktransactionbody:

HashLockTransactionBody
=======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 56 bytes = 0x38</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_hash/hash_lock.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_hash/src/model/HashLockTransaction.h#L33">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a hash lock transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#unresolvedmosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a></td>
   <td><p>lock mosaic </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#blockduration" title="">BlockDuration</a></td>
   <td><p>number of blocks for which a lock should be valid </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>lock hash </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#hashlocktransaction" title="binary layout for a non-embedded hash lock transaction">HashLockTransaction</a>, <a href="#embeddedhashlocktransaction" title="binary layout for an embedded hash lock transaction">EmbeddedHashLockTransaction</a>
   </tr></td>

   </tbody></table>

.. _secretlocktransactionbody:

SecretLockTransactionBody
=========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 81 bytes = 0x51</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_secret/secret_lock.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_secret/src/model/SecretLockTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a secret lock transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>locked mosaic recipient address </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secret</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>secret </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#unresolvedmosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a></td>
   <td><p>locked mosaic </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#blockduration" title="">BlockDuration</a></td>
   <td><p>number of blocks for which a lock should be valid </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash_algorithm</code></td>
   <td><a href="#lockhashalgorithm" title="enumeration of lock hash algorithms">LockHashAlgorithm</a></td>
   <td><p>hash algorithm </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#secretlocktransaction" title="binary layout for a non-embedded secret lock transaction">SecretLockTransaction</a>, <a href="#embeddedsecretlocktransaction" title="binary layout for an embedded secret lock transaction">EmbeddedSecretLockTransaction</a>
   </tr></td>

   </tbody></table>

.. _secretprooftransactionbody:

SecretProofTransactionBody
==========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 59+ bytes = 0x3b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_secret/secret_proof.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_secret/src/model/SecretProofTransaction.h#L33">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a secret proof transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>locked mosaic recipient address </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secret</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td><p>secret </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">proof_size</code></td>
   <td>byte[2]</td>
   <td><p>proof size in bytes </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash_algorithm</code></td>
   <td><a href="#lockhashalgorithm" title="enumeration of lock hash algorithms">LockHashAlgorithm</a></td>
   <td><p>hash algorithm </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">proof</code></td>
   <td>byte[proof_size]</td>
   <td><p>proof data </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#secretprooftransaction" title="binary layout for a non-embedded secret proof transaction">SecretProofTransaction</a>, <a href="#embeddedsecretprooftransaction" title="binary layout for an embedded secret proof transaction">EmbeddedSecretProofTransaction</a>
   </tr></td>

   </tbody></table>

.. _accountmetadatatransactionbody:

AccountMetadataTransactionBody
==============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 36+ bytes = 0x24+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/account_metadata.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/AccountMetadataTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an account metadata transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>metadata target address </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td><p>metadata key scoped to source, target and type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td><p>change in value size in bytes </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td><p>value size in bytes </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td><p>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value) </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#accountmetadatatransaction" title="binary layout for a non-embedded account metadata transaction">AccountMetadataTransaction</a>, <a href="#embeddedaccountmetadatatransaction" title="binary layout for an embedded account metadata transaction">EmbeddedAccountMetadataTransaction</a>
   </tr></td>

   </tbody></table>

.. _mosaicmetadatatransactionbody:

MosaicMetadataTransactionBody
=============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 44+ bytes = 0x2c+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/mosaic_metadata.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/MosaicMetadataTransaction.h#L41">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a mosaic metadata transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>metadata target address </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td><p>metadata key scoped to source, target and type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>target mosaic identifier </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td><p>change in value size in bytes </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td><p>value size in bytes </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td><p>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value) </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#mosaicmetadatatransaction" title="binary layout for a non-embedded mosaic metadata transaction">MosaicMetadataTransaction</a>, <a href="#embeddedmosaicmetadatatransaction" title="binary layout for an embedded mosaic metadata transaction">EmbeddedMosaicMetadataTransaction</a>
   </tr></td>

   </tbody></table>

.. _namespacemetadatatransactionbody:

NamespaceMetadataTransactionBody
================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 44+ bytes = 0x2c+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/namespace_metadata.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/NamespaceMetadataTransaction.h#L42">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a namespace metadata transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>metadata target address </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td><p>metadata key scoped to source, target and type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_namespace_id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>target namespace identifier </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td><p>change in value size in bytes </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td><p>value size in bytes </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td><p>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value) </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#namespacemetadatatransaction" title="binary layout for a non-embedded namespace metadata transaction">NamespaceMetadataTransaction</a>, <a href="#embeddednamespacemetadatatransaction" title="binary layout for an embedded namespace metadata transaction">EmbeddedNamespaceMetadataTransaction</a>
   </tr></td>

   </tbody></table>

.. _mosaicdefinitiontransactionbody:

MosaicDefinitionTransactionBody
===============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 22 bytes = 0x16</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_definition.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicDefinitionTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a mosaic definition transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">id</code></td>
   <td><a href="#mosaicid" title="">MosaicId</a></td>
   <td><p>mosaic identifier </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#blockduration" title="">BlockDuration</a></td>
   <td><p>mosaic duration </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">nonce</code></td>
   <td><a href="#mosaicnonce" title="">MosaicNonce</a></td>
   <td><p>mosaic nonce </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">flags</code></td>
   <td><a href="#mosaicflags" title="enumeration of mosaic property flags">MosaicFlags</a></td>
   <td><p>mosaic flags </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">divisibility</code></td>
   <td>byte[1]</td>
   <td><p>mosaic divisibility </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#mosaicdefinitiontransaction" title="binary layout for a non-embedded mosaic definition transaction">MosaicDefinitionTransaction</a>, <a href="#embeddedmosaicdefinitiontransaction" title="binary layout for an embedded mosaic definition transaction">EmbeddedMosaicDefinitionTransaction</a>
   </tr></td>

   </tbody></table>

.. _mosaicsupplychangetransactionbody:

MosaicSupplyChangeTransactionBody
=================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 17 bytes = 0x11</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_supply_change.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicSupplyChangeTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a mosaic supply change transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>affected mosaic identifier </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">delta</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td><p>change amount </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">action</code></td>
   <td><a href="#mosaicsupplychangeaction" title="enumeration of mosaic supply change actions">MosaicSupplyChangeAction</a></td>
   <td><p>supply change action </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#mosaicsupplychangetransaction" title="binary layout for a non-embedded mosaic supply change transaction">MosaicSupplyChangeTransaction</a>, <a href="#embeddedmosaicsupplychangetransaction" title="binary layout for an embedded mosaic supply change transaction">EmbeddedMosaicSupplyChangeTransaction</a>
   </tr></td>

   </tbody></table>

.. _multisigaccountmodificationtransactionbody:

MultisigAccountModificationTransactionBody
==========================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8+ bytes = 0x8+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/multisig/multisig_account_modification.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/multisig/src/model/MultisigAccountModificationTransaction.h#L33">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a multisig account modification transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">min_removal_delta</code></td>
   <td>byte[1]</td>
   <td><p>relative change of the minimal number of cosignatories required when removing an account </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">min_approval_delta</code></td>
   <td>byte[1]</td>
   <td><p>relative change of the minimal number of cosignatories required when approving a transaction </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_additions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of cosignatory address additions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_deletions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of cosignatory address deletions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">multisig_&ZeroWidthSpace;account_&ZeroWidthSpace;modification_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align addressAdditions on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_additions</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a>&ZeroWidthSpace;[address_additions_count]</td>
   <td><p>cosignatory address additions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_deletions</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a>&ZeroWidthSpace;[address_deletions_count]</td>
   <td><p>cosignatory address deletions </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#multisigaccountmodificationtransaction" title="binary layout for a non-embedded multisig account modification transaction">MultisigAccountModificationTransaction</a>, <a href="#embeddedmultisigaccountmodificationtransaction" title="binary layout for an embedded multisig account modification transaction">EmbeddedMultisigAccountModificationTransaction</a>
   </tr></td>

   </tbody></table>

.. _addressaliastransactionbody:

AddressAliasTransactionBody
===========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 33 bytes = 0x21</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/address_alias.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/AddressAliasTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an address alias transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">namespace_id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>identifier of the namespace that will become an alias </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td><p>aliased address </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">alias_action</code></td>
   <td><a href="#aliasaction" title="enumeration of alias actions">AliasAction</a></td>
   <td><p>alias action </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#addressaliastransaction" title="binary layout for a non-embedded address alias transaction">AddressAliasTransaction</a>, <a href="#embeddedaddressaliastransaction" title="binary layout for an embedded address alias transaction">EmbeddedAddressAliasTransaction</a>
   </tr></td>

   </tbody></table>

.. _mosaicaliastransactionbody:

MosaicAliasTransactionBody
==========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 17 bytes = 0x11</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/mosaic_alias.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/MosaicAliasTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for an mosaic alias transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">namespace_id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>identifier of the namespace that will become an alias </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#mosaicid" title="">MosaicId</a></td>
   <td><p>aliased mosaic identifier </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">alias_action</code></td>
   <td><a href="#aliasaction" title="enumeration of alias actions">AliasAction</a></td>
   <td><p>alias action </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#mosaicaliastransaction" title="binary layout for a non-embedded mosaic alias transaction">MosaicAliasTransaction</a>, <a href="#embeddedmosaicaliastransaction" title="binary layout for an embedded mosaic alias transaction">EmbeddedMosaicAliasTransaction</a>
   </tr></td>

   </tbody></table>

.. _namespaceregistrationtransactionbody:

NamespaceRegistrationTransactionBody
====================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 26+ bytes = 0x1a+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/namespace_registration.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/NamespaceRegistrationTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a namespace registration transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#blockduration" title="">BlockDuration</a></td>
   <td><p>namespace duration </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">parent_id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>parent namespace identifier </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">id</code></td>
   <td><a href="#namespaceid" title="">NamespaceId</a></td>
   <td><p>namespace identifier </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">registration_type</code></td>
   <td><a href="#namespaceregistrationtype" title="enumeration of namespace registration types">NamespaceRegistrationType</a></td>
   <td><p>namespace registration type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">name_size</code></td>
   <td>byte[1]</td>
   <td><p>namespace name size </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">name</code></td>
   <td>byte[name_size]</td>
   <td><p>namespace name </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#namespaceregistrationtransaction" title="binary layout for a non-embedded namespace registration transaction">NamespaceRegistrationTransaction</a>, <a href="#embeddednamespaceregistrationtransaction" title="binary layout for an embedded namespace registration transaction">EmbeddedNamespaceRegistrationTransaction</a>
   </tr></td>

   </tbody></table>

.. _accountaddressrestrictiontransactionbody:

AccountAddressRestrictionTransactionBody
========================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8+ bytes = 0x8+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_address_restriction.cats#L5">schema</a></td></tr>
       </table></div>
   <p>binary layout for an account address restriction transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#accountrestrictionflags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td><p>account restriction flags </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction additions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction deletions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align restrictionAdditions on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td><p>account restriction additions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td><p>account restriction deletions </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#accountaddressrestrictiontransaction" title="binary layout for a non-embedded account address restriction transaction">AccountAddressRestrictionTransaction</a>, <a href="#embeddedaccountaddressrestrictiontransaction" title="binary layout for an embedded account address restriction transaction">EmbeddedAccountAddressRestrictionTransaction</a>
   </tr></td>

   </tbody></table>

.. _accountmosaicrestrictiontransactionbody:

AccountMosaicRestrictionTransactionBody
=======================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8+ bytes = 0x8+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_mosaic_restriction.cats#L5">schema</a></td></tr>
       </table></div>
   <p>binary layout for an account mosaic restriction transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#accountrestrictionflags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td><p>account restriction flags </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction additions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction deletions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align restrictionAdditions on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td><p>account restriction additions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td><p>account restriction deletions </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#accountmosaicrestrictiontransaction" title="binary layout for a non-embedded account mosaic restriction transaction">AccountMosaicRestrictionTransaction</a>, <a href="#embeddedaccountmosaicrestrictiontransaction" title="binary layout for an embedded account mosaic restriction transaction">EmbeddedAccountMosaicRestrictionTransaction</a>
   </tr></td>

   </tbody></table>

.. _accountoperationrestrictiontransactionbody:

AccountOperationRestrictionTransactionBody
==========================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8+ bytes = 0x8+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_operation_restriction.cats#L5">schema</a></td></tr>
       </table></div>
   <p>binary layout for an account operation restriction transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#accountrestrictionflags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td><p>account restriction flags </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction additions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td><p>number of account restriction deletions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align restrictionAdditions on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td><p>account restriction additions </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#transactiontype" title="enumeration of transaction types">TransactionType</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td><p>account restriction deletions </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#accountoperationrestrictiontransaction" title="binary layout for a non-embedded account operation restriction transaction">AccountOperationRestrictionTransaction</a>, <a href="#embeddedaccountoperationrestrictiontransaction" title="binary layout for an embedded account operation restriction transaction">EmbeddedAccountOperationRestrictionTransaction</a>
   </tr></td>

   </tbody></table>

.. _mosaicaddressrestrictiontransactionbody:

MosaicAddressRestrictionTransactionBody
=======================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 56 bytes = 0x38</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_mosaic/mosaic_address_restriction.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/model/MosaicAddressRestrictionTransaction.h#L32">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a mosaic address restriction transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>identifier of the mosaic to which the restriction applies </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_key</code></td>
   <td>byte[8]</td>
   <td><p>restriction key </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_value</code></td>
   <td>byte[8]</td>
   <td><p>previous restriction value </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_value</code></td>
   <td>byte[8]</td>
   <td><p>new restriction value </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>address being restricted </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#mosaicaddressrestrictiontransaction" title="binary layout for a non-embedded mosaic address restriction transaction">MosaicAddressRestrictionTransaction</a>, <a href="#embeddedmosaicaddressrestrictiontransaction" title="binary layout for an embedded mosaic address restriction transaction">EmbeddedMosaicAddressRestrictionTransaction</a>
   </tr></td>

   </tbody></table>

.. _mosaicglobalrestrictiontransactionbody:

MosaicGlobalRestrictionTransactionBody
======================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 42 bytes = 0x2a</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_mosaic/mosaic_global_restriction.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/model/MosaicGlobalRestrictionTransaction.h#L33">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a mosaic global restriction transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>identifier of the mosaic being restricted </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">reference_mosaic_id</code></td>
   <td><a href="#unresolvedmosaicid" title="">UnresolvedMosaicId</a></td>
   <td><p>identifier of the mosaic providing the restriction key </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_key</code></td>
   <td>byte[8]</td>
   <td><p>restriction key relative to the reference mosaic identifier </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_value</code></td>
   <td>byte[8]</td>
   <td><p>previous restriction value </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_value</code></td>
   <td>byte[8]</td>
   <td><p>new restriction value </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_type</code></td>
   <td><a href="#mosaicrestrictiontype" title="enumeration of mosaic restriction types">MosaicRestrictionType</a></td>
   <td><p>previous restriction type </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_type</code></td>
   <td><a href="#mosaicrestrictiontype" title="enumeration of mosaic restriction types">MosaicRestrictionType</a></td>
   <td><p>new restriction type </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#mosaicglobalrestrictiontransaction" title="binary layout for a non-embedded mosaic global restriction transaction">MosaicGlobalRestrictionTransaction</a>, <a href="#embeddedmosaicglobalrestrictiontransaction" title="binary layout for an embedded mosaic global restriction transaction">EmbeddedMosaicGlobalRestrictionTransaction</a>
   </tr></td>

   </tbody></table>

.. _transfertransactionbody:

TransferTransactionBody
=======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 32+ bytes = 0x20+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/transfer/transfer.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/transfer/src/model/TransferTransaction.h#L33">catapult model</a></td></tr>
       </table></div>
   <p>binary layout for a transfer transaction </p>
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolvedaddress" title="">UnresolvedAddress</a></td>
   <td><p>recipient address </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">message_size</code></td>
   <td>byte[2]</td>
   <td><p>size of attached message </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaics_count</code></td>
   <td>byte[1]</td>
   <td><p>number of attached mosaics </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transfer_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align mosaics on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transfer_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;2</code></td>
   <td>byte[1]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/><p>reserved padding to align mosaics on 8-byte boundary </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaics</code></td>
   <td><a href="#unresolvedmosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a>&ZeroWidthSpace;[mosaics_count]</td>
   <td><p>attached mosaics </p></td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">message</code></td>
   <td>byte[message_size]</td>
   <td><p>attached message </p></td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#transfertransaction" title="binary layout for a non-embedded transfer transaction">TransferTransaction</a>, <a href="#embeddedtransfertransaction" title="binary layout for an embedded transfer transaction">EmbeddedTransferTransaction</a>
   </tr></td>

   </tbody></table>

