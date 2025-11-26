.. post:: 16 Aug, 2018
    :category: Multisig Account
    :tags: SDK
    :excerpt: 1
    :nocomments:


###########################
Creating a multisig account
###########################

This guide will show you how to setup a joint account.

********
Use case
********

Imagine that Alice and Bob have separate accounts, but they also want to have a shared account to buy groceries.
If one of them goes out shopping, they should be able to transact with using their joint account without requiring explicit authorization from the other person.

This shared account appears in |codename| as **1-of-2 multisig**.
Creating a :doc:`Multisig account <../../concepts/multisig-account>` permits Alice and Bob to share funds in a separate account.
Since the account is configured as a 1-of-2, it's only required the signature from one of them to issue transactions from the new account.

.. figure:: ../../resources//images/examples/multisig-1-of-2.png
    :align: center
    :width: 350px

    1-of-2 multisig account example

*************
Prerequisites
*************

- Complete the :doc:`getting started section <../../getting-started/setup-workstation>`.
- Create a new :ref:`account <setup-creating-a-test-account>` to turn into multisig.
- Load the account with enough |networkcurrency| to pay for transaction fees.
- Create accounts for Alice and Bob.

.. note:: To create create new accounts, follow :ref:`this guide <setup-creating-a-test-account>`.

************************************
Method #01: Using the Desktop Wallet
************************************

1. Log in to the account that you want to convert into a multisig account.

2. Click on the “**Multisig**” tab on the left-side menu.

3. Click on “**Add a cosignatory**” and provide the address or public key of the account you want to add as a cosignatory of the multisig. Click on the “**+**” button.

.. figure:: ../../resources/images/screenshots/create-multisig-2.gif
    :align: center
    :width: 800px

4. Repeat step 3 for each account you want to add as a cosignatory of the multisig. In our example case, we have 2 accounts we want to add as cosignatories: Alice and Bob.

5. Select the number of “**Min. Approval**” and “**Min. Removal**” for the multisig.

6. Click “**Send**”. Review the information on the popup. Provide your wallet password and click “**Confirm**”.

.. figure:: ../../resources/images/screenshots/create-multisig-3.gif
    :align: center
    :width: 800px

7. Log in to an account you selected as a potential cosignatory of the multisig. On the “**Home**” page, click on “**Partial**” transactions. Click on the pending Aggregate Bonded transaction. Provide your wallet password and click “**Confirm**”.

.. figure:: ../../resources/images/screenshots/create-multisig-4.gif
    :align: center
    :width: 800px

8. Repeat step 7 for each account you added as a potential cosignatory for the multisig.

9. Log in to the account being converted to a multisig. When the Aggregate Bonded transaction is complete (confirmed), you can check that it has been converted by going back to the “**Multisig**” page.

.. figure:: ../../resources/images/screenshots/create-multisig-5.png
    :align: center
    :width: 800px

*************************
Method #02: Using the SDK
*************************

1. First, define the accounts that will become cosignatories of the multisig account.
Following our example, these are Alice and Bob addresses.
Then, open the account that will be converted into multisig using its private key.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ConvertingAnAccountToMultisig.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/multisig/ConvertingAnAccountToMultisig.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create a :ref:`multisigaccountmodificationtransaction` to convert the shared account into a multisig account.
Since we want to create a 1-of-2 multisig account, let's set the minimum required signatures to ``1``.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ConvertingAnAccountToMultisig.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/multisig/ConvertingAnAccountToMultisig.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Create an :ref:`aggregatebondedtransaction`, wrapping the **MultisigAccountModificationTransaction** defined in the previous step.
This action is necessary because Alice and Bob must opt-in to become cosignatories of the new multisig account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ConvertingAnAccountToMultisig.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/multisig/ConvertingAnAccountToMultisig.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

4. Sign the **AggregateTransaction** using the private key of the future multisig account.

.. note:: To make the transaction only valid for your network, you will need to pass the first network generation hash. Open :term:`NODE_URL` ``/node/info`` in a new browser tab and copy the ``meta.networkGenerationHash`` value.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ConvertingAnAccountToMultisig.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

    .. viewsource:: ../../resources/examples/typescript/multisig/ConvertingAnAccountToMultisig.js
        :language: javascript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

5. Before sending an **AggregateBondedTransaction**, the future multisig account needs to lock at least ``10`` |networkcurrency|.
This transaction is required to prevent spamming the network.
After the **HashLockTransaction** has been confirmed, announce the AggregateTransaction signed in (4).

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ConvertingAnAccountToMultisig.ts
        :language: typescript
        :start-after:  /* start block 05 */
        :end-before: /* end block 05 */

    .. viewsource:: ../../resources/examples/typescript/multisig/ConvertingAnAccountToMultisig.js
        :language: javascript
        :start-after:  /* start block 05 */
        :end-before: /* end block 05 */

6. :doc:`Cosign the AggregateTransaction <../aggregate/signing-announced-aggregate-bonded-transactions>` with the :ref:`CLI <wallet-cli>` using Alice's account.
Replace the hash ``A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C`` with the AggregateTransaction hash signed in (4).

.. code-block:: bash

    symbol-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile alice

7. :doc:`Cosign the AggregateTransaction <../aggregate/signing-announced-aggregate-bonded-transactions>` with Bob's account.

.. code-block:: bash

    symbol-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile bob

.. _guide-get-multisig-account-info:

8. If everything goes well, the account is now set as multisig, being Alice and Bob accounts their cosignatories.
You can get the list of the multisig accounts where Alice or Bob are cosignatories with the function ``MultisigHttp.getMultisigAccountInfo()``.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/GettingMultisigAccountCosignatories.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/multisig/GettingMultisigAccountCosignatories.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/multisig/GettingMultisigAccountCosignatories.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

Follow :doc:`the next guide <modifying-a-multisig-account-min-approval>` to modify the number of required signatures.
