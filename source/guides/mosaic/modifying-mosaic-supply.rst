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

    .. literalinclude:: ../../resources/examples/typescript/mosaic/ModifyingMosaicSupply.ts
        :caption: |modifying-mosaic-supply-ts|
        :language: typescript
        :lines:  30-

    .. literalinclude:: ../../resources/examples/javascript/mosaic/ModifyingMosaicSupply.js
        :caption: |modifying-mosaic-supply-js|
        :language: javascript
        :lines: 30-

************
What's next?
************

Decrease your mosaic supply by changing ``MosaicSupplyType.Increase`` to ``MosaicSupplyType.Decrease``.

.. |modifying-mosaic-supply-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/mosaic/ModifyingMosaicSupply.ts" target="_blank">View Code</a>

.. |modifying-mosaic-supply-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/mosaic/ModifyingMosaicSupply.js" target="_blank">View Code</a>