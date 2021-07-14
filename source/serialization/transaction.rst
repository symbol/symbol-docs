###################
Transaction Schemas
###################

.. note:: The `catbuffer schemas <https://github.com/symbol/catbuffer-schemas>`_ repository defines how each transaction type should be serialized. In combination with the `catbuffer-generators <https://github.com/symbol/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages. 

***********
Transaction
***********

.. _transaction:

Transaction
===========

Serialization of a transaction.

**Inlines**:

* :ref:`SizePrefixedEntity <size-prefixed-entity>`
* :ref:`VerifiableEntity <verifiable-entity>`
* :ref:`EntityBody <entity-body>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    max_fee; :schema:`Amount <types.cats>`; Maximum fee allowed to spend for the transaction.
    deadline; :schema:`Timestamp <types.cats>`;  Number of milliseconds elapsed since the creation of the nemesis block. If a transaction does not get included in a block before the deadline is reached, it is deleted. Deadlines are only allowed to lie up to ``24`` hours ahead.

.. _embedded-transaction-header:

EmbeddedTransactionHeader
=========================

Binary layout for an embedded transaction header.

**Inlines**:

* :ref:`SizePrefixedEntity <size-prefixed-entity>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    embeddedTransactionHeader_Reserved1; uint32; Reserved padding to align end of EmbeddedTransactionHeader on 8-byte boundary.

.. _embedded-transaction:

EmbeddedTransaction
===================

Serialization of an :doc:`aggregate <../concepts/aggregate-transaction>` inner transaction.

**Inlines**:

* :ref:`EmbeddedTransactionHeader <embedded-transaction-header>`
* :ref:`EntityBody <entity-body>`
