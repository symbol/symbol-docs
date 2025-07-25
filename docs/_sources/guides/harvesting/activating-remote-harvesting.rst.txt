.. post:: 26 Jan, 2021
    :category: Harvesting
    :tags: SDK
    :excerpt: 1
    :nocomments:

############################
Activating remote harvesting
############################

Harvest new blocks through a proxy account for added security.

************
Introduction
************

:ref:`Remote harvesting <remote-harvesting>` enables **node owners** to receive rewards from creating new blocks **without exposing their main account's private key** in the node's configuration files.

.. note:: Blocks can only be harvested by nodes. If you do not own a node but still want to receive harvesting fees you will have to **request a node to harvest for you** using :ref:`Delegated harvesting <delegated-harvesting>`.

This guide has **two sections**, depending on how you created your node: Using |symbol-bootstrap| or manually.

***********************************
Activation through Symbol Bootstrap
***********************************

If you have followed the :doc:`../network/running-a-symbol-node` guide then you have used |symbol-bootstrap| to create your node. **The out-of-the-box presets enable remote harvesting by default** so there is nothing you need to do if you enabled harvesting when following that guide.

To clarify, |symbol-bootstrap| automatically creates a remote account (labelled ``remote`` in the ``addresses.yml`` file) and sets it as the signer of the new blocks (using its private key in the ``harvesterSigningPrivateKey`` property). Then, the ``symbol-bootstrap link`` command announces the :ref:`vrfkeylinktransaction` transactions required to finish the activation.

.. note::
  It is worth noting that, although **this is NOT recommended**, you can omit the remote account and sign the new block **directly with your main account** by using a :ref:`custom preset file <symbol-bootstrap-presets>` with this line:

  .. code-block:: yaml

      nodeUseRemoteAccount: false

  Needless to say your main account's private key will then be present in the node configuration files and will be accessible if the node is compromised.

*****************
Manual activation
*****************

If you have deployed a node yourself, for example by following `the catapult-client instructions <https://github.com/symbol/symbol/blob/main/client/catapult/docs/RUNPEERLIN.md>`__, then you have to **enable harvesting manually**.

The `catapult-client documentation <https://github.com/symbol/symbol/blob/main/client/catapult/docs/RUNPEERLIN.md#user-content-enable-harvesting>`__ explains how to enable :ref:`local harvesting <local-harvesting>`, which stores your main account's private key on the client. This section explains how to enable :ref:`remote harvesting <remote-harvesting>` instead, which uses a proxy account and is therefore **much more secure**.

This will be done using the :doc:`symbol-cli </cli>` tool. The required steps are:

1. Set the **remote account** as the harvester in the node configuration.

2. Announce an :ref:`accountkeylinktransaction` linking your main and your remote accounts.

3. (Optional) Configure the **VRF account** if it is not already set.

Step 1: Setup the remote account
================================

Create a brand new account to act as the **remote account**. This account **must have never sent nor received any transaction**, and it cannot be involved in any transaction while it acts as remote account, so it is safest to create it from scratch.

Run this from a terminal:

.. example-code::

    .. code-block:: catapult-client

      catapult.tools.addressgen --network public
      # Change the network type to suit your needs

    .. code-block:: symbol-cli

      symbol-cli account generate
      # Do NOT save the account, and set the import type to PrivateKey

Note the **public** and **private** keys for this new account.

Now edit the ``config-harvesting.properties`` file (it should be in a ``resources`` directory if you followed `the catapult-client instructions <https://github.com/symbol/symbol/blob/main/client/catapult/docs/RUNPEERLIN.md>`__). Look for the ``harvesterSigningPrivateKey`` field and write the remote account's private key.

Step 2: Link the remote and main accounts
=========================================

Make sure you have configured :doc:`symbol-cli </cli>` so that your main account is your default profile (if this is not the case, use the ``--profile`` parameter).

Then run this command from a terminal:

.. code-block:: symbol-cli

  symbol-cli transaction accountkeylink --action Link -u <PUBLIC-REMOTE-KEY> --sync

Use the ``<PUBLIC-REMOTE-KEY>`` obtained in Step 1. The ``--sync`` parameter will wait until the transaction is confirmed. Check out the :doc:`fees documentation </concepts/fees>` to know how much to pay to announce this transaction.

Step 3: Configure the VRF account
=================================

All :ref:`eligible accounts <account_eligibility>` must have registered a VRF key. Check out the ``harvesterVrfPrivateKey`` field in the ``config-harvesting.properties`` file. If it's already filled-in, you can skip this step.

Otherwise, create another account just like you did in Step 1, to act as the VRF account:

.. example-code::

    .. code-block:: catapult-client

      catapult.tools.addressgen --network public
      # Change the network type to suit your needs

    .. code-block:: symbol-cli

      symbol-cli account generate
      # Do NOT save the account, and set the import type to PrivateKey

Write the **private key** in the ``harvesterVrfPrivateKey`` field of the configuration file, and announce a :ref:`vrfkeylinktransaction` to link the VRF and main accounts:

.. code-block:: symbol-cli

  symbol-cli transaction vrfkeylink --action Link -u <PUBLIC-VRF-KEY> --sync

***********
Final words
***********

The node should now be configured with remote harvesting. Keep these important points in mind, though:

- **Accounts with higher importance are selected more often to perform harvesting**. Even if you successfully enable remote harvesting, you will not harvest any block (nor receive any fees) unless your main account's :ref:`importance score <importance-calculation>` is high enough.

- **Importance score calculation does not happen continuously**. By default, account importance scores are recalculated every 1440 blocks (about every 12 hours). See the ``importanceGrouping`` property in the :ref:`Configuring network properties <config-network-properties>` guide.
