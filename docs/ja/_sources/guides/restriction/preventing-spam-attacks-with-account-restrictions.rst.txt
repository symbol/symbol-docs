.. post:: 07 May, 2019
    :category: Account Restriction
    :tags: SDK
    :excerpt: 1
    :nocomments:

#################################################
Preventing spam attacks with account restrictions
#################################################

Learn how to add and remove account restrictions.

********
Use case
********

Imagine you are a company using the public chain to certify the quality of your products.

When the quality verification process concludes, an operator sends a :doc:`quality seal <../../concepts/mosaic>` to the product account, which the customers can review by scanning a QR code.
For the convenience of the customers, you only want to **show relevant transactions** and prevent spam from cluttering the product account.

The final customers can review the product mosaics scanning a QR code.
For that reason, the company only wants to show related transactions, avoiding that others spam their products with non-related information.

.. figure:: ../../resources/images/examples/account-restrictions-spam.png
    :align: center
    :width: 550px

    Blocking spam attacks

Thus, you opt to configure the product :doc:`account restrictions <../../concepts/account-restriction>` to only receive transactions that follow a set of conditions.

*************
Prerequisites
*************

- Complete :doc:`sending mosaics and messages between two accounts guide <../transfer/sending-a-transfer-transaction>`.
- Complete :doc:`creating a mosaic guide <../mosaic/creating-a-mosaic>`.
- Complete :doc:`restricting mosaics transfers <restricting-mosaics-transfers>`.
- Create :ref:`accounts <setup-creating-a-test-account>` to represent the product and another one to repesent the company.
- Load the product's account with enough |networkcurrency| to pay for the transactions fees.

*************************
Method #01: Using the SDK
*************************

Blocking transactions by address
================================

An account can decide to receive transactions only from an allowed list of :doc:`addresses <../../concepts/account>`.
Similarly, an account can specify a blocked list of addresses to block transactions from.

.. note:: Allow and block restrictions are mutually exclusive per restriction type. In other words, an account can only be configured to have either an allowed or blocked list per type of restriction.

By default, when there is no restriction set, all the accounts in the network can announce transactions to the stated account.

Returning to our previous example, let us imagine that you want to configure the product account only to accept receiving transactions that come from the company's account.
You might take the following steps to do so:

1. Define the company’s address ``TCWYXK-VYBMO4-NBCUF3-AXKJMX-CGVSYQ-OS7ZG2-TLI`` in a new variable.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountAddressRestrictionAllowList.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountAddressRestrictionAllowList.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create an **AccountRestrictionTransaction**, with restrictionType ``AllowAddress``.
Add to the company’s address from the previous step to the allowed list.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountAddressRestrictionAllowList.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountAddressRestrictionAllowList.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Sign and announce the transaction with the product's account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountAddressRestrictionAllowList.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountAddressRestrictionAllowList.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

Now, if you send a :doc:`TransferTransaction <../transfer/sending-a-transfer-transaction>` from another account, you will get an error since only ``TCWYXK-VYBMO4-NBCUF3-AXKJMX-CGVSYQ-OS7ZG2-TLI`` is allowed to send transactions to the product's account.

Blocking transactions by mosaic id
==================================

Imagine that the account that represents the company owns the following mosaics:

- ``company.share``: represents shares of the company.
- ``company.quality.seal``: represents that the product has passed a quality test.
- ``company.safety.seal``: represents that the product has passed a safety test.

In this case, it might be useful if the product could only receive seals and not company shares.

Thus, you could narrow the type of transactions that the product can receive from the company's account through the use of negation.
Instead of specifically allowing the seals, the product can be set up to block receiving transactions that contain ``company.share``.
This is how it can be done:

1. Define the **AccountRestrictionModification**.
Add the mosaic id you want to block to the blocked list.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountMosaicRestrictionBlockList.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountMosaicRestrictionBlockList.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create an **AccountRestrictionTransaction**, with restrictionType ``BlockMosaic``.
Add to the array the modification created in the previous step.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountMosaicRestrictionBlockList.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountMosaicRestrictionBlockList.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Sign and announce the transaction with the product's account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountMosaicRestrictionBlockList.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountMosaicRestrictionBlockList.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

If the process was successful, the product account can now only receive transactions from the company's account that does not include any ``company.share`` mosaic.

Removing a restriction
======================

After the company sells the product to the final client, they want to remove the condition that only allowed the company's account to send transactions to the product. The account restrictions can be removed as easily as they were set up:

1. Define the **AccountRestrictionModification**.
Remove from the allowed list the company's address.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountAddressRestrictionRemoveRestriction.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountAddressRestrictionRemoveRestriction.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create an **AccountRestrictionTransaction**, setting the type ``AllowAddress``. Add as well the modification created.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountAddressRestrictionRemoveRestriction.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountAddressRestrictionRemoveRestriction.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Sign and announce the transaction with the product's account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountAddressRestrictionRemoveRestriction.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/restriction/AccountAddressRestrictionRemoveRestriction.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

After the transaction gets confirmed, you should be able to send transactions from any account to the product's account again.
