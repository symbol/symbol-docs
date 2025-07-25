################
Writing a Schema
################

Are you writing a new catapult plugin that includes a new transaction type?

In this guide, we examine how the `transfer.cats <https://github.com/symbol/blob/main/catbuffer/schemas/symbol/transfer/transfer.cats>`_ was constructed.
You can adapt the same steps to define a new schema.

************
Instructions
************

1. Clone the catbuffer-schemas repository.

   .. code-block:: bash

      git clone https://github.com/symbol/symbol.git

2. Create a new file under the ``catbuffer/schemas`` folder. In our case, we have named the file ``transfer.cats``.

3. Define the struct for the transaction body.

   Think of a struct as a set of properties that we want to store in the same block of memory.

   The transaction body contains the extra properties which differ from a basic transaction.
   Each attribute can have one of the types defined in `types.cats <https://github.com/symbol/blob/main/catbuffer/schemas/symbol/types.cats>`_.

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

4. Define a second transaction struct in the same file.

   This will contain information about the version of the entity and its identifier.
   The underlying transaction properties and the particular transaction body are appended as inlines.

   .. code-block:: python

      # binary layout for a non-embedded transfer transaction
      struct TransferTransaction
          const uint8 version = 3
          const EntityType entityType = 0x4154

          inline Transaction
          inline TransferTransactionBody


5. Define an ``EmbeddedTransaction`` struct to serialize the inner transactions within an aggregate.

   The embedded transaction and the body transaction are added as inlines.

   .. code-block:: python

      # binary layout for an embedded transaction
      struct EmbeddedTransaction
          inline SizePrefixedEntity
          inline EntityBody


6. The catbuffer library allows you to generate the transaction builders from the schema we have defined.

   For example, run the following command to generate C++ code:

   .. code-block:: bash

      python main.py --schema symbol/transfer/transfer.cats --generator cpp_builder

   The generator creates the transaction builders file under the ``_generated/cpp_builder`` folder.
