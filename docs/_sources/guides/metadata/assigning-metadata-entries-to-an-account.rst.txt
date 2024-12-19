.. post:: 29 Sep, 2019
    :category: Metadata
    :tags: SDK, CLI
    :excerpt: 1
    :nocomments:

################################
Assigning metadata to an account
################################

Add custom data to an account.

********
Use case
********

Bob works as a digital notary that stamp accounts on |codename|'s public blockchain.
When a customer comes to Bob to notarize a document, he checks the authentication of the customer's documents then tags the customer's account with the digitized document as metadata.

Alice is a recent graduate who wants her educational certificate accredited to her |codename| account to avoid the hassle of repeatedly providing verification of her degree.
So she goes to Bob and provides him with proof of her degree.
Once Alice pays a fee, Bob verifies the authenticity and stamps Alice's account with metadata that signifies her degree.

In this tutorial, you are going to implement a program to allow Bob tag accounts issuing :doc:`metadata transactions <../../concepts/metadata>`.

.. figure:: ../../resources/images/examples/metadata-certificate.png
    :align: center
    :width: 450px

*************
Prerequisites
*************

- Complete the :doc:`getting started section <../../getting-started/setup-workstation>`.
- Create :ref:`accounts <setup-creating-a-test-account>` for Alice and Bob.
- Load Bob's account with enough |networkcurrency| to pay for transaction fees.

********************
Creating the account
********************

1. Create an account for Alice, using the :ref:`CLI tool <wallet-cli>`. Remember to use a suitable :term:`NODE_URL`.

.. code-block:: bash

    symbol-cli account generate --save

    Enter network type (MAIN_NET, TEST_NET): TEST_NET
    Do you want to save it? [y/n]: y
    Enter a Symbol Node URL. (Example: http://localhost:3000): <NODE_URL>
    Insert profile name: alice

*************************
Method #01: Using the SDK
*************************

1. Bob has to pick a **key** to store Alice's certificate.
Imagine that ``CERT`` is a common key to store university degrees.
Define this key as a new variable.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToAnAccount.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToAnAccount.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Alice's degree brings the identifier ``123456`` for her certificate.
Help Bob to assign this value to the key defined in the previous step.
To achieve so, define an :ref:`accountmetadatatransaction` linking Alice account, the key (CERT), and the associated value (123456).

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToAnAccount.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToAnAccount.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. To avoid spamming the account with invalid metadata keys, all metadata is attached only with the consent of the account owner through Aggregate Transactions.
Thus, Alice will have to **opt-in** if she wants the metadata entry assigned to its account.
Wrap the **AccountMetadataTransaction** inside an :ref:`AggregateBondedTransaction <aggregate-bonded>` and sign the transaction using Bob's account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToAnAccount.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToAnAccount.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

4. Before sending an aggregate transaction to the network, Bob has to lock ``10`` |networkcurrency|.
Define a new :ref:`hashlocktransaction` and sign it with Bob's account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToAnAccount.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToAnAccount.js
        :language: javascript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

.. note:: Bob will receive the locked funds back if Alice cosigns the aggregate during the next ``480`` blocks.

5. Announce the **HashLockTransaction**.
Monitor the network until the transaction gets confirmed, and then announce the **AggregateTransaction** containing the **AccountMetadataTransaction**.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToAnAccount.ts
        :language: typescript
        :start-after:  /* start block 05 */
        :end-before: /* end block 05 */

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToAnAccount.js
        :language: javascript
        :start-after:  /* start block 05 */
        :end-before: /* end block 05 */

6. Once the transaction gets confirmed, cosign the hash obtained in the fourth step using Alice's profile.

.. code-block:: bash

    symbol-cli transaction cosign --hash <transaction-hash> --profile alice

7. If everything goes well, now Alice :doc:`has assigned the metadata value <getting-metadata-entries-attached-to-an-account>` ``{bobPublicKey, CERT, 123456}``, which can be read as "Alice account has the certificate number 123456 and it was verified by Bob".
