:orphan:

.. post:: 13 Sep, 2019
    :category: Mosaic, Mosaic Restriction
    :excerpt: 1
    :nocomments:

###########################################
Freezing accounts with restrictable mosaics
###########################################

Limit how accounts can transact with Mosaic Restrictions.

**********
Background
**********

Let's say a company, CharlieChocolateFactory, wants to go public by tokenizing their shares and conducting an STO. They create a mosaic ``ccf.shares`` and configure it to be **restrictable**. To comply with regulations, the company wants only the participants that have passed the **KYC/AML** process to buy and transact their stock.

In this guide, we are going to use Catapult's :doc:`mosaic restriction <../../concepts/mosaic-restriction>` feature to define which participants who can transact with ``ccf.shares``.

*************
Prerequisites
*************

- Finish :doc:`creating a mosaic guide <creating-a-mosaic>`

**********************
Getting into some code
**********************

Creating a restrictable mosaic
==============================

Before starting to work with Mosaic Restrictions, we need to have created a restrictable mosaic. Only mosaics with the ``restrictable`` :ref:`property <mosaic-properties>` set to true at the moment of their definition accept mosaic restrictions.

1. Start creating a new restrictable mosaic with NEM2-CLI.

.. code-block:: bash

    nem2-cli transaction mosaic

    Do you want an eternal mosaic? [y/n]: y
    Introduce mosaic divisibility: 0
    Do you want mosaic to have supply mutable? [y/n]: y
    Do you want mosaic to be transferable? [y/n]: y
    Do you want mosaic to be restrictable? [y/n]: y
    Introduce amount of tokens: 1000
    Transaction announced correctly

    Your mosaic id is: 634a8ac3fc2b65b3

2. Then, copy and save the mosaic identifier. We will need it later to define restrictions.

Setting a Global Restriction
============================

The company wants to add a restriction to only permit accounts with elevated statuses to interact with the asset. To achieve so, the company will add a global restriction as ``{ccf.shares, KYC, EQ = 1}``, which can be read as "only allow accounts to transact with the ``ccf.shares`` mosaic if their ``KYC`` restriction key for it has a value equal to 1".

.. figure:: ../../resources/images/examples/mosaic-restriction-sto.png
    :align: center
    :width: 450px

    Use case diagram

1. Start opening a new TypeScript file. Then, place the mosaic identifier value you got while creating the mosaic in a variable named ``mosaicId``. Also, you should represent the key ``KYC`` with a numeric value encoded as a UInt64. Commonly, the CharlieChocolateFactory will keep the meaning of this value in a separate database. In our case, we will consider that ``0xFF`` stands for ``KYC``.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/FreezingAccountsWithRestrictableMosaicsMosaicGlobalRestriction.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Then, define a new **MosaicGlobalRestrictionTransaction**. Pass as arguments the mosaicId and keys you have defined in the previous step. For now, we will not use the property ``referenceMosaicId``, so we can define it as ``UInt.fromHex('0')``.

The SDK also requests  the previous mosaic restriction value for this key and mosaic, and which type it had. As it is the first global restriction we are announcing, set the ```previousRestrictionValue`` to ``0`` and the ``mosaicRestrictionType`` to ``None``.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/FreezingAccountsWithRestrictableMosaicsMosaicGlobalRestriction.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */


3. After defining the global restriction, sign the transaction with the mosaic owner's account - CharlieChocolateFactory - and announce it to the network.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/FreezingAccountsWithRestrictableMosaicsMosaicGlobalRestriction.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

Assigning Mosaic Address Restrictions
=====================================

When investors complete the KYC/AML process, the CharlieChocolateFactory alters their accounts with a **MosaicAddressRestrictionTransaction** with parameters ``ccf.shares, KYC, 1``, allowing certified investors to participate in the STO. Others who have not provided the necessary information will not be able to receive or trade the asset.

Alice, a potential investor, passes the KYC process. Once Alice has been verified, the company tags Alice's account with the mosaic address restriction ``{ccf.shares, Alice, KYC, 1}``. On the other hand Bob, another account that wants to invest did not pass the KYC process, receiving the mosaic address Restriction ``{ccf.shares, Bob, KYC, 0}``.

1. Define both **MosaicAddressRestrictionTransaction** for Alice and Bob accounts as follows:

* Alice: ``{ccf.shares, Alice, KYC, 1}``
* Bob:  ``{ccf.shares, Bob, KYC, 0}``

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/FreezingAccountsWithRestrictableMosaicsMosaicAddressRestriction.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

Once again, you will have to provide previous values set for these mosaic address restrictions. Since it is the first time we are appending one for this mosaic and key to these accounts, we have to use the sentinel value ``FFFFFFFFFFFFFFFF``.

2. Now, you can announce the transactions to the network. To do so, try to announce both transactions together using an :doc:`aggregate transaction <../../concepts/aggregate-transaction>`. Remember that you will have to announce the transactions from the mosaic's owner account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/FreezingAccountsWithRestrictableMosaicsMosaicAddressRestriction.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Once the transaction gets confirmed, let's try to send mosaics to Alice's and Bob's accounts.

You should be able to send ``ccf.shares`` to Alice without any problems. Plus, Alice will be able to transfer mosaics with other accounts with restrictions set to ``{ccf.shares, KYC, 1}``.

.. code-block:: bash

     nem2-cli transaction transfer --recipient SD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54 --mosaics <ID>::1

However, when you send the same mosaic to Bob's account, you should get the error ``Failure_RestrictionMosaic_Account_Unauthorized`` through the :ref:`status error channel <status-errors>` as he is not allowed to transact with ``ccf.shares``.

.. code-block:: bash

     nem2-cli transaction transfer --recipient SD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54 --mosaics <ID>::1
