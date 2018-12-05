#####################
Transfer Transaction
#####################

.. _transfer-transaction:

Transfer transaction is used to send :doc:`mosaics <mosaic>` between two :doc:`accounts <account>`. It can hold a message of length 1024.

.. figure:: ../resources/images/examples/transfer-transaction.png
    :align: center
    :width: 450px

    Alice sends 10 nem:xem to Bob

.. note:: It is possible to send mosaics to any valid address even if the address has not previously participated in any transaction. If nobody owns the private key of the recipient's account, the funds are most likely lost forever.

**********
Parameters
**********

The following parameters are required:

    **Recipient**

    The address of the recipient account.

    **Mosaics**

    The array of mosaic to be sent. The array can be empty.

    **Message**

    The transaction message of ``1024`` characters. It can be empty.

.. note:: Configuration parameters are `editable <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_ . Public network configuration may differ.


**************
Related guides
**************

.. postlist::
    :category: transfer-transaction
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:
