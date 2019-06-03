:orphan:

###############################
Generating transaction builders
###############################

Learn how to generate transaction builders for your target SDK language.

**********
Background
**********

The `catbuffer library <https://github.com/nemtech/catbuffer>`_ defines the protocol to serialize and deserialize Catapult entities. The library comes with code generators for different languages. SDKs and applications use the generated code to interact with REST transaction endpoint.

.. figure:: ../resources/images/diagrams/catbuffer.png
    :width: 450px
    :align: center

    NEM2-SDK serialization module

The library accomplishes the following properties:

**Memory Efficiency**

Large networks compute a large number of transactions. Working with binary optimized in size makes the communication faster. Furthermore, reading entities from memory buffers -or just a part of them - is memory efficient.

**Flexibility**

REST `transaction endpoints <https://nemtech.github.io/endpoints.html#operation/announceTransaction>`_ handle the calls to update the blockchain state. The serialized payload of a transaction is appended to the body of the POST call. These endpoints allow the addition of new functionality to the server side without modifying the API contract.

**Reusability**

Applications can embed the generated code, without managing dependencies. This is particularly desirable in highly-secure environments. Besides, sharing a common codebase enables the addition of new features with less effort.

The `schemas define <https://github.com/nemtech/catbuffer/tree/master/schemas>`_ the entities data structure. The library generates the leanest code necessary to serialize and deserialize defined entities.

************
Instructions
************

1. Clone the catbuffer repository.

.. code-block:: bash

    git clone https://github.com/nemtech/catbuffer.git

2. Generate the code for a determined schema in one of the available languages. For example, run the following command to generate C++ transaction builders for a transfer transaction:

.. code-block:: bash

    python main.py --schema schemas/transfer/transfer.cats --generator cpp_builder

The generator creates a new file under ``_generated/cpp_builder`` folder. Repeat the process using a different input schema ``(-s)`` or generator ``(-g)`` as needed.
