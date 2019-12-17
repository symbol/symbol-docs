:orphan:

.. post:: 12 Jun, 2019
    :category: Transfer Transaction
    :excerpt: 1
    :nocomments:

############################
Sending an encrypted message
############################

Send an encrypted message that only can be read by the recipient account.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Finish :doc:`sending mosaics and messages between two accounts guide <sending-a-transfer-transaction>`
- Have one :ref:`account with network currency <setup-creating-a-test-account>`

**********
Background
**********

Imagine that Alice wants to timestamp a sensitive message to send to an account representing her academic certificate.

Alice knows that sending a TransferTransaction with a **plain message** to the public network will make the content of the message publicly available.

Thus, Alice sends an **encrypted message** that is only readable by herself and those with access to the academic certificate.

***********************
Setting up the use case
***********************

Create an account for Alice, and another for the certificate  using ``nem2-cli``.

.. code-block:: bash

    nem2-cli account generate --save

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): TEST_NET
    Do you want to save it? [y/n]: y
    Introduce NEM2 Node URL. (Example: http://localhost:3000): http://api-harvest-20.us-west-1.nemtech.network:3000
    Insert profile name (blank means default and it could overwrite the previous profile): alice

.. code-block:: bash

    nem2-cli account generate --save

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): TEST_NET
    Do you want to save it? [y/n]: y
    Introduce NEM2 Node URL. (Example: http://localhost:3000): http://api-harvest-20.us-west-1.nemtech.network:3000
    Insert profile name (blank means default and it could overwrite the previous profile): certificate


*************************
Method #01: Using the SDK
*************************

1. Create an **encrypted message** for the certificate, signing it with Alice's account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionEncryptedMessage.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionEncryptedMessage.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Attach the encrypted message to a **TransferTransaction**, setting the certificate address as the recipient.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionEncryptedMessage.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionEncryptedMessage.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Sign the transaction with Alice's account.

.. note:: To make the transaction only valid for your network, include the first block generation hash. Open ``nodeUrl + '/block/1'`` in a new browser tab and copy the ``meta.generationHash`` value.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionEncryptedMessage.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionEncryptedMessage.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

4. Once signed, :doc:`announce the transaction <../../concepts/transaction>` to the network.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionEncryptedMessage.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionEncryptedMessage.js
        :language: javascript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

5. After the transaction gets confirmed, fetch it using the transaction hash output from (3). You can now **decrypt the message** using either the certificate account or address account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transfer/DecodingAnEncryptedMessage.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/transfer/DecodingAnEncryptedMessage.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

If you managed to read the message, try to decrypt it using another unrelated account to ensure that only the defined participants can read the encrypted content.
