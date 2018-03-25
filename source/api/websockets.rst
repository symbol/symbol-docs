##########
WebSockets
##########

WebSockets make possible receiving notifications when a transaction or event occurs in the blockchain.

The notification is received in real time without having to poll the API waiting for a reply.

    **block**

    The block channel notifies for every new block. The message contains the block information.

    **confirmedAdded/<ADDRESS>**

    The confirmedAdded channel notifies when a transaction related to an address is included in a block. The message contains the transaction.

    **unconfirmedAdded/<ADDRESS>**

    The unconfirmedAdded channel notifies when a transaction related to an address is in unconfirmed state and waiting to be included in a block. The message contains the transaction.

    Possible scenarios when this channel notifies are, the transaction is announced to the network via ``PUT /transaction`` HTTP endpoint or an aggregate bonded transaction has all required cosigners and change the state from *partial* to *unconfirmed*.

    **unconfirmedRemoved/<ADDRESS>**

    The unconfirmedRemoved channel notifies when a transaction related to an address was in unconfirmed state but not anymore. The message contains the transaction hash.

    Possible scenarios when this channel notifies are, the transaction now is confirmed or the deadline has been reached and it was not included in a block.

    **partialAdded/<ADDRESS>**

    The partialAdded channel notifies when an aggregate bonded transaction related to an address is in *partial* state and waiting to have all *required cosigners*. The message contains a transaction.

    The scenario when this channel notifies is when an aggregate bonded transaction is announced to the network via ``PUT /transaction/partial`` HTTP endpoint.

    **partialRemoved/<ADDRESS>**

    The partialRemoved channel notifies when a transaction related to an address was in partial state but not anymore. The message contains the transaction hash.

    Possible scenarios when this channel notifies are, the transaction now is in unconfirmed or the deadline has been reached and it was not included in a block.

    **cosignature/<ADDRESS>**

    The partialRemoved channel notifies when a *cosignature signed transaction* related to an address is added to an aggregate bonded transaction with partial state. The message contains the cosignature signed transaction.

    **status/<ADDRESS>**

    The status channel notifies when a transaction related to an address rises an error. The message contains the error message and the transaction hash.

Interaction with WebSockets in :doc:`NEM2-SDK <../sdk/overview>` is done with ``Listeners``.

.. csv-table:: WebSockets vs SDK Listeners

   block, ``newBlock(): Observable<BlockInfo>``
   confirmedAdded/<ADDRESS>, ``confirmed(address: Address): Observable<Transaction>``
   unconfirmedAdded/<ADDRESS>, ``unconfirmedAdded(address: Address): Observable<Transaction>``
   unconfirmedRemoved/<ADDRESS>, ``unconfirmedRemoved(address: Address): Observable<string>``
   partialAdded/<ADDRESS>, ``aggregateBondedAdded(address: Address): Observable<AggregateTransaction>``
   partialRemoved/<ADDRESS>, ``aggregateBondedRemoved(address: Address): Observable<string>``
   cosignature/<ADDRESS>, ``cosignatureAdded(address: Address): Observable<CosignatureSignedTransaction>``
   status/<ADDRESS>, ``status(address: Address): Observable<TransactionStatusError>``