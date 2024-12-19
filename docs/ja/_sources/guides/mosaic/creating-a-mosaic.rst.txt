.. post:: 16 Aug, 2018
    :category: Mosaic
    :tags: wallet, SDK, CLI
    :excerpt: 1
    :nocomments:

#################
Creating a mosaic
#################

Tokenize an asset using mosaics.

*************
Prerequisites
*************

- Complete the :doc:`getting started section <../../getting-started/setup-workstation>`.
- Create a new :ref:`account <setup-creating-a-test-account>`.
- Load the account with enough |networkcurrency| to pay for transaction fees.

************************************
Method #01: Using the Desktop Wallet
************************************

1. Click on the "**Mosaics**" tab from the left side menu.

2. Click on the "**Create new mosaics**" tab on the top of the page.

.. figure:: ../../resources/images/screenshots/desktop-create-mosaic-1.gif
    :align: center
    :width: 800px

3. Determine the properties of the mosaic you desire to create.
You can read :doc:`"Mosaic Properties" <../../concepts/mosaic>` to decide how do you want to configure your mosaic.
Click "**Send**".

.. figure:: ../../resources/images/screenshots/desktop-create-mosaic-2.gif
    :align: center
    :width: 800px

4. Verify the information on the popup and enter your wallet password. Click "**Confirm**". This should send the transaction to the network.

.. figure:: ../../resources/images/screenshots/desktop-create-mosaic-3.gif
    :align: center
    :width: 800px

5. When the transaction becomes confirmed, you can check to see that the mosaic has been created by going back to the "**Owned mosaics**" tab.

*************************
Method #02: Using the SDK
*************************

1. Open a new file and define a :ref:`mosaicdefinitiontransaction`.
This transaction defines the mosaic properties your mosaic will have.
You can read :ref:`Mosaic Properties <configurable-mosaic-properties>` to decide how do you want to configure your mosaic.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/mosaic/CreatingAMosaic.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Define a :ref:`mosaicsupplychangetransaction` to set the **initial supply**.
For instance, we can set it to **1,000,000** mosaic units.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/mosaic/CreatingAMosaic.java
        :language: java
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

.. note:: |codename| works with **absolute amounts**. To get an absolute amount, multiply the number of assets you want to create by 10\ :sup:`divisibility`.  For example, if the mosaic has **divisibility** 2, to create 10 units (relative) you should define 1000 (absolute) instead.

3. Announce both transactions together using an :ref:`aggregate-transaction`.
Include the network generation hash to make the transaction only valid for your network.
Open :term:`NODE_URL` ``/node/info`` in a new browser tab and copy the ``meta.networkGenerationHash`` value.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/mosaic/CreatingAMosaic.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/mosaic/CreatingAMosaic.java
        :language: java
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

Once the transaction gets confirmed, you can try to :doc:`transfer <../transfer/sending-a-transfer-transaction>` one unit of the created mosaic to another account, :doc:`modify the mosaic properties <modifying-mosaic-supply>` or :doc:`link a namespace to the mosaic <creating-a-mosaic>`.

*************************
Method #03: Using the CLI
*************************

Open a terminal window and run the following command.

.. viewsource:: ../../resources/examples/bash/mosaic/CreatingAMosaic.sh
    :language: bash
    :start-after: #!/bin/sh
