:orphan:

.. post:: 18 Aug, 2018
    :category: Account
    :excerpt: 1
    :nocomments:

####################################
Reading transactions from an account
####################################

Get the list of transactions where an account is involved.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`

**********************
Getting into some code
**********************

Use the `accountHttp <https://nemtech.github.io/nem2-sdk-typescript-javascript/classes/_infrastructure_accounthttp_.accounthttp.html>`_  repository to get the latest confirmed transactions for a given account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/GettingConfirmedTransactions.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/account/GettingConfirmedTransactions.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/bash/account/GettingConfirmedTransactions.sh
        :language: bash
        :start-after: #!/bin/sh

.. note:: By default, the SDK provides up to 10 transactions. The page size can be increased up to 100 transactions.

To `get more than 100 transactions <https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/GettingAllConfirmedTransactions.ts>`_,  you will have to make further requests. For each additional call, add to the ``QueryParams`` the optional parameter ``transactionId`` with the latest transaction identifier known returned by the previous request.

.. code-block:: typescript

    new QueryParams(pageSize, transactions[transactions.length - 1].transactionInfo.id))
