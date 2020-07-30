#########
Consensus
#########

The consensus protocol is the dynamic method through which blockchain systems reach an agreement and make decisions.
|codename| utilizes an innovative mechanism called the Proof-of-Stake Plus, a modified version of the popular Proof-of-Stake (|pos|) protocol. 

In a basic Proof of Stake consensus algorithm, the formation of a subsequent block in a blockchain is stochastically assigned to a coin-holding stakeholder of the blockchain weighed by a combination of factors relating to the stakeholders' wealth.
The PoS+ protocol also considers accounts' stakes, but it is designed to promote the ecosystem's health by rewarding participants based on their activity.

.. _importance-calculation:

*******
Factors
*******

The algorithm considers the following factors to improve the ecosystem’s health perspective:

* **Stake**: The total amount of the :ref:`harvesting mosaic <harvesting-mosaic>` owned. Owners with larger balances have the incentive to see the ecosystem flourish.
* **Transactions**: The total amount of fees paid by an account. Being an active account in the network is encouraged.
* **Nodes**: The number of times an account is a beneficiary of a block. The network incentivizes active accounts running nodes for securing the network.

All high-value accounts receive an **importance score** based on these three factors that determines the probability to :doc:`harvest <harvesting>` a block.

******
Scores
******

The network calculates the following sub scores for all high-value accounts for each factor:

* **Stake Score (S`)**: Percentage of the effective balance of all high value accounts at time P.
* **Transaction Score (T`)**: Percentage of total transaction fees among all high-value accounts in period P-1 to P.
* **Node Score (N`)**: Percentage of total beneficiaries among all blocks in period P-1 to P.

*********
Constants
*********

Each network can define custom consensus algorithm :ref:`constants <config-network-properties>`.

.. csv-table::
    :header: "Constant", "Value", "Description"
    :delim: ;
    :widths: 30 30 40

    a; 0.05; Network wide contribution of activity score.
    p; 10000; Constants to tune phasing out of activity score.
    t; 0.8; Transaction score multiplier.
    n; 0.2; Node score multiplier.

***********
Calculation
***********

The importance can be calculated for each account in the following manner:

.. math::

    (1 - a) * (S') + a * || p / (S') * (t * (T') + n * (N')) ||

The combination of Transaction Score and Node Score has a multiplier effect when Stake Score is low.
Conversely, the multiplier effect is insignificant when Stake Score is high.

.. |pos| raw:: html

    <a href="https://en.wikipedia.org/wiki/Proof_of_stake" target="_blank">PoS</a>

Continue: :doc:`Harvesting <harvesting>`.
