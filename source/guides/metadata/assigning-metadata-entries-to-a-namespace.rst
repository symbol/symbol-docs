:orphan:

.. post:: 01 Oct, 2019
    :category: Metadata, Mosaic
    :excerpt: 1
    :nocomments:

#################################
Assigning metadata to a namespace
#################################

Add custom data to a namespace.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`
- Finish :doc:`registering a namespace guide <../namespace/registering-a-namespace>`

**********
Background
**********

:doc:`Metadata <../../concepts/metadata>` can be attached to :doc:`namespaces <../../concepts/namespace>` to help users **verify domain ownership**. The contained data could include information such as registrant, administrative, or technical contact information.

In this guide, you are going to implement a program to add contact details to a namespace.

**********************
Getting into some code
**********************

1. Create a new namespace ``cc`` with the **ComfyClothingCompany's account**.

[code]

2. Define the following :ref:`namespace metadata transactions <namespace-metadata-transaction>`.

.. csv-table::
    :header: "Key", "Value"
    :delim: ;

    NAME; ComfyClothingCompany
    EMAIL; info@comfyclothingcompany
    ADDRESS; ComfyClothingCompany HQ
    PHONE; 000-0000

3. All metadata is attached only with the consent of the namespace owner through Aggregate Transactions.  Wrap the **metadata transactions** inside an :ref:`AggregateCompleteTransaction <aggregate-complete>` and sign the aggregate with the company's account.

[code]

.. note:: If a different account owned the namespace, you would need to set the :ref:`aggregate as bonded <aggregate-bonded>`. Hence, the namespace owner should accept the metadata request by :doc:`cosigning the transaction <../aggregate/signing-announced-aggregate-bonded-transactions>`.

4. Sign and announce the **AggregateTransaction** to the network.

[code]

5. When the transaction gets confirmed, try to :doc:`fetch the namespace's metadata entries <getting-metadata-entries-attached-to-a-namespace>`.
