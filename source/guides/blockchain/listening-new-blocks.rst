:orphan:

.. post:: 8 Aug, 2018
    :category: blockchain
    :excerpt: 1
    :nocomments:

#######################
Listening to new blocks
#######################

By following this guide you will build a simple application to get notified when a new :doc:`block <../../concepts/block>` is included in the network.

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
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/blockchain/ListeningNewBlocks.java
        :language: java
        :lines: 33-39

    .. literalinclude:: ../../resources/examples/javascript/blockchain/ListeningNewBlocks.js
        :language: javascript
        :lines: 22-

    .. literalinclude:: ../../resources/examples/cli/blockchain/ListeningNewBlocks.sh
        :language: bash
        :start-after: #!/bin/sh
        
