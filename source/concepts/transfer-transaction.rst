####################
Transfer Transaction
####################

Transfer transactions are used to send :doc:`mosaics <mosaic>` and messages between two :doc:`accounts <account>`.

.. figure:: ../resources/images/examples/transfer-transaction.png
    :align: center
    :width: 450px

    Alice sends 10 cat.currency to Bob

*********
Recipient
*********

The recipient is the address of the :doc:`account <account>` that receives the transfer transaction.

It is possible to send mosaics to any valid address, even if the address has not previously participated in any transaction.

.. note:: If nobody owns the private key of the recipient's account, the funds are most likely lost forever.

*******
Mosaics
*******

A :doc:`mosaic <mosaic>` could be a token, but it could also be more specialized assets such as reward points, shares of stock, signatures, status flags, votes or even other currencies.

You can send a combination of different mosaics in the same transaction.

*******
Message
*******

A transfer transaction can hold a message up to ``1023`` characters in length, making them suitable for timestamping data permanently on the blockchain.

The messages attached are visible by default to all network participants.

Encrypted message
=================

Encrypted messages are only accessible by the sender and the recipient.

NEM uses Bouncy Castle's AES block cipher implementation in `CBC mode <https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#CBC>`_ to encrypt and decrypt messages.

The client-side handles the encryption and decryption of the message. You can find under the ``crypto`` module how to `encode <https://github.com/nemtech/nem2-library-js/blob/master/src/crypto/crypto.js#L255>`_ and `decode <https://github.com/nemtech/nem2-library-js/blob/master/src/crypto/crypto.js#L287>`_ encrypted messages, but we recommend you to use the available `SDK public methods <https://nemtech.github.io/nem2-sdk-typescript-javascript/classes/_model_account_account_.account.html#decryptmessage>`_ instead.

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

.. note:: Configuration parameters are :properties:`editable <config-network.properties>`. Public network configuration may differ.

.. _transfer-transaction:

TransferTransaction
===================

Announce a transfer transaction to send :doc:`mosaics <mosaic>` or messages between two :doc:`accounts <account>`.

**Version**: 0x01

**Entity type**: 0x4154

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    recipient; :schema:`UnresolvedAddress <types.cats#L7>`; Address of the recipient.
    messageSize; uint16; Size of the attached message.
    mosaicsCount; uint8; Number of attached mosaics.
    message; array(byte, messageSize); :ref:`Message type <message-type>` and a payload of up to ``1023`` bytes.
    mosaics; array(:ref:`UnresolvedMosaic <unresolved-mosaic>`, mosaicsCount); Array of mosaics to send.

.. _message-type:

MessageType
===========

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x00; Plain message.
    0x01; Encrypted message.
