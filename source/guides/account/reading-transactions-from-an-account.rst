:orphan:

.. post:: 18 Aug, 2018
    :category: Account
    :excerpt: 1
    :nocomments:

####################################
Reading transactions from an account
####################################

Get the list of :doc:`transactions <../../concepts/transaction>` where an :doc:`account <../../concepts/account>` is involved.

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

In this example, you will fetch the latest confirmed transactions for a given account using the ``accountHttp`` repository.

By default, the SDK provides up to 10 transactions. The page size can be increased up to 100 transactions.

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

.. note:: Get filtered the transactions received (incoming) from the ones sent (outgoing) checking the complete `accountHttp definition <https://nemtech.github.io/nem2-sdk-typescript-javascript/classes/_infrastructure_accounthttp_.accounthttp.html>`_.

***********
What's next
***********

To `get more than 100 transactions <https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/GettingAllConfirmedTransactions.ts>`_,   you will have to make further requests. For each additional call, add to the ``QueryParams`` the optional parameter ``transactionId`` with the latest transaction identifier known returned by the previous request.

.. code-block:: typescript

    new QueryParams(pageSize, transactions[transactions.length - 1].transactionInfo.id))

.. |getting-confirmed-transactions-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/GettingConfirmedTransactions.ts" target="_blank">View Code</a>

.. |getting-confirmed-transactions-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/account/GettingConfirmedTransactions.js" target="_blank">View Code</a>

.. |getting-confirmed-transactions-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/account/GettingConfirmedTransactions.java" target="_blank">View Code</a>

.. |getting-confirmed-transactions-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/account/GettingConfirmedTransactions.sh" target="_blank">View Code</a>


