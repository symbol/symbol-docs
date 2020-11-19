.. post:: 04 March, 2019
    :category: Namespace
    :tags: wallet, SDK, CLI
    :excerpt: 1
    :nocomments:

#################################
Linking a namespace to an address
#################################

Alias an address with a namespace so that others can reference the account in a more friendly way when issuing transactions.

*************
Prerequisites
*************

- Complete the :doc:`getting started section <../../getting-started/setup-workstation>`.
- Create a new :ref:`account <setup-creating-a-test-account>`.
- Load the account with enough |networkcurrency| to pay for transaction fees.
- Register a :doc:`namespace <../../concepts/namespace>` with the account.

************************************
Method #01: Using the Desktop Wallet
************************************

1. Click on "**Namespaces**" on the left-side menu.

.. figure:: ../../resources/images/screenshots/desktop-link-address-1.gif
    :align: center
    :width: 800px

2. Click on the edit icon of the namespace you desire to link to an account. Select "**Link an address**" as the alias type.  Enter the address of the account you want to link to the namespace. Click "**Send**".

.. figure:: ../../resources/images/screenshots/desktop-link-address-2.gif
    :align: center
    :width: 800px

3. Verify the information on the next page. Enter your wallet password. Click on "**Confirm**".

4. If you linked the namespace to your desktop wallet account, you can check by going to the "**Account**" page and checking the "**Alias**".

.. figure:: ../../resources/images/screenshots/desktop-link-address-3.gif
    :align: center
    :width: 800px

*************************
Method #02: Using the SDK
*************************

1. Open a new file and define the namespace identifier and the address you want to alias.

.. note:: The account signing the transaction must own the namespace.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAnAddress.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAnAddress.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Then, announce the **AliasTransaction** that links the namespace and the address.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAnAddress.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAnAddress.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

.. note:: If you want to unlink the alias, change alias action type to ``AliasActionType.Unlink``.

.. _sending-a-transfer-transaction-to-an-aliased-address:

3. Now you can send transactions to the namespace linked to the account instead of using the complete address.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionAddressAlias.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionAddressAlias.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/transfer/SendingATransferTransactionAddressAlias.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

*************************
Method #03: Using the CLI
*************************

To link a namespace and an address, open a terminal window and run the following command.
Replace ``TCHBDE-NCLKEB-ILBPWP-3JPB2X-NY64OE-7PYHHE-32I`` with the account's address and ``foo`` with the namespace name to be linked.

.. note:: The account signing the transaction must own the namespace.

.. viewsource:: ../../resources/examples/bash/namespace/LinkNamespaceAddress.sh
    :language: bash
    :start-after: #!/bin/sh
