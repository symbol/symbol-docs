:orphan:

.. post:: 16 Aug, 2018
    :category: blockchain
    :excerpt: 1
    :nocomments:

#######################
Getting block by height
#######################

A simple program to get :doc:`block <../../concepts/block>` information given a height.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Text editor or IDE
- NEM2-SDK or CLI

************************
Let’s get into some code
************************

Are you curious to see what happened in genesis block? Run the following code to find it out.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/blockchain/GettingBlockByHeight.ts
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/blockchain/GettingBlockByHeight.java
        :language: java
        :lines: 34-41

    .. literalinclude:: ../../resources/examples/javascript/blockchain/GettingBlockByHeight.js
        :language: javascript
        :lines: 23-

Here you have a snippet to check the last block number.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/blockchain/GettingBlockchainHeight.ts
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/blockchain/GettingBlockchainHeight.java
        :language: java
        :lines: 33-37

    .. literalinclude:: ../../resources/examples/javascript/blockchain/GettingBlockchainHeight.js
        :language: javascript
        :lines: 23-

    .. literalinclude:: ../../resources/examples/cli/blockchain/GettingBlockchainHeight.sh
        :language: bash
        :start-after: #!/bin/sh
