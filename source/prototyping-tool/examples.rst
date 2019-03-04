:orphan:

########
Examples
########

******
Basics
******

.. csv-table::
  :header: "Name", "Contributor"
  :delim: ;

  `Create transfer transaction <https://flows.nodered.org/flow/7061090eb3cbf724c80e4f49e03e1b94>`_ ; `@jorisadri <https://github.com/jorisadri>`_
  `Create namespace <https://flows.nodered.org/flow/3d87669bfc71e99f29f5ad82ba2a402e>`_ ; `@jorisadri <https://github.com/jorisadri>`_
  `Create mosaic <https://flows.nodered.org/flow/04a643b66a8e0daa1e12fa61e3b36b7c>`_ ; `@jorisadri <https://github.com/jorisadri>`_
  `Create multisig account <https://flows.nodered.org/flow/ba75b67684b2a1bc2af849cc70a7c4b5>`_ ; `@jorisadri <https://github.com/jorisadri>`_
  `Create aggregate transaction <https://flows.nodered.org/flow/50aa98fd20e62ee1af8507df8634f840>`_ ; `@jorisadri <https://github.com/jorisadri>`_
  `Cosign aggregate transaction <https://flows.nodered.org/flow/522d512fb0b5e0ad16a65a8c909fd95a>`_ ; `@jorisadri <https://github.com/jorisadri>`_


************
Applications
************

.. csv-table::
  :header: "Name", "Contributor"
  :delim: ;

  `Simple chat <https://flows.nodered.org/flow/e8bfbab9d73e0f35ed6b4c9a9f7e4958>`_ ;  `@planethouki <https://github.com/planethouki>`_

****************
Importing a flow
****************

After opening an example, copy the JSON you will find at the bottom of the site.

In Node-RED, select ``Import > Clipboard from the menu`` (Ctrl-E). Paste the JSON flow and click Import button.

************
Contributing
************

We love to receiving contributions from our community — you! Follow these guidelines to get your flow included in this documentation.

The first step is to export the flow you have created. In Node-RED, select the flow you want to export. Open ``Export > Clipboard`` from the menu (Ctrl-E) and copy the JSON from the dialogue.

We are using |Node-RED-flows-repository| to share our flows.

1. Click ``Add flow``.
2. Give your flow a short, descriptive title and describe what the flow does and how it is used.
3. Paste the JSON flow you want to share.
4. Add the tag ``NEM2``.

After a while, your flow and your GitHub username will be included in this page.


.. |Node-RED-flows-repository| raw:: html

    <a href="https://flows.nodered.org/?term=nem2&type=flow&num_pages=1" target="_blank">Node RED flows repository</a>
