###############
Reward Programs
###############

:doc:`Nodes <node>` **are the backbone of any blockchain**, since they are the ones creating and storing the blocks, among other things. It is therefore **critical** that as many nodes as possible are active in the network at all times.

Beyond the direct **block rewards** (:doc:`fees` and :doc:`inflation`) that nodes obtain for producing blocks, |codename| **provides a series of special Reward Programs** aimed at further encouraging users to create and maintain nodes.

Each of these programs rewards **a different aspect of the network**:

- :ref:`voting-node-program`: For nodes supporting Finalization, |codename|'s fork resolution mechanism.
- *More programs might be added in the future*.

In most cases, node owners wishing to benefit from these programs must explicitly **enroll** to them. The descriptions below contain **guides** explaining how to enroll to each program.

.. _voting-node-program:

*******************
Voting Node Program
*******************

|codename| provides **fast response times** even when **network disconnections** isolate some of the nodes. When connectivity is restored any **conflicts** which might have arisen (network forks) are resolved by the :ref:`finalization` process. This process requires some nodes to periodically **vote** on which branches are valid according to their records. Blocks deemed invalid are then :ref:`rolled back <rollbacks>`.

This program aims at ensuring that enough **voting nodes** are always present in the network so fork resolution is conducted reliably.

Requirements
============

Voting nodes are regular nodes meeting the following additional requirements:

.. csv-table::
    :header: "Parameter", "Requirement"
    :delim: ;
    :widths: 30 70

    **Bonded Deposit**; At least **3 million** |networkcurrency| must be stacked on the node.
    **Voting keys**; The node must signal its interest in becoming a voting node by registering its :ref:`votingkeylinktransaction`.

Rewards
=======

**5% of all block harvesting rewards** is set aside for voting nodes. After each :ref:`finalization round <finalization>` these rewards are **evenly distributed** among all nodes that participated in that round (and paid on a daily basis). There is **no explicit enrollment required** for this program.

.. note::

    If you created your node using Symbol Bootstrap, :ref:`follow this guide to enable voting <bootstrap-enable-voting>`.

    Otherwise, :ref:`follow this guide to enable voting manually <manual-enable-voting>`.

See the complete `Terms & Conditions <https://drive.google.com/file/d/1Q-Ph2KGKN3Vr6GVampFvlfitZHirhthA/view?usp=sharing>`__.
