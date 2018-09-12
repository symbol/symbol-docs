:orphan:

.. post:: 16 Aug, 2018
    :category: mosaic
    :excerpt: 1
    :nocomments:

#################
Creating a mosaic
#################

After creating a namespace, follow this guide to create a :doc:`mosaic<../../concepts/mosaic>` .

**********
Background
**********

Mosaics can be used to represent any asset in the blockchain such as objects, tickets, coupons, stock share representation, and even your cryptocurrency.

A mosaic is like a file hosted on a domain and it represents an asset. Like a website and directory, a mosaic can have the same name as other files on other domains. However,  a namespace + mosaic is always unique.

*************
Prerequisites
*************

- Finish :doc:`registering a namespace guide <../namespace/registering-a-namespace>`
- NEM2-SDK or CLI
- A text editor or IDE
- An account with XEM and at least one namespace

************************
Let’s get into some code
************************

The first step is to choose a name for your mosaic. The name of the mosaic, up to a size limit of ``64`` characters, must be unique under the domain name.

Our mosaic will be called ``token``, and its parent namespace will be ``foo``.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.ts
        :language: typescript
        :lines:  33-40

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/mosaic/CreatingAMosaic.java
        :language: java
        :lines: 40-47

    .. literalinclude:: ../../resources/examples/javascript/mosaic/CreatingAMosaic.js
        :language: javascript
        :lines: 33-40

It is necessary to announce two transactions when creating a mosaic:

1. A :ref:`mosaic definition transaction <mosaic-definition-transaction>`, to create the mosaic.

Under mosaic properties, we define a mosaic with ``supplyMutable``, ``transferable`` among accounts other than the creator and registered for ``1000 blocks``. ``foo:token`` won't be  ``divisible``.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.ts
        :language: typescript
        :lines:  43-54

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/mosaic/CreatingAMosaic.java
        :language: java
        :lines: 49-55

    .. literalinclude:: ../../resources/examples/javascript/mosaic/CreatingAMosaic.js
        :language: javascript
        :lines: 43-54

2. A :ref:`mosaic supply change transaction <mosaic-supply-change-transaction>`, to set the supply. ``foo:token`` initial supply is 1.000.000

.. note:: Once you announce a MosaicSupplyChangeTransaction, you cannot change mosaic properties for this mosaic.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.ts
        :language: typescript
        :lines:  57-62

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/mosaic/CreatingAMosaic.java
        :language: java
        :lines: 57-63

    .. literalinclude:: ../../resources/examples/javascript/mosaic/CreatingAMosaic.js
        :language: javascript
        :lines: 57-62

3. Both transactions can be announced together using an :ref:`aggregate transaction <aggregate-transaction>`.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.ts
        :language: typescript
        :lines:  65-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/mosaic/CreatingAMosaic.java
        :language: java
        :lines: 65-78

    .. literalinclude:: ../../resources/examples/javascript/mosaic/CreatingAMosaic.js
        :language: javascript
        :lines: 65-

    .. literalinclude:: ../../resources/examples/cli/mosaic/CreatingAMosaic.sh
        :language: bash
        :start-after: #!/bin/sh

************
What's next?
************

:doc:`Transfer <../transaction/sending-a-transfer-transaction>` one mosaic created to another account or modify its properties following the next guide.
