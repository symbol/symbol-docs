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

**********************
Getting into some code
**********************

To make **mosaics** easier to use and organize them, an account can link a registered :doc:`name <../../concepts/namespace>` to any :doc:`mosaic <../../concepts/mosaic>` it has created.

Before starting, you must have registered a :doc:`namespace <../../concepts/namespace>` first. If you already have registered a namespace, define the namespace identifier and the mosaic identifier you want to alias.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAMosaic.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/namespace/LinkingANamespaceToAMosaic.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

Then, announce the **AliasTransaction** that links the namespace and the mosaic.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAMosaic.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/namespace/LinkingANamespaceToAMosaic.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/bash/namespace/LinkNamespaceMosaic.sh
        :language: bash
        :start-after: #!/bin/sh

If you want to unlink the alias, change alias action type to ``AliasActionType.Unlink``.

.. _sending-a-transfer-transaction-with-an-aliased-mosaic:

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
