.. post:: 16 Aug, 2018
    :category: Block
    :tags: SDK, CLI
    :excerpt: 1
    :nocomments:

#########################
Getting a block by height
#########################

Get the block information given a height.

*************
Prerequisites
*************

- Complete the :doc:`getting started section <../../getting-started/setup-workstation>`.

*************************
Method #01: Using the SDK
*************************

What happened in the genesis block? Run the following code to get the first block header recorded on the blockchain.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/blockchain/GettingBlockByHeight.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/blockchain/GettingBlockByHeight.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/blockchain/GettingBlockByHeight.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

The following snippet returns the height of the latest block.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/blockchain/GettingBlockchainHeight.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/blockchain/GettingBlockchainHeight.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

*************************
Method #02: Using the CLI
*************************

Get the block header:

.. viewsource:: ../../resources/examples/bash/blockchain/GettingBlockHeader.sh
    :language: bash
    :start-after: #!/bin/sh

Get the height of the blockchain:

.. viewsource:: ../../resources/examples/bash/blockchain/GettingBlockchainHeight.sh
    :language: bash
    :start-after: #!/bin/sh
