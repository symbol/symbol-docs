:orphan:

.. post:: 04 March, 2019
    :category: Namespace
    :tags: SDK, CLI
    :excerpt: 1
    :nocomments:

###############################
Linking a namespace to a mosaic
###############################

Link a namespace to a mosaic.

*************
Prerequisites
*************

- Complete the :doc:`getting started section <../../getting-started/setup-workstation>`.
- Create a new :ref:`account <setup-creating-a-test-account>`.
- Load the account with enough |networkcurrency| to pay for transaction fees.
- Create a :doc:`mosaic <../../concepts/mosaic>` with the account.
- Register a :doc:`namespace <../../concepts/namespace>` with the account.

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

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAMosaic.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Then, announce the **AliasTransaction** that links the namespace and the mosaic.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAMosaic.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/namespace/LinkingANamespaceToAMosaic.js
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

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionMosaicAlias.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/transfer/SendingATransferTransactionMosaicAlias.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */
