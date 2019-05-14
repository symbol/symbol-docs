#####################
Transfer Transaction
#####################

Transfer transactions are used to send :doc:`mosaics <mosaic>` between two :doc:`accounts <account>`. They can hold a messages of length ``1023`` characters.

.. figure:: ../resources/images/examples/transfer-transaction.png
    :align: center
    :width: 450px

    Alice sends 10 cat.currency to Bob

.. note:: It is possible to send mosaics to any valid address even if the address has not previously participated in any transaction. If nobody owns the private key of the recipient's account, the funds are most likely lost forever.

******
Guides
******

.. postlist::
    :category: Transfer Transaction
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

*******
Schemas
*******

.. note:: Configuration parameters are `editable <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_ . Public network configuration may differ.

.. _transfer-transaction:

TransferTransaction
===================

Announce a transfer transaction to send :doc:`mosaics <mosaic>` or messages between two :doc:`accounts <account>`.

**Version**: 0x03

**Entity type**: 0x4154

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    recipient; 25 bytes (binary); The address of the recipient account.
    messageSize; uint16; The size of the attached message.
    mosaicsCount; uint8; The number of attached mosaics.
    message; array<byte, messageSize>; The message type (0) and a payload of up to ``1023`` bytes.
    mosaics; array<:ref:`UnresolvedMosaic<unresolved-mosaic>`, mosaicsCount>; The different mosaic to be sent.
