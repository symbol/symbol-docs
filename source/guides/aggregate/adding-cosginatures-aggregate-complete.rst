:orphan:

.. post:: 13 July, 2020
    :category: Aggregate Transaction
    :tags: SDK, CLI
    :excerpt: 1
    :nocomments:

#############################################################
Adding Cosignatures to Aggregate Complete Trasactions Offline
#############################################################

This guide will show you how to add cosignatures to an aggregate complete transaction while offline, then use an online device to announce the transaction.

This can be useful for when you are keeping your private keys in an offline device (cold wallet) for security reasons. By signing adding the cosignatures offline, the cosignatories will be able to execute transactions from your cold wallet while keeping their private keys completely safe.

In the this guide, we will set up an aggregate complete transaction where Alice (``TDPXWF2H5G7U2NKZRJD47QR4KZPRULPAMQ4O54IK``) will send 100 |networkcurrency| from Bob (``TCHS3AOXFGWGTN2QUUHDCXJ4SBYLIQIPNUPHHA2N``) in return for 1 `Collectible` mosaic.

*************
Prerequisites
*************

- Have 2 accounts :ref:`account <setup-creating-a-test-account>`.
- Load the accounts with enough |networkcurrency| to pay for transaction fees.
- One of the accounts must own a mosaic other than the |networkcurrency|.
- Both your offline and online :doc:`workstations <../../getting-started/setup-workstation.rst>` are set up for Symbol-CLI and Symbol-SDK.

****************************************************
Step 1: Construct the Aggregate Complete Transaction
****************************************************

Open up a text editor. Using Alice's account, construct the Aggregate Complete Transaction:

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/AddingCosignaturesAggregateComplete.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

Make sure to place Alice's private key and Bob's public key in the appropriate places.

.. note:: The mosaic that Bob sends Alice can be any non-|networkcurrency| mosaic.

**************************************
Step 2: Obtain the Transaction Payload
**************************************

Sign the transaction with Alice's key:

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/AddingCosignaturesAggregateComplete2.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

Save the typescript file, then run it on your terminal. Copy the returned payload and send it over to Bob.

.. note:: the generation hash can be obtained by typing your `node url` + `node/info`

**********************************
Step 3: Add the Second Cosignature
**********************************

Open a text editor on Bob's offline device. Using the payload obtained from step #2, add Bob's cosignature.

.. example-code::

  .. viewsource:: ../../resources/examples/typescript/aggregate/AddingCosignaturesAggregateComplete3.ts
      :language: typescript
      :start-after:  /* start block 01 */
      :end-before: /* end block 01 */

Make sure to place Bob's private key in the appropriate place.

Run the typescript file in the terminal and obtain the transaction signature and the parent hash. Share the information back with Alice.

***************************************************
Step 4: Announce the Aggregate Complete Transaction
***************************************************

Using the information from Step #3, recreate the transaction and announce it to the network as complete:

.. example-code::

  .. viewsource:: ../../resources/examples/typescript/aggregate/AddingCosignaturesAggregateComplete4.ts
      :language: typescript
      :start-after:  /* start block 01 */
      :end-before: /* end block 01 */

If successful, Alice will have sent 100 |networkcurrency| to Bob and received 1 'Collectible' mosaic in return.
