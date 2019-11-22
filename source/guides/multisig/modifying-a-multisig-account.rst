:orphan:

.. post:: 17 Aug, 2018
    :category: Multisig Account
    :excerpt: 1
    :nocomments:

############################
Modifying a multisig account
############################

Modify an existing multisig account.

First, you are going to turn a 1-of-2 :doc:`multisig account <../../concepts/multisig-account>` into a 2-of-2. Then, you will **add a new cosignatory**, transforming the account into a 2-of-3 contract. Finally, **after removing a cosignatory**, you will know how to perform all sorts of modifications to multisig accounts.

*************
Prerequisites
*************

- Finish :doc:`converting an account to multisig guide <converting-an-account-to-multisig>`
- Know how to :doc:`create accounts <../account/creating-and-opening-an-account>`

**********************
Getting into some code
**********************

.. _guide-modify-a-multisig-account-min-approval:

Editing minApproval
===================

Alice and Bob are cosignatories of a 1-of-2 multisig account. This means that at least one of their account's signatures is required to authorize multisig transactions. In other words, we can say that the ``minApproval`` parameter of the multisig is currently set to 1.

In this case, we want to make both cosignatories required, shifting to a **2-of-2 multisig** instead. To achieve this by increasing the **minApproval parameter**, we are going in one unit.

.. figure:: ../../resources/images/examples/multisig-2-of-2.png
    :align: center
    :width: 300px

    2-of-2 multisig account example

One of the accounts, for example Alice's, will announce a :ref:`MultisigAccountModificationTransaction <multisig-account-modification-transaction>` to increase ``minApprovalDelta``.

1. First, define Alice's account as the cosignatory. Then, set the multisig account, using its private key.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountIncreaseMinApproval.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Define a **MultisigAccountModificationTransaction** to increase the ``minAprovalDelta`` in one unit.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountIncreaseMinApproval.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Wrap the **MultisigAccountModificationTransaction** in an **AggregateTransaction**, attaching the multisig public key as the signer.

An AggregateTransaction is *complete* if, before announcing it to the network, all required cosignatories have signed it. If valid, it will be included in a block. As only one cosignature is required (1-of-2), Alice can sign the transaction and announce it to the network.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountIncreaseMinApproval.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

Once confirmed, the ``minApproval`` value of the multisig will be set to 2, having our **2-of-2** multisig.

.. note:: If you want to decrease the ``minApproval`` parameter, set ``minApprovalDelta`` with a negative value. For example, to reduce the number of required signers in one unit, you will have to set ``-1``.

.. _guide-modify-a-multisig-account-add-new-cosignatory:

Adding a new cosignatory
========================

Alice and Bob want to **add Carol**, a third participant, as a co-signatory of the multisig account. However, they only want to require **2-of-3** cosignatures in order to get transactions accepted.

.. figure:: ../../resources/images/examples/multisig-2-of-3.png
    :align: center
    :width: 350px

    2-of-3 multisig account example

1. Define the multisig account public key in a new variable. Do the same with Carol's public key.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create a **MultisigAccountModificationTransaction**, adding Carol as a cosignatory. The multisig account will become a **2-of-3**, since we are adding a new cosignatory but not increasing the ``minApprovalDelta``.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3.  Wrap the **MultisigAccountModificationTransaction** in an :ref:`AggregateBondedTransaction <aggregate-transaction>` and sign it with Alice's or Bob's accounts.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

4. Before sending an **AggregateBondedTransaction**, Alice or Bob need to **lock at least 10 cat.currency**. This transaction is required to prevent spamming the network. After the HashLockTransaction has been confirmed, announce the AggregateTransaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

5. :doc:`Cosign the AggregateTransaction hash<../aggregate/signing-announced-aggregate-bonded-transactions>`  with Carols's account. She has to opt-in first in order to become a  cosignatory of the multisig account.

.. code-block:: bash

    nem2-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile carol

6. :doc:`Cosign the AggregateTransaction <../aggregate/signing-announced-aggregate-bonded-transactions>` with Alice's or Bob's account. The amount of cat.currency locked becomes available again on Alice's account, and Carol is added to the multisig.

.. code-block:: bash

    nem2-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile bob

.. _guide-modify-a-multisig-account-removing-a-cosignatory:

Removing a cosignatory
======================

Once you have added Carol, let's try to **delete a cosignatory** from the multisig. The following code shows how to **remove a cosignatory** from the 2-of-3 multisig account with ``minRemoval`` set to 1.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountRemoveCosignatory.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

The **minRemoval parameter** indicates the number of required signatures to delete an account from the multisig. You can increase or decrease it the same way you :ref:`modify minApproval parameter <guide-modify-a-multisig-account-min-approval>`.

This time, the multisig modification transaction is wrapped in an **AggregateCompleteTransaction**, as only one account is required to delete others from the multisig.

************
What’s next?
************

Learn more about :doc:`multi-level multisig accounts <creating-a-multi-level-multisig-account>`.
