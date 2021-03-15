#########################################
Getting your node ready for Symbol launch
#########################################

This guide shows the steps required to have your node **ready for action**, during |codename|'s first days. This is important for node owners wanting to benefit from some of the :doc:`Reward Programs <../concepts/reward-programs>`.

If you are not planning to run **your own Symbol node**, or to enroll in the :ref:`Early Adoption <early-adoption-node-program>` or :ref:`Ecosystem <ecosystem-node-program>` reward programs, you do not need to worry about this guide.

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

As you should be well aware by now, |codename|'s launch is happenning in two phases.

1. **Snapshot**: When the NIS1 chain reached block height 3'105'500 a **snapshot** of the contents of all NIS1 accounts was taken.

2. **Launch**: Afterwards, on March 15th (exact time to be determined), the new |codename| network will **launch** meaning that the nodes managed by NEM Group will be brought online and they will start adding blocks to the shinny new |codename| blockchain.

These two concepts are used throughout this guide.

*********
Enrolling
*********

.. warning:: Enrollment to the :ref:`Early Adoption <early-adoption-node-program>` and :ref:`Ecosystem <ecosystem-node-program>` reward programs is now **closed**.

If you wanted to participate in either of these programs you needed to enroll in them **before the snapshot**. This section explains how to **update your node information**, as there is a **12-day grace period** to have the node fully configured and functional.

If you are interested only in the :ref:`supernode-program` or the :ref:`voting-node-program` (or if you are not interested in any of the reward programs) you didn't need to enroll beforehand so you can skip this section and jump to :ref:`getting-ready-launching-your-node`.

.. _getting-ready-prerequisites:

Prerequisites
=============

Since you are already enrolled in one of the Reward Programs, you should already have:

- An **opted-in** `NIS1 <https://nemplatform.com/>`__ account, that held at least **10'000 XEMs** at the snapshot block height (3'105'500).
- A Paper Wallet with the information of your new Symbol account, obtained during opt-in.
- Sent an enrollment request before the snapshot.

.. _getting-ready-grace-period:

Grace period
============

.. warning:: All nodes that enrolled in either the :ref:`Early Adoption <early-adoption-node-program>` or :ref:`Ecosystem <ecosystem-node-program>` reward programs are expected to be **online** within 24 hours of |codename|'s launch.

However, there is a **12-day grace period** (until March 27th) during which:

- The node **availability test** are allowed to fail (These are the same tests as for the :ref:`supernode-program`).
- Your **enrollment information** can be updated in case you made a mistake.

The rest of this section is a reminder of how to submit the enrollment request.

Updating the request
====================

You can update your enrollment information as many times as you need by:

- **Sending another NIS1 transaction** (as described below) **from the same account** as you did initially.
- Tell `NEM's Telegram Help Desk <https://t.me/nemhelpdesk>`__ about the update.

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

Replace ``SYMBOL_NODE_HOST`` with the public host (hostname or IP address) of your **Symbol node**.

Replace ``NIS1_NODE_HOST`` with the public host (hostname or IP address) of a **NIS1 node** you own (only for the Ecosystem program).

.. note::

  If you are not using the standard port for the monitoring agent (7880) you can add an ``"ap":PORT_NUMBER`` line to the registration message. For example:

  .. code-block:: json

     {
       "type":10,
       "p":"earlyadoption",
       "d":"SYMBOL_ACCOUNT_PUBLIC_KEY",
       "sh":"SYMBOL_NODE_HOST",
       "ap":7881
     }

.. _getting-ready-node-public-key:

The account's keys
==================

When you opted-in you should have received a **Paper Wallet**. This is just a PDF file meant to be **printed or stored offline** for added security.

This file contains your new Symbol account's **mnemonic phrase**, which you will need to produce a :ref:`keypair`: a **public key** required for enrolling and a **private key** required to configure your node (See the :ref:`hdwallets-and-mnemonics` page for more information).

This will be accomplished using the |codename| :ref:`wallet-desktop` (Not to be confused with the NIS1 Nano Wallet used to opt-in). You will be using the new |desktop-wallet| for all your operations on the |codename| blockchain, so :ref:`install it now <wallet-desktop>` to start getting acquainted to it.

Obviously the wallet will not be **fully operative** until |codename| launches, but it can already be used to extract your account's keys from the mnemonic phrase.

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

7. You will be taken to the wallet's **main screen** (The balance shown might not be accurate until |codename| launches). Select the ``Accounts`` tab on the left:

   .. image:: /resources/images/screenshots/mnemonic-to-pubkey-wallet-6.png
     :align: center
     :width: 50%
     :class: with-shadow
     :target: /_images/mnemonic-to-pubkey-wallet-6.png

8. This is the **accounts screen**. You only imported one account from your mnemonic, so there is only one entry in the list. Verify on the right that the **address** shown matches your paper wallet and note that below there is a **Public Key**. This is the first key we were looking for. Click the **copy** button to the right of the key (do not try to select and copy the key's text directly as it is too long and it is truncated):

   .. image:: /resources/images/screenshots/mnemonic-to-pubkey-wallet-7.png
     :align: center
     :width: 50%
     :class: with-shadow
     :target: /_images/mnemonic-to-pubkey-wallet-7.png

   This hexadecimal string (64-characters long) is the |codename| account's public key that you need to use in the enrollment message in the ``d`` field (replacing ``SYMBOL_ACCOUNT_PUBLIC_KEY`` in the templates). **Paste the key you copied from the Desktop Wallet into your enrollment message**.

9. Now click on the ``Show`` link right below the public key and enter your password.

   .. image:: /resources/images/screenshots/mnemonic-to-pubkey-wallet-8.png
     :align: center
     :width: 50%
     :class: with-shadow
     :target: /_images/mnemonic-to-pubkey-wallet-8.png

10. Your account's **Private Key** will be shown for a few seconds. This is the second key we were looking for. Click the **copy** button to the right of the key (do not try to select and copy the key's text directly as it is too long and it is truncated):

    .. image:: /resources/images/screenshots/mnemonic-to-pubkey-wallet-9.png
      :align: center
      :width: 50%
      :class: with-shadow
      :target: /_images/mnemonic-to-pubkey-wallet-9.png

    This hexadecimal string (64-characters long) is the |codename| account's **private key** that you need to configure your node in the next section. **Paste the key into a temporary file for later use**.

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

Remember that **if you don't know your host name yet**, you can leave it blank (``"sh":""``) and send another transaction during the grace period to update it.

.. note:: Paste the message into a `JSON Validator <https://jsonformatter.curiousconcept.com>`__ to ensure it is correctly formatted.

You will now use **NEM's Nano Wallet** to send the message and complete the enrollment (Not to be confused with the |desktop-wallet| that you used before). You should already have the wallet installed if you followed the :ref:`getting-ready-prerequisites` section.

This is how the Nano Wallet looks like after you fire it up:

.. image:: /resources/images/screenshots/nano-wallet-reward-enrollment-tx.png
  :align: center
  :class: with-shadow
  :target: /_images/nano-wallet-reward-enrollment-tx.png

Click on the **LOGIN** button at the top-right, complete the login procedure, and then follow these instructions:

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

.. note:: Don't forget to tell `NEM's Telegram Help Desk <https://t.me/nemhelpdesk>`__ about the update!.

The next section explains how to setup your node so that it is ready to harvest as soon as possible, as required by the Early Adoption and Ecosystem programs.

.. _getting-ready-launching-your-node:

*******************
Launching your node
*******************

Nodes can register as :doc:`harvesters <../guides/harvesting/index>`, :ref:`supernodes <supernode-program>` or :ref:`voting nodes <voting-node-program>` **at any time**.

**However**, to participate in either the :ref:`early-adoption-node-program` or the :ref:`ecosystem-node-program` your node needs to:

- Become online during **the first 24 hours after Symbol's launch**.
- Start passing all **availability tests** during the `grace period <getting-ready-grace-period>`_.

This section explains how to start your node **once the Symbol network is up and running**, using the Symbol Bootstrap tool.

1. **Install the latest version** using the method described in :doc:`../guides/network/using-symbol-bootstrap`.

2. **Create a custom preset file**.

   You need to create a :ref:`custom preset file <symbol-bootstrap-presets>` for Symbol Bootstrap so it **uses the account you opted-in** instead of creating a new one.

   **The custom preset contains your account's private key**, but Symbol Bootstrap will store it **encrypted**. You can delete the preset file afterwards.

   Create a file named, for example, ``custom.yml`` with this content:

   .. code-block:: yaml

      nodes:
          - voting: true
            mainPrivateKey: ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●

3. **Start Symbol Bootstrap**.

   .. code-block:: bash

      symbol-bootstrap start -p mainnet -a dual -c custom.yml

   (Read the :doc:`../guides/network/running-a-symbol-node` guide to know more about this command.)

   This will ask you for a password to encrypt the configuration files:

   .. code-block:: text

      ? Enter password to use to encrypt and decrypt custom presets, addresses.yml, and preset.yml files. When providing a password, private keys will be encrypted. Keep this password in a secure place!

   **Remember this password** as Symbol Bootstrap will request it every time you work with an encrypted configuration file.

4. **Wait for the node to boot**.

   You should see a lot of debug output on the console while all the node's services are booted. Meanwhile, on a different terminal, go to the same directory where you ran the previous command and run:

   .. code-block:: bash

      symbol-bootstrap healthCheck
      
   When all indicators are green your node is up and running and you can continue with this guide.

5. **Register the rest of the keys**

   There are more keys involved in running a node than the main account's key. If you only added your main key to the custom preset file, Symbol Bootstrap will have created the rest for you (remote, VRF and voting) but they still need to be linked to the main account. This is done with the ``link`` command.

   Once your node is running, from a different terminal (but in the same folder where you ran ``symbol-bootstrap start``), run:

   .. code-block:: bash

      symbol-bootstrap link

   This will announce a few link transactions (there's a :doc:`fee <../concepts/fees>` involved) and your node will become fully configured.

************
Verification
************

Browse to `Symbol Explorer <http://explorer.symbolblockchain.io/>`__, locate your node, and check that all information is correct.

You should be able to see a lot of information (including the node's name and URL, for example), and, if it is enrolled in any reward program, a special card stating the program's name and the latest availability test results.