:orphan:

.. post:: 18 Aug, 2018
    :category: Namespace
    :excerpt: 1
    :nocomments:

#######################
Creating a subnamespace
#######################

Create subnamespaces to organize your assets.

**********
Background
**********

Once you have a registered root :doc:`namespace <../../concepts/namespace>`, you can create up to ``3`` levels of subnamespaces to **organize your assets**.

Unlike root namespaces, the subnamespaces do not have a **renting duration**. They share the duration with its parent namespace.

It is possible to create multiple subnamespaces with the same name in different namespaces (example: ``foo.bar`` and ``foo2.bar``), but the combination rootnamespace + subnamespace must remain unique.

*************
Prerequisites
*************

- Finish :doc:`registering a namespace guide <registering-a-namespace>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>` and at least one namespace

**********************
Getting into some code
**********************

This code example creates a subnamespace called ``bar`` under the namespace ``foo``.

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

When the transaction is confirmed, link the subnamespace with a :doc:`mosaic <../namespace/link-a-namespace-to-a-mosaic>` or :doc:`address <../namespace/link-a-namespace-to-an-address>`.
