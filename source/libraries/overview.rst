##########################
Extending NEM capabilities
##########################

Aside from creating a heavy and full-featured :doc:`SDK<../sdk/overview>`, we are developing a robust and lightweight one. Thanks to this SDK, different libraries can be developed for each standard, on top of NEM2-SDK, allowing higher and faster growth for NEM applications.

Developers could opt to create a standalone library to add more features into NEM. However, to become an accepted library, it should be proposed as a |NIP|.

******************
Official Libraries
******************

The reason behind the |NIP| is to ensure that the new library is reviewed, tested and shared among NEM developers.

* Accepted specification
* At least one implementation that successfully passes the code review.
* Compatible with third-party projects that implement/uses the same NIP Library.

.. csv-table:: Official Libraries
   :header: "Name", "Description", "Active Developers"
   :delim: ;

   `Camel <https://github.com/nemtech/nem2-camel>`_ ; A component to turn the asynchronous transaction announcement into synchronous.; NEM Foundation


*******************
Community Libraries
*******************

Do you need to create a NIP to create a library? No, you don’t. In fact, we suggest not submitting a NIP until you build a library that improves the NEM blockchain and the different projects that use it. Since the library can be changed multiple times, developers should spend more time experimenting and learning, creating a specification later on.

Add a new library to this page by clicking the *"Edit on Github"* button at the top-right part of the screen.

.. csv-table:: Community Libraries
   :header: "Name", "Description", "Active Developers"
   :delim: ;

   `Apostille library <https://github.com/luxtagofficial/Apostille-library>`_ ; Blockchain notarization and timestamping with transferable, updatable, branded, and conjointly owned notarizations.; `@luxtagofficial <https://github.com/luxtagofficial/>`_
   `Asset identifier library <https://github.com/aleixmorgadas/nem2-asset-identifier>`_ ; Work with unique and updatable assets.;`@aleixmorgadas <https://github.com/aleixmorgadas/>`_

.. |NIP| raw:: html

   <a href="https://github.com/nemtech/NIP" target="_blank">NEM Improvement Proposal</a>