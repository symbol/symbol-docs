:orphan:

.. post:: 04 March, 2019
    :category: Namespace, Account
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
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

**********************
Getting into some code
**********************

To make **long addresses** easier to use, an account can link a registered :doc:`name <../../concepts/namespace>` to an :doc:`account <../../concepts/account>`.

Before starting, you must have registered a :doc:`namespace <../../concepts/namespace>` first. If you already have registered a namespace, define the namespace identifier and the address you want to alias.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAnAddress.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/namespace/LinkingANamespaceToAnAddress.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

Then, announce the **AliasTransaction** that links the namespace and the address.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAnAddress.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/namespace/LinkingANamespaceToAnAddress.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/bash/namespace/LinkNamespaceAddress.sh
        :language: bash
        :start-after: #!/bin/sh

If you want to unlink the alias, change alias action type to ``AliasActionType.Unlink``.

.. _sending-a-transfer-transaction-to-an-aliased-address:

************
What's next?
************

Now you can send transactions to the namespace linked to the account instead of using the complete address.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingATransferTransactionAddressAlias.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SendingATransferTransactionAddressAlias.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */
