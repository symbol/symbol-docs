:orphan:

.. post:: 12 Jun, 2019
    :category: Transfer Transaction
    :excerpt: 1
    :nocomments:

############################
Sending an encrypted message
############################

Send an encrypted message that only can be read by the recipient account.

#############
Prerequisites
#############

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Finish :doc:`sending a transfer transaction guide <sending-a-transfer-transaction>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

**********
Background
**********

Alice wants to timestamp a message on the blockchain. However, Alice knows that sending a transfer transaction to the public network will make the content of the message publicly available.

We decide to use cryptography to make the message only readable by Alice and the recipient address of the transaction, in this case, an account that represents an academic certificate.

NEM uses Bouncy Castle's AES block cipher implementation in `CBC mode <https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#CBC>`_ to encrypt and decrypt messages.

************************
Let’s get into some code
************************

1. Create an account for Alice, and another for the certificate  using ``nem2-cli``:

.. code-block:: bash

    nem2-cli account generate --save

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): MIJIN_TEST
    Do you want to save it? [y/n]: y
    Introduce NEM 2 Node URL. (Example: http://localhost:3000): http://localhost:3000
    Insert profile name (blank means default and it could overwrite the previous profile): alice

.. code-block:: bash

    nem2-cli account generate --save

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): MIJIN_TEST
    Do you want to save it? [y/n]: y
    Introduce NEM 2 Node URL. (Example: http://localhost:3000): http://localhost:3000
    Insert profile name (blank means default and it could overwrite the previous profile): certificate


2. Create an encrypted message for the certificate, signing it with Alice's account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingATransferTransactionEncryptedMessage.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */


3. Attach the encrypted message to a transfer transaction, setting the certificate address as the recipient.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingATransferTransactionEncryptedMessage.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */


.. note:: NEM mainly works with absolute amounts. To get an absolute amount, multiply the amount of assets you want to send by 10\ :sup:`divisibility`.  For example, if the mosaic has :doc:`divisibility <../mosaic/getting-mosaic-information>` 2, to send 10 units (relative) you should define 1000 (absolute) instead.

4. Sign the transaction with Alice's account.

.. note:: To make the transaction only valid for your network, include the first block generation hash. Open ``http://localhost:3000/block/1`` in a new tab and copy the ``meta.generationHash`` value.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingATransferTransactionEncryptedMessage.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

5. Once signed, :doc:`announce the transaction <../../concepts/transaction>` to the network.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingATransferTransactionEncryptedMessage.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

6. After the transaction gets confirmed, fetch it using the transaction hash output from (3). You can now decrypt the message using either the certificate account or address account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/DecodingAnEncryptedMessage.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

If you managed to read the message, try to decrypt it using another account to ensure that only the defined participants can read the encrypted content.
