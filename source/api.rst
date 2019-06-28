########
REST API
########

**Catapult REST** combines HTTP and WebSockets to perform read and write actions in the NEM blockchain.

************
Installation
************

**Repository**: |catapult-rest|

Test catapult-rest deploying your own network for development or learning purposes with |catapult-service-bootstrap|.

.. _http-requests:

*************
Http requests
*************

Catapult REST uses port ``3000``. It accepts both HTTP **GET**, **PUT** and **POST** requests.

Assuming that Catapult REST is :doc:`running locally  <getting-started/setup-workstation>`, HTTP GET requests can be executed from a browser and have the form:

    http://localhost:3000/<path-to-API-request>

HTTP PUT and POST requests use JSON structures in the request body. Request returns data using JSON structures. This kind of request cannot usually be executed from within the browser unless you use a :ref:`plugin <tools>` which enables you to do it.

Get the complete list of available endpoints by clicking on the button below:

.. raw:: html

    <a href="/endpoints.html"><button class="btn btn-default">REST API Endpoints</button></a>

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

UInt64: lower and higher
========================

Javascript operates on **32-bit** values. The server returns numbers encoded in a UInt64 object to enable numeric representation up to **64 bits**.

The **UInt64** object returned is composed of two 32-bit numbers: ``lower`` and ``higher``.

The :doc:`nem2-sdk <sdk>` conveniently allows you to work with UInt64 values.

.. code-block:: typescript

    import {UInt64} from "nem2-sdk";

    // Create Uint64 from [lower, higher]
    const id = new UInt64([123456,654321]);

    // UInt64 to compact number
    console.log(id.compact());
    // 2810287296209472

    // UInt64 to Hex
    console.log(id.toHex());
    // 0009FBF10001E240

    // Create UInt64 from hex
    UInt64.fromHex('0009FBF10001E240');

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

.. csv-table::
    :header: "Id", "Status", "Description"
    :widths: 20 40 40
    :delim: ;

    0x00000000; Success; Validation result is success.
    0x40000000; Neutral; Validation result is neither success nor failure.
    0x80000000; Failure; Validation result is failure.
    0x80430001; Failure_Core_Past_Deadline; Validation failed because the deadline passed.
    0x80430002; Failure_Core_Future_Deadline; Validation failed because the deadline is too far in the future.
    0x80430003; Failure_Core_Insufficient_Balance; Validation failed because the account has an insufficient balance.
    0x80430004; Failure_Core_Too_Many_Transactions; Validation failed because there are too many transactions in a block.
    0x80430005; Failure_Core_Nemesis_Account_Signed_After_Nemesis_Block; Validation failed because an entity originated from the nemesis account after the nemesis block.
    0x80430006; Failure_Core_Wrong_Network; Validation failed because the entity has the wrong network specified.
    0x80430007; Failure_Core_Invalid_Address; Validation failed because an address is invalid.
    0x80430008; Failure_Core_Invalid_Version; Validation failed because entity version is invalid.
    0x80430009; Failure_Core_Invalid_Transaction_Fee; Validation failed because a transaction fee is invalid.
    0x8043000A; Failure_Core_Block_Harvester_Ineligible; Validation failed because a block was harvested by an ineligible harvester.
    0x81490001; Failure_Hash_Exists; Validation failed because the entity hash is already known.
    0x80530001; Failure_Signature_Not_Verifiable; Validation failed because the verification of the signature failed.
    0x804C0001; Failure_AccountLink_Invalid_Action; Validation failed because account link action is invalid.
    0x804C0002; Failure_AccountLink_Link_Already_Exists; Validation failed because main account is already linked to another account.
    0x804C0003; Failure_AccountLink_Link_Does_Not_Exist; Validation failed because main account is not linked to another account.
    0x804C0004; Failure_AccountLink_Unlink_Data_Inconsistency; Validation failed because unlink data is not consistent with existing account link.
    0x804C0005; Failure_AccountLink_Remote_Account_Ineligible; Validation failed because link is attempting to convert ineligible account to remote.
    0x804C0006; Failure_AccountLink_Remote_Account_Signer_Not_Allowed; Validation failed because remote is not allowed to sign a transaction.
    0x804C0007; Failure_AccountLink_Remote_Account_Participant_Not_Allowed; Validation failed because remote is not allowed to participate in the transaction.
    0x80410001; Failure_Aggregate_Too_Many_Transactions; Validation failed because aggregate has too many transactions.
    0x80410002; Failure_Aggregate_No_Transactions; Validation failed because aggregate does not have any transactions.
    0x80410003; Failure_Aggregate_Too_Many_Cosignatures; Validation failed because aggregate has too many cosignatures.
    0x80410004; Failure_Aggregate_Redundant_Cosignatures; Validation failed because redundant cosignatures are present.
    0x80410005; Failure_Aggregate_Ineligible_Cosigners; Validation failed because at least one cosigner is ineligible.
    0x80410006; Failure_Aggregate_Missing_Cosigners; Validation failed because at least one required cosigner is missing.
    0x80480001; Failure_LockHash_Invalid_Mosaic_Id; Validation failed because lock does not allow the specified mosaic.
    0x80480002; Failure_LockHash_Invalid_Mosaic_Amount; Validation failed because lock does not allow the specified amount.
    0x80480003; Failure_LockHash_Hash_Exists; Validation failed because hash is already present in cache.
    0x80480004; Failure_LockHash_Hash_Does_Not_Exist; Validation failed because hash is not present in cache.
    0x80480005; Failure_LockHash_Inactive_Hash; Validation failed because hash is inactive.
    0x80480006; Failure_LockHash_Invalid_Duration; Validation failed because duration is too long.
    0x80520001; Failure_LockSecret_Invalid_Hash_Algorithm; Validation failed because hash algorithm for lock type secret is invalid.
    0x80520002; Failure_LockSecret_Hash_Exists; Validation failed because hash is already present in cache.
    0x80520003; Failure_LockSecret_Hash_Not_Implemented; Validation failed because hash is not implemented yet.
    0x80520004; Failure_LockSecret_Proof_Size_Out_Of_Bounds; Validation failed because proof is too small or too large.
    0x80520005; Failure_LockSecret_Secret_Mismatch; Validation failed because secret does not match proof.
    0x80520006; Failure_LockSecret_Unknown_Composite_Key; Validation failed because composite key is unknown.
    0x80520007; Failure_LockSecret_Inactive_Secret; Validation failed because secret is inactive.
    0x80520008; Failure_LockSecret_Hash_Algorithm_Mismatch; Validation failed because hash algorithm does not match.
    0x80520009; Failure_LockSecret_Invalid_Duration; Validation failed because duration is too long.
    0x804D0001; Failure_Mosaic_Invalid_Duration; Validation failed because the duration has an invalid value.
    0x804D0002; Failure_Mosaic_Invalid_Name; Validation failed because the name is invalid.
    0x804D0003; Failure_Mosaic_Name_Id_Mismatch; Validation failed because the name and id don't match.
    0x804D0004; Failure_Mosaic_Expired; Validation failed because the parent is expired.
    0x804D0005; Failure_Mosaic_Owner_Conflict; Validation failed because the parent owner conflicts with the child owner.
    0x804D0006; Failure_Mosaic_Id_Mismatch; Validation failed because the id is not the expected id generated from signer and nonce.
    0x804D0064; Failure_Mosaic_Parent_Id_Conflict; Validation failed because the existing parent id does not match the supplied parent id.
    0x804D0065; Failure_Mosaic_Invalid_Property; Validation failed because a mosaic property is invalid.
    0x804D0066; Failure_Mosaic_Invalid_Flags; Validation failed because the mosaic flags are invalid.
    0x804D0067; Failure_Mosaic_Invalid_Divisibility; Validation failed because the mosaic divisibility is invalid.
    0x804D0068; Failure_Mosaic_Invalid_Supply_Change_Direction; Validation failed because the mosaic supply change direction is invalid.
    0x804D0069; Failure_Mosaic_Invalid_Supply_Change_Amount; Validation failed because the mosaic supply change amount is invalid.
    0x804D006A; Failure_Mosaic_Invalid_Id; Validation failed because the mosaic id is invalid.
    0x804D006B; Failure_Mosaic_Modification_Disallowed; Validation failed because mosaic modification is not allowed.
    0x804D006C; Failure_Mosaic_Modification_No_Changes; Validation failed because mosaic modification would not result in any changes.
    0x804D006D; Failure_Mosaic_Supply_Immutable; Validation failed because the mosaic supply is immutable.
    0x804D006E; Failure_Mosaic_Supply_Negative; Validation failed because the resulting mosaic supply is negative.
    0x804D006F; Failure_Mosaic_Supply_Exceeded; Validation failed because the resulting mosaic supply exceeds the maximum allowed value.
    0x804D0070; Failure_Mosaic_Non_Transferable; Validation failed because the mosaic is not transferable.
    0x804D0071; Failure_Mosaic_Max_Mosaics_Exceeded; Validation failed because the credit of the mosaic would exceed the maximum of different mosaics an account is allowed to own.
    0x80550001; Failure_Multisig_Modify_Account_In_Both_Sets; Validation failed because account is specified to be both added and removed.
    0x80550002; Failure_Multisig_Modify_Multiple_Deletes; Validation failed because multiple removals are present.
    0x80550003; Failure_Multisig_Modify_Redundant_Modifications; Validation failed because redundant modifications are present.
    0x80550004; Failure_Multisig_Modify_Unknown_Multisig_Account; Validation failed because account is not in multisig cache.
    0x80550005; Failure_Multisig_Modify_Not_A_Cosigner; Validation failed because account to be removed is not present.
    0x80550006; Failure_Multisig_Modify_Already_A_Cosigner; Validation failed because account to be added is already a cosignatory.
    0x80550007; Failure_Multisig_Modify_Min_Setting_Out_Of_Range; Validation failed because new minimum settings are out of range.
    0x80550008; Failure_Multisig_Modify_Min_Setting_Larger_Than_Num_Cosignatories; Validation failed because min settings are larger than number of cosignatories.
    0x80550009; Failure_Multisig_Modify_Unsupported_Modification_Type; Validation failed because the modification type is unsupported.
    0x8055000A; Failure_Multisig_Modify_Max_Cosigned_Accounts; Validation failed because the cosignatory already cosigns the maximum number of accounts.
    0x8055000B; Failure_Multisig_Modify_Max_Cosigners; Validation failed because the multisig account already has the maximum number of cosignatories.
    0x8055000C; Failure_Multisig_Modify_Loop; Validation failed because a multisig loop is created.
    0x8055000D; Failure_Multisig_Modify_Max_Multisig_Depth; Validation failed because the max multisig depth is exceeded.
    0x8055000E; Failure_Multisig_Operation_Not_Permitted_By_Account; Validation failed because an operation is not permitted by a multisig account.
    0x804E0001; Failure_Namespace_Invalid_Duration; Validation failed because the duration has an invalid value.
    0x804E0002; Failure_Namespace_Invalid_Name; Validation failed because the name is invalid.
    0x804E0003; Failure_Namespace_Name_Id_Mismatch; Validation failed because the name and id don't match.
    0x804E0004; Failure_Namespace_Expired; Validation failed because the parent is expired.
    0x804E0005; Failure_Namespace_Owner_Conflict; Validation failed because the parent owner conflicts with the child owner.
    0x804E0006; Failure_Namespace_Id_Mismatch; Validation failed because the id is not the expected id generated from signer and nonce.
    0x804E0064; Failure_Namespace_Invalid_Namespace_Type; Validation failed because the namespace type is invalid.
    0x804E0065; Failure_Namespace_Root_Name_Reserved; Validation failed because the root namespace has a reserved name.
    0x804E0066; Failure_Namespace_Too_Deep; Validation failed because the resulting namespace would exceed the maximum allowed namespace depth.
    0x804E0067; Failure_Namespace_Parent_Unknown; Validation failed because the namespace parent is unknown.
    0x804E0068; Failure_Namespace_Already_Exists; Validation failed because the namespace already exists.
    0x804E0069; Failure_Namespace_Already_Active; Validation failed because the namespace is already active.
    0x804E006A; Failure_Namespace_Eternal_After_Nemesis_Block; Validation failed because an eternal namespace was received after the nemesis block.
    0x804E006B; Failure_Namespace_Max_Children_Exceeded; Validation failed because the maximum number of children for a root namespace was exceeded.
    0x804E006C; Failure_Namespace_Alias_Invalid_Action; Validation failed because alias action is invalid.
    0x804E006D; Failure_Namespace_Alias_Namespace_Unknown; Validation failed because namespace does not exist.
    0x804E006E; Failure_Namespace_Alias_Already_Exists; Validation failed because namespace is already linked to an alias.
    0x804E006F; Failure_Namespace_Alias_Does_Not_Exist; Validation failed because namespace is not linked to an alias.
    0x804E0070; Failure_Namespace_Alias_Owner_Conflict; Validation failed because namespace has different owner.
    0x804E0071; Failure_Namespace_Alias_Unlink_Type_Inconsistency; Validation failed because unlink type is not consistent with existing alias.
    0x804E0072; Failure_Namespace_Alias_Unlink_Data_Inconsistency; Validation failed because unlink data is not consistent with existing alias.
    0x804E0073; Failure_Namespace_Alias_Invalid_Address; Validation failed because aliased address is invalid.
    0x80500001; Failure_RestrictionAccount_Invalid_Restriction_Type; Validation failed because the account restriction type is invalid.
    0x80500002; Failure_RestrictionAccount_Modification_Type_Invalid; Validation failed because a modification type is invalid.
    0x80500003; Failure_RestrictionAccount_Modification_Address_Invalid; Validation failed because a modification address is invalid.
    0x80500004; Failure_RestrictionAccount_Modification_Operation_Type_Incompatible; Validation failed because the operation type is incompatible. *Note*: This indicates that the existing restrictions have a different operation type than that specified in the notification.
    0x80500005; Failure_RestrictionAccount_Modify_Unsupported_Modification_Type; Validation failed because the modification type is unsupported.
    0x80500006; Failure_RestrictionAccount_Modification_Redundant; Validation failed because a modification is redundant.
    0x80500007; Failure_RestrictionAccount_Modification_Not_Allowed; Validation failed because a value is not in the container.
    0x80500008; Failure_RestrictionAccount_Modification_Count_Exceeded; Validation failed because the transaction has too many modifications.
    0x80500009; Failure_RestrictionAccount_Values_Count_Exceeded; Validation failed because the resulting account restriction has too many values.
    0x8050000A; Failure_RestrictionAccount_Value_Invalid; Validation failed because the account restriction value is invalid.
    0x8050000B; Failure_RestrictionAccount_Signer_Address_Interaction_Not_Allowed; Validation failed because the signer is not allowed to interact with an address involved in the transaction.
    0x8050000C; Failure_RestrictionAccount_Mosaic_Transfer_Not_Allowed; Validation failed because the mosaic transfer is prohibited by the recipient.
    0x8050000D; Failure_RestrictionAccount_Transaction_Type_Not_Allowed; Validation failed because the transaction type is not allowed to be initiated by the signer.
    0x80540001; Failure_Transfer_Message_Too_Large; Validation failed because the message is too large.
    0x80540002; Failure_Transfer_Out_Of_Order_Mosaics; Validation failed because mosaics are out of order.
    0x80FF0001; Failure_Chain_Unlinked; Validation failed because a block was received that did not link with the existing chain.
    0x80FF0002; Failure_Chain_Block_Not_Hit; Validation failed because a block was received that is not a hit.
    0x80FF0003; Failure_Chain_Block_Inconsistent_State_Hash; Validation failed because a block was received that has an inconsistent state hash.
    0x80FF0004; Failure_Chain_Block_Inconsistent_Receipts_Hash; Validation failed because a block was received that has an inconsistent receipts hash.
    0x80FF0005; Failure_Chain_Unconfirmed_Cache_Too_Full; Validation failed because the unconfirmed cache is too full.
    0x80FE0001; Failure_Consumer_Empty_Input; Validation failed because the consumer input is empty.
    0x80FE0002; Failure_Consumer_Block_Transactions_Hash_Mismatch; Validation failed because the block transactions hash does not match the calculated value.
    0x41FE0003; Neutral_Consumer_Hash_In_Recency_Cache; Validation failed because an entity hash is present in the recency cache.
    0x80FE0004; Failure_Consumer_Remote_Chain_Too_Many_Blocks; Validation failed because the chain part has too many blocks.
    0x80FE0005; Failure_Consumer_Remote_Chain_Improper_Link; Validation failed because the chain is internally improperly linked.
    0x80FE0006; Failure_Consumer_Remote_Chain_Duplicate_Transactions; Validation failed because the chain part contains duplicate transactions.
    0x80FE0007; Failure_Consumer_Remote_Chain_Unlinked; Validation failed because the chain part does not link to the current chain.
    0x80FE0008; Failure_Consumer_Remote_Chain_Mismatched_Difficulties; Validation failed because the remote chain difficulties do not match the calculated difficulties.
    0x80FE0009; Failure_Consumer_Remote_Chain_Score_Not_Better; Validation failed because the remote chain score is not better.
    0x80FE000A; Failure_Consumer_Remote_Chain_Too_Far_Behind; Validation failed because the remote chain is too far behind.
    0x80FE000B; Failure_Consumer_Remote_Chain_Too_Far_In_Future; Validation failed because the remote chain timestamp is too far in the future.
    0x80450001; Failure_Extension_Partial_Transaction_Cache_Prune; Validation failed because the partial transaction was pruned from the temporal cache.
    0x80450002; Failure_Extension_Partial_Transaction_Dependency_Removed; Validation failed because the partial transaction was pruned from the temporal cache due to its dependency being removed.

:download:`OpenAPI specification 2 <resources/collections/swagger2.yaml>`
:download:`OpenAPI specification 3 <resources/collections/openapi3.yaml>`

.. _tools:

*****
Tools
*****
We recommend using one of the following tools to interact with the available endpoints.

NEM2-SDK
========

The **NEM2 Software Development Kit** is the primary software development tool to create NEM2 components, such as additional tools, libraries or applications.

* :doc:`Reference <../sdk>`
* :doc:`Guides <../concepts/account>`

Insomnia
========

An open source HTTP client, available for Mac, Windows and Linux.

1. Download |insomnia-app| for your operative system.

2. Import the :download:`Insomnia spec<resources/collections/insomnia.json>` for NEM.

.. |insomnia-app| raw:: html

    <a href="https://insomnia.rest/" target="_blank">Insomnia app</a>

.. |catapult-service-bootstrap| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap" target="_blank">Catapult Service Bootstrap</a>

.. |catapult-rest| raw:: html

   <a href="https://github.com/nemtech/catapult-rest" target="_blank">catapult-rest</a>
