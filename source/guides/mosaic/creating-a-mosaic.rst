:orphan:

.. post:: 16 Aug, 2018
    :category: Mosaic
    :excerpt: 1
    :nocomments:

#################
Creating a mosaic
#################

Tokenize an asset using mosaics.

**********
Background
**********

:doc:`Mosaics <../../concepts/mosaic>` can be used to represent any asset in the blockchain such as objects, tickets, coupons, stock share representation, and even your cryptocurrency.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

**********************
Getting into some code
**********************

To create a mosaic, we need to define two transactions.

1. A :ref:`MosaicDefinitionTransaction <mosaic-definition-transaction>` to select the **mosaic properties**. In this example, we are going to create a mosaic configured as:

.. _mosaic-properties:

.. csv-table::
    :header: "Property", "Value", "Description"
    :delim: ;

    Divisibility; 0 ; The mosaic won't be divisible. Determines up to what decimal place the mosaic can be divided.
    Duration; 1000; The mosaic will be created for the next 1000 blocks. If you want to create a non-expiring mosaic, do not set this property.
    Supply mutable; True; The mosaic supply can change at a later point.
    Transferable; True; The mosaic can be transferred between arbitrary accounts. Otherwise, the mosaic can be only transferred back to the mosaic creator.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/mosaic/CreatingAMosaic.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. A :ref:`MosaicSupplyChangeTransaction <mosaic-supply-change-transaction>`, to set the **initial supply**. We are going to create **1.000.000** mosaic units.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/mosaic/CreatingAMosaic.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

NEM mainly works with **absolute amounts**. To get an absolute amount, multiply the amount of assets you want to create by 10\ :sup:`divisibility`.  For example, if the mosaic has **divisibility** 2, to create 10 units (relative) you should define 1000 (absolute) instead.

3. Announce both transactions together using an :ref:`AggregateTransaction <aggregate-transaction>`.

.. note:: To make the transaction only valid for your network, include the first block generation hash. Open ``http://localhost:3000/block/1`` in a new tab and copy the ``meta.generationHash`` value.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/javascript/mosaic/CreatingAMosaic.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/bash/mosaic/CreatingAMosaic.sh
        :language: bash
        :start-after: #!/bin/sh

************
What's next?
************

:doc:`Transfer <../transaction/sending-a-transfer-transaction>` one mosaic created to another account, :doc:`modify the mosaic properties <modifying-mosaic-supply>` or :doc:`link a namespace to the mosaic <creating-a-mosaic>`.
