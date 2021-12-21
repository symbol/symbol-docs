############################################
REST API Troubleshooting Guide for Exchanges
############################################

The :doc:`exchange-integration` guide explains how to integrate the ``XYM`` token into an Exchange platform using the :doc:`available SDKs <../../sdk>`. It is also possible to perform this integration using the :doc:`REST API <../../api>` but the procedure is significantly **more complicated**.

This page does not aim at repeating the content of the :doc:`exchange-integration` guide using REST, instead, it shows how to fix **the most common problems** encountered when using this API in the development of an Exchange.

Feel free to jump directly to the section of your interest.

.. contents:: Topics
   :local:

**********************
Receiving transactions
**********************

Filtering (by block height and more)
====================================

Use the `/transactions/confirmed <https://symbol.github.io/symbol-openapi/v1.0.1/#operation/searchConfirmedTransactions>`__ endpoint to retrieve any group of confirmed transactions. Among other filtering options, the following parameters are typically useful for narrowing down searches:

.. csv-table::
   :header: "Parameter", "Type", "Effect"
   :delim: ;
   :widths: 25 15 60

   ``type``; integer; Retrieve only transactions of this type. The code for :ref:`transfertransaction` is 16724 (0x4154).
   ``recipientAddress``; string; "The address **receiving** the transaction. Compare with ``address`` which returns all transactions involving the given address (as sender, recipient or cosigner).

   This might either be a Base32 :ref:`address` or a :doc:`../../concepts/namespace`. If the bit 0 of byte 0 is not set (e.g. 0x90) then it is an address, otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1."
   ``fromHeight``; string; The starting block height to search for.
   ``toHeight``; string; The ending block height to search for.
   ``embedded``; boolean; "Use ``true`` to automatically search inside aggregate transactions. The data returned by a standalone transaction and an embedded transaction (one inside an aggregate) is slightly different (Check the next section).

   Use ``false`` to manually search for aggregate transactions (e.g. types 0x4141 and 0x4241) and parse them.

   **Caution**: Does not work when combined with ``address``, only with ``recipientAddress``."

Here is an example query to a :term:`NODE_URL`:

.. code-block:: text

   NODE_URL
     /transactions/confirmed
       ?recipientAddress=TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA
       &type=16724
       &fromHeight=70000
       &toHeight=80000
       &embedded=true

This query returns the list of all **transfer** transactions sent to address ``TAOXU...``, that happened between block height **70000** and **80000**, including transactions **embedded** inside other transactions.

The next section explains how to parse the resulting list.

Parsing of embedded transactions
================================

|codename| supports :ref:`aggregate-transaction`, i.e., **transactions inside other transactions**. For the most part it does not matter if a transaction is **standalone** or **embedded** inside another one, but there are a few differences which might be confusing when parsing incoming transactions. This section explains them.

.. note:: You can always **receive** embedded transactions, even if you never **create** any yourself. Make sure you understand how to parse them!

As shown in the `/transactions/confirmed <https://symbol.github.io/symbol-openapi/v1.0.1/#operation/searchConfirmedTransactions>`__ endpoint documentation, a successfull query returns **a data array** including transactions and metadata (this array is **paginated** so pay attention to the ``pageSize`` and ``pageNumber`` parameters and return values). Each one of the returned transactions can match a different schema depending on the transaction's type, so the ``type`` field of each transaction must be checked.

Moreover, the metadata content is also different when the transaction is embedded inside an :ref:`aggregate-transaction`.

This is specially important when using the ``embedded=true`` parameter since some of the returned transactions might be **embedded** transactions whereas some other might be **regular** transactions, and the involved schemas are different.

For example the above sample query, which filters by ``type=16724`` (transfer transactions), actually returns both ``TransferTransactionDTO`` and ``EmbeddedTransferTransactionDTO`` objects because of the ``embedded=true`` parameter. The attached metadata also varies between ``TransactionMetaDTO`` and ``EmbeddedTransactionMetaDTO``.

These are the main differences to keep in mind:

.. csv-table:: Metadata
   :header: "Property", "Regular", "Embedded"
   :delim: ;
   :widths: 20 35 45

   Schema; ``TransactionMetaDTO``; ``EmbeddedTransactionMetaDTO``
   ``index``; Transaction index **within the block**; Transaction index **within the aggregate transaction**.
   ``hash``; Transaction Hash; \-
   ``aggregateHash``; \-; Hash of the containing aggregate transaction.

.. csv-table:: Transaction
   :header: "Property", "Regular", "Embedded"
   :delim: ;
   :widths: 20 35 45

   Schema; ``TransferTransactionDTO``; ``EmbeddedTransferTransactionDTO``
   ``size``; Transaction size in bytes; \-
   ``signature``; Signature generated by the signer; \-
   ``maxFee``; Maximum fee to pay for the transaction; \-
   ``deadline``; Number of blocks before the transaction expires; \-

The above 4 fields are missing from the embedded transaction because they belong to the containing aggregate transaction. To access them recover first the aggregate transaction using the `/transactions/confirmed/{transactionId} <https://symbol.github.io/symbol-openapi/v1.0.1/#operation/getConfirmedTransaction>`__ endpoint and ``aggregateHash`` as Id.

If you are not interested in any of the fields listed above you can safely treat regular and embedded transfer transactions the same way, since they share the rest of properties.

Alias resolution
================

:doc:`Mosaics <../../concepts/mosaic>` IDs and :ref:`addresses <address>` are long random strings which are cumbersome to use. For convenience, |codename| provides **namespaces**, which are user-provided **text strings** (aliases) that can be used instead of addresses or mosaic IDs. A namespace can always be **resolved** into the actual address or mosaic ID that it represents.

The most common example is ``symbol.xym`` (Namespace ID ``0xE74B99BA41F4AFEE``) which is an **alias** for |codename|'s native currency (Mosaic ID ``0x6BED913FA20223F8``).

.. note:: Mosaic ID ``0x6BED913FA20223F8`` and ``0xE74B99BA41F4AFEE`` can always be safely treated as equivalent.

   You might find transactions using one or the other depending on whether they were created using directly the mosaic ID or the namespace.

``symbol.xym`` is a namespace which does not **expire** so the above equivalence **always holds**. However, regular namespaces are rented **for a limited amount of time**, and this poses a problem when resolving them because after expiration a namespace might get rented again and be aliased to a different mosaic or address.

Therefore, **to correctly resolve a namespace found in a transaction, the block height that included the transaction must be taken into account**.

This is very easy to do because all blocks which include a namespace also include either a :ref:`mosaicresolutionstatement` or an :ref:`addressresolutionstatement` containing the resolved namespace. Just use the `/statements/resolutions/mosaic <https://symbol.github.io/symbol-openapi/v1.0.1/#operation/searchMosaicResolutionStatements>`__ and `/statements/resolutions/address <https://symbol.github.io/symbol-openapi/v1.0.1/#operation/searchAddressResolutionStatements>`__ endpoints to retrieve all statements for a given block, and then locate the unresolved namespace ID you are interested in.

**Example using TESTNET:**

- ``NODE_URL/transactions/confirmed?height=211972`` retrieves all transactions included in block 211972.

  .. code-block:: json

     "transaction": {
        "size": 176,
        "signature": "35DC5689...",
        "signerPublicKey": "B49D1910...",
        "version": 1,
        "network": 152,
        "type": 16724,
        "maxFee": "100000",
        "deadline": "8530382295",
        "recipientAddress": "981D7A25D39DB76EDE6183204BEE50683CC152A6BAEF1DCC",
        "mosaics": [
           {
           "id": "E374D0B5E061EE92",
           "amount": "1"
           }
        ]
     }

  However, the mosaic ID ``0xE374D0B5E061EE92`` does not exist (``/mosaics/E374D0B5E061EE92`` would return a ``ResourceNotFound`` error). Besides, the highest bit being set indicates this is actually a namespace.

- You could check the **current** alias of this namespace by querying ``/namespaces/E374D0B5E061EE92``, but you actually want to know the aliased mosaic ID **at the time the transaction was confirmed**.

- You do this by checking the block's :ref:`mosaicresolutionstatement` at ``/statements/resolutions/mosaic?height=211972``:

  .. code-block:: json

     {
       "statement": {
         "height": "211972",
         "unresolved": "E374D0B5E061EE92",
         "resolutionEntries": [
           {
             "source": {
               "primaryId": 1,
               "secondaryId": 0
             },
             "resolved": "0DDE03C044AF95D4"
           }
         ]
       },
       "id": "60DEDC83EA7C4338C56C4FB6"
     }

  Here you can see the resolved mosaic ID, ``0x0DDE03C044AF95D4`` which is a valid ID and can be queried with ``/mosaics/0DDE03C044AF95D4``.

********************
Sending transactions
********************

Transactions are announced to the network through the `/transactions <https://symbol.github.io/symbol-openapi/v1.0.1/#operation/announceTransaction>`__ endpoint which accepts an hexadecimal string representing the transaction's payload. The process to build this payload is explained fairly extensively in the :ref:`transaction-definition` guide.

The following sections aim at clarifying the points which have been deemed the most confusing by users of the API.

Transaction deadline
====================

Transactions are not allowed to remain unconfirmed in the network forever, as this would pose a significant strain on the network's resources. Instead, **all transactions have a deadline**, and are automatically disposed of when the deadline arrives.

Users are free to use any deadline they want for their transactions, between **now** and **6h into the future** (48h for :ref:`aggregate-bonded` transactions). Transactions announced with a deadline outside this window will be rejected with an **invalid deadline** error.

Deadlines are given in **milliseconds since the creation of the nemesis block**.

The moment when the :ref:`nemesis block <block-creation>` was created can be found in the ``network.epochAdjustment`` property of the `/network/properties <https://symbol.github.io/symbol-openapi/v1.0.1/#operation/getNetworkProperties>`__ endpoint. This is the **number of seconds** elapsed since the `UNIX epoch <https://en.wikipedia.org/wiki/Unix_time>`__ and **it is always 1615853185 for MAINNET**.

In other words, you need to substract the **epoch adjustment** from a Unix time to obtain a deadline. Therefore, a **deadline 2h into the future**, which is the default deadline provided by the SDK, can be calculated as:

.. code-block:: typescript

   currentTime = now(); // Seconds since the UNIX epoch
   deadline = (currentTime + 7200 - epochAdjustment) * 1000;

This deadline can now be used when building the transaction, and it will expire 2h from now (7200 seconds).

Transaction fee
===============

The effective :doc:`Fee <../../concepts/fees>` a transaction must pay to be announced is the **transaction size** (in bytes) times a **fee multiplier** chosen by the node that confirms the transaction.

Since this multiplier is unknown when making the announcement, **transactions** define the **maximum fee** they are willing to pay.

Moreover, **nodes** can define a **minimum fee** below which transactions are just ignored.

As a consequence, choosing the right maximum fee for a transaction is very important: Too low a number and the transaction will not be confirmed by any node and will eventually expire. Too high maximum fees, though, will incur in unnecessary expenses.

To help choose the right amount, the `/network/fees/transaction <https://symbol.github.io/symbol-openapi/v1.0.1/#operation/getTransactionFees>`__ endpoint provides some statistics regarding the effective fees paid by the last 60 blocks. The returned data is:

.. csv-table::
   :header: "Property", "Meaning"
   :widths: 18 82
   :delim: ;

   Highest; Biggest fee multiplier used in the last 60 blocks.
   Median; The `median value <https://en.wikipedia.org/wiki/Median>`__ of the fee multipliers used in the last 60 blocks. See the :ref:`fees_dynamic_multiplier` section for more details.
   Mean; The `average value <https://en.wikipedia.org/wiki/Arithmetic_mean>`__ of the fee multipliers used in the last 60 blocks.
   Lowest; Smallest fee multiplier used in the last 60 blocks.
   Min; The minimum fee multiplier accepted by the node being queried.

.. caution:: ``minFeeMultiplier`` refers to **the node** being queried, whereas the rest of properties refer to **the whole network**.

A good rule of thumb is to use the ``medianFeeMultiplier``. This typically provides timely confirmation of transactions without incurring in excessive fees being paid.
