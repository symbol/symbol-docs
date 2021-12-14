#######
Receipt
#######

Conditional state changes in the background enable complex transactions.
For example, a :ref:`hashlocktransaction` concludes as soon as the :ref:`aggregatebondedtransaction` is confirmed.
When the locked funds are automatically returned to the account, there is no additional :doc:`transaction <transaction>` recorded.
This might appear as a *hidden change* that increases the :doc:`account <account>` balance.

Receipts provide proof for every hidden change.
The collection of receipts are hashed into a :doc:`merkle tree <data-validation>` and linked to a :doc:`block <block>`.
The block header stores the root hash, which is different from zero when the block has receipts.

*********************
Transaction statement
*********************

A transaction statement is a collection of receipts linked to a transaction in a particular block.
Statements can include receipts with the following basic types:

* **Balance Transfer**: An invisible state change triggered a mosaic transfer.
* **Balance Change**: An invisible state change altered an account's balance.
* **Mosaic Expiry**: A mosaic expired.
* **Namespace Expiry**: A namespace expired.
* **Inflation**: Network currency mosaics were created due to :doc:`inflation <inflation>`.

.. _receipt-resolution-statement:

********************
Resolution statement
********************

When a transaction includes an :doc:`alias <namespace>`, a so called Resolution Statement reflects the resolved value for that block:

* :ref:`addressresolutionstatement`: An account alias was used in the block.
* :ref:`mosaicresolutionstatement`: A mosaic alias was used in the block.

The alias receipts record the first occurrence of an (unresolved, resolved) alias pair used in a block.

It is technically possible to get more than one resolution for the same namespace id and block.
This situation is common when a namespace creator changes the alias link to another asset, leading to two different resolutions in the same block.

The receipt source ``primaryId`` references the transaction where the alias first appears within the block.
The ``secondaryId`` is not 0 when the transaction is part of an :doc:`AggregateTransaction <../../concepts/aggregate-transaction>`, and it will indicate the index position within the aggregate.

*****************
Recorded receipts
*****************

|codename| records invisible state changes for the following entities.

.. rst-class:: big-table-colspan

    ========== ============================ ===========================
    Id         Receipt                      Basic type
    ========== ============================ ===========================
    **Core**
    -------------------------------------------------------------------
    -------------------------------------------------------------------
    ``0x2143`` ``Harvest_Fee``              :ref:`balancechangereceipt`
    The recipient, account and amount of fees received for harvesting a block. It is recorded when a block is :doc:`harvested <harvesting>`.
    -------------------------------------------------------------------
    ``0x5143`` ``Inflation``                :ref:`inflationreceipt`
    The amount of native currency mosaics created. The receipt is recorded when the network has inflation configured, and a new block triggers the creation of currency mosaics.
    -------------------------------------------------------------------
    ``0xE143`` ``Transaction_Group``
    A collection of state changes for a given source. It is recorded when a state change receipt is issued.
    -------------------------------------------------------------------
    ``0xF143`` ``Address_Alias_Resolution`` :ref:`addressresolutionstatement`
    The unresolved and resolved :doc:`alias <namespace>`. It is recorded when a transaction indicates a valid address alias instead of an address.
    -------------------------------------------------------------------
    ``0xF243`` ``Mosaic_Alias_Resolution``  :ref:`mosaicresolutionstatement`
    The unresolved and resolved alias. It is recorded when a transaction indicates a valid mosaic alias instead of a mosaic id.
    -------------------------------------------------------------------
    **Mosaic**
    -------------------------------------------------------------------
    -------------------------------------------------------------------
    ``0x414D`` ``Mosaic_Expired``           :ref:`mosaicexpiryreceipt`
    The identifier of the mosaic expiring in this block. It is recorded when a :doc:`mosaic <mosaic>` lifetime elapses.
    -------------------------------------------------------------------
    ``0x124D`` ``Mosaic_Rental_Fee``        :ref:`balancetransferreceipt`
    The sender and recipient of the mosaic id and amount representing the cost of registering the mosaic. It is recorded when a mosaic is registered.
    -------------------------------------------------------------------
    **Namespace**
    -------------------------------------------------------------------
    -------------------------------------------------------------------
    ``0x414E`` ``Namespace_Expired``        :ref:`namespaceexpiryreceipt`
    The identifier of the namespace expiring in this block. It is recorded when the :doc:`namespace <namespace>` lifetime elapses.
    -------------------------------------------------------------------
    ``0x424E`` ``Namespace_Deleted``        :ref:`namespaceexpiryreceipt`
    The identifier of the namespace deleted in this block. It is recorded when the :doc:`namespace <namespace>` grace period elapses.
    -------------------------------------------------------------------
    ``0x134E`` ``Namespace_Rental_Fee``     :ref:`balancetransferreceipt`
    The sender and recipient of the mosaic id and amount representing the cost of extending the namespace. It is recorded when a namespace is registered or its duration is extended.
    -------------------------------------------------------------------
    **HashLock**
    -------------------------------------------------------------------
    -------------------------------------------------------------------
    ``0x3148`` ``LockHash_Created``         :ref:`balancechangereceipt`
    The lockhash sender, mosaic id and amount locked. It is recorded when a valid :ref:`hashlocktransaction` is announced.
    -------------------------------------------------------------------
    ``0x2248`` ``LockHash_Completed``       :ref:`balancechangereceipt`
    The hashlock sender, mosaic id and amount locked that is returned. It is recorded when an AggregateBondedTransaction linked to the hash completes.
    -------------------------------------------------------------------
    ``0x2348`` ``LockHash_Expired``         :ref:`balancechangereceipt`
    The account receiving the locked mosaic, the mosaic id and the amount. It is recorded when a lock hash expires.
    -------------------------------------------------------------------
    **SecretLock**
    -------------------------------------------------------------------
    -------------------------------------------------------------------
    ``0x3152`` ``LockSecret_Created``       :ref:`balancechangereceipt`
    The secretlock sender, mosaic id and amount locked. It is recorded when a valid :ref:`secretlocktransaction` is announced.
    -------------------------------------------------------------------
    ``0x2252`` ``LockSecret_Completed``     :ref:`balancechangereceipt`
    The secretlock recipient, mosaic id and amount locked. It is recorded when a secretlock is proved.
    -------------------------------------------------------------------
    ``0x2352`` ``LockSecret_Expired``       :ref:`balancechangereceipt`
    The account receiving the locked mosaic, the mosaic id and the amount. It is recorded when a secretlock expires.
    -------------------------------------------------------------------
    ========== ============================ ===========================

**************
Related guides
**************

.. postlist::
    :category: Receipt
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:
