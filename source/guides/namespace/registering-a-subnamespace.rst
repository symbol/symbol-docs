:orphan:

.. post:: 18 Aug, 2018
    :category: Namespace
    :excerpt: 1
    :nocomments:

#######################
Creating a subnamespace
#######################

Create a :doc:`subnamespace <../../concepts/namespace>` following this guide.

**********
Background
**********

Once you have a registered root namespace, you can create up to ``3`` levels of subnamespaces.

Subnamespaces do not have a renting duration. They have the same one as their parent namespace.

It is possible to create multiple subnamespaces with the same name in different namespaces (example: ``foo.bar`` and ``foo2.bar``).

*************
Prerequisites
*************

- Finish :doc:`registering a namespace guide <registering-a-namespace>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>` and at least one namespace

**********************
Getting into some code
**********************

The first step is to choose a name for your subnamespace.

In this example, we have created a subnamespace called ``bar`` under ``foo`` namespace.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/RegisteringASubnamespace.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/namespace/RegisteringASubnamespace.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/bash/namespace/RegisteringASubnamespace.sh
        :language: bash
        :start-after: #!/bin/sh

************
What's next?
************

When the transaction is confirmed, link a namespace with a :doc:`mosaic <../namespace/link-a-namespace-to-a-mosaic>` or :doc:`address <../namespace/link-a-namespace-to-an-address>`.
