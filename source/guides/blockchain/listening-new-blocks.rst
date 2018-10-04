:orphan:

.. post:: 8 Aug, 2018
    :category: blockchain
    :excerpt: 1
    :nocomments:

#######################
Listening to new blocks
#######################

Get notified when a new :doc:`block <../../concepts/block>` is included.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Text editor or IDE
- NEM2-SDK or CLI

************************
Let’s get into some code
************************

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/blockchain/ListeningNewBlocks.ts
        :caption: |listening-new-blocks-ts|
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/blockchain/ListeningNewBlocks.java
        :caption: |listening-new-blocks-java|
        :language: java
        :lines: 33-39

    .. literalinclude:: ../../resources/examples/javascript/blockchain/ListeningNewBlocks.js
        :caption: |listening-new-blocks-js|
        :language: javascript
        :lines: 22-

    .. literalinclude:: ../../resources/examples/cli/blockchain/ListeningNewBlocks.sh
        :caption: |listening-new-blocks-cli|
        :language: bash
        :start-after: #!/bin/sh

.. |listening-new-blocks-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/blockchain/ListeningNewBlocks.ts" target="_blank">View Code</a>

.. |listening-new-blocks-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/blockchain/ListeningNewBlocks.java" target="_blank">View Code</a>

.. |listening-new-blocks-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/blockchain/ListeningNewBlocks.js" target="_blank">View Code</a>

.. |listening-new-blocks-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/blockchain/ListeningNewBlocks.sh" target="_blank">View Code</a>
