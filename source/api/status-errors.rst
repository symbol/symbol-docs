#############
Status Errors
#############

This section describes the error messages that can be returned via status channel after announcing a transaction.

.. note:: Configuration parameters are `editable <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_. Public network configuration may differ.

.. csv-table::
    :header: "Error code", "Description"

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
    Failure_Aggregate_Too_Many_Transactions, Validation failed because aggregate has too many transactions. An aggregate transaction can contain up to ``1000`` inner transactions.
    Failure_Aggregate_No_Transactions, Validation failed because aggregate does not have any transactions.
    Failure_Aggregate_Too_Many_Cosignatures, Validation failed because aggregate has too many cosignatures. The maximum number of cosignatories allowed is ``15``.
    Failure_Aggregate_Redundant_Cosignatures, Validation failed because redundant cosignatures are present.
    Failure_Aggregate_Ineligible_Cosigners, Validation failed because at least one cosigner is ineligible.
    Failure_Aggregate_Missing_Cosigners, Validation failed because at least one required cosigner is missing. The tranaction was announced as complete but had missing cosignatures.
    Failure_Lock_Invalid_Hash_Algorithm, Validation failed because hash algorithm for lock type secret is invalid. See the :doc:`available algorithms <../concepts/cross-chain-swaps>` list.
    Failure_Lock_Invalid_Mosaic_Id, Validation failed because lock does not allow the specified mosaic. The only mosaic allowed is ``xem``.
    Failure_Lock_Invalid_Mosaic_Amount, Validation failed because lock does not allow the specified amount. The minimum amount is ``10``.
    Failure_Lock_Hash_Exists, Validation failed because hash is already present in cache.
    Failure_Lock_Hash_Does_Not_Exist, Validation failed because hash is not present in cache.
    Failure_Lock_Missing_Secret_Padding, Validation failed because hash is not 0 padded.
    Failure_Lock_Hash_Not_Implemented, Validation failed because hash is not implemented yet.
    Failure_Lock_Proof_Size_Out_Of_Bounds,  Validation failed because proof is too small or too large. It should be between ``10 and 1000 bytes``.
    Failure_Lock_Secret_Mismatch, Validation failed because secret does not match proof.
    Failure_Lock_Unknown_Secret, Validation failed because secret is unknown.
    Failure_Lock_Inactive_Hash, Validation failed because hash is inactive.
    Failure_Lock_Inactive_Secret, Validation failed because secret is inactive.
    Failure_Lock_Hash_Algorithm_Mismatch, Validation failed because hash algorithm does not match.
    Failure_Lock_Hash_Already_Used, Validation failed because hash has already been used.
    Failure_Lock_Secret_Already_Used, Validation failed because secret has already been used.
    Failure_Lock_Invalid_Duration, Validation failed because duration is too long.
    Failure_Multisig_Modify_Account_In_Both_Sets, Validation failed because account is specified to be both added and removed.
    Failure_Multisig_Modify_Multiple_Deletes, Validation failed because multiple removals are present.
    Failure_Multisig_Modify_Redundant_Modifications, Validation failed because redundant modifications are present.
    Failure_Multisig_Modify_Unknown_Multisig_Account, Validation failed because account is not in multisig cache.
    Failure_Multisig_Modify_Not_A_Cosigner, Validation failed because account to be removed is not present.
    Failure_Multisig_Modify_Already_A_Cosigner, Validation failed because account to be added is already a cosignatory.
    Failure_Multisig_Modify_Min_Setting_Out_Of_Range, Validation failed because new minimum settings are out of range.
    Failure_Multisig_Modify_Min_Setting_Larger_Than_Num_Cosignatories, Validation failed because min settings are larger than number of cosignatories.
    Failure_Multisig_Modify_Unsupported_Modification_Type, Validation failed because the modification type is unsupported: add (0) and remove (1).
    Failure_Multisig_Modify_Max_Cosigned_Accounts, Validation failed because the cosignatory already cosigns the maximum number of accounts. An account cannot be cosignatory of more than ``5`` multisig accounts.
    Failure_Multisig_Modify_Max_Cosigners, Validation failed because the multisig account already has the maximum number of cosignatories. A multisig account cannot have more than ``10`` cosignatories.
    Failure_Multisig_Modify_Loop, Validation failed because a multisig loop is created. A multisig account cannot be cosignatory of itself. Neither an account can be turned into multisig having as cosignatory another multisig where the account is cosignatory.
    Failure_Multisig_Modify_Max_Multisig_Depth, Validation failed because the max multisig depth is exceeded. The maximum depth of a multilevel multisig account is ``3``.
    Failure_Multisig_Operation_Not_Permitted_By_Account, Validation failed because an operation is not permitted by a multisig account. A multisig account cannot be converted into a multisig account again.
    Failure_Mosaic_Invalid_Name, Validation failed because the name is invalid. The mosaic name may have a maximum length of ``64`` characters. Allowed characters are `a-to-z`; `0-to-9` and the following special characters: \`_-
    Failure_Namespace_Invalid_Duration, Validation failed because the duration has an invalid value. Duration is allowed to lie up to ``365`` days.
    Failure_Mosaic_Invalid_Duration, Validation failed because the name is invalid. Duration is allowed to lie up to ``365`` days.
    Failure_Mosaic_Name_Id_Mismatch, Validation failed because the name and id don't match.
    Failure_Namespace_Expired, Validation failed because the parent is expired.
    Failure_Mosaic_Owner_Conflict, Validation failed because the parent owner conflicts with the child owner.
    Failure_Namespace_Invalid_Namespace_Type, Validation failed because the namespace type is invalid.
    Failure_Namespace_Root_Name_Reserved, Validation failed because the root namespace has a `reserved name <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties#L60>`_.
    Failure_Namespace_Too_Deep, Validation failed because the resulting namespace would exceed the maximum allowed namespace depth. Namespaces can have up to ``3`` nested levels.
    Failure_Namespace_Parent_Unknown, Validation failed because the namespace parent is unknown.
    Failure_Namespace_Already_Exists, Validation failed because the namespace already exists.
    Failure_Namespace_Already_Active, Validation failed because the namespace is already active.
    Failure_Namespace_Eternal_After_Nemesis_Block, Validation failed because an eternal namespace was received after the nemesis block.
    Failure_Namespace_Max_Children_Exceeded, Validation failed because the maximum number of children for a root namespace was exceeded.
    Failure_Mosaic_Parent_Id_Conflict, Validation failed because the existing parent id does not match the supplied parent id.
    Failure_Mosaic_Invalid_Property, Validation failed because a mosaic property is invalid.
    Failure_Mosaic_Invalid_Flags, Validation failed because the mosaic flags are invalid.
    Failure_Mosaic_Invalid_Divisibility, Validation failed because the mosaic divisibility is invalid. It is greater than ``6`` or negative.
    Failure_Mosaic_Invalid_Supply_Change_Direction, Validation failed because the mosaic supply change direction is invalid: decrease (0) and  increase (1).
    Failure_Mosaic_Invalid_Supply_Change_Amount, Validation failed because the mosaic supply change amount is invalid.
    Failure_Mosaic_Name_Reserved, Validation failed because the mosaic has a reserved name.
    Failure_Mosaic_Modification_Disallowed, Validation failed because mosaic modification is not allowed.
    Failure_Mosaic_Modification_No_Changes, Validation failed because mosaic modification would not result in any changes.
    Failure_Mosaic_Supply_Immutable, Validation failed because the mosaic supply is immutable.
    Failure_Mosaic_Supply_Negative, Validation failed because the resulting mosaic supply is negative.
    Failure_Mosaic_Supply_Exceeded, Validation failed because the resulting mosaic supply exceeds the maximum allowed value. The range is between 0 and ``9.000.000.000``.
    Failure_Mosaic_Non_Transferable, Validation failed because the mosaic is not transferable.
    Failure_Mosaic_Max_Mosaics_Exceeded, Validation failed because the credit of the mosaic would exceed the maximum of different mosaics an account is allowed to own.
    Failure_Transfer_Message_Too_Large, The message for the transaction exceeds the limit of ``1024`` bytes.
    Failure_Transfer_Out_Of_Order_Mosaics, Mosaics on a transfer transaction should be ordered by id value.
    Failure_Chain_Unlinked, Validation failed because a block was received that did not link with the existing chain.
    Failure_Chain_Block_Not_Hit, Validation failed because a block was received that is not a hit.
    Failure_Consumer_Empty_Input, Validation failed because the consumer input is empty.
    Failure_Consumer_Block_Transactions_Hash_Mismatch, Validation failed because the block transactions hash does not match the calculated value.
    Failure_Consumer_Hash_In_Recency_Cache, Validation failed because an entity hash is present in the recency cache.
    Failure_Consumer_Remote_Chain_Too_Many_Blocks, Validation failed because the chain part has too many blocks.
    Failure_Consumer_Remote_Chain_Improper_Link, Validation failed because the chain is internally improperly linked.
    Failure_Consumer_Remote_Chain_Duplicate_Transactions, Validation failed because the chain part contains duplicate transactions.
    Failure_Consumer_Remote_Chain_Unlinked, Validation failed because the chain part does not link to the current chain.
    Failure_Consumer_Remote_Chain_Mismatched_Difficulties, Validation failed because the remote chain difficulties do not match the calculated difficulties.
    Failure_Consumer_Remote_Chain_Score_Not_Better, Validation failed because the remote chain score is not better.
    Failure_Consumer_Remote_Chain_Too_Far_Behind, Validation failed because the remote chain is too far behind.
    Failure_Extension_Partial_Transaction_Cache_Prune, Validation failed because the partial transaction was pruned from the temporal cache.
    Failure_Extension_Partial_Transaction_Dependency_Removed, Validation failed because the partial transaction was pruned from the temporal cache due to its dependency being removed.