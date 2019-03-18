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

    .. literalinclude:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAnAddress.ts
        :caption: |linking-a-namespace-to-an-address-ts|
        :language: typescript
        :lines:  31-36

    .. literalinclude:: ../../resources/examples/javascript/namespace/LinkingANamespaceToAnAddress.js
        :caption: |linking-a-namespace-to-an-address-js|
        :language: javascript
        :lines: 31-36


2. Announce the alias transaction.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAnAddress.ts
        :caption: |linking-a-namespace-to-an-address-ts|
        :language: typescript
        :lines:  39-

    .. literalinclude:: ../../resources/examples/javascript/namespace/LinkingANamespaceToAnAddress.js
        :caption: |linking-a-namespace-to-an-address-js|
        :language: javascript
        :lines: 39-


If you want to unlink the alias, change alias action type to ``AliasActionType.Unlink``.

************
What's next?
************

Now you can send transactions to the namespace linked to the account instead of using the complete address.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingATransferTransactionAddressAlias.ts
        :caption: |sending-a-transfer-transaction-address-alias-ts|
        :language: typescript
        :lines:  33-40

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingATransferTransactionAddressAlias.js
        :caption: |sending-a-transfer-transaction-address-alias-js|
        :language: javascript
        :lines:  31-38

.. |linking-a-namespace-to-an-address-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/namespace/LinkingANamespaceToAnAddress.ts" target="_blank">View Code</a>

.. |linking-a-namespace-to-an-address-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/namespace/LinkingANamespaceToAnAddress.js" target="_blank">View Code</a>

.. |sending-a-transfer-transaction-address-alias-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/SendingATransferTransactionAddressAlias.ts" target="_blank">View Code</a>

.. |sending-a-transfer-transaction-address-alias-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/transaction/SendingATransferTransactionAddressAlias.js" target="_blank">View Code</a>
