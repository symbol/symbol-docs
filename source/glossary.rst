########
Glossary
########

.. glossary::

    Absolute Amount
      A method of measuring amounts of mosaics while taking into account their divisibility. It is figured out by multiplying the relative amount by 10\ :sup:`divisibility`. For example, if the mosaic has divisibility 2, to send 10 units (relative) you should define 1000 (absolute) instead.

    Account
      A container for assets, which can only be modified with its private key. An account always has two keys (private and public) and an address. Read :doc:`more <concepts/account>`.

    Account Link Transaction
      A type of transaction used to transfer an account importance score to a proxy account. This is required for all accounts that wish to activate :ref:`delegated harvesting <delegated-harvesting>`. Read :ref:`more <account-key-link-transaction>`.

    Account Restrictions
      A configurable set of smart rules to block announcing or receiving transactions for a specific account. Read :doc:`more <concepts/account-restriction>`

    Aggregate Transaction
      A type of transaction that merges multiple transactions into one by generating a one-time disposable smart contract. Read :doc:`more <concepts/aggregate-transaction>`.

    Aggregate Bonded (partial transaction)
      An Aggregate Transaction is bonded when it requires signatures from multiple participants. Read :ref:`more <aggregate-bonded>`.

    Aggregate Complete
      An Aggregate Transaction is complete when all the required participants have signed it. Read :ref:`more <aggregate-complete>`.

    Alias
      The :doc:`namespace <namespace>` linked to an account or mosaic using Alias transactions. An alias and its linked object can be used interchangeably when sending a transaction. Read :ref:`more <alias>`.

    API Nodes
      Nodes responsible for storing data in a readable form in MongoDB. They are also responsible for collecting the cosignatures of :ref:`aggregated bonded transactions <aggregate-bonded>`.

    Automated Delegated Harvester Detection
      The automatic process by which Symbol servers allows accounts to register as :ref:`delegated harvesters <delegated-harvesting>` via special transfer messages.

    Catapult
      The original project alias for NEM 2.0 - later labeled as Symbol.

    Cosign
      The act providing a signature to approve a transaction.

    Cosignatories
      Accounts that act as account managers to :doc:`multisig accounts <concepts/multisig-account>`. Cosignatories need to sign multisig account transactions before they can be announced to the network.

    Cross Chain Swap
      A built-in feature of Symbol which enables the trading of tokens across different blockchains without using an intermediary party (e.g. an exchange service). Read :doc:`more <concepts/cross-chain-swaps>`.

    Deadline
      A time window for a transaction to be accepted before it reaches its expiration. The transaction is eliminated when the deadline is reached and all the nodes reject the transaction. By default, the SDK sets the deadline to 2 hours, but it can be extended up to 24 hours.

    Delegated Harvesting
      A method of harvesting that allows users to receive rewards without having to run a node locally by delegating their importance scores to a brand new proxy account. Read :ref:`more <delegated-harvesting>`.

    Divisibility
      The property of mosaics that enable fractional amounts. The number of divisibility refers to the decimal place to which the mosaic can be divided.

    Duration
      Length of time measured in :doc:`blocks <concepts/block>`. Each block on the Symbol blockchain takes about ~15 seconds to harvest.

    Effective Fee
      The :doc:`fee <concepts/fees>` to be paid for a transaction. Calculated by reading the fee multiplier from the block in which the transaction got confirmed and multiplying it by the size of the transaction.

    Fee Multiplier
      A multiplier used to calculate the effective :doc:`fee <concepts/fees>` of each transaction contained within a block.

    Global Restriction
      Network-wide rules that determine whether accounts will be able to send or receive a specific mosaic (with :doc:`Mosaic Restrictions <concepts/mosaic-restirction>` enabled).

    Harvester
      The account that :doc:`harvests <concepts/harvesting>` a block. The account is rewarded with the transaction fees added in the block and the :doc:`inflation <concepts/inflation>` tokens generated.

    Harvesting
      The process of creating new blocks on the Symbol blockchain. Read :doc:`more <concepts/harvesting>`.

    Harvesting Beneficiary
      An account determined by the node operator that shares a portion of the block rewards.

    Hash Lock Transaction
      A type of transaction which locks funds for a certain amount of :doc:`blocks <concepts/block>`. This transaction is required before announcing an :ref:`Aggregate Bonded Transaction <aggregate-bonded>`. When the associated :doc:`Aggregate Transaction <concepts/aggregate-transaction>` is complete, the locked funds are returned to the original account. Read :ref:`more <hash-lock-transaction>`.

    Hashed Time Lock Contract (HTLC)
      A protocol which creates a trustless environment for the decentralized exchange of assets. It guarantees that a swap will take place if all the participants agree. On the other hand, if some of them decide not to conclude the process, each participant will receive their locked funds back.

    Importance Score
      A value calculated by the :doc:`PoS+ protocol <concepts/consensus-algorithm>` based on three factors that determines the probability that an account has to harvest a :doc:`block <concepts/block>`.

    Inflation
      Network configured increase in currency supply per block. The mosaics created due to inflation are included in the block reward. Read :doc:`more <source/inflation>`.

    Local Harvesting
      A method of :doc:`harvesting <concepts/harvesting>` executed by running a local node.

    Maximum Fee
      The maximum :doc:`fee <concepts/fees>` allowed by the sender to be paid for this transaction to be confirmed in a block.

    Merkle Tree
      A structure of nodes labeled by hashes. It is a :doc:`data validation <concepts/data-validation>` technique used by Symbol to store large data associated with a block that cannot be retrieved directly from the block header. It allows light clients to verify if an element (e.g. transaction, receipt statement) exists without demanding the entire ledger history.

    Messaging
      The ability to attach strings to :doc:`transactions <concepts/transfer-transaction>`.

    Metadata
      Additional information that can be attached to accounts, mosaics, or namespaces. Read :doc:`more <concepts/metadata>`.

    Minimum Approval
      Number of cosignatories required for the :doc:`multisignature account <concepts/multisig-account>` to execute a transaction.

    Minimum Removal
      Number of cosignatories required to remove a cosignatory from a :doc:`multisignature account <concepts/multisig-account>`.

    Mosaics
      Digital tokens on the Symbol blockchain used to represent fixed assets - set of multiple identical things that do not change. Read :doc:`more <concepts/mosaic>`.

    Mosaic Restriction
      A feature that allows mosaic creators to control which accounts can transact with the asset. It only affects mosaics with the restrictable property enabled explicitly at the moment of creation. Read :doc:`more <concepts/mosaic-restriction>`.

    Multi-level Multisignature Account
      An advanced built-in feature of Symbol that allows :doc:`multisignature accounts <concepts/multisig-account>` to be cosigners for other multisignature accounts, creating multiple layers of cosignatories. Multi-level multisignature accounts add “AND/OR” logic to multi-signature transactions.

    Multisignature (Multisig) Account
      Accounts that require additional signatures (from cosignatories) to initiate actions/transfers. Read :doc:`more <concepts/multisig-account>`.

    Namespaces
      Unique domain spaces on the Symbol blockchain which can be linked to Symbol accounts or mosaics. Functions similarly to internet domains. Read :doc:`more <concepts/namespace>`.

    Nanowallet
      Desktop NIS1 wallet created by the NEM Foundation.

    Network Fee Sink
      An account defined by the network operator that will receive a percentage of the :doc:`harvesting <concepts/harvesting>` rewards.

    NIS1
      The first version of NEM’s blockchain node that operates the public mainnet with the native currency XEM. First launched on March 31, 2015.

    Node Banning
      The act by which the Symbol network will prevent communication with a malicious remote node and reject incoming connections from it.

    Node Reputation
      A measure of trust that the Symbol network determines for each specific node. The network’s trust for a node increases with each successful interaction, and decreases for each failed attempt of communication.

    Off-chain
      Realm outside of the blockchain. Off-chain activity does not directly reflect on the blockchain.

    Peer Nodes
      Nodes that facilitate the blockchain process by verifying transactions and blocks, running the :doc:`consensus algorithm <concepts/consensus-algorithm>`, creating new blocks, and propagating the changes through the network.

    Persistent Delegated Harvesting Unlocking (PDHU)
      A feature that enables :ref:`delegated harvesters <delegated-harvesting>` to preserve their status despite connectivity problems of nodes. With PDHU, if a node experiences turbulence and reboots, the existing delegated harvesters will automatically reconnect when the node is back online.

    Private Key
      Cryptographic key that gives ultimate control over an account and its assets, and must thus be kept secret. It is paired with the public key in the key pair system.

    Proof-of-Stake Plus (PoS+)
      Symbol’s consensus protocol. It is a modified PoS protocol which considers users’ activity in the network in addition to their network stakes. The chance that accounts will have to harvest a block is calculated through their importance scores. Read :doc:`more <concepts/consensus-algorithm>`.

    Public Key
      The public identifier of the key pair, which can be disseminated widely. It is used to prove that a transaction was signed with the paired private key. The public key is cryptographically derived from the private key.

    Receipt
      Record of proof for every hidden change on the blockchain. The collection of receipts are hashed into a merkle tree and linked to a block. Read :doc:`more <concepts/receipt>`.

    Reference Mosaic
      A mosaic selected by the mosaic creator to define mosaic restrictions that depend directly on the selected mosaic's global restrictions.

    Rental Fee
      :doc:`Fees <concepts/fees>` required to register a :doc:`namespace <concepts/namespace>` or extend its duration. The default namespace rental fees are configurable per network, but the network dynamically adjusts the namespace rental fees over time.

    Rollback
      The act of undoing a :doc:`block(s) <concepts/block>` that was previously confirmed.

    Secret Lock Transaction
      A type of transaction between two accounts where the mosaics remain locked until the recipient presents a valid SecretProofTransaction. Otherwise, the funds are returned to the sender. Read :ref:`more <secret-lock-transaction>`.

    Secret Proof Transaction
      A type of transaction through which the recipient of a SecretLockTransaction provides proof and unlocks the mosaics. Read :ref:`more <secret-lock-transaction>`.

    Spam Throttle
      A feature which provides Symbol network protection against being spammed with lots of unconfirmed transactions.

    Subnamespaces
      A unique domain on the Symbol blockchain that is a part of a larger domain under the :doc:`namespace <concepts/namespace>` hierarchy. Subnamespaces can only exist in conjunction with a root namespace.

    Symbol Software Development Kit (SDK)
      The primary software development tool to create Symbol components, such as additional tools, libraries, or applications. It enables developers to focus on their product rather than on the specific API details due to its higher abstraction. Read :doc:`more <sdk>`.

    Symbol Command-Line Interface (CLI)
      The open-source command-line interface to interact with the Symbol blockchain.

    Symbol Extensions
      Plugins that can be added to the Symbol’s protocol to extend its capabilities. Allows developers to introduce different ways to alter the chain’s state via transactions without modifying the core engine or disrupting other features. Read :doc:`more <concepts/plugin>`.

    TLS
      Security protocol used to encrypting communication between peers on the Symbol blockchain.

    Transaction Plugins
      Set of plugins that determine the kinds of transactions the network supports.

    Transfer Transaction
      The most basic transaction used to send mosaics and messages between two accounts. Read :doc:`more <concepts/transfer-transaction>`.

    VRF
      VRF stands for verifiable random function. All potential harvesting accounts must link to a second public key by announcing a VrfKeyLinkTransaction. The key linked is then used to randomize block production and leader/participant selection.

    XYM
      The native currency of the Symbol blockchain.
