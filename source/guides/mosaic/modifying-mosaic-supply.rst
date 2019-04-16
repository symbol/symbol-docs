:orphan:

.. post:: 18 Aug, 2018
    :category: Mosaic
    :excerpt: 1
    :nocomments:

#######################
Modifying mosaic supply
#######################

Alter the supply of a mosaic following this guide.

*************
Prerequisites
*************

- Finish :doc:`creating a mosaic guide <creating-a-mosaic>`
- Have registered a supply mutable mosaic

************************
Let’s get into some code
************************

If you have followed the previous guide, right now you should own a ``supply mutable`` :doc:`mosaic<../../concepts/mosaic>`.

To increase the initial supply to ``2.000.000``, define a :ref:`mosaic supply change transaction <mosaic-supply-change-transaction>` setting the target mosaicId.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/ModifyingMosaicSupply.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/mosaic/ModifyingMosaicSupply.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

************
What's next?
************

Decrease your mosaic supply by changing ``MosaicSupplyType.Increase`` to ``MosaicSupplyType.Decrease``.
