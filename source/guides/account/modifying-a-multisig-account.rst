:orphan:

.. post:: 17 Aug, 2018
    :category: Multisig Account
    :excerpt: 1
    :nocomments:

############################
Modifying a multisig account
############################

Modify an existing :doc:`multisig account<../../concepts/multisig-account>`.

First, you are going to turn a 1-of-2 multisig account into a 2-of-2. Then, you will add a new cosignatory, becoming a 2-of-3. After removing a cosignatory, you will know how to perform all sort of modifications to multisig accounts.

*************
Prerequisites
*************

- Finish :doc:`converting an account to multisig guide <converting-an-account-to-multisig>`
- Have one multisignature account.
- Know how to :doc:`create accounts <creating-and-opening-an-account>`

**********************
Getting into some code
**********************

.. _guide-modify-a-multisig-account-min-approval:

Editing minApproval
===================

Alice and Bob are cosignatories of the 1-of-2 multisig account. At least one of their account's signatures is required to authorize multisig transactions. In other words, the ``minApproval`` parameter of the multisig is currently set to ``1``.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountIncreaseMinApproval.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */


    .. viewsource:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountIncreaseMinApproval.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

Multisig accounts are editable at the blockchain level. In this case, we want to make both cosignatories required, shifting to a 2-of-2 multisig instead. You can achieve this by increasing ``minApproval`` parameter in one unit.

.. figure:: ../../resources/images/examples/multisig-2-of-2.png
    :align: center
    :width: 300px

    2-of-2 multisig account example


One of the accounts, for example Alice's, announces a :ref:`modify multisig account transaction <modify-multisig-account-transaction>` wrapped in an :ref:`aggregate transaction <aggregate-transaction>`, increasing ``minApprovalDelta``.

1. Create a modify multisig account transaction, increasing minAprovalDelta in one unit.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountIncreaseMinApproval.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountIncreaseMinApproval.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

2. Wrap the modify multisig account transaction under an aggregate transaction, attaching multisig public key as the signer.

An aggregate transaction is *complete* if, before announcing it to the network, all required cosignatories have signed it. If valid, it will be included in a block.

As only one cosignature is required (1-of-2), Alice can sign the transaction and announce it to the network.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountIncreaseMinApproval.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountIncreaseMinApproval.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

Once confirmed, the minApproval value of the multisig will be set to 2, having our 2-of-2 multisig.

.. note:: If you want to decrease the minApproval parameter, going back to a 1-of-2 multisig, set minApprovalDelta with a negative value. In this case ``-1``.

.. _guide-modify-a-multisig-account-add-new-cosignatory:

Adding a new cosignatory
========================

Alice and Bob want to add Carol as a cosignatory of the multisig account to achieve 2-of-3 cosignatures required.

.. figure:: ../../resources/images/examples/multisig-2-of-3.png
    :align: center
    :width: 350px

    2-of-3 multisig account example

1. Create a :ref:`modify multisig account transaction <modify-multisig-account-transaction>` adding Carol as a cosignatory. The multisig account will become a 2-of-3, since you are not increasing the ``minApprovalDelta``.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountAddCosignatory.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create a modify multisig account transaction adding the previous modification.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountAddCosignatory.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3.  Wrap the modify multisig account transaction in an :ref:`aggregate bonded transaction <aggregate-transaction>` and sign it.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountAddCosignatory.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

4. Before sending an aggregate bonded transaction, Alice needs to :ref:`lock <hash-lock-transaction>` at least ``10`` cat.currency. This transaction is required to prevent network spamming and ensure that transactions are cosigned. After the hash lock transaction has been confirmed, announce the aggregate transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

    .. viewsource:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountAddCosignatory.js
        :language: javascript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

.. note:: The :ref:`listener implementation changes <monitoring-transactions-client-side>` when used on the client side (e.g., Angular, React, Vue).

5. :doc:`Cosign the aggregate transaction <../transaction/signing-announced-aggregate-bonded-transactions>` hash with Carols's account. She has to opt-in to become a multisig cosignatory.

.. code-block:: bash

    nem2-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile carol

6. :doc:`Cosign the aggregate transaction <../transaction/signing-announced-aggregate-bonded-transactions>` with Bob's account. The amount of cat.currency locked becomes available again on Alice's account and Carol is added to the multisig.

.. code-block:: bash

    nem2-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile bob

.. _guide-modify-a-multisig-account-removing-a-cosignatory:

Removing a cosignatory
======================

Once you have finished this guide, delete a cosignatory from the multisig. Multisig accounts can be converted again into regular accounts by removing all cosignatories. Make sure you own the multisig private key!

The following code shows how to remove a cosignatory of a 2-of-3 multisig account with ``minRemoval`` set to 1. The multisig modification transaction is wrapped in an aggregate complete, as only one person is required to delete others from the multisig.

.. note:: The minRemoval parameter indicates the number of required signatures to delete someone from the multisig. You can increase or decrease it the same way you :ref:`modify minApproval parameter<guide-modify-a-multisig-account-min-approval>`.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountRemoveCosignatory.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountRemoveCosignatory.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

************
What’s next?
************

Learn more about :doc:`multi-level multisig accounts <creating-a-multi-level-multisig-account>`.
