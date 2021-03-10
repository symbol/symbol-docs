#########################################
Getting your node ready for Symbol launch
#########################################

This guide shows the steps required to have your node **ready for action**, on |codename|'s launch day. This is important for node owners wanting to benefit from some of the :doc:`Reward Programs <../concepts/reward-programs>`.

If you are not planning to run **your own Symbol node**, or do not need to have it running **the day Symbol launches**, you do not need to worry about this guide.

************
Introduction
************

**A beginning is a very delicate time**. The first block in the |codename| blockchain (the **Nemesis** block) is handcrafted but the following blocks are **produced by the nodes in the network**. This means that the moment the network launches there must be enough :ref:`Harvesting Nodes <peer-node>` present to keep block creation flowing.

NEM Group provides a few nodes to bootstrap the network, but it's critical that community-run nodes are added quickly afterwards to ensure **network resilience and independence**.

This guide explains:

- How to enroll in the different :doc:`Reward Programs <../concepts/reward-programs>`, created to **incentivize nodes** to come online as soon as possible.

- How to configure your node so that it **starts harvesting as quickly as possible** when |codename|'s network launches.

Snapshot and launch
===================

As you should be well aware by now, |codename|'s launch will happen in two phases.

1. **Snapshot**: When the NIS1 chain reaches block height 3'105'500 a **snapshot** of the contents of all NIS1 accounts will be taken. `This is expected to happen on 12 March 2021, at around 03:50 UTC <https://nem.io/#symbol-countdown>`__.

2. **Launch**: Afterwards, on March 15th (exact time to be determined), the new |codename| network will **launch** meaning that the nodes managed by NEM Group will be brought online and they will start adding blocks to the shinny new |codename| blockchain.

These two concepts are used throughout this guide.

*********
Enrolling
*********

If you want to participate in either the :ref:`early-adoption-node-program` or the :ref:`ecosystem-node-program` you need to enroll in them **before the snapshot**. This section explains how to do this.

If you are interested only in the :ref:`supernode-program` or the :ref:`voting-node-program` (or if you are not interested in any of the reward programs) you don't need to enroll beforehand so you can skip this section and jump to :ref:`getting-ready-launching-your-node`.

.. _getting-ready-prerequisites:

Prerequisites
=============

- You must have a `NIS1 <https://nemplatform.com/>`__ account. `NIS1 <https://nemplatform.com/>`__ is NEM's current blockchain, which is used in this process to **register all requests** before |codename|'s launch. The easiest way to create an account is through the `NEM Desktop Client <https://nemplatform.com/wallets/#desktop>`__ (also known as the **NEM Nano Wallet**) and click the ``SIGN UP`` button at the top-right.

- Your NIS1 account must be **opted-in**. The `opt-in process <https://nemplatform.com/symbol-migration/#acc-tb_mrzh282-5>`__ creates a new |codename| account that will receive a copy of the NIS1 account's **tokens** once |codename| launches. Again, the easiest way to do this is through the **Nano Wallet's opt-in module** (Click on the ``Services`` tab and select ``Symbol Opt In``).

  - Make sure you obtain a **Paper Wallet** for the new |codename| account, or, at least, take note of the **mnemonic phrase**.
  - Do not opt-in the **VRF keys**, the process has changed and they are registered post-launch now (there is no problem if you already opted them in).

- Your NIS1 account must hold at least **10'000 XEMs** at the snapshot block height (3'105'500). :ref:`Only accounts holding this amount of XYMs can harvest <account_eligibility>` on the |codename| network so only accounts holding this amount at the snapshot can benefit from the Reward Programs.

Enrollment request
==================

The request is **a specially-crafted NIS1 transaction** sent from your NIS1 account to a specific address using the Nano Wallet (or any other wallet that allows sending NIS1 transactions with a message).

Detailed instructions for the Nano Wallet follow, but this is the summary:

- The **destination address** must be ``NAQ7RCYM4PRUAKA7AMBLN4NPBJEJMRCHHJYAVA72``.
- The **amount** to transfer must be **0**.
- The **message** must be un-encrypted and adhere to one of the following templates, depending on the program you are interested in. It is recommended that you start composing the message in a text file, as you will be editing it.

  .. list-table::
      :widths: 50 50
      :header-rows: 1

      * - Early Adoption
        - Ecosystem
      * - .. code-block:: json

            {
              "type":10,
              "p":"earlyadoption",
              "d":"SYMBOL_ACCOUNT_PUBLIC_KEY",
              "sh":"SYMBOL_NODE_HOST"
            }

        - .. code-block:: json

            {
              "type":10,
              "p":"ecosystem",
              "d":"SYMBOL_ACCOUNT_PUBLIC_KEY",
              "sh":"SYMBOL_NODE_HOST",
              "nh":"NIS1_NODE_HOST"
            }

Replace ``SYMBOL_ACCOUNT_PUBLIC_KEY`` with the **public key** of the new |codename| account you received when you opted-in. **Read the next subsection to know how to obtain it**.

Replace ``SYMBOL_NODE_HOST`` with the public host (hostname or IP address) of your **Symbol node**. If you don't know it yet, you can leave it blank and **send another transaction during the first 24 hours after launch**. The new host will be used.

Replace ``NIS1_NODE_HOST`` with the public host (hostname or IP address) of a **NIS1 node** you own (only for the Ecosystem program).

The node's public key
=====================

When you opted-in you should have received a **Paper Wallet**. This is just a PDF file meant to be **printed or stored offline** for added security.

This file contains your new Symbol account's **mnemonic phrase**, which you will need to produce the corresponding **public key** required for enrolling (See the :ref:`hdwallets-and-mnemonics` page for more information).

This will be accomplished using the |codename| :ref:`wallet-desktop` (Not to be confused with the NIS1 Nano Wallet used to opt-in). You will be using the new |desktop-wallet| for all your operations on the |codename| blockchain, so :ref:`install it now <wallet-desktop>` to start getting acquainted to it.

Obviously the wallet will not be **fully operative** until |codename| launches, but it can already be used to extract your account's public key from its mnemonic phrase.

1. Fire up the wallet and click on the ``Create a new profile`` link:

   .. image:: /resources/images/screenshots/mnemonic-to-pubkey-wallet-0.png
     :align: center
     :width: 50%
     :class: with-shadow
     :target: /_images/mnemonic-to-pubkey-wallet-0.png

2. Click on the ``Import mnemonic`` button:

   .. image:: /resources/images/screenshots/mnemonic-to-pubkey-wallet-1.png
     :align: center
     :width: 50%
     :class: with-shadow
     :target: /_images/mnemonic-to-pubkey-wallet-1.png

3. Enter a profile name, select the ``Symbol Mainnet`` network type (**Important!**), enter and confirm a password and click ``Next``:

   .. image:: /resources/images/screenshots/mnemonic-to-pubkey-wallet-2.png
     :align: center
     :width: 50%
     :class: with-shadow
     :target: /_images/mnemonic-to-pubkey-wallet-2.png

4. Enter the 24 words from the mnemonic phrase in your paper wallet and click ``Next``:

   .. image:: /resources/images/screenshots/mnemonic-to-pubkey-wallet-3.png
     :align: center
     :width: 50%
     :class: with-shadow
     :target: /_images/mnemonic-to-pubkey-wallet-3.png

5. You will be presented with the list of account addresses that can be derived from that mnemonic (as explained in the :ref:`hdwallets-and-mnemonics` page). **Select the one that matches the address in your paper wallet** (typically the first one) and click ``Next``:

   .. image:: /resources/images/screenshots/mnemonic-to-pubkey-wallet-4.png
     :align: center
     :width: 50%
     :class: with-shadow
     :target: /_images/mnemonic-to-pubkey-wallet-4.png

   .. note:: If your opted-in address does **not appear** in the list, make sure the NIS1 account has **enough funds** as stated in the :ref:`getting-ready-prerequisites` section. Only accounts with at least **100 XEMs** can opt-in, and only accounts with at least **10'000 XEMs** can harvest.

6. Accept the terms and conditions and click ``Finish``:

   .. image:: /resources/images/screenshots/mnemonic-to-pubkey-wallet-5.png
     :align: center
     :width: 50%
     :class: with-shadow
     :target: /_images/mnemonic-to-pubkey-wallet-5.png

7. You will be taken to the wallet's **main screen**. Do not worry about the balance shown as the snapshot hasn't taken place yet. Select the ``Accounts`` tab on the left:

   .. image:: /resources/images/screenshots/mnemonic-to-pubkey-wallet-6.png
     :align: center
     :width: 50%
     :class: with-shadow
     :target: /_images/mnemonic-to-pubkey-wallet-6.png

8. This is the **accounts screen**. You only imported one account from your mnemonic, so there is only one entry in the list. Verify on the right that the **address** shown matches your paper wallet and note that below there is a **Public Key**. This is what we were looking for. Click the **copy** button to the right of the key (do not try to select and copy the key's text directly as it is too long and it is truncated):

   .. image:: /resources/images/screenshots/mnemonic-to-pubkey-wallet-7.png
     :align: center
     :width: 50%
     :class: with-shadow
     :target: /_images/mnemonic-to-pubkey-wallet-7.png

This hexadecimal string (64-characters long) is the |codename| account's public key that you need to use in the enrollment message in the ``d`` field (replacing ``SYMBOL_ACCOUNT_PUBLIC_KEY`` in the templates). Paste the key you copied from the Desktop Wallet into your enrollment message and you are ready to continue.

Send the transaction
====================

Your enrollment message should now look something like this (depending on the chosen reward program):

.. code-block:: json

   {
     "type":10,
     "p":"earlyadoption",
     "d":"B49D19106E08C1E655FA5A02D85FD628BE9CE13FF3A09D7D25C7C9190E515DBA",
     "sh":"my-symbol-node.com"
   }

Remember that **if you don't know your host name yet**, you can leave it blank (``"sh":""``) and send another transaction during the first 24 hours after launch to update it.

.. note:: Paste the message into a `JSON Validator <https://jsonformatter.curiousconcept.com>`__ to ensure it is correctly formatted.

You will now use **NEM's Nano Wallet** to send the message and complete the enrollment (Not to be confused with the |desktop-wallet| that you used before). You should already have the wallet installed if you followed the :ref:`getting-ready-prerequisites` section.

This is how the Nano Wallet looks like after you fire it up:

.. image:: /resources/images/screenshots/nano-wallet-reward-enrollment-tx.png
  :align: center
  :class: with-shadow
  :target: /_images/nano-wallet-reward-enrollment-tx.png

Click on the **LOGIN** button at the top-right and then follow these instructions:

.. image:: /resources/images/screenshots/nano-wallet-reward-enrollment-tx-instructions.png
  :align: center
  :class: with-shadow
  :target: /_images/nano-wallet-reward-enrollment-tx-instructions.png

1. Click on the **Send** button at the top.
2. Check that you have **enough funds** to pay for the transaction fee (the required amount is shown below in the **Fee** box).
3. Check that you are using the **correct account**. To enroll in the **Ecosystem** program this transaction has to be sent from the account owning the NIS1 node. For the **Early Adoption** program it does not matter.
4. Enter the destination address ``NAQ7RCYM4PRUAKA7AMBLN4NPBJEJMRCHHJYAVA72``.
5. Enter the **enrollment message** you prepared.
6. Enter your wallet's password and click on the wide **Send** button at the bottom.

Once the transaction is announced and accepted, **your enrollment is complete**.

The next section explains how to setup your node so that it is ready to harvest on day one, as required by the Early Adoption and Ecosystem programs.

.. _getting-ready-launching-your-node:

*******************
Launching your node
*******************
