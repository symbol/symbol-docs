:orphan:

.. post:: 04 March, 2019
    :category: Namespace, Mosaic
    :excerpt: 1
    :nocomments:

###############################
Linking a namespace to a mosaic
###############################

Link a namespace to a mosaic.

*************
Prerequisites
*************

- Have registered one :doc:`namespace <../../concepts/namespace>`
- Have registered one :doc:`mosaic <../../concepts/mosaic>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

*************************
Method #01: Using the SDK
*************************

1. Define the namespace identifier and the mosaic identifier you want to alias.

.. note:: The account signing the transaction must own the namespace and mosaic being aliased.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAMosaic.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/namespace/LinkingANamespaceToAMosaic.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Then, announce the **AliasTransaction** that links the namespace and the mosaic.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAMosaic.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/namespace/LinkingANamespaceToAMosaic.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

.. note:: If you want to unlink the alias, change alias action type to ``AliasActionType.Unlink``.

*************************
Method #02: Using the CLI
*************************

.. viewsource:: ../../resources/examples/bash/namespace/LinkNamespaceMosaic.sh
    :language: bash
    :start-after: #!/bin/sh

.. _sending-a-transfer-transaction-with-an-aliased-mosaic:

************
What's next?
************

Now you can send transactions using the namespace linked to the mosaic instead of defining the complete MosaicId.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionMosaicAlias.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/transfer/SendingATransferTransactionMosaicAlias.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */
