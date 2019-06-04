:orphan:

.. post:: 14 Aug, 2018
    :category: Aggregate Transaction, Multisig Account
    :excerpt: 1
    :nocomments:

###############################################
Signing announced aggregate bonded transactions
###############################################

This guide will show you how to cosign aggregate bonded transactions that require your account's cosignature.

*************
Prerequisites
*************

- Finish :doc:`creating an escrow with aggregate bonded transaction guide <creating-an-escrow-with-aggregate-bonded-transaction>`
- Have received an aggregate bonded transaction
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

************************
Let’s get into some code
************************

You have announced an :ref:`aggregate bonded transaction <aggregate-transaction>`, but all required cosigners have not signed it yet.

1. Create a function to cosign any aggregate bonded transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactions.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SigningAnnouncedAggregateBondedTransactions.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Fetch all aggregate bonded transactions pending to be signed by your account.

.. note:: To fetch aggregate bonded transactions that must be signed by multisig cosignatories, refer to the multisig public key instead. See :ref:`how to get multisig accounts where an account is cosignatory<guide-get-multisig-account-info>`.

3. For each transaction, check if you have not already signed it. Cosign each pending transaction using the previously created function.

4. Announce ``CosignatureSignedTransaction`` to the network using the ``TransactionHttp`` repository.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactions.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SigningAnnouncedAggregateBondedTransactions.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/bash/transaction/SigningAnnouncedAggregateBondedTransactions.sh
        :language: bash
        :lines:  3
