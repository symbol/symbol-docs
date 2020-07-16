:orphan:

#################
Hash Lock Schemas
#################

.. note:: The `catbuffer schemas <https://github.com/nemtech/catbuffer>`_ repository defines how each transaction type should be serialized. In combination with the `catbuffer-generators <https://github.com/nemtech/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages. 

*********
Aggregate
*********

.. _aggregate:

AggregateTransaction
====================

Announce an AggregateTransaction to combine multiple transactions together.

**Version**: 0x01

**EntityType**: 0x4141 (:ref:`complete<aggregate-complete>`), 0x4241 (:ref:`bonded<aggregate-bonded>`)

**Inlines**:

:ref:`Transaction <transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    transactionsHash; :schema:`Hash256 <types.cats>`; Aggregate hash of the aggregate transaction.
    payloadSize; uint32; Transaction payload size in bytes. In other words, the total number of bytes occupied by all inner transactions.
    aggregateTransactionHeader_Reserved1; uint32; Reserved padding to align end of AggregateTransactionHeader on 8-byte boundary.
    transactions; array(:ref:`Transaction <transaction>`, size=payloadSize); Array of inner transactions. Other aggregate transactions are not allowed as inner transactions.
    cosignatures; array(:ref:`Cosignature <cosignature>`, __FILL__); Array of transaction :ref:`cosignatures <cosignature>`. Fills the remaining body space after transactions.

***********
Cosignature
***********

.. _cosignature-transaction:

DetachedCosignature
===================

Cosignature transactions are used to sign :ref:`announced AggregateBondedTransactions <aggregate-transaction>` with missing cosignatures.

**Inlines**:

* :ref:`Cosignature <cosignature-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    parentHash; :schema:`Hash256 <types.cats>`;  AggregateBondedTransaction hash to cosign.

.. _cosignature:

Cosignature
===========

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    version; uint64; Version of the structure.
    signerPublicKey; :schema:`Key <types.cats>`; Cosigner public key.
    signature; :schema:`Signature <types.cats>`; Transaction signature.
