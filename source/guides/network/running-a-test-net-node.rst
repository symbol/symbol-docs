.. post:: 04 Oct, 2019
    :category: Network
    :excerpt: 1
    :nocomments:

#######################
Running a test net node
#######################

This guide walks you through the process of setting up a node to join |codename|'s **public test network**.

The test network mirrors the same technology and features of the future main public network.
You can use the test net to experiment with the offered |codename|'s transaction set in a live network.

.. note:: The network **might be offline or replaced without notice** because it is used extensively for testing purposes. To work in a private environment network, install :doc:`a local network for learning and development purposes <creating-a-private-test-net>`.

To run the network, we are going to use the package |symbol-bootstrap|. To better understand how this package works it is highly recommended to read the :doc:`Using Symbol Bootstrap<using-symbol-bootstrap>` guide.

**********************
The ``testnet`` preset
**********************

|symbol-bootstrap| has a preset called ``testnet`` which instantiates a node that connects to the current public test network (testnet). The capabilities of this node are selected through the ``assembly`` option.

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

.. note:: Without extra parameters, ``symbol-bootstrap link`` tries to send the registration transaction to the local node (running on the other terminal) which will forward it to the rest of the network. If your node is not running at this moment, or it is not an API node, you can use the ``--useKnownRestGateways`` parameter, or provide the URL of a testnet node using ``--url``. Find a `list of nodes here <https://forum.nem.io/t/nem-symbol-0-10-0-release-announcement-testnet-launch/25863>`_.

Enabling voting
===============

The :ref:`block finalization <finalization>` process requires that network nodes vote about the correctness of blocks before they are definitely added to the blockchain. For your new node to participate it has to register as a voter by announcing a :ref:`VotingKeyLink transaction <voting-key-link-transaction>` to the network. |symbol-bootstrap| can take care of this too.

.. note:: We are going to create a new voting node. If you already created a non-voting node which you no longer need, you can remove the ``target`` folder or, more conveniently, use the ``-r`` switch next time you invoke ``symbol-bootstrap``.

First, you need to configure the node as a voter, so, besides selecting the ``testnet`` preset and the desired assembly you have to provide a custom preset file with the following content:

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

***************************
Configuring node properties
***************************

Follow the :ref:`Configuring node properties <node-properties>` guide to change parameters such as the public name of the node.

*********************************
Interacting with the test network
*********************************

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

.. |symbol-bootstrap| raw:: html

   <a href="https://github.com/nemtech/symbol-bootstrap" target="_blank">Symbol Bootstrap</a>
