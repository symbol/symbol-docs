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

    .. literalinclude:: ../../resources/examples/typescript/blockchain/GettingBlockByHeight.ts
        :caption: |getting-block-by-height-ts|
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/blockchain/GettingBlockByHeight.java
        :caption: |getting-block-by-height-java|
        :language: java
        :lines: 34-41

    .. literalinclude:: ../../resources/examples/javascript/blockchain/GettingBlockByHeight.js
        :caption: |getting-block-by-height-js|
        :language: javascript
        :lines: 23-

The following snippet returns the height of the latest block.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/blockchain/GettingBlockchainHeight.ts
        :caption: |getting-blockchain-height-ts|
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/blockchain/GettingBlockchainHeight.java
        :caption: |getting-blockchain-height-java|
        :language: java
        :lines: 33-37

    .. literalinclude:: ../../resources/examples/javascript/blockchain/GettingBlockchainHeight.js
        :caption: |getting-blockchain-height-js|
        :language: javascript
        :lines: 23-

    .. literalinclude:: ../../resources/examples/cli/blockchain/GettingBlockchainHeight.sh
        :caption: |getting-blockchain-height-cli|
        :language: bash
        :start-after: #!/bin/sh

.. |getting-block-by-height-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/blockchain/GettingBlockByHeight.ts" target="_blank">View Code</a>

.. |getting-block-by-height-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/blockchain/GettingBlockByHeight.java" target="_blank">View Code</a>

.. |getting-block-by-height-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/blockchain/GettingBlockByHeight.js" target="_blank">View Code</a>

.. |getting-blockchain-height-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/blockchain/GettingBlockchainHeight.ts" target="_blank">View Code</a>

.. |getting-blockchain-height-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/blockchain/GettingBlockchainHeight.java" target="_blank">View Code</a>

.. |getting-blockchain-height-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/blockchain/GettingBlockchainHeight.js" target="_blank">View Code</a>

.. |getting-blockchain-height-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/blockchain/GettingBlockchainHeight.sh" target="_blank">View Code</a>
