.. post:: 01 Oct, 2019
    :category: Metadata
    :tags: SDK, CLI
    :excerpt: 1
    :nocomments:

#################################
Assigning metadata to a namespace
#################################

Add custom data to a namespace.

********
Use case
********

:doc:`Metadata <../../concepts/metadata>` can be attached to :doc:`namespaces <../../concepts/namespace>` to help users verify the ownership of the registered name.
The data attached could include information such as registrant, administrative, or technical contact information.

Imagine that the company ComfyClothingCompany wants to add their information to their namespace ``cc`` so that any user of the network can quickly identify the company's details.
In this guide, you are going to implement a program to add metadata entries to a namespace.

.. figure:: ../../resources/images/examples/metadata-namespace.png
    :align: center
    :width: 500px

*************
Prerequisites
*************

- Complete the :doc:`getting started section <../../getting-started/setup-workstation>`.
- Create a new :ref:`account <setup-creating-a-test-account>`.
- Load the account with enough |networkcurrency| to pay for transaction fees, create mosaics and register namespaces.

**********************
Creating the namespace
**********************

1. Create a new namespace ``cc`` with the **ComfyClothingCompany's account**.

.. code-block:: bash

    symbol-cli transaction namespace --sync

    Enter namespace name: cc
    Do you want to create a root namespace? [y/n]: y
    Enter the namespace rental duration: 1000
    Enter max_fee (absolute amount): 0
    Transaction confirmed.

*************************
Method #01: Using the SDK
*************************

1. Define the following :ref:`namespacemetadatatransaction`.

.. csv-table::
    :header: "Key", "Value"
    :delim: ;

    NAME; ComfyClothingCompany
    EMAIL; info@comfyclothingcompany
    ADDRESS; ComfyClothingCompany HQ
    PHONE; 000-0000

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToANamespace.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToANamespace.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. All metadata is attached only with the consent of the namespace creator through Aggregate Transactions.
Wrap the **metadata transactions** inside an :ref:`AggregateCompleteTransaction <aggregate-complete>` and sign the aggregate with the company's account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToANamespace.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToANamespace.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

.. note:: If a namespace was owned by a different account, you would need to set the :ref:`aggregate as bonded <aggregate-bonded>`. Then, the namespace creator needs to accept the metadata request by :doc:`cosigning the transaction <../aggregate/signing-announced-aggregate-bonded-transactions>`.

3. Sign and announce the **AggregateTransaction** to the network.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToANamespace.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/metadata/AssigningMetadataToANamespace.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

4. When the transaction gets confirmed, try to :doc:`fetch the namespace's metadata entries <getting-metadata-entries-attached-to-a-namespace>`.

*************************
Method #02: Using the CLI
*************************

Open a terminal window and run the following command.

Replace ``TCM6YD-BC3BW2-ZYXOXC-HHIRDV-MEZUIP-BRISYI-TPQ`` with the namespace owner address, ``85BBEA6CC462B244`` with the target namespace id.
Then, set the key-value pairs you want to attatch as metadata.

.. note:: You can use the command ``symbol-cli converter stringtokey`` to transform an string (e.g. ``NAME``) into a valid UInt64 key (``8B5DD479E6AB718A``).

.. viewsource:: ../../resources/examples/bash/metadata/AssigningMetadataToANamespace.sh
    :language: bash
    :start-after: #!/bin/sh


