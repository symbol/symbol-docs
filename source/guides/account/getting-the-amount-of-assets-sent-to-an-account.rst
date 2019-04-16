:orphan:

.. post:: 18 Aug, 2018
    :category: Account
    :excerpt: 1
    :nocomments:

###############################################
Getting the amount of assets sent to an account
###############################################

Check the number of asset units you have sent to an account.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`
- Have :doc:`sent mosaics <../transaction/sending-a-transfer-transaction>` to another account.

************************
Let’s get into some code
************************

In this example, we are going to check how many assets of a certain type have we sent to an account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/GettingTheAmountOfAssetsSentToAnAccount.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

If you want to check another :doc:`mosaic <../../concepts/mosaic>` different than the native currency, change ``mosaicId`` and ``divisibility`` for the target mosaic properties.

.. code-block:: typescript

    const mosaicId = new MosaicId([3562970624, 976072438]);
    const divisibility = 6;

