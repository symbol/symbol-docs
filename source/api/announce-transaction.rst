#######################
Announcing transactions
#######################

************************
Announcing a transaction
************************

When a transaction is initiated through the API, it always returns an OK. It is still unconfirmed and thus not yet accepted by the network.

To know the status of the transaction, which can be OK or Failure, you have to:

1) Check the status via API endpoint
2) Listen to the different WebSocket channels.

Once it is included in a :doc:`block <../concepts/block>`, the transaction gets processed.

.. figure:: ../resources/images/transaction-cycle.png
    :width: 900px
    :align: center

    Transaction cycle

******************************************
Announcing an aggregate bonded transaction
******************************************

Until an aggregate is signed by all cosignatories, it is unknown if all inner transactions will be included in a block.

For that reason, aggregate bonded transactions are announced through a different endpoint.

Once an aggregate is announced, it reaches partial state and notifies its status through WebSockets or HTTP API calls.

Every time a cosignatory signs and announces an aggregate bonded cosignature, the network checks if all required cosigners have already signed. If it is the case, the transaction changes to unconfirmed state until the network accepts it, and is included in a block once processed.

.. figure:: ../resources/images/aggregate-bonded-transaction-cycle.png
    :width: 900px
    :align: center

    Aggregate bonded transaction cycle

In :doc:`NEM2-SDK <../sdk/overview>`, transactions are announced using ``TransactionHttp``.

.. csv-table:: NIS2-API vs SDK TransactionHttp

    PUT /transaction, ``announce(signedTransaction: SignedTransaction): Observable<TransactionAnnounceResponse>``
    PUT /transaction/partial, ``announceAggregateBonded(signedTransaction: SignedTransaction): Observable<TransactionAnnounceResponse>``
    PUT /transaction/cosignature, ``announceAggregateBondedCosignature(cosignatureSignedTransaction: CosignatureSignedTransaction): Observable<TransactionAnnounceResponse>``