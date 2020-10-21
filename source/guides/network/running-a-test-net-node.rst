:orphan:

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
    nemesisGenerationHashSeed: 6C1B92391CCB41C96478471C2634C111D9E989DECD66130C0430B5B8D20117CD
    nodes:
        -
            type: peer-node
            name: peer-node
            friendlyName: 0f2ccdc
            roles: 'Peer'
            ssl:
                privateKey: ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                publicKey: 0f2ccdc6d2e6e8012271ccb7f391ee79ef4b92fedc831936158076120edcddcc
            signing:
                # These are the keys and address of your node
                privateKey: ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                publicKey: 5276BBE852DDBCBDB2343C4349083D055F0E6F19552E5E955B4207E90E45CD6F
                address: TC7DOAQY65IPHI5NR7R4LYHYD3OEUD6PVDJISVA
            vrf:
                privateKey: ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                publicKey: 1BB864D80F9FC8BF661265276E00E57C1ABDD13B1454A3F5ADC025279FA03268
                address: TD74YTRSVU4HXEXE4LQYIX2EQ65XLYO4V5XQB4I

.. note:: Keep you Secret Keys secret at all times!

Use the information in the ``signing`` section to access the node's account.

***************************
Providing funds to the node
***************************

Before the node can begin harvesting or voting (see below) it needs a **minimum amount of funds**. In the ``testnet`` test environment you can use |codename|'s **Faucet** to provide these funds.

Go to |faucet-1| (or |faucet-2|), insert the ``address`` of your node's account and the amount of |networkcurrency| you need and click on CLAIM.

You will see that your request is first ``unconfirmed`` (pending) and after a few seconds it becomes ``confirmed``. Your node is now funded and ready to operate!

********************
Submitting link keys
********************

**Harvesting** and **Voting** nodes require an extra configuration step before they can be used:

Enabling harvesting
===================

|symbol-bootstrap| creates peer nodes with :doc:`harvesting <../../concepts/harvesting>` enabled by default, but they still need to be registered by announcing a :ref:`VrfKeyLinkTransaction <vrf-key-link-transaction>` to the network.

This can be done by |symbol-bootstrap| too, but it needs to be a step separated from ``symbol-bootstrap start`` because funds are required to announce transactions.

Once the node is running with ``symbol-bootstrap start`` and you have funded it account, from a different terminal (but from the same folder), simply type:

.. code-block:: bash

    symbol-bootstrap link

This creates the required :ref:`VrfKeyLinkTransaction <vrf-key-link-transaction>` and submits it to the network. If it succeeds (it might take some seconds, as the transaction needs to be confirmed) your new node is ready to harvest.

.. note:: Without extra parameters, ``symbol-bootstrap link`` tries to send the registration transaction to the local node (running on the other terminal) which will forward it to the rest of the network. If your node is not running at this moment, or it is not an API node, you can provide the URL of a testnet node using ``--url``. Find a `list of nodes here <https://forum.nem.io/t/nem-symbol-0-10-0-release-announcement-testnet-launch/25863>`_.

Enabling voting
===============

The :ref:`block finalization <finalization>` process requires that network nodes vote about the correctness of blocks before they are added to the blockchain. For your new node to participate it has to register as a voter by announcing a :ref:`VotingKeyLinkTransaction <voting-key-link-transaction>` to the network. |symbol-bootstrap| can take care of this too.

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

Just like in the harvesting case, this creates the required :ref:`VotingKeyLinkTransaction <voting-key-link-transaction>` and submits it to the network. Upon successful completion, your new node is ready to vote.

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
* The |codename| |faucet-1|: Receive |networkcurrency| units to test |codename|'s services. If the default faucet is empty, try the |faucet-2|.
* :doc:`Software Development Kits <../../sdk>`: Add |codename| to your project.

And don't forget to check :ref:`the rest of the guides <blog-categories>` to continue learning about |codename|!

.. _docker: https://docs.docker.com/install/

.. _docker-compose: https://docs.docker.com/compose/install/

.. |blockchain-explorer| raw:: html

   <a href="http://explorer-0.10.0.x-01.symboldev.network/" target="_blank">Blockchain Explorer</a>

.. |faucet-1| raw:: html

   <a href="http://faucet-0.10.0.x-01.symboldev.network/" target="_blank">faucet</a>

.. |faucet-2| raw:: html

   <a href="http://faucet-0.10.0.x-02.symboldev.network/" target="_blank">alternative faucet</a>

.. |symbol-bootstrap| raw:: html

   <a href="https://github.com/nemtech/symbol-bootstrap" target="_blank">Symbol Bootstrap</a>
