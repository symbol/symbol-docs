.. post:: 18 Aug, 2018
    :category: Account
    :tags: SDK, CLI
    :excerpt: 1
    :nocomments:

####################################
Reading transactions from an account
####################################

Get the complete list of transactions involving an account.

*************
Prerequisites
*************

- Complete the :doc:`getting started section <../../getting-started/setup-workstation>`.

*************************
Method #01: Using the SDK
*************************

1. Open a new file and define the account address.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/GettingConfirmedTransactions.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/account/GettingConfirmedTransactions.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/account/GettingConfirmedTransactions.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Define a new ``TransactionHttp`` repository and the search criteria.
In this example, we will retrieve all account-related transactions with at least one confirmation, but you could also query the unconfirmed and partial collections.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/GettingConfirmedTransactions.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/account/GettingConfirmedTransactions.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/account/GettingConfirmedTransactions.java
        :language: java
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

.. note: Find all the possible `SearchCriteria options <https://symbol.github.io/symbol-sdk-typescript-javascript/0.20.3/interfaces/_infrastructure_searchcriteria_transactionsearchcriteria_.transactionsearchcriteria.html>`_ values in the SDK reference. If ``address`` filter is not set, all transactions present in the network are returned.

3. The API returns pages with up to 100 transactions.
The `page object <https://symbol.github.io/symbol-sdk-typescript-javascript/0.20.3/classes/_infrastructure_page_.page.html>`_ contains meta information about the total amount of transactions and pages available.

To get more transactions, you will have to make further requests iteratively.
For each extra call, increase the ``pageNumber`` by one unit.

.. code-block:: typescript

    const searchCriteria = {group: TransactionGroup.Confirmed, address, pageNumber: 2, pageSize: 100};

4. Since the transaction collection might grow while paginating, it's advised to set the first transaction you want to start pagination.
Set an ``offset`` value with the first transaction internal identifier.

.. code-block:: typescript

    const searchCriteria = {group: TransactionGroup.Confirmed, address, pageNumber: 2, pageSize: 100, id:85BBEA6CC462B244};

*************************
Method #02: Using the CLI
*************************

Open a terminal window and run the following command.

Replace ``TCHBDE-NCLKEB-ILBPWP-3JPB2X-NY64OE-7PYHHE-32I`` with the address you want to query.

.. viewsource:: ../../resources/examples/bash/account/GettingConfirmedTransactions.sh
    :language: bash
    :start-after: #!/bin/sh
