##########################
Extending NEM capabilities
##########################

Aside from creating a heavy and full-featured :doc:`SDK<../sdk/overview>` , we are also developing a robust and lightweight SDK. Thanks to this SDK, different libraries can be developed for each standard on top of NEM2-SDK allowing higher and faster growth for NEM applications.

Developers could opt to create a standalone library to add more features to NEM. However, to become an accepted library, it should be proposed as a |NIP|.

***********
NIP Library
***********

The reason behind the NIP Repository is to ensure the new library to be reviewed, tested and shared among NEM developers. It allows a higher adoption compared to non-NIP libraries.

* Accepted specification
* At least one implementation that successfully passes the code review to ensure the code quality (security, performance, testing, ...)
* Projects using NIP libraries are compatible with third-party projects that implement/uses the same NIP Library.

***************
non-NIP Library
***************

Do you need to create a NIP to create a library? No, you don’t. In fact, we suggest to not submit a NIP until you build a library that improves the NEM blockchain and the different projects that use it. Since the library can be changed multiple times, developers should spend more time experimenting and learning, creating a specification later on.

Non-NIP libraries could become NIP Library.


.. |NIP| raw:: html

   <a href="https://github.com/nemtech/NIP" target="_blank">NIP</a>