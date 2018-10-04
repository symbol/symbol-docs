:orphan:

.. post:: 18 Aug, 2018
    :category: account
    :excerpt: 1
    :nocomments:

####################################
Receiving transactions of an account 
####################################

Get the list of :doc:`transactions <../../concepts/transaction>` where an :doc:`account <../../concepts/account>` is involved.

**********
Background
**********

By default, the SDK provides up to 10 transactions. This parameter can be increased up to 100 transactions.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Text editor or IDE
- NEM2-SDK or CLI
- An account that has received some transaction

************************
Let’s get into some code
************************

In this example, you will fetch confirmed transactions for a given account using ``accountHttp`` repository.

A transaction is confirmed if it is included in a block and validated by the network.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/GettingConfirmedTransactions.ts
        :caption: |getting-confirmed-transactions-ts|
        :language: typescript
        :lines:  21-
    
    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/GettingConfirmedTransactions.java
        :caption: |getting-confirmed-transactions-java|
        :language: java
        :lines: 36-48

    .. literalinclude:: ../../resources/examples/javascript/account/GettingConfirmedTransactions.js
        :caption: |getting-confirmed-transactions-js|
        :language: javascript
        :lines: 26-

    .. literalinclude:: ../../resources/examples/cli/account/GettingConfirmedTransactions.sh
        :caption: |getting-confirmed-transactions-cli|
        :language: bash
        :start-after: #!/bin/sh

You can also retrieve aggregate bonded, unconfirmed, incoming and outgoing transactions for a given account. See available ``accountHttp`` methods `here <https://nemtech.github.io/nem2-sdk-typescript-javascript/classes/_infrastructure_accounthttp_.accounthttp.html>`_.

***********
What's next
***********

Get more than 10 transactions per request.

.. |getting-confirmed-transactions-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/GettingConfirmedTransactions.ts" target="_blank">View Code</a>

.. |getting-confirmed-transactions-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/account/GettingConfirmedTransactions.js" target="_blank">View Code</a>

.. |getting-confirmed-transactions-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/account/GettingConfirmedTransactions.java" target="_blank">View Code</a>

.. |getting-confirmed-transactions-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/account/GettingConfirmedTransactions.sh" target="_blank">View Code</a>


