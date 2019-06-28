####################
Account Restrictions
####################

:doc:`Accounts <account>` may configure a set of smart rules to block announcing or receiving transactions given a series of restrictions.

The account owners - plural in case of multisig accounts - can edit the account restrictions at a later time announcing the specific :ref:`account restriction transaction <account-address-restriction-transaction>`.

*******************
Address restriction
*******************

An account can decide to only **receive** transactions from a list of allowed :doc:`addresses <account>`. Similarly, the account can define a list of blocked addresses.

.. figure:: ../resources/images/diagrams/account-restrictions-address.png
    :align: center
    :width: 450px

    Address restriction diagram

.. note:: Allow and block restrictions are mutually exclusive. In other words, an account can only configure a block or an allow list per type of restriction.

By default, when there are no restrictions set, all the accounts in the network can announce transactions to the unrestricted account.

******************
Mosaic restriction
******************

An account can configure a restriction to permit **incoming** transactions only if all the :doc:`mosaics <mosaic>` attached are allowed. On the other hand, the account can refuse to accept transactions containing a mosaic listed as blocked.

*********************
Operation restriction
*********************

An account can allow/block announcing **outgoing** transactions with a :ref:`determined operation type <transaction-types>`. By doing so, the account increases its security, preventing the announcement by mistake of undesired transactions.

********
Examples
********

Blocking spam transactions
==========================

A pharmaceutical company is using the public chain to certify the quality of their products.

When the quality verification process concludes, an operator sends a :doc:`quality seal<mosaic>` to the product account.

The final customers can review the product mosaics scanning a QR code. For that reason, the company only wants to show related transactions, avoiding that others spam their products with non-related information.

.. figure:: ../resources/images/examples/account-restrictions-spam.png
    :align: center
    :width: 450px

    Blocking spam transactions

The company opts to configure their product accounts restrictions, enabling only to receive transactions containing ``pharmaceutical.quality.seal`` mosaics.

Enhancing the account security
==============================

Lately, Alice is only using her main account to cosign aggregate transactions where she is a cosignatory for the :doc:`multisig <multisig-account>` account.

As a temporary security measure, Alice opts to disable announcing transfer transactions from her main account. Doing so, Alice double-checks that the funds held in the main account are not going to be transferred by mistake.

******
Guides
******

.. postlist::
    :category: Account Restrictions
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

*******
Schemas
*******

.. note:: Configuration parameters are `editable <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_ . Public network configuration may differ.

.. _account-address-restriction-transaction:

AccountAddressRestrictionTransaction
====================================

Configure restrictions to prevent receiving transactions from undesired addresses.

**Version**: 0x01

**Entity type**: 0x4150

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    restrictionType; :ref:`AccountRestrictionType <account-restriction-type>` ; Indicates the account restriction type.
    modificationsCount; uint8; The number of modifications in the transaction. A maximum of ``255`` modifications per transaction is allowed.
    modifications; array(:ref:`AccountAddressRestrictionModification <account-address-restriction-modification>`, modificationsCount); The array of modifications.

.. _account-mosaic-restriction-transaction:

AccountMosaicRestrictionTransaction
===================================

Configure restrictions to prevent receiving transactions containing a specific mosaic.

**Version**: 0x01

**Entity type**: 0x4250

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    restrictionType; :ref:`AccountRestrictionType <account-restriction-type>` ; Indicates the account restriction type.
    modificationsCount; uint8; The number of modifications in the transaction. A maximum of ``255`` modifications per transaction is allowed.
    modifications; array(:ref:`AccountMosaicRestrictionModification <account-mosaic-restriction-modification>`, modificationsCount); The array of modifications.

.. _account-operation-restriction-transaction:

AccountOperationRestrictionTransaction
======================================

Configure restrictions to prevent announcing transactions by :ref:`type <transaction-types>`.

**Version**: 0x01

**Entity type**: 0x4350

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    restrictionType; :ref:`AccountRestrictionType <account-restriction-type>` ; Indicates the account restriction type.
    modificationsCount; uint8; The number of modifications in the transaction. A maximum of ``255`` modifications per transaction is allowed.
    modifications; array(:ref:`AccountOperationRestrictionModification <account-operation-restriction-modification>`, modificationsCount); The array of modifications.

.. _account-address-restriction-modification:

AccountAddressRestrictionModification
=====================================

**Inlines**:

* :ref:`AccountRestrictionModification <account-restriction-modification>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    value; 25 bytes (binary); The address to allow/block.

.. _account-mosaic-restriction-modification:

AccountMosaicRestrictionModification
====================================

**Inlines**:

* :ref:`AccountRestrictionModification <account-restriction-modification>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    value; uint64; The mosaic id to allow/block.

.. _account-operation-restriction-modification:

AccountOperationRestrictionModification
=======================================

**Inlines**:

* :ref:`AccountRestrictionModification <account-restriction-modification>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    value; uint16; The :ref:`entity type <transaction-types>` to allow/block.


.. _account-restriction-modification:

AccountRestrictionModification
==============================

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    modificationType; :ref:`AccountRestrictionModificationType <account-restriction-modification-type>` ; The modification type.

.. _account-restriction-type:

AccountRestrictionType
======================

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x01; The account restriction type only allows receiving transactions from an address.
    0x02; The account restriction type only allows receiving transactions containing a mosaic id.
    0x04; The account restriction type only allows sending transactions with a given transaction type.
    0x05; Account restriction sentinel.
    0x81; The account restriction type blocks receiving transactions from an address.
    0x82; The account restriction type blocks receiving transactions containing a mosaic id.
    0x84; The account restriction type blocks sending transactions with a given transaction type.

.. _account-restriction-modification-type:

AccountRestrictionModificationType
==================================

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x00; Add account restriction value.
    0x01; Remove account restriction value.
