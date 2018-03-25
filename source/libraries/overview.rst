##########################
Extending NEM capabilities
##########################

Adding more features that are not 100% related with the NIS2-API to the SDK could lead to a slow release circle and being more difficult to maintain. Instead, we opt for extending the SDK via standalone libraries. Apostille is a clear example as of a standalone library.

A standalone library uses NEM2-SDK, but it evolves as an independent library, with its development team, release cycles and roadmap.

There are two major standalone library types, NIP and non-NIP.

***********
NIP Library
***********

A NIP library is a NIP that was successfully accepted in the |nip_repo|. It has advantages over non-NIP libraries.

- Accepted specification
- At least one implementation that successfully passes the code review to ensure the code quality (security, performance, testing, ...)
- Projects using NIP libraries are compatible with third-party projects that implement/uses the same NIP Library.

***************
non-NIP Library
***************

A non-NIP library is a library that adds more features to NEM but does not imply multiple components, or is not accepted as NIP.

Non-NIP libraries could become NIP Library.

.. |nip_repo| raw:: html

   <a href="https://github.com/nemtech/NIP" target="_blank">NIP Repository</a>