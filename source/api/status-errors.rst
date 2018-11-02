#############
Status Errors
#############

This section describes the error messages that can be returned via status channel after announcing a transaction.

.. note:: Configuration parameters are `editable <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_. Public network configuration may differ.

.. csv-table::
  :header: "Error code", "Description"

    Neutral
    Failure
    Failure_Core_Past_Deadline, The deadline lies too far in the future. Deadlines are only allowed to lie up to `24` hours ahead.
    Failure_Core_Future_Deadline, The deadline lies in the past.
    Failure_Core_Insufficient_Balance, The account does not have enough funds.
    Failure_Core_Timestamp_Too_Far_In_Future, The timestamp of the entity lies too far in the future.
    Failure_Core_Too_Many_Transactions,
    Failure_Core_Nemesis_Account_Signed_After_Nemesis_Block, The supplied transaction has the nemesis account as the sender and cannot be included in a normal block.
    Failure_Core_Wrong_Network, The entity was rejected because it has the wrong network specified.
    Failure_Core_Invalid_Address, An account specified in the request is not valid.
    Failure_Core_Block_Harvester_Ineligible,
    Failure_Hash_Exists, The hash of the entity already exists either in the cache or the database.
    Failure_Signature_Not_Verifiable, The signature of the entity failed upon verification.
    Failure_Aggregate_Too_Many_Transactions, The aggregate transaction exceeds the maximum number of inner transactions. An aggregate transaction can contain up to ``1000`` inner transactions.
    Failure_Aggregate_No_Transactions, The aggregate transaction does not contain any inner transactions.
    Failure_Aggregate_Too_Many_Cosignatures, The aggregate transaction contains too many cosignatories. The maximum number of cosignatories allowed is ``15``.
    Failure_Aggregate_Redundant_Cosignatures, The aggregate transaction contains the cosignature of the account who signed the transaction.
    Failure_Aggregate_Ineligible_Cosigners, The account who signed the aggregate transaction is not an eligible cosigner.
    Failure_Aggregate_Missing_Cosigners, The aggregate transaction was announced as complete but there are missing signatures.
    Failure_Lock_Invalid_Hash_Algorithm, The hash algorithm used is not defined.
    Failure_Lock_Invalid_Mosaic_Id, The locks funds transaction failed because locked mosaic is not XEM.
    Failure_Lock_Invalid_Mosaic_Amount, The amount of locked XEM is insufficient. The minimum amount is ``10``.
    Failure_Lock_Hash_Exists, The locks funds transaction failed because the hash of the aggregate transaction already exists either in the cache or in the database.
    Failure_Lock_Hash_Does_Not_Exist, The aggregate transaction failed because its hash has not been locked previously.
    Failure_Lock_Missing_Secret_Padding,
    Failure_Lock_Hash_Not_Implemented, The secret lock and the secret proof hash algorithm used is different.
    Failure_Lock_Proof_Size_Out_Of_Bounds, The proof length is invalid. It should be between ``10 and 1000 bytes``.
    Failure_Lock_Secret_Mismatch, The proof hashed does not equal to the secret.
    Failure_Lock_Unknown_Secret, The secret proof transaction specifies a secret that has not been found in the cache.
    Failure_Lock_Inactive_Hash, The aggregate bonded transaction has been sent after the secret lock funds transactions for this hash expired.
    Failure_Lock_Inactive_Secret, The secret proof transaction has been sent after the secret lock transaction expired.
    Failure_Lock_Hash_Algorithm_Mismatch,
    Failure_Lock_Hash_Already_Used, The lock funds transaction failed because the aggregate transaction hash has already been locked.
    Failure_Lock_Secret_Already_Used, The secret lock transaction failed because the hash has already been used.
    Failure_Lock_Invalid_Duration, Duration lies too far in the future or refers to past. Duration is allowed to lie up to ``N`` blocks in the future.
    Failure_Multisig_Modify_Account_In_Both_Sets, Adding and removing the same account in a single transaction is not possible.
    Failure_Multisig_Modify_Multiple_Deletes, It is not possible to remove multiple cosignatories at once.
    Failure_Multisig_Modify_Redundant_Modifications, The transaction tried to add the same cosignatory more than once.
    Failure_Multisig_Modify_Unknown_Multisig_Account, The multisig has not been created yet and the transaction includes a delete modification.
    Failure_Multisig_Modify_Not_A_Cosigner, The account who signed the transaction is not a cosignatory of the multisig account.
    Failure_Multisig_Modify_Already_A_Cosigner, A cosignatory added is already cosignatory of that multisig account.
    Failure_Multisig_Modify_Min_Setting_Out_Of_Range, Multisig modification parameters are negative and inferior to the number of cosignatories of the multisig.
    Failure_Multisig_Modify_Min_Setting_Larger_Than_Num_Cosignatories, It is not possible to set more required signatures than cosignatories has the multisig.
    Failure_Multisig_Modify_Unsupported_Modification_Type, The modification type is different than add (0) or remove (1).
    Failure_Multisig_Modify_Max_Cosigned_Accounts,  An account cannot be cosignatory of more than `5` multisig accounts.
    Failure_Multisig_Modify_Max_Cosigners, A multisig account cannot have more than `10` cosignatories.
    Failure_Multisig_Modify_Loop, A multisig account cannot be cosignatory of itself. Neither an account can be turned into multisig having as cosignatory another multisig where the account is cosignatory.
    Failure_Multisig_Modify_Max_Multisig_Depth,  The maximum depth of a multilevel multisig account is `3`.
    Failure_Multisig_Operation_Not_Permitted_By_Account, A multisig account cannot be converted into a multisig account again.
    Failure_Namespace_Invalid_Duration, Duration lies too far in the future or refers to past. Duration is allowed to lie up to ``N`` blocks in the future.
    Failure_Mosaic_Invalid_Duration, Duration lies too far in the future or refers to past. Duration is allowed to lie up to ``N`` blocks in the future.
    Failure_Namespace_Invalid_Name, The namespace name is invalid. See namespace.
    Failure_Mosaic_Invalid_Name, The name for the mosaic is invalid. See mosaics.
    Failure_Namespace_Name_Id_Mismatch,
    Failure_Mosaic_Name_Id_Mismatch,
    Failure_Namespace_Expired, Validation failed because the namespace has expired.
    Failure_Mosaic_Expired,  Validation failed because the mosaic has expired.
    Failure_Namespace_Owner_Conflict, The signer of the transaction is not the owner of the namespace.
    Failure_Mosaic_Owner_Conflict, The signer of the transaction is not the owner of the mosaic.
    Failure_Namespace_Invalid_Namespace_Type, The namespace type is different than rootnamespace (0) or subnamesapce (1).
    Failure_Namespace_Root_Name_Reserved, Certain strings are reserved and thus not allowed as namespace parts.
    Failure_Namespace_Too_Deep, Namespaces can have up to ``3`` levels.
    Failure_Namespace_Parent_Unknown, The provided parent namespace is unknown.
    Failure_Namespace_Already_Exists, The namespace already exists.
    Failure_Namespace_Already_Active,
    Failure_Namespace_Eternal_After_Nemesis_Block, The namespace duration is set to 0.
    Failure_Mosaic_Parent_Id_Conflict,
    Failure_Mosaic_Invalid_Property,Transaction payload is invalid as it contains invalid property.
    Failure_Mosaic_Invalid_Flags, Transaction payload is invalid as it contains an invalid flag.
    Failure_Mosaic_Invalid_Divisibility, The specified divisibility is greater than ``6`` or negative.
    Failure_Mosaic_Invalid_Supply_Change_Direction, The supply change direction is different than decrease (0) or increase (1).
    Failure_Mosaic_Invalid_Supply_Change_Amount, The provided supply change amount is not greater than 0.
    Failure_Mosaic_Name_Reserved, Certain strings are reserved and thus not allowed as mosaic parts.
    Failure_Mosaic_Modification_Disallowed,
    Failure_Mosaic_Modification_No_Changes, Mosaic modification transaction did not alter the mosaic as it has the same definition.
    Failure_Mosaic_Supply_Immutable, Validation failed because the mosaic supply is immutable.
    Failure_Mosaic_Supply_Negative, Validation failed because the resulting mosaic supply would be negative.
    Failure_Mosaic_Supply_Exceeded, The provided mosaic supply is not in the range of 0 and 9.000.000.000.
    Failure_Mosaic_Non_Transferable, Only the creator of the mosaic is eligible to be the recipient of a non-transferable mosaic once transferred.
    Failure_Transfer_Message_Too_Large, The message for the transaction exceeds the limit of ``1024`` bytes.
    Failure_Transfer_Out_Of_Order_Mosaics, Mosaics on a transfer transaction should be ordered by id value.
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