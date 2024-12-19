.. post:: 17 Aug, 2018
    :category: Multisig Account
    :tags: SDK
    :excerpt: 1
    :nocomments:

#########################################
Adding a new signer to a multisig account
#########################################

This guide will show you how to add a new cosignatory to a multisig account.

.. _guide-modify-a-multisig-account-add-new-cosignatory:

********
Use case
********

Imagine that Alice and Bob want to **add Carol**, a third participant, as a cosignatory of a multisig **2-of-2** multisig account.
However, they don't want to increase the number of signatures needed to accept transactions, so the new account will require only **2-of-3** cosignatures to transact.

.. figure:: ../../resources/images/examples/multisig-2-of-3.png
    :align: center
    :width: 400px

    2-of-3 multisig account example

*************
Prerequisites
*************

- Complete :doc:`converting an account to multisig <creating-a-multisig-account>` guide.

************************************
Method #01: Using the Desktop Wallet
************************************

1. Log in to an account that is a cosignatory of the multisig account. This could be Alice or Bob's account.

2. Click on “**Multisig**” on the left-side menu.

3. Select the multisig wallet you want to modify from the dropdown menu from the top field. This will convert the “**Operation Type**” to “**Modifying account multisig properties**”.

4. Click on “**Add a cosignatory**” and provide the address or public key of the account you want to add as a new signer to the multisig. Click “**Send**”. Review the information on the popup. Enter your wallet password and click “**Confirm**”.

.. figure:: ../../resources/images/screenshots/add-signer-1.gif
    :align: center
    :width: 800px

5. If the multisig account has the "**minimum approval**" set to a number greater than 1, log in to another cosignatory account and :doc:`cosign the transaction <../aggregate/signing-announced-aggregate-bonded-transactions>`. Repeat this step until the minimum approval number is satisfied.

.. figure:: ../../resources/images/screenshots/add-signer-2.gif
    :align: center
    :width: 800px

6. You can check that the new signer has been added by navigating to the “Multisig” page. The new signer should be listed under “**Cosignatories**”.

.. figure:: ../../resources/images/screenshots/add-signer-3.png
    :align: center
    :width: 800px

*************************
Method #02: Using the SDK
*************************

1. Open a new file. Define the public keys of the multisig account and the new account to be added into new variables.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountAddCosignatory.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create a **MultisigAccountModificationTransaction**, adding the new participant as a cosignatory.

.. note:: Following the previous example, the multisig account will become a **2-of-3**, since we are adding a new cosignatory but not increasing the ``minApprovalDelta``.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountAddCosignatory.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3.  Wrap the **MultisigAccountModificationTransaction** in an :ref:`aggregate-transaction`.  Sign it with a cosignatory of the original multisig account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountAddCosignatory.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

4. Before sending an **AggregateBondedTransaction**, an account must lock at least ``10`` |networkcurrency|.
This transaction is required to prevent spamming the network.
After the HashLockTransaction has been confirmed, announce the AggregateTransaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountAddCosignatory.js
        :language: javascript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

5. The new account must opt-in first in order to become a cosignatory of the multisig account.
:doc:`Cosign the AggregateTransaction hash <../aggregate/signing-announced-aggregate-bonded-transactions>`  with the account to be added to the multisig.

.. code-block:: bash

    symbol-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile carol

6. :doc:`Cosign the AggregateTransaction <../aggregate/signing-announced-aggregate-bonded-transactions>` with all other multisig account participants required to reach quorum.
The amount of |networkcurrency| locked becomes available again on the account that sent the HashLockTransaction, and the new participant is added to the multisig.

.. code-block:: bash

    symbol-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile bob

Follow :doc:`the next guide <removing-a-signer-from-a-multisig-account>` to remove a cosignatory from a multisig account.
