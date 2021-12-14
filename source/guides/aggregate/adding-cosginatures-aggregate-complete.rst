.. post:: 13 July, 2020
    :category: Aggregate Transaction
    :tags: SDK, CLI
    :excerpt: 1
    :nocomments:

#####################################################
Adding cosignatures to aggregate complete trasactions
#####################################################

This guide will show you how to add cosignatures to an aggregate complete transaction without using the partial cache.

This can be useful for when you are keeping your private keys in an offline device (cold wallet) for security reasons. By signing adding the cosignatures offline, the cosignatories will be able to execute transactions from your cold wallet while keeping their private keys completely safe.
Furthermore, it also allows users to avoid unnecessarily locking their funds in :ref:`aggregate bonded transactions <aggregate-bonded>`.

********
Use case
********

.. figure:: ../../resources/images/examples/aggregate-escrow-1.png
    :align: center
    :width: 450px

    Multi-Asset Escrowed Transactions

We will set up an aggregate complete transaction where Alice (``TDPXWF2H5G7U2NKZRJD47QR4KZPRULPAMQ4O54IK``) will send 100 |networkcurrency| to Bob (``TCHS3AOXFGWGTN2QUUHDCXJ4SBYLIQIPNUPHHA2N``) in return for 1 `collectible` mosaic.

*************
Prerequisites
*************

- Have 2 accounts :ref:`account <setup-creating-a-test-account>`.
- Load the accounts with enough |networkcurrency| to pay for transaction fees.
- One of the accounts must own a mosaic other than the |networkcurrency|.
- Both your offline and online :doc:`workstations <../../getting-started/setup-workstation>` are set up for Symbol-CLI and Symbol-SDK.

****************************************************
Step 1: Construct the aggregate complete transaction
****************************************************

1. Open up a text editor. Then, construct the Aggregate Complete Transaction using Alice's account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/AddingCosignaturesAggregateComplete.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/AddingCosignaturesAggregateComplete.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/AddingCosignaturesAggregateComplete.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

Make sure to place Alice's private key and Bob's public key in the appropriate places.

2. Sign the transaction with Alice's key.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/AddingCosignaturesAggregateComplete.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/AddingCosignaturesAggregateComplete.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/AddingCosignaturesAggregateComplete.java
        :language: java
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Save the TypeScript file, then run it on your terminal.
Copy the returned payload and send it over to Bob.

**********************************
Step 2: Add the second cosignature
**********************************

1. Bob cosigns the payload obtained from the previous step.

.. example-code::

  .. viewsource:: ../../resources/examples/typescript/aggregate/AddingCosignaturesAggregateComplete.ts
      :language: typescript
      :start-after:  /* start block 03 */
      :end-before: /* end block 03 */

  .. viewsource:: ../../resources/examples/typescript/aggregate/AddingCosignaturesAggregateComplete.js
      :language: javascript
      :start-after:  /* start block 03 */
      :end-before: /* end block 03 */

  .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/AddingCosignaturesAggregateComplete.java
      :language: java
      :start-after:  /* start block 03 */
      :end-before: /* end block 03 */


2. Bob runs the code snippet in the terminal and obtains the transaction signature and the parent hash.
Finally, he shares the information back with Alice.

***************************************************
Step 3: Announce the Aggregate Complete Transaction
***************************************************

Using Bob's public key, cosignature transaction hash, and signature, recreate the transaction and announce it to the network as complete.

.. example-code::

  .. viewsource:: ../../resources/examples/typescript/aggregate/AddingCosignaturesAggregateComplete.ts
      :language: typescript
      :start-after:  /* start block 04 */
      :end-before: /* end block 04 */

  .. viewsource:: ../../resources/examples/typescript/aggregate/AddingCosignaturesAggregateComplete.js
      :language: javascript
      :start-after:  /* start block 04 */
      :end-before: /* end block 04 */

  .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/AddingCosignaturesAggregateComplete.java
      :language: java
      :start-after:  /* start block 04 */
      :end-before: /* end block 04 */


If successful, Alice will have sent 100 |networkcurrency| to Bob and received 1 ``collectible`` mosaic in return.
