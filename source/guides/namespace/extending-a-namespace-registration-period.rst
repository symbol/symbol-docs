:orphan:

.. post:: 19 Jun, 2019
    :category: Namespace
    :excerpt: 1
    :nocomments:

#########################################
Extending a namespace registration period
#########################################

Extend a :doc:`namespace <../../concepts/namespace>` registration period.

**********
Background
**********

Namespaces are registered for a certain amount of blocks. The owner can **extend the registration period** by sending a :ref:`register namespace transaction <register-namespace-transaction>` with the desired number of additional blocks.

In this guide, we are going to show how to extend the rental period of a namespace. The guide will use the namespace ``foo``, but you should follow along with another :doc:`namespace you have registered <registering-a-namespace>`.

*************
Prerequisites
*************

- Finish :doc:`registering a namespace guide <registering-a-namespace>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>` and at least one namespace

**********************
Getting into some code
**********************

1. Get your namespace information, and inspect the value of the property ``endHeight``.

.. code-block:: bash

    nem2-cli namespace info --name foo

    Namespace: foo
    --------------

    hexadecimal:    82a9d1ac587ec054
    uint:           [ 1484701780, 2192167340 ]
    type:           Root namespace
    owner:          SAKT3C-...-X4ND
    startHeight:    52000
    endHeight:      53000

The information shows that the namespace ``foo`` will become inactive at height ``5300``. The next step is to figure out the current height of the chain, and calculate the number of blocks remaining before your namespace becomes inactive.

2. Check the current blockchain height.

.. code-block:: bash

    nem2-cli blockchain height

    52500

As you can see, the namespace is going to expire in ``500`` blocks (53000-52500).  To avoid losing all the subnamespaces and aliases linked to foo, we are going to extend the namespace duration.

3. Extend the namespace duration for ``1000`` more blocks.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/RegisteringANamespace.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/namespace/RegisteringANamespace.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/bash/namespace/RegisteringANamespace.sh
        :language: bash
        :start-after: #!/bin/sh

.. note:: Use the following formula to convert approximately days to blocks ``duration ≈ numberOfDays * 86400 / blockGenerationTargetTime``. The blockGenerationTargetTime is :properties:`configurable per network <config-network.properties>`.

Once the **RegisterNamespaceTransaction** gets confirmed, double-check that the namespace duration has been extended.

4. Validate that ``endHeight`` has increased by ``1000`` block units.

.. code-block:: bash

    nem2-cli namespace info --name foo

    Namespace: foo
    --------------

    hexadecimal:    82a9d1ac587ec054
    uint:           [ 1484701780, 2192167340 ]
    type:           Root namespace
    owner:          SAKT3C-...-X4ND
    startHeight:    52000
    endHeight:      54000
