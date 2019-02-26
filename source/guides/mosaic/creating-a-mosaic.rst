:orphan:

.. post:: 16 Aug, 2018
    :category: Mosaic
    :excerpt: 1
    :nocomments:

#################
Creating a mosaic
#################

Follow this guide to create a :doc:`mosaic<../../concepts/mosaic>` .

*************
Prerequisites
*************

- Finish :doc:`setup your workstation <../../getting-started/setup-workstation>`
- NEM2-SDK or CLI
- A text editor or IDE
- An account with XEM

************************
Let’s get into some code
************************

Mosaics can be used to represent any asset in the blockchain such as objects, tickets, coupons, stock share representation, and even your cryptocurrency.

You will need to announce two transactions to create a mosaic:

1. A :ref:`mosaic definition transaction <mosaic-definition-transaction>` to create the mosaic, with the following properties:

.. _mosaic-properties:

.. csv-table::
    :header: "Property", "Value", "Description"
    :delim: ;

    Divisibility; 0 ; The mosaic won't be divisible.
    Duration; 1000; The mosaic will be regsitered for 1000 blocks.
    Supply mutable; True; The mosaic supply can change at a later point.
    Transferable; True; The mosaic can be transferred between arbitrary accounts.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.ts
        :caption: |creating-a-mosaic-ts|
        :language: typescript
        :lines:  33-52

    .. literalinclude:: ../../resources/examples/javascript/mosaic/CreatingAMosaic.js
        :caption: |creating-a-mosaic-js|
        :language: javascript
        :lines: 33-52

2. A :ref:`mosaic supply change transaction <mosaic-supply-change-transaction>`, to set the supply. We are going to create 1.000.000 mosaic units.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.ts
        :caption: |creating-a-mosaic-ts|
        :language: typescript
        :lines:  54-60

    .. literalinclude:: ../../resources/examples/javascript/mosaic/CreatingAMosaic.js
        :caption: |creating-a-mosaic-js|
        :language: javascript
        :lines: 54-60

3. Both transactions can be announced together using an :ref:`aggregate transaction <aggregate-transaction>`.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.ts
        :caption: |creating-a-mosaic-ts|
        :language: typescript
        :lines:  63-

    .. literalinclude:: ../../resources/examples/javascript/mosaic/CreatingAMosaic.js
        :caption: |creating-a-mosaic-js|
        :language: javascript
        :lines: 63-

    .. literalinclude:: ../../resources/examples/cli/mosaic/CreatingAMosaic.sh
        :caption: |creating-a-mosaic-cli|
        :language: bash
        :start-after: #!/bin/sh

************
What's next?
************

:doc:`Transfer <../transaction/sending-a-transfer-transaction>` one mosaic created to another account, :doc:`modify the mosaic properties <modifying-mosaic-supply>` or :doc:`link a namespace to the mosaic <creating-a-mosaic>`.

.. |creating-a-mosaic-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/mosaic/CreatingAMosaic.ts" target="_blank">View Code</a>

.. |creating-a-mosaic-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/mosaic/CreatingAMosaic.js" target="_blank">View Code</a>

.. |creating-a-mosaic-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/mosaic/CreatingAMosaic.sh" target="_blank">View Code</a>
