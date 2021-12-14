########
Glossary
########

.. glossary::

    Absolute Amount
      A method of measuring amounts of mosaics while taking into account their divisibility. It is figured out by multiplying the :term:`relative amount` by 10\ :sup:`divisibility`. For example, if the mosaic has divisibility 2, 10 relative units correspond to 1000 absolute units.

    Account
      A container for assets, which can only be modified with its private key. An account always has two keys (private and public) and an address. Read :doc:`more <../concepts/account>`.

    Account Link Transaction
      A type of transaction used to transfer an account importance score to a proxy account. This is required for all accounts that wish to activate :ref:`delegated harvesting <delegated-harvesting>`. Read :ref:`more <accountkeylinktransaction>`.

    Account Restrictions
      A configurable set of smart rules to block announcing or receiving transactions for a specific account. Read :doc:`more <../concepts/account-restriction>`

    Aggregate Bonded (partial transaction)
      An Aggregate Transaction is bonded when it requires signatures from multiple participants. Read :ref:`more <aggregate-bonded>`.

    Aggregate Complete
      An Aggregate Transaction is complete when all the required participants have signed it. Read :ref:`more <aggregate-complete>`.

    Aggregate Transaction
      A type of transaction that merges multiple transactions into one by generating a one-time disposable smart contract. Read :doc:`more <../concepts/aggregate-transaction>`.

    Agora
      The codename for a decentralized, peer-to-peer marketplace built on Symbol to enable the trading of mosaics.

    Alias
      The :doc:`namespace <../concepts/namespace>` linked to an account or mosaic using Alias transactions. An alias and its linked object can be used interchangeably when sending a transaction. Read :ref:`more <alias>`.

    AMA
      Ask Me Anything. An open questions session.

    AML
      Anti-Money Laundering.

    Andromeda
      The codename for a workflow product by :term:`NEM` that enables users to visually architect and deploy :term:`dApps <dApp>`.

    APAC
      Asia and Pacific region.

    API Nodes
      Nodes responsible for storing data in a readable form in MongoDB. They are also responsible for collecting the cosignatures of :ref:`aggregated bonded transactions <aggregate-bonded>`.

    APR
      Annual Percentage Rate.

    Arbitrage
      When a trader purchases an asset in one place and sells it in another place to profit from a deviation in natural prices between markets.

    Automated Delegated Harvester Detection
      The automatic process by which Symbol servers allows accounts to register as :ref:`delegated harvesters <delegated-harvesting>` via special transfer messages.

    Backrunning
      To broadcast ``transactionA`` with slightly lower gas (or fees) than an already pending ``transactionB`` so that ``transactionA`` gets mined *right after* ``transactionB`` in the same block.

    BLS
      A Boneh–Lynn–Shacham signature is a cryptographic signature scheme which allows a user to verify that a signer is authentic.

    BTC
      Bitcoin.

    Catapult
      The original project alias for :term:`NEM` 2.0 - later labeled as Symbol.

    CBDC
      Central Bank Digital Currency.

    CLI
      Command-Line Interface. A Program which is entirely used from a terminal console, using only the keyboard. Symbol has a CLI tool to interact with the blockchain. Read :doc:`more <../cli>`.

    CMC
      Coin Market Cap. A web page.

    Cosignatories
      Accounts that act as account managers to :doc:`multisig accounts <../concepts/multisig-account>`. Cosignatories need to sign multisig account transactions before they can be announced to the network.

    Cosign
      The act providing a signature to approve a transaction.

    Cross Chain Swap
      A built-in feature of Symbol which enables the trading of tokens across different blockchains without using an intermediary party (e.g. an exchange service). Read :doc:`more <../concepts/cross-chain-swaps>`.

    CSD
      Central Securities Deposit.

    DAO
      Decentralized Autonomous Organization.

    dApp
      Decentralized Application. An application that runs on a blockchain instead of a single computer. The term is slightly abused so, in a more general sense, it also means any application which makes use of a blockchain.

    DDH
      Decisional Diffie-Hellman.

    DD
      Due Diligence.

    Deadline
      A time window for a transaction to be accepted before it reaches its expiration. The transaction is eliminated when the deadline is reached and all the nodes reject the transaction. Read :ref:`more <transaction-definition>`.

    DeFi
      Decentralized Finance, as opposed to Traditional Finance (TradFi).

    Delegated Harvesting
      A method of harvesting that allows users to receive rewards without having to run a node locally by delegating their importance scores to a brand new proxy account. Read :ref:`more <delegated-harvesting>`.

    DEX
      Decentralized Exchange.

    DID
      Decentralized ID.

    Divisibility
      The property of mosaics that enable fractional amounts. The number of divisibility refers to the decimal place to which the mosaic can be divided.

    DTC
      Direct To Consumer, i.e. mass market.

    Duration
      Length of time measured in :doc:`blocks <../concepts/block>`. Each block on the Symbol blockchain takes about 30 seconds to harvest.

    E2E
      End-To-End.

    Effective Fee
      The :doc:`fee <../concepts/fees>` to be paid for a transaction. Calculated by reading the fee multiplier from the block in which the transaction got confirmed and multiplying it by the size of the transaction.

    EMEA
      Europe, Middle-East and Africa.

    ERC
      Ethereum Request for Comment. Commonly utilized to refer to a token standard on the EVM (such as ERC-20, ERC-721, ERC-1155).

    ETH
      Ethereum.

    EVM
      Ethereum Virtual Machine.

    Fee Multiplier
      A multiplier used to calculate the effective :doc:`fee <../concepts/fees>` of each transaction contained within a block.

    FFT
      Fast Fourier Transform.

    Flashbots
      A research and development organization working on mitigating the negative effects of MEV extraction techniques.

    Frontrunning
      In context of cryptocurrencies, Trying to include *your* transaction *in front of* some other transaction. This is more important in case of DeFi markets, where gains can be made from front-running.

    Global Restriction
      Network-wide rules that determine whether accounts will be able to send or receive a specific mosaic (with :doc:`Mosaic Restrictions <../concepts/mosaic-restriction>` enabled).

    Harvester
      The account that :doc:`harvests <../concepts/harvesting>` a block. The account is rewarded with the transaction fees added in the block and the :doc:`inflation <../concepts/inflation>` tokens generated.

    Harvesting Beneficiary
      An account determined by the node operator that shares a portion of the block rewards.

    Harvesting
      The process of creating new blocks on the Symbol blockchain. Read :doc:`more <../concepts/harvesting>`.

    Hash Lock Transaction
      A type of transaction which locks funds for a certain amount of :doc:`blocks <../concepts/block>`. This transaction is required before announcing an :ref:`Aggregate Bonded Transaction <aggregate-bonded>`. When the associated :doc:`Aggregate Transaction <../concepts/aggregate-transaction>` is complete, the locked funds are returned to the original account. Read :ref:`more <hashlocktransaction>`.

    HTLC
      Hashed Time Lock Contract. A protocol which creates a trustless environment for the decentralized exchange of assets. It guarantees that a swap will take place if all the participants agree. On the other hand, if some of them decide not to conclude the process, each participant will receive their locked funds back.

    Hermes
      Messenger of the Gods. Codename for Symbol's next wallet project.

    ICO
      Initial Coin Offering.

    Importance Score
      A value calculated by the :doc:`PoS+ algorithm <../concepts/consensus-algorithm>` based on three factors that determine the probability that an account has to harvest a :doc:`block <../concepts/block>`.

    Inflation
      Network configured increase in currency supply per block. The mosaics created due to inflation are included in the block reward. Read :doc:`more <../concepts/inflation>`.

    IP
      Intellectual Property.

    IRS
      Internal Revenue Service. Who you pay your taxes to if you live in the US.

    IVC
      Incrementally Verifiable Computations.

    Kairos
      From Ancient Greek: "The right, critical, or opportune moment". The codename for a collectible card game, built on top of Symbol.

    KYV
      Know Your Customer.

    LATAM
      Latin America (Central and South America).

    Local Harvesting
      A method of :doc:`harvesting <../concepts/harvesting>` executed by running a local node.

    M&A
      Mergers & Acquisitions (NOT a chocolate candy).

    Maximum Fee
      The maximum :doc:`fee <../concepts/fees>` allowed by the sender to be paid for this transaction to be confirmed in a block.

    Merkle Tree
      A structure of nodes labeled by hashes. It is a :doc:`data validation <../concepts/data-validation>` technique used by Symbol to store large data sets associated with a block that cannot be retrieved directly from the block header. It allows light clients to verify if an element (e.g. transaction, receipt statement) exists without demanding the entire ledger history.

    Messaging
      The ability to attach text strings to :doc:`transactions <../concepts/transfer-transaction>`.

    Metadata
      Additional information that can be attached to accounts, mosaics, or namespaces. Read :doc:`more <../concepts/metadata>`.

    MEV
      Miner-Extractable Value - process of reorganising transactions inside a block by miners, to gain *something* (might be covered by secret contract).

    Minimum Approval
      Number of cosignatories required for the :doc:`multisignature account <../concepts/multisig-account>` to execute a transaction.

    Minimum Removal
      Number of cosignatories required to remove a cosignatory from a :doc:`multisignature account <../concepts/multisig-account>`.

    Mosaic Restriction
      A feature that allows mosaic creators to control which accounts can transact with the asset. It only affects mosaics with the restrictable property enabled explicitly at the moment of creation. Read :doc:`more <../concepts/mosaic-restriction>`.

    Mosaic
      A representation of any kind of asset on Symbol (fungible or non-fungible). Read :doc:`more <../concepts/mosaic>`.

    Multi-level Multisignature Account
      An advanced built-in feature of Symbol that allows :doc:`multisignature accounts <../concepts/multisig-account>` to be cosigners for other multisignature accounts, creating multiple layers of cosignatories. Multi-level multisignature accounts add “AND/OR” logic to multi-signature transactions.

    Multisignature (Multisig) Account
      Accounts that require additional signatures (from cosignatories) to initiate actions/transfers. Read :doc:`more <../concepts/multisig-account>`.

    Namespaces
      Unique domain spaces on the Symbol blockchain which can be linked to Symbol accounts or mosaics. Functions similarly to internet domains. Read :doc:`more <../concepts/namespace>`.

    NAM
      North America.

    Nanowallet
      Desktop :term:`NIS1` wallet created by the NEM Foundation.

    NEM
      The New Economy Movement.

    Network Fee Sink
      An account defined by the network operator that will receive a percentage of the :doc:`harvesting <../concepts/harvesting>` rewards.

    NFT
      A non-fungible token - a way to represent anything as an Ethereum-based asset.

    NGL
      NEM Group Limited.

    NIS1
      The first version of :term:`NEM`'s blockchain node that operates the public mainnet with the native currency :term:`XEM`. First launched on March 31, 2015.

    Node Banning
      The act by which the Symbol network will prevent communication with a malicious remote node and reject incoming connections from it.

    Node Reputation
      A measure of trust that the Symbol network determines for each specific node. The network's trust for a node increases with each successful interaction, and decreases for each failed attempt of communication.

    NODE_URL
      The URL of the node you want to use to access the network. All nodes should return the same information so it is not critical which one you use.

      Use the `Statistics Service <https://symbol.services/nodes>`__ (or the `Testnet Statistics Service <https://testnet.symbol.services/nodes?limit=10>`__) to retrieve a list of nodes, choose one and use its ``restGatewayUrl`` as your ``NODE_URL`` (Including the port number).

    NSL
      NEM Software Limited.

    Off-chain
      Realm outside of the blockchain. Off-chain activity does not directly reflect on the blockchain.

    Optimistic Rollups
      An Ethereum layer 2 scaling solution. `Optimistic Rollups <https://medium.com/stakefish/optimistic-rollups-how-they-work-and-why-they-matter-3f677a504fcf>`__.

    PDHU
      Persistent Delegated Harvesting Unlocking. A feature that enables :ref:`delegated harvesters <delegated-harvesting>` to preserve their status despite connectivity problems of nodes. With PDHU, if a node experiences turbulence and reboots, the existing delegated harvesters will automatically reconnect when the node is back online.

    Peer Nodes
      Nodes that facilitate the blockchain process by verifying transactions and blocks, running the :doc:`consensus algorithm <../concepts/consensus-algorithm>`, creating new blocks, and propagating the changes through the network.

    Perseus
      The codename for a end-to-end simulation platform by :term:`NEM` that allows backtesting of network upgrades. Will launch with Symbol support but other blockchains can be added.

    PoC
      Proof of Concept (NOT a consensus protocol).

    PoI
      Proof of Importance. The consensus protocol used by NIS1. Similar to PoS but measuring an account's activity besides its stake.

    PoS
      Proof of Stake. A consensus protocol.

    PoS+
      Proof-of-Stake Plus. Symbol's consensus mechanism. It is a modified PoS algorithm which considers users' activity in the network in addition to their network stakes. The chance that accounts will have to harvest a block is calculated through their importance scores. Read :doc:`more <../concepts/consensus-algorithm>`.

    PoW
      Proof of Work. A consensus protocol.

    Private Key
      Cryptographic key that gives ultimate control over an account and its assets, and must thus be kept secret. It is paired with the public key in the key pair system.

    Public Key
      The public identifier of the key pair, which can be disseminated widely. It is used to prove that a transaction was signed with the paired private key. The public key is cryptographically derived from the private key.

    Receipt
      Record of proof for every hidden change on the blockchain. The collection of receipts are hashed into a merkle tree and linked to a block. Read :doc:`more <../concepts/receipt>`.

    Reference Mosaic
      A mosaic selected by the mosaic creator to define mosaic restrictions that depend directly on the selected mosaic's global restrictions.

    Relative Amount
      A method of measuring amounts of mosaics without accounting for their divisibility. It is figured out by multiplying the :term:`absolute amount` by 10\ :sup:`divisibility`. For example, if the mosaic has divisibility 2, 10 relative units correspond to 1000 absolute units.

    Rental Fee
      :doc:`Fees <../concepts/fees>` required to register a :doc:`namespace <../concepts/namespace>` or extend its duration. The default namespace rental fees are configurable per network, but the network dynamically adjusts the namespace rental fees over time.

    Rollback
      The act of undoing a :doc:`block(s) <../concepts/block>` that was previously confirmed.

    Rug Pull
      A malicious maneuver where cryptocurrency developers abandon a project and run off with the funds.

    Sandwitch
      A type of front-running technique that's popular in DeFi. To make a sandwich, you find a pending transaction in the network and then try to surround the network by placing one order *just* before the transaction (front-running) and one order just after it (back-running).

    SDK
      Software Development Kit. A Software library used to simplify creating applications for a given platform. Read :doc:`more <../sdk>` about Symbol's SDK.

    Secret Lock Transaction
      A type of transaction between two accounts where the mosaics remain locked until the recipient presents a valid SecretProofTransaction. Otherwise, the funds are returned to the sender. Read :ref:`secretlocktransaction`.

    Secret Proof Transaction
      A type of transaction through which the recipient of a SecretLockTransaction provides proof and unlocks the mosaics. Read :ref:`secretlocktransaction`.

    Sharding
      An Ethereum scaling solution. `Sharding <https://ethereum.org/en/eth2/shard-chains/>`__.

    Spam Throttle
      A feature which provides Symbol network protection against being spammed with lots of unconfirmed transactions.

    Subnamespaces
      A unique domain on the Symbol blockchain that is a part of a larger domain under the :doc:`namespace <../concepts/namespace>` hierarchy. Subnamespaces can only exist in conjunction with a root namespace.

    SXDH
      Symmetric External Diffie-Hellman.

    Symbol Extensions
      Plugins that can be added to the Symbol's protocol to extend its capabilities. Allows developers to introduce different ways to alter the chain's state via transactions without modifying the core engine or disrupting other features. Read :doc:`more <../concepts/plugin>`.

    TLC
      Tender Loving Care.

    TLS
      Security protocol used to encrypting communication between peers on the Symbol blockchain.

    Token
      A representation of a digital asset.

    TPS
      Transactions Per Second.

    Transaction Plugins
      Set of plugins that determine the kinds of transactions the network supports.

    Transfer Transaction
      The most basic transaction used to send mosaics and messages between two accounts. Read :doc:`more <../concepts/transfer-transaction>`.

    USP
      Unique Selling Proposition or Unique Selling Point. A characteristic of a product that can be used in advertising to differentiate it from its competitors.

    VPS
      Virtual Private Server. A virtual machine typically hosted on a Data Center which you can access remotely and treat as if it was your own physical machine.

    VRF
      VRF stands for verifiable random function. All potential harvesting accounts must link to a second public key by announcing a :ref:`vrfkeylinktransaction`. The key linked is then used to randomize block production and leader/participant selection.

    XEM
      :term:`NEM`'s :term:`NIS1` blockchain native currency.

    XYM
      The native currency of the Symbol blockchain.
