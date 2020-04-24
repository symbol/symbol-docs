:orphan:

.. post:: 16 Aug, 2018
    :category: Multisig Account
    :tags: SDK
    :excerpt: 1
    :nocomments:


###########################
Creating a multisig account 
###########################

This guide will show you how to setup a joint account.

**********
Background
**********

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

*************************
Method #01: Using the SDK
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

2. Create a :ref:`MultisigAccountModificationTransaction <multisig-account-modification-transaction>` to convert the shared account into a multisig account.
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

3. Create an :ref:`AggregateBondedTransaction <aggregate-transaction>`, wrapping the **MultisigAccountModificationTransaction** defined in the previous step.
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

.. note:: To make the transaction only valid for your network, you will need to pass the first block generation hash. Open ``nodeUrl + '/block/1'`` in a new browser tab and copy the ``meta.generationHash`` value.

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
