##################################
Enrolling to the Supernode program
##################################

This guide shows how to create a node and register it as a **Supernode**. Make sure you know about the :ref:`supernode-program` before continuing with this guide.

The :doc:`running-a-symbol-node` guide contains more details on how to create a |codename| node and its content **partially overlaps** this guide. You can either follow that guide to build a **regular node** or this one to build a **supernode**, but **not both**.

You can create your supernode using :ref:`Symbol Bootstrap <enroll-supernode-with-bootstrap>`, which is the easiest method, or :ref:`manually <enroll-supernode-manually>`.

.. _enroll-supernode-with-bootstrap:

**********************
Using Symbol Bootstrap
**********************

Symbol Bootstrap is the **easiest way** to create and run |codename| nodes. :doc:`Learn about this tool <using-symbol-bootstrap>` if you are not familiar with it.

1. Create a :ref:`custom preset file <symbol-bootstrap-presets>` named, for example, ``supernode.yml``:

   .. code-block:: yaml

      nodes:
        - rewardProgram: SuperNode
          host: my-symbol-node.com # Could also be an IP address

   If you want the node to be also a :ref:`Voting node <finalization>` (and benefit from the :ref:`Voting Node rewards program <voting-node-program>`) add also ``voting: true``.

   If you already have some of the required node accounts (main, transport, remote, VRF or voting) `you can provide them in the preset file too <https://github.com/nemtech/symbol-bootstrap/blob/main/docs/presetGuides.md#user-content-specify-the-nodes-private-keys>`__.

   .. note:: When managing your node through a :doc:`multisig account <../../concepts/multisig-account>`, the **main** account in the above preset file must be **the multisig account** (and **not** any of its cosignatories).

2. **Create and run the node** using the new preset file:

   Along with the standard node services, this will also download and install the **monitoring agent**.

   .. code-block:: bash

      symbol-bootstrap start -p mainnet -a dual -c supernode.yml

   The ``start`` command will create the node configuration and then launch it.

   .. note:: For test purposes you can use |codename|'s TESTNET using ``-p testnet``.

3. Make sure your node is **sufficiently funded**. Your main account must hold at least **1M** |networkcurrency| :ref:`to be eligible as a supernode <supernode-program>`.

   You can find the node's main account address in the ``target/addresses.yml`` file. 

   On the TESTNET, you can **send tokens** to your node's main account using the `Symbol Faucet <http://faucet.testnet.symboldev.network>`__. If you need more tokens than the faucet can serve, connect to `NEM's Telegram Help Desk <https://t.me/nemhelpdesk>`__ and contact `cryptobeliever <https://t.me/cryptobeliever>`__.

4. **Register the node** by linking its remote, VRF and voting keys:

   .. code-block:: bash

      symbol-bootstrap link --useKnownRestGateways

   This sends a transaction linking the supplemental keys to the main account. This transaction pays a small :doc:`fee <../../concepts/fees>` so make sure your main account has **extra funds** beyond the requirements of the Supernode program.

   .. note:: During the test period, heavy testing might artificially increase transaction fees. If ``symbol-bootstrap`` appears to be frozen with the message ``Announcing Simple Transaction hash...`` try increasing the transaction fee with adding a ``--maxFee 10000000`` parameter, for example.

5. **Enroll in the Supernode program**.

   .. code-block:: bash

      symbol-bootstrap enrolRewardProgram --useKnownRestGateways

   This sends a transaction to the Controller address, which includes the node's public key and its monitoring agent's public URL.

   See the note regarding fees in the previous step.

   From this point, the :ref:`reward programs controller <reward-programs-controller>` on the network will monitor the node.

.. _enroll-supernode-manually:

********
Manually
********

If you don't want (or cannot) use Symbol Bootstrap you can still enroll your node in the Supernode program manually. These instructions are only available **for Linux**.

First off, make sure your node is up and running (or ready to run). `This guide <https://github.com/nemtech/catapult-server/blob/main/docs/RUNPEERLIN.md>`__ explains how to setup the ``catapult-server`` service, but you will need other services as well to fully configure a node (**Guide coming soon**).

The process requires **installing a monitoring agent** and **announcing a special transaction**. You are going to create a few files, so please create a folder to keep your filesystem tidy.

1. **Download the node monitoring agent**:

   `Download the Linux binary <https://symbol-node-reward.s3-eu-west-1.amazonaws.com/packages/1.0.0/agent_binary/agent-linux.bin>`__ and make it executable:

   .. code-block:: bash

      wget https://symbol-node-reward.s3-eu-west-1.amazonaws.com/packages/1.0.0/agent_binary/agent-linux.bin
      chmod +x agent-linux.bin

2. **Create certificates** for the monitoring agent:

   The agent **authenticates** every connection to the :ref:`reward programs controller <reward-programs-controller>`, so you will need to create SSL certificates.

   Make sure you have `OpenSSL <https://www.openssl.org/>`__ installed (for example running ``sudo apt install openssl``) and then run:

   .. code-block:: bash

      openssl genrsa -out agent-key.pem 4096
      openssl req -new -key agent-key.pem -out agent-csr.pem \
              -subj "/C=US/ST=Oregon/L=Portland/O=Company Name/OU=Org/CN=www.example.com"
      openssl x509 -req -days 999 -in agent-csr.pem -out agent-crt.pem -signkey agent-key.pem

   You also need to download the **Symbol network CA certificate**. This allows the agent to authenticate connections to the node it is monitoring.

   .. code-block:: bash

      wget https://symbol-node-reward.s3-eu-west-1.amazonaws.com/mainnet/certs/ca-crt.pem

3. **Configure the monitoring agent**:

   Create a text file named ``agent.properties`` and add the content below, replacing ``NODE_PRIVATE_KEY`` and ``REST_GATEWAY_URL`` with the appropriate values:

   .. code-block:: properties

      NETWORK_TYPE=104 ; 104 for MAINNET, 152 for TESTNET
      ; Node's transport private key
      NODE_PRIVATE_KEY=●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
      LOGGER_FILE=agent.log
      ; Replace with the public host where your node is running (hostname or IP address)
      REST_GATEWAY_URL=http://my-symbol-node.com:3000
      REWARD_PROGRAM=SuperNode
      CONTROLLER_PUBLIC_KEY=68B6A1D2F292E75F9BB8E9EDDA086A7C293A198C9968FF7528374075AAF4D983
      CERTS_CA_FILE=ca-crt.pem
      CERTS_KEY_FILE=agent-key.pem
      CERTS_CERT_FILE=agent-crt.pem

   .. note:: By default the agent uses port number ``7880`` to communicate. If this port is already in use (by a NIS1 supernode agent, for example) add an ``HTTP_PORT=`` line with a different port number.

   You need to specify ``REST_GATEWAY_URL`` because the agent and the node's REST gateway might be running on different machines. This URL is how the agent will contact the node's REST interface. If they are on the same machine you can simply use ``REST_GATEWAY_URL=http://localhost:3000``.

4. **Run the agent**:

   Run this command and **keep it running** for as long as your node runs. Remember that the Controller will periodically query the agent and your node might be **removed from the Supernode reward program** if the agent fails to answer enough times.

   .. code-block:: bash

      ./agent-linux.bin --config agent.properties

5. **Send the enrolling message**

   The last bit is to **notify the Controller** that your node wants to enroll the Supernode program. This is done through a conventional :ref:`Transfer Transaction <transfer-transaction>` with no mosaics and a special message:

   .. code-block:: text

      enrol NODE_PUBLIC_KEY AGENT_URL

   - Replace ``NODE_PUBLIC_KEY`` with your node's **transport** public key. You can get it from the ``nodePublicKey`` field in http://localhost:3000/node/info, for example, when your node is running.

   - Replace ``AGENT_URL`` with ``https://`` + the host where you are running the agent + ``:7880``. This URL must be **publicly accessible**. For example: ``https://my-symbol-node.com:7880``. IP addresses are also valid. Use the port number you specified in step 3 above if you didn't use the standard one.

   Finally, the recipient address of this transaction is ``TDL73SDUMPDK7EOF7H3O4F5WB5WHG2SX7XUSFZQ``.

   The transaction can be announced using :doc:`symbol-cli <../../cli>`:

   .. code-block:: symbol-cli

      symbol-cli transaction transfer --mode normal --sync \
                 --recipient-address TDL73SDUMPDK7EOF7H3O4F5WB5WHG2SX7XUSFZQ \
                 --message "enrol NODE_PUBLIC_KEY AGENT_URL" \
                 --mosaics @symbol.xym::0

   **This transaction must be signed by your node's main account**, so make sure it is the default profile in ``symbol-cli``.

   This transaction pays a small :doc:`fee <../../concepts/fees>` so make sure your main account has **extra funds** beyond the requirements of the Supernode program.

******************
Validate the setup
******************

You can **validate your node** by checking that all services are running properly. Check that the following URLs return valid data:

* `http://localhost:3000/chain/info <http://localhost:3000/chain/info>`__: Node's connection to the network.
* `http://localhost:3000/node/info <http://localhost:3000/node/info>`__: Node's health.
* `https://localhost:7880/metadata <https://localhost:7880/metadata>`__: Agent's report.

And then check again that they are accessible through your public host name.
