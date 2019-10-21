#########
Namespace
#########

Namespaces allow you to :doc:`create an on-chain unique place <../guides/namespace/registering-a-namespace>` for your business and your assets on the NEM blockchain.

.. figure:: ../resources/images/examples/namespace-setup.png
    :align: center
    :width: 450px

    Organizing assets with namespaces

****
Name
****

Namespaces function similarly to internet domains. Creating a namespace starts with choosing a name that you will use to refer to an account or asset. The name must be **unique in the network**, and may have a maximum length of ``64`` characters, and the allowed characters are a, b, c, …, z, 0, 1, 2, …, 9, _ , -.

*************
Subnamespaces
*************

On the internet, a domain can have a sub-domain. In NEM, namespaces can have subnamespaces to **identify and organize assets**.

Namespaces can have up to ``3`` levels, a namespace and its two levels of subnamespace domains. A subnamespace does not have a duration by its own; it inherits the duration from its parent namespace.

You can :doc:`create multiple subnamespaces <../guides/namespace/registering-a-subnamespace>` with the same name in different namespaces. For example, you can create the subnamespaces ``foo.bar`` and ``foo2.bar``, but the combination rootnamespace + subnamespace must remain unique.

*****
Alias
*****

:ref:`AliasTransactions <address-alias-transaction>` **link namespaces to accounts and mosaics**. An alias or its linked asset can be used interchangeably when sending a transaction. Using the alias makes *long addresses rememberable* and *mosaics recognizable*.

The creator of the namespace can :doc:`link the namespace <../guides/namespace/link-a-namespace-to-a-mosaic>` to an account or mosaic. This link will be editable, so the creator may unlink a previously set alias and link the namespace to a different asset.

The block :doc:`receipts <receipt>` store the resolution of the alias for a given transaction.

**Restrictions:**

- An account or mosaic can be linked to many namespaces but one namespace can only be linked to one account or mosaic. 
- An account can assign a namespace to any account that :doc:`permits receiving <account-restriction>` AddressAliasTransaction.
- An account can only link the alias to a mosaicId when the account is the creator of the mosaic.

********
Duration
********

At the time of the namespace **registration**, you must set the number of confirmed blocks you would like to rent the namespace for.

The maximum namespace duration is ``365`` days. By default, the network is configured to generate a block every ``15`` seconds. You can use the following formula to convert approximately days to blocks:

    duration ≈ numberOfDays * 86400 / blockGenerationTargetTimeInSeconds

.. figure:: ../resources/images/diagrams/namespace-life-cycle.png
    :width: 800px
    :align: center

    Namespace life-cycle

During the **renting period**, the namespace owner can create subnamespaces, alias accounts and mosaics. The owner can also **extend the rental** by sending a :ref:`NamespaceRegistrationTransaction <namespace-registration-transaction>` with the desired number of additional blocks.

The network :properties:`can define <config-network.properties>` a **grace period** that enables the namespace owner to renew the namespace past the expiration date before it becomes publicly available for registration.

When the grace period ends, the namespace is **deleted**. At this point, the namespace becomes **available** for its registration again.

.. csv-table:: Permissions by namespace status
    :header: "Action", "Available", "Registration Period", "Grace Period"
    :delim: ;

    Register a new namespace; ✔️; ❌; ❌
    Renew the namespace;   ❌; ✔️; ✔️
    Create subnamespaces;   ❌; ✔️; ❌
    Link an alias to an address or mosaic;   ❌; ✔️; ❌
    Send a transaction using an alias;   ❌; ✔️; ❌

.. note:: Only Namespace that is created during the Nemesis block can have perpeptual duration. 

**********
Rental fee
**********

To create a namespace or to extend its duration, accounts will have to pay a :ref:`transaction fee <fees>` to support the network in addition to the rental fee. The fees will be deducted from the account's balance after the announcement of a valid **NamespaceRegistrationTransaction**.

The default namespace rental fees are :properties:`configurable per network <config-network.properties>`:

.. csv-table::
    :header: "Property", "Value"
    :delim: ;

    Registering a namespace; ``1 cat.currency`` per block
    Extending a namespace duration; ``1 cat.currency`` per block
    Creating a subnamespace; ``100 cat.currency``

The **network dynamically adjusts the namespace rental fees** over time. To calculate the **effective rental fee**, the network multiplies the default value set in the configuration by the median :doc:`network multiplier <harvesting>` over last :properties:`maxRollbackBlocks <config-network.properties#L20>`. In case there are zero multipliers, these are replaced by the :properties:`defaultDynamicFeeMultiplier <config-network.properties#L20>` before the median calculation.

******
Guides
******

.. postlist::
    :category: Namespace
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

*******
Schemas
*******

.. note:: Configuration parameters are :properties:`editable <config-network.properties>`. Public network configuration may differ.

.. _namespace-registration-transaction:

NamespaceRegistrationTransaction
================================

Announce a NamespaceRegistrationTransaction to register and re-rent a namespace.

**Version**: 0x01

**Entity type**: 0x414E

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    registrationType; :ref:`NamespaceRegistrationType <namespace-registration-type>`; Namespace registration type.
    duration; :schema:`BlockDuration <types.cats#L2>`; Number of confirmed blocks you would like to rent the namespace for. Duration is allowed to lie up to ``365`` days. Required for root namespaces.
    parentId; :schema:`NamespaceId <namespace/namespace_types.cats#L1>`; Parent namespace identifier. Required for subnamespaces.
    id; :schema:`NamespaceId <namespace/namespace_types.cats#L1>`; Namespace identifier.
    nameSize; uint8; Namespace name size in bytes.
    name; array(bytes, namespaceNameSize); Namespace name. Must be unique and may have a maximum length of ``64`` characters. Allowed characters are a, b, c, ..., z, 0, 1, 2, ..., 9, _ , -.

.. _address-alias-transaction:

AddressAliasTransaction
=======================

Announce an AliasTransaction to attach a namespace to an account. A namespace can be assigned to any account present in the network.

**Version**: 0x01

**Entity type**: 0x424E

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    aliasAction; :ref:`AliasAction <alias-action>`; Alias action.
    namespaceId; :schema:`NamespaceId <namespace/namespace_types.cats#L1>`; Identifier of the namespace that will become an alias.
    address; :schema:`Address <types.cats#L8>`; Aliased address.

.. _mosaic-alias-transaction:

MosaicAliasTransaction
======================

Announce an AliasTransaction to attach a namespace to a mosaic. Setting an alias to a mosaic is only possible if the account announcing the transaction has created the namespace and mosaic involved.

**Version**: 0x01

**Entity type**: 0x434E

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    aliasAction; :ref:`AliasAction <alias-action>`; Alias action.
    namespaceId; :schema:`NamespaceId <namespace/namespace_types.cats#L1>`; Identifier of the namespace that will become an alias.
    mosaicId; :schema:`MosaicId <types.cats#L4>`; Aliased mosaic identifier.

.. _namespace-registration-type:

NamespaceRegistrationType
=========================

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0; Root namespace.
    1; Child namespace.

.. _alias-action:

AliasAction
===========

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x00; Link alias.
    0x01; Unlink alias.
