:orphan:

.. post:: 18 Aug, 2018
    :category: Mosaic
    :excerpt: 1
    :nocomments:

#######################
Modifying mosaic supply
#######################

Alter the supply of a mosaic.

*************
Prerequisites
*************

- Finish :doc:`creating a mosaic guide <creating-a-mosaic>`
- Have registered a supply mutable mosaic

*************************
Method #01: Using the SDK
*************************

If you have followed the previous guide, right now you should own a ``supply mutable`` :doc:`mosaic <../../concepts/mosaic>` with 1,000,000 units.

To increase the initial supply to 2,000,000, define a :ref:`MosaicSupplyChangeTransaction <mosaic-supply-change-transaction>` replacing your target mosaic identifier in the next code snippet.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/ModifyingMosaicSupply.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/mosaic/ModifyingMosaicSupply.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

.. note:: You can decrease a mosaic supply by changing ``MosaicSupplyType.Increase`` to ``MosaicSupplyType.Decrease``.

*************************
Method #02: Using the CLI
*************************

.. viewsource:: ../../resources/examples/bash/mosaic/ModifyingMosaicSupply.sh
    :language: bash
    :start-after: #!/bin/sh
