:orphan:

.. post:: 8 Aug, 2018
    :category: Block
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

************************
Let’s get into some code
************************

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/blockchain/ListeningNewBlocks.ts
        :language: typescript
        :lines:  21-

    .. viewsource:: ../../resources/examples/java/src/test/java/nem2/guides/examples/blockchain/ListeningNewBlocks.java
        :language: java
        :lines: 33-39

    .. viewsource:: ../../resources/examples/javascript/blockchain/ListeningNewBlocks.js
        :language: javascript
        :lines: 22-

    .. viewsource:: ../../resources/examples/bash/blockchain/ListeningNewBlocks.sh
        :language: bash
        :start-after: #!/bin/sh

.. note:: The :ref:`listener implementation changes <monitoring-transactions-client-side>` when used on the client side (e.g., Angular, React, Vue).
