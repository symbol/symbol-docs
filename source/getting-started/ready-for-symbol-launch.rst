#########################################
Getting your node ready for Symbol launch
#########################################

This guide shows the steps required to have your node **ready for action from the first block**, on |codename|'s launch day. This is important for node owners wanting to benefit from some of the :doc:`Reward Programs <../concepts/reward-programs>`.

If you are not planning to run **your own Symbol node**, or do not need to have it running **right the minute Symbol launches**, you do not need to worry about this guide.

************
Introduction
************

**A beginning is a very delicate time**. The first block in the |codename| blockchain (the **Nemesis** block) is handcrafted but the following blocks are **produced by the nodes in the network**. This means that the moment the network launches there must be enough :ref:`Harvesting Nodes <peer-node>` present to keep block creation flowing.

Now, **harvesting nodes must have their keys registered in the blockchain** (at least the VRF key), so in order to harvest from block 2, these keys must be **present in the Nemesis block**.

This guide explains the required steps to **make sure that your node's keys will be included in the Nemesis block**. You can always register as a harvester later on :doc:`using the regular mechanisms <../guides/harvesting/index>`, but being a harvester early on is a requirement for some of the node :doc:`Reward Programs <../concepts/reward-programs>`.

The process is automated through a **registration tool** built specifically for this purpose.

*************
Prerequisites
*************

- You must have a `NIS1 <https://nemplatform.com/>`__ account. `NIS1 <https://nemplatform.com/>`__ is NEM's current blockchain, which is used in this process to **register all harvesting requests** before |codename|'s launch. The easiest way to create an account is through the `NEM Desktop Client <https://nemplatform.com/wallets/#desktop>`__ (also known as the **NEM Nano Wallet**).

- Your NIS1 account must be `opted-in <https://nemplatform.com/symbol-migration/>`__. The opt-in process creates a new |codename| account that will receive a copy of the NIS1 account's **tokens and associated keys** once |codename| launches. Again, the easiest way to do this is through the **Nano Wallet's opt-in module**:

  - Make sure you obtain a **Paper Wallet** for the new account to simplify the process.
  - When asked about the VRF key, **do not include it** in the opt-in; it's simpler to do it later. There is no problem if you already included it, it will be detected automatically.

- Your NIS1 account must hold at least **10'000 XEMs** at the snapshot block height. :ref:`Only accounts holding this amount can harvest <account_eligibility>` on the |codename| network so only accounts holding this amount at the snapshot will have their keys added to the Nemesis block.

*********************************
1. Download the registration tool
*********************************

Choose the right link for your platform:

- `macOS (Darwin) <https://symbol-node-registration-cli.s3-eu-west-1.amazonaws.com/dist/v0.0.0/symbol-node-registration-cli-v0.0.0-darwin-x64.tar.gz>`__
- `Linux (ARM) <https://symbol-node-registration-cli.s3-eu-west-1.amazonaws.com/dist/v0.0.0/symbol-node-registration-cli-v0.0.0-linux-arm.tar.gz>`__
- `Linux (x64) <https://symbol-node-registration-cli.s3-eu-west-1.amazonaws.com/dist/v0.0.0/symbol-node-registration-cli-v0.0.0-linux-x64.tar.gz>`__
- `Windows (x64) <https://symbol-node-registration-cli.s3-eu-west-1.amazonaws.com/dist/v0.0.0/symbol-node-registration-cli-v0.0.0-win32-x64.tar.gz>`__
- `Windows (x86) <https://symbol-node-registration-cli.s3-eu-west-1.amazonaws.com/dist/v0.0.0/symbol-node-registration-cli-v0.0.0-win32-x86.tar.gz>`__
- `Source code <https://symbol-node-registration-cli.s3-eu-west-1.amazonaws.com/dist/v0.0.0/symbol-node-registration-cli-v0.0.0.tar.gz>`__

Open a terminal, unzip the file and move into the ``symbol-node-registration-cli`` directory.

****************************
2. Run the registration tool
****************************

The tool will ask you **your NIS1 account address** and query the NIS1 blockchain to retrieve its opted-in |codename| account (Remember that your NIS1 account must be opted-in). Afterwards, the registration tool:

- **Creates VRF, Remote and (optionally) Voting keys** for the new |codename| account. If the VRF key had already been registered by Nano Wallet, it is reused.
- **Announces a NIS1 transaction** linking the new |codename| account to its keys. This transaction will be used to populate the Nemesis block on the launch date.

  .. note:: This transaction must be signed so your NIS1 account **private key** will be requested. The registration tool does not store it **anywhere**.

- **Generates an encrypted preset file** that can be used by :doc:`Symbol Bootstrap <../guides/network/using-symbol-bootstrap>` to start with an already-configured node on the launch date.

All this is done by the ``register`` command:

.. code-block:: bash

   bin/symbol-node-registration-cli register

   » Do you have your Paper Wallet? Yes
   » Select a network: mainnet
   » Enter the NIS1 opted-in main account address: ●●●●●●●●●●●●●●●●
   » Enter the Mnemonic Phrase from the Paper Wallet: ●●●● ●●●● ●●●● ●●●● ●●●●
   » Enter password to use to encrypt the Symbol Bootstrap custom preset: ●●●●●●●●
   » Select your Symbol Reward Program: None, EarlyAdoption or Ecosystem
   ...

**Write down** the password you use to encrypt the preset file, you will need it later to configure your node.

At the end of the process a **summary screen** is shown. It is specially worth noting:

- The ``symbol-bootstrap`` command needed to start the node with this configuration.

- `A link to a preview <http://explorer.experimental.symboldev.network>`__ of the blockchain as it will be on launch day.

  - This preview updates roughly every hour.
  - Only accounts with enough XEMs to be successfully opted-in are shown.

- `A link to an opt-in report <http://report.experimental.symboldev.network>`__ which you can use to check if the opt-in succeeded or why it failed.

Finally, the registration tool produces a Symbol Bootstrap custom preset file called ``symbol-bootstrap-custom-preset.yml`` by default. The next step shows how to use it.

**********************
3. Configure your node
**********************

Your node has now been **registered** and all the keys required for harvesting and voting will be available in the |codename| blockchain on the launch date.

The only step missing is **configuring your node** so it uses the registered account and its related keys. You can do it **automatically** using Symbol Bootstrap or you can do it **manually**.

Using Symbol Bootstrap
======================

This is the **recommended method**, due to its simplicity.

First off, get used to :doc:`creating nodes using Symbol Bootstrap <../guides/network/running-a-test-net-node>`. Create some experimental nodes and connect them to the TESTNET (using the ``-p testnet`` preset).

Then, **on the launch day**, run ``symbol-bootstrap`` (this command was printed on the screen by the registration tool at the end of the process):

.. code-block:: bash

   symbol-bootstrap start -p mainnet -a dual \
     -c symbol-bootstrap-custom-preset.yml --password ●●●●●●●●

This will use the **preset file** that the registration tool created, which contains your account and related keys. The file is **encrypted** so use the correct password in the command line.

Your node should now be up and running.

.. note:: A mechanism is being researched so you can **start your node in advance** and leave it on "stand by", waiting for the network to boot. This page will be updated with the outcome of this research.

Manually
========

   **Section coming soon.**

   You need to extract the information from the preset file using:

   .. code-block:: bash

      bin/symbol-node-registration-cli decrypt --showPrivateKeys

   And then build the necessary ``catapult-server`` configuration files.
