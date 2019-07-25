:orphan:

#############################################################
Getting the asset identifier behind a namespace with receipts
#############################################################

.. post:: 11 Jul, 2019
    :category: Receipt, Mosaic
    :excerpt: 1
    :nocomments:

Get the resolution for a given alias and transaction using receipts.

**********
Background
**********

In Catapult, accounts can link their registered namespaces to other accounts or mosaics by announcing an :ref:`alias transaction <mosaic-alias-transaction>`. This feature allows you to replace long and complex identifiers with short and familiar names for your accounts and mosaics.

Imagine a ticket vendor sending tickets to their customers on the NEM blockchain. The company needs to send ``1 0dc67fbe1cad29e3`` to ``SCVG35-ZSPMYP-L2POZQ-JGSVEG-RYOJ3V-BNIU3U-N2E6``. With aliases, it can define the same transaction as sending ``1 ticketsales.event1.ticket`` to ``@alice`` instead.

.. figure:: ../../resources/images/examples/namespace-tickets.png
    :align: center
    :width: 500px

    Recognizable mosaics and addresses

To ensure the transactions are being sent to the correct place with the correct mosaic, you can directly query the network about the current mosaic identifier behind a namespace by running the following snippet:

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/blockchain/GettingTheCurrentMosaicIdentifierBehindANamespace.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

However, the same method cannot be used to verify transactions of the past. This is due to the facts that:

* Transactions using aliased mosaics or accounts are stored in the blockchain using the namespace identifier, not the real address or mosaic id behind it.
* Links are editable. The namespace owner can link its namespace to another asset.
* Namespaces expire. The namespace link could be deleted.

At this point, you might be wondering: how then can we get the accurate relation between a namespace and its real identifier for a past transaction? The answer lies with :doc:`receipts <../../concepts/receipt>`. For each block, Catapult nodes store receipts that contain every invisible state change that cannot be retrieved directly from the transaction or block header.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

**********************
Getting into some code
**********************

In this example, we are going to announce a transfer transaction using ``cat.currency`` instead of the native currency mosaic id. Once the network confirms the transaction, we will get the block height where the transaction has been recorded. With this information, we will then get the namespace-mosaic relation by looking into the block receipts’.

1. Define the mosaic you want to send. Use a linked namespace identifier (e.g. cat.currency) instead of the mosaic identifier.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/blockchain/GettingTheMosaicIdentifierBehindANamespaceWithReceipts.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Attach the mosaic to a transfer transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/blockchain/GettingTheMosaicIdentifierBehindANamespaceWithReceipts.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Announce the transfer transaction, and wait until it is confirmed.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/blockchain/GettingTheMosaicIdentifierBehindANamespaceWithReceipts.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

4. Then, retrieve the receipts attached to the block where the receipt was confirmed. The RxJs filters will look for the namespace resolution inside the mosaicResolutionStatements collection.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/blockchain/GettingTheMosaicIdentifierBehindANamespaceWithReceipts.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

The previous snippet outputs the resolved mosaic identifier for the namespace ``cat.currency`` and the transaction you have just sent.

.. code-block:: bash

    Resolved MosaicId:  0dc67fbe1cad29e3
    PrimaryId:  1
    SecondaryId:  0

It is technically possible to get more than one ``resolutionEntry`` for the same namespaceId. This situation is common when a namespace owner changes the link to another mosaic, leading to two different resolutions in the same block.

The receipt source ``primaryId`` references the transaction where the alias first appears within the block. The ``secondaryId`` is a non 0 when the transaction is part of an :doc:`aggregate transaction <../../concepts/aggregate-transaction>`, and it will indicate the index position within the aggregate.

*************
What is next?
*************

Receipts do not only store resolutions for aliases, but also every invisible state change that is not directly retrievable from transactions or the block header. You can check under the :doc:`receipts documentation <../../concepts/receipt>` the complete list of changes logged.
