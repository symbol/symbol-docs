:orphan:

.. post:: 16 Aug, 2018
    :category: Block
    :excerpt: 1
    :nocomments:

#########################
Getting a block by height
#########################

Get the :doc:`block <../../concepts/block>` information given a height.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`

************************
Let’s get into some code
************************

What happened in the genesis block? Run the following code to get the first created block header.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/blockchain/GettingBlockByHeight.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/nem2/guides/examples/blockchain/GettingBlockByHeight.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/blockchain/GettingBlockByHeight.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

The following snippet returns the height of the latest block.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/blockchain/GettingBlockchainHeight.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/nem2/guides/examples/blockchain/GettingBlockchainHeight.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/blockchain/GettingBlockchainHeight.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/bash/blockchain/GettingBlockchainHeight.sh
        :language: bash
        :start-after: #!/bin/sh
