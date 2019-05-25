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

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAMosaic.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/namespace/LinkingANamespaceToAMosaic.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Announce the alias transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAMosaic.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/namespace/LinkingANamespaceToAMosaic.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

If you want to unlink the alias, change alias action type to ``AliasActionType.Unlink``.

************
What's next?
************

Now you can send transactions using the namespace linked to the mosaic instead of defining the complete mosaicId.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingATransferTransactionMosaicAlias.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SendingATransferTransactionMosaicAlias.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */
