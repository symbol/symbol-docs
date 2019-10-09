:orphan:

.. post:: 08 Oct, 2019
    :category: Metadata
    :excerpt: 1
    :nocomments:

#########################
Updating metadata entries
#########################

Update any existent metadata entry.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`
- Finish :doc:`creating a mosaic guide <../mosaic/creating-a-mosaic>`

**********
Background
**********

:doc:`Metadata <../../concepts/metadata>`  transactions are stored on the blockchain. Once a transaction is included in a block—and the block receives enough confirmations— it is not possible to modify the record without invalidating the whole chain.

What we can do to update a metadata entry is to announce a second metadata transaction. This action will generate a new record while keeping the history immutable. However, how can we retrieve the latest metadata value assigned to an asset without querying the whole chain? Catapult makes this possible by keeping a copy of the **newest value** assigned to a metadata entry as a **state**.

In this example, we are going to **update a metadata entry** attached to an account. However, you could follow a similar approach to update namespace and mosaic metadata entries.

**********************
Getting into some code
**********************

Bob—the notary from the :doc:`assigning metadata entries to an account guide<assigning-metadata-entries-to-an-account>`— is requested to remove Alice's account ``CERT`` metadata entry because the certificate has expired.

1. Define a new **AccountMetadataTransaction** referencing Alice's public account and the key ``CERT``. Bob decides to add an empty string to indicate that the certificate has expired.

:ref:`Blockchains can rollback <rollbacks>` up to a certain pre-established depth to resolve forks. For this reason, we need to pass the **previous metadata entry value** in case the state needs to be reverted.

A) One option is to retrieve the previous metadata value, apply a **xor filter** with the newest value, and add the resulting string to the AccountMetadataTransaction's ``value`` property.

[code]

B) You can achieve the same result with less effort using the ``MetadataService``. Behind the scenes, the **NEM2-SDK** handles the complexity to update metadata entries.

[code]

2. To avoid spamming the account with invalid metadata, all metadata is attached only with the consent of the account owner through Aggregate Transactions. Thus, Alice will have to **opt-in** if she wants the metadata to be updated. Wrap the **AccountMetadataTransaction** inside an :ref:`AggregateBondedTransaction <aggregate-bonded>` and sign the transaction using Bob's account.

[code]

3. Before sending an aggregate transaction to the network, Bob has to lock  ``10 cat.currency``. Define a new :ref:`HashLockTransaction <hash-lock-transaction>` and sign it with Bob's account, locking the amount of cat.currency required to announce the aggregate transaction.

[code]

.. note:: Bob will receive the locked funds back if Alice cosigns the aggregate during the next ``480`` blocks.

4. Announce the **HashLockTransaction**. Monitor the network until the transaction gets confirmed, and then announce the **AggregateTransaction** containing the AccountMetadataTransaction.

[code]

5. Once the transaction gets confirmed, cosign the hash obtained in the third  step using Alice's profile.

.. code-block:: bash

    nem2-cli transaction cosign --hash <transaction-hash> --profile alice

6. Retrieve the metadata entries assigned to Alice's account following :doc:`the next guide <getting-metadata-entries-attached-to-an-account>`.
