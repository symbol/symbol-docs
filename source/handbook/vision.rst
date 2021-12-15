###############
Vision: Symbol²
###############

.. rst-class:: h1centered

   Reflections of Space Pirates

.. figure:: ../resources/images/handbook/ship\ cover\ blank.png
    :align: center
    :width: 600px

    Version 1.0

Preface
*******

.. sidebar:: Available languages
    :class: tight-fit

    .. toctree::
        :maxdepth: 1

        Español <es/vision>
        Bahasa Indonesia <id/vision>
        Italiano <it/vision>
        日本語 <ja/vision>
        Português <pt/vision>
        Русский <ru/vision>
        中文 <zh/vision>

Before we begin, it’s important to define an anchor. While a purpose or a mission can change with the captain or the tides, an anchor is what keeps us grounded. In times of turmoil, frustration, or uncertainty one can always return to their anchor to realign them as to why they’re here.

Our anchor is, and always will be, **Symbol**. Much like the projects before us (and the many to follow), we believe blockchain to be the most suitable technology to power a *new economy* — and **Symbol** is our contribution to that pursuit. As a protocol, it’s characterized by a consensus algorithm that seeks to reward *users* of a chain preferentially over hoarders of wealth. As a system it’s characterized by an architecture that extends functionality through system-level plugins, as opposed to opcodes in a deterministic virtual machine [1]_.  Although simple, these two characteristics help define our design philosophy — that is, a user-first, service-orientated approach. We believe blockchain to be human-centric technology, and everything we seek to do with **Symbol** must underscore this.

This document isn’t intended to be a whitepaper, a litepaper, a business document or even a manifesto. Human-centric technology is developed by its *users*, after all, and we intend to define, design and develop **Symbol** right alongside the community. Instead, think of this as a north star that we can use to navigate the way forward — for although an anchor might keep us grounded, it’s the constellations that help us set sail to new lands.

~GHJ

On the Future of Symbol and NIS1
********************************

At the core of any successful protocol is *disruption,* whether it’s disrupting payment infrastructure (Bitcoin); disrupting cloud computing (Ethereum); disrupting cloud storage (Arweave); or disrupting wireless networks (Helium). In this, **Symbol** seeks to disrupt *economies* — both existing, and emerging — by providing an efficient market for their operation that enables users to define and exchange *value* as digital :term:`tokens <token>`.

These markets are represented by small, purpose-built chains (subChains) that are anchored to the settlement layer (mainChain) through a roll-up centric interconnect based, in part, on zero-knowledge proofs. Each subChain is represented by its own utility :term:`token` (a mosaic) which is rewarded to nodes that produce new blocks (block harvesters). These utility :term:`tokens <token>` can either be staked (letting the node act as a liquidity provider) or traded for goods and services (through decentralized applications or decentralized exchanges).

A liquidity provider is a new type of service that a node can provide, wherein it accepts the exchange of one mosaic for another (:term:`token` pair). Should a node choose to act as a liquidity provider it will be required to maintain stake of *at least* one other subChain :term:`token` alongside its :term:`XYM`. An efficient liquidity provider will maintain a diverse basket of assets and pairings. In doing so, a node is able to facilitate *swap* requests (a new transaction type) that nets additional fees.

For transactions to be finalized at the *settlement layer*, the mainChain utility :term:`token` (:term:`XYM`) is required. All nodes of a given subChain are required to maintain a balance of :term:`XYM` to partake in the roll-up process (and thus share in a distribution of the block rewards). Nodes may choose to specialize in a specific set of transactions (such as validity proofs or stablecoins). Others might delegate instead to a *syndicate* — an orchestrated cluster of nodes that are allocated to a set of subChains based upon current network demand.

One of the first planned subChains to launch on **Symbol** will be :term:`NIS1` and its native :term:`token` :term:`XEM`. Alongside :term:`NIS1` two new concepts — *royalties* and *taxes* — will be introduced. Adapted from the *levy* feature, royalties enable a percentage of a given :term:`token` sale to be directed to an account every time it is transferred; while taxes are an additional fee added on top of a transfer. Both transaction types will be denominated in :term:`XEM` and can be swapped for :term:`XYM` (or other subChain :term:`tokens <token>`) at a liquidity provider.

The rise of the creator economy has seen blockchain technology increasingly utilized to trade other kinds of complex value beyond simple cryptographic identifiers. In particular, NFTs and digital collectibles have empowered a suite of artists to engage in direct-to-fan monetization models. Nonetheless, data permanence remains a problem in most chains today as content is rarely stored *on-chain*. The most commonly utilized standard in Ethereum, “:term:`ERC-721 <ERC>`”, places no restrictions on where issuers store the referenced data (i.e. an audio, image, or video file). Although the rise of the *permaweb* [2]_ and decentralized storage services [3]_ have provided an appropriate solution to the data permanence problem, the separation from the :term:`token` itself provides weaker ownership guarantees and introduces risk that multiple :term:`tokens <token>` could claim the same data or the stored data changes impermissibly.

One solution to this dilemma could be a series of dedicated subChains for content storage, where mosaics are representations of a given data file. Would-be purchasers and :term:`dApps <dApp>` can generate validity proofs for a given piece of content that proves both authenticity and provenance at point of sale. Upon purchase, a validity proof and :term:`token` could enable decryption of the actual data itself. A more lightweight solution might see dedicated subChains that bridge to decentralized storage providers instead, enabling nodes to act as dedicated storage providers and be rewarded accordingly for their service. Data persistence is therefore coupled to the success of the issuing chain, versus the reliance on multiple services.

While the initial hybrid design of **Symbol** saw the interaction of public and private chains through atomic swaps, the introduction of subChains enables a more elegant solution to the problem of data permanence and content-specific networks. The hidden potential of public blockchains is a shared global state where every user is a root user [4]_, but practical limitations in both physics and technology make this challenging to achieve with a single public chain. By empowering operators to service content based upon market demand and *machine sympathy*, the throughput of the network becomes additive rather than dependent on one single piece of the system.

The future of **Symbol** envisions it as the hub and interchange layer at the center of a universe of bespoke chains without global scalability constraints. subChains are our first step towards this.

On Syndicates and System Design
*******************************

In business theory, disruption is defined as *innovation that creates a new market and value network and eventually displaces established market-leading firms, products, and alliances* [5]_.  These innovations tend to be produced by small teams of self-organized individuals [6]_, rather than large teams or existing corporations. The process of disruption takes longer than the conventional approach, and the risk of failure is higher. Nevertheless, if successful, once deployed these technologies tend to both spread faster and have a larger impact than others.

It’s well known that centralized structures are often at odds with the development of decentralized systems. The introduction of Bitcoin was in direct response to the systematic failures of a centralized authority, and since then the distribution of power has remained a design goal of all blockchain networks to date.

.. sidebar:: The ecosystem flywheel

    .. figure:: ../resources/images/handbook/Symbol\ Venn\ Diagram\ 1.png
        :align: center
        :width: 600px

Regardless, centralization naturally occurs after a period of time [7]_, whether as a byproduct of specialization or economies of scale. This has proven to be true in both :term:`proof-of-work <PoW>` (through mining pools, hashrate concentration and specialized hardware) and :term:`proof-of-stake <PoS>` (through concentration of wealth and concentration of validator infrastructure). Thus, resilience in blockchain largely comes from ensuring parties in the ecosystem are incentivized to *collaborate* rather than collude. This is the basis of game theory and a mastery of this is key to successful system design.

In **Symbol**, we achieve collaboration through the concept of *syndicates*. Traditionally, a syndicate is a self-organizing group of individuals, corporations or companies that work together to achieve a common mission. Syndicates are not a new concept in cryptocurrency — non-profits like the Ethereum Foundation and Tezos Foundation can be informally classified as syndicates; as well as decentralized autonomous organizations (:term:`DAOs <DAO>`) and informal working or research groups. :term:`Flashbots` [8]_ — the research and development organization that focuses on miner-extractable value (:term:`MEV`) in :term:`DeFi` — follows the *pirate hacker collective*, an informal syndicate based on the pirate cooperative. Syndicates can even be observed external to cryptocurrency: Valve, a multi-billion dollar entertainment and hardware company follows a non-hierarchical design (“Flatland”) with no middle management or formal leadership [9]_.

Today, we can observe three naturally formed syndicates: infrastructure syndicates (nodes and their human operators); protocol syndicates (developers and system architects); and user syndicates (:term:`dApps <dApp>` and individuals). Syndicates are largely incentivized to put the collective success of the chain above their own individual desires:

* Nodes are reliant on developers and system architects to design, develop and deploy new functionality on-chain; and :term:`dApps <dApp>` to innovate in order to attract new users (and thus, generate network fees);
* Developers are reliant on nodes to actively maintain healthy network consensus through system upgrades; and on :term:`dApps <dApp>` to build innovative products that monetize the public chain and showcase the system;
* :term:`dApps <dApp>` are dependent on developers to bring about new functionality that allows them to build innovative products to attract customers; and nodes to provide mission critical infrastructure that keeps the network stable.

At the heart of this is the *ambassador* — the *voice* of the syndicates. Ambassadors are quickly identified by their communication and relationship skills. They work to bring about coordination of chaos and champion the ideas of their representative communities. They’re often translators, writers and educators — in some protocols, they’re ‘ecosystem representatives’; in others, ‘network coordinators’. In **Symbol**, ambassadors are able to be both elected and financed through delegated harvesting. If, at any point, communities feel that their elected ambassadors aren’t performing, they can delegate to a new ambassador.

In parallel to delegated harvesting, there is another concept that can be applied to the system at large: quadratic funding. First proposed in *Liberal Radicalism* by Buterin, Hitzing and Weyl, [10]_ quadratic funding seeks to apply the concept of quadratic voting to the funding of public goods. In economics, a public good is defined as a good that is *both non-excludable and non-rivalrous*. Non-excludable means that an individual cannot be excluded from use; and non-rivalrous means that use by one individual does not reduce the availability of the good to others. Some commonly referenced examples of public goods are open-source software (such as blockchain protocols; the internet; or operating systems); free education (such as newsletters; podcasts; or technical documentation); and free services (such as public television and radio).

.. sidebar:: Quadratic funding

    .. figure:: ../resources/images/handbook/Syndicate\ Matching\ dark.png
        :align: center
        :width: 600px

In **Symbol**, quadratic funding is able to solve a key challenge we have in the financing of projects: how do you determine which project would benefit the most *individuals*? It achieves this by enabling individuals to ‘buy for their vote’ on what projects should be funded next and amplifies donations with a matching syndicate dedicated to the funding of public goods. There are diminishing returns for additional votes, which helps decentralize power away from venture capital firms, large whales and central power brokers. In summary, the number of individual contributions matters more than the total amount funded by an individual.

We think syndicates are a powerful form of self-organization that are successful because they incentivize participants to put collective successes above their own, while enforcing a commitment to the same principles that made blockchain successful: disruption, decentralization and transparency. Paired with quadratic funding, we think syndicates empower a vibrant, self-organizing community of contributors and collaborators that are all aligned in a common mission: **Symbol**.

The Space Pirate’s Code
***********************

Even in the most lawless of systems there was a common agreement for operation. There is an honor among thieves. Pirates, despite being ruffians, managed to find a way to reduce conflict among themselves while maximizing profits. They used a democratic system of election and a charter that laid out the rules of operation before any voyage: the division of plunder; division of labor; and division of responsibility. They outlined prohibited activities and their punishments; rules for the safety of the ship and crew; and incentives and bonuses for productive members.

Before setting sail, pirates wrote their articles alongside the election of a captain and a quartermaster. The captain was not a boss, and served at the pleasure of the crew — at anytime he could be replaced by a majority vote or mutiny. Captains were, by and large, expected to be bold and decisive leaders that guided the crew on who and what to plunder; how to escape authorities or deal with an attack. Quartermasters represented the interests of the crew — they kept order; settled conflicts between crew members; and determined the amount of food and drink distributed to each crew member. All men gave consent to these articles and elected their leaders. If a man disagreed with either the contract or the crew, he was free to leave of his own volition.

Despite not having a government to enforce or otherwise support cooperative arrangements between them, pirates managed to maintain a harmony that was as common as their lawful counterparts. This was in part due to their transparency in all things, from the loot they gathered to the distribution of wealth; in part due to their crew, who put the collective successes of the ship above their own needs; and in part due to their commitment to equality and camaraderie, for a ship was only as good as the sum of its parts. We believe that a syndicate dedicated to **Symbol** should follow a framework that is loosely inspired by pirate culture, yet defined by a non-hierarchical corporate structure.

What follows are *some* of our proposed **articles of agreement** - the oath we take before pushing off on **Symbol** next journey. While any articles need consensus, and importantly approval of the crew, we think it’s helpful to set some general guidelines.

* We value **transparency.** Transparency builds trust; holds us accountable; and allows us to push our ecosystem forward. We operate in *plain sight,* ensuring our community has full visibility of our work and our team can learn from our own mistakes. We share information openly, broadly, and deliberately — about things we’ve learned; mistakes we’ve made; ideas we’ve thought of and what we’re working on. Nearly every document is fully open for anyone to read and comment on; every strategy decision; every analysis; every product or feature test. We use tools that align with our values (Git, Discord) and empower the ecosystem to work alongside us.
* We believe in **financial freedom**. We operate with a formula-based approach to compensation that is immediately visible to all. We pair competitive, market equivalent salaries with a generous benefits package. We believe every member should have a vested interest in what we’re building, which is why we include a :term:`token` vesting schedule in all compensation packages.
* We are a **championship team**. We are not a family — we choose our players. We have high expectations for performance and results. If someone isn’t raising the average, we actively coach and develop. We have an intense, oftentimes chaotic work culture and are regularly pushed out of our comfort zones — which allows us to grow, both as individuals and a team. We expect our team to earn their seat on the ship and keep it.
* We seek **rockstars**. We take extraordinary measures to make sure we have top talent in every seat. We favor people who are “T-Shaped” — generalists (highly skilled at a broad set of valuable things) but also experts (among the best in their field within a narrow discipline). We only work alongside people who are more capable than ourselves, not less. We believe talent is the most important factor in our success, and we expect the entire crew to take accountability in raising the average on the team. Unremarkable performance is met with a generous severance package.
* We are **focused**. **Symbol’s** mission is to disrupt markets and bring about equality of opportunity. We are an engineering-centric crew, first and foremost — if your expertise is not in writing code then every bit of energy you have must be put into understanding the technology behind our systems.

In all things, we serve **Symbol**, first and foremost.

.. rubric:: Footnotes

.. [1] Griffin Ichiba Hotchkiss, Andrei Maiboroda, and Paul Wackerow, “ETHEREUM VIRTUAL MACHINE (EVM)”, accessed June 7, 2021, https://ethereum.org/en/developers/docs/evm/

.. [2] "Store Data, Permanently", Arweave home page, 2020, https://www.arweave.org/

.. [3] David Vorick et al., "Decentralized Internet for a Free Future", Home page, Skynet, 2021, https://siasky.net/

.. [4] Balaji S. Srinivasan, "Yes, You May Need a Blockchain", Blog post, Balaji S. Srinivasan, May 14, 2019, https://balajis.com/yes-you-may-need-a-blockchain/

.. [5] Clayton M. Christensen, Michael E. Raynor, and Rory McDonald, "What Is Disruptive Innovation?", *Harvard Business Review*, December 2015, https://hbr.org/2015/12/what-is-disruptive-innovation

.. [6] Lingfei Wu, Wang Dashun, and James A. Evans, "Large Teams Develop and Small Teams Disrupt Science and Technology", *Nature* 566 (2019): 378–2, https://par.nsf.gov/servlets/purl/10109889

.. [7] Aaron Shaw and Benjamin Mako Hill, "Laboratories of Oligarchy? How the Iron Law Extends to Peer Production", *Arxiv*, 2014, https://arxiv.org/ftp/arxiv/papers/1407/1407.0323.pdf

.. [8] Flashbots, software repository, github.com/flashbots, 2021, https://github.com/flashbots/pm

.. [9] Phanish Puranam and Dorthe Døjbak Håkonsson, "Valve’s Way", *Journal of Organization Design* 4, no. 2 (June 2015): 2–, https://www.researchgate.net/publication/282395703_Valve%27s_Way

.. [10] Vitalik Buterin, Zoë Hitzig, and E. Glen Weyl, "Liberal Radicalism: A Flexible Design for Philanthropic Matching Funds", *Available at SSRN 3243656*, 2018, https://www.gwern.net/docs/economics/2018-buterin.pdf
