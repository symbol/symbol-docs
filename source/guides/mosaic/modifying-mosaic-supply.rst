.. post:: 18 Aug, 2018
    :category: Mosaic
    :tags: wallet, SDK, CLI
    :excerpt: 1
    :nocomments:

###########################
Modifying the mosaic supply
###########################

If a mosaic was created with the "**Supply Mutable**" property, you can make more tokens or reduce the total supply.

*************
Prerequisites
*************

- Complete :doc:`creating a mosaic guide <creating-a-mosaic>`.
- Have registered a supply mutable mosaic.

************************************
Method #01: Using the Desktop Wallet
************************************

1. Click on the "**Mosaic**" tab on the left-side menu.

.. figure:: ../../resources/images/screenshots/modify-mosaic-supply-1.gif
    :align: center
    :width: 800px

2. Click on the edit icon (represented by a pen) on the right side of the mosaic that you desire to edit. Click "**modify supply**".
Note:

.. figure:: ../../resources/images/screenshots/modify-mosaic-supply-2.gif
    :align: center
    :width: 800px

3. Select the "**Supply Change Direction**" to indicate whether you desire to increase or decrease the supply. Then enter the amount by you wish to edit the relative supply. Click "**Send**". Verify the information on the next page and enter your wallet password. Click "**Confirm**".

In our example, the relative supply is increased by 1,000,000. Since the divisibility property of the mosaic is 0, the change in absolute supply is identical.

.. note:: If you enter a negative number, it will do the inverse of the indicated "**Supply Change Direction**". For example, if you choose to increase by -100, the relative supply will decrease by 100. To decrease the supply, the mosaic owner must have at least the number of units to be removed.

.. figure:: ../../resources/images/screenshots/modify-mosaic-supply-3.gif
    :align: center
    :width: 800px

4. You can verify the change in supply on the "**Mosaics**" page. If you still see the old supply, try clicking on the update icon on the top right.

.. figure:: ../../resources/images/screenshots/modify-mosaic-supply-4.gif
    :align: center
    :width: 800px

*************************
Method #02: Using the SDK
*************************

1. Define a :ref:`mosaicsupplychangetransaction` as in the next code snippet.
Then, replace the ``mosaicId`` and ``divisibility`` with the current mosaic properties.
Edit ``delta`` with the relative amount of mosaics you want to increase.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/ModifyingMosaicSupply.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/mosaic/ModifyingMosaicSupply.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/mosaic/ModifyingMosaicSupply.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

.. note:: |codename| works with **absolute amounts**. To get an absolute amount, multiply the number of assets you want to increase/decrease by 10\ :sup:`divisibility`. For example, if the mosaic has **divisibility** 2, to increase 10 units (relative) you should define 1000 (absolute) instead.

2. Sign the transaction with the mosaic creator account and announce it to the network.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/ModifyingMosaicSupply.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/mosaic/ModifyingMosaicSupply.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/mosaic/ModifyingMosaicSupply.java
        :language: java
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

Otherwise, you can decrease a mosaic supply by changing ``MosaicSupplyChangeAction.Increase`` to ``MosaicSupplyChangeAction.Decrease``.
In this second case, the mosaic creator account must own at least ``delta`` units to decrease the mosaic supply.

*************************
Method #03: Using the CLI
*************************

Open a terminal window and run the following command.

Replace ``7cdf3b117a3c40cc`` with the mosaic identifier and ``1000000`` with the absolute units to be increased.

.. viewsource:: ../../resources/examples/bash/mosaic/ModifyingMosaicSupply.sh
    :language: bash
    :start-after: #!/bin/sh
