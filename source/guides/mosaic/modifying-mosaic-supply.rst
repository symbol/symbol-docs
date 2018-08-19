:orphan:

.. post:: 18 Aug, 2018
    :category: mosaic
    :excerpt: 1
    :nocomments:

#######################
Modifying mosaic supply
#######################

Did you register a :doc:`mosaic<../../concepts/mosaic>` with supplyMutable option set to true? In that case, you can increase or decrease your mosaic available supply following this guide.

*************
Prerequisites
*************

- Finish :doc:`creating a mosaic guide <creating-a-mosaic>`
- NEM2-SDK or CLI
- A text editor or IDE
- An account with XEM
- Have registered a supply mutable mosaic

************************
Let’s get into some code
************************

If you have followed the previous guide, right now you should own a ``supply mutable`` mosaic.

Let's increase to ``2.000.000`` the initial supply. Just sign and announce a :ref:`mosaic supply change transaction <mosaic-supply-change-transaction>`.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/mosaic/ModifyingMosaicSupply.ts
        :language: typescript
        :lines:  30-
    
    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/mosaic/ModifyingMosaicSupply.java
        :language: java
        :lines: 43-63

    .. literalinclude:: ../../resources/examples/javascript/mosaic/ModifyingMosaicSupply.js
        :language: javascript
        :lines: 30-

************
What's next?
************

Try to decrease your mosaic supply by changing  ``MosaicSupplyType.Increase`` for ``MosaicSupplyType.Decrease``.