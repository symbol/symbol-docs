####
Fees
####

Announcing :doc:`transactions <transaction>` have an associated cost.
This cost is necessary to provide an incentive for the :doc:`harvesters <harvesting>` who secure the network and run the infrastructure.

****************
Network currency
****************

By default, fees are paid in the underlying currency of the |codename| network.

.. csv-table:: Default network currency per network type
    :header: "Network type", "Mosaic name"
    :delim: ;

    MIJIN_TEST; |privatenetworkcurrency|
    TEST_NET; |networkcurrency|

Private chains :ref:`can edit the network configuration <config-network-properties>` to eliminate fees or use another :doc:`mosaic <mosaic>` that better suits their needs.

***************
Transaction fee
***************

The fee associated with a transaction primarily depends on the size of the transaction.
The effective fee deducted from the account sending the transaction is calculated as the product of the size of the transaction and a fee multiplier set by the node that harvests the block.

.. math::

    effectiveFee = transaction::size * block::feeMultiplier

A node owner :ref:`can configure the fee multiplier <node-properties>` to all positive values, including zero.
The ``fee_multiplier`` is stored in the :ref:`block header <block-header>` when the node harvests a new block, determining which was the effective fee paid for every transaction included.

Before announcing the transaction, the sender must specify during the transaction definition a ``max_fee``, indicating the maximum fee the account allows to spend for this transaction.

If the ``effective_fee`` is smaller or equal to the ``max_fee``, a harvester could opt to include the transaction in the block.
The harvesting nodes :ref:`can set their transaction inclusion strategy <node-properties>`:

* **Prefer-oldest**: Preferred for networks with high transaction throughput requirements. Include first the oldest transactions.
* **Minimize-fees**: Philanthropic nodes. Include first the transactions that other nodes do not want to include.
* **Maximize-fees**: Most common in public networks. Include first transactions with higher fees.

To ensure that the transaction will get included without setting a ``max_fee`` unnecessarily high, the sender of the transaction can ask the :doc:`REST Gateway <../api>` for the median, average, highest, or lowest multiplier of the network over the last N blocks. For example, the sender could set the transaction max_fee as follows:

.. math::

    maxFee = transaction::size ∗ network::medianFeeMultiplier

.. example-code::

    .. viewsource:: ../resources/examples/typescript/transfer/DefiningMaxFee.ts
        :language: typescript
        :start-after: /* start block 01 */
        :end-before: /* end block 01 */
    
    .. viewsource:: ../resources/examples/typescript/transfer/DefiningMaxFee.js
        :language: javascript
        :start-after: /* start block 01 */
        :end-before: /* end block 01 */

.. note:: It is not guaranteed that the transaction will get confirmed if the multiplier used is to low. To have better chances, the sender of the transaction could opt to use any value between medianNetworkFeeMultiplier and highestFeeMultiplier instead.

To determine an :doc:`aggregate bonded transaction <aggregate-transaction>` size, it is required to know beforehand the number of participant accounts that will need to cosign the transaction.

.. example-code::

    .. viewsource:: ../resources/examples/typescript/transfer/DefiningMaxFee.ts
        :language: typescript
        :start-after: /* start block 02 */
        :end-before: /* end block 02 */
    
    .. viewsource:: ../resources/examples/typescript/transfer/DefiningMaxFee.js
        :language: javascript
        :start-after: /* start block 02 */
        :end-before: /* end block 02 */

**********
Rental fee
**********

Accounts willing to register a :doc:`namespace <namespace>` or a :doc:`mosaic <mosaic>` have to pay a rental fee in addition to the transaction fee.
The effective rental fee is adjusted dynamically based on the :doc:`median network multiplier <harvesting>` over last :ref:`maxDifficultyBlocks <config-network-properties>`.

For more information, see how the network calculates the effective rental fee for :ref:`mosaics <mosaic-rental-fee>` and :ref:`namespaces <namespace-rental-fee>`.

Continue: :doc:`Receipt <receipt>`.