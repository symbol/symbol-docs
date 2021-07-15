##################################
Enrolling to the Supernode program
##################################

This guide shows how to create a node and register it as a **Supernode**. Make sure you know about the :ref:`supernode-program` before continuing with this guide.

The :doc:`running-a-symbol-node` guide contains more details on how to create a |codename| node and its content **partially overlaps** this guide. You can either follow that guide to build a **regular node** or this one to build a **supernode**, but **not both**.

The next two sections explain how to create your supernode :ref:`using Symbol Bootstrap <enroll-supernode-with-bootstrap>`, which is the easiest method, and :ref:`manually <enroll-supernode-manually>`.

.. note:: The Supernode program is only open for testing on TESTNET right now. The program will be open on MAINNET shortly.

.. _enroll-supernode-with-bootstrap:

**********************
Using Symbol Bootstrap
**********************

Symbol Bootstrap is the **easiest way** to create and run |codename| nodes. :doc:`Learn about this tool <using-symbol-bootstrap>` if you are not familiar with it. Note that, as stated in that guide, ports 3000, 7881 and 7900 need to be open for the node to work.

1. Make sure you are using the **latest Symbol Bootstrap** by running:

   .. code-block:: bash

      npm install -g symbol-bootstrap

   It should be at least **version 1.0.5**.

2. Create a :ref:`custom preset file <symbol-bootstrap-presets>` named, for example, ``supernode.yml``:

   .. code-block:: yaml

      nodes:
        - rewardProgram: SuperNode
          host: my-symbol-node.com # Could also be an IP address

   You can further customize this preset file:

   - If you want the node to be also a :ref:`Voting node <finalization>` (and benefit from the :ref:`Voting Node rewards program <voting-node-program>`) add also ``voting: true`` below the ``host`` line, with the same indentation as it.

   - If you need to change the default port that the monitoring agent uses (7881) you can add ``rewardProgramAgentPort: 7882`` (for example) **at the top of the file**.

   - If you already have some of the required node accounts (main, transport, remote, VRF or voting) `you can provide them in the preset file too <https://github.com/symbol/symbol-bootstrap/blob/main/docs/presetGuides.md#user-content-specify-the-nodes-private-keys>`__.

     .. note:: When managing your node through a :doc:`multisig account <../../concepts/multisig-account>`, the **main** account in the above preset file must be **the multisig account** (and **not** any of its cosignatories).

   See the full list of possible customizations in the `Symbol Bootstrap documentation <https://github.com/symbol/symbol-bootstrap/blob/main/docs/presetGuides.md>`__.

3. **Create and run the node** using the new preset file:

   Along with the standard node services, this will also download and install the **monitoring agent**.

   .. code-block:: bash

      symbol-bootstrap start -p mainnet -a dual -c supernode.yml

   The ``start`` command will create the node configuration and then launch it.

   .. note:: For test purposes you can use |codename|'s TESTNET using ``-p testnet``.

4. Make sure your node is **sufficiently funded**. Your main account must hold at least **1M** |networkcurrency| :ref:`to be eligible as a supernode <supernode-program>`.

   You can find the node's main account address in the ``target/addresses.yml`` file.

   On the TESTNET, you can **send tokens** to your node's main account using the `Symbol Faucet <http://faucet.testnet.symboldev.network>`__. If you need more tokens than the faucet can serve, connect to `NEM's Telegram Help Desk <https://t.me/nemhelpdesk>`__ and contact `cryptobeliever <https://t.me/cryptobeliever>`__.

5. **Register the node** by linking its remote, VRF and voting keys.

   Without interrupting Symbol Bootstrap, open another terminal and go to the same folder you were before. Then run:

   .. code-block:: bash

      symbol-bootstrap link --useKnownRestGateways

   This sends a transaction linking the supplemental keys to the main account. This transaction pays a small :doc:`fee <../../concepts/fees>` so make sure your main account has **extra funds** beyond the requirements of the Supernode program.

   .. note:: During the test period, heavy testing might artificially increase transaction fees. If ``symbol-bootstrap`` appears to be frozen with the message ``Announcing Simple Transaction hash...`` try increasing the transaction fee by adding a ``--maxFee 10000000`` parameter, for example (these absolute units corespond to 10 |networkcurrency|).

6. **Enroll in the Supernode program**.

   .. code-block:: bash

      symbol-bootstrap enrollRewardProgram --useKnownRestGateways

   This sends a transaction to the Controller address requesting enrollment (see the note regarding fees in the previous step).

   From this point, the :ref:`reward programs controller <reward-programs-controller>` on the network will monitor the node.

You can now jump to the **Validation** section at the end of this guide.

.. _enroll-supernode-manually:

********
Manually
********

If you don't want (or cannot) use Symbol Bootstrap you can still enroll your node in the Supernode program manually. These instructions are only available **for Linux**.

First off, make sure your node is up and running (or ready to run). The :doc:`running-a-symbol-node-manually` guide explains how to setup the node.

After following that guide, you need to **install a monitoring agent** and **announce a special transaction**. You are going to create a few files, so please create a folder to keep your filesystem tidy (for example called ``agent`` inside Catapult client's ``_build`` folder).

1. **Download the node monitoring agent**:

   `Download the Linux binary <https://symbol-node-reward.s3-eu-west-1.amazonaws.com/packages/1.0.2-alpha.0/agent_binary/agent-linux.bin>`__ and make it executable:

   .. code-block:: bash

      wget https://symbol-node-reward.s3-eu-west-1.amazonaws.com/packages/1.0.2-alpha.0/agent_binary/agent-linux.bin
      chmod +x agent-linux.bin

2. **Create certificates** for the monitoring agent:

   The agent **authenticates** every connection to the :ref:`reward programs controller <reward-programs-controller>`, so you will need to create SSL certificates.

   Make sure you have `OpenSSL <https://www.openssl.org/>`__ at least **version 1.1.1**. You can install for example running ``sudo apt install openssl``.

   - Create a folder named ``certs`` and move inside it.

   - Create a new file named ``agent-ca.cnf`` with the following content:

     .. code-block:: ini

        [ca]
        default_ca = CA_default
        [CA_default]
        policy = policy_catapult
        [policy_catapult]
        commonName = supplied
        [req]
        prompt = no
        distinguished_name = dn
        [dn]
        CN = Agent CA
   
   - Then generate the certificate by running:

     .. code-block:: bash

        # Generate agent CA key pair
        openssl genpkey -out agent-ca.key.pem -outform PEM -algorithm ed25519

        # Create agent CA CSR
        openssl req -config agent-ca.cnf -key agent-ca.key.pem -new -out agent-ca.csr.pem

        # Base64 encode agent CA CSR file for later use
        base64 agent-ca.csr.pem --wrap 0 ; echo

     The last command outputs a string of characters. Copy them to be used later.

   - Finally, download the Symbol network CA certificate to allow the agent to authenticate connections to the node it is monitoring (Download only one):

     .. code-block:: bash

        # For MAINNET
        wget https://symbol-node-reward.s3-eu-west-1.amazonaws.com/mainnet/certs/controller-ca-crt.pem

        # For TESTNET
        wget https://symbol-node-reward.s3-eu-west-1.amazonaws.com/testnet/certs/controller-ca-crt.pem

   - Move out of the ``certs`` folder.

3. **Configure the monitoring agent**:

   Create a text file named ``agent.properties`` and add the content below, replacing ``NODE_PRIVATE_KEY`` and ``REST_GATEWAY_URL`` with the appropriate values:

   .. code-block:: properties

      ; Use 104 for MAINNET or 152 for TESTNET
      NETWORK_TYPE=104 
      LOGGER_FILE=agent.log
      ; Replace with the public host where your node is running (hostname or IP address)
      REST_GATEWAY_URL=http://my-symbol-node.com:3000
      REWARD_PROGRAM=SuperNode
      ; Replace with the main account's public key
      MAIN_PUBLIC_KEY=●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
      CERTS_CONTROLLER_CA_CERT_FILE=./certs/controller-ca-crt.pem
      CERTS_AGENT_CA_KEY_FILE=./certs/agent-ca.key.pem
      CONTROLLER_API_URL=http://node-monitoring.symbolblockchain.io:7890; MAINNET
      ; CONTROLLER_API_URL=http://node-monitoring.testnet.symboldev.network:7890; TESTNET

   .. note:: By default the agent uses port number ``7881`` to communicate. If this port is unavailable you can add an ``HTTP_PORT=`` line with a different port number.

   You need to specify ``REST_GATEWAY_URL`` because this URL tells the controller how to contact the node's REST interface during the enrollment process and later monitoring.

4. **Run the agent**:

   Run this command and **keep it running** for as long as your node runs. Remember that the Controller will periodically query the agent and your node might be **removed from the Supernode reward program** if the agent fails to answer enough times.

   .. code-block:: bash

      ./agent-linux.bin --config agent.properties

   .. note:: Once the agent starts running, it will poll the Controller every 2 minutes until the enrollment is completed and new communication certificates are generated. At that point the agent just listens for commands from the Controller.

5. **Send the enrollment message**

   The last bit is to **notify the Controller** that your node wants to enroll in the Supernode program. This is done through a conventional :ref:`Transfer Transaction <transfer-transaction>` with no mosaics and a special message:

   .. code-block:: text

      enroll AGENT_URL BASE64_ENCODED_AGENT_CA_CSR

   - Replace ``AGENT_URL`` with ``https://`` + the host where you are running the agent + ``:7881``. This URL must be **publicly accessible**. For example: `https://my-symbol-node.com:7881 <https://my-symbol-node.com:7881>`__. IP addresses are also valid. Use the port number you specified in step 3 above if you didn’t use the standard one.

   - Replace ``BASE64_ENCODED_AGENT_CA_CSR`` with the output of step 2.

   Finally, the recipient address for this transaction is:

   - ``NDG2F6IHON7EDOXZCHSTSJ2YMUHDFXAQ2EUZHFA`` for MAINNET.
   - ``TDL73SDUMPDK7EOF7H3O4F5WB5WHG2SX7XUSFZQ`` for TESTNET.

   The transaction can then be announced using :doc:`symbol-cli <../../cli>`:

   .. code-block:: symbol-cli

      symbol-cli transaction transfer --mode normal --sync \
                 --recipient-address NDG2F6IHON7EDOXZCHSTSJ2YMUHDFXAQ2EUZHFA \
                 --message "enrol AGENT_URL BASE64_ENCODED_AGENT_CA_CSR" \
                 --mosaics @symbol.xym::0

   **This transaction must be signed by your node's main account**, so make sure it is the default profile in ``symbol-cli``.

   This transaction pays a small :doc:`fee <../../concepts/fees>` so make sure your main account has **extra funds** beyond the requirements of the Supernode program.

   .. note::
      If the default fee used by ``symbol-cli`` is too small for the current network conditions, you might see the program get stuck processing the **Transaction announced** step.

      If the command does not finish within 5 minutes, press ``Ctrl+C`` and try again adding the ``--max-fee 1000000`` parameter, which uses a **1 XYM** fee. Feel free to use a different number after reading the :doc:`fees documentation <../../concepts/fees>`.

******************
Validate the setup
******************

You can **validate your node** by checking that all services are running properly. Check that the following URLs return valid data:

* `http://localhost:3000/chain/info <http://localhost:3000/chain/info>`__: Node's connection to the network.
* `http://localhost:3000/node/info <http://localhost:3000/node/info>`__: Node's health.
* `https://localhost:7881/metadata <https://localhost:7881/metadata>`__: Agent's report (see note below).

And then check again that they are accessible through your public host name.

.. note::
   To access the last endpoint you will need to use a commandline tool that allows disabling TLS checks, for example:

   .. code-block:: bash

      curl --insecure https://localhost:7881/metadata

   or:

   .. code-block:: bash

      wget --no-check-certificate https://localhost:7881/metadata

Once enrollment is complete, you can use the `Symbol Explorer (MAINNET) <http://explorer.symbolblockchain.io/nodes>`__ (or `TESTNET <http://explorer.testnet.symboldev.network/>`__) to check that your node appears in the list with the appropriate Reward Program box (The information refreshes every 30 seconds).
