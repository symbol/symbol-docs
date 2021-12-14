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

1. First, check if your account has incoming aggregate transactions that have not been signed.
Use the ``TransactionHttp`` repository to search all the incoming aggregate transactions pending to be signed by your account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/GettingPartialTransactions.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/GettingPartialTransactions.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/GettingPartialTransactions.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

Copy and save the transaction hash you want to cosign with your account.

2. Create a function to cosign any **AggregateBondedTransaction**.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactions.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactions.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/CosigningAggregateBondedTransactions.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

3. Define the transaction hash to cosign and the signer account.
If you want to cosign a transaction involving a multisig account, you should be using the cosignatory account instead.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactions.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactions.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/CosigningAggregateBondedTransactions.java
        :language: java
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

4. Retrieve the complete transaction object from the node using the ``TransactionHttp`` repository.
At this point, you might want to do some extra checks, like verifying the contents of the transaction.
If everything looks ok, cosign the transaction with the signer account.
Finally, announce the cosignature to network with ``transactionHttp.announceAggregateBondedCosignature``.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactions.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactions.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/CosigningAggregateBondedTransactions.java
        :language: java
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

Once all the participants cosign the transaction, the transaction will be included in a block.

*************************
Method #03: Using the CLI
*************************

1. Get all aggregate transactions pending to be cosigned by your account.

.. viewsource:: ../../resources/examples/bash/aggregate/GettingPartialTransactions.sh
    :language: bash
    :start-after: #!/bin/sh

2. Cosign the aggregate bonded transaction. Replace the hash for the transaction hash retrieved from (1).

.. viewsource:: ../../resources/examples/bash/aggregate/CosigningAggregateBondedTransactions.sh
    :language: bash
    :start-after: #!/bin/sh
