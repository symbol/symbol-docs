:orphan:

.. post:: 04 March, 2019
    :category: Namespace, Mosaic
    :excerpt: 1
    :nocomments:

###############################
Linking a namespace to a mosaic
###############################

Link a :doc:`namespace <../../concepts/namespace>` to a :doc:`mosaic <../../concepts/mosaic>`.

*************
Prerequisites
*************

- Have registered one :doc:`namespace <../../concepts/namespace>`
- Have registered one :doc:`mosaic <../../concepts/mosaic>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

************************
Let’s get into some code
************************

An account can link a registered :doc:`name <../../concepts/namespace>` (namespace or subnamespace) with a :doc:`mosaic <../../concepts/mosaic>`.

1. Define the namespaceId and the address you want to link.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAMosaic.ts
        :caption: |linking-a-namespace-to-a-mosaic-ts|
        :language: typescript
        :lines:  31-36

    .. literalinclude:: ../../resources/examples/javascript/namespace/LinkingANamespaceToAMosaic.js
        :caption: |linking-a-namespace-to-a-mosaic-js|
        :language: javascript
        :lines: 31-36

2. Announce the alias transaction.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAMosaic.ts
        :caption: |linking-a-namespace-to-a-mosaic-ts|
        :language: typescript
        :lines:  39-

    .. literalinclude:: ../../resources/examples/javascript/namespace/LinkingANamespaceToAMosaic.js
        :caption: |linking-a-namespace-to-a-mosaic-js|
        :language: javascript
        :lines: 39-

If you want to unlink the alias, change alias action type to ``AliasActionType.Unlink``.

************
What's next?
************

Now you can send transactions using the namespace linked to the mosaic instead of defining the complete mosaicId.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingATransferTransactionMosaicAlias.ts
        :caption: |sending-a-transfer-transaction-mosaic-alias-ts|
        :language: typescript
        :lines:  35-42

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingATransferTransactionMosaicAlias.js
        :caption: |sending-a-transfer-transaction-mosaic-alias-js|
        :language: javascript
        :lines:  33-39


.. |linking-a-namespace-to-a-mosaic-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/namespace/LinkingANamespaceToAMosaic.ts" target="_blank">View Code</a>

.. |linking-a-namespace-to-a-mosaic-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/namespace/LinkingANamespaceToAMosaic.js" target="_blank">View Code</a>

.. |sending-a-transfer-transaction-mosaic-alias-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/SendingATransferTransactionMosaicAlias.ts" target="_blank">View Code</a>

.. |sending-a-transfer-transaction-mosaic-alias-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/transaction/SendingATransferTransactionMosaicAlias.js" target="_blank">View Code</a>
