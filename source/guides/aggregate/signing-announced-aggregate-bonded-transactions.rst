:orphan:

.. post:: 18 Aug, 2018
    :category: Aggregate Transaction
    :tags: SDK, CLI
    :excerpt: 1
    :nocomments:

#######################################
Cosigning aggregate bonded transactions
#######################################

Cosign :ref:`aggregate <aggregate-bonded>` transactions pending to be signed.

*************
Prerequisites
*************

This guide assumes that you have received an aggregate transaction. 
You can follow the guide :doc:`creating an escrow contract<creating-an-escrow-contract-with-aggregate-bonded-transaction>` to announce an aggregate transaction.

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

2. Retrieve all the complete transactions object pending to be signed by your account using the ``TransactionHttp`` repository.
At this point, you might want to do some extra checks, like verifying the contents of the transaction.

.. note:: To fetch aggregate bonded transactions that must be signed by multisig cosignatories, refer to the multisig public key instead. See :ref:`how to get multisig accounts where an account is cosignatory<guide-get-multisig-account-info>`.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactions.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactions.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. If everything looks ok, cosign the transaction with the signer account.  
Finally, announce the cosignature to network with ``transactionHttp.announceAggregateBondedCosignature``.

Once all the participants cosign the transaction, the transaction will be included in a block.

*************************
Method #03: Using the CLI
*************************

.. viewsource:: ../../resources/examples/bash/aggregate/CosigningAggregateBondedTransactions.sh
    :language: bash
    :start-after: #!/bin/sh
