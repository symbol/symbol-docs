:orphan:

.. post:: 18 Aug, 2018
    :category: Aggregate Transaction
    :tags: SDK, CLI
    :excerpt: 1
    :nocomments:

#######################################
Cosigning aggregate bonded transactions
#######################################

How to cosign aggregate bonded transactions.

*************
Prerequisites
*************

- Complete :doc:`creating an escrow contract<creating-an-escrow-contract-with-aggregate-bonded-transaction>` guide.

************************************
Method #01: Using the Desktop Wallet
************************************

1. Log in to a cosignatory account that has an impending aggregate bonded transaction waiting to be signed.

2. At the home page, click on the “partial” tab. Click on the listed transaction and enter your wallet password to sign the transaction.

.. figure:: ../../resources/images/screenshots/add-signer-2.gif
    :align: center
    :width: 800px

*************************
Method #02: Using the SDK
*************************

1. Create a function to cosign any **AggregateBondedTransaction**.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactions.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactions.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Fetch all aggregate bonded transactions pending to be signed by your account.

.. note:: To fetch aggregate bonded transactions that must be signed by multisig cosignatories, refer to the multisig public key instead. See :ref:`how to get multisig accounts where an account is cosignatory<guide-get-multisig-account-info>`.

3. For each transaction, check if you have not already signed it. Cosign each pending transaction using the previously created function.

4. Announce ``CosignatureSignedTransaction`` to the network using the ``TransactionHttp`` repository.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactions.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactions.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

*************************
Method #03: Using the CLI
*************************

.. viewsource:: ../../resources/examples/bash/aggregate/CosigningAggregateBondedTransactions.sh
    :language: bash
    :start-after: #!/bin/sh
