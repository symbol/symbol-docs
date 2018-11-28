##############
Account Filter
##############

:doc:`Accounts<account>` may configure a set of smart rules to block announcing or receiving transactions given a series of constraints.

The constraints given to block transactions are called filters. Accounts can add and edit their own filters by announcing an :ref:`AccountPropertiesTransaction<account-properties-transaction>`.

************
Filter types
************

Address filter
==============

An account can decide to receive transactions only from an allowed list of addresses. Similarly, an account can specify a list of addresses that don’t want to receive transactions from.

.. figure:: ../resources/images/diagrams/account-properties-address.png
    :align: center
    :width: 450px

    Address filter diagram

.. note:: Allow and block filters are mutually exclusive. In other words, an account can only configure a block or an allow list per type of filter.

By default, when there is no filter set, all the accounts in the network can announce transactions to the stated account.

Mosaic filter
=============

An account can configure a filter to permit incoming transactions only if all the mosaics attached are allowed. On the other hand, the account can refuse to accept transactions containing a mosaic listed as blocked.

TransactionType filter
======================

An account can allow/block announcing outgoing transactions with a :ref:`determined type <transaction-types>`. By doing so, it increases its security, preventing the announcement by mistake of undesired transactions.

********
Examples
********

Blocking spam transactions
==========================

A company is using the public chain to certify the quality of their products.

When the quality verification process concludes, an operator sends a :doc:`quality seal<mosaic>` to the product account.

The final customers can review the product mosaics scanning a QR code. For that reason, the company only wants to show related transactions, avoiding others to spam their products with non-related information.

.. figure:: ../resources/images/examples/account-properties-spam.png
    :align: center
    :width: 450px

    Blocking spam transactions

The company opts to configure their product accounts filters, enabling only to receive transactions containing ``company.quality:seal`` mosaics.

Enhancing the account security
==============================

Lately, Alice is only using her main account to cosign aggregate transactions where a :doc:`multisig<multisig-account>` she is a cosignatory is involved.

As a temporary measure, Alice opts to disable announcing transfer transactions from her main account, double checking that any of the funds she owns will be transferred.

.. _account-properties-transaction:

******************************
Account Properties Transaction
******************************

Set and modify account filters announcing an account properties transaction.

Parameters
==========

  **Modifications**

  An array of modifications. A maximum of ``255`` modifications per transaction is allowed.

Each modification is composed of:

      **Modification Type**

      Add (1) or Delete (2) property.

      **Property**

      .. csv-table::
          :header: "Property Type", "Description", "Value Type", "Id"
          :delim: ;

          Address allow; Incoming transactions from specified address are allowed; Address; 1
          Address block; Incoming transactions from specified address are blocked; Address; 129
          Mosaic allow; Incoming transactions containing the specified mosaic are allowed; MosaicId; 2
          Mosaic block; Incoming transactions containing the specified mosaic are blocked; MosaicId; 130
          Transaction Type allow; Outgoing transactions with specified transactions type are allowed; :ref:`TransactionType<transaction-types>`; 4
          Transaction Type block; Outgoing transactions with specified transactions type are blocked;  :ref:`TransactionType<transaction-types>`; 132

      **Value**

      Address, MosaicId or TransactionType.