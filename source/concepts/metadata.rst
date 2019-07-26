########
Metadata
########

Catapult provides you with an option to associate metadata to an :doc:`account <account>`, :doc:`mosaic <mosaic>` or :doc:`namespace <namespace>` with a transaction.

The most common uses of metadata are:

* Attach relevant information to your assets.
* Validate the value attached to an asset to enable users in your application to perform an off-chain action.

Metadata is uniquely **identified** by the tuple ``{ signer, target-id, metadata-key }``.
Including a signer in this composite identifier allows multiple accounts to specify the same metadata without conflict.

The **value** linked to an identifier is a string up to ``1024`` characters.
The client application is responsible for encrypting the message or keeping it visible for every blockchain participant.

***********
Persistence
***********

Metadata entries are stored in the blockchain - like a regular transfer transaction - but also as a **key-value state**.

This feature reduces the reading time of client applications; metadata allows information to be accessed by keys instead of processing the entire account transaction history off-chain to obtain the latest transaction message value.

***********
Permissions
***********

The account, namespace or mosaic owner must **opt-in** to all metadata requests received by giving explicit permission. In practice, this means that all metadata transactions must be wrapped in an aggregate transaction.

The target account should cosign the aggregate to record the metadata on the blockchain and update the asset state.

********
Examples
********

To do.

*******
Schemas
*******

.. note:: Configuration parameters are :properties:`editable <config-network.properties>`. Public network configuration may differ.

.. _account-metadata-transaction:

AccountMetadataTransaction
==========================

Announce an account metadata transaction to associate a key-value state to an account.

**Version**: 0x01

**Entity type**: 0x4144

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    targetPublicKey; :schema:`Key <types.cats#L11>` ; Public key of the target account.
    scopedMetadataKey; uint64; Metadata key scoped to source, target and type.
    valueSizeDelta; int16; Change in value size in bytes.
    valueSize; uint16; Value size in bytes. The maximum size is ``1024``.
    value; array(byte, valueSize); Value data.

.. _mosaic-metadata-transaction:

MosaicMetadataTransaction
=========================

Announce a mosaic metadata transaction to associate a key-value state to a mosaic.

**Version**: 0x01

**Entity type**:  0x4244

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    targetPublicKey; :schema:`Key <types.cats#L11>` ; Public key of the target mosaic owner.
    scopedMetadataKey; uint64; Metadata key scoped to source, target and type.
    targetId; :schema:`UnresolvedMosaicId <types.cats#L3>`; Target mosaic identifier.
    valueSizeDelta; int16; Change in value size in bytes.
    valueSize; uint16; Value size in bytes. The maximum size is ``1024``.
    value; array(byte, valueSize); Value data.

.. _namespace-metadata-transaction:

NamespaceMetadataTransaction
============================

Announce a namespace metadata transaction to associate a key-value state to a namespace.

**Version**: 0x01

**Entity type**:  0x4344

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    targetPublicKey; :schema:`Key <types.cats#L11>` ; Public key of the target namespace owner.
    scopedMetadataKey; uint64; Metadata key scoped to source, target and type.
    targetId; :schema:`NamespaceId <namespace/namespace_types.cats#L1>`; Target namespace identifier.
    valueSizeDelta; int16; Change in value size in bytes.
    valueSize; uint16; Value size in bytes. The maximum size is ``1024``.
    value; array(byte, valueSize); Value data.
