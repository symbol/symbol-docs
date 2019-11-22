####
Fees
####

Announcing :doc:`transactions <transaction>` have an associated cost. This cost is necessary to provide an incentive for the :doc:`harvesters <harvesting>` who secure the network and run the infrastructure.

****************
Network currency
****************

By default, fees are paid in ``cat.currency``, the underlying currency of the Catapult network. Private chains can edit the configuration of the network to eliminate fees, or use another :doc:`mosaic <mosaic>` that better suits their needs.

***************
Transaction fee
***************

The fee associated with a transaction primarily depends on the transaction's size. The effective fee is the product of the size of the transaction, and a fee multiplier set by the harvester. The node owner can configure the latter value to all positive values, including zero.

.. math::

    effectiveFee = transaction::size * block::feeMultiplier

The sender of a transaction must specify during the transaction definition a ``max_fee``, meaning the maximum fee the account allows to spend for this transaction.

If the ``effective_fee`` is smaller or equal to the ``max_fee``, the harvester can opt to include the transaction in the block. The ``fee_multiplier`` is stored in the :ref:`block header <block-header>`, permitting to determine which was the effective fee paid for every transaction included in the block.

The harvesting nodes can decide their transaction inclusion strategy:

* **Prefer-oldest**: Preferred for networks with high transaction throughput requirements. Include first the oldest transactions.
* **Minimize-fees**: Philanthropic nodes. Include first the transactions that other nodes do not want to include.
* **Maximize-fees**: Most common in public networks. Include first transactions with higher fees.

**********
Rental fee
**********

Accounts willing to register a :doc:`namespace <namespace>` or a :doc:`mosaic <mosaic>` have to pay a rental fee in addition to the transaction fee. The effective rental fee is adjusted dynamically based on the :doc:`median network multiplier <harvesting>` over last :properties:`maxRollbackBlocks <config-network.properties#L20>`.

For more information, see how the network calculates the effective rental fee for :ref:`mosaics <mosaic-rental-fee>` and :ref:`namespaces <namespace-rental-fee>`.

Continue: :doc:`Consensus <consensus-algorithm>`.
