.. post:: 13 Mar, 2021
    :category: Network
    :excerpt: 1
    :nocomments:

############################
Running a Secure Symbol node
############################

The :doc:`running-a-symbol-node` guide explains how to **create a node using Symbol Bootstrap**. However, if you don't feel comfortable **generating private keys** on a machine connected to the Internet you can follow this guide instead.

The setup is a bit **more involved** (although it is still being simplified) but it provides **added security**.  The summary of it is that the ``symbol-bootstrap start`` command is split into a ``config`` phase run offline, which generates an encrypted configuration, and then the rest of the ``start`` command is run in the destination online machine that will host the node.

You have a number of choices now, concerning your **main account's private key** (probably your most important asset):

- The steps described below **only use Symbol Bootstrap**, so they are very convenient. They create an **encrypted configuration file** containing the main private key which must reside in the online machine.
- You have the option (described in a note) to **omit the main private key from the configuration file**, but then Symbol Bootstrap will ask you to enter it on the online machine when signing transactions.
- Finally, you can use Symbol Bootstrap for most of the steps, but **manually sign the transactions** on the offline configuration machine and **manually announce them** on the online machine. This is the most convoluted procedure but allows the main private key to **never be present on the online machine**, not even encrypted. This is explained in the `Offline signatures <secure-node-offline-signatures>`_ section at the end.

********************
Bootstrap-only setup
********************

On the **Configuration machine**, while still online:

1. **Install** Symbol Bootstrap as instructed in the :doc:`using-symbol-bootstrap` guide.

2. **Run Symbol Bootstrap a first time**, so that it can download the required Docker images:

   .. code-block:: bash

      symbol-bootstrap config -p testnet -a <assembly> --noPassword
      rm -rf target

   The output of this first run is irrelevant, that's why ``--noPassword`` is used and the ``target`` folder is removed.

3. **Disconnect the Configuration machine from the Internet**. Private keys will be generated on this machine now.

4. **Run Symbol Bootstrap again**, this time with all required parameters:

   .. code-block:: bash

      symbol-bootstrap config -p testnet -a <assembly>

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

   This will generate a ``target`` directory (you can change it with the ``--target`` parameter) containing the aforementioned ``addresses.yml`` file, along with multiple configuration files. The **key point** is that the **main account's private key is encrypted in these files**.

   .. code-block:: text

      ? Enter the password used to encrypt and decrypted custom presets, addresses.yml, and preset.yml files. When providing a password, private keys would be encrypted. Keep this password in a secure place! ******
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

      If you do not want your main account's private key to appear in the config files, **not even in encrypted form**, you can add this line in the custom preset explained in the previous note:

      .. code-block:: yaml

         privateKeySecurityMode: PROMPT_MAIN

      Bear in mind that **every time a transaction needs to be signed** on the online machine, you will be asked for your private key. This is only relevant for steps 7 and 8 below.
      
      Read more about this `security mode <https://github.com/nemtech/symbol-bootstrap/blob/main/docs/presetGuides.md#user-content-private-key-security-mode>`__.

5. **Copy** the whole ``target`` directory to the online machine. For example, using a pen drive, since you do not want to use the Internet.

Then, on the **online machine**, the one that will run the node and be permanently connected to the Internet:

6. **Install** Symbol Bootstrap as instructed in the :doc:`using-symbol-bootstrap` guide.

7. **Go to the directory** containing the ``target`` directory copied from the Configuration machine and **register the keys** required for the node:

   .. code-block:: bash

      symbol-bootstrap link --useKnownRestGateways

   You will be asked for the configuration file password:

   .. code-block:: text

      ? Enter password to use to encrypt and decrypt custom presets, addresses.yml, and preset.yml files. When providing a password, private keys will be encrypted. Keep this password in a secure place! ******
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

   You might also be asked for the main account's private key if you used the ``privateKeySecurityMode`` property explained above.

   This command not only announces all required link transactions, it also checks if the links already exist, finds a good node to use for the announcement, calculates the appropriate fee and aggregates all links in a single transaction for added efficiency.

   .. note::
   
      This step (and the next one) can be performed from **any online machine**. It does not need to be the same machine that will be running the node. By doing so, the node will **never have the main private key**, not even encrypted.

      The key will have been briefly present in *some* online machine, though. To completely avoid this use the guide in the `Offline signatures <secure-node-offline-signatures>`_ section.

8. If you want to enroll to any :doc:`Reward Program <../../concepts/reward-programs>`, do so now:

   .. code-block:: bash

      symbol-bootstrap enrolRewardProgram --useKnownRestGateways

   You will be asked for the configuration file password:

   .. code-block:: text

      ? Enter password to use to encrypt and decrypt custom presets, addresses.yml, and preset.yml files. When providing a password, private keys will be encrypted. Keep this password in a secure place! ******
      info     Password has been provided
      ...
      info     Creating enrolment transfer with message 'enrol ... https://my-symbol-node.com:7880'
      ? Do you want to announce 1 transactions for node api-node?

   You might also be asked for the main account's private key if you used the ``privateKeySecurityMode`` property explained above.

9. Finally, **start the node**:

   .. code-block:: bash

      symbol-bootstrap start

   No other parameters are required, the configuration is already present in the ``target`` directory and Symbol Bootstrap will use it:

   .. code-block:: text

      info     Password has been provided
      info     The generated preset target/preset.yml already exist, ignoring configuration. (run -r to reset or --upgrade to upgrade)
      ...

   The node will start as usual but its main private will have never been online unencrypted.

Your node should now be up and running and your main private key has never been on a file. It has temporarily been held in memory while signing some transactions, though. If this is not acceptable, you can read the next section.

.. _secure-node-offline-signatures:

******************
Offline signatures
******************