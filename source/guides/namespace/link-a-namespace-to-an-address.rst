:orphan:

.. post:: 04 March, 2019
    :category: Namespace, Account
    :excerpt: 1
    :nocomments:

#################################
Linking a namespace to an address
#################################

Link a :doc:`namespace <../../concepts/namespace>` to an :doc:`account <../../concepts/account>`.

*************
Prerequisites
*************

- Have registered one :doc:`namespace <../../concepts/namespace>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

************************
Let’s get into some code
************************

An account can link a registered :doc:`name <../../concepts/namespace>` (namespace or subnamespace) with an :doc:`account <../../concepts/account>`.

1. Define the namespaceId and the address you want to link.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAnAddress.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/namespace/LinkingANamespaceToAnAddress.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Announce the alias transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAnAddress.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/namespace/LinkingANamespaceToAnAddress.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

If you want to unlink the alias, change alias action type to ``AliasActionType.Unlink``.

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
