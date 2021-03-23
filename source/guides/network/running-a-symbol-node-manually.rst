.. post:: 05 Mar, 2021
    :category: Network
    :excerpt: 1
    :nocomments:

##############################
Running a Symbol node manually
##############################

This guide walks you through the process of setting up a node to join |codename|'s network **without** using Symbol Bootstrap.

|symbol-bootstrap| is a very handy tool that allows the **quick deployment** of |codename| nodes. However, it relies on `Docker <http://docker.com>`__ technology which might not be available (or allowed) in all scenarios. This guide takes the longer route and explains how to setup a |codename| node **manually**. If you would like to use Symbol Bootstrap use :doc:`this guide <running-a-symbol-node>` instead.

The next sections explain first how to build a :ref:`peer-node` and then expand it to convert it into an :ref:`api-node`.

.. note:: The following instructions have only been verified to work on **Linux**.

*****************
Build a Peer node
*****************

Build the server
================

Follow the `Catapult server <https://github.com/nemtech/catapult-server>`__ instructions to **build** its binaries, either `manually <https://github.com/nemtech/catapult-server/blob/main/docs/BUILD-manual.md>`__ or using `Conan <https://github.com/nemtech/catapult-server/blob/main/docs/BUILD-conan.md>`__.

Generate keys
=============

A |codename| node requires a number of :ref:`keys <symbol-keys>` to function properly. These keys are **randomly generated** so you need to create a few ones to be used in the following steps.

From within the ``_build`` directory you created in the previous section, run:

.. code-block:: bash

   ./bin/catapult.tools.addressgen --count 3 --network public

This will output 3 :ref:`key pairs <keypair>` similar to this one:

.. code-block:: text

   address (public): NDPPBHSMLVEU75DNUMFX6GWPTGB6PP6AFQU7WSY
      address decoded: 68DEF09E4C5D494FF46DA30B7F1ACF9983E7BFC02C29FB4B
         public key: 1E886BA00B4F85DBC0B31DBB78DADFAA29945DF7290DB7A4243D94864483C627
         private key: 3DDDC333029BC8ACDB460435BBC71041D460B911725B03D6F93805521AAD60CB

Each block is a key pair (there is one block shown above) composed of a ``private key``, a ``public key`` and an ``address``.

**Copy all of them to a temporary text file** for later use and label the key pairs **Main**, **Remote** and **VRF**.

.. note::

   If you **already have** any of these keys, you can use them instead of the randomly-generated ones.

   The most relevant scenario is when using a **main account opted-in from a NIS1 account**. In this case use the key obtained in the opt-in process as your **Main** key instead of the randomly-generated one.

Run the server
==============

**Download** the network configuration files:

- `Seed folder available in the Catapult Server repository <https://github.com/nemtech/catapult-server/releases/download/v1.0.0.0/nemesis-seed.zip>`__.

- Resources folder **not yet available**.

  .. note:: In the meantime, you can create your own test configuration :doc:`using-symbol-bootstrap` by running:

     .. code-block:: bash

        symbol-bootstrap config -p testnet -a peer

     Retrieve the configuration folders from ``target/nodes/peer-node/seed`` and ``target/nodes/peer-node/server-config/resources``. You can delete the ``target`` folder afterwards.

Follow Catapult server's `instructions to run a node <https://github.com/nemtech/catapult-server/blob/main/docs/RUNPEERLIN.md>`__ using the downloaded network configuration. Use the keys you generated above when requested as follows:

- The ``HARVESTER_SIGNING_PRIVATE_KEY`` is the **Remote** private key.
- The ``HARVESTER_VRF_PRIVATE_KEY``  is the **VRF** private key.

This configuration, paired with the key link below, will enable :ref:`remote-harvesting`.

Make sure your node is up and running before continuing with this guide.

Configure the server
====================

The server is now running but it will not be able **harvest** because a number of :ref:`keys <symbol-keys>` need to be **linked** to it. These links are created through **transactions announced to the network**.

**These transactions can be announced from ANY machine**. In particular, this can be done from a machine other than the one running your node so your main account's private key is never stored on the node.

You will use the :doc:`symbol-cli <../../cli>` tool for this. **Install** ``symbol-cli`` by running:

.. code-block:: bash

   npm install --global symbol-cli

All transactions will be sent from (and the :doc:`../../concepts/fees` paid by) your **main** account, so you need to tell ``symbol-cli`` about it by creating a **profile**.

.. note:: This profile will contain your main account's private key in **encrypted** form. A password will be requested every time it is accessed.

Run:

.. code-block:: symbol-cli

   $ symbol-cli profile import --network MAIN_NET --url http://localhost:3000 --default
   ✔ Enter a profile name: ... Main
   ✔ Enter your wallet password: ... *********
   ✔ Select an import type: › PrivateKey
   ✔ Enter your account private key: ... ********************************

- If you are not running this on the same machine as the node, use the URL of the node instead of ``localhost``.
- Enter a name for your profile (for example, ``Main``).
- Enter a password to protect the profile.
- Select ``PrivateKey`` as the import type.
- Enter your **Main** private key.

The profile information is stored in ``~/symbol-cli.config.json`` and ``symbol-cli`` is now ready to use.

.. note:: All the key links created in the next subsections can be **undone** at any time by announcing an equivalent **unlink** transaction (``--action Unlink``). Therefore you can always mend any mistake or change your node configuration (Each transaction has a :doc:`fee <../../concepts/fees>`, though).

Remote key
----------

You configured the node to sign created blocks using the **Remote** key, but the harvesting fees should go to your **Main** account. This is accomplished by announcing an :ref:`AccountKeyLink transaction <account-key-link-transaction>`:

.. code-block:: symbol-cli

   symbol-cli transaction accountkeylink --sync --action Link \
              --max-fee 1000000 --mode normal
   ✔ Enter your wallet password: ... *********
   ✔ Enter the public key of the remote account:  ********************************

- Enter your profile password.
- Enter your **Remote public** key.

.. code-block:: symbol-cli

   ...
   ✔ Do you want to announce this transaction? ... yes
   SUCCESS Transaction announced
   SUCCESS Transaction confirmed

VRF key
-------

In order to be :ref:`eligible for harvesting <account_eligibility>` an account must have linked a VRF key. This is accomplished by announcing a :ref:`VrfKeyLink transaction <vrf-key-link-transaction>`:

.. code-block:: symbol-cli

   symbol-cli transaction vrfkeylink --sync --action Link
                          --max-fee 1000000 --mode normal
   ✔ Enter your wallet password: ... *********
   ✔ Enter the public key to link: ... ********************************

- Enter your **VRF public** key.

.. _manual-enable-voting:

Voting key
----------

Finally, if your node is to be a :ref:`voting node <finalization>` it must have linked a voting key for the period in which you intend to vote. This is interesting as voting nodes receive :ref:`voting rewards <voting-node-program>`. The link is accomplished by announcing a :ref:`VotingKeyLink transaction <voting-key-link-transaction>`, but the generation of the key is slightly more complex.

1. From within the ``_build`` directory **create another directory** called ``votingkeys`` and **make sure** the file ``resources\config-user.properties`` points to this new directory. It should contain this line:

   .. code-block:: ini

      votingKeysDirectory = ../votingkeys

.. sidebar:: Epochs

   One voting epoch lasts **1440 blocks** or about **12h** (see ``votingSetGrouping`` in the :ref:`network properties <config-network-properties>`).

   The maximum voting key duration (End Epoch - Start Epoch) is **360 epochs** or about **6 months** (see ``maxVotingKeyLifetime``).

   You can find out the current epoch of the blockchain by running:

   .. code-block:: symbol-cli

      symbol-cli chain info

      ├────────────────────┼─────
      │ Finalization Epoch │ 292
      └────────────────────┴─────

2. **Create the voting key**

   Voting keys are different from the other keys in that they have a **period of validity**, for example. They are only valid from a **Start Epoch** to an **End Epoch** (see side box).

   Nodes are only eligible as voters if they are linked to a **valid voting key** for the current blockchain epoch, so **remember to renew your voting key periodically.**

   To help you with that task, you can have **up to 3 linked voting keys**, with different periods, so you can easily renew one key while there's still another one active (you will need to **unlink** an older key to be able to link more than 3 keys).

   A voting key is created using ``catapult.tools.votingkey`` and providing its **period of validity** (note you do not use ``catapult.tools.addressgen`` as before):

   .. code-block:: bash

      bin/catapult.tools.votingkey --output votingkeys/private_key_tree1.dat \
                                   --startEpoch 100 --endEpoch 460

   This creates a file named ``votingkeys/private_key_tree1.dat`` and **prints the voting key on the terminal**. As your voting keys expire and you create new ones, **increase the number** on the file name.

   .. code-block:: text

      generating 361 keys, this might take a while
      votingkeys\private_key_tree1.dat generated
      verifying generated file
       saved voting public key: ****************
      loaded voting public key: ****************

3. **Link the voting key**

   Finally announce the :ref:`VotingKeyLink transaction <voting-key-link-transaction>`:

   .. code-block:: symbol-cli

      symbol-cli transaction votingkeylink --sync --action Link \
                 --max-fee 1000000 --mode normal
      ✔ Enter your wallet password: ... *********
      ✔ Enter the public key of the voting key account:  ****************
      ✔ Enter the start point: ... 100
      ✔ Enter the end point: ... 460

   - Enter your profile password.
   - Enter the **voting public key** you got in the previous step.
   - Enter the Star and End epochs you used in the previous step.

   .. code-block:: symbol-cli

      ...
      ✔ Do you want to announce this transaction? ... yes
      SUCCESS Transaction announced
      SUCCESS Transaction confirmed

When the next epoch starts, if it is inside the Start and End epochs of one of your registered keys, your node should participate in the :ref:`finalization process <finalization>` and collect :ref:`voting rewards <voting-node-program>`.

.. note::

   Every epoch, at least **70%** of all eligible voting nodes need to cast their votes or **finalization stalls**.

   Therefore, **if you are planning to take your node offline** (for example, for maintenance) it is important that you **unlink your voting keys** for that period so that finalization is not impaired.

*****************
Build an API node
*****************

Once you have the Catapult Server running, you can add **extra services** to turn it into an API node:

.. figure:: ../../resources/images/diagrams/rest-detail.png
    :align: center

As shown in the diagram above, besides the **Catapult Server** you will also need:

- A **Database** holding the REST data.
- A **Catapult Broker** serializing accesses to the database.
- A **REST gateway** accepting client requests and turning them into server commands or database queries.

The following sections explain how to install each service. You will need all of them.

Move to the ``_build`` folder created while building the server and create any additional folders requested in the next steps inside ``_build``.

Run the database
=====================

1. **Install** `MongoDB <http://mongodb.com>`__ (at least version 4.4).

   It is recommended to follow the `program's own installation instructions <https://docs.mongodb.com/manual/administration/install-community/>`__, and NOT install from your distro's packages.

2. Create a directory to store the data files and **run the database**:

   .. code-block:: bash

      mkdir dbfiles
      mongod --dbpath=dbfiles --wiredTigerCacheSizeGB 2 --bind_ip 127.0.0.1

   Keep ``mongod`` running for as long as your node runs.

3. **Build indices** to optimize database accesses.

   The ``catapult-server`` repository you cloned to build the server in the first step contains `a folder with mongo scripts <https://github.com/nemtech/catapult-server/blob/main/scripts/mongo>`__. Run this one:

   .. code-block:: bash

      mongo 127.0.0.1/catapult < ../scripts/mongo/mongoDbPrepare.js

   Without this step database performance will be unacceptably slow.

Run the broker
===================

4. **Edit** ``resources/config-database.properties`` and point ``databaseUri`` to ``127.0.0.1:27017``:

   .. code-block:: ini

      [database]
  
      databaseUri = mongodb://127.0.0.1:27017
      databaseName = catapult

5. **Run the broker**:

   Move into the ``bin`` directory and run:

   .. code-block:: bash

      ./catapult.broker ..

   Keep the broker running for as long as your node runs.

Build and run the REST gateway
==============================

6. **Clone** the ``catapult-rest`` repository and **install its dependencies**:

   .. code-block:: bash

      git clone https://github.com/nemtech/catapult-rest.git
      cd catapult-rest
      npm install -g yarn
      ./yarn_setup.sh

7. **Build** the REST gateway:

   .. code-block:: bash

      cd rest
      yarn build

8. **Configure** the REST gateway:

   All configuration is stored in the ``resources/rest.json`` file.
   
   **Edit this file** to make sure that the following properties point to the right files:

   .. csv-table::
      :header: "Property", "File", "Default location"
      :widths: 35,35,30
      :delim: ;

      ``tlsClientCertificatePath``; ``node.crt.pem``; ``_build/certificate/``
      ``tlsClientKeyPath``; ``node.key.pem``; ``_build/certificate/``
      ``tlsCaCertificatePath``; ``ca.cert.pem``; ``_build/certificate/``
      ``networkPropertyFilePath``; ``config-network.properties``; ``_build/resources/``
      ``nodePropertyFilePath``; ``config-node.properties``; ``_build/resources/``

   **Use absolute paths**. For example:

   .. code-block:: json

      {
         "host": "127.0.0.1",
         "port": 7900,
         "timeout": 1000,
         "tlsClientCertificatePath":
               "/home/symbol/catapult-server/_build/certificate/node.crt.pem",
         "tlsClientKeyPath":
               "/home/symbol/catapult-server/_build/certificate/node.key.pem",
         "tlsCaCertificatePath":
               "/home/symbol/catapult-server/_build/certificate/ca.cert.pem",
         "networkPropertyFilePath":
               "/home/symbol/catapult-server/_build/resources/config-network.properties",
         "nodePropertyFilePath":
               "/home/symbol/catapult-server/_build/resources/config-node.properties"
      }

9. **Run the REST gateway**:

   .. code-block:: bash

      node _build/index.js resources/rest.json

   Keep the REST gateway running for as long as your node runs.

Verification
============

If the REST gateway is working correctly, you can now make queries at port 3000. If the Catapult Server, Broker and MongoDB are working correctly, the values returned by REST will be correctly synchronized with the rest of the blockchain.

Point a browser to the following URLs and check that the returned values are similar to the expected ones:

* `http://localhost:3000/node/info <http://localhost:3000/node/info>`__: Services status.

  .. code-block:: json

     {
        "status":{
           "apiNode":"up",
           "db":"up"
        }
     }

* `http://localhost:3000/chain/info <http://localhost:3000/chain/info>`__: Node's connection to the network.

  .. code-block:: json

     {
        "scoreHigh": "0",
        "scoreLow": "11485261672816562840",
        "height": "161138",
        "latestFinalizedBlock": {
           "finalizationEpoch": 224,
           "finalizationPoint": 44,
           "height": "160560",
           "hash": "52D3B01920C695B9194FABD869804E4D2A18D9B5509E47B2C70B0E6C3E275E33"
        }
     }

  The ``height`` field should match the actual height of the blockchain, but, upon first starting the node, it might take a while to synchronize.

Finally, go to the `Symbol Explorer page <http://explorer.symbolblockchain.io/nodes>`__ and check that your node appears in the list (It refreshes every 30 seconds).
