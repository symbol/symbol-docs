:orphan:

.. post:: 07 May, 2019
    :category: Account Filter
    :excerpt: 1
    :nocomments:

############################################
Preventing spam attacks with account filters
############################################

Learn how to add and remove account filters.

**********
Background
**********

Imagine you are a company using the public chain to certify the quality of their products.

When the quality verification process concludes, an operator sends a :doc:`quality seal <../../concepts/mosaic>` to the product account.

The final customers can review the product mosaics scanning a QR code. For that reason, the company only wants to show related transactions, avoiding that others spam their products with non-related information.

.. figure:: ../../resources/images/examples/account-properties-spam.png
    :align: center
    :width: 450px

    Blocking spam attacks

The company opts to configure their product :doc:`account filters <../../concepts/account-filter>`, enabling only to receive transactions that follow a set of conditions.

*************
Prerequisites
*************

- Finish :doc:`sending a transfer transaction guide <../transaction/sending-a-transfer-transaction>`
- Finish :doc:`creating a mosaic guide <../mosaic/creating-a-mosaic>`

************************
Let’s get into some code
************************

Before starting solving the use case, you will need to set up two accounts with :doc:`NEM2-CLI <../../cli>`.

1. Create one account to represent the product.

.. code-block:: bash

    $> nem2-cli account generate

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): MIJIN_TEST
    Do you want to save it? [y/n]: y
    Introduce NEM 2 Node URL. (Example: http://localhost:3000): http://localhost:3000
    Insert profile name (blank means default and it could overwrite the previous profile): product

    New Account:    SDFRDC-F6RXWX-EOOTVI-RLCNUK-KYRSU6-MXW2FC-OR4V
    Public Key:     8DC55282AC40307C230F432EE29E52BD93860C167011B11FA1BAEE124B76AB19
    Private Key:    123..456

2. Create a second account for the company.

.. code-block:: bash

    nem2-cli account generate

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): MIJIN_TEST
    Do you want to save it? [y/n]: y
    Introduce NEM 2 Node URL. (Example: http://localhost:3000): http://localhost:3000
    Insert profile name (blank means default and it could overwrite the previous profile): company

    New Account:    SBI774-YMFDZI-FPEPC5-4EKRC2-5DKDZJ-H2QVRW-4HBP
    Public Key:     DBA5A88911D01CE951A5DEAFD86108A029EA359BB211B399FC53B8908D6AE272
    Private Key:    654..321

Next, you will configure the product's account to accept receiving transfer transactions that only contain a certain mosaic.

Blocking transactions by address
================================

An account can decide to receive transactions only from an allowed list of :doc:`addresses <../../concepts/account>`. Similarly, an account can specify a list of addresses that don’t want to receive transactions from.

.. note:: Allow and block filters are mutually exclusive per filter type. In other words, an account can only configure a block or an allow list per type of filter.

By default, when there is no filter set, all the accounts in the network can announce transactions to the stated account.

For this use case, the product account will only accept receiving transactions if they come from the company's account.

1. Define the account filter modification. Add to the "allowed list" the company's address.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/FilteringByAddressAllowList.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create an ``AccountPropertyTransaction``, with propertyType "AllowAddress".  Add to the array the modification created in the previous step.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/FilteringByAddressAllowList.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Sign and announce the transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/FilteringByAddressAllowList.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

Now, you can test sending a :doc:`transfer transaction <../transaction/sending-a-transfer-transaction>` from another account: you will get an error as only "SBI774-YMFDZI-FPEPC5-4EKRC2-5DKDZJ-H2QVRW-4HBP" is allowed to send the transactions to the product.

On the other hand, if you try to send it from your company account and everything goes well, you will receive a confirmation message.

Blocking transactions by mosaic id
==================================

The account that represents the company owns the following mosaics:

- ``company.share``: represents a share of the company.
- ``company.quality.seal``: represents that the product has passed a quality test.
- ``company.safety.seal``: represents that the product has passed a safety test.

As you might notice, the product only should be able to receive seals and not company shares.

We are going to narrow the type of transactions that the product can receive from the company's account. To solve this example, we are going to use negation. Instead of allowing specifically the seals, the product will block receiving transactions containing "company.share".

1. Define the account filter modification. Add the mosaic id you want to block to the "blocked list".

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/FilteringByMosaicBlockList.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create an ``AccountPropertyTransaction``, with propertyType "BlockMosaic".  Add to the array the modification created in the previous step.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/FilteringByMosaicBlockList.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Sign and announce the transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/FilteringByMosaicBlockList.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

If everything goes well, the product account can only receive transactions from the company's account, always that does not include any "company.share" mosaic.

Removing a filter
=================

After the company sells the product to the final client, they want to remove the condition that only allowed the company's account to send transactions to the product.

1. Define the account filter modification. Remove from the "allowed list" the company's address.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/FilteringByAddressRemoveFilter.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create an ``AccountPropertyTransaction``, setting the type "AllowAddress" and passing the modification created.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/FilteringByAddressRemoveFilter.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Sign and announce the transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/FilteringByAddressRemoveFilter.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

After the transaction gets confirmed, you should be able to send transactions from any account to the product account.
