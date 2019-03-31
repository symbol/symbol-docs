:orphan:

################
Writing a Schema
################

Are you writing a new catapult plugin that includes a new transaction type?

In this guide, we are examining how the `transfer.cats <https://github.com/nemtech/catbuffer/blob/master/schemas/transfer/transfer.cats>`_ schema works. You can adapt the same steps to define a new schema.

1. Create a new file under ``schemas`` folder and define a struct for the transaction body.

Think of a struct as a set of properties that we want to store in the same block of memory.

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

2. Define a second transaction struct in the same file. This will contain information about the version of the entity and its identifier. The underlying transaction properties and the particular transaction body are appended as inlines.

.. code-block:: python

    # binary layout for a non-embedded transfer transaction
    struct TransferTransaction
        const uint8 version = 3
        const EntityType entityType = 0x4154

        inline Transaction
        inline TransferTransactionBody


3. Define an EmbeddedTransaction struct. This struct is used to serialize inner transactions. The embedded transaction and the body transaction are added as inlines.

.. code-block:: python

    # binary layout for an embedded transaction
    struct EmbeddedTransaction
        inline SizePrefixedEntity
        inline EntityBody
