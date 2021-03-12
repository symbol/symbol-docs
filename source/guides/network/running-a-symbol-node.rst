.. post:: 04 Oct, 2019
    :category: Network
    :excerpt: 1
    :nocomments:

#####################
Running a Symbol node
#####################

This guide walks you through the process of setting up a node to join |codename|'s **public network**.

You can safely experiment connecting to |codename|'s network by connecting to the test network (testnet) instead of the main public network (mainnet). Testnet **might be offline or replaced without notice** because it is used extensively for testing purposes, though. To work in a private environment network, install :doc:`a local network for learning and development purposes <creating-a-private-test-net>` instead.

To run the network, you are going to use the package |symbol-bootstrap|. To better understand how this package works it is highly recommended to read the :doc:`Using Symbol Bootstrap<using-symbol-bootstrap>` guide.

.. note:: |symbol-bootstrap| runs on all the supported Operating Systems (**Windows**, **Mac** and **Linux**). This guide works out-of-the-box on **Ubuntu 20.04** but other Linux distributions might require some adjustments. For instructions specific to **CentOS 8** please follow `spizzerb's CentOS 8 guide <https://forum.nem.io/t/complete-guide-to-run-a-dual-node-on-centos-8-using-symbol-bootstrap>`__ (developed by a NEM community member).

*********************
Hardware requirements
*********************

Running a blockchain node is **very demanding** in terms of disk space, memory and CPU requirements. Failure to meet the **following minimum requirements** will produce a node that will struggle to keep up with the rest of the network. The global blockchain will not be affected but the node will rarely be eligible to collect any node rewards.

.. note:: It is **strongly recommended** to use **dedicated CPU and RAM**. When they are shared (as is the case on some Virtual Server providers) performance is heavily impacted.

.. csv-table:: Minimum node specifications
   :header: "Requirement", "Peer node", "API node", "Dual & Voting node"
   :delim: ;

   CPU; 2 cores; 4 cores; 4 cores
   RAM; 8GB; 16GB; 16GB
   Disk size; 500 GB; 750 GB; 750 GB
   Disk speed; 1500 |iops| |ssd|; 1500 |iops| |ssd|; 1500 |iops| |ssd|

The following table shows the **recommended requirements**. Using these will provide a much smoother experience and provide a certain degree of future proofing.

.. csv-table:: Recommended node specifications
   :header: "Requirement", "Peer node", "API node", "Dual & Voting node"
   :delim: ;

   CPU; 4 cores; 8 cores; 8 cores
   RAM; 16GB; 32GB; 32GB
   Disk size; 500 GB; 750 GB; 750 GB
   Disk speed; 1500 |iops| |ssd|; 1500 |iops| |ssd|; 1500 |iops| |ssd|

***************************************
The ``testnet`` and ``mainnet`` presets
***************************************

|symbol-bootstrap| has presets called ``testnet`` and ``mainnet`` which instantiate a node that connects to the appropriate public network. The particular capabilities of this node are selected through the ``assembly`` option.

This guide uses ``testnet`` as an example, feel free to change it to ``mainnet`` once the main network has officially launched.

To create a peer node:
======================

:ref:`Peer nodes <peer-node>`, also called a *harvester* nodes, are the backbone of the network. Among other things, they verify transactions and add new blocks to the blockchain, collecting fees in the process.

.. code-block:: bash

    symbol-bootstrap start -p testnet -a peer

To create an API node:
======================

:ref:`API nodes <api-node>` provide external access to the network through a REST API.

.. code-block:: bash

    symbol-bootstrap start -p testnet -a api

To check that the node is up and running open a new browser tab and go to ``localhost:3000/chain/info``. You should get a response from the API node.

API nodes take up more memory and storage than Peer nodes. If you have memory or storage constraints and you are running into issues, it is recommended that you switch to running a Peer only node instead.

To create a dual node:
======================

Dual nodes provide the functionality of both :ref:`Peer <peer-node>` and :ref:`API <api-node>` nodes.

.. code-block:: bash

    symbol-bootstrap start -p testnet -a dual

****************
Running the node
****************

You really don't need to use anything else but ``symbol-bootstrap start``.  Use any of the commands above to instantiate and boot a |codename| node and ``Ctrl+C`` to shut it down.

Alternatively, you can start in detached mode (``--detached``) to run in the background.

.. note:: Upon first launch the node will **synchronize** with the rest of the network, downloading the **complete blockchain**. This might take a few hours and during this time REST requests directed to your node (if it is an API node) might be delayed and report an incorrect chain height.

.. _retrieving-node-account:

***************************
Retrieving the node account
***************************

The node you just created has an associated |codename| account which you can use to interact with the node. For instance, you need this account to provide funds to the node so it can emit transactions.

The account's keys and address can be retrieved from a YAML file in the ``target`` folder:

``target/addresses.yml``

As an example:

.. code-block:: yaml

    networkType: 152
    nemesisGenerationHashSeed: 1082491EFE93AA7DAC6D0282634953DB8B5FDDAE669237B030695A9F308883D5
    nodes:
        -
            name: peer-node-0
            friendlyName: peer-node-0
            roles: 'Peer,Voting'
            main:
                # Use these to access the node's account
                privateKey: ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                publicKey: E8A918BD78C0D9CFA8D0B53BB721E62925ACB4BF92068533A3D94210D01E1D39
                address: TBMXGFREJRVWJY756BVHLJAHZCOP3BW53ALFYOY
            transport:
                # Use these in Delegated Harvesting requests
                privateKey: ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                publicKey: 7C63AF4CECE2690944FAFE3D9D52EB400447F30CCAC185BC9BE5D54CF536DDE3
                address: TBTRVMCJ7TEZNCV74IX3INJHGAOLMQOU2JQEX7Y
            remote:
                privateKey: ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                publicKey: 6B1936560F85096E398AAF4647EADB6C748100E6D248D98B2916F003B806E725
                address: TDN3G4REJA7BWDQ2TLB3M522RAYKV5AB55EEPGQ
            voting:
                privateKey: ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                publicKey: E97B99E7EDE0738CBE2C3BB13F3B0EEB8A361FAAD51271887D12389F1AEEF4EC
                address: TBBK644JF2XMW35A7BUG6SADTLHAQ2M2KO7O2FQ
            vrf:
                privateKey: ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                publicKey: B304E6F9650CFFA52C6DC51CED29397F6C50F1E2F9AC34993549E0E3E4461027
                address: TABWAGQNSI4AWPE3IVGS53CQWAN5BYRM5BHMNFA

.. note:: Keep you Secret Keys secret at all times!

Use the information in the ``main`` section to access the node's account. When activating :ref:`delegated harvesting <delegated-harvesting>`, use the information in the ``transport`` section as the node's **public TLS key**.

***************************
Providing funds to the node
***************************

Before the node can begin harvesting or voting (see below) it needs a **minimum amount of funds**. In the ``testnet`` test environment you can use |codename|'s **Faucet** to provide these funds.

Go to |faucet|, insert the ``address`` of your node's account and the amount of |networkcurrency| you need and click on CLAIM.

You will see that your request is first ``unconfirmed`` (pending) and after a few seconds it becomes ``confirmed``. Your node is now funded and ready to operate!

********************
Submitting link keys
********************

**Harvesting** and **Voting** nodes require an extra configuration step before they can be used:

Enabling harvesting
===================

|symbol-bootstrap| creates peer nodes with :ref:`remote harvesting <remote-harvesting>` enabled by default, but they still need to be registered by announcing the :ref:`AccountKeyLink <account-key-link-transaction>` and :ref:`VrfKeyLink <vrf-key-link-transaction>` transactions to the network.

This can be done by |symbol-bootstrap| too, but it needs to be a step separated from ``symbol-bootstrap start`` because funds are required to announce transactions.

Once the node is running with ``symbol-bootstrap start`` and you have funded its account, from a different terminal (but from the same folder), simply type:

.. code-block:: bash

    symbol-bootstrap link

This creates the required :ref:`AccountKeyLink <account-key-link-transaction>` and :ref:`VrfKeyLink <vrf-key-link-transaction>` transactions and announces them to the network. If it succeeds (it might take some seconds, as the transaction needs to be confirmed) your new node is ready to harvest.

.. note:: Without extra parameters, ``symbol-bootstrap link`` tries to send the registration transaction to the local node (running on the other terminal) which will forward it to the rest of the network. If your node is not running at this moment, or it is not an API node, you can use the ``--useKnownRestGateways`` parameter, or provide the URL of another node using ``--url``. Find a `list of testnet nodes here <https://forum.nem.io/t/nem-symbol-0-10-0-7-release-15-feb-2021/27565>`_.

.. _bootstrap-enable-voting:

Enabling voting
===============

The :ref:`block finalization <finalization>` process requires that network nodes vote about the correctness of blocks before they are definitely added to the blockchain. For your new node to participate it has to register as a voter by announcing a :ref:`VotingKeyLink transaction <voting-key-link-transaction>` to the network. |symbol-bootstrap| can take care of this too.

.. note:: We are going to create a new voting node. If you already created a non-voting node which you no longer need, you can remove the ``target`` folder or, more conveniently, use the ``-r`` switch next time you invoke ``symbol-bootstrap``.

First, you need to configure the node as a voter, so, besides selecting the desired preset and assembly you have to provide a custom preset file with the following content:

.. code-block:: yaml

    nodes:
    - voting: true

So if you call the above file ``enable-voting-preset.yml`` the whole command would be:

.. code-block:: bash

    symbol-bootstrap start -p testnet -a <assembly> -c enable-voting-preset.yml

Once the node is running, from a different terminal (but from the same folder), simply type:

.. code-block:: bash

    symbol-bootstrap link

Just like in the harvesting case, this creates the required :ref:`VotingKeyLink transaction <voting-key-link-transaction>` and submits it to the network. Upon successful completion, your new node is ready to vote.

*********************
Running a secure node
*********************

It is possible to setup a node in such a way that **the private keys are never stored in plain text on a computer connected to the Internet**.

The setup is a bit **more involved**, and is still being improved, but it provides **added security**.  The summary of it is that the ``symbol-bootstrap start`` command is split into a ``config`` phase run offline, which generates an encrypted configuration, and then the rest of the ``start`` command is run in the destination online machine that will host the node.

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

      If you have customizations to make, like **enabling Voting**, using a **particular main account** (instead of letting Symbol Bootstrap create one), or **enrolling in a reward program**, provide them through a custom preset file (for example ``custom.yml``):

      .. code-block:: yaml

         nodes:
         - voting: true
           mainPrivateKey: ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
           rewardProgram: SuperNode
           host: my-symbol-node.com # Could also be an IP address

      And add ``-c custom.yml`` to the command. You can delete this file afterwards.

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

5. **Copy** the whole ``target`` directory to the target machine (without using the Internet).

On the **Host machine**, the one that will run the node and be permanently online:

6. **Install** Symbol Bootstrap as instructed in the :doc:`using-symbol-bootstrap` guide.

7. **Go to the directory** containing the ``target`` directory copied from the Configuration machine and run:

   .. code-block:: bash

      symbol-bootstrap start

   No other parameters are required, the configuration is already present in the ``target`` directory and Symbol Bootstrap will use it:

   .. code-block:: text

      info     Password has been provided
      info     The generated preset target/preset.yml already exist, ignoring configuration. (run -r to reset or --upgrade to upgrade)

   The node will start as usual but its main private will have never been online unencrypted.

***************************
Configuring node properties
***************************

Follow the :ref:`Configuring node properties <node-properties>` guide to change parameters such as the public name of the node.

****************************
Interacting with the network
****************************

You can use the following tools to test the functionality of your new node:

* |blockchain-explorer|: Search for transactions, accounts, assets, and blocks in the test network.
* :ref:`Desktop Wallet <wallet-desktop>`: Cross-platform client for |codename|. Available for Mac, Linux, and Windows.
* :ref:`Command-Line Interface <wallet-cli>`: Execute the most commonly used actions from your terminal.
* The |codename| |faucet|: Receive |networkcurrency| units to test |codename|'s services.
* :doc:`Software Development Kits <../../sdk>`: Add |codename| to your project.

And don't forget to check :ref:`the rest of the guides <blog-categories>` to continue learning about |codename|!

.. _docker: https://docs.docker.com/install/

.. _docker-compose: https://docs.docker.com/compose/install/

.. |blockchain-explorer| raw:: html

   <a href="http://explorer.testnet.symboldev.network/" target="_blank">Blockchain Explorer</a>

.. |faucet| raw:: html

   <a href="http://faucet.testnet.symboldev.network/" target="_blank">faucet</a>

.. |ssd| raw:: html

   <a href="https://en.wikipedia.org/wiki/Solid-state_drive" target="_blank">SSD</a>

.. |iops| raw:: html

   <a href="https://en.wikipedia.org/wiki/IOPS" target="_blank">IOPS</a>
