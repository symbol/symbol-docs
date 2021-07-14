#########################
Transaction serialization
#########################

The `catbuffer schemas <https://github.com/symbol/catbuffer-schemas>`_ repository defines how each transaction type should be serialized. In combination with the `catbuffer-generators <https://github.com/symbol/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages.

These are the reference pages for each schema:

.. toctree::
    :maxdepth: 1

    account_link
    aggregate
    coresystem
    entity
    lock_hash
    lock_secret
    metadata
    mosaic
    multisig
    namespace
    receipts
    resolution_statement
    restriction_account
    restriction_mosaic
    transaction
    transfer
