:orphan:

#############################################################
Getting the asset identifier behind a namespace with receipts
#############################################################

.. post:: 11 Jul, 2019
    :category: Receipt
    :excerpt: 1
    :nocomments:

Get the resolution for a given alias and transaction using receipts.

**********
Background
**********

Catapult permits using short and human-readable names for your accounts and mosaics, instead of long and challenging to memorize strings. Accounts can link their registered :doc:`namespaces <../../concepts/namespace>` to other accounts or mosaics announcing an :ref:`alias transaction <mosaic-alias-transaction>`.

Imagine a ticket vendor sending tickets to their customers on the NEM blockchain. The company could send 1 ``0dc67fbe1cad29e3`` to ``SCVG35-ZSPMYP-L2POZQ-JGSVEG-RYOJ3V-BNIU3U-N2E6``. However, it is more convenient to define the same transaction as 1 ``ticketsales.event1.ticket`` to ``@alice`` instead, considering that the account and mosaic were aliased previously.

.. figure:: ../../resources/images/examples/namespace-tickets.png
    :align: center
    :width: 500px

    Recognizable mosaics and addresses

You can query directly from the network which is the current mosaic identifier behind a namespace running the following snippet:

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/blockchain/GettingTheCurrentMosaicIdentifierBehindANamespace.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

However, transactions using aliased mosaics or accounts are stored in the blockchain using the namespace identifier, and not the real address or mosaic id behind. For that reason, we cannot just rely on the current state to verify past transactions since:

* Links are editable. The namespace owner can link its namespace to another asset.
* Namespaces expire. The namespace link could be deleted.

At this point, you might be wondering: how can we get the relation between a namespace and its real identifier for a past transaction then? Catapult nodes store for each block **receipts**: every :doc:`invisible state change <../../concepts/receipt>` that cannot be retrieved directly from the transaction or block header.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

**********************
Getting into some code
**********************

First, we are going to announce a transfer transaction using ``cat.currency`` instead of the native currency mosaic id. Once the network confirms the transaction, we will get the block height where the transaction has been recorded. With this information, we can get the namespace-mosaic relation looking into the block receipts'.

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

3. Announce the transfer transaction, and wait until it is confirmed. Then, retrieve the receipts attached to the block where the receipt was confirmed.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/blockchain/GettingTheMosaicIdentifierBehindANamespaceWithReceipts.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

The RxJs filters are looking for the namespace resolution inside the ``mosaicResolutionStatements`` collection.

4. The previous snippet outputs the resolved mosaic identifier for the namespace ``cat.currency`` and the transaction you have just sent.

.. code-block:: bash

    Resolved MosaicId:  0dc67fbe1cad29e3
    PrimaryId:  1
    SecondaryId:  0

It is technically possible to get more than one ``resolutionEntry`` for the same namespaceId. This situation is common when a namespace owner changes the link to another mosaic, leading to two different resolutions in the same block.

The receipt source  ``primaryId`` references the transaction where the alias first appears within the block. On the other hand, the ``secondaryId`` is different than 0 when the transaction is part of an :doc:`aggregate transaction <../../concepts/aggregate-transaction>`, indicating the index position within the aggregate.

*************
What is next?
*************

Receipts do not only store resolutions for aliases, but also every invisible state change that is not directly retrievable from transactions or the block header. You can check under the :doc:`receipts documentation <../../concepts/receipt>` the complete list of changes logged.
