:orphan:

.. post:: 07 May, 2019
    :category: Account Restrictions
    :excerpt: 1
    :nocomments:

#################################################
Preventing spam attacks with account restrictions
#################################################

Learn how to add and remove account restrictions.

**********
Background
**********

Imagine you are a company using the public chain to certify the quality of your products.

When the quality verification process concludes, an operator sends a :doc:`quality seal <../../concepts/mosaic>` to the product account, which the customers can review by scanning a QR code. For the convenience of the customers, you only want to show relevant transactions and prevent spam from cluttering the product account.

The final customers can review the product mosaics scanning a QR code. For that reason, the company only wants to show related transactions, avoiding that others spam their products with non-related information.

.. figure:: ../../resources/images/examples/account-restrictions-spam.png
    :align: center
    :width: 450px

    Blocking spam attacks

Thus, you opt to configure the product :doc:`account restrictions <../../concepts/account-restrictions>` to only receive transactions that follow a set of conditions.

*************
Prerequisites
*************

- Finish :doc:`sending a transfer transaction guide <../transaction/sending-a-transfer-transaction>`
- Finish :doc:`creating a mosaic guide <../mosaic/creating-a-mosaic>`

**********************
Getting into some code
**********************

Before starting solving the use case, you will need to set up two accounts with :doc:`NEM2-CLI <../../cli>`.

1. Create an account to represent the product.

.. code-block:: bash

    nem2-cli account generate

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): MIJIN_TEST
    Do you want to save it? [y/n]: y
    Introduce NEM 2 Node URL. (Example: http://localhost:3000): http://localhost:3000
    Insert profile name (blank means default and it could overwrite the previous profile): product

    New Account:    SDFRDC-F6RXWX-EOOTVI-RLCNUK-KYRSU6-MXW2FC-OR4V
    Public Key:     8DC55282AC40307C230F432EE29E52BD93860C167011B11FA1BAEE124B76AB19
    Private Key:    123..456

2. Create another account for the company.

.. code-block:: bash

    nem2-cli account generate

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): MIJIN_TEST
    Do you want to save it? [y/n]: y
    Introduce NEM 2 Node URL. (Example: http://localhost:3000): http://localhost:3000
    Insert profile name (blank means default and it could overwrite the previous profile): company

    New Account:    SBI774-YMFDZI-FPEPC5-4EKRC2-5DKDZJ-H2QVRW-4HBP
    Public Key:     DBA5A88911D01CE951A5DEAFD86108A029EA359BB211B399FC53B8908D6AE272
    Private Key:    654..321

Next, you will configure the product's account to only accept receiving transfer transactions that contain a specific mosaic.

Blocking transactions by address
================================

An account can decide to receive transactions only from an allowed list of :doc:`addresses <../../concepts/account>`. Similarly, an account can specify a blocked list of addresses to block transactions from.

.. note:: Allow and block restrictions are mutually exclusive per restriction type. In other words, an account can only be configured  to have either an allowed or blocked list per type of restriction.

By default, when there is no restriction set, all the accounts in the network can announce transactions to the stated account.

Returning to our previous example, let us imagine that you want to configure the product account to only accept receiving transactions  that come from the company's account. You might take the following steps to do so:

1. Define the account restriction modification. Add to the company’s address (SBI774-YMFDZI-FPEPC5-4EKRC2-5DKDZJ-H2QVRW-4HBP) to the "allowed list".

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/AccountAddressRestrictionAllowList.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create an ``AccountRestrictionTransaction``, with restrictionType "AllowAddress".  Add to the array the modification created in the previous step.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/AccountAddressRestrictionAllowList.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Sign and announce the transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/AccountAddressRestrictionAllowList.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

Now, if you send a :doc:`transfer transaction <../transaction/sending-a-transfer-transaction>` from another account, you will get an error as only "SBI774-YMFDZI-FPEPC5-4EKRC2-5DKDZJ-H2QVRW-4HBP" is allowed to send the transactions to the product.

On the other hand, if you send a transaction from your company account, you will receive a confirmation message as you would normally.

Blocking transactions by mosaic id
==================================

Imagine that the account that represents the company owns the following mosaics:

- ``company.share``: represents shares of the company.
- ``company.quality.seal``: represents that the product has passed a quality test.
- ``company.safety.seal``: represents that the product has passed a safety test.

In this case, it might be useful if the product could only receive seals and not company shares.

Thus, you could  narrow the type of transactions that the product can receive from the company's account through the use of negation. Instead of specifically allowing the seals, the product can be set up to block receiving transactions that contain "company.share". This is how it can be done:

1. Define the account restriction modification. Add the mosaic id you want to block to the "blocked list".

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/AccountMosaicRestrictionBlockList.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create an ``AccountRestrictionTransaction``, with restrictionType "BlockMosaic".  Add to the array the modification created in the previous step.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/AccountMosaicRestrictionBlockList.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Sign and announce the transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/AccountMosaicRestrictionBlockList.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

If the process was successful, the product account can now only receive transactions from the company's account that does not include any "company.share" mosaic.

Removing a restriction
======================

After the company sells the product to the final client, they want to remove the condition that only allowed the company's account to send transactions to the product. The account restrictions can be removed as easily as they were set up:

1. Define the account restriction modification. Remove from the "allowed list" the company's address.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/AccountAddressRestrictionRemoveRestriction.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create an ``AccountRestrictionTransaction``, setting the type "AllowAddress". Add as well the modification created.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/AccountAddressRestrictionRemoveRestriction.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Sign and announce the transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/AccountAddressRestrictionRemoveRestriction.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

After the transaction gets confirmed, you should be able to send transactions from any account to the product account once again.
