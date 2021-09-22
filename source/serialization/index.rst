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
   <tr>
   <td id="amount"><b>Amount</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="block-duration"><b>BlockDuration</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="block-fee-multiplier"><b>BlockFeeMultiplier</b></td>
   <td>4&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="difficulty"><b>Difficulty</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="finalization-epoch"><b>FinalizationEpoch</b></td>
   <td>4&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="finalization-point"><b>FinalizationPoint</b></td>
   <td>4&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="height"><b>Height</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="importance"><b>Importance</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="importance-height"><b>ImportanceHeight</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="unresolved-mosaic-id"><b>UnresolvedMosaicId</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="mosaic-id"><b>MosaicId</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="timestamp"><b>Timestamp</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="unresolved-address"><b>UnresolvedAddress</b></td>
   <td>24&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="address"><b>Address</b></td>
   <td>24&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="hash256"><b>Hash256</b></td>
   <td>32&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="hash512"><b>Hash512</b></td>
   <td>64&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="public-key"><b>PublicKey</b></td>
   <td>32&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="voting-public-key"><b>VotingPublicKey</b></td>
   <td>32&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="signature"><b>Signature</b></td>
   <td>64&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="proof-gamma"><b>ProofGamma</b></td>
   <td>32&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="proof-verification-hash"><b>ProofVerificationHash</b></td>
   <td>16&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="proof-scalar"><b>ProofScalar</b></td>
   <td>32&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="namespace-id"><b>NamespaceId</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="scoped-metadata-key"><b>ScopedMetadataKey</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="mosaic-nonce"><b>MosaicNonce</b></td>
   <td>4&nbsp;ubytes</td>
   <td></td>
   </tr>
   <tr>
   <td id="mosaic-restriction-key"><b>MosaicRestrictionKey</b></td>
   <td>8&nbsp;ubytes</td>
   <td></td>
   </tr>
   </tbody></table>

Enumerations
************

.. _link-action:

LinkAction
==========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/types.cats#L39">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/LinkAction.h#L28">catapult model</a></td></tr>
       </table></div>
   enumeration of link actions
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">UNLINK</code></td>
   <td>unlink account</td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">LINK</code></td>
   <td>link account</td>
   </tr>
   </tbody></table>

.. _network-type:

NetworkType
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/entity.cats#L4">schema</a></td></tr>
       </table></div>
   enumeration of network types
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x68</td>
   <td><code class="docutils literal">MAINNET</code></td>
   <td>public network</td>
   </tr>
   <tr>
   <td>0x98</td>
   <td><code class="docutils literal">TESTNET</code></td>
   <td>public test network</td>
   </tr>
   </tbody></table>

.. _block-type:

BlockType
=========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 2 bytes = 0x2</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/block.cats#L8">schema</a></td></tr>
       </table></div>
   enumeration of block types
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x8043</td>
   <td><code class="docutils literal">NEMESIS</code></td>
   <td>nemesis block</td>
   </tr>
   <tr>
   <td>0x8143</td>
   <td><code class="docutils literal">NORMAL</code></td>
   <td>normal block</td>
   </tr>
   <tr>
   <td>0x8243</td>
   <td><code class="docutils literal">IMPORTANCE</code></td>
   <td>importance block</td>
   </tr>
   </tbody></table>

.. _receipt-type:

ReceiptType
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 2 bytes = 0x2</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/receipts.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/ReceiptType.h#L59">catapult model</a></td></tr>
       </table></div>
   enumeration of receipt types
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">RESERVED</code></td>
   <td>reserved receipt type</td>
   </tr>
   <tr>
   <td>0x124d</td>
   <td><code class="docutils literal">MOSAIC_RENTAL_FEE</code></td>
   <td>mosaic rental fee receipt type</td>
   </tr>
   <tr>
   <td>0x134e</td>
   <td><code class="docutils literal">NAMESPACE_RENTAL_FEE</code></td>
   <td>namespace rental fee receipt type</td>
   </tr>
   <tr>
   <td>0x2143</td>
   <td><code class="docutils literal">HARVEST_FEE</code></td>
   <td>harvest fee receipt type</td>
   </tr>
   <tr>
   <td>0x2248</td>
   <td><code class="docutils literal">LOCK_HASH_COMPLETED</code></td>
   <td>lock hash completed receipt type</td>
   </tr>
   <tr>
   <td>0x2348</td>
   <td><code class="docutils literal">LOCK_HASH_EXPIRED</code></td>
   <td>lock hash expired receipt type</td>
   </tr>
   <tr>
   <td>0x2252</td>
   <td><code class="docutils literal">LOCK_SECRET_COMPLETED</code></td>
   <td>lock secret completed receipt type</td>
   </tr>
   <tr>
   <td>0x2352</td>
   <td><code class="docutils literal">LOCK_SECRET_EXPIRED</code></td>
   <td>lock secret expired receipt type</td>
   </tr>
   <tr>
   <td>0x3148</td>
   <td><code class="docutils literal">LOCK_HASH_CREATED</code></td>
   <td>lock hash created receipt type</td>
   </tr>
   <tr>
   <td>0x3152</td>
   <td><code class="docutils literal">LOCK_SECRET_CREATED</code></td>
   <td>lock secret created receipt type</td>
   </tr>
   <tr>
   <td>0x414d</td>
   <td><code class="docutils literal">MOSAIC_EXPIRED</code></td>
   <td>mosaic expired receipt type</td>
   </tr>
   <tr>
   <td>0x414e</td>
   <td><code class="docutils literal">NAMESPACE_EXPIRED</code></td>
   <td>namespace expired receipt type</td>
   </tr>
   <tr>
   <td>0x424e</td>
   <td><code class="docutils literal">NAMESPACE_DELETED</code></td>
   <td>namespace deleted receipt type</td>
   </tr>
   <tr>
   <td>0x5143</td>
   <td><code class="docutils literal">INFLATION</code></td>
   <td>inflation receipt type</td>
   </tr>
   <tr>
   <td>0xe143</td>
   <td><code class="docutils literal">TRANSACTION_GROUP</code></td>
   <td>transaction group receipt type</td>
   </tr>
   <tr>
   <td>0xf143</td>
   <td><code class="docutils literal">ADDRESS_ALIAS_RESOLUTION</code></td>
   <td>address alias resolution receipt type</td>
   </tr>
   <tr>
   <td>0xf243</td>
   <td><code class="docutils literal">MOSAIC_ALIAS_RESOLUTION</code></td>
   <td>mosaic alias resolution receipt type</td>
   </tr>
   </tbody></table>

.. _namespace-registration-type:

NamespaceRegistrationType
=========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/namespace_types.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/NamespaceTypes.h#L28">catapult model</a></td></tr>
       </table></div>
   enumeration of namespace registration types
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">ROOT</code></td>
   <td>root namespace</td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">CHILD</code></td>
   <td>child namespace</td>
   </tr>
   </tbody></table>

.. _alias-action:

AliasAction
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/namespace_types.cats#L12">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/NamespaceTypes.h#L37">catapult model</a></td></tr>
       </table></div>
   enumeration of alias actions
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">UNLINK</code></td>
   <td>unlink alias</td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">LINK</code></td>
   <td>link alias</td>
   </tr>
   </tbody></table>

.. _account-type:

AccountType
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state_types.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/state/AccountState.h#L32">catapult model</a></td></tr>
       </table></div>
   enumeration of account types
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">UNLINKED</code></td>
   <td>account is not linked to another account</td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">MAIN</code></td>
   <td>account is a balance-holding account that is linked to a remote harvester account</td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">REMOTE</code></td>
   <td>account is a remote harvester account that is linked to a balance-holding account</td>
   </tr>
   <tr>
   <td>0x3</td>
   <td><code class="docutils literal">REMOTE_UNLINKED</code></td>
   <td>account is a remote harvester eligible account that is unlinked <br/><b>Note:</b> this allows an account that has previously been used as remote to be reused as a remote</td>
   </tr>
   </tbody></table>

.. _account-key-type-flags:

AccountKeyTypeFlags
===================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state_types.cats#L19">schema</a></td></tr>
       </table></div>
   enumeration of account key type flags
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">UNSET</code></td>
   <td>unset key</td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">LINKED</code></td>
   <td>linked account public key <br/><b>Note:</b> this can be either a remote or main account public key depending on context</td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">NODE</code></td>
   <td>node public key on which remote is allowed to harvest</td>
   </tr>
   <tr>
   <td>0x4</td>
   <td><code class="docutils literal">VRF</code></td>
   <td>VRF public key</td>
   </tr>
   </tbody></table>

.. _account-state-format:

AccountStateFormat
==================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state_types.cats#L34">schema</a></td></tr>
       </table></div>
   enumeration of account state formats
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">REGULAR</code></td>
   <td>regular account</td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">HIGH_VALUE</code></td>
   <td>high value account eligible to harvest</td>
   </tr>
   </tbody></table>

.. _lock-status:

LockStatus
==========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/lock_info.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_shared/src/state/LockInfo.h#L28">catapult model</a></td></tr>
       </table></div>
   lock status for lock transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">UNUSED</code></td>
   <td>lock is unused</td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">USED</code></td>
   <td>lock was already used</td>
   </tr>
   </tbody></table>

.. _metadata-type:

MetadataType
============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/metadata_entry_types.cats#L6">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/MetadataTypes.h#L34">catapult model</a></td></tr>
       </table></div>
   enum for the different types of metadata
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">ACCOUNT</code></td>
   <td>account metadata</td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">MOSAIC</code></td>
   <td>mosaic metadata</td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">NAMESPACE</code></td>
   <td>namespace metadata</td>
   </tr>
   </tbody></table>

.. _mosaic-flags:

MosaicFlags
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_types.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicFlags.h#L29">catapult model</a></td></tr>
       </table></div>
   enumeration of mosaic property flags
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">NONE</code></td>
   <td>no flags present</td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">SUPPLY_MUTABLE</code></td>
   <td>mosaic supports supply changes even when mosaic owner owns partial supply</td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">TRANSFERABLE</code></td>
   <td>mosaic supports transfers between arbitrary accounts <br/><b>Note:</b> when not set, mosaic can only be transferred to and from mosaic owner</td>
   </tr>
   <tr>
   <td>0x4</td>
   <td><code class="docutils literal">RESTRICTABLE</code></td>
   <td>mosaic supports custom restrictions configured by mosaic owner</td>
   </tr>
   </tbody></table>

.. _mosaic-supply-change-action:

MosaicSupplyChangeAction
========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_types.cats#L19">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicTypes.h#L28">catapult model</a></td></tr>
       </table></div>
   enumeration of mosaic supply change actions
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">DECREASE</code></td>
   <td>decreases the supply</td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">INCREASE</code></td>
   <td>increases the supply</td>
   </tr>
   </tbody></table>

.. _namespace-alias-type:

NamespaceAliasType
==================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/namespace_history_types.cats#L13">schema</a></td></tr>
       </table></div>
   namespace alias type
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">NONE</code></td>
   <td>no alias</td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">MOSAIC_ID</code></td>
   <td>if alias is mosaicId</td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">ADDRESS</code></td>
   <td>if alias is address</td>
   </tr>
   </tbody></table>

.. _account-restriction-flags:

AccountRestrictionFlags
=======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 2 bytes = 0x2</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/restriction_account_types.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_account/src/model/AccountRestrictionFlags.h#L29">catapult model</a></td></tr>
       </table></div>
   enumeration of account restriction flags
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">ADDRESS</code></td>
   <td>restriction type is an address</td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">MOSAIC_ID</code></td>
   <td>restriction type is a mosaic identifier</td>
   </tr>
   <tr>
   <td>0x4</td>
   <td><code class="docutils literal">TRANSACTION_TYPE</code></td>
   <td>restriction type is a transaction type</td>
   </tr>
   <tr>
   <td>0x4000</td>
   <td><code class="docutils literal">OUTGOING</code></td>
   <td>restriction is interpreted as outgoing</td>
   </tr>
   <tr>
   <td>0x8000</td>
   <td><code class="docutils literal">BLOCK</code></td>
   <td>restriction is interpreted as blocking (instead of allowing) operation</td>
   </tr>
   </tbody></table>

.. _transaction-type:

TransactionType
===============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 2 bytes = 0x2</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/transaction_type.cats#L2">schema</a></td></tr>
       </table></div>
   enumeration of transaction types
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x414c</td>
   <td><code class="docutils literal">ACCOUNT_KEY_LINK</code></td>
   <td>account key link transaction</td>
   </tr>
   <tr>
   <td>0x424c</td>
   <td><code class="docutils literal">NODE_KEY_LINK</code></td>
   <td>node key link transaction</td>
   </tr>
   <tr>
   <td>0x4141</td>
   <td><code class="docutils literal">AGGREGATE_COMPLETE</code></td>
   <td>aggregate complete transaction</td>
   </tr>
   <tr>
   <td>0x4241</td>
   <td><code class="docutils literal">AGGREGATE_BONDED</code></td>
   <td>aggregate bonded transaction</td>
   </tr>
   <tr>
   <td>0x4143</td>
   <td><code class="docutils literal">VOTING_KEY_LINK</code></td>
   <td>voting key link transaction</td>
   </tr>
   <tr>
   <td>0x4243</td>
   <td><code class="docutils literal">VRF_KEY_LINK</code></td>
   <td>vrf key link transaction</td>
   </tr>
   <tr>
   <td>0x4148</td>
   <td><code class="docutils literal">HASH_LOCK</code></td>
   <td>hash lock transaction</td>
   </tr>
   <tr>
   <td>0x4152</td>
   <td><code class="docutils literal">SECRET_LOCK</code></td>
   <td>secret lock transaction</td>
   </tr>
   <tr>
   <td>0x4252</td>
   <td><code class="docutils literal">SECRET_PROOF</code></td>
   <td>secret proof transaction</td>
   </tr>
   <tr>
   <td>0x4144</td>
   <td><code class="docutils literal">ACCOUNT_METADATA</code></td>
   <td>account metadata transaction</td>
   </tr>
   <tr>
   <td>0x4244</td>
   <td><code class="docutils literal">MOSAIC_METADATA</code></td>
   <td>mosaic metadata transaction</td>
   </tr>
   <tr>
   <td>0x4344</td>
   <td><code class="docutils literal">NAMESPACE_METADATA</code></td>
   <td>namespace metadata transaction</td>
   </tr>
   <tr>
   <td>0x414d</td>
   <td><code class="docutils literal">MOSAIC_DEFINITION</code></td>
   <td>mosaic definition transaction</td>
   </tr>
   <tr>
   <td>0x424d</td>
   <td><code class="docutils literal">MOSAIC_SUPPLY_CHANGE</code></td>
   <td>mosaic supply change transaction</td>
   </tr>
   <tr>
   <td>0x4155</td>
   <td><code class="docutils literal">MULTISIG_ACCOUNT_MODIFICATION</code></td>
   <td>multisig account modification transaction</td>
   </tr>
   <tr>
   <td>0x424e</td>
   <td><code class="docutils literal">ADDRESS_ALIAS</code></td>
   <td>address alias transaction</td>
   </tr>
   <tr>
   <td>0x434e</td>
   <td><code class="docutils literal">MOSAIC_ALIAS</code></td>
   <td>mosaic alias transaction</td>
   </tr>
   <tr>
   <td>0x414e</td>
   <td><code class="docutils literal">NAMESPACE_REGISTRATION</code></td>
   <td>namespace registration transaction</td>
   </tr>
   <tr>
   <td>0x4150</td>
   <td><code class="docutils literal">ACCOUNT_ADDRESS_RESTRICTION</code></td>
   <td>account address restriction transaction</td>
   </tr>
   <tr>
   <td>0x4250</td>
   <td><code class="docutils literal">ACCOUNT_MOSAIC_RESTRICTION</code></td>
   <td>account mosaic restriction transaction</td>
   </tr>
   <tr>
   <td>0x4350</td>
   <td><code class="docutils literal">ACCOUNT_OPERATION_RESTRICTION</code></td>
   <td>account operation restriction transaction</td>
   </tr>
   <tr>
   <td>0x4251</td>
   <td><code class="docutils literal">MOSAIC_ADDRESS_RESTRICTION</code></td>
   <td>mosaic address restriction transaction</td>
   </tr>
   <tr>
   <td>0x4151</td>
   <td><code class="docutils literal">MOSAIC_GLOBAL_RESTRICTION</code></td>
   <td>mosaic global restriction transaction</td>
   </tr>
   <tr>
   <td>0x4154</td>
   <td><code class="docutils literal">TRANSFER</code></td>
   <td>transfer transaction</td>
   </tr>
   </tbody></table>

.. _mosaic-restriction-type:

MosaicRestrictionType
=====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_mosaic/restriction_mosaic_types.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/model/MosaicRestrictionTypes.h#L28">catapult model</a></td></tr>
       </table></div>
   enumeration of mosaic restriction types
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">NONE</code></td>
   <td>uninitialized value indicating no restriction</td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">EQ</code></td>
   <td>allow if equal</td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">NE</code></td>
   <td>allow if not equal</td>
   </tr>
   <tr>
   <td>0x3</td>
   <td><code class="docutils literal">LT</code></td>
   <td>allow if less than</td>
   </tr>
   <tr>
   <td>0x4</td>
   <td><code class="docutils literal">LE</code></td>
   <td>allow if less than or equal</td>
   </tr>
   <tr>
   <td>0x5</td>
   <td><code class="docutils literal">GT</code></td>
   <td>allow if greater than</td>
   </tr>
   <tr>
   <td>0x6</td>
   <td><code class="docutils literal">GE</code></td>
   <td>allow if greater than or equal</td>
   </tr>
   </tbody></table>

.. _mosaic-restriction-entry-type:

MosaicRestrictionEntryType
==========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_types.cats#L5">schema</a></td></tr>
       </table></div>
   type of mosaic restriction entry
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">ADDRESS</code></td>
   <td>address restriction</td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">GLOBAL</code></td>
   <td>global (mosaic) restriction</td>
   </tr>
   </tbody></table>

.. _lock-hash-algorithm:

LockHashAlgorithm
=================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1 byte = 0x1</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_secret/lock_secret_types.cats#L2">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_secret/src/model/LockHashAlgorithm.h#L28">catapult model</a></td></tr>
       </table></div>
   enumeration of lock hash algorithms
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>0x0</td>
   <td><code class="docutils literal">SHA3_256</code></td>
   <td>input is hashed using sha-3 256</td>
   </tr>
   <tr>
   <td>0x1</td>
   <td><code class="docutils literal">HASH_160</code></td>
   <td>input is hashed twice: first with sha-256 and then with ripemd-160 (bitcoin's OP_HASH160)</td>
   </tr>
   <tr>
   <td>0x2</td>
   <td><code class="docutils literal">HASH_256</code></td>
   <td>input is hashed twice with sha-256 (bitcoin's OP_HASH256)</td>
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
   binary layout for a mosaic
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#mosaic-id" title="">MosaicId</a></td>
   <td>mosaic identifier</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">amount</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>mosaic amount</td>
   </tr>
   </tbody></table>

.. _unresolved-mosaic:

UnresolvedMosaic
================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/types.cats#L31">schema</a></td></tr>
       </table></div>
   binary layout for an unresolved mosaic
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>mosaic identifier</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">amount</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>mosaic amount</td>
   </tr>
   </tbody></table>

.. _vrf-proof:

VrfProof
========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 80 bytes = 0x50</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/block.cats#L19">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/crypto/Vrf.h#L44">catapult model</a></td></tr>
       </table></div>
   verfiable random function proof
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">gamma</code></td>
   <td><a href="#proof-gamma" title="">ProofGamma</a></td>
   <td>gamma</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verification_hash</code></td>
   <td><a href="#proof-verification-hash" title="">ProofVerificationHash</a></td>
   <td>verification hash</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scalar</code></td>
   <td><a href="#proof-scalar" title="">ProofScalar</a></td>
   <td>scalar</td>
   </tr>
   </tbody></table>

.. _nemesis-block-header:

NemesisBlockHeader
==================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 427 bytes = 0x1ab</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/block.cats#L83">schema</a></td></tr>
       </table></div>
   binary layout for a nemesis block header
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
   <td><a href="#block-type" title="enumeration of block types">BlockType</a></td>
   <td><b>const</b> <code class="docutils literal">NEMESIS</code> (<code class="docutils literal">0x8043</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#block-header" title="binary layout for a block header">BlockHeader</a><span style="float:right">372 bytes = 0x174</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#block-type" title="enumeration of block types">BlockType</a></td>
   <td>block type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td>block height</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">timestamp</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>number of milliseconds elapsed since creation of nemesis block</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">difficulty</code></td>
   <td><a href="#difficulty" title="">Difficulty</a></td>
   <td>block difficulty</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">generation_hash_proof</code></td>
   <td><a href="#vrf-proof" title="verfiable random function proof">VrfProof</a></td>
   <td>generation hash proof</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_block_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>previous block hash</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>hash of the transactions in this block</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">receipts_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>hash of the receipts generated by this block</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">state_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>hash of the global chain state at this block</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">beneficiary_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>beneficiary address designated by harvester</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee_multiplier</code></td>
   <td><a href="#block-fee-multiplier" title="">BlockFeeMultiplier</a></td>
   <td>fee multiplier applied to block transactions</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#importance-block-footer" title="binary layout for an importance block footer">ImportanceBlockFooter</a><span style="float:right">52 bytes = 0x34</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">voting_eligible_accounts_count</code></td>
   <td>byte[4]</td>
   <td>number of voting eligible accounts</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">harvesting_&ZeroWidthSpace;eligible_&ZeroWidthSpace;accounts_&ZeroWidthSpace;count</code></td>
   <td>byte[8]</td>
   <td>number of harvesting eligible accounts</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">total_voting_balance</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>total balance eligible for voting</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_importance_block_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>previous importance block hash</td>
   </tr>
   </tbody></table>

.. _normal-block-header:

NormalBlockHeader
=================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 379 bytes = 0x17b</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/block.cats#L91">schema</a></td></tr>
       </table></div>
   binary layout for a normal block header
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
   <td><a href="#block-type" title="enumeration of block types">BlockType</a></td>
   <td><b>const</b> <code class="docutils literal">NORMAL</code> (<code class="docutils literal">0x8143</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#block-header" title="binary layout for a block header">BlockHeader</a><span style="float:right">372 bytes = 0x174</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#block-type" title="enumeration of block types">BlockType</a></td>
   <td>block type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td>block height</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">timestamp</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>number of milliseconds elapsed since creation of nemesis block</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">difficulty</code></td>
   <td><a href="#difficulty" title="">Difficulty</a></td>
   <td>block difficulty</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">generation_hash_proof</code></td>
   <td><a href="#vrf-proof" title="verfiable random function proof">VrfProof</a></td>
   <td>generation hash proof</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_block_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>previous block hash</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>hash of the transactions in this block</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">receipts_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>hash of the receipts generated by this block</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">state_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>hash of the global chain state at this block</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">beneficiary_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>beneficiary address designated by harvester</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee_multiplier</code></td>
   <td><a href="#block-fee-multiplier" title="">BlockFeeMultiplier</a></td>
   <td>fee multiplier applied to block transactions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">block_header_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#block-header" title="binary layout for a block header">BlockHeader</a> on 8-byte boundary</td>
   </tr>
   </tbody></table>

.. _importance-block-header:

ImportanceBlockHeader
=====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 427 bytes = 0x1ab</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/block.cats#L101">schema</a></td></tr>
       </table></div>
   binary layout for an importance block header
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
   <td><a href="#block-type" title="enumeration of block types">BlockType</a></td>
   <td><b>const</b> <code class="docutils literal">IMPORTANCE</code> (<code class="docutils literal">0x8243</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#block-header" title="binary layout for a block header">BlockHeader</a><span style="float:right">372 bytes = 0x174</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#block-type" title="enumeration of block types">BlockType</a></td>
   <td>block type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td>block height</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">timestamp</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>number of milliseconds elapsed since creation of nemesis block</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">difficulty</code></td>
   <td><a href="#difficulty" title="">Difficulty</a></td>
   <td>block difficulty</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">generation_hash_proof</code></td>
   <td><a href="#vrf-proof" title="verfiable random function proof">VrfProof</a></td>
   <td>generation hash proof</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_block_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>previous block hash</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>hash of the transactions in this block</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">receipts_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>hash of the receipts generated by this block</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">state_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>hash of the global chain state at this block</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">beneficiary_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>beneficiary address designated by harvester</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee_multiplier</code></td>
   <td><a href="#block-fee-multiplier" title="">BlockFeeMultiplier</a></td>
   <td>fee multiplier applied to block transactions</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#importance-block-footer" title="binary layout for an importance block footer">ImportanceBlockFooter</a><span style="float:right">52 bytes = 0x34</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">voting_eligible_accounts_count</code></td>
   <td>byte[4]</td>
   <td>number of voting eligible accounts</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">harvesting_&ZeroWidthSpace;eligible_&ZeroWidthSpace;accounts_&ZeroWidthSpace;count</code></td>
   <td>byte[8]</td>
   <td>number of harvesting eligible accounts</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">total_voting_balance</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>total balance eligible for voting</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_importance_block_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>previous importance block hash</td>
   </tr>
   </tbody></table>

.. _finalization-round:

FinalizationRound
=================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8 bytes = 0x8</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/finalization/finalization_round.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/FinalizationRound.h#L30">catapult model</a></td></tr>
       </table></div>
   binary layout for finalization round
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">epoch</code></td>
   <td><a href="#finalization-epoch" title="">FinalizationEpoch</a></td>
   <td>finalization epoch</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">point</code></td>
   <td><a href="#finalization-point" title="">FinalizationPoint</a></td>
   <td>finalization point</td>
   </tr>
   </tbody></table>

.. _finalized-block-header:

FinalizedBlockHeader
====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 48 bytes = 0x30</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/finalization/finalized_block_header.cats#L4">schema</a></td></tr>
       </table></div>
   binary layout for finalized block header
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">round</code></td>
   <td><a href="#finalization-round" title="binary layout for finalization round">FinalizationRound</a></td>
   <td>finalization round</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td>finalization height</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>finalization hash</td>
   </tr>
   </tbody></table>

.. _balance-transfer-receipt:

BalanceTransferReceipt
======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 72 bytes = 0x48</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/receipts.cats#L67">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/Receipt.h#L48">catapult model</a></td></tr>
       </table></div>
   binary layout for a balance transfer receipt
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#receipt" title="binary layout for a receipt entity">Receipt</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>receipt version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipt-type" title="enumeration of receipt types">ReceiptType</a></td>
   <td>receipt type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#mosaic" title="binary layout for a mosaic">Mosaic</a></td>
   <td>mosaic</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">sender_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>mosaic sender address</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>mosaic recipient address</td>
   </tr>
   </tbody></table>

.. _balance-change-receipt:

BalanceChangeReceipt
====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 48 bytes = 0x30</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/receipts.cats#L80">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/Receipt.h#L81">catapult model</a></td></tr>
       </table></div>
   binary layout for a balance change receipt
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#receipt" title="binary layout for a receipt entity">Receipt</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>receipt version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipt-type" title="enumeration of receipt types">ReceiptType</a></td>
   <td>receipt type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#mosaic" title="binary layout for a mosaic">Mosaic</a></td>
   <td>mosaic</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>account address</td>
   </tr>
   </tbody></table>

.. _inflation-receipt:

InflationReceipt
================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 24 bytes = 0x18</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/receipts.cats#L90">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/Receipt.h#L105">catapult model</a></td></tr>
       </table></div>
   binary layout for an inflation receipt
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#receipt" title="binary layout for a receipt entity">Receipt</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>receipt version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipt-type" title="enumeration of receipt types">ReceiptType</a></td>
   <td>receipt type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#mosaic" title="binary layout for a mosaic">Mosaic</a></td>
   <td>mosaic</td>
   </tr>
   </tbody></table>

.. _mosaic-expiry-receipt:

MosaicExpiryReceipt
===================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/receipts.cats#L97">schema</a></td></tr>
       </table></div>
   binary layout for a mosaic expiry receipt
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#receipt" title="binary layout for a receipt entity">Receipt</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>receipt version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipt-type" title="enumeration of receipt types">ReceiptType</a></td>
   <td>receipt type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">artifact_id</code></td>
   <td><a href="#mosaic-id" title="">MosaicId</a></td>
   <td>expiring mosaic id</td>
   </tr>
   </tbody></table>

.. _namespace-expiry-receipt:

NamespaceExpiryReceipt
======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/namespace_receipts.cats#L5">schema</a></td></tr>
       </table></div>
   binary layout for a namespace expiry receipt
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#receipt" title="binary layout for a receipt entity">Receipt</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>receipt version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipt-type" title="enumeration of receipt types">ReceiptType</a></td>
   <td>receipt type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">artifact_id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>expiring namespace id</td>
   </tr>
   </tbody></table>

.. _receipt-source:

ReceiptSource
=============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8 bytes = 0x8</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/resolution_statement/resolution_statement_types.cats#L2">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/ReceiptSource.h#L30">catapult model</a></td></tr>
       </table></div>
   binary layout for receipt source
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
   <td>transaction primary source (e.g. index within block)</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secondary_id</code></td>
   <td>byte[4]</td>
   <td>transaction secondary source (e.g. index within aggregate)</td>
   </tr>
   </tbody></table>

.. _address-resolution-entry:

AddressResolutionEntry
======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 32 bytes = 0x20</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/resolution_statement/resolution_statement_types.cats#L10">schema</a></td></tr>
       </table></div>
   binary layout for address resolution entry
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">source</code></td>
   <td><a href="#receipt-source" title="binary layout for receipt source">ReceiptSource</a></td>
   <td>source of resolution within block</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">resolved</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>resolved value</td>
   </tr>
   </tbody></table>

.. _mosaic-resolution-entry:

MosaicResolutionEntry
=====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/resolution_statement/resolution_statement_types.cats#L18">schema</a></td></tr>
       </table></div>
   binary layout for mosaic resolution entry
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">source</code></td>
   <td><a href="#receipt-source" title="binary layout for receipt source">ReceiptSource</a></td>
   <td>source of resolution within block</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">resolved</code></td>
   <td><a href="#mosaic-id" title="">MosaicId</a></td>
   <td>resolved value</td>
   </tr>
   </tbody></table>

.. _mosaic-resolution-statement:

MosaicResolutionStatement
=========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/resolution_statement/resolution_statements.cats#L5">schema</a></td></tr>
       </table></div>
   binary layout for a mosaic resolution statement
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#receipt" title="binary layout for a receipt entity">Receipt</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>receipt version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipt-type" title="enumeration of receipt types">ReceiptType</a></td>
   <td>receipt type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">unresolved</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>unresolved mosaic</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">resolution_entries</code></td>
   <td><a href="#mosaic-resolution-entry" title="binary layout for mosaic resolution entry">MosaicResolutionEntry</a></td>
   <td>resolution entries</td>
   </tr>
   </tbody></table>

.. _address-resolution-statement:

AddressResolutionStatement
==========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 32 bytes = 0x20</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/resolution_statement/resolution_statements.cats#L15">schema</a></td></tr>
       </table></div>
   binary layout for an address resolution statement
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#receipt" title="binary layout for a receipt entity">Receipt</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>receipt version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipt-type" title="enumeration of receipt types">ReceiptType</a></td>
   <td>receipt type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">unresolved</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>unresolved address</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">resolution_entries</code></td>
   <td><a href="#address-resolution-entry" title="binary layout for address resolution entry">AddressResolutionEntry</a></td>
   <td>resolution entries</td>
   </tr>
   </tbody></table>

.. _pinned-voting-key:

PinnedVotingKey
===============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 40 bytes = 0x28</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state_types.cats#L42">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/PinnedVotingKey.h#L32">catapult model</a></td></tr>
       </table></div>
   pinned voting key
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">voting_key</code></td>
   <td><a href="#voting-public-key" title="">VotingPublicKey</a></td>
   <td>voting key</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">start_epoch</code></td>
   <td><a href="#finalization-epoch" title="">FinalizationEpoch</a></td>
   <td>start finalization epoch</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">end_epoch</code></td>
   <td><a href="#finalization-epoch" title="">FinalizationEpoch</a></td>
   <td>end finalization epoch</td>
   </tr>
   </tbody></table>

.. _importance-snapshot:

ImportanceSnapshot
==================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state_types.cats#L53">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/state/AccountImportanceSnapshots.h#L32">catapult model</a></td></tr>
       </table></div>
   temporal importance information
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
   <td>account importance</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">height</code></td>
   <td><a href="#importance-height" title="">ImportanceHeight</a></td>
   <td>importance height</td>
   </tr>
   </tbody></table>

.. _height-activity-bucket:

HeightActivityBucket
====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 28 bytes = 0x1c</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state_types.cats#L61">schema</a></td></tr>
       </table></div>
   account activity bucket
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">start_height</code></td>
   <td><a href="#importance-height" title="">ImportanceHeight</a></td>
   <td>activity start height</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">total_fees_paid</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>total fees paid by account</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">beneficiary_count</code></td>
   <td>byte[4]</td>
   <td>number of times account has been used as a beneficiary</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">raw_score</code></td>
   <td>byte[8]</td>
   <td>raw importance score</td>
   </tr>
   </tbody></table>

.. _height-activity-buckets:

HeightActivityBuckets
=====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 140 bytes = 0x8c</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state.cats#L5">schema</a></td></tr>
       </table></div>
   account activity buckets
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">buckets</code></td>
   <td><a href="#height-activity-bucket" title="account activity bucket">HeightActivityBucket</a>&ZeroWidthSpace;[5]</td>
   <td>account activity buckets</td>
   </tr>
   </tbody></table>

.. _account-state:

AccountState
============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 332+ bytes = 0x14c+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/account_state.cats#L10">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/cache_core/AccountStateCacheUtils.h#L31">catapult model</a></td></tr>
       </table></div>
   binary layout for non-historical account state
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#state-header" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>serialization version</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>address of account</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td>height at which address has been obtained</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>public key of account</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">public_key_height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td>height at which public key has been obtained</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_type</code></td>
   <td><a href="#account-type" title="enumeration of account types">AccountType</a></td>
   <td>type of account</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">format</code></td>
   <td><a href="#account-state-format" title="enumeration of account state formats">AccountStateFormat</a></td>
   <td>account format</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">supplemental_public_keys_mask</code></td>
   <td><a href="#account-key-type-flags" title="enumeration of account key type flags">AccountKeyTypeFlags</a></td>
   <td>mask of supplemental public key flags</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">voting_public_keys_count</code></td>
   <td>byte[1]</td>
   <td>number of voting public keys</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>linked account public key</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">node_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>node public key</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">vrf_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>vrf public key</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">voting_public_keys</code></td>
   <td><a href="#pinned-voting-key" title="pinned voting key">PinnedVotingKey</a>&ZeroWidthSpace;[voting_public_keys_count]</td>
   <td>voting public keys</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">importance_snapshots</code></td>
   <td><a href="#importance-snapshot" title="temporal importance information">ImportanceSnapshot</a></td>
   <td>current importance snapshot of the account</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">activity_buckets</code></td>
   <td><a href="#height-activity-buckets" title="account activity buckets">HeightActivityBuckets</a></td>
   <td>activity buckets of the account</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">balances_count</code></td>
   <td>byte[2]</td>
   <td>number of total balances (mosaics)</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">balances</code></td>
   <td><a href="#mosaic" title="binary layout for a mosaic">Mosaic</a>&ZeroWidthSpace;[balances_count]</td>
   <td>balances of account</td>
   </tr>
   </tbody></table>

.. _hash-lock-info:

HashLockInfo
============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 83 bytes = 0x53</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/hash_lock.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/extensions/mongo/plugins/lock_hash/tests/test/HashLockMapperTestUtils.h#L29">catapult model</a></td></tr>
       </table></div>
   binary layout for hash lock transaction info
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#state-header" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>serialization version</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">owner_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>owner address</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#mosaic" title="binary layout for a mosaic">Mosaic</a></td>
   <td>mosaic associated with lock</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">end_height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td>height at which the lock expires</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">status</code></td>
   <td><a href="#lock-status" title="lock status for lock transaction">LockStatus</a></td>
   <td>flag indicating whether or not the lock was already used</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>hash</td>
   </tr>
   </tbody></table>

.. _metadata-value:

MetadataValue
=============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 2+ bytes = 0x2+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/metadata_entry_types.cats#L17">schema</a></td></tr>
       </table></div>
   binary layout of a metadata entry value
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
   <td>size of the value</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">data</code></td>
   <td>byte[size]</td>
   <td>data of the value</td>
   </tr>
   </tbody></table>

.. _metadata-entry:

MetadataEntry
=============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 69+ bytes = 0x45+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/metadata_entry.cats#L6">schema</a></td></tr>
       </table></div>
   binary layout of a metadata entry
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#state-header" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>serialization version</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">source_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>metadata source address (provider)</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>metadata target address</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td><a href="#scoped-metadata-key" title="">ScopedMetadataKey</a></td>
   <td>metadata key scoped to source, target and type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_id</code></td>
   <td>byte[8]</td>
   <td>target id</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">metadata_type</code></td>
   <td><a href="#metadata-type" title="enum for the different types of metadata">MetadataType</a></td>
   <td>metadata type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td><a href="#metadata-value" title="binary layout of a metadata entry value">MetadataValue</a></td>
   <td>value</td>
   </tr>
   </tbody></table>

.. _mosaic-properties:

MosaicProperties
================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 10 bytes = 0xa</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/mosaic_entry_types.cats#L5">schema</a></td></tr>
       </table></div>
   binary layout for mosaic properties
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">flags</code></td>
   <td><a href="#mosaic-flags" title="enumeration of mosaic property flags">MosaicFlags</a></td>
   <td>mosaic flags</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">divisibility</code></td>
   <td>byte[1]</td>
   <td>mosaic divisibility</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#block-duration" title="">BlockDuration</a></td>
   <td>mosaic duration</td>
   </tr>
   </tbody></table>

.. _mosaic-definition:

MosaicDefinition
================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 46 bytes = 0x2e</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/mosaic_entry_types.cats#L16">schema</a></td></tr>
       </table></div>
   binary layout for mosaic definition
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
   <td>block height</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">owner_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>mosaic owner</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">revision</code></td>
   <td>byte[4]</td>
   <td>revision</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">properties</code></td>
   <td><a href="#mosaic-properties" title="binary layout for mosaic properties">MosaicProperties</a></td>
   <td>properties</td>
   </tr>
   </tbody></table>

.. _mosaic-entry:

MosaicEntry
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 64 bytes = 0x40</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/mosaic_entry.cats#L5">schema</a></td></tr>
       </table></div>
   binary layout for mosaic entry
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#state-header" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>serialization version</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#mosaic-id" title="">MosaicId</a></td>
   <td>entry id</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">supply</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>total supply amount</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">definition</code></td>
   <td><a href="#mosaic-definition" title="binary layout for mosaic definition">MosaicDefinition</a></td>
   <td>definition comprised of entry properties</td>
   </tr>
   </tbody></table>

.. _multisig-entry:

MultisigEntry
=============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 50+ bytes = 0x32+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/multisig_entry.cats#L5">schema</a></td></tr>
       </table></div>
   binary layout for a multisig entry
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#state-header" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>serialization version</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">min_approval</code></td>
   <td>byte[4]</td>
   <td>minimum approval for modifications</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">min_removal</code></td>
   <td>byte[4]</td>
   <td>minimum approval for removal</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>account address</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">cosignatory_addresses_count</code></td>
   <td>byte[8]</td>
   <td>number of cosignatories</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">cosignatory_addresses</code></td>
   <td><a href="#address" title="">Address</a>&ZeroWidthSpace;[cosignatory_addresses_count]</td>
   <td>cosignatories for account</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">multisig_addresses_count</code></td>
   <td>byte[8]</td>
   <td>number of other accounts for which the entry is cosignatory</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">multisig_addresses</code></td>
   <td><a href="#address" title="">Address</a>&ZeroWidthSpace;[multisig_addresses_count]</td>
   <td>accounts for which the entry is cosignatory</td>
   </tr>
   </tbody></table>

.. _namespace-lifetime:

NamespaceLifetime
=================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/namespace_history_types.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/state/NamespaceLifetime.h#L28">catapult model</a></td></tr>
       </table></div>
   binary layout for namespace lifetime
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
   <td>start height</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">lifetime_end</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td>end height</td>
   </tr>
   </tbody></table>

.. _namespace-alias:

NamespaceAlias
==============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 33 bytes = 0x21</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/namespace_history_types.cats#L24">schema</a></td></tr>
       </table></div>
   binary layout for alias
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">namespace_alias_type</code></td>
   <td><a href="#namespace-alias-type" title="namespace alias type">NamespaceAliasType</a></td>
   <td>namespace alias type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_alias</code></td>
   <td><a href="#mosaic-id" title="">MosaicId</a></td>
   <td>mosaic alias</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_alias</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>address alias</td>
   </tr>
   </tbody></table>

.. _namespace-path:

NamespacePath
=============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 34+ bytes = 0x22+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/namespace_history_types.cats#L35">schema</a></td></tr>
       </table></div>
   binary layout for a namespace path
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
   <td>number of paths (excluding root id)</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">path</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a>&ZeroWidthSpace;[path_size]</td>
   <td>namespace path (excluding root id)</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">alias</code></td>
   <td><a href="#namespace-alias" title="binary layout for alias">NamespaceAlias</a></td>
   <td>namespace alias</td>
   </tr>
   </tbody></table>

.. _root-namespace-history:

RootNamespaceHistory
====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 91+ bytes = 0x5b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/namespace_history.cats#L5">schema</a></td></tr>
       </table></div>
   binary layout for non-historical root namespace history
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#state-header" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>serialization version</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>id of the root namespace history</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">owner_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>namespace owner address</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">lifetime</code></td>
   <td><a href="#namespace-lifetime" title="binary layout for namespace lifetime">NamespaceLifetime</a></td>
   <td>lifetime in blocks</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">root_alias</code></td>
   <td><a href="#namespace-alias" title="binary layout for alias">NamespaceAlias</a></td>
   <td>root namespace alias</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">children_count</code></td>
   <td>byte[8]</td>
   <td>number of children</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">paths</code></td>
   <td><a href="#namespace-path" title="binary layout for a namespace path">NamespacePath</a>&ZeroWidthSpace;[children_count]</td>
   <td>save child sub-namespace paths</td>
   </tr>
   </tbody></table>

.. _account-restriction-address-value:

AccountRestrictionAddressValue
==============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8+ bytes = 0x8+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_account_types.cats#L5">schema</a></td></tr>
       </table></div>
   binary layout for address based account restriction
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
   <td>number of restrictions for a particular account</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_values</code></td>
   <td><a href="#address" title="">Address</a>&ZeroWidthSpace;[restriction_values_count]</td>
   <td>restriction values</td>
   </tr>
   </tbody></table>

.. _account-restriction-mosaic-value:

AccountRestrictionMosaicValue
=============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8+ bytes = 0x8+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_account_types.cats#L13">schema</a></td></tr>
       </table></div>
   binary layout for mosaic id based account restriction
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
   <td>number of restrictions for a particular account</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_values</code></td>
   <td><a href="#mosaic-id" title="">MosaicId</a>&ZeroWidthSpace;[restriction_values_count]</td>
   <td>restriction values</td>
   </tr>
   </tbody></table>

.. _account-restriction-transaction-type-value:

AccountRestrictionTransactionTypeValue
======================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8+ bytes = 0x8+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_account_types.cats#L21">schema</a></td></tr>
       </table></div>
   binary layout for transaction type based account restriction
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
   <td>number of restrictions for a particular account</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_values</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a>&ZeroWidthSpace;[restriction_values_count]</td>
   <td>restriction values</td>
   </tr>
   </tbody></table>

.. _account-restrictions-info:

AccountRestrictionsInfo
=======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 26+ bytes = 0x1a+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_account_types.cats#L29">schema</a></td></tr>
       </table></div>
   binary layout for account restrictions
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#account-restriction-flags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td>raw restriction flags</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_restrictions</code></td>
   <td><a href="#account-restriction-address-value" title="binary layout for address based account restriction">AccountRestrictionAddressValue</a></td>
   <td>address restrictions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id_restrictions</code></td>
   <td><a href="#account-restriction-mosaic-value" title="binary layout for mosaic id based account restriction">AccountRestrictionMosaicValue</a></td>
   <td>mosaic identifier restrictions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transaction_type_restrictions</code></td>
   <td><a href="#account-restriction-transaction-type-value" title="binary layout for transaction type based account restriction">AccountRestrictionTransactionTypeValue</a></td>
   <td>transaction type restrictions</td>
   </tr>
   </tbody></table>

.. _account-restrictions:

AccountRestrictions
===================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 34+ bytes = 0x22+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_account.cats#L6">schema</a></td></tr>
       </table></div>
   binary layout for account restrictions
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#state-header" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>serialization version</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>address on which restrictions are placed</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restrictions_count</code></td>
   <td>byte[8]</td>
   <td>number of restrictions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restrictions</code></td>
   <td><a href="#account-restrictions-info" title="binary layout for account restrictions">AccountRestrictionsInfo</a>&ZeroWidthSpace;[restrictions_count]</td>
   <td>account restrictions</td>
   </tr>
   </tbody></table>

.. _address-key-value:

AddressKeyValue
===============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 16 bytes = 0x10</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_types.cats#L13">schema</a></td></tr>
       </table></div>
   layout for mosaic address restriction key-value pair
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">key</code></td>
   <td><a href="#mosaic-restriction-key" title="">MosaicRestrictionKey</a></td>
   <td>key for value</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[8]</td>
   <td>value associated by key</td>
   </tr>
   </tbody></table>

.. _address-key-value-set:

AddressKeyValueSet
==================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1+ byte = 0x1+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_types.cats#L21">schema</a></td></tr>
       </table></div>
   binary layout for mosaic address restriction key-value set
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
   <td>number of key value pairs</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">keys</code></td>
   <td><a href="#address-key-value" title="layout for mosaic address restriction key-value pair">AddressKeyValue</a>&ZeroWidthSpace;[key_value_count]</td>
   <td>key value array</td>
   </tr>
   </tbody></table>

.. _restriction-rule:

RestrictionRule
===============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 17 bytes = 0x11</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_types.cats#L29">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/state/MosaicGlobalRestriction.h#L33">catapult model</a></td></tr>
       </table></div>
   binary layout of restriction rule being applied
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">reference_mosaic_id</code></td>
   <td><a href="#mosaic-id" title="">MosaicId</a></td>
   <td>identifier of the mosaic providing the restriction key</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_value</code></td>
   <td>byte[8]</td>
   <td>restriction value</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_type</code></td>
   <td><a href="#mosaic-restriction-type" title="enumeration of mosaic restriction types">MosaicRestrictionType</a></td>
   <td>restriction type</td>
   </tr>
   </tbody></table>

.. _global-key-value:

GlobalKeyValue
==============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 25 bytes = 0x19</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_types.cats#L40">schema</a></td></tr>
       </table></div>
   binary layout for a global key-value
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">key</code></td>
   <td><a href="#mosaic-restriction-key" title="">MosaicRestrictionKey</a></td>
   <td>key associated with a restriction rule</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_rule</code></td>
   <td><a href="#restriction-rule" title="binary layout of restriction rule being applied">RestrictionRule</a></td>
   <td>restriction rule (the value) associated with a key</td>
   </tr>
   </tbody></table>

.. _global-key-value-set:

GlobalKeyValueSet
=================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 1+ byte = 0x1+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_types.cats#L48">schema</a></td></tr>
       </table></div>
   binary layout for a global restriction key-value set
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
   <td>number of key value pairs</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">keys</code></td>
   <td><a href="#global-key-value" title="binary layout for a global key-value">GlobalKeyValue</a>&ZeroWidthSpace;[key_value_count]</td>
   <td>key value array</td>
   </tr>
   </tbody></table>

.. _mosaic-address-restriction-entry:

MosaicAddressRestrictionEntry
=============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 33+ bytes = 0x21+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_entry.cats#L5">schema</a></td></tr>
       </table></div>
   binary layout for a mosaic restriction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#mosaic-id" title="">MosaicId</a></td>
   <td>identifier of the mosaic to which the restriction applies</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>address being restricted</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">key_pairs</code></td>
   <td><a href="#address-key-value-set" title="binary layout for mosaic address restriction key-value set">AddressKeyValueSet</a></td>
   <td>address key value restriction set</td>
   </tr>
   </tbody></table>

.. _mosaic-global-restriction-entry:

MosaicGlobalRestrictionEntry
============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 9+ bytes = 0x9+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_entry.cats#L16">schema</a></td></tr>
       </table></div>
   binary layout for a mosaic restriction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#mosaic-id" title="">MosaicId</a></td>
   <td>identifier of the mosaic to which the restriction applies</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">key_pairs</code></td>
   <td><a href="#global-key-value-set" title="binary layout for a global restriction key-value set">GlobalKeyValueSet</a></td>
   <td>global key value restriction set</td>
   </tr>
   </tbody></table>

.. _mosaic-restriction-entry:

MosaicRestrictionEntry
======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 45+ bytes = 0x2d+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/restriction_mosaic_entry.cats#L24">schema</a></td></tr>
       </table></div>
   binary layout for a mosaic restriction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#state-header" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>serialization version</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entry_type</code></td>
   <td><a href="#mosaic-restriction-entry-type" title="type of mosaic restriction entry">MosaicRestrictionEntryType</a></td>
   <td>type of restriction being placed upon the entity</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_entry</code></td>
   <td><a href="#mosaic-address-restriction-entry" title="binary layout for a mosaic restriction">MosaicAddressRestrictionEntry</a></td>
   <td>address restriction rule</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">global_entry</code></td>
   <td><a href="#mosaic-global-restriction-entry" title="binary layout for a mosaic restriction">MosaicGlobalRestrictionEntry</a></td>
   <td>global mosaic rule</td>
   </tr>
   </tbody></table>

.. _secret-lock-info:

SecretLockInfo
==============

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 108 bytes = 0x6c</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/secret_lock.cats#L6">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/extensions/mongo/plugins/lock_secret/tests/test/SecretLockMapperTestUtils.h#L29">catapult model</a></td></tr>
       </table></div>
   binary layout for serialized lock transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#state-header" title="header common to all serialized states">StateHeader</a><span style="float:right">2 bytes = 0x2</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>serialization version</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">owner_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>owner address</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#mosaic" title="binary layout for a mosaic">Mosaic</a></td>
   <td>mosaic associated with lock</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">end_height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td>height at which the lock expires</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">status</code></td>
   <td><a href="#lock-status" title="lock status for lock transaction">LockStatus</a></td>
   <td>flag indicating whether or not the lock was already used</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash_algorithm</code></td>
   <td><a href="#lock-hash-algorithm" title="enumeration of lock hash algorithms">LockHashAlgorithm</a></td>
   <td>hash algorithm</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secret</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>transaction secret</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>transaction recipient</td>
   </tr>
   </tbody></table>

.. _account-key-link-transaction:

AccountKeyLinkTransaction
=========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 164 bytes = 0xa4</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/account_link/account_key_link.cats#L14">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/account_link/src/model/AccountKeyLinkTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded account key link transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_KEY_LINK</code> (<code class="docutils literal">0x414c</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#account-key-link-transaction-body" title="binary layout for an account key link transaction">AccountKeyLinkTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>linked public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#link-action" title="enumeration of link actions">LinkAction</a></td>
   <td>link action</td>
   </tr>
   </tbody></table>

.. _embedded-account-key-link-transaction:

EmbeddedAccountKeyLinkTransaction
=================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 84 bytes = 0x54</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/account_link/account_key_link.cats#L22">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/account_link/src/model/AccountKeyLinkTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded account key link transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_KEY_LINK</code> (<code class="docutils literal">0x414c</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#account-key-link-transaction-body" title="binary layout for an account key link transaction">AccountKeyLinkTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>linked public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#link-action" title="enumeration of link actions">LinkAction</a></td>
   <td>link action</td>
   </tr>
   </tbody></table>

.. _node-key-link-transaction:

NodeKeyLinkTransaction
======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 164 bytes = 0xa4</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/account_link/node_key_link.cats#L14">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/account_link/src/model/NodeKeyLinkTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded node key link transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">NODE_KEY_LINK</code> (<code class="docutils literal">0x424c</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#node-key-link-transaction-body" title="binary layout for a node key link transaction">NodeKeyLinkTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>linked public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#link-action" title="enumeration of link actions">LinkAction</a></td>
   <td>link action</td>
   </tr>
   </tbody></table>

.. _embedded-node-key-link-transaction:

EmbeddedNodeKeyLinkTransaction
==============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 84 bytes = 0x54</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/account_link/node_key_link.cats#L22">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/account_link/src/model/NodeKeyLinkTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded node key link transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">NODE_KEY_LINK</code> (<code class="docutils literal">0x424c</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#node-key-link-transaction-body" title="binary layout for a node key link transaction">NodeKeyLinkTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>linked public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#link-action" title="enumeration of link actions">LinkAction</a></td>
   <td>link action</td>
   </tr>
   </tbody></table>

.. _detached-cosignature:

DetachedCosignature
===================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 136 bytes = 0x88</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/aggregate/cosignature.cats#L15">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/Cosignature.h#L55">catapult model</a></td></tr>
       </table></div>
   cosignature detached from an aggregate transaction
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
   <td>version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>cosigner public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>cosigner signature</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">parent_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>hash of the aggregate transaction that is signed by this cosignature</td>
   </tr>
   </tbody></table>

.. _aggregate-complete-transaction:

AggregateCompleteTransaction
============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 171+ bytes = 0xab+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/aggregate/aggregate.cats#L23">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/aggregate/src/model/AggregateTransaction.h#L57">catapult model</a></td></tr>
       </table></div>
   binary layout for an aggregate complete transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">AGGREGATE_COMPLETE</code> (<code class="docutils literal">0x4141</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#aggregate-transaction-body" title="binary layout for an aggregate transaction">AggregateTransactionBody</a><span style="float:right">40+ bytes = 0x28+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>aggregate hash of an aggregate's transactions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">payload_size</code></td>
   <td>byte[4]</td>
   <td>transaction payload size in bytes <br/><b>Note:</b> this is the total number of bytes occupied by all sub-transactions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">aggregate_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of AggregateTransactionHeader on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions</code></td>
   <td><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a>&ZeroWidthSpace;[payload_size]</td>
   <td>sub-transaction data (transactions are variable sized and payload size is in bytes)</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">cosignatures</code></td>
   <td><a href="#cosignature" title="cosignature attached to an aggregate transaction">Cosignature</a></td>
   <td>cosignatures data (fills remaining body space after transactions)</td>
   </tr>
   </tbody></table>

.. _aggregate-bonded-transaction:

AggregateBondedTransaction
==========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 171+ bytes = 0xab+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/aggregate/aggregate.cats#L31">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/aggregate/src/model/AggregateTransaction.h#L57">catapult model</a></td></tr>
       </table></div>
   binary layout for an aggregate bonded transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">AGGREGATE_BONDED</code> (<code class="docutils literal">0x4241</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#aggregate-transaction-body" title="binary layout for an aggregate transaction">AggregateTransactionBody</a><span style="float:right">40+ bytes = 0x28+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>aggregate hash of an aggregate's transactions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">payload_size</code></td>
   <td>byte[4]</td>
   <td>transaction payload size in bytes <br/><b>Note:</b> this is the total number of bytes occupied by all sub-transactions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">aggregate_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of AggregateTransactionHeader on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions</code></td>
   <td><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a>&ZeroWidthSpace;[payload_size]</td>
   <td>sub-transaction data (transactions are variable sized and payload size is in bytes)</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">cosignatures</code></td>
   <td><a href="#cosignature" title="cosignature attached to an aggregate transaction">Cosignature</a></td>
   <td>cosignatures data (fills remaining body space after transactions)</td>
   </tr>
   </tbody></table>

.. _voting-key-link-transaction:

VotingKeyLinkTransaction
========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 172 bytes = 0xac</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/coresystem/voting_key_link.cats#L18">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/coresystem/src/model/VotingKeyLinkTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded voting key link transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">VOTING_KEY_LINK</code> (<code class="docutils literal">0x4143</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#voting-key-link-transaction-body" title="binary layout for a voting key link transaction">VotingKeyLinkTransactionBody</a><span style="float:right">41 bytes = 0x29</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#voting-public-key" title="">VotingPublicKey</a></td>
   <td>linked public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">start_epoch</code></td>
   <td><a href="#finalization-epoch" title="">FinalizationEpoch</a></td>
   <td>start finalization epoch</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">end_epoch</code></td>
   <td><a href="#finalization-epoch" title="">FinalizationEpoch</a></td>
   <td>end finalization epoch</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#link-action" title="enumeration of link actions">LinkAction</a></td>
   <td>link action</td>
   </tr>
   </tbody></table>

.. _embedded-voting-key-link-transaction:

EmbeddedVotingKeyLinkTransaction
================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 92 bytes = 0x5c</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/coresystem/voting_key_link.cats#L26">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/coresystem/src/model/VotingKeyLinkTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded voting key link transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">VOTING_KEY_LINK</code> (<code class="docutils literal">0x4143</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#voting-key-link-transaction-body" title="binary layout for a voting key link transaction">VotingKeyLinkTransactionBody</a><span style="float:right">41 bytes = 0x29</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#voting-public-key" title="">VotingPublicKey</a></td>
   <td>linked public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">start_epoch</code></td>
   <td><a href="#finalization-epoch" title="">FinalizationEpoch</a></td>
   <td>start finalization epoch</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">end_epoch</code></td>
   <td><a href="#finalization-epoch" title="">FinalizationEpoch</a></td>
   <td>end finalization epoch</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#link-action" title="enumeration of link actions">LinkAction</a></td>
   <td>link action</td>
   </tr>
   </tbody></table>

.. _vrf-key-link-transaction:

VrfKeyLinkTransaction
=====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 164 bytes = 0xa4</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/coresystem/vrf_key_link.cats#L12">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/coresystem/src/model/VrfKeyLinkTransaction.h#L33">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded vrf key link transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">VRF_KEY_LINK</code> (<code class="docutils literal">0x4243</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#vrf-key-link-transaction-body" title="binary layout for a vrf key link transaction">VrfKeyLinkTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>linked public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#link-action" title="enumeration of link actions">LinkAction</a></td>
   <td>link action</td>
   </tr>
   </tbody></table>

.. _embedded-vrf-key-link-transaction:

EmbeddedVrfKeyLinkTransaction
=============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 84 bytes = 0x54</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/coresystem/vrf_key_link.cats#L20">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/coresystem/src/model/VrfKeyLinkTransaction.h#L33">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded vrf key link transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">VRF_KEY_LINK</code> (<code class="docutils literal">0x4243</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#vrf-key-link-transaction-body" title="binary layout for a vrf key link transaction">VrfKeyLinkTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>linked public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#link-action" title="enumeration of link actions">LinkAction</a></td>
   <td>link action</td>
   </tr>
   </tbody></table>

.. _hash-lock-transaction:

HashLockTransaction
===================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 187 bytes = 0xbb</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_hash/hash_lock.cats#L15">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_hash/src/model/HashLockTransaction.h#L57">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded hash lock transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">HASH_LOCK</code> (<code class="docutils literal">0x4148</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#hash-lock-transaction-body" title="binary layout for a hash lock transaction">HashLockTransactionBody</a><span style="float:right">56 bytes = 0x38</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#unresolved-mosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a></td>
   <td>lock mosaic</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#block-duration" title="">BlockDuration</a></td>
   <td>number of blocks for which a lock should be valid</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>lock hash</td>
   </tr>
   </tbody></table>

.. _embedded-hash-lock-transaction:

EmbeddedHashLockTransaction
===========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 107 bytes = 0x6b</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_hash/hash_lock.cats#L23">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_hash/src/model/HashLockTransaction.h#L57">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded hash lock transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">HASH_LOCK</code> (<code class="docutils literal">0x4148</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#hash-lock-transaction-body" title="binary layout for a hash lock transaction">HashLockTransactionBody</a><span style="float:right">56 bytes = 0x38</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#unresolved-mosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a></td>
   <td>lock mosaic</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#block-duration" title="">BlockDuration</a></td>
   <td>number of blocks for which a lock should be valid</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>lock hash</td>
   </tr>
   </tbody></table>

.. _secret-lock-transaction:

SecretLockTransaction
=====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 212 bytes = 0xd4</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_secret/secret_lock.cats#L22">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_secret/src/model/SecretLockTransaction.h#L64">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded secret lock transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">SECRET_LOCK</code> (<code class="docutils literal">0x4152</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#secret-lock-transaction-body" title="binary layout for a secret lock transaction">SecretLockTransactionBody</a><span style="float:right">81 bytes = 0x51</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>locked mosaic recipient address</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secret</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>secret</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#unresolved-mosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a></td>
   <td>locked mosaic</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#block-duration" title="">BlockDuration</a></td>
   <td>number of blocks for which a lock should be valid</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash_algorithm</code></td>
   <td><a href="#lock-hash-algorithm" title="enumeration of lock hash algorithms">LockHashAlgorithm</a></td>
   <td>hash algorithm</td>
   </tr>
   </tbody></table>

.. _embedded-secret-lock-transaction:

EmbeddedSecretLockTransaction
=============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 132 bytes = 0x84</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_secret/secret_lock.cats#L30">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_secret/src/model/SecretLockTransaction.h#L64">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded secret lock transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">SECRET_LOCK</code> (<code class="docutils literal">0x4152</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#secret-lock-transaction-body" title="binary layout for a secret lock transaction">SecretLockTransactionBody</a><span style="float:right">81 bytes = 0x51</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>locked mosaic recipient address</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secret</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>secret</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#unresolved-mosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a></td>
   <td>locked mosaic</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#block-duration" title="">BlockDuration</a></td>
   <td>number of blocks for which a lock should be valid</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash_algorithm</code></td>
   <td><a href="#lock-hash-algorithm" title="enumeration of lock hash algorithms">LockHashAlgorithm</a></td>
   <td>hash algorithm</td>
   </tr>
   </tbody></table>

.. _secret-proof-transaction:

SecretProofTransaction
======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 190+ bytes = 0xbe+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_secret/secret_proof.cats#L22">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_secret/src/model/SecretProofTransaction.h#L69">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded secret proof transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">SECRET_PROOF</code> (<code class="docutils literal">0x4252</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#secret-proof-transaction-body" title="binary layout for a secret proof transaction">SecretProofTransactionBody</a><span style="float:right">59+ bytes = 0x3b+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>locked mosaic recipient address</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secret</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>secret</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">proof_size</code></td>
   <td>byte[2]</td>
   <td>proof size in bytes</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash_algorithm</code></td>
   <td><a href="#lock-hash-algorithm" title="enumeration of lock hash algorithms">LockHashAlgorithm</a></td>
   <td>hash algorithm</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">proof</code></td>
   <td>byte[proof_size]</td>
   <td>proof data</td>
   </tr>
   </tbody></table>

.. _embedded-secret-proof-transaction:

EmbeddedSecretProofTransaction
==============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 110+ bytes = 0x6e+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_secret/secret_proof.cats#L30">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_secret/src/model/SecretProofTransaction.h#L69">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded secret proof transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">SECRET_PROOF</code> (<code class="docutils literal">0x4252</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#secret-proof-transaction-body" title="binary layout for a secret proof transaction">SecretProofTransactionBody</a><span style="float:right">59+ bytes = 0x3b+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>locked mosaic recipient address</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secret</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>secret</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">proof_size</code></td>
   <td>byte[2]</td>
   <td>proof size in bytes</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash_algorithm</code></td>
   <td><a href="#lock-hash-algorithm" title="enumeration of lock hash algorithms">LockHashAlgorithm</a></td>
   <td>hash algorithm</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">proof</code></td>
   <td>byte[proof_size]</td>
   <td>proof data</td>
   </tr>
   </tbody></table>

.. _account-metadata-transaction:

AccountMetadataTransaction
==========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 167+ bytes = 0xa7+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/account_metadata.cats#L23">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/AccountMetadataTransaction.h#L38">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded account metadata transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_METADATA</code> (<code class="docutils literal">0x4144</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#account-metadata-transaction-body" title="binary layout for an account metadata transaction">AccountMetadataTransactionBody</a><span style="float:right">36+ bytes = 0x24+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>metadata target address</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td>metadata key scoped to source, target and type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td>change in value size in bytes</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td>value size in bytes</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value)</td>
   </tr>
   </tbody></table>

.. _embedded-account-metadata-transaction:

EmbeddedAccountMetadataTransaction
==================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 87+ bytes = 0x57+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/account_metadata.cats#L31">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/AccountMetadataTransaction.h#L38">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded account metadata transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_METADATA</code> (<code class="docutils literal">0x4144</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#account-metadata-transaction-body" title="binary layout for an account metadata transaction">AccountMetadataTransactionBody</a><span style="float:right">36+ bytes = 0x24+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>metadata target address</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td>metadata key scoped to source, target and type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td>change in value size in bytes</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td>value size in bytes</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value)</td>
   </tr>
   </tbody></table>

.. _mosaic-metadata-transaction:

MosaicMetadataTransaction
=========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 175+ bytes = 0xaf+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/mosaic_metadata.cats#L26">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/MosaicMetadataTransaction.h#L45">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded mosaic metadata transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_METADATA</code> (<code class="docutils literal">0x4244</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaic-metadata-transaction-body" title="binary layout for a mosaic metadata transaction">MosaicMetadataTransactionBody</a><span style="float:right">44+ bytes = 0x2c+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>metadata target address</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td>metadata key scoped to source, target and type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>target mosaic identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td>change in value size in bytes</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td>value size in bytes</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value)</td>
   </tr>
   </tbody></table>

.. _embedded-mosaic-metadata-transaction:

EmbeddedMosaicMetadataTransaction
=================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 95+ bytes = 0x5f+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/mosaic_metadata.cats#L34">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/MosaicMetadataTransaction.h#L45">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded mosaic metadata transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_METADATA</code> (<code class="docutils literal">0x4244</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaic-metadata-transaction-body" title="binary layout for a mosaic metadata transaction">MosaicMetadataTransactionBody</a><span style="float:right">44+ bytes = 0x2c+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>metadata target address</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td>metadata key scoped to source, target and type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>target mosaic identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td>change in value size in bytes</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td>value size in bytes</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value)</td>
   </tr>
   </tbody></table>

.. _namespace-metadata-transaction:

NamespaceMetadataTransaction
============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 175+ bytes = 0xaf+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/namespace_metadata.cats#L27">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/NamespaceMetadataTransaction.h#L46">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded namespace metadata transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">NAMESPACE_METADATA</code> (<code class="docutils literal">0x4344</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#namespace-metadata-transaction-body" title="binary layout for a namespace metadata transaction">NamespaceMetadataTransactionBody</a><span style="float:right">44+ bytes = 0x2c+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>metadata target address</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td>metadata key scoped to source, target and type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_namespace_id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>target namespace identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td>change in value size in bytes</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td>value size in bytes</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value)</td>
   </tr>
   </tbody></table>

.. _embedded-namespace-metadata-transaction:

EmbeddedNamespaceMetadataTransaction
====================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 95+ bytes = 0x5f+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/namespace_metadata.cats#L35">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/NamespaceMetadataTransaction.h#L46">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded namespace metadata transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">NAMESPACE_METADATA</code> (<code class="docutils literal">0x4344</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#namespace-metadata-transaction-body" title="binary layout for a namespace metadata transaction">NamespaceMetadataTransactionBody</a><span style="float:right">44+ bytes = 0x2c+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>metadata target address</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td>metadata key scoped to source, target and type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_namespace_id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>target namespace identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td>change in value size in bytes</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td>value size in bytes</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value)</td>
   </tr>
   </tbody></table>

.. _mosaic-definition-transaction:

MosaicDefinitionTransaction
===========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 153 bytes = 0x99</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_definition.cats#L22">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicDefinitionTransaction.h#L65">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded mosaic definition transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_DEFINITION</code> (<code class="docutils literal">0x414d</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaic-definition-transaction-body" title="binary layout for a mosaic definition transaction">MosaicDefinitionTransactionBody</a><span style="float:right">22 bytes = 0x16</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">id</code></td>
   <td><a href="#mosaic-id" title="">MosaicId</a></td>
   <td>mosaic identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#block-duration" title="">BlockDuration</a></td>
   <td>mosaic duration</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">nonce</code></td>
   <td><a href="#mosaic-nonce" title="">MosaicNonce</a></td>
   <td>mosaic nonce</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">flags</code></td>
   <td><a href="#mosaic-flags" title="enumeration of mosaic property flags">MosaicFlags</a></td>
   <td>mosaic flags</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">divisibility</code></td>
   <td>byte[1]</td>
   <td>mosaic divisibility</td>
   </tr>
   </tbody></table>

.. _embedded-mosaic-definition-transaction:

EmbeddedMosaicDefinitionTransaction
===================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 73 bytes = 0x49</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_definition.cats#L30">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicDefinitionTransaction.h#L65">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded mosaic definition transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_DEFINITION</code> (<code class="docutils literal">0x414d</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaic-definition-transaction-body" title="binary layout for a mosaic definition transaction">MosaicDefinitionTransactionBody</a><span style="float:right">22 bytes = 0x16</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">id</code></td>
   <td><a href="#mosaic-id" title="">MosaicId</a></td>
   <td>mosaic identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#block-duration" title="">BlockDuration</a></td>
   <td>mosaic duration</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">nonce</code></td>
   <td><a href="#mosaic-nonce" title="">MosaicNonce</a></td>
   <td>mosaic nonce</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">flags</code></td>
   <td><a href="#mosaic-flags" title="enumeration of mosaic property flags">MosaicFlags</a></td>
   <td>mosaic flags</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">divisibility</code></td>
   <td>byte[1]</td>
   <td>mosaic divisibility</td>
   </tr>
   </tbody></table>

.. _mosaic-supply-change-transaction:

MosaicSupplyChangeTransaction
=============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 148 bytes = 0x94</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_supply_change.cats#L16">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicSupplyChangeTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded mosaic supply change transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_SUPPLY_CHANGE</code> (<code class="docutils literal">0x424d</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaic-supply-change-transaction-body" title="binary layout for a mosaic supply change transaction">MosaicSupplyChangeTransactionBody</a><span style="float:right">17 bytes = 0x11</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>affected mosaic identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">delta</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>change amount</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">action</code></td>
   <td><a href="#mosaic-supply-change-action" title="enumeration of mosaic supply change actions">MosaicSupplyChangeAction</a></td>
   <td>supply change action</td>
   </tr>
   </tbody></table>

.. _embedded-mosaic-supply-change-transaction:

EmbeddedMosaicSupplyChangeTransaction
=====================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 68 bytes = 0x44</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_supply_change.cats#L24">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicSupplyChangeTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded mosaic supply change transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_SUPPLY_CHANGE</code> (<code class="docutils literal">0x424d</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaic-supply-change-transaction-body" title="binary layout for a mosaic supply change transaction">MosaicSupplyChangeTransactionBody</a><span style="float:right">17 bytes = 0x11</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>affected mosaic identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">delta</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>change amount</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">action</code></td>
   <td><a href="#mosaic-supply-change-action" title="enumeration of mosaic supply change actions">MosaicSupplyChangeAction</a></td>
   <td>supply change action</td>
   </tr>
   </tbody></table>

.. _multisig-account-modification-transaction:

MultisigAccountModificationTransaction
======================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 139+ bytes = 0x8b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/multisig/multisig_account_modification.cats#L27">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/multisig/src/model/MultisigAccountModificationTransaction.h#L83">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded multisig account modification transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MULTISIG_ACCOUNT_MODIFICATION</code> (<code class="docutils literal">0x4155</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#multisig-account-modification-transaction-body" title="binary layout for a multisig account modification transaction">MultisigAccountModificationTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">min_removal_delta</code></td>
   <td>byte[1]</td>
   <td>relative change of the minimal number of cosignatories required when removing an account</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">min_approval_delta</code></td>
   <td>byte[1]</td>
   <td>relative change of the minimal number of cosignatories required when approving a transaction</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_additions_count</code></td>
   <td>byte[1]</td>
   <td>number of cosignatory address additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_deletions_count</code></td>
   <td>byte[1]</td>
   <td>number of cosignatory address deletions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">multisig_&ZeroWidthSpace;account_&ZeroWidthSpace;modification_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align addressAdditions on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_additions</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a>&ZeroWidthSpace;[address_additions_count]</td>
   <td>cosignatory address additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_deletions</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a>&ZeroWidthSpace;[address_deletions_count]</td>
   <td>cosignatory address deletions</td>
   </tr>
   </tbody></table>

.. _embedded-multisig-account-modification-transaction:

EmbeddedMultisigAccountModificationTransaction
==============================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 59+ bytes = 0x3b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/multisig/multisig_account_modification.cats#L35">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/multisig/src/model/MultisigAccountModificationTransaction.h#L83">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded multisig account modification transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MULTISIG_ACCOUNT_MODIFICATION</code> (<code class="docutils literal">0x4155</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#multisig-account-modification-transaction-body" title="binary layout for a multisig account modification transaction">MultisigAccountModificationTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">min_removal_delta</code></td>
   <td>byte[1]</td>
   <td>relative change of the minimal number of cosignatories required when removing an account</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">min_approval_delta</code></td>
   <td>byte[1]</td>
   <td>relative change of the minimal number of cosignatories required when approving a transaction</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_additions_count</code></td>
   <td>byte[1]</td>
   <td>number of cosignatory address additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_deletions_count</code></td>
   <td>byte[1]</td>
   <td>number of cosignatory address deletions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">multisig_&ZeroWidthSpace;account_&ZeroWidthSpace;modification_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align addressAdditions on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_additions</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a>&ZeroWidthSpace;[address_additions_count]</td>
   <td>cosignatory address additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_deletions</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a>&ZeroWidthSpace;[address_deletions_count]</td>
   <td>cosignatory address deletions</td>
   </tr>
   </tbody></table>

.. _address-alias-transaction:

AddressAliasTransaction
=======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 164 bytes = 0xa4</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/address_alias.cats#L16">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/AddressAliasTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded address alias transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ADDRESS_ALIAS</code> (<code class="docutils literal">0x424e</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#address-alias-transaction-body" title="binary layout for an address alias transaction">AddressAliasTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">namespace_id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>identifier of the namespace that will become an alias</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>aliased address</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">alias_action</code></td>
   <td><a href="#alias-action" title="enumeration of alias actions">AliasAction</a></td>
   <td>alias action</td>
   </tr>
   </tbody></table>

.. _embedded-address-alias-transaction:

EmbeddedAddressAliasTransaction
===============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 84 bytes = 0x54</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/address_alias.cats#L24">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/AddressAliasTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded address alias transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ADDRESS_ALIAS</code> (<code class="docutils literal">0x424e</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#address-alias-transaction-body" title="binary layout for an address alias transaction">AddressAliasTransactionBody</a><span style="float:right">33 bytes = 0x21</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">namespace_id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>identifier of the namespace that will become an alias</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>aliased address</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">alias_action</code></td>
   <td><a href="#alias-action" title="enumeration of alias actions">AliasAction</a></td>
   <td>alias action</td>
   </tr>
   </tbody></table>

.. _mosaic-alias-transaction:

MosaicAliasTransaction
======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 148 bytes = 0x94</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/mosaic_alias.cats#L16">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/MosaicAliasTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded mosaic alias transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_ALIAS</code> (<code class="docutils literal">0x434e</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaic-alias-transaction-body" title="binary layout for an mosaic alias transaction">MosaicAliasTransactionBody</a><span style="float:right">17 bytes = 0x11</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">namespace_id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>identifier of the namespace that will become an alias</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#mosaic-id" title="">MosaicId</a></td>
   <td>aliased mosaic identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">alias_action</code></td>
   <td><a href="#alias-action" title="enumeration of alias actions">AliasAction</a></td>
   <td>alias action</td>
   </tr>
   </tbody></table>

.. _embedded-mosaic-alias-transaction:

EmbeddedMosaicAliasTransaction
==============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 68 bytes = 0x44</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/mosaic_alias.cats#L24">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/MosaicAliasTransaction.h#L58">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded mosaic alias transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_ALIAS</code> (<code class="docutils literal">0x434e</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaic-alias-transaction-body" title="binary layout for an mosaic alias transaction">MosaicAliasTransactionBody</a><span style="float:right">17 bytes = 0x11</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">namespace_id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>identifier of the namespace that will become an alias</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#mosaic-id" title="">MosaicId</a></td>
   <td>aliased mosaic identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">alias_action</code></td>
   <td><a href="#alias-action" title="enumeration of alias actions">AliasAction</a></td>
   <td>alias action</td>
   </tr>
   </tbody></table>

.. _namespace-registration-transaction:

NamespaceRegistrationTransaction
================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 157+ bytes = 0x9d+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/namespace_registration.cats#L25">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/NamespaceRegistrationTransaction.h#L95">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded namespace registration transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">NAMESPACE_REGISTRATION</code> (<code class="docutils literal">0x414e</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#namespace-registration-transaction-body" title="binary layout for a namespace registration transaction">NamespaceRegistrationTransactionBody</a><span style="float:right">26+ bytes = 0x1a+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#block-duration" title="">BlockDuration</a></td>
   <td>namespace duration</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">parent_id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>parent namespace identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>namespace identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">registration_type</code></td>
   <td><a href="#namespace-registration-type" title="enumeration of namespace registration types">NamespaceRegistrationType</a></td>
   <td>namespace registration type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">name_size</code></td>
   <td>byte[1]</td>
   <td>namespace name size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">name</code></td>
   <td>byte[name_size]</td>
   <td>namespace name</td>
   </tr>
   </tbody></table>

.. _embedded-namespace-registration-transaction:

EmbeddedNamespaceRegistrationTransaction
========================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 77+ bytes = 0x4d+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/namespace_registration.cats#L33">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/NamespaceRegistrationTransaction.h#L95">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded namespace registration transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">NAMESPACE_REGISTRATION</code> (<code class="docutils literal">0x414e</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#namespace-registration-transaction-body" title="binary layout for a namespace registration transaction">NamespaceRegistrationTransactionBody</a><span style="float:right">26+ bytes = 0x1a+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#block-duration" title="">BlockDuration</a></td>
   <td>namespace duration</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">parent_id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>parent namespace identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>namespace identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">registration_type</code></td>
   <td><a href="#namespace-registration-type" title="enumeration of namespace registration types">NamespaceRegistrationType</a></td>
   <td>namespace registration type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">name_size</code></td>
   <td>byte[1]</td>
   <td>namespace name size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">name</code></td>
   <td>byte[name_size]</td>
   <td>namespace name</td>
   </tr>
   </tbody></table>

.. _account-address-restriction-transaction:

AccountAddressRestrictionTransaction
====================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 139+ bytes = 0x8b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_address_restriction.cats#L25">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_account/src/model/AccountRestrictionSharedTransaction.h#L86">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded account address restriction transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_ADDRESS_RESTRICTION</code> (<code class="docutils literal">0x4150</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#account-address-restriction-transaction-body" title="binary layout for an account address restriction transaction">AccountAddressRestrictionTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#account-restriction-flags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td>account restriction flags</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction deletions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align restrictionAdditions on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td>account restriction additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td>account restriction deletions</td>
   </tr>
   </tbody></table>

.. _embedded-account-address-restriction-transaction:

EmbeddedAccountAddressRestrictionTransaction
============================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 59+ bytes = 0x3b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_address_restriction.cats#L33">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_account/src/model/AccountRestrictionSharedTransaction.h#L86">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded account address restriction transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_ADDRESS_RESTRICTION</code> (<code class="docutils literal">0x4150</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#account-address-restriction-transaction-body" title="binary layout for an account address restriction transaction">AccountAddressRestrictionTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#account-restriction-flags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td>account restriction flags</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction deletions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align restrictionAdditions on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td>account restriction additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td>account restriction deletions</td>
   </tr>
   </tbody></table>

.. _account-mosaic-restriction-transaction:

AccountMosaicRestrictionTransaction
===================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 139+ bytes = 0x8b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_mosaic_restriction.cats#L25">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_account/src/model/AccountRestrictionSharedTransaction.h#L86">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded account mosaic restriction transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_MOSAIC_RESTRICTION</code> (<code class="docutils literal">0x4250</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#account-mosaic-restriction-transaction-body" title="binary layout for an account mosaic restriction transaction">AccountMosaicRestrictionTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#account-restriction-flags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td>account restriction flags</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction deletions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align restrictionAdditions on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td>account restriction additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td>account restriction deletions</td>
   </tr>
   </tbody></table>

.. _embedded-account-mosaic-restriction-transaction:

EmbeddedAccountMosaicRestrictionTransaction
===========================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 59+ bytes = 0x3b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_mosaic_restriction.cats#L33">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_account/src/model/AccountRestrictionSharedTransaction.h#L86">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded account mosaic restriction transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_MOSAIC_RESTRICTION</code> (<code class="docutils literal">0x4250</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#account-mosaic-restriction-transaction-body" title="binary layout for an account mosaic restriction transaction">AccountMosaicRestrictionTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#account-restriction-flags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td>account restriction flags</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction deletions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align restrictionAdditions on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td>account restriction additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td>account restriction deletions</td>
   </tr>
   </tbody></table>

.. _account-operation-restriction-transaction:

AccountOperationRestrictionTransaction
======================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 139+ bytes = 0x8b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_operation_restriction.cats#L25">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_account/src/model/AccountOperationRestrictionTransaction.h#L30">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded account operation restriction transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_OPERATION_RESTRICTION</code> (<code class="docutils literal">0x4350</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#account-operation-restriction-transaction-body" title="binary layout for an account operation restriction transaction">AccountOperationRestrictionTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#account-restriction-flags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td>account restriction flags</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction deletions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align restrictionAdditions on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td>account restriction additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td>account restriction deletions</td>
   </tr>
   </tbody></table>

.. _embedded-account-operation-restriction-transaction:

EmbeddedAccountOperationRestrictionTransaction
==============================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 59+ bytes = 0x3b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_operation_restriction.cats#L33">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_account/src/model/AccountOperationRestrictionTransaction.h#L30">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded account operation restriction transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">ACCOUNT_OPERATION_RESTRICTION</code> (<code class="docutils literal">0x4350</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#account-operation-restriction-transaction-body" title="binary layout for an account operation restriction transaction">AccountOperationRestrictionTransactionBody</a><span style="float:right">8+ bytes = 0x8+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#account-restriction-flags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td>account restriction flags</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction deletions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align restrictionAdditions on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td>account restriction additions</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td>account restriction deletions</td>
   </tr>
   </tbody></table>

.. _mosaic-address-restriction-transaction:

MosaicAddressRestrictionTransaction
===================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 187 bytes = 0xbb</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_mosaic/mosaic_address_restriction.cats#L21">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/model/MosaicAddressRestrictionTransaction.h#L62">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded mosaic address restriction transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_ADDRESS_RESTRICTION</code> (<code class="docutils literal">0x4251</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaic-address-restriction-transaction-body" title="binary layout for a mosaic address restriction transaction">MosaicAddressRestrictionTransactionBody</a><span style="float:right">56 bytes = 0x38</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>identifier of the mosaic to which the restriction applies</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_key</code></td>
   <td>byte[8]</td>
   <td>restriction key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_value</code></td>
   <td>byte[8]</td>
   <td>previous restriction value</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_value</code></td>
   <td>byte[8]</td>
   <td>new restriction value</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>address being restricted</td>
   </tr>
   </tbody></table>

.. _embedded-mosaic-address-restriction-transaction:

EmbeddedMosaicAddressRestrictionTransaction
===========================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 107 bytes = 0x6b</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_mosaic/mosaic_address_restriction.cats#L29">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/model/MosaicAddressRestrictionTransaction.h#L62">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded mosaic address restriction transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_ADDRESS_RESTRICTION</code> (<code class="docutils literal">0x4251</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaic-address-restriction-transaction-body" title="binary layout for a mosaic address restriction transaction">MosaicAddressRestrictionTransactionBody</a><span style="float:right">56 bytes = 0x38</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>identifier of the mosaic to which the restriction applies</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_key</code></td>
   <td>byte[8]</td>
   <td>restriction key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_value</code></td>
   <td>byte[8]</td>
   <td>previous restriction value</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_value</code></td>
   <td>byte[8]</td>
   <td>new restriction value</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>address being restricted</td>
   </tr>
   </tbody></table>

.. _mosaic-global-restriction-transaction:

MosaicGlobalRestrictionTransaction
==================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 173 bytes = 0xad</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_mosaic/mosaic_global_restriction.cats#L28">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/model/MosaicGlobalRestrictionTransaction.h#L69">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded mosaic global restriction transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_GLOBAL_RESTRICTION</code> (<code class="docutils literal">0x4151</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaic-global-restriction-transaction-body" title="binary layout for a mosaic global restriction transaction">MosaicGlobalRestrictionTransactionBody</a><span style="float:right">42 bytes = 0x2a</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>identifier of the mosaic being restricted</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">reference_mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>identifier of the mosaic providing the restriction key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_key</code></td>
   <td>byte[8]</td>
   <td>restriction key relative to the reference mosaic identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_value</code></td>
   <td>byte[8]</td>
   <td>previous restriction value</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_value</code></td>
   <td>byte[8]</td>
   <td>new restriction value</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_type</code></td>
   <td><a href="#mosaic-restriction-type" title="enumeration of mosaic restriction types">MosaicRestrictionType</a></td>
   <td>previous restriction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_type</code></td>
   <td><a href="#mosaic-restriction-type" title="enumeration of mosaic restriction types">MosaicRestrictionType</a></td>
   <td>new restriction type</td>
   </tr>
   </tbody></table>

.. _embedded-mosaic-global-restriction-transaction:

EmbeddedMosaicGlobalRestrictionTransaction
==========================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 93 bytes = 0x5d</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_mosaic/mosaic_global_restriction.cats#L36">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/model/MosaicGlobalRestrictionTransaction.h#L69">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded mosaic global restriction transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">MOSAIC_GLOBAL_RESTRICTION</code> (<code class="docutils literal">0x4151</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#mosaic-global-restriction-transaction-body" title="binary layout for a mosaic global restriction transaction">MosaicGlobalRestrictionTransactionBody</a><span style="float:right">42 bytes = 0x2a</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>identifier of the mosaic being restricted</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">reference_mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>identifier of the mosaic providing the restriction key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_key</code></td>
   <td>byte[8]</td>
   <td>restriction key relative to the reference mosaic identifier</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_value</code></td>
   <td>byte[8]</td>
   <td>previous restriction value</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_value</code></td>
   <td>byte[8]</td>
   <td>new restriction value</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_type</code></td>
   <td><a href="#mosaic-restriction-type" title="enumeration of mosaic restriction types">MosaicRestrictionType</a></td>
   <td>previous restriction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_type</code></td>
   <td><a href="#mosaic-restriction-type" title="enumeration of mosaic restriction types">MosaicRestrictionType</a></td>
   <td>new restriction type</td>
   </tr>
   </tbody></table>

.. _transfer-transaction:

TransferTransaction
===================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 163+ bytes = 0xa3+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/transfer/transfer.cats#L27">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/transfer/src/model/TransferTransaction.h#L81">catapult model</a></td></tr>
       </table></div>
   binary layout for a non-embedded transfer transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">TRANSFER</code> (<code class="docutils literal">0x4154</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transaction" title="binary layout for a transaction">Transaction</a><span style="float:right">128 bytes = 0x80</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transfer-transaction-body" title="binary layout for a transfer transaction">TransferTransactionBody</a><span style="float:right">32+ bytes = 0x20+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>recipient address</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">message_size</code></td>
   <td>byte[2]</td>
   <td>size of attached message</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaics_count</code></td>
   <td>byte[1]</td>
   <td>number of attached mosaics</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transfer_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align mosaics on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transfer_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;2</code></td>
   <td>byte[1]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align mosaics on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaics</code></td>
   <td><a href="#unresolved-mosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a>&ZeroWidthSpace;[mosaics_count]</td>
   <td>attached mosaics</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">message</code></td>
   <td>byte[message_size]</td>
   <td>attached message</td>
   </tr>
   </tbody></table>

.. _embedded-transfer-transaction:

EmbeddedTransferTransaction
===========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 83+ bytes = 0x53+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/transfer/transfer.cats#L35">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/transfer/src/model/TransferTransaction.h#L81">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded transfer transaction
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
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td><b>const</b> <code class="docutils literal">TRANSFER</code> (<code class="docutils literal">0x4154</code>)<br/></td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a><span style="float:right">48 bytes = 0x30</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#transfer-transaction-body" title="binary layout for a transfer transaction">TransferTransactionBody</a><span style="float:right">32+ bytes = 0x20+ <i>(variable)</i></span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>recipient address</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">message_size</code></td>
   <td>byte[2]</td>
   <td>size of attached message</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaics_count</code></td>
   <td>byte[1]</td>
   <td>number of attached mosaics</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transfer_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align mosaics on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transfer_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;2</code></td>
   <td>byte[1]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align mosaics on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaics</code></td>
   <td><a href="#unresolved-mosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a>&ZeroWidthSpace;[mosaics_count]</td>
   <td>attached mosaics</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">message</code></td>
   <td>byte[message_size]</td>
   <td>attached message</td>
   </tr>
   </tbody></table>

Inner Structures
****************

These are structures only meant to be included inside other structures.
Their description is already present in the containing structures above and is only repeated here for completeness.

.. _size-prefixed-entity:

SizePrefixedEntity
==================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 4 bytes = 0x4</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/entity.cats#L12">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/SizePrefixedEntity.h#L32">catapult model</a></td></tr>
       </table></div>
   binary layout for a size-prefixed entity
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
   <td>entity size</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#block-header" title="binary layout for a block header">BlockHeader</a>, <a href="#receipt" title="binary layout for a receipt entity">Receipt</a>, <a href="#transaction" title="binary layout for a transaction">Transaction</a>, <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a>
   </tr></td>

   </tbody></table>

.. _verifiable-entity:

VerifiableEntity
================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 68 bytes = 0x44</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/entity.cats#L17">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/VerifiableEntity.h#L47">catapult model</a></td></tr>
       </table></div>
   binary layout for a verifiable entity
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
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#block-header" title="binary layout for a block header">BlockHeader</a>, <a href="#transaction" title="binary layout for a transaction">Transaction</a>
   </tr></td>

   </tbody></table>

.. _entity-body:

EntityBody
==========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 38 bytes = 0x26</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/entity.cats#L25">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/EntityBody.h#L33">catapult model</a></td></tr>
       </table></div>
   binary layout for a blockchain entity (block or transaction)
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#block-header" title="binary layout for a block header">BlockHeader</a>, <a href="#transaction" title="binary layout for a transaction">Transaction</a>, <a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a>
   </tr></td>

   </tbody></table>

.. _block-header:

BlockHeader
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 372 bytes = 0x174</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/block.cats#L30">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/WeakEntityInfo.h#L28">catapult model</a></td></tr>
       </table></div>
   binary layout for a block header
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#block-type" title="enumeration of block types">BlockType</a></td>
   <td>block type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">height</code></td>
   <td><a href="#height" title="">Height</a></td>
   <td>block height</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">timestamp</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>number of milliseconds elapsed since creation of nemesis block</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">difficulty</code></td>
   <td><a href="#difficulty" title="">Difficulty</a></td>
   <td>block difficulty</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">generation_hash_proof</code></td>
   <td><a href="#vrf-proof" title="verfiable random function proof">VrfProof</a></td>
   <td>generation hash proof</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_block_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>previous block hash</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>hash of the transactions in this block</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">receipts_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>hash of the receipts generated by this block</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">state_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>hash of the global chain state at this block</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">beneficiary_address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>beneficiary address designated by harvester</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee_multiplier</code></td>
   <td><a href="#block-fee-multiplier" title="">BlockFeeMultiplier</a></td>
   <td>fee multiplier applied to block transactions</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#nemesis-block-header" title="binary layout for a nemesis block header">NemesisBlockHeader</a>, <a href="#normal-block-header" title="binary layout for a normal block header">NormalBlockHeader</a>, <a href="#importance-block-header" title="binary layout for an importance block header">ImportanceBlockHeader</a>
   </tr></td>

   </tbody></table>

.. _importance-block-footer:

ImportanceBlockFooter
=====================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 52 bytes = 0x34</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/block.cats#L69">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/Block.h#L85">catapult model</a></td></tr>
       </table></div>
   binary layout for an importance block footer
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
   <td>number of voting eligible accounts</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">harvesting_&ZeroWidthSpace;eligible_&ZeroWidthSpace;accounts_&ZeroWidthSpace;count</code></td>
   <td>byte[8]</td>
   <td>number of harvesting eligible accounts</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">total_voting_balance</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>total balance eligible for voting</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_importance_block_hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>previous importance block hash</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#nemesis-block-header" title="binary layout for a nemesis block header">NemesisBlockHeader</a>, <a href="#importance-block-header" title="binary layout for an importance block header">ImportanceBlockHeader</a>
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
   binary layout for a receipt entity
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[2]</td>
   <td>receipt version</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#receipt-type" title="enumeration of receipt types">ReceiptType</a></td>
   <td>receipt type</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#balance-transfer-receipt" title="binary layout for a balance transfer receipt">BalanceTransferReceipt</a>, <a href="#balance-change-receipt" title="binary layout for a balance change receipt">BalanceChangeReceipt</a>, <a href="#inflation-receipt" title="binary layout for an inflation receipt">InflationReceipt</a>, <a href="#mosaic-expiry-receipt" title="binary layout for a mosaic expiry receipt">MosaicExpiryReceipt</a>, <a href="#namespace-expiry-receipt" title="binary layout for a namespace expiry receipt">NamespaceExpiryReceipt</a>, <a href="#mosaic-resolution-statement" title="binary layout for a mosaic resolution statement">MosaicResolutionStatement</a>, <a href="#address-resolution-statement" title="binary layout for an address resolution statement">AddressResolutionStatement</a>
   </tr></td>

   </tbody></table>

.. _state-header:

StateHeader
===========

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 2 bytes = 0x2</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/state/state_header.cats#L2">schema</a></td></tr>
       </table></div>
   header common to all serialized states
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
   <td>serialization version</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#account-state" title="binary layout for non-historical account state">AccountState</a>, <a href="#hash-lock-info" title="binary layout for hash lock transaction info">HashLockInfo</a>, <a href="#metadata-entry" title="binary layout of a metadata entry">MetadataEntry</a>, <a href="#mosaic-entry" title="binary layout for mosaic entry">MosaicEntry</a>, <a href="#multisig-entry" title="binary layout for a multisig entry">MultisigEntry</a>, <a href="#root-namespace-history" title="binary layout for non-historical root namespace history">RootNamespaceHistory</a>, <a href="#account-restrictions" title="binary layout for account restrictions">AccountRestrictions</a>, <a href="#mosaic-restriction-entry" title="binary layout for a mosaic restriction">MosaicRestrictionEntry</a>, <a href="#secret-lock-info" title="binary layout for serialized lock transaction">SecretLockInfo</a>
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
   binary layout for a transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#verifiable-entity" title="binary layout for a verifiable entity">VerifiableEntity</a><span style="float:right">68 bytes = 0x44</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">verifiable_&ZeroWidthSpace;entity_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align byte[64] on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>entity signature</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">fee</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>transaction fee</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">deadline</code></td>
   <td><a href="#timestamp" title="">Timestamp</a></td>
   <td>transaction deadline</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#account-key-link-transaction" title="binary layout for a non-embedded account key link transaction">AccountKeyLinkTransaction</a>, <a href="#node-key-link-transaction" title="binary layout for a non-embedded node key link transaction">NodeKeyLinkTransaction</a>, <a href="#aggregate-complete-transaction" title="binary layout for an aggregate complete transaction">AggregateCompleteTransaction</a>, <a href="#aggregate-bonded-transaction" title="binary layout for an aggregate bonded transaction">AggregateBondedTransaction</a>, <a href="#voting-key-link-transaction" title="binary layout for a non-embedded voting key link transaction">VotingKeyLinkTransaction</a>, <a href="#vrf-key-link-transaction" title="binary layout for a non-embedded vrf key link transaction">VrfKeyLinkTransaction</a>, <a href="#hash-lock-transaction" title="binary layout for a non-embedded hash lock transaction">HashLockTransaction</a>, <a href="#secret-lock-transaction" title="binary layout for a non-embedded secret lock transaction">SecretLockTransaction</a>, <a href="#secret-proof-transaction" title="binary layout for a non-embedded secret proof transaction">SecretProofTransaction</a>, <a href="#account-metadata-transaction" title="binary layout for a non-embedded account metadata transaction">AccountMetadataTransaction</a>, <a href="#mosaic-metadata-transaction" title="binary layout for a non-embedded mosaic metadata transaction">MosaicMetadataTransaction</a>, <a href="#namespace-metadata-transaction" title="binary layout for a non-embedded namespace metadata transaction">NamespaceMetadataTransaction</a>, <a href="#mosaic-definition-transaction" title="binary layout for a non-embedded mosaic definition transaction">MosaicDefinitionTransaction</a>, <a href="#mosaic-supply-change-transaction" title="binary layout for a non-embedded mosaic supply change transaction">MosaicSupplyChangeTransaction</a>, <a href="#multisig-account-modification-transaction" title="binary layout for a non-embedded multisig account modification transaction">MultisigAccountModificationTransaction</a>, <a href="#address-alias-transaction" title="binary layout for a non-embedded address alias transaction">AddressAliasTransaction</a>, <a href="#mosaic-alias-transaction" title="binary layout for a non-embedded mosaic alias transaction">MosaicAliasTransaction</a>, <a href="#namespace-registration-transaction" title="binary layout for a non-embedded namespace registration transaction">NamespaceRegistrationTransaction</a>, <a href="#account-address-restriction-transaction" title="binary layout for a non-embedded account address restriction transaction">AccountAddressRestrictionTransaction</a>, <a href="#account-mosaic-restriction-transaction" title="binary layout for a non-embedded account mosaic restriction transaction">AccountMosaicRestrictionTransaction</a>, <a href="#account-operation-restriction-transaction" title="binary layout for a non-embedded account operation restriction transaction">AccountOperationRestrictionTransaction</a>, <a href="#mosaic-address-restriction-transaction" title="binary layout for a non-embedded mosaic address restriction transaction">MosaicAddressRestrictionTransaction</a>, <a href="#mosaic-global-restriction-transaction" title="binary layout for a non-embedded mosaic global restriction transaction">MosaicGlobalRestrictionTransaction</a>, <a href="#transfer-transaction" title="binary layout for a non-embedded transfer transaction">TransferTransaction</a>
   </tr></td>

   </tbody></table>

.. _embedded-transaction-header:

EmbeddedTransactionHeader
=========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8 bytes = 0x8</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/transaction.cats#L20">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/EmbeddedTransaction.h#L39">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded transaction header
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a>
   </tr></td>

   </tbody></table>

.. _embedded-transaction:

EmbeddedTransaction
===================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 48 bytes = 0x30</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/transaction.cats#L27">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/src/catapult/model/TransactionPlugin.h#L32">catapult model</a></td></tr>
       </table></div>
   binary layout for an embedded transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr><td colspan="6" class="big-table-section"><a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a><span style="float:right">8 bytes = 0x8</span></td></tr>
   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section"><a href="#size-prefixed-entity" title="binary layout for a size-prefixed entity">SizePrefixedEntity</a><span style="float:right">4 bytes = 0x4</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">size</code></td>
   <td>byte[4]</td>
   <td>entity size</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">embedded_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#embedded-transaction-header" title="binary layout for an embedded transaction header">EmbeddedTransactionHeader</a> on 8-byte boundary</td>
   </tr>
   <tr><td colspan="6" class="big-table-section"><a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a><span style="float:right">38 bytes = 0x26</span></td></tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>entity signer's public key</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">entity_body_reserved_1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of <a href="#entity-body" title="binary layout for a blockchain entity (block or transaction)">EntityBody</a> on 8-byte boundary</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">version</code></td>
   <td>byte[1]</td>
   <td>entity version</td>
   </tr>
   <tr>
   <td class="indentation-cell">&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">network</code></td>
   <td><a href="#network-type" title="enumeration of network types">NetworkType</a></td>
   <td>entity network</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">type</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a></td>
   <td>transaction type</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#embedded-account-key-link-transaction" title="binary layout for an embedded account key link transaction">EmbeddedAccountKeyLinkTransaction</a>, <a href="#embedded-node-key-link-transaction" title="binary layout for an embedded node key link transaction">EmbeddedNodeKeyLinkTransaction</a>, <a href="#embedded-voting-key-link-transaction" title="binary layout for an embedded voting key link transaction">EmbeddedVotingKeyLinkTransaction</a>, <a href="#embedded-vrf-key-link-transaction" title="binary layout for an embedded vrf key link transaction">EmbeddedVrfKeyLinkTransaction</a>, <a href="#embedded-hash-lock-transaction" title="binary layout for an embedded hash lock transaction">EmbeddedHashLockTransaction</a>, <a href="#embedded-secret-lock-transaction" title="binary layout for an embedded secret lock transaction">EmbeddedSecretLockTransaction</a>, <a href="#embedded-secret-proof-transaction" title="binary layout for an embedded secret proof transaction">EmbeddedSecretProofTransaction</a>, <a href="#embedded-account-metadata-transaction" title="binary layout for an embedded account metadata transaction">EmbeddedAccountMetadataTransaction</a>, <a href="#embedded-mosaic-metadata-transaction" title="binary layout for an embedded mosaic metadata transaction">EmbeddedMosaicMetadataTransaction</a>, <a href="#embedded-namespace-metadata-transaction" title="binary layout for an embedded namespace metadata transaction">EmbeddedNamespaceMetadataTransaction</a>, <a href="#embedded-mosaic-definition-transaction" title="binary layout for an embedded mosaic definition transaction">EmbeddedMosaicDefinitionTransaction</a>, <a href="#embedded-mosaic-supply-change-transaction" title="binary layout for an embedded mosaic supply change transaction">EmbeddedMosaicSupplyChangeTransaction</a>, <a href="#embedded-multisig-account-modification-transaction" title="binary layout for an embedded multisig account modification transaction">EmbeddedMultisigAccountModificationTransaction</a>, <a href="#embedded-address-alias-transaction" title="binary layout for an embedded address alias transaction">EmbeddedAddressAliasTransaction</a>, <a href="#embedded-mosaic-alias-transaction" title="binary layout for an embedded mosaic alias transaction">EmbeddedMosaicAliasTransaction</a>, <a href="#embedded-namespace-registration-transaction" title="binary layout for an embedded namespace registration transaction">EmbeddedNamespaceRegistrationTransaction</a>, <a href="#embedded-account-address-restriction-transaction" title="binary layout for an embedded account address restriction transaction">EmbeddedAccountAddressRestrictionTransaction</a>, <a href="#embedded-account-mosaic-restriction-transaction" title="binary layout for an embedded account mosaic restriction transaction">EmbeddedAccountMosaicRestrictionTransaction</a>, <a href="#embedded-account-operation-restriction-transaction" title="binary layout for an embedded account operation restriction transaction">EmbeddedAccountOperationRestrictionTransaction</a>, <a href="#embedded-mosaic-address-restriction-transaction" title="binary layout for an embedded mosaic address restriction transaction">EmbeddedMosaicAddressRestrictionTransaction</a>, <a href="#embedded-mosaic-global-restriction-transaction" title="binary layout for an embedded mosaic global restriction transaction">EmbeddedMosaicGlobalRestrictionTransaction</a>, <a href="#embedded-transfer-transaction" title="binary layout for an embedded transfer transaction">EmbeddedTransferTransaction</a>
   </tr></td>

   </tbody></table>

.. _account-key-link-transaction-body:

AccountKeyLinkTransactionBody
=============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 33 bytes = 0x21</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/account_link/account_key_link.cats#L6">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/account_link/src/model/AccountKeyLinkTransaction.h#L32">catapult model</a></td></tr>
       </table></div>
   binary layout for an account key link transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>linked public key</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#link-action" title="enumeration of link actions">LinkAction</a></td>
   <td>link action</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#account-key-link-transaction" title="binary layout for a non-embedded account key link transaction">AccountKeyLinkTransaction</a>, <a href="#embedded-account-key-link-transaction" title="binary layout for an embedded account key link transaction">EmbeddedAccountKeyLinkTransaction</a>
   </tr></td>

   </tbody></table>

.. _node-key-link-transaction-body:

NodeKeyLinkTransactionBody
==========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 33 bytes = 0x21</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/account_link/node_key_link.cats#L6">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/account_link/src/model/NodeKeyLinkTransaction.h#L32">catapult model</a></td></tr>
       </table></div>
   binary layout for a node key link transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>linked public key</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#link-action" title="enumeration of link actions">LinkAction</a></td>
   <td>link action</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#node-key-link-transaction" title="binary layout for a non-embedded node key link transaction">NodeKeyLinkTransaction</a>, <a href="#embedded-node-key-link-transaction" title="binary layout for an embedded node key link transaction">EmbeddedNodeKeyLinkTransaction</a>
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
   cosignature attached to an aggregate transaction
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
   <td>version</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signer_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>cosigner public key</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">signature</code></td>
   <td><a href="#signature" title="">Signature</a></td>
   <td>cosigner signature</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#detached-cosignature" title="cosignature detached from an aggregate transaction">DetachedCosignature</a>
   </tr></td>

   </tbody></table>

.. _aggregate-transaction-body:

AggregateTransactionBody
========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 40+ bytes = 0x28+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/aggregate/aggregate.cats#L5">schema</a></td></tr>
       </table></div>
   binary layout for an aggregate transaction
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
   <td>aggregate hash of an aggregate's transactions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">payload_size</code></td>
   <td>byte[4]</td>
   <td>transaction payload size in bytes <br/><b>Note:</b> this is the total number of bytes occupied by all sub-transactions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">aggregate_&ZeroWidthSpace;transaction_&ZeroWidthSpace;header_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align end of AggregateTransactionHeader on 8-byte boundary</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transactions</code></td>
   <td><a href="#embedded-transaction" title="binary layout for an embedded transaction">EmbeddedTransaction</a>&ZeroWidthSpace;[payload_size]</td>
   <td>sub-transaction data (transactions are variable sized and payload size is in bytes)</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">cosignatures</code></td>
   <td><a href="#cosignature" title="cosignature attached to an aggregate transaction">Cosignature</a></td>
   <td>cosignatures data (fills remaining body space after transactions)</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#aggregate-complete-transaction" title="binary layout for an aggregate complete transaction">AggregateCompleteTransaction</a>, <a href="#aggregate-bonded-transaction" title="binary layout for an aggregate bonded transaction">AggregateBondedTransaction</a>
   </tr></td>

   </tbody></table>

.. _voting-key-link-transaction-body:

VotingKeyLinkTransactionBody
============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 41 bytes = 0x29</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/coresystem/voting_key_link.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/coresystem/src/model/VotingKeyLinkTransaction.h#L31">catapult model</a></td></tr>
       </table></div>
   binary layout for a voting key link transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#voting-public-key" title="">VotingPublicKey</a></td>
   <td>linked public key</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">start_epoch</code></td>
   <td><a href="#finalization-epoch" title="">FinalizationEpoch</a></td>
   <td>start finalization epoch</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">end_epoch</code></td>
   <td><a href="#finalization-epoch" title="">FinalizationEpoch</a></td>
   <td>end finalization epoch</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#link-action" title="enumeration of link actions">LinkAction</a></td>
   <td>link action</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#voting-key-link-transaction" title="binary layout for a non-embedded voting key link transaction">VotingKeyLinkTransaction</a>, <a href="#embedded-voting-key-link-transaction" title="binary layout for an embedded voting key link transaction">EmbeddedVotingKeyLinkTransaction</a>
   </tr></td>

   </tbody></table>

.. _vrf-key-link-transaction-body:

VrfKeyLinkTransactionBody
=========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 33 bytes = 0x21</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/coresystem/vrf_key_link.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/coresystem/src/model/VrfKeyLinkTransaction.h#L31">catapult model</a></td></tr>
       </table></div>
   binary layout for a vrf key link transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">linked_public_key</code></td>
   <td><a href="#public-key" title="">PublicKey</a></td>
   <td>linked public key</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">link_action</code></td>
   <td><a href="#link-action" title="enumeration of link actions">LinkAction</a></td>
   <td>link action</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#vrf-key-link-transaction" title="binary layout for a non-embedded vrf key link transaction">VrfKeyLinkTransaction</a>, <a href="#embedded-vrf-key-link-transaction" title="binary layout for an embedded vrf key link transaction">EmbeddedVrfKeyLinkTransaction</a>
   </tr></td>

   </tbody></table>

.. _hash-lock-transaction-body:

HashLockTransactionBody
=======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 56 bytes = 0x38</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_hash/hash_lock.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_hash/src/model/HashLockTransaction.h#L33">catapult model</a></td></tr>
       </table></div>
   binary layout for a hash lock transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#unresolved-mosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a></td>
   <td>lock mosaic</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#block-duration" title="">BlockDuration</a></td>
   <td>number of blocks for which a lock should be valid</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>lock hash</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#hash-lock-transaction" title="binary layout for a non-embedded hash lock transaction">HashLockTransaction</a>, <a href="#embedded-hash-lock-transaction" title="binary layout for an embedded hash lock transaction">EmbeddedHashLockTransaction</a>
   </tr></td>

   </tbody></table>

.. _secret-lock-transaction-body:

SecretLockTransactionBody
=========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 81 bytes = 0x51</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_secret/secret_lock.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_secret/src/model/SecretLockTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   binary layout for a secret lock transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>locked mosaic recipient address</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secret</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>secret</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic</code></td>
   <td><a href="#unresolved-mosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a></td>
   <td>locked mosaic</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#block-duration" title="">BlockDuration</a></td>
   <td>number of blocks for which a lock should be valid</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash_algorithm</code></td>
   <td><a href="#lock-hash-algorithm" title="enumeration of lock hash algorithms">LockHashAlgorithm</a></td>
   <td>hash algorithm</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#secret-lock-transaction" title="binary layout for a non-embedded secret lock transaction">SecretLockTransaction</a>, <a href="#embedded-secret-lock-transaction" title="binary layout for an embedded secret lock transaction">EmbeddedSecretLockTransaction</a>
   </tr></td>

   </tbody></table>

.. _secret-proof-transaction-body:

SecretProofTransactionBody
==========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 59+ bytes = 0x3b+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/lock_secret/secret_proof.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/lock_secret/src/model/SecretProofTransaction.h#L33">catapult model</a></td></tr>
       </table></div>
   binary layout for a secret proof transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>locked mosaic recipient address</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">secret</code></td>
   <td><a href="#hash256" title="">Hash256</a></td>
   <td>secret</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">proof_size</code></td>
   <td>byte[2]</td>
   <td>proof size in bytes</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">hash_algorithm</code></td>
   <td><a href="#lock-hash-algorithm" title="enumeration of lock hash algorithms">LockHashAlgorithm</a></td>
   <td>hash algorithm</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">proof</code></td>
   <td>byte[proof_size]</td>
   <td>proof data</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#secret-proof-transaction" title="binary layout for a non-embedded secret proof transaction">SecretProofTransaction</a>, <a href="#embedded-secret-proof-transaction" title="binary layout for an embedded secret proof transaction">EmbeddedSecretProofTransaction</a>
   </tr></td>

   </tbody></table>

.. _account-metadata-transaction-body:

AccountMetadataTransactionBody
==============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 36+ bytes = 0x24+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/account_metadata.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/AccountMetadataTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   binary layout for an account metadata transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>metadata target address</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td>metadata key scoped to source, target and type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td>change in value size in bytes</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td>value size in bytes</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value)</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#account-metadata-transaction" title="binary layout for a non-embedded account metadata transaction">AccountMetadataTransaction</a>, <a href="#embedded-account-metadata-transaction" title="binary layout for an embedded account metadata transaction">EmbeddedAccountMetadataTransaction</a>
   </tr></td>

   </tbody></table>

.. _mosaic-metadata-transaction-body:

MosaicMetadataTransactionBody
=============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 44+ bytes = 0x2c+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/mosaic_metadata.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/MosaicMetadataTransaction.h#L41">catapult model</a></td></tr>
       </table></div>
   binary layout for a mosaic metadata transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>metadata target address</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td>metadata key scoped to source, target and type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>target mosaic identifier</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td>change in value size in bytes</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td>value size in bytes</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value)</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#mosaic-metadata-transaction" title="binary layout for a non-embedded mosaic metadata transaction">MosaicMetadataTransaction</a>, <a href="#embedded-mosaic-metadata-transaction" title="binary layout for an embedded mosaic metadata transaction">EmbeddedMosaicMetadataTransaction</a>
   </tr></td>

   </tbody></table>

.. _namespace-metadata-transaction-body:

NamespaceMetadataTransactionBody
================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 44+ bytes = 0x2c+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/metadata/namespace_metadata.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/metadata/src/model/NamespaceMetadataTransaction.h#L42">catapult model</a></td></tr>
       </table></div>
   binary layout for a namespace metadata transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>metadata target address</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">scoped_metadata_key</code></td>
   <td>byte[8]</td>
   <td>metadata key scoped to source, target and type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_namespace_id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>target namespace identifier</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size_delta</code></td>
   <td>byte[2]</td>
   <td>change in value size in bytes</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value_size</code></td>
   <td>byte[2]</td>
   <td>value size in bytes</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">value</code></td>
   <td>byte[value_size]</td>
   <td>difference between existing value and new value <br/><b>Note:</b> when there is no existing value, new value is same this value <br/><b>Note:</b> when there is an existing value, new value is calculated as xor(previous-value, value)</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#namespace-metadata-transaction" title="binary layout for a non-embedded namespace metadata transaction">NamespaceMetadataTransaction</a>, <a href="#embedded-namespace-metadata-transaction" title="binary layout for an embedded namespace metadata transaction">EmbeddedNamespaceMetadataTransaction</a>
   </tr></td>

   </tbody></table>

.. _mosaic-definition-transaction-body:

MosaicDefinitionTransactionBody
===============================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 22 bytes = 0x16</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_definition.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicDefinitionTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   binary layout for a mosaic definition transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">id</code></td>
   <td><a href="#mosaic-id" title="">MosaicId</a></td>
   <td>mosaic identifier</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#block-duration" title="">BlockDuration</a></td>
   <td>mosaic duration</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">nonce</code></td>
   <td><a href="#mosaic-nonce" title="">MosaicNonce</a></td>
   <td>mosaic nonce</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">flags</code></td>
   <td><a href="#mosaic-flags" title="enumeration of mosaic property flags">MosaicFlags</a></td>
   <td>mosaic flags</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">divisibility</code></td>
   <td>byte[1]</td>
   <td>mosaic divisibility</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#mosaic-definition-transaction" title="binary layout for a non-embedded mosaic definition transaction">MosaicDefinitionTransaction</a>, <a href="#embedded-mosaic-definition-transaction" title="binary layout for an embedded mosaic definition transaction">EmbeddedMosaicDefinitionTransaction</a>
   </tr></td>

   </tbody></table>

.. _mosaic-supply-change-transaction-body:

MosaicSupplyChangeTransactionBody
=================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 17 bytes = 0x11</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/mosaic/mosaic_supply_change.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/mosaic/src/model/MosaicSupplyChangeTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   binary layout for a mosaic supply change transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>affected mosaic identifier</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">delta</code></td>
   <td><a href="#amount" title="">Amount</a></td>
   <td>change amount</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">action</code></td>
   <td><a href="#mosaic-supply-change-action" title="enumeration of mosaic supply change actions">MosaicSupplyChangeAction</a></td>
   <td>supply change action</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#mosaic-supply-change-transaction" title="binary layout for a non-embedded mosaic supply change transaction">MosaicSupplyChangeTransaction</a>, <a href="#embedded-mosaic-supply-change-transaction" title="binary layout for an embedded mosaic supply change transaction">EmbeddedMosaicSupplyChangeTransaction</a>
   </tr></td>

   </tbody></table>

.. _multisig-account-modification-transaction-body:

MultisigAccountModificationTransactionBody
==========================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8+ bytes = 0x8+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/multisig/multisig_account_modification.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/multisig/src/model/MultisigAccountModificationTransaction.h#L33">catapult model</a></td></tr>
       </table></div>
   binary layout for a multisig account modification transaction
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
   <td>relative change of the minimal number of cosignatories required when removing an account</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">min_approval_delta</code></td>
   <td>byte[1]</td>
   <td>relative change of the minimal number of cosignatories required when approving a transaction</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_additions_count</code></td>
   <td>byte[1]</td>
   <td>number of cosignatory address additions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_deletions_count</code></td>
   <td>byte[1]</td>
   <td>number of cosignatory address deletions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">multisig_&ZeroWidthSpace;account_&ZeroWidthSpace;modification_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align addressAdditions on 8-byte boundary</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_additions</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a>&ZeroWidthSpace;[address_additions_count]</td>
   <td>cosignatory address additions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address_deletions</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a>&ZeroWidthSpace;[address_deletions_count]</td>
   <td>cosignatory address deletions</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#multisig-account-modification-transaction" title="binary layout for a non-embedded multisig account modification transaction">MultisigAccountModificationTransaction</a>, <a href="#embedded-multisig-account-modification-transaction" title="binary layout for an embedded multisig account modification transaction">EmbeddedMultisigAccountModificationTransaction</a>
   </tr></td>

   </tbody></table>

.. _address-alias-transaction-body:

AddressAliasTransactionBody
===========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 33 bytes = 0x21</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/address_alias.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/AddressAliasTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   binary layout for an address alias transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">namespace_id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>identifier of the namespace that will become an alias</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">address</code></td>
   <td><a href="#address" title="">Address</a></td>
   <td>aliased address</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">alias_action</code></td>
   <td><a href="#alias-action" title="enumeration of alias actions">AliasAction</a></td>
   <td>alias action</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#address-alias-transaction" title="binary layout for a non-embedded address alias transaction">AddressAliasTransaction</a>, <a href="#embedded-address-alias-transaction" title="binary layout for an embedded address alias transaction">EmbeddedAddressAliasTransaction</a>
   </tr></td>

   </tbody></table>

.. _mosaic-alias-transaction-body:

MosaicAliasTransactionBody
==========================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 17 bytes = 0x11</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/mosaic_alias.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/MosaicAliasTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   binary layout for an mosaic alias transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">namespace_id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>identifier of the namespace that will become an alias</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#mosaic-id" title="">MosaicId</a></td>
   <td>aliased mosaic identifier</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">alias_action</code></td>
   <td><a href="#alias-action" title="enumeration of alias actions">AliasAction</a></td>
   <td>alias action</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#mosaic-alias-transaction" title="binary layout for a non-embedded mosaic alias transaction">MosaicAliasTransaction</a>, <a href="#embedded-mosaic-alias-transaction" title="binary layout for an embedded mosaic alias transaction">EmbeddedMosaicAliasTransaction</a>
   </tr></td>

   </tbody></table>

.. _namespace-registration-transaction-body:

NamespaceRegistrationTransactionBody
====================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 26+ bytes = 0x1a+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/namespace/namespace_registration.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/namespace/src/model/NamespaceRegistrationTransaction.h#L34">catapult model</a></td></tr>
       </table></div>
   binary layout for a namespace registration transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">duration</code></td>
   <td><a href="#block-duration" title="">BlockDuration</a></td>
   <td>namespace duration</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">parent_id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>parent namespace identifier</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">id</code></td>
   <td><a href="#namespace-id" title="">NamespaceId</a></td>
   <td>namespace identifier</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">registration_type</code></td>
   <td><a href="#namespace-registration-type" title="enumeration of namespace registration types">NamespaceRegistrationType</a></td>
   <td>namespace registration type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">name_size</code></td>
   <td>byte[1]</td>
   <td>namespace name size</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">name</code></td>
   <td>byte[name_size]</td>
   <td>namespace name</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#namespace-registration-transaction" title="binary layout for a non-embedded namespace registration transaction">NamespaceRegistrationTransaction</a>, <a href="#embedded-namespace-registration-transaction" title="binary layout for an embedded namespace registration transaction">EmbeddedNamespaceRegistrationTransaction</a>
   </tr></td>

   </tbody></table>

.. _account-address-restriction-transaction-body:

AccountAddressRestrictionTransactionBody
========================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8+ bytes = 0x8+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_address_restriction.cats#L5">schema</a></td></tr>
       </table></div>
   binary layout for an account address restriction transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#account-restriction-flags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td>account restriction flags</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction additions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction deletions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align restrictionAdditions on 8-byte boundary</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td>account restriction additions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td>account restriction deletions</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#account-address-restriction-transaction" title="binary layout for a non-embedded account address restriction transaction">AccountAddressRestrictionTransaction</a>, <a href="#embedded-account-address-restriction-transaction" title="binary layout for an embedded account address restriction transaction">EmbeddedAccountAddressRestrictionTransaction</a>
   </tr></td>

   </tbody></table>

.. _account-mosaic-restriction-transaction-body:

AccountMosaicRestrictionTransactionBody
=======================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8+ bytes = 0x8+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_mosaic_restriction.cats#L5">schema</a></td></tr>
       </table></div>
   binary layout for an account mosaic restriction transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#account-restriction-flags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td>account restriction flags</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction additions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction deletions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align restrictionAdditions on 8-byte boundary</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td>account restriction additions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td>account restriction deletions</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#account-mosaic-restriction-transaction" title="binary layout for a non-embedded account mosaic restriction transaction">AccountMosaicRestrictionTransaction</a>, <a href="#embedded-account-mosaic-restriction-transaction" title="binary layout for an embedded account mosaic restriction transaction">EmbeddedAccountMosaicRestrictionTransaction</a>
   </tr></td>

   </tbody></table>

.. _account-operation-restriction-transaction-body:

AccountOperationRestrictionTransactionBody
==========================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 8+ bytes = 0x8+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_account/account_operation_restriction.cats#L5">schema</a></td></tr>
       </table></div>
   binary layout for an account operation restriction transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_flags</code></td>
   <td><a href="#account-restriction-flags" title="enumeration of account restriction flags">AccountRestrictionFlags</a></td>
   <td>account restriction flags</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction additions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions_count</code></td>
   <td>byte[1]</td>
   <td>number of account restriction deletions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">account_&ZeroWidthSpace;restriction_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align restrictionAdditions on 8-byte boundary</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_additions</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a>&ZeroWidthSpace;[restriction_additions_count]</td>
   <td>account restriction additions</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_deletions</code></td>
   <td><a href="#transaction-type" title="enumeration of transaction types">TransactionType</a>&ZeroWidthSpace;[restriction_deletions_count]</td>
   <td>account restriction deletions</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#account-operation-restriction-transaction" title="binary layout for a non-embedded account operation restriction transaction">AccountOperationRestrictionTransaction</a>, <a href="#embedded-account-operation-restriction-transaction" title="binary layout for an embedded account operation restriction transaction">EmbeddedAccountOperationRestrictionTransaction</a>
   </tr></td>

   </tbody></table>

.. _mosaic-address-restriction-transaction-body:

MosaicAddressRestrictionTransactionBody
=======================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 56 bytes = 0x38</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_mosaic/mosaic_address_restriction.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/model/MosaicAddressRestrictionTransaction.h#L32">catapult model</a></td></tr>
       </table></div>
   binary layout for a mosaic address restriction transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>identifier of the mosaic to which the restriction applies</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_key</code></td>
   <td>byte[8]</td>
   <td>restriction key</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_value</code></td>
   <td>byte[8]</td>
   <td>previous restriction value</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_value</code></td>
   <td>byte[8]</td>
   <td>new restriction value</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">target_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>address being restricted</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#mosaic-address-restriction-transaction" title="binary layout for a non-embedded mosaic address restriction transaction">MosaicAddressRestrictionTransaction</a>, <a href="#embedded-mosaic-address-restriction-transaction" title="binary layout for an embedded mosaic address restriction transaction">EmbeddedMosaicAddressRestrictionTransaction</a>
   </tr></td>

   </tbody></table>

.. _mosaic-global-restriction-transaction-body:

MosaicGlobalRestrictionTransactionBody
======================================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 42 bytes = 0x2a</td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/restriction_mosaic/mosaic_global_restriction.cats#L5">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/restriction_mosaic/src/model/MosaicGlobalRestrictionTransaction.h#L33">catapult model</a></td></tr>
       </table></div>
   binary layout for a mosaic global restriction transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>identifier of the mosaic being restricted</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">reference_mosaic_id</code></td>
   <td><a href="#unresolved-mosaic-id" title="">UnresolvedMosaicId</a></td>
   <td>identifier of the mosaic providing the restriction key</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">restriction_key</code></td>
   <td>byte[8]</td>
   <td>restriction key relative to the reference mosaic identifier</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_value</code></td>
   <td>byte[8]</td>
   <td>previous restriction value</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_value</code></td>
   <td>byte[8]</td>
   <td>new restriction value</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">previous_restriction_type</code></td>
   <td><a href="#mosaic-restriction-type" title="enumeration of mosaic restriction types">MosaicRestrictionType</a></td>
   <td>previous restriction type</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">new_restriction_type</code></td>
   <td><a href="#mosaic-restriction-type" title="enumeration of mosaic restriction types">MosaicRestrictionType</a></td>
   <td>new restriction type</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#mosaic-global-restriction-transaction" title="binary layout for a non-embedded mosaic global restriction transaction">MosaicGlobalRestrictionTransaction</a>, <a href="#embedded-mosaic-global-restriction-transaction" title="binary layout for an embedded mosaic global restriction transaction">EmbeddedMosaicGlobalRestrictionTransaction</a>
   </tr></td>

   </tbody></table>

.. _transfer-transaction-body:

TransferTransactionBody
=======================

.. raw:: html

   <table style="width: 100%;"><tr><td>
       <div class="side-info"><table>
       <tr><td class="side-info-icon">&varr;</td><td>Size: 32+ bytes = 0x20+ <i>(variable)</i></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/transfer/transfer.cats#L4">schema</a></td></tr>
       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td><td><a href="https://github.com/symbol/catapult-client/blob/main/plugins/txes/transfer/src/model/TransferTransaction.h#L33">catapult model</a></td></tr>
       </table></div>
   binary layout for a transfer transaction
   </td></tr></table>

.. raw:: html

   <table class="big-table"><tbody>
   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">recipient_address</code></td>
   <td><a href="#unresolved-address" title="">UnresolvedAddress</a></td>
   <td>recipient address</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">message_size</code></td>
   <td>byte[2]</td>
   <td>size of attached message</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaics_count</code></td>
   <td>byte[1]</td>
   <td>number of attached mosaics</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transfer_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;1</code></td>
   <td>byte[4]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align mosaics on 8-byte boundary</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">transfer_&ZeroWidthSpace;transaction_&ZeroWidthSpace;body_&ZeroWidthSpace;reserved_&ZeroWidthSpace;2</code></td>
   <td>byte[1]</td>
   <td><b>reserved</b> <code class="docutils literal">0</code><br/>reserved padding to align mosaics on 8-byte boundary</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">mosaics</code></td>
   <td><a href="#unresolved-mosaic" title="binary layout for an unresolved mosaic">UnresolvedMosaic</a>&ZeroWidthSpace;[mosaics_count]</td>
   <td>attached mosaics</td>
   </tr>
   <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td><code class="docutils literal">message</code></td>
   <td>byte[message_size]</td>
   <td>attached message</td>
   </tr>
   <tr><td colspan="6"><br/>Included in: 
   <a href="#transfer-transaction" title="binary layout for a non-embedded transfer transaction">TransferTransaction</a>, <a href="#embedded-transfer-transaction" title="binary layout for an embedded transfer transaction">EmbeddedTransferTransaction</a>
   </tr></td>

   </tbody></table>

