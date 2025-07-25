.. post:: 7 Apr, 2021
    :category: Network
    :excerpt: 1
    :nocomments:

########################
Non-custodial node setup
########################

How to **relinquish control of a node's main account to an external account**, so that the external account's private key is never required in the node setup process.

This is useful, for example, for service providers (also known as *staking* service providers or *hosting* service providers) that work in a **non-custodial** manner. This is, **customers** hire the **service provider** to setup nodes for them and have any node rewards sent to their main accounts, without ever sending their account keys to the service provider.

This guide is intended for the service provider setting up a node on behalf of their customer.

There are **many mechanisms** to achieve this in |codename|. This page explains the **simplest one**, assuming that the customer is not tech-savvy (and therefore prefers not to use command-line tools like ``symbol-cli``), and that **the customer's key are not allowed on an online machine**.

.. note::
   The process is even simpler if the customer's key are allowed to be online.

   A guide will soon be added to this page describing this scenario.

**In summary**, once the node is completely setup, full control of the node's **main account** will be transferred to the customer account (called **external account**) by turning main into a :doc:`../../concepts/multisig-account`:

- The service provider will prepare a transaction for offline signing and send it to the customer.
- The customer signs the transaction using their Wallet from an offline machine, and returns the signature.
- The service provider announces the transaction.

*************
Prerequisites
*************

On the **Node** machine:

- **Have a running Symbol node**, set up using the :doc:`running-a-secure-symbol-node` guide.

On the **Configuration** machine:

- **Have symbol-cli installed**. This has already been installed in the :doc:`running-a-secure-symbol-node` guide.
- **Have a symbol-cli profile for the node's main account**. This too has already been done in the guide.

  Make sure the correct profile is the default one (use ``symbol-cli profile setdefault`` or add the ``--profile`` parameter to all commands below).

On the **Customer**'s machine:

- **Have the** :ref:`Symbol Desktop Wallet <wallet-desktop>` **installed** and configured with the customer's account (**external account**).

***********************
Prepare the transaction
***********************

So far, the node's main account is a regular account. A :ref:`multisigaccountmodificationtransaction` will be announced that will turn it into a :doc:`../../concepts/multisig-account` with a single cosignatory: the **external account**.

This means that **any operation** on the main account will **require the signature** of the external account.

This transaction will be prepared by the service provider using ``symbol-cli`` and sent to the customer for signing.

Notes on this transaction:

- The ``--max-fee 1000000`` parameter means that **1 XYM** will be paid for the transaction. Feel free to use a different number after reading the :doc:`fees documentation <../../concepts/fees>`.
- The default transaction deadline in ``symbol-cli`` is **2 hours**. Use the ``--deadline`` parameter if you need more time to get the customer's signature.

Run this from **the configuration machine**:

.. code-block:: bash

   symbol-cli transaction multisigmodification --max-fee 1000000 \
      --mode normal --min-removal-delta 1 --min-approval-delta 1 \
      --action Add --aggregate-type AGGREGATE_COMPLETE \
      --cosignatory-addresses ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●

Use the **external account address** as cosignatory and do **not** announce the transaction:

.. code-block:: symbol-cli

   ✔ Enter your wallet password: … *********
   ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
   │                                               AGGREGATE_COMPLETE                                                │
   ├──────────────────────────────────────────────┬──────────────────────────────────────────────────────────────────┤
   │ Max fee:                                     │ 1,000,000                                                        │
   ├──────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────┤
   │ Network type:                                │ TEST_NET                                                         │
   ├──────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────┤
   │ Deadline:                                    │ 2021-03-27 14:51:01.099                                          │
   ├──────────────────────────────────────────────┴──────────────────────────────────────────────────────────────────┤
   │                            Inner transaction 1 of 1 - MULTISIG_ACCOUNT_MODIFICATION                             │
   ├──────────────────────────────────────────────┬──────────────────────────────────────────────────────────────────┤
   │ [Inner tx. 1 of 1] Min approval delta:       │ 1                                                                │
   ├──────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────┤
   │ [Inner tx. 1 of 1] Min removal delta:        │ 1                                                                │
   ├──────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────┤
   │ [Inner tx. 1 of 1] Address addition (1 / 1): │ TAJ3DW-DCRWBU-V6CXBQ-TNAAKH-UPRPQ6-I2QW7V-7JA                    │
   ├──────────────────────────────────────────────┴──────────────────────────────────────────────────────────────────┤
   │                                                Signature details                                                │
   ├──────────────────────────────────────────────┬──────────────────────────────────────────────────────────────────┤
   │ Payload:                                     │ F800000000000000FAE63B1603A8FA30BF5F8A7E5C7906349AAA89591BD20651 │
   │                                              │ 013704F4E03894206D6543339716A8E4391E53873F8F43BEC10D9706F74764C7 │
   │                                              │ 940C07A756F4950ACC6D13D64FB9BF69B72846C3FE99127D48C3293F473D528F │
   │                                              │ B902600CB7DA1033000000000198414140420F0000000000EB39311C0A000000 │
   │                                              │ 5B8F6FEBA2C4D0C7E1C084DA1E828B68C46EE7EE247811BE3DBDCE913E40E027 │
   │                                              │ 50000000000000005000000000000000CC6D13D64FB9BF69B72846C3FE99127D │
   │                                              │ 48C3293F473D528FB902600CB7DA103300000000019855410101010000000000 │
   │                                              │ 9813B1D8628D834AF8570C26D00147A3E2F8791A85BF5FA4                 │
   ├──────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────┤
   │ Hash:                                        │ 13241107ACC87B4F7B047C335856326D86AC0F4FF2C0F52CCA1D7FC4E6491CB8 │
   ├──────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────┤
   │ Signer:                                      │ CC6D13D64FB9BF69B72846C3FE99127D48C3293F473D528FB902600CB7DA1033 │
   └──────────────────────────────────────────────┴──────────────────────────────────────────────────────────────────┘
   ✔ Do you want to announce this transaction? … no

Select all the text in the ``Payload`` box and paste it into a new text file named ``payload.txt``. **Remove all spaces and other decorations** to obtain a single line **containing only** numbers and uppercase letters:

.. code-block:: text

   F800000000000000FAE63B1603A8FA30BF5F8A7E5C7906349AAA89591BD20651013704F4E03894206D6543339716A8E4391E53873F8F43BEC10D9706F74764C7940C07A756F4950ACC6D13D64FB9BF69B72846C3FE99127D48C3293F473D528FB902600CB7DA1033000000000198414140420F0000000000EB39311C0A0000005B8F6FEBA2C4D0C7E1C084DA1E828B68C46EE7EE247811BE3DBDCE913E40E02750000000000000005000000000000000CC6D13D64FB9BF69B72846C3FE99127D48C3293F473D528FB902600CB7DA1033000000000198554101010100000000009813B1D8628D834AF8570C26D00147A3E2F8791A85BF5FA4

This payload **cannot be announced** without a **signature from the external account**, since it has been added as a cosignatory.

************************
Send payload to customer
************************

Send ``payload.txt`` to the customer, as a plain text file.

********************
Sign the transaction
********************

The customer uses their :ref:`Symbol Desktop Wallet <wallet-desktop>` to create a signature for the received payload:

- Open the Desktop Wallet and click on ``Go to offline transactions`` on the top right corner.
- Select the ``Cosign transaction`` tab.
- Paste the full payload into the big box labeled ``Paste the transaction payload``.
- Click on ``Import payload``.
- Select the ``Profile name`` and the **external** account (in the ``From:`` box).
- Enter the wallet's ``Password`` and click on ``Confirm``.
- A QR code and a long line of text will be obtained, looking similar to this one:

  .. code-block:: json

     {"parentHash":"13241107ACC87B4F7B047C335856326D86AC0F4FF2C0F52CCA1D7FC4E6491CB8","signature":"1D8FD3A815C45B9FFCCD48FF9DE24FAD172D373E889D25F3005FDAA0F87DB70AB9ABD2ECB79E467577FCE49B760729706247B24479CB32A88A4A1C1974D4220A","signerPublicKey":"7F71566C57A8E5B03EADBA28E4CA057428DDB37C766604B2827BC2D79BB195B8","version":{"lower":0,"higher":0}}

- Copy the whole line of text (for example by triple-clicking on it) and paste it into a new text file named ``signature.txt``.

**********************************
Send signature to service provider
**********************************

Send ``signature.txt`` back to the service provider, as a plain text file.

********************
Announce transaction
********************

Announce the multisig modification transaction from **any online machine** that has installed ``symbol-cli`` and has an **announcer profile** (as explained in :doc:`running-a-secure-symbol-node`):

.. code-block:: symbol-cli

   symbol-cli transaction payload --sync --announce --profile C
   ? Enter the transaction payload: F8000000000...
   SUCCESS Transaction loaded:
   ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
   │                                      AGGREGATE_COMPLETE                                      │
   ├──────────────────────────────────────────────┬───────────────────────────────────────────────┤
   │ Max fee:                                     │ 1,000,000                                     │
   ├──────────────────────────────────────────────┼───────────────────────────────────────────────┤
   │ Network type:                                │ TEST_NET                                      │
   ├──────────────────────────────────────────────┼───────────────────────────────────────────────┤
   │ Deadline:                                    │ 2021-03-27 14:51:01.099                       │
   ├──────────────────────────────────────────────┼───────────────────────────────────────────────┤
   │ Signer:                                      │ TBGPYD-CO35V2-AMOYEJ-LEM44H-372M3I-6RWVFY-QCY │
   ├──────────────────────────────────────────────┴───────────────────────────────────────────────┤
   │                   Inner transaction 1 of 1 - MULTISIG_ACCOUNT_MODIFICATION                   │
   ├──────────────────────────────────────────────┬───────────────────────────────────────────────┤
   │ [Inner tx. 1 of 1] Min approval delta:       │ 1                                             │
   ├──────────────────────────────────────────────┼───────────────────────────────────────────────┤
   │ [Inner tx. 1 of 1] Min removal delta:        │ 1                                             │
   ├──────────────────────────────────────────────┼───────────────────────────────────────────────┤
   │ [Inner tx. 1 of 1] Address addition (1 / 1): │ TAJ3DW-DCRWBU-V6CXBQ-TNAAKH-UPRPQ6-I2QW7V-7JA │
   └──────────────────────────────────────────────┴───────────────────────────────────────────────┘
   ? Cosignature JSON array in square brackets (Enter to skip): [{"parentHash"...

- When prompted for the transaction payload, paste the contents of ``payload.txt`` (the long line of hexadecimal characters).
- When prompted for the cosignature, paste the contents of ``signature.txt`` (the long line of JSON text that the customer sent back), **BUT ENCLOSE IT IN SQUARE BRACKETS**.

  This is, the cosignature should start with ``[`` and end with ``]``.

After a few seconds you should get:

.. code-block:: symbol-cli

   ...
   SUCCESS Transaction announced
   SUCCESS Transaction confirmed

From this point onwards, no operation can be performed on the node's **main** account without authorization from the **external** account, which is controlled by the customer.

The customer can perform operations on the **main** account using the :ref:`Symbol Desktop Wallet <wallet-desktop>` and its **multisig** facilities.
