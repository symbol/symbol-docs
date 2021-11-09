#####################
C++ coding guidelines
#####################

Naming
******

Naming is somewhat based on `Java Naming Convention <http://www.oracle.com/technetwork/java/codeconventions-135099.html>`__, the difference is in constants, mainly due to C Preprocessor.

1. Filenames: should match name of a class or namespace

   ``NodeEndpoint.h`` - if there are more classes in file, filename should match the most important

2. Name of: structs, classes, enums (all non-basic types)

   ``MyEnum``, ``NodeEndpoint`` - should be nouns

3. Static and free function names

   'DoSomething' - should contain verb

4. Member function names

   ``bootKey`` - for accessors and modifiers (no get or set prefix)

   ``doSomething`` - for other functions should contain verb

5. Global, local and class member

   **constants**, enum fields ``State_Data_Continue`` - words capitalized, delimited with an underline '_'

6. Macros, #defines

   ``INVALID_SIZE_T``, ``MAX_ULONGLONG`` - word in upper-case, delimited with underline '_'

7. Variables, fields - same as methods

   ``bytesSend``, ``headlessCamelCase``

8. Prefix class members/fields with an ``m_`` (I actually haven't been following that rule for a long time, but it makes reviewing the code much faster - especially when looking at commits, not within an IDE)

9. Prefix pointers with a "p" both smart and raw

10. Struct fields should be UpperCamelCase

11. Do not start any variables/function/method names with an underscore

12. If you pass size of an array somewhere, always give the size variable a name, that suggest what it's actually is:

    1. So if you actually expect **number of elements**, use name like ``size_t foobarCount`` (eventually ``foobarLength``)

    2. If you want number of **bytes** use ``size_t foobarSize``

Includes
********

1. Always use "/" in includes and NEVER "\\", (C standard WG14/N1256 point 6.4.7, C++ standard ISO/IEC 14882:2003 point 2.8, C++ standard ISO/IEC 14882:2011 (from working draft N3225) point 2.9)

2. Number of include files in header file should be minimal, that is: **ONLY**, that what's actually needed in ``.h``

   What's needed in ``.cpp`` file should only be included in ``.cpp``.

3. Order of includes (top-down)

   1. OWN (local ones)

   2. Project common

   3. Shared/common ``<core/...>``

   4. System/STL

Nice link for further reading: http://www.topology.org/linux/include.html

if/for
******

* Do not use such a construct when ``for`` doesn't have a body

  .. code-block:: c++

     for (a; b; c);

  Instead use

  .. code-block:: c++

     for (a; b; c) {}

This leaves clear intention of what you had in mind.

Operators
*********

* In case of operators please put additional space before and after them. This makes code much more readable.

  This should be always used in case of ``=``, ``==``, ``!=``, ``&&``, ``||``. So this one's ok:

  .. code-block:: c++

     for (size_t j = 0; j < foo.size() - x * 4; ++j)

  While this one is not:

  .. code-block:: c++

     for (size_t j=0; j<foo.size()-x*4; ++j)

Spaces
******

* Always put a space after semicolon ';' in for, that is ok:

  .. code-block:: c++

     for (size_t j = 0; j < foo.size() - 1; ++j)

  This one's not:

  .. code-block:: c++

     for (size_t j = 0;j < sections.size();++j)

* Always put a space after coma ',' in function args, like:

  .. code-block:: c++

     outputAsciiString(buffer, something, elsewhere);

  Not:

  .. code-block:: c++

     outputAsciiString(buffer,something,elsewhere);

* Do NOT leave whitespaces at line-endings (here's a regex for "Quick Replace" in visual studio: ``[ ]+$``)

Types
*****

* ``size_t`` should be used whenever dealing with data size (in many cases ``auto`` is fine too):

  * The result of ``sizeof()`` is ``size_t``

  * Difference between pointer types is always ``size_t``

  * Index of an element in an array should be of ``size_t`` type

  * The result of ``strlen()`` should usually be ``size_t``

  * Most STL containers uses ``size_t`` as default size, count, length and index type

* Please use types defined in **stdint.h** (``uint8_t``, ``uint16_t``, ``uint32_t``, etc.)

Disputable:

* Please avoid using **signed** types and **signed** math unless it's really necessary and reasonable.

Classes, Methods and Members
****************************

* Classes should be named using ``CamelCase`` (first letter capital)

* Class order (disputable):

  1. Private constants (as they are usually used early)

  2. Public constants

  3. Methods (if possible public, protected, private)

  4. Fields

     1. Public members (should probably be used only for POD types)

     2. Protected members

     3. Private members

Arguments
*********

* Avoid passing arguments as pointers (reference is always preferred) unless it's really intended and needed.

* Use ``const`` references or ``const`` types when possible.

Special Names
*************

* BlockChain not Blockchain

* Timestamp not TimeStamp

* Filesystem not FileSystem

* ``configuration`` for class names

* ``config`` for variable names

Style
*****

Indents
-------

1. Single indent for block opening

2. Continuations use double indent

3. Initializer list, and ctors/function/method arguments, have **double** indent

Example 1.

.. code-block:: c++

   for (auto&& pEntity : entities) {
       singleEntityVector[0] = pEntity;
       auto result = dispatcher.dispatch(m_config.ValidationPolicy, singleEntityVector);
       m_config.pObserver->notify(*pEntity, observerContext);
   }

Example 2.

.. code-block:: c++

   CATAPULT_LOG(debug) << "comparing chain scores: " << localScore << " (local) vs "
       << remoteScore << " (remote)";
   return pState
       && pState->ImportanceInfo.Importance > Importance(0)
       && pState->Balances.get(Xem_Id) >= minHarvestingBalance;


Example 3.


.. code-block:: c++

   // mind the double indent for method arguments
   static thread::future<std::unique_ptr<model::Block>> BlockAt(
           Height height,
           const io::BlockStorageView& storage) {
       if (Height(0) == height || storage.chainHeight() < height) {
           auto exception = CreateHeightException("unable to get block at height", height);
           return thread::make_exceptional_future<std::unique_ptr<model::Block>>(exception);
       }

       return thread::make_ready_future(storage.loadBlock(height));
   }


Bracing style
-------------

empty body, short

.. code-block:: c++

   Foo() : m_value(0)
   {}

empty body, long

.. code-block:: c++

   // two indents
   Foo(very arguments, much wow)
           : m_value(0)
           , m_xman(professor)
   {}

body, short

.. code-block:: c++

   Foo() : m_value(0) {
       // body
   }

body, long

.. code-block:: c++

   // two indents
   Foo(very arguments, much wow)
           : m_value(0)
           , m_xman(professor) {
       // body
   }

