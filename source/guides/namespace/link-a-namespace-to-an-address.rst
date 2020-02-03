:orphan:

.. post:: 04 March, 2019
    :category: Namespace
    :excerpt: 1
    :nocomments:

#################################
Linking a namespace to an address
#################################

Link a namespace to an account.

*************
Prerequisites
*************

- Have registered one :doc:`namespace <../../concepts/namespace>`
- Have one :ref:`account with network currency <setup-creating-a-test-account>`

*************************
Method #01: Using the SDK
*************************

1. Define the namespace identifier and the address you want to alias.

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

Then, announce the **AliasTransaction** that links the namespace and the address.

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

*************************
Method #02: Using the CLI
*************************

.. viewsource:: ../../resources/examples/bash/namespace/LinkNamespaceAddress.sh
    :language: bash
    :start-after: #!/bin/sh

.. _sending-a-transfer-transaction-to-an-aliased-address:

************
What's next?
************

Now you can send transactions to the namespace linked to the account instead of using the complete address.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionAddressAlias.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionAddressAlias.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transfer/SendingATransferTransactionAddressAlias.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */
