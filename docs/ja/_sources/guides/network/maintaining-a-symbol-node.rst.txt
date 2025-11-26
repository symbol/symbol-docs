.. post:: 06 Jun, 2021
    :category: Network
    :excerpt: 1
    :nocomments:

    How to keep your Symbol node up and running healthily.

##################
Maintaining a Node
##################

Once you have created a |codename| node, be it :doc:`manually <running-a-symbol-node-manually>` or :doc:`using Symbol bootstrap <running-a-symbol-node>`, the node is **mostly autonomous**. But there is still a little bit of maintenance required, explained in this guide.

- Regular nodes only need to take care of the :ref:`maintain-client-version` section.

- :ref:`Voting nodes <voting-node-program>` also need to read the :ref:`maintain-voting-keys` section.

.. _maintain-client-version:

Client updates
**************

New |codename| client versions will be released **periodically**. If you want to benefit from the added features and bugfixes you will need to **update your node** to use the latest client version.

Additionally, if your node's client version falls too far behind, other nodes might refuse to connect to it.

The main version to keep track of is the **Catapult client version**, since this component is used by all :ref:`peer nodes <peer-node>`. Additionally, :ref:`API nodes <api-node>` need to keep track of the **REST component version** too.

- **Finding out what are the latest versions**:

  Whenever there is a new client version released it will be announced through the Symbol |twitter| and the |discord| channel. You can also keep an eye on the different |github| repositories and :doc:`the compatibility matrix page <../../compatibility>` to know the latest client and REST versions.

- **Finding out your node versions**:

  You can find the versions used by your node in the `Symbol Explorer nodes list <https://symbol.fyi/nodes>`__.

  Additionally, if your node is an :ref:`API node <api-node>`, you can also query it directly:

  - **Client version**: ``/node/info`` endpoint, ``version`` property.

    .. note::

       The ``version`` is encoded as a single 4-byte integer, where the Most-Significant Byte encodes the Major version, and the rest of bytes are the Minor, the Micro and the Patch version.

       For example, version **16777472** (decimal) is **01000100h** (hex), which corresponds to version **1.0.1.0**.

  - **REST version**: ``/node/server`` endpoint, ``restVersion`` property.

    ``restVersion`` is a version string like **"2.3.6"**, for example.

The exact procedure to update your node depends on how you created it. Read the appropriate section below.

.. _update-bootstrap-nodes:

Update nodes created with Bootstrap
===================================

If you used Symbol Bootstrap to create your node (following the :doc:`running-a-symbol-node` guide), keeping it up to date is very simple.

1. **Update Symbol Bootstrap** first (see the :doc:`using-symbol-bootstrap` guide for more details):

   .. code-block:: bash

      npm install -g symbol-bootstrap

2. Then **move to the folder** where the node's data folder is (typically ``target``) and **stop the node**.

   The exact stop command depends on whether your node was running in detached mode or not:

   - **If you started in detached mode** with ``symbol-bootstrap start --detached``:

     From the folder containing the ``target`` folder type:

     .. code-block:: symbol-bootstrap

        symbol-bootstrap stop

   - **If you did not start in detached mode**:

     You must have a terminal running somewhere with all the output from the client. Stop it by pressing ``Ctrl+C``.

3. Next **make a backup copy** of the node's data folder:

   .. code-block:: bash

      cp -r target target.BAK

4. Finally, **restart the node** with the ``--upgrade`` flag to update all necessary component versions.

   Add also the ``--detached`` flag to start in detached mode if you need it.

   .. code-block:: symbol-bootstrap

      symbol-bootstrap start --upgrade -c custom-presets.yml

5. Once the node is up and running again, and you **verify that the component versions have been updated**, you can **remove the backup copy**.

Update nodes created manually
=============================

If you followed the :doc:`running-a-symbol-node-manually` guide, you need to rebuild the Catapult client and keep the previous data folder so the same accounts and cached data is reused.

In summary, you need to:

- Stop the running Catapult client with ``Ctrl+C``.
- Update the Catapult client source repository with the latest version and build it again following the `Catapult client <https://github.com/symbol/symbol/tree/main/client/catapult/docs>`__ instructions.
- Restart the client from the same folder it was initially launched. Data and configuration files will be reused.

.. note::

   The above procedure works but brings the client offline while the new version is being built, which could be a lengthy process.

   If you **install** the client (with ``make install``) instead of running it from the same folder where it is built, though, you have the option to build the new version while the previous one is still running. In this way the service interruption should be minimal.

   The steps then would be:

   - Update the Catapult client source repository and build it again.
   - Stop the running Catapult client.
   - Install the new version of the client.
   - Restart the client.

.. _maintain-voting-keys:

Voting key renewal
******************

If your node is a :ref:`Voting node <voting-node-program>` it requires a valid voting key to operate. For security these keys expire after 6 months, so you need to renew them as part of the regular node maintenance.

Read the appropriate section about renewing the voting keys depending on whether you used Symbol Bootstrap or not to build your node:

- :ref:`Voting key renewal using Bootstrap <bootstrap-voting-key-renewal>`
- :ref:`Manual voting key renewal <manual-voting-key-renewal>`