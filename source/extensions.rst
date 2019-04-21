##########
Extensions
##########

Developers could opt to create extensions to add more features into NEM. However, to become an accepted extension, it should be proposed as a |NIP|.

The reason behind the |NIP| is to ensure that the new library is reviewed, tested and shared among NEM developers.

* Accepted specification
* At least one implementation that successfully passes the code review.
* Compatible with third-party projects that implement/uses the same NIP Library.

********************
Supported extensions
********************

.. csv-table::
   :header: "Name", "Description"
   :delim: ;

   `catapult service bootstrap <https://github.com/nemtech/catapult-service-bootstrap>`_ ; Starter project to get developers up and running with a running Catapult Service.
   `nem2-camel <https://github.com/nemtech/nem2-camel>`_ ; A component to turn the asynchronous transaction announcement into synchronous.

********************
Community extensions
********************

.. csv-table::
   :header: "Name", "Description"
   :delim: ;

   `Apostille library <https://github.com/luxtagofficial/Apostille-library>`_ ; Transferable, updatable, branded, and conjointly owned blockchain notarizations.

Do you need to create a NIP to create an extension? No, you don’t. In fact, we suggest not submitting a NIP until you build a extension that improves the NEM blockchain and the different projects that use it. Since the extension can be changed multiple times, developers should spend more time experimenting and learning, creating a specification later on.

Add a new extension to this page by clicking the *"Edit on Github"* button at the top-right part of the screen.

.. |NIP| raw:: html

   <a href="https://github.com/nemtech/NIP" target="_blank">NEM Improvement Proposal</a>
