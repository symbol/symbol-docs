:orphan:

.. post:: 16 Aug, 2018
    :category: Multisig Account
    :excerpt: 1
    :nocomments:


#################################
Converting an account to multisig
#################################

Create a 1-of-2 :doc:`multisig account<../../concepts/multisig-account>`.

**********
Background
**********

Alice and Bob live together and have separate :doc:`accounts <../../concepts/account>`. They also have a shared account used to buy groceries. If Bob is out shopping, he can buy groceries for both himself and Alice.

This shared account appears in NEM as 1-of-2 multisig, meaning that one cosignatory needs to cosign the transaction to be included in a block.

.. figure:: ../../resources//images/examples/multisig-1-of-2.png
    :align: center
    :width: 350px

    1-of-2 multisig account example

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`
- Create :doc:`two accounts <creating-and-opening-an-account>`

**********************
Getting into some code
**********************

1. Define who will be the cosignatories of the multisig account: Alice and Bob addresses. Then, open the account that will be converted into multisig by providing its private key.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */


2. Create a :ref:`modify multisig account transaction <modify-multisig-account-transaction>`  to convert the account into a multisig account. As they want to create a 1-of-2 multisig account, set the minimum signatures required to 1.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Create an :ref:`aggregate bonded transaction <aggregate-transaction>`, wrapping the modify multisig account transaction. This is necessary since Alice and Bob must opt-in to become cosignatories of the new multisig account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

4. Sign the aggregate transaction using the private key of the multisig account.

.. note:: To make the transaction only valid for your network, include the first block generation hash. Open ``http://localhost:3000/block/1`` in a new tab and copy the ``meta.generationHash`` value.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

    .. viewsource:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :language: javascript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

5. Before sending an aggregate bonded transaction, the future multisig account needs to :ref:`lock <hash-lock-transaction>` at least ``10`` cat.currency. This transaction is required to prevent network spamming and ensure that the inner transactions are cosigned. After the hash lock transaction has been confirmed, announce the aggregate transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts
        :language: typescript
        :start-after:  /* start block 05 */
        :end-before: /* end block 05 */

    .. viewsource:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :language: javascript
        :start-after:  /* start block 05 */
        :end-before: /* end block 05 */


6. :doc:`Cosign the aggregate transaction <../transaction/signing-announced-aggregate-bonded-transactions>` with Alice's account.

.. code-block:: bash

    nem2-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile alice

7. :doc:`Cosign the aggregate transaction <../transaction/signing-announced-aggregate-bonded-transactions>` with Bob's account.

.. code-block:: bash

    nem2-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile bob

.. _guide-get-multisig-account-info:

8. If everything goes well, the account is now multisig, being Alice and Bob cosignatories. You can get the list of the multisig accounts where Alice or Bob are cosignatories using ``getMultisigAccountInfo`` function.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/GettingMultisigAccountCosignatories.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/account/GettingMultisigAccountCosignatories.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

************
What's next?
************

Alice an Bob wants to send transactions from the multisig only when both agree. Modify the multisig account you just created, converting it into a 2-of-2 multisig following :doc:`modifying a multisig account <modifying-a-multisig-account>` guide.
