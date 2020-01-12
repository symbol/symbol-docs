#########
Consensus
#########

|codename| uses a modified proof of stake consensus algorithm called Proof of Stake Plus (**PoS+**).

In a basic Proof of Stake (|pos|) consensus algorithm, the formation of a subsequent block in a blockchain is stochastically assigned to a coin-holding stakeholder of the blockchain weighed by a combination of factors relating to the stakeholders' wealth.

The improved protocol considers accounts' stakes in the network and rewards active supporters based on their activity, diminishing the rich-gets-richer problem.

.. _importance-calculation:

*******
Factors
*******

The algorithm considers the following factors to improve the ecosystem’s health perspective:

* **Stake**: The total amount of the :ref:`harvesting mosaic <harvesting-mosaic>` owned. Owners with larger balances should have the incentive to see the ecosystem flourish.
* **Transactions**: The total amount of fees paid by an account. Being an active account in the network should be encouraged.
* **Nodes**: The number of times an account is a beneficiary of a block. The network should incentivize active accounts running nodes for securing the network.

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
