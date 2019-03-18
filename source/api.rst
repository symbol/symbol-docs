########
REST API
########

**Catapult REST API** combines HTTP and WebSockets to perform read and write actions in the NEM blockchain.

.. _http-requests:

*************
Http requests
*************

Catapult REST uses port ``3000``. It accepts both HTTP **GET**, **PUT** and **POST** requests.

Assuming that Catapult REST is running locally, HTTP GET requests can be executed from a browser and have the form:

http://localhost:3000/<path-to-API-request>

HTTP PUT and POST requests use JSON structures in the request body. Request returns data using JSON structures. This kind of request cannot usually be executed from within the browser unless you use a plugin which enables you to do it.

.. raw:: html

    <a href="/endpoints.html"><button class="btn btn-default">Catapult REST API Endpoints</button></a>

.. _tools:

Tools
=====

**NEM2-SDK**

The **NEM2 Software Development Kit** is the primary software development tool to create NEM2 components, such as additional tools, libraries or applications.

.. note:: Consider using **NEM2-SDK** instead of calling the API directly.

* :doc:`Reference <../sdk>`
* :doc:`Guides <../concepts/account>`

**Insomnia**

An open source HTTP client, available for Mac, Windows and Linux.

1. Download |insomnia-app| for your operative system.

2. Import the :download:`Insomnia spec<resources/collections/insomnia.json>` for NEM.

.. |insomnia-app| raw:: html

    <a href="https://insomnia.rest/" target="_blank">Insomnia app</a>

.. _serialization:

Serialization
=============

`Catbuffer library <https://github.com/nemtech/catbuffer>`_ defines the protocol to serialize and deserialize Catapult entities. The library comes with code generators for different languages. SDKs and applications use the generated code to interact with REST transaction endpoint.

.. figure:: resources/images/diagrams/catbuffer.png
    :width: 450px
    :align: center

    NEM2-SDK serialization module

The library accomplishes the following properties:

**Memory Efficiency**

Large networks compute a large number of transactions. Working with binary optimized in size makes the communication faster. Furthermore, reading entities from memory buffers -or just a part of them - is memory efficient.

**Flexibility**

REST `transaction endpoints <https://nemtech.github.io/endpoints.html#operation/announceTransaction>`_ handle the calls to update the blockchain state. The serialized payload of a transaction is appended to the body of the POST call. These endpoints allow the addition of new functionality to the server side without modifying the API contract.

**Reusability**

Applications can embed the generated code, without managing dependencies. This is particularly desirable in highly-secure environments. Besides, sharing a common codebase enables the addition of new features with less effort.

The `schemas define <https://github.com/nemtech/catbuffer/tree/master/schemas>`_ the entities data structure. The library generates the leanest code necessary to serialize and deserialize defined entities.

Generate the code for a determined schema in one of the available languages. For example, run the following command to generate C++ transaction builders for a transfer transaction:

.. code-block:: bash

    $> python main.py --schema schemas/transfer/transfer.cats --generator cpp_builder

The generator creates a new file under ``_generated/cpp_builder`` folder. Repeat the process using a different input schema ``(-s)`` or generator ``(-g)`` as needed.

.. _http-errors:

Http errors
===========

.. csv-table::
    :header: "Status code", "Description"
    :delim: ;

    200; Ok. The request has succeeded.
    202; Accepted. The request has been accepted for processing but the processing has not been completed.
    400; Bad request. Check your request syntax.
    404; Not found. The resource does not exist.
    409; Conflict. Check your arguments.
    500; Internal error. Unexpected condition.

.. _http-status:

Http status
===========

.. csv-table::
    :header: "Key", "Description"
    :delim: ;

    code; Error identifier in camelCase.
    message; Error explained in human-readable format.

**Example**

.. code-block:: json

  {
    "code": "InvalidArgument",
    "message": "accountId has an invalid format"
  }

uint64: lower and higher
========================

Javascript operate on 32 bit values. To enable representation up to 64 bits, the API returns numbers encoded in two parts: ``lower`` and ``higher``.

Check `how to compact lower and higher into a single value <https://github.com/nemtech/nem2-library-js/blob/f171afb516a282f698081aea407339cfcd21cd63/src/coders/uint64.js#L37>`_.

.. _websockets:

**********
WebSockets
**********

WebSockets make receiving notifications possible when a transaction or event occurs in the blockchain. The notification is received in real time without having to poll the API waiting for a reply.

Interaction with API WebSockets in :doc:`NEM2-SDK <../sdk>` is done with **Listeners**.

Channels
========

**block**

The block channel notifies for every new block. The message contains the block information.

**confirmedAdded/<ADDRESS>**

The confirmedAdded channel notifies when a transaction related to an address is included in a block. The message contains the transaction.

**unconfirmedAdded/<ADDRESS>**

The unconfirmedAdded channel notifies when a transaction related to an address is in unconfirmed state and waiting to be included in a block. The message contains the transaction.

Possible scenarios when this channel notifies are: the transaction is announced to the network via ``PUT /transaction`` HTTP endpoint or an aggregate bonded transaction has all required cosigners and change its state from *partial* to *unconfirmed*.

**unconfirmedRemoved/<ADDRESS>**

The unconfirmedRemoved channel notifies when a transaction related to an address was in unconfirmed state but is not anymore. The message contains the transaction hash.

Possible scenarios when this channel notifies are: the transaction now is confirmed or the deadline has been reached and it was not included in a block.

**partialAdded/<ADDRESS>**

The partialAdded channel notifies when an aggregate bonded transaction related to an address is in *partial* state and waiting to have all *required cosigners*. The message contains a transaction.

The scenario when this channel notifies is when an aggregate bonded transaction is announced to the network via ``PUT /transaction/partial`` HTTP endpoint.

**partialRemoved/<ADDRESS>**

The partialRemoved channel notifies when a transaction related to an address was in partial state but is not anymore. The message contains the transaction hash.

Possible scenarios when this channel notifies are: the transaction now is in unconfirmed or the deadline has been reached and it was not included in a block.

**cosignature/<ADDRESS>**

The cosignature channel notifies when a *cosignature signed transaction* related to an address is added to an aggregate bonded transaction with partial state. The message contains the cosignature signed transaction.

**status/<ADDRESS>**

The status channel notifies when a transaction related to an address rises an error. The message contains the error message and the transaction hash.

.. _status-errors:

Status errors
=============

This section describes the error messages that can be returned via status channel after announcing a transaction.

.. note:: Configuration parameters are `editable <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_. Public network configuration may differ.

.. csv-table::
    :header: "Status", "Description"

    Success, Validation result is success.
    Neutral, Validation result is neither success nor failure.
    Failure, Validation result is failure.
    Failure_Core_Past_Deadline, Validation failed because the deadline passed.
    Failure_Core_Future_Deadline, Validation failed because the deadline is too far in the future. Deadlines are only allowed to lie up to ``24`` hours ahead.
    Failure_Core_Insufficient_Balance, Validation failed because the account has an insufficient balance.
    Failure_Core_Too_Many_Transactions, Validation failed because there are too many transactions in a block.
    Failure_Core_Nemesis_Account_Signed_After_Nemesis_Block, Validation failed because an entity originated from the nemesis account after the nemesis block.
    Failure_Core_Wrong_Network, Validation failed because the entity has the wrong network specified.
    Failure_Core_Invalid_Address, Validation failed because an address is invalid.
    Failure_Core_Block_Harvester_Ineligible, Validation failed because a block was harvested by an ineligible harvester
    Failure_Hash_Exists, Validation failed because the entity hash is already known.
    Failure_Signature_Not_Verifiable, Validation failed because the verification of the signature failed.
    Failure_AccountLink_Invalid_Action, Validation failed because the account link action is invalid: link (0) and unlink (1).
    Failure_AccountLink_Link_Already_Exists, Validation failed because the main account is already linked to another account.
    Failure_AccountLink_Link_Does_Not_Exist, Validation failed because the unlink data is not consistent with existing account link.
    Failure_AccountLink_Unlink_Data_Inconsistency, Validation failed because the unlink data is not consistent with existing account link.
    Failure_AccountLink_Remote_Account_Ineligible, Validation failed because the link is attempting to convert ineligible account to remote.
    Failure_AccountLink_Remote_Account_Signer_Not_Allowed, Validation failed because the remote is not allowed to sign a transaction.
    Failure_AccountLink_Remote_Account_Participant_Not_Allowed, Validation failed because the remote is not allowed to participate in the transaction.
    Failure_Aggregate_Too_Many_Transactions, Validation failed because an aggregate has too many transactions. An aggregate transaction can contain up to ``1000`` inner transactions.
    Failure_Aggregate_No_Transactions, Validation failed because an aggregate does not have any transactions.
    Failure_Aggregate_Too_Many_Cosignatures, Validation failed because an aggregate has too many cosignatures. The maximum number of cosignatories allowed is ``15``.
    Failure_Aggregate_Redundant_Cosignatures, Validation failed because there are redundant cosignatures.
    Failure_Aggregate_Ineligible_Cosigners, Validation failed because at least one cosigner is ineligible.
    Failure_Aggregate_Missing_Cosigners, Validation failed because at least one required cosigner is missing. The transaction was announced as complete but had missing cosignatures.
    Failure_LockHash_Invalid_Mosaic_Id, Validation failed because the lock does not allow the specified mosaic. The only mosaic allowed is ``xem``.
    Failure_LockHash_Invalid_Mosaic_Amount, Validation failed because the lock does not allow the specified amount. The minimum amount is ``10``.
    Failure_LockHash_Hash_Exists, Validation failed because the hash is already present in cache.
    Failure_LockHash_Hash_Does_Not_Exist, Validation failed because the hash is not present in cache. Remember to lock before announcing aggregate bonded transactions.
    Failure_LockHash_Inactive_Hash, Validation failed because the hash is inactive.
    Failure_LockHash_Invalid_Duration, Validation failed because the duration is too long. Duration is allowed to lie up to ``2`` days.
    Failure_LockSecret_Invalid_Hash_Algorithm, Validation failed because the hash algorithm for lock type secret is invalid. See the :doc:`available algorithms <../concepts/cross-chain-swaps>` list.
    Failure_LockSecret_Hash_Exists, Validation failed because the hash is already present in cache.
    Failure_LockSecret_Hash_Not_Implemented, Validation failed because the hash is not implemented yet.
    Failure_LockSecret_Proof_Size_Out_Of_Bounds, Validation failed because the proof is too small or too large. It should be between ``10`` and ``1000`` bytes.
    Failure_LockSecret_Secret_Mismatch, Validation failed because the secret does not match proof.
    Failure_LockSecret_Unknown_Secret, Validation failed because the secret is unknown.
    Failure_LockSecret_Inactive_Secret, Validation failed because the secret is inactive.
    Failure_LockSecret_Hash_Algorithm_Mismatch, Validation failed because the hash algorithm does not match.
    Failure_LockSecret_Invalid_Duration, Validation failed because the duration is too long. Duration is allowed to lie up to ``30`` days.
    Failure_Mosaic_Invalid_Duration, Validation failed because the duration has an invalid value. Duration is allowed to lie up to ``365`` days.
    Failure_Mosaic_Invalid_Name, Validation failed because the name is invalid. The mosaic name may have a maximum length of ``64`` characters. Allowed characters are `a-to-z`; `0-to-9` and the following special characters: \`_-
    Failure_Mosaic_Name_Id_Mismatch, Validation failed because the name and id don't match.
    Failure_Mosaic_Expired, Validation failed because the parent is expired.
    Failure_Mosaic_Id_Mismatch, Validation failed because the id is not the expected id generated from signer and nonce.
    Failure_Mosaic_Owner_Conflict, Validation failed because the parent owner conflicts with the child owner.
    Failure_Mosaic_Parent_Id_Conflict, Validation failed because the existing parent id does not match the supplied parent id.
    Failure_Mosaic_Invalid_Property, Validation failed because a mosaic property is invalid.
    Failure_Mosaic_Invalid_Flags, Validation failed because the mosaic flags are invalid.
    Failure_Mosaic_Invalid_Divisibility, Validation failed because the mosaic divisibility is invalid. The specified divisibility is greater than ``6`` or negative.
    Failure_Mosaic_Invalid_Supply_Change_Direction, Validation failed because the mosaic supply change direction is invalid: decrease (0) and  increase (1).
    Failure_Mosaic_Invalid_Supply_Change_Amount, Validation failed because the mosaic supply change amount is invalid.
    Failure_Mosaic_Invalid_Id, Validation failed because the mosaic id is invalid.
    Failure_Mosaic_Name_Reserved, Validation failed because the mosaic has a reserved name.
    Failure_Mosaic_Modification_Disallowed, Validation failed because mosaic modification is not allowed.
    Failure_Mosaic_Modification_No_Changes, Validation failed because mosaic modification would not result in any changes.
    Failure_Mosaic_Supply_Immutable, Validation failed because the mosaic supply is immutable.
    Failure_Mosaic_Supply_Negative, Validation failed because the resulting mosaic supply is negative.
    Failure_Mosaic_Supply_Exceeded, Validation failed because the resulting mosaic supply exceeds the maximum allowed value. The range should be between 0 and ``9.000.000.000``.
    Failure_Mosaic_Non_Transferable, Validation failed because the mosaic is not transferable. Only the creator of the mosaic is eligible to be the recipient of a non-transferable mosaic once transferred.
    Failure_Mosaic_Max_Mosaics_Exceeded, Validation failed because the credit of the mosaic would exceed the maximum different mosaics an account is allowed to own. Set by default to ``10.000`` different mosaics per account.
    Failure_Multisig_Modify_Account_In_Both_Sets, Validation failed because an account is specified to be both added and removed.
    Failure_Multisig_Modify_Multiple_Deletes, Validation failed because there are multiple removals.
    Failure_Multisig_Modify_Redundant_Modifications, Validation failed because there are redundant modifications.
    Failure_Multisig_Modify_Unknown_Multisig_Account, Validation failed because account is not in multisig cache.
    Failure_Multisig_Modify_Not_A_Cosigner, Validation failed because there is not account to be removed.
    Failure_Multisig_Modify_Already_A_Cosigner, Validation failed because the account to be added is already a cosignatory.
    Failure_Multisig_Modify_Min_Setting_Out_Of_Range, Validation failed because the new minimum settings are out of range.
    Failure_Multisig_Modify_Min_Setting_Larger_Than_Num_Cosignatories, Validation failed because min settings are larger than number of cosignatories.
    Failure_Multisig_Modify_Unsupported_Modification_Type, Validation failed because the modification type is unsupported: add (0) and remove (1).
    Failure_Multisig_Modify_Max_Cosigned_Accounts, Validation failed because the cosignatory already cosigns the maximum number of accounts. An account cannot be cosignatory of more than ``5`` multisig accounts.
    Failure_Multisig_Modify_Max_Cosigners, Validation failed because the multisig account already has the maximum number of cosignatories. A multisig account cannot have more than ``10`` cosignatories.
    Failure_Multisig_Modify_Loop, Validation failed because a multisig loop is created. A multisig account cannot be cosignatory of itself. Neither an account can be turned into multisig having as cosignatory another multisig where the account is cosignatory.
    Failure_Multisig_Modify_Max_Multisig_Depth, Validation failed because the max multisig depth is exceeded. The maximum depth of a multilevel multisig account is ``3``.
    Failure_Multisig_Operation_Not_Permitted_By_Account, Validation failed because an operation is not permitted by a multisig account. A multisig account cannot be converted into a multisig account again.
    Failure_Namespace_Invalid_Duration, Validation failed because the duration has an invalid value. Duration is allowed to lie up to ``365`` days.
    Failure_Namespace_Invalid_Name, Validation failed because the namespace has an invalid name. The namespace name may have a maximum length of ``64`` characters. Allowed characters are `a-to-z`; `0-to-9` and the following special characters: \`_-
    Failure_Namespace_Name_Id_Mismatch, Validation failed because the name and id don't match.
    Failure_Namespace_Expired, Validation failed because the namespace has expired.
    Failure_Namespace_Owner_Conflict, Validation failed because the parent owner conflicts with the child owner.
    Failure_Namespace_Id_Mismatch, Validation failed because the id is not the expected id generated from signer and nonce.
    Failure_Namespace_Invalid_Namespace_Type, Validation failed because the namespace type is invalid: rootnamespace (0) and subnamesapce (1).
    Failure_Namespace_Root_Name_Reserved, Validation failed because the root namespace has a `reserved name <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties#L60>`_.
    Failure_Namespace_Too_Deep, Validation failed because the resulting namespace would exceed the maximum allowed namespace depth. Namespaces can have up to ``3`` nested levels.
    Failure_Namespace_Parent_Unknown, Validation failed because the namespace parent is unknown.
    Failure_Namespace_Already_Exists, Validation failed because the namespace already exists.
    Failure_Namespace_Already_Active,Validation failed because the namespace is already active.
    Failure_Namespace_Eternal_After_Nemesis_Block, Validation failed because an eternal namespace was received after the nemesis block.
    Failure_Namespace_Max_Children_Exceeded, Validation failed because the maximum number of children for a root namespace was exceeded.
    Failure_Namespace_Alias_Invalid_Action, Validation failed because alias action is invalid: link (0) and unlink (1).
    Failure_Namespace_Alias_Namespace_Unknown, Validation failed because the namespace does not exist.
    Failure_Namespace_Alias_Already_Exists, Validation failed because the namespace is already linked to an alias.
    Failure_Namespace_Alias_Does_Not_Exist, Validation failed because the namespace is not linked to an alias.
    Failure_Namespace_Alias_Owner_Conflict, Validation failed because the namespace has different owner.
    Failure_Namespace_Alias_Unlink_Type_Inconsistency, Validation failed because unlink type is not consistent with the existing alias.
    Failure_Namespace_Alias_Unlink_Data_Inconsistency, Validation failed because unlink data is not consistent with the existing alias.
    Failure_Namespace_Alias_Invalid_Address, Validation failed because the aliased address is invalid.
    Failure_Property_Invalid_Property_Type, Validation failed because the property type is invalid.
    Failure_Property_Modification_Type_Invalid, Validation failed because a modification type is invalid.
    Failure_Property_Modification_Address_Invalid, Validation failed because a modification address is invalid.
    Failure_Property_Modification_Operation_Type_Incompatible, Validation failed because the operation type is incompatible.
    Failure_Property_Modify_Unsupported_Modification_Type, Validation failed because the modification type is unsupported: add (0) and  delete (1).
    Failure_Property_Modification_Redundant, Validation failed because a modification is redundant.
    Failure_Property_Modification_Not_Allowed, Validation failed because there is not a value in the container.
    Failure_Property_Modification_Count_Exceeded, Validation failed because the transaction has too many modifications.
    Failure_Property_Values_Count_Exceeded, Validation failed because the resulting property has too many values. The maximum number of values a property can have is ``512``.
    Failure_Property_Value_Invalid, Validation failed because the property value is invalid.
    Failure_Property_Signer_Address_Interaction_Not_Allowed, Validation failed because the signer is not allowed to interact with an address involved in the transaction.
    Failure_Property_Mosaic_Transfer_Not_Allowed, Validation failed because the mosaic transfer is prohibited by the recipient.
    Failure_Property_Transaction_Type_Not_Allowed, Validation failed because the transaction type is not allowed to be initiated by the signer.
    Failure_Transfer_Message_Too_Large, Validation failed because the message is too large.  It exceeds the limit of ``1024`` bytes.
    Failure_Transfer_Out_Of_Order_Mosaics, Validation failed because the mosaics are out of order. Mosaics on a transfer transaction should be ordered by id value.
    Failure_Chain_Unlinked, Validation failed because a block was received that did not link with the existing chain.
    Failure_Chain_Block_Not_Hit, Validation failed because a block was received that is not a hit.
    Failure_Chain_Block_Inconsistent_State_Hash, Validation failed because a block was received that has an inconsistent state hash.
    Failure_Chain_Block_Inconsistent_Receipts_Hash, Validation failed because a block was received that has an inconsistent receipts hash.
    Failure_Chain_Unconfirmed_Cache_Too_Full, Validation failed because the unconfirmed cache is too full.
    Failure_Consumer_Empty_Input, Validation failed because the consumer input is empty.
    Failure_Consumer_Block_Transactions_Hash_Mismatch, Validation failed because the block transactions hash does not match the calculated value.
    Failure_Consumer_Hash_In_Recency_Cache, Validation failed because the entity hash is present in the recency cache.
    Failure_Consumer_Remote_Chain_Too_Many_Blocks, Validation failed because the chain part has too many blocks.
    Failure_Consumer_Remote_Chain_Improper_Link, Validation failed because the chain is internally improperly linked.
    Failure_Consumer_Remote_Chain_Duplicate_Transactions, Validation failed because the chain part contains duplicate transactions.
    Failure_Consumer_Remote_Chain_Unlinked, Validation failed because the chain part does not link to the current chain.
    Failure_Consumer_Remote_Chain_Mismatched_Difficulties, Validation failed because the remote chain difficulties do not match the calculated difficulties.
    Failure_Consumer_Remote_Chain_Score_Not_Better, Validation failed because the remote chain score is not better.
    Failure_Consumer_Remote_Chain_Too_Far_Behind, Validation failed because the remote chain is too far behind.
    Failure_Consumer_Remote_Chain_Too_Far_In_Future, Validation failed because the remote chain timestamp is too far in the future.
    Failure_Extension_Partial_Transaction_Cache_Prune, Validation failed because the partial transaction was pruned from the temporal cache.
    Failure_Extension_Partial_Transaction_Dependency_Removed, Validation failed because the partial transaction was pruned from the temporal cache due to its dependency being removed.

:download:`OpenAPI specification <resources/collections/swagger.yaml>`
