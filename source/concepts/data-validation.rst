###############
Data Validation
###############

|codename| uses tree structures to store large data associated with a block that cannot be retrieved directly from the :doc:`block header <block>`.
This allows light clients to verify if an element (e.g. :doc:`transaction <transaction>`, :doc:`receipt statement <receipt>`) exists without demanding the entire ledger history.

***********
Merkle tree
***********

.. mermaid:: ../resources/diagrams/merkle-tree.mmd
    :caption: Diagram of a Binary Merkle Tree
    :align: center

A Merkle tree is a structure of nodes labeled by hashes.
Pictured above is the simplest form of a Merkle tree, the binary Merkle tree.
In particular, |codename| generates two Merkle Trees per block:

* **Transactions Merkle Tree**: Stores all the transactions included in the block.
* **Receipts Merkle Tree**: Stores all the receipt statements linked to a block.

Leaf nodes
==========

A leaf node of the tree contains the **SHA3-256** hash of an element attached to the block.
The leaves are ordered by index as they appear on the block.
A Merkle tree is built by hashing together two hashes, from left to right, repeating the process until a singular hash is created.

.. note:: If there is a layer with an odd number of hashes (and the number is different to 1), the last hash is doubled.

Merkle root
===========

The hash at the bottom of the tree is called the Merkle root.
The Merkle root hashes for receipts and transactions are included in block headers to summarize the data linked.

The following example shows how to verify that a block is composed of all its transactions:

1. Obtain HRoot; in |codename|, this is stored in the block header.
2. Calculate HRoot' creating a Merkle tree with all the transactions within the block in natural order.
3. Compare HRoot and HRoot'.

.. viewsource:: ../resources/examples/typescript/blockchain/CalculatingMerkleRootFromBlockTransactions.ts
    :language: typescript
    :start-after:  /* start block 01 */
    :end-before: /* end block 01 */

Merkle proof
============

A Merkle proof (also known as **Merkle path**) is the minimum number of nodes required to calculate the Merkle root again.

.. mermaid:: ../resources/diagrams/merkle-proof.mmd
    :caption: The nodes highlighted belongs to the Merkle proof of B.
    :align: center

The following steps are taken to validate if an element belongs to a given block:

1. Calculate H(B); the hash of the element you want to validate if exists within a block.

2. Obtain HRoot; in |codename|, this is stored in the block header.

3. Request the merkleProof: H1, H7, H10.

4. Calculate HRoot'. Concatenate H(B) with the first unprocessed item from the merkleProof list as follows:

a) If item.position == left -> proofHash = sha_256(item.hash + proofHash).

b) If item.position == right -> proofHash = sha_256(proofHash+ item.hash).

Repeat 4. for every item in the MerkleProof list.

5. Compare if the HRoot' equals to HRoot.

.. viewsource:: ../resources/examples/typescript/blockchain/ValidatingTransactionWithinBlock.ts
    :language: typescript
    :start-after:  /* start block 01 */
    :end-before: /* end block 01 */
