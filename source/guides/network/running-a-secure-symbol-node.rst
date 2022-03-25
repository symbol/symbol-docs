.. post:: 13 Mar, 2021
    :category: Network
    :excerpt: 1
    :nocomments:

    How to run a Symbol node with added security.

#####################
Running a secure node
#####################

The :doc:`running-a-symbol-node` guide explains how to easily **create a node using Symbol Bootstrap**. In that guide, the setup process is conducted on the same machine that will host the node, meaning that private keys are generated on a machine connected to the Internet. If you need a **hardened level of security** you can follow this guide instead, at the cost of a more involved setup process.

The **summary** of it is that the ``symbol-bootstrap start`` command is split into a ``config`` phase run offline, which generates a configuration folder, and the rest of the ``start`` command is then run on the destination online machine that will host the node. **The main account's private key never leaves the offline machine**.

.. list-table::
   :header-rows: 1
   :widths: 25,75

   * - Machine
     - Function
   * - **Configuration**
     -
         - Online to install software, then offline.
         - Creates configuration files.
         - Prepares setup transactions.
   * - **Node**
     -
         - Permanently online.
         - Runs the node.
         - Announces the setup transactions.

A node can also be setup in such a way that all harvesting rewards go to an **external account** without requiring this account's private key. This is known as a **non-custodial setup** and must be configured **once the node is up and running**, so a pointer to the appropriate guide is given at the end of this page.

*********************
Configuration machine
*********************

Setup
=====

On the **Configuration machine**, while still online:

- **Install Symbol Bootstrap** as instructed in the :doc:`using-symbol-bootstrap` guide. Make sure you read also the **Configuration** section of that guide to get acquainted with presets and assemblies.

- **Install Symbol CLI** as instructed in the :doc:`symbol-cli <../../cli>` guide. You just need to run:

  .. code-block:: bash

     npm install --global symbol-cli

- **Run Symbol Bootstrap a first time**, so that it can download the required Docker images:

  .. code-block:: bash

     symbol-bootstrap config -p mainnet -a <assembly> --noPassword
     rm -rf target

  The output of this first run is irrelevant, that's why ``--noPassword`` is used and the ``target`` folder is removed.

- **Disconnect the Configuration machine from the Internet** since private keys will be generated on this machine from this point.

Create configuration
====================

Profile
-------

**Create the main account profile**. This is the account that will receive all harvesting fees and whose :ref:`importance score <importance-calculation>` will be used when harvesting.

**The purpose of this guide is making sure that this account's private key is never used on an online machine**.

This step will create a ``symbol-cli`` profile to hold the main account and sign transactions using its private key. The machine is offline now, so you need to provide some network-related data.

.. note:: The commands below assume you want to create a **new** main account and use the ``profile create`` command. If you **already have an account** that you would like to use as main use the ``profile import`` command instead.

.. tabs::

   .. tab:: MAINNET

      .. code-block:: bash

         symbol-cli profile create --profile offline-main --default \
            --url http://localhost:3000 --network MAIN_NET \
            --generation-hash 57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6 \
            --namespace-id symbol.xym --divisibility 6 \
            --epoch-adjustment 1615853185

   .. tab:: TESTNET

      .. code-block:: bash

         symbol-cli profile create --profile offline-test --default \
            --url http://localhost:3000 --network TEST_NET \
            --generation-hash 3B5E1FA6445653C971A50687E75E6D09FB30481055E3990C84B25E9222DC1155 \
            --namespace-id symbol.xym --divisibility 6 \
            --epoch-adjustment 1616694977

When prompted, enter a password to secure your profile and select the ``PrivateKey`` import type:

.. code-block:: symbol-cli

   ✔ Enter your wallet password: … *********
   ✔ Select an import type: › PrivateKey

   Account
   ┌───────────────┬──────────────────────────────────────────────────────────────────────┐
   │ Property      │ Value                                                                │
   ├───────────────┼──────────────────────────────────────────────────────────────────────┤
   │ Address       │ NCCE5O-BMZHWM-IYZKR6-4WZKFD-4P7DTS-IRXJZ2-3LI                        │
   ├───────────────┼──────────────────────────────────────────────────────────────────────┤
   │ Public Key    │ 51C2CB98B61D666A993FA9B25EEBCB48DE5F0B1B7D8B79ECB7AFCB1E5E601108     │
   ├───────────────┼──────────────────────────────────────────────────────────────────────┤
   │ Private Key   │ ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●     │
   ├───────────────┼──────────────────────────────────────────────────────────────────────┤
   │ Password      │ ●●●●●●●●●                                                            │
   └───────────────┴──────────────────────────────────────────────────────────────────────┘

   SUCCESS Stored offline-main profile

``symbol-cli`` is now ready to be used later on. All transactions will be signed by your main account so make sure it has some funds to pay for the :doc:`../../concepts/fees`.

**Take note of the main account's private key and keep it in a safe place**.

Preset
------

**Create a** :ref:`custom preset file <symbol-bootstrap-presets>` for Symbol Bootstrap and name it ``custom.yml``. It must include, at least, these lines:

.. code-block:: yaml

   privateKeySecurityMode: PROMPT_MAIN
   nodes:
   -
     mainPrivateKey: ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●

You can read more about these properties in the `security mode section <https://github.com/fboucquez/symbol-bootstrap/blob/main/docs/presetGuides.md#user-content-private-key-security-mode>`__ in Symbol Bootstrap's documentation.

If you have customizations to make, like enabling :ref:`voting <finalization>`, you can provide them too:

.. code-block:: yaml

   privateKeySecurityMode: PROMPT_MAIN
   nodes:
   -
     mainPrivateKey: ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
     voting: true
     host: my-symbol-node.com # Could also be an IP address

Configure
---------

**Run Symbol Bootstrap again**, this time with all required parameters:

.. code-block:: bash

   symbol-bootstrap config -p mainnet -a <assembly> -c custom.yml

You will be asked for the **password** to use to encrypt the **configuration files**.

.. code-block:: symbol-bootstrap

   ? Enter password to use to encrypt and decrypt custom presets, addresses.yml,
     and preset.yml files. When providing a password, private keys will be
     encrypted. Keep this password in a secure place! ******
   info     Password has been provided
   info     Generating config from preset testnet
   info     Assembly preset dual
   info     Generating Main account...
   info     Generating Transport account...
   info     Generating Remote account...
   info     Generating VRF account...
   info     User for docker resolved: 1000:1000
   info     Running image using Exec: symbolplatform/symbol-server:tools-gcc-0.10.1.8 bash createNodeCertificates.sh
   info     Certificate for node api-node created
   info     Generating api-node server configuration
   info     Generating api-broker broker configuration
   info     Non-voting node api-node.
   info     Configuration generated.

This generates a ``target`` directory containing an ``addresses.yml`` file and multiple configuration files.

**The main account's private key is not present in any of these files**.

It is worth noting that Symbol Bootstrap enables :ref:`remote-harvesting` by default, meaning that the **main private key is never available in a plain text file** in the client. Only the remote key is, which acts as a proxy between the node and its main account.

Copy configuration
------------------

- Open ``custom.yml`` and **remove the line** containing ``mainPrivateKey``.

  Now that Symbol Bootstrap has already used it in the ``config`` stage, there is no need for such a sensitive key to be lying around in a plain text file.

- **Copy** the whole ``target`` directory to a pen drive (or other non-networked support) to be used later.

Prepare transactions
====================

Still in the offline Configuration machine, you are now going to **prepare a series of link transactions manually**. These transactions will be created by ``symbol-cli``, signed by your main account, and will be moved to an online machine to be announced later on.

The following commands all use ``--max-fee 1000000`` which means that **1 XYM** will be paid for each transaction. Feel free to use a different number after reading the :doc:`fees documentation <../../concepts/fees>`.

.. topic:: Concerning deadlines

   All transactions have a deadline, meaning that they must be announced (and confirmed) **before the deadline expires**.

   There is currently a limitation in ``symbol-cli`` which sets this deadline to **2 hours** after transaction creation, for all non-multisig transactions.

   This is a known limitation which is `being tracked <https://github.com/symbol/symbol-cli/issues/373>`__.

Remote key link
---------------

Obtain the :ref:`accountkeylinktransaction` payload.

This links your main account to the **remote account** used for :ref:`remote-harvesting`. Symbol Bootstrap generated this account for you, and you can find its public key in the ``target/addresses.yml`` file:

.. code-block:: yaml

   remote:
       publicKey: 1544FE6F504A8B8536C2407664916AFB5C917400FD1B941B981933CDFE52AE3F

In the ``--linked-public-key`` parameter below, use the **remote account public key**:

.. code-block:: bash

   symbol-cli transaction accountkeylink --max-fee 1000000 --mode normal \
      --linked-public-key 1544FE6F504A8B8536C2407664916AFB5C917400FD1B941B981933CDFE52AE3F \
      --action Link

Enter the password you used when you created the ``symbol-cli`` profile and do **not** announce the transaction (the machine is offline).

.. code-block:: symbol-cli

   ✔ Enter your wallet password: … *********
   ┌──────────────────────────────────────────────────────────────────────────────────┐
   │                                 ACCOUNT_KEY_LINK                                 │
   ├───────────────┬──────────────────────────────────────────────────────────────────┤
   │ Max fee:      │ 1,000,000                                                        │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Network type: │ TEST_NET                                                         │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Deadline:     │ 2021-03-27 10:41:41.286                                          │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Action:       │ Link                                                             │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Linked key:   │ 1544FE6F504A8B8536C2407664916AFB5C917400FD1B941B981933CDFE52AE3F │
   ├───────────────┴──────────────────────────────────────────────────────────────────┤
   │                                Signature details                                 │
   ├───────────────┬──────────────────────────────────────────────────────────────────┤
   │ Payload:      │ A10000000000000042E0E0A0B8D7E1F27805F3537F80BFEAB6FEAC318908C486 │
   │               │ 4D03260B83ED1D0332D6EA6E086A4B68C578DB690D78D50BDA5C706B1DC66472 │
   │               │ 9326511547E42E0FCC6D13D64FB9BF69B72846C3FE99127D48C3293F473D528F │
   │               │ B902600CB7DA10330000000001984C4140420F000000000026F54C1B0A000000 │
   │               │ 1544FE6F504A8B8536C2407664916AFB5C917400FD1B941B981933CDFE52AE3F │
   │               │ 01                                                               │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Hash:         │ 08C63D3AFAC3767F43053AFF1ACA61381FE81929B2384B91C450010A547AFA4A │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Signer:       │ CC6D13D64FB9BF69B72846C3FE99127D48C3293F473D528FB902600CB7DA1033 │
   └───────────────┴──────────────────────────────────────────────────────────────────┘
   ✔ Do you want to announce this transaction? … no

Select all the text in the ``Payload`` box and paste it into a new text file named ``payloads.txt``. **Remove all spaces and other decorations** to obtain a single line **containing only** numbers and uppercase letters:

.. code-block:: text

   A100000000000000703C88DEDC4ABC2917F00ADB12C45F2C333B1113405C3CFAB289E78D9C54DDFCB1FE7C3048B6DA735568A935C6C08AF7E70AEC614A2EE9590967A7A044E52B0DCC6D13D64FB9BF69B72846C3FE99127D48C3293F473D528FB902600CB7DA10330000000001984C4140420F000000000038F32C1B0A0000001544FE6F504A8B8536C2407664916AFB5C917400FD1B941B981933CDFE52AE3F01

VRF key link
------------

Obtain the :ref:`vrfkeylinktransaction` payload.

This key is required for harvesting.

Again, Symbol Bootstrap has already generated this key for you and you can find it in the ``target/addresses.yml`` file:

.. code-block:: yaml

   vrf:
       publicKey: 856B6CCA574508158D66046CACEA2D81CB626DEEFDD3B6C466514CE31F32A52B

Use the **VRF account public key** in the ``--linked-public-key`` parameter below and do **not** announce the transaction (the machine is offline):

.. code-block:: symbol-cli

   symbol-cli transaction vrfkeylink --max-fee 1000000 --mode normal \
      --linked-public-key 856B6CCA574508158D66046CACEA2D81CB626DEEFDD3B6C466514CE31F32A52B \
      --action Link

Again, copy the content of the ``Payload`` box, trim it, and add it to ``payloads.txt``, in a new line.

Voting key link
---------------

Obtain the :ref:`votingkeylinktransaction` payload.

This key is only required for voting nodes.

If you added ``voting: true`` to ``custom.yml`` when creating the configuration, then Symbol Bootstrap has created this key too in ``target/addresses.yml``:

.. code-block:: yaml

   voting:
       publicKey: 05693B4300ABFD28CD6BA434DD26F9FAF2342927FE32840898DCB895B8A17E84

Use the **Voting account public key** in the ``--linked-public-key`` parameter below and do **not** announce the transaction (the machine is offline):

.. code-block:: symbol-cli

   symbol-cli transaction votingkeylink --max-fee 1000000 --mode normal \
      --linked-public-key 05693B4300ABFD28CD6BA434DD26F9FAF2342927FE32840898DCB895B8A17E84 \
      --action Link --start-point 1 --end-point 360

Again, copy the content of the ``Payload`` box, trim it, and add it to ``payloads.txt``, in a new line.

Copy payloads
-------------

Copy ``payloads.txt`` to the pen drive where you previously copied the ``target`` folder.

**************
Online machine
**************

Move now to the online machine, the one that is permanently connected to the Internet and will host the node. Plug in the pen drive with the node configuration.

Setup
=====

- **Install Symbol Bootstrap** as instructed in the :doc:`using-symbol-bootstrap` guide.

- **Install Symbol CLI** as instructed in the :doc:`symbol-cli <../../cli>` guide. You just need to run:

  .. code-block:: bash

     npm install --global symbol-cli

- **Create an announcer profile** for ``symbol-cli``. This is only a temporary account used to announce the payloads; it does not require funds:

  Use the ``--url`` parameter to specify the :term:`NODE_URL` to access the network.

  .. tabs::

     .. tab:: MAINNET

        .. code-block:: bash

           symbol-cli profile create --profile announcer --default \
              --network MAIN_NET \
              --url <NODE_URL>

     .. tab:: TESTNET

        .. code-block:: bash

           symbol-cli profile create --profile announcer --default \
              --network TEST_NET \
              --url <TESTNET_NODE_URL>

  When prompted, enter a password to secure your profile, and select the ``PrivateKey`` import type:

  .. code-block:: symbol-cli

     ✔ Enter your wallet password: ... *********
     ✔ Select an import type: » PrivateKey
     ...
     SUCCESS Stored announcer profile

Announce links
==============

You will now use ``symbol-cli`` to announce to the network the transactions you prepared in ``payloads.txt``.

Remote key link
---------------

Announce the Remote key link:

.. code-block:: symbol-cli

   symbol-cli transaction payload --sync --announce
   ✔ Enter the transaction payload:

Paste the first long text line from ``payloads.txt`` and press Enter:

.. code-block:: symbol-cli

   SUCCESS Transaction loaded:
   ┌──────────────────────────────────────────────────────────────────────────────────┐
   │                                 ACCOUNT_KEY_LINK                                 │
   ├───────────────┬──────────────────────────────────────────────────────────────────┤
   │ Max fee:      │ 1,000,000                                                        │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Network type: │ TEST_NET                                                         │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Deadline:     │ 2021-03-27 10:41:41.286                                          │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Signer:       │ TBGPYD-CO35V2-AMOYEJ-LEM44H-372M3I-6RWVFY-QCY                    │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Action:       │ Link                                                             │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Linked key:   │ 1544FE6F504A8B8536C2407664916AFB5C917400FD1B941B981933CDFE52AE3F │
   └───────────────┴──────────────────────────────────────────────────────────────────┘
   ┌──────────────────────────────────────────────────────────────────────────────────┐
   │                                 ACCOUNT_KEY_LINK                                 │
   ├───────────────┬──────────────────────────────────────────────────────────────────┤
   │ Max fee:      │ 1,000,000                                                        │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Network type: │ TEST_NET                                                         │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Deadline:     │ 2021-03-27 10:41:41.286                                          │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Signer:       │ CC6D13D64FB9BF69B72846C3FE99127D48C3293F473D528FB902600CB7DA1033 │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Action:       │ Link                                                             │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Linked key:   │ 1544FE6F504A8B8536C2407664916AFB5C917400FD1B941B981933CDFE52AE3F │
   ├───────────────┴──────────────────────────────────────────────────────────────────┤
   │                                Signature details                                 │
   ├───────────────┬──────────────────────────────────────────────────────────────────┤
   │ Payload:      │ A10000000000000042E0E0A0B8D7E1F27805F3537F80BFEAB6FEAC318908C486 │
   │               │ 4D03260B83ED1D0332D6EA6E086A4B68C578DB690D78D50BDA5C706B1DC66472 │
   │               │ 9326511547E42E0FCC6D13D64FB9BF69B72846C3FE99127D48C3293F473D528F │
   │               │ B902600CB7DA10330000000001984C4140420F000000000026F54C1B0A000000 │
   │               │ 1544FE6F504A8B8536C2407664916AFB5C917400FD1B941B981933CDFE52AE3F │
   │               │ 01                                                               │
   ├───────────────┼──────────────────────────────────────────────────────────────────┤
   │ Hash:         │ 08C63D3AFAC3767F43053AFF1ACA61381FE81929B2384B91C450010A547AFA4A │
   └───────────────┴──────────────────────────────────────────────────────────────────┘
   ...
   SUCCESS Transaction announced
   SUCCESS Transaction confirmed

.. note::
   If the transaction is **announced** but it never gets **confirmed** (``symbol-cli`` is stuck in ``Processing`` for more than a minute) it can be due to a number of things. Without interrupting ``symbol-cli``, copy the **transaction hash**, open a new terminal and run:

   .. code-block:: symbol-cli

      symbol-cli transaction status --hash <transaction hash>

   If there has been any issue with the transaction, this should give you the cause and you can then interrupt ``symbol-cli``.

   If you need to try again, **never re-announce the same payload**. Create a new one (from the Configuration machine) and announce it again.

   The most common problems are:

   - **Not enough funds** (``Failure_Core_Insufficient_Balance``): The main account (which signed the transaction) does not have enough funds to pay the fee. Transfer some funds and try with a new payload.
   - **Deadline expired** (``Failure_Core_Past_Deadline``): Create a new payload and announce it again before the deadline expires (See the **Concerning deadlines** box above).
   - **Insufficient fee**: No error will be reported but if the fee is too low most nodes will ignore it. Try again with a higher fee or be ready to wait for a long time.
   - **Payload re-announced**: ``symbol-cli`` will be stuck in ``Processing`` and you will get no relevant information from the ``transaction status``. Just don't announce the same payload more than once.

VRF key link
------------

Announce the VRF key link:

.. code-block:: symbol-cli

   symbol-cli transaction payload --sync --announce
   ✔ Enter the transaction payload:

Paste the second long text line from ``payloads.txt`` and wait for the transaction to be accepted.

Voting key link
---------------

Announce the Voting key link (if yours is a voting node):

.. code-block:: symbol-cli

   symbol-cli transaction payload --sync --announce
   ✔ Enter the transaction payload:

Paste the third long text line from ``payloads.txt`` and wait for the transaction to be accepted.

Start the node
==============

If all key link transactions were confirmed the node is now configured and you can finally launch it.

**Go to the directory** containing the ``target`` directory copied from the Configuration machine and **start the node**:

.. code-block:: bash

   symbol-bootstrap start

No other parameters are required, the configuration is already present in the ``target`` directory and Symbol Bootstrap will use it.

The node should start and a lot of debug output should appear on the screen.

.. code-block:: symbol-bootstrap

   info     Password has been provided
   info     The generated preset target/preset.yml already exist, ignoring configuration. (run -r to reset or --upgrade to upgrade)
   ...

Your node should now be **up and running** and its main private key has never left the configuration (offline) machine.

For added security, you can now turn the node's main account into a :doc:`../../concepts/multisig-account`. This is useful, for example, for service providers that work in a **non-custodial** manner. Read about this process in the :doc:`non-custodial-node-setup` guide.
