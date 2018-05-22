#######################
Cross-Chain Transaction
#######################

.. warning:: The configuration presented is NOT intended to be used on the public network. These are the parameters used for the Catapult Testnet version (MIJIN_TEST).

.. _secret-lock-transaction:

***********************
Secret lock transaction
***********************

Use secret lock transaction to send mosaics to a recipient once an account discovers an attached secret message, known as *proof*.

Once announced, the specified mosaics are locked at blockchain level using the *hashed secret* message.

Funds are unlocked and transferred when an account announces a  valid :ref:`Secret Proof Transaction <secret-proof-transaction>`. The account should demonstrate that knows the *proof* that unlocks the transaction. That means applying ``hashing algorithm`` to ``proof`` and obtaining hashed ``secret`` message.

If the transaction duration is reached and not proved, the locked amount is returned to the initiator of the secret lock transaction.

.. figure:: ../resources/images/guides-transactions-atomic-cross-chain-swap.png
    :align: center

    Atomic cross-chain trading between public and private network

Secret lock and proof transactions enable :doc:`atomic cross-chain trading <../guides/transaction/using-secret-lock-transaction-for-atomic-cross-chain-swap>`, without the necessity of trusting a third party.

    **Mosaic**

    Locked mosaic.

    **Duration**

    The duration for the funds to be released or returned.

    **Hash Type**

    Hash algorithm used, with which secret is generated.

    **Secret**

    The proof hashed.

    **Recipient**

    The address who will receive the funds once unlocked.

Based on `Bitcoin Atomic Cross Chain Trading <https://en.bitcoin.it/wiki/Atomic_cross-chain_trading>`_.

.. _secret-proof-transaction:

************************
Secret proof transaction
************************

Secret proof transaction is used to unlock :ref:`secret lock transactions <secret-lock-transaction>`.

To unlock a secret lock transaction, the account should demonstrate that knows the *proof* that unlocks the transaction.

    **Hash Type**

    Hash algorithm used, to check that proof hashed equals secret.

    **Secret**

    The proof hashed.

    **Proof**

    The proof seed. to be confirmed before unlocking funds.