:orphan:

.. post:: 01 Oct, 2019
    :category: Metadata, Account
    :excerpt: 1
    :nocomments:

################################
Assigning metadata to an account
################################

Add custom data to an account.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

**********
Background
**********

Bob works as a digital notary that **stamp accounts** on the NEM blockchain. When a customer comes to Bob to notarize a document, he checks the authentication of the customer's documents then **tags the customer's account** with the digitized document as metadata.

In this tutorial, you are going to implement a program to allow Bob tag accounts issuing :doc:`metadata transactions <../../concepts/metadata>` .

**********************
Getting into some code
**********************

Alice is a recent graduate who wants her educational certificate accredited to her NEM :doc:`account <../../concepts/account>` to avoid the hassle of repeatedly providing verification of her degree. So she goes to Bob and provides him with proof of her degree. Once Alice pays a fee, Bob verifies the authenticity and stamps Alice's account with metadata that signifies her degree.

.. figure:: ../../resources/images/examples/metadata-certificate.png
    :align: center
    :width: 400px

1. Create an account for Alice, using the ``nem2-cli``.

.. code-block:: bash

    nem2-cli account generate --save

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): MIJIN_TEST
    Do you want to save it? [y/n]: y
    Introduce NEM 2 Node URL. (Example: http://localhost:3000): http://localhost:3000
    Insert profile name (blank means default and it could overwrite the previous profile): alice

2. Bob has to pick a **key** to store Alice's certificate. Imagine that ``CERT`` is a common key to store university degrees. Define this key as a new variable.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToAnAccount.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

3. Alice's degree brings the identifier ``123456`` for her certificate. Help Bob to **assign this value to the key** defined in the previous step. To achieve so, define an :ref:`AccountMetadataTransaction <account-metadata-transaction>` linking Alice account, the key (CERT), and the associated value (123456).

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToAnAccount.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

4. To avoid spamming the account with invalid metadata keys, all metadata is attached only with the consent of the account owner through Aggregate Transactions. Thus, Alice will have to **opt-in** if she wants the metadata entry assigned to its account. Wrap the **AccountMetadataTransaction** inside an :ref:`AggregateBondedTransaction <aggregate-bonded-transaction>` and sign the transaction using Bob's account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToAnAccount.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

5. Before sending an aggregate transaction to the network, Bob has to lock  ``10 cat.currency``. Define a new :ref:`HashLockTransaction <hash-lock-transaction>` and sign it with Bob's account, locking the amount of cat.currency required to announce the aggregate transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToAnAccount.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

.. note:: Bob will receive the locked funds back if Alice cosigns the aggregate during the next ``480`` blocks.

6. Announce the **HashLockTransaction**. Monitor the network until the transaction gets confirmed, and then announce the **AggregateTransaction** containing the **AccountMetadataTransaction**.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToAnAccount.ts
        :language: typescript
        :start-after:  /* start block 05 */
        :end-before: /* end block 05 */

7. Once the transaction gets confirmed, cosign the hash obtained in the fourth step using Alice's profile.

.. code-block:: bash

    nem2-cli transaction cosign --hash <transaction-hash> --profile alice

8. If everything goes well, now Alice has assigned the metadata value ``{bobPublicKey, CERT, 123456}``, which can be read as "Alice account has the certificate number 123456 and it was verified by Bob".
