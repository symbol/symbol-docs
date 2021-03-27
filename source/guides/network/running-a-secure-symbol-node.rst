.. post:: 13 Mar, 2021
    :category: Network
    :excerpt: 1
    :nocomments:

############################
Running a Secure Symbol node
############################

The :doc:`running-a-symbol-node` guide explains how to easily **create a node using Symbol Bootstrap**. In that guide, a single machine is used throughout the whole process, meaning that private keys are generated in a machine connected to the Internet. If you need a **hardened level of security** you can follow this guide instead, at the cost of a bit more involved setup.

The summary of it is that the ``symbol-bootstrap start`` command is split into a ``config`` phase run offline, which generates an encrypted configuration, and then the rest of the ``start`` command is run in the destination online machine that will host the node.

.. list-table::
   :header-rows: 1
   :widths: 25,75

   * - Machine
     - Function
   * - **Configuration**
     -
         - Creates configuration files.
         - Online to install software, then offline.
   * - **Node**
     -
         - Runs the node.
         - Permanently online.
         - Announces all transactions.

You have a number of choices, differing in how your **main account's private key** is managed:

- The :ref:`secure-node-bootstrap-only` section is the most convenient. It creates an **encrypted configuration file** containing the main private key which is then moved to the Node machine.

  You have the option (described in a note) to **omit the main private key from the configuration file**, but then Symbol Bootstrap will ask you to enter it on the Node machine when signing transactions.

- The :ref:`secure-node-offline-signatures` section uses Symbol Bootstrap for most of the steps, but you **manually sign some transactions** on the Configuration machine and then **announce them** on the Node machine. This is a more convoluted procedure but allows the main private key to **never be present on the online machine**, not even encrypted.

- Finally, the :ref:`secure-node-non-custodial-setup` section explains how to **relinquish control of the main account to an external account**, so that the external account's private key is never required in the node setup process.

.. _secure-node-bootstrap-only:

********************
Bootstrap-only setup
********************

On the **Configuration machine**, while still online:

1. **Install** Symbol Bootstrap as instructed in the :doc:`using-symbol-bootstrap` guide (make sure you read also the **Configuration** section of that guide to get acquainted with presets and assemblies).

2. **Run Symbol Bootstrap a first time**, so that it can download the required Docker images:

   .. code-block:: bash

      symbol-bootstrap config -p mainnet -a <assembly> --noPassword
      rm -rf target

   The output of this first run is irrelevant, that's why ``--noPassword`` is used and the ``target`` folder is removed.

3. **Disconnect the Configuration machine from the Internet**. Private keys will be generated on this machine from this point.

4. **Run Symbol Bootstrap again**, this time with all required parameters:

   .. code-block:: bash

      symbol-bootstrap config -p mainnet -a <assembly> -c <custom-presets>

   .. note::

      If you have customizations to make, like **enabling Voting**, using a **particular main account** (instead of letting Symbol Bootstrap create one), or **enrolling in a reward program**, you can provide them through a custom preset file (for example ``custom.yml``):

      .. code-block:: yaml

         nodes:
         - voting: true
           mainPrivateKey: ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
           rewardProgram: SuperNode
           host: my-symbol-node.com # Could also be an IP address

      And add ``-c custom.yml`` to the ``symbol-bootstrap`` command. You can delete this file afterwards.

      This is particularly useful when using opted-in accounts.

   You will be asked for the **password** to use to encrypt the **configuration files**.

   This will generate a ``target`` directory containing an ``addresses.yml`` file and multiple configuration files. The **key point** is that the **main account's private key is encrypted in these files**.

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

   .. note::

      If you do not want your main account's private key to appear in the config files, **not even in encrypted form**, you can add this line in the custom preset explained in the previous note, at the top of the file:

      .. code-block:: yaml

         privateKeySecurityMode: PROMPT_MAIN

      Bear in mind that **every time a transaction needs to be signed** on the online machine, you will be asked for your private key. This is only relevant for steps 7 and 8 below.
      
      Read more about this property in the `security mode section <https://github.com/nemtech/symbol-bootstrap/blob/main/docs/presetGuides.md#user-content-private-key-security-mode>`__ in Symbol Bootstrap's documentation.

5. **Copy** the whole ``target`` directory to the **Node machine**. For example, using a pen drive, since you do not want to connect the **Configuration machine** to the Internet.

Then, on the **Node machine**, the one that will run the node and be permanently connected to the Internet:

6. **Install** Symbol Bootstrap as instructed in the :doc:`using-symbol-bootstrap` guide.

7. **Go to the directory** containing the ``target`` directory copied from the Configuration machine and **register the keys** required for the node:

   .. code-block:: bash

      symbol-bootstrap link --useKnownRestGateways

   You will be asked for the configuration file password:

   .. code-block:: symbol-bootstrap

      ? Enter password to use to encrypt and decrypt custom presets, addresses.yml,
        and preset.yml files. When providing a password, private keys will be
        encrypted. Keep this password in a secure place! ******
      info     Password has been provided
      info     Linking nodes
      info     Connecting to node http://api-01.ap-northeast-1.testnet.symboldev.network:3000
      info     Node's minFeeMultiplier is 100
      info     Creating transactions for node: api-node, ca/main account: TBW7TVQVQUIHRYBOARCNQW7FOVYSVGUPDBI62EA
      info     Creating Link AccountKeyLinkTransaction from Node api-node to Remote public key 25821A95C1390A404D8DF61692B89158DD4EDA37E418C653282A6C7CC1EB7736.
      info     Creating Link VrfKeyLinkTransaction from Node api-node to VRF public key 048E4B01F0F0729B639AF74495E0C45954D591472DD426242820BBD50C5D92D2.
      info     Creating Link VotingKeyLinkTransaction from Node api-node to Voting public key C4022B7B66A185EEA5444EAA328399398B9BA2596209BB7345D38057A46FCD32.
      ? Do you want to announce 3 transactions for node api-node? Yes
      info     Announcing Aggregate Complete Transaction hash 0365344498D57689A59AE23462098D5FA4D0CC63951583D78C8D04E1C61EB18B
      info     Aggregate Complete Transaction has been confirmed!

   You might also be asked for the **main account's private key** if you used the ``privateKeySecurityMode`` property explained above.

   This command not only **announces all required link transactions**, it also checks if the links already exist, finds a good node to use for the announcement, calculates the appropriate fee and aggregates all links in a single transaction for added efficiency.

   .. note::
   
      This step (and the next one) can be performed from **any online machine**. It does not need to be the same machine that will be running the node. By doing so, the node will **never have the main private key**, not even encrypted.

      To do so, copy the ``target`` folder to an **Announcer** machine and run the ``link`` command there.

      The key will still have been briefly present in the Announcer machine's memory, though. To avoid this completely, read the `Offline signatures <secure-node-offline-signatures>`_ section below.

8. If you want to **enroll** to any :doc:`Reward Program <../../concepts/reward-programs>` (you will need to provide a custom preset file in Step 4 above), do so now :

   .. code-block:: bash

      symbol-bootstrap enrolRewardProgram --useKnownRestGateways

   You will be asked for the configuration file password:

   .. code-block:: symbol-bootstrap

      ? Enter password to use to encrypt and decrypt custom presets, addresses.yml,
        and preset.yml files. When providing a password, private keys will be
        encrypted. Keep this password in a secure place! ******
      info     Password has been provided
      ...
      info     Creating enrolment transfer with message 'enrol ... https://my-symbol-node.com:7880'
      ? Do you want to announce 1 transactions for node api-node?

   You might also be asked for the main account's private key if you used the ``privateKeySecurityMode`` property explained above.

9. Finally, **start the node**:

   .. code-block:: bash

      symbol-bootstrap start

   No other parameters are required, the configuration is already present in the ``target`` directory and Symbol Bootstrap will use it:

   .. code-block:: symbol-bootstrap

      info     Password has been provided
      info     The generated preset target/preset.yml already exist, ignoring configuration. (run -r to reset or --upgrade to upgrade)
      ...

   The node should start and a lot of debug output should appear on the screen.

Your node should now be **up and running** and its main private key has never been on a file. It has been temporarily held in memory while signing some transactions, though, so if this is not acceptable, you can read the next section.

It is worth noting that Symbol Bootstrap enables :ref:`remote-harvesting` by default, meaning that the **main private key is never available in a plain text file** in the server. Only the remote key is, which acts as a proxy between the node and its main account.

.. _secure-node-offline-signatures:

******************
Offline signatures
******************

Once the ``config`` step is done, the only reason why Symbol Bootstrap requires the main private key is to perform the ``link`` and ``enrolRewardProgram`` commands.

These commands perform a series of security checks but their main goal is to announce a series of transactions, which must be signed off by the main account. If these transactions are announced manually instead, then Symbol Bootstrap does not require the main private key. In this case the main private key is not required outside the Configuration machine.

This sections explains how to do this, by replacing some of the steps in the previous section.

1. **Steps 1 through 4** are the same as in the :ref:`secure-node-bootstrap-only` section, with two additions:

   - On **Step 1**, after installing Symbol Bootstrap in the **Configuration machine**, install :doc:`symbol-cli <../../cli>` too. Just run:

     .. code-block:: bash

        npm install --global symbol-cli

   - On **Step 4** make sure you use a **custom preset** with at least these lines:

     .. code-block:: yaml

        privateKeySecurityMode: PROMPT_MAIN
        nodes:
           - mainPrivateKey: ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●

     The ``privateKeySecurityMode`` line makes sure the main private key is **not** stored, as instructed in the note at the end of Step 4.

     The ``mainPrivateKey`` is required during configuration to **generate node certificates**.

     The custom preset file can be removed after this step.

Still in the **Configuration machine**, once Symbol Bootstrap has generated the configuration, you need to **prepare the link transactions manually**.

2. **Create a symbol-cli profile** for your main account. The machine is offline, so you need to provide some network-related data.

   For MAINNET:

   .. code-block:: bash

      symbol-cli profile import --profile offline-main --default \
         --url http://localhost:3000 --network MAIN_NET \
         --generation-hash 57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6 \
         --namespace-id symbol.xym --divisibility 6 \
         --epoch-adjustment 1615853185

   For TESTNET:

   .. code-block:: bash

      symbol-cli profile import --profile offline-test --default \
         --url http://localhost:3000 --network TEST_NET \
         --generation-hash 45FBCF2F0EA36EFA7923C9BC923D6503169651F7FA4EFC46A8EAF5AE09057EBD \
         --namespace-id symbol.xym --divisibility 6 \
         --epoch-adjustment 1573430400

   When prompted, enter a password to secure your profile, select the ``PrivateKey`` import type and provide your **Main account private key**:

   .. code-block:: symbol-cli

      ✔ Enter your wallet password: … *********
      ✔ Select an import type: › PrivateKey
      ✔ Enter your account private key: … ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
      ...
      SUCCESS Stored offline-main profile

   ``symbol-cli`` is now ready to use. All transactions will be signed by your main account so make sure it has some funds to pay for the :doc:`../../concepts/fees`

   The following commands all use ``--max-fee 1000000`` which means that **1 XYM** will be paid for each transaction. Feel free to use a different number.

Now you are going to **create the transaction payloads**. In the next steps you will use ``symbol-cli`` to create some transactions but stop right before announcing them. Instead, you will copy the **transaction payload** from the console output into a text file to be used on an online machine.

These payloads contain transactions **already signed by your main account** but no sensitive information, so it is safe to move them to an online machine.

3. Obtain the :ref:`Account Key Link transaction <account-key-link-transaction>` payload.

   - This links your main account to the remote account used for harvesting.
   - Use your **Remote account public key** in the ``--linked-public-key`` parameter. Find this key in the ``target/addresses.yml`` file:

     .. code-block:: yaml

        remote:
            publicKey: 1544FE6F504A8B8536C2407664916AFB5C917400FD1B941B981933CDFE52AE3F

   - Do **not** announce the transaction (the machine is offline).

   .. code-block:: symbol-cli

      symbol-cli transaction accountkeylink --max-fee 1000000 --mode normal \
         --linked-public-key 1544FE6F504A8B8536C2407664916AFB5C917400FD1B941B981933CDFE52AE3F \
         --action Link

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

   Select all the text in the ``Payload`` box and paste it into a new text file named ``payloads.txt``. **Remove all spaces and other decorations** to obtain a single, long line of numbers and uppercase letters:

   .. code-block:: text

      A100000000000000703C88DEDC4ABC2917F00ADB12C45F2C333B1113405C3CFAB289E78D9C54DDFCB1FE7C3048B6DA735568A935C6C08AF7E70AEC614A2EE9590967A7A044E52B0DCC6D13D64FB9BF69B72846C3FE99127D48C3293F473D528FB902600CB7DA10330000000001984C4140420F000000000038F32C1B0A0000001544FE6F504A8B8536C2407664916AFB5C917400FD1B941B981933CDFE52AE3F01

4. Obtain the :ref:`VRF Key Link transaction <vrf-key-link-transaction>` payload.
     
   - This key is required for harvesting.
   - Use your **VRF account public key** in the ``--linked-public-key`` parameter. Find this key in the ``target/addresses.yml`` file:

     .. code-block:: yaml

        vrf:
            publicKey: 856B6CCA574508158D66046CACEA2D81CB626DEEFDD3B6C466514CE31F32A52B

   - Do **not** announce the transaction (the machine is offline).

   .. code-block:: symbol-cli

      symbol-cli transaction vrfkeylink --max-fee 1000000 --mode normal \
        --linked-public-key 856B6CCA574508158D66046CACEA2D81CB626DEEFDD3B6C466514CE31F32A52B \
        --action Link

   Again, copy the content of the ``Payload`` box, trim it, and add it to ``payloads.txt``, in a new line.

5. Obtain the :ref:`Voting Key Link transaction <voting-key-link-transaction>` payload.
     
   - This key is only required for voting nodes.
   - Use your **Voting account public key** in the ``--linked-public-key`` parameter. Find this key in the ``target/addresses.yml`` file:

     .. code-block:: yaml

        voting:
            publicKey: 05693B4300ABFD28CD6BA434DD26F9FAF2342927FE32840898DCB895B8A17E84

   - Do **not** announce the transaction (the machine is offline).

   .. code-block:: symbol-cli

      symbol-cli transaction votingkeylink --max-fee 1000000 --mode normal \
        --linked-public-key 05693B4300ABFD28CD6BA434DD26F9FAF2342927FE32840898DCB895B8A17E84 \
        --action Link --start-point 1 --end-point 360

   Again, copy the content of the ``Payload`` box, trim it, and add it to ``payloads.txt``, in a new line.

6. **Copy** the whole ``target`` directory to the **Node machine**. For example, using a pen drive, since you do not want to connect the **Configuration machine** to the Internet. Copy also ``payloads.txt``.

Then, on the **Node machine**, the one that will run the node and be permanently connected to the Internet:

7. **Install** Symbol Bootstrap as instructed in the :doc:`using-symbol-bootstrap` guide, and :doc:`symbol-cli <../../cli>` as you did in **Step 1**:

   .. code-block:: bash

      npm install --global symbol-cli

8. **Create an announcer profile** for symbol-cli. This is only a temporary account used to announce the payloads; it does not require funds:

   For MAINNET:

   .. code-block:: bash

      symbol-cli profile create --default --network MAIN_NET \
        --url http://ngl-api-001.symbolblockchain.io:3000 

   For TESTNET:

   .. code-block:: bash

      symbol-cli profile create --default --network TEST_NET \
      --url http://api-01.eu-central-1.testnet.symboldev.network:3000

   When prompted, enter a password to secure your profile, and select the ``PrivateKey`` import type:

   .. code-block:: symbol-cli

      ✔ Enter a profile name: ... announcer
      ✔ Enter your wallet password: ... *********
      ✔ Select an import type: » PrivateKey
      ...
      SUCCESS Stored announcer profile

8. **Announce the Remote key link**.

   .. code-block:: symbol-cli

      symbol-cli transaction payload --sync --announce
      ✔ Enter the transaction payload:

   - Paste the first long text line from ``payloads.txt`` and press Enter:

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

9. **Announce the VRF key link**.

   .. code-block:: symbol-cli

      symbol-cli transaction payload --sync --announce
      ✔ Enter the transaction payload:

   - Paste the second long text line from ``payloads.txt`` and wait for the transaction to be accepted.

10. **Announce the Voting key link** if yours is a voting node.

    .. code-block:: symbol-cli

       symbol-cli transaction payload --sync --announce
       ✔ Enter the transaction payload:

    - Paste the third long text line from ``payloads.txt`` and wait for the transaction to be accepted.

If all key link transactions were confirmed the node is now configured and you can finally launch it:

11. **Go to the directory** containing the ``target`` directory copied from the Configuration machine and **start the node**:

    .. code-block:: bash

       symbol-bootstrap start

    No other parameters are required, the configuration is already present in the ``target`` directory and Symbol Bootstrap will use it.

    The node should start and a lot of debug output should appear on the screen.

Your node should now be **up and running** and its main private key has never left the configuration (offline) machine.

.. _secure-node-non-custodial-setup:

*******************
Non-custodial setup
*******************
