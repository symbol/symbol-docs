##############
Error Handling
##############


If you are used to NIS1 API calls, you know that after announcing a transaction you received a success message or some error indicating the reason why the transaction has not been included in the block.

The new NIS2-API works differently, being *asynchronous*. When a user announces a transaction through the API, it always returns an OK.

To know the status of the transaction, which can be OK or Failure, you have to:

a) Check the status via API endpoint.
b) Listen to the different WebSocket channels.

**********
Error list
**********

This section describes the errors messages that can be returned from NIS.

.. csv-table::
   :header: "ERROR CODE", "Meaning"

    Neutral
    Failure
    Failure_Core_Past_Deadline, The deadline lies too far in the future. Deadlines are only allowed to lie up to 24 hours in the future.
    Failure_Core_Future_Deadline, The deadline lies too far in the future. Deadlines are only allowed to lie up to 24 hours in the future.
    Failure_Core_Insufficient_Balance, The account does not have enough funds.
    Failure_Core_Timestamp_Too_Far_In_Future, The timestamp of the entity lies too far in the future.
    Failure_Core_Too_Many_Transactions,
    Failure_Core_Nemesis_Account_Signed_After_Nemesis_Block, The supplied transaction has the nemesis account as sender and cannot be included in a normal block.
    Failure_Core_Wrong_Network, Entity was rejected because it has the wrong network specified.
    Failure_Core_Invalid_Address,
    Failure_Core_Block_Harvester_Ineligible,
    Failure_Hash_Exists, The hash of the entity already exists either in the cache or in the database.
    Failure_Signature_Not_Verifiable, The signature of the entity failed upon verification.
    Failure_Aggregate_Too_Many_Transactions,
    Failure_Aggregate_No_Transactions,
    Failure_Aggregate_Too_Many_Cosignatures, The transaction was rejected because it contains too many cosignatories. The maximum number of cosignatories allowed for a multisig account is ``N``.
    Failure_Aggregate_Redundant_Cosignatures,
    Failure_Aggregate_Ineligible_Cosigners,
    Failure_Aggregate_Missing_Cosigners,
    Failure_Lock_Invalid_Hash_Algorithm,
    Failure_Lock_Invalid_Mosaic_Id,
    Failure_Lock_Invalid_Mosaic_Amount,
    Failure_Lock_Hash_Exists, The hash of the entity already exists either in the cache or in the database.
    Failure_Lock_Hash_Does_Not_Exist,
    Failure_Lock_Missing_Secret_Padding,
    Failure_Lock_Hash_Not_Implemented,
    Failure_Lock_Proof_Size_Out_Of_Bounds,
    Failure_Lock_Secret_Mismatch,
    Failure_Lock_Unknown_Secret,
    Failure_Lock_Inactive_Hash,
    Failure_Lock_Inactive_Secret,
    Failure_Lock_Hash_Algorithm_Mismatch,
    Failure_Lock_Hash_Already_Used,
    Failure_Lock_Secret_Already_Used,
    Failure_Lock_Invalid_Duration,
    Failure_Multisig_Modify_Account_In_Both_Sets,
    Failure_Multisig_Modify_Multiple_Deletes, The transaction was rejected because it tried to remove multiple cosignatories at once. It is only allowed to remove one cosignatory at a time.
    Failure_Multisig_Modify_Redundant_Modifications, The transaction was rejected because it tried to do redundant modifications. This can happen if a transaction tries to add the same cosignatory two time.
    Failure_Multisig_Modify_Unknown_Multisig_Account,
    Failure_Multisig_Modify_Not_A_Cosigner, The multisig transaction was rejected because the signer of the transaction is not a cosignatory of the sender account of the inner transaction.
    Failure_Multisig_Modify_Already_A_Cosigner, The transaction was rejected because it tried to add a cosignatory to a multisig account which already has this cosignatory.
    Failure_Multisig_Modify_Min_Setting_Out_Of_Range,
    Failure_Multisig_Modify_Min_Setting_Larger_Than_Num_Cosignatories,
    Failure_Multisig_Modify_Unsupported_Modification_Type,
    Failure_Multisig_Modify_Max_Cosigned_Accounts,
    Failure_Multisig_Modify_Max_Cosigners,
    Failure_Multisig_Modify_Loop,
    Failure_Multisig_Modify_Max_Multisig_Depth,
    Failure_Multisig_Operation_Not_Permitted_By_Account,
    Failure_Namespace_Invalid_Duration,
    Failure_Mosaic_Invalid_Duration,
    Failure_Namespace_Invalid_Name, Validation failed because the name for the namespace is invalid.
    Failure_Mosaic_Invalid_Name
    Failure_Namespace_Name_Id_Mismatch,
    Failure_Mosaic_Name_Id_Mismatch,
    Failure_Namespace_Expired, Validation failed because the namespace has expired.
    Failure_Mosaic_Expired,
    Failure_Namespace_Owner_Conflict, Validation failed because the transaction signer is not the owner of the namespace.
    Failure_Mosaic_Owner_Conflict,
    Failure_Namespace_Invalid_Namespace_Type,
    Failure_Namespace_Root_Name_Reserved,
    Failure_Namespace_Too_Deep,
    Failure_Namespace_Parent_Unknown,
    Failure_Namespace_Already_Exists, Validation failed because the namespace already exists.
    Failure_Namespace_Already_Active,
    Failure_Namespace_Eternal_After_Nemesis_Block,
    Failure_Mosaic_Parent_Id_Conflict,
    Failure_Mosaic_Invalid_Property,
    Failure_Mosaic_Invalid_Flags,
    Failure_Mosaic_Invalid_Divisibility,
    Failure_Mosaic_Invalid_Supply_Change_Direction,
    Failure_Mosaic_Invalid_Supply_Change_Amount,
    Failure_Mosaic_Name_Reserved,
    Failure_Mosaic_Modification_Disallowed,
    Failure_Mosaic_Modification_No_Changes,
    Failure_Mosaic_Supply_Immutable, Validation failed because the mosaic supply is immutable.
    Failure_Mosaic_Supply_Negative
    Failure_Mosaic_Supply_Exceeded
    Failure_Mosaic_Non_Transferable, Validation failed because the resulting mosaic supply would be negative.
    Failure_Transfer_Message_Too_Large, The message for the transaction exceeds the limit of ``1024`` bytes.
    Failure_Transfer_Out_Of_Order_Mosaics,
    Failure_Chain_Unlinked,
    Failure_Chain_Block_Not_Hit,
    Failure_Consumer_Empty_Input,
    Failure_Consumer_Block_Transactions_Hash_Mismatch,
    Failure_Consumer_Hash_In_Recency_Cache,
    Failure_Consumer_Remote_Chain_Too_Many_Blocks,
    Failure_Consumer_Remote_Chain_Improper_Link,
    Failure_Consumer_Remote_Chain_Duplicate_Transactions,
    Failure_Consumer_Remote_Chain_Unlinked,
    Failure_Consumer_Remote_Chain_Mismatched_Difficulties,
    Failure_Consumer_Remote_Chain_Score_Not_Better,
    Failure_Consumer_Remote_Chain_Too_Far_Behind,
    Failure_Extension_Partial_Transaction_Cache_Prune,
    Failure_Extension_Partial_Transaction_Dependency_Removed,