#############
Serialization
#############

`Catbuffer library <https://github.com/nemtech/catbuffer>`_ defines the protocol to serialize and deserialize Catapult entities. The library comes with code generators for different languages. SDKs and applications use the generated code to interact with REST transaction endpoint.

.. figure:: ../resources/images/diagrams/catbuffer.png
    :width: 450px
    :align: center

    NEM2-SDK serialization module


The library accomplishes the following properties:

**Memory Efficiency**

Large networks compute a large number of transactions. Working with binary optimized in size makes the communication faster. Furthermore, reading entities from memory buffers -or just a part of them - is memory efficient.

**Flexibility**

REST `transaction endpoints <https://nemtech.github.io/api/endpoints.html#operation/announceTransaction>`_ handle the calls to update the blockchain state. The serialized payload of a transaction is appended to the body of the POST call. These endpoints allow the addition of new functionality to the server side without modifying the API contract.

**Reusability**

Applications can embed the generated code, without managing dependencies. This is particularly desirable in highly-secure environments. Besides, sharing a common codebase enables the addition of new features with less effort.

At the current moment, you can generate buffers for **C++**. Javascript and Python are under development. If you are developing an SDK in another language, please consider coding a new generator.

******
Schema
******

The `schemas define <https://github.com/nemtech/catbuffer/tree/master/schemas>`_ the entities data structure. The library generates the leanest code necessary to serialize and deserialize defined entities.

Generating transactions builders
================================

Generate the code for a determined schema in one of the available languages. For example, run the following command to generate C++ transaction builders for a transfer transaction:

.. code-block:: bash

    $> python main.py --schema schemas/transfer/transfer.cats --generator cpp_builder

The generator creates a new file under ``_generated/cpp_builder`` folder. Repeat the process using a different input schema ``(-s)`` or generator ``(-g)`` as needed.

Writing a schema
================

Are you writing a new catapult plugin that includes a new transaction type?

In this example, we are examining how the `transfer.cats <https://github.com/nemtech/catbuffer/blob/master/schemas/transfer.cats>`_ schema works. You can adapt the same steps to define a new schema.

First off, create a new file under ``schemas`` folder and define a struct for the transaction body. Think of a struct as a set of properties that we want to store in the same block of memory.

The transaction body contains the extra properties which differ from a basic transaction. Each attribute can have one of the types defined in `types.cats <https://github.com/nemtech/catbuffer/blob/master/schemas/types.cats>`_.

.. code-block:: python

    # binary layout for a transfer transaction
    struct TransferTransactionBody
        # transaction recipient
        recipient = UnresolvedAddress
        # size of attached message
        messageSize = uint16
        # number of attached mosaics
        mosaicsCount = uint8
        # transaction message
        message = array(byte, messageSize)
        # attached mosaics
        mosaics = array(UnresolvedMosaic, mosaicsCount, sort_key=mosaicId)

Secondly, define a second transaction struct in the same file. This will contain information about the version of the entity and its identifier. The underlying transaction properties and the particular transaction body are appended as inlines.

.. code-block:: python

    # binary layout for a non-embedded transfer transaction
    struct TransferTransaction
        const uint8 version = 3
        const EntityType entityType = 0x4154

        inline Transaction
        inline TransferTransactionBody


Finally, define an EmbeddedTransaction struct. This struct is used to serialize inner transactions. The embedded transaction and the body transaction are added as inlines.

.. code-block:: python

    # binary layout for an embedded transaction
    struct EmbeddedTransaction
        inline SizePrefixedEntity
        inline EntityBody

***********
Integration
***********

Adding generated code to an SDK
===============================

After compiling all the schemas for a selected language, move the generated files to your ``model/transaction`` SDK folder.

.. note:: This section is incomplete. More information will be published once the NEM2-SDK is updated.
