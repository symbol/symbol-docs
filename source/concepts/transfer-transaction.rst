#####################
Transfer Transaction
#####################

.. warning:: The configuration presented is NOT intended to be used on the public network. These are the parameters used for the Catapult Testnet version (MIJIN_TEST).

.. _transfer-transaction:

Transfer transaction is used to send :doc:`mosaics <mosaic>` between two :doc:`accounts <account>`. It can hold a message of length ``1024``.

.. figure:: ../resources/images/guides-transactions-transfer.png
    :align: center
    :width: 450px

    Alice sends 10 nem:xem to Bob

.. raw:: html

    <h2>Parameters</h2>

Following parameters are required:

    **Recipient**

    The address of the recipient account.

    **Mosaics**

    The array of mosaic to be sent. The array could be empty.

    **Message**

    The transaction message of ``1024`` characters. It could be empty.
