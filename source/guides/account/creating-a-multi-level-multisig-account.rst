:orphan:

.. post:: 18 Aug, 2018
    :category: Multisig Account
    :excerpt: 1
    :nocomments:

#######################################
Creating a multi-level multisig account
#######################################

Create a multi-level multisig account.

**********
Background
**********

:doc:`Multisig accounts <../../concepts/multisig-account>` can have as cosignatories other multisig accounts and add “AND/OR” logic to multi-signature transactions. Following this guide you will create the following **3-level multisig account**.

.. figure:: ../../resources/images/examples/mlma-complex-1.png
    :align: center
    :width: 750px

    Three-level multisig account example

*************
Prerequisites
*************

- Finish :doc:`converting an account to multisig guide <converting-an-account-to-multisig>`
- Know how to :doc:`create accounts <creating-and-opening-an-account>`

**********************
Getting into some code
**********************

1. Define the **multisig account #2**.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/CreatingAMultilevelMultisigAccount.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/account/CreatingAMultilevelMultisigAccount.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Define the **multisig account #3**.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/CreatingAMultilevelMultisigAccount.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/account/CreatingAMultilevelMultisigAccount.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Define the **multisig account #1**.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/CreatingAMultilevelMultisigAccount.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/javascript/account/CreatingAMultilevelMultisigAccount.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

4. Announce the transactions together using an :ref:`AggregateBondedTransaction <aggregate-transaction>`. The **account #1** must has to **lock 10 cat.currency** to announce the transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/CreatingAMultilevelMultisigAccount.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

    .. viewsource:: ../../resources/examples/javascript/account/CreatingAMultilevelMultisigAccount.js
        :language: javascript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

5. The cosignatories must opt-in to become cosignatories. :doc:`Cosign the announced AggregateTransaction <../transaction/signing-announced-aggregate-bonded-transactions>` with the accounts **#5**, **#6**, **#7**, **#8,** and **#4**.

.. code-block:: bash

    nem2-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile <account>

************
What's next?
************

If the **account #5** initiates an **AggregateBondedTransaction** involving the **account #1**, which accounts should cosign the transaction?

.. figure:: ../../resources/images/examples/mlma-complex-2.png
    :align: center
    :width: 750px

    Sending an AggregateBondedTransaction from a MLMA
