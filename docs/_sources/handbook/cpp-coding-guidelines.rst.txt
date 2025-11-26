#####################
C++ Coding Guidelines
#####################

Best Practices
**************

1. **NEVER** include ``using namespace`` statements in header files.
2. **NEVER** include a using statement for the standard namespace (``std``). Instead, always qualify all types from it.
3. **USE** a constexpr expression instead of a MACRO whenever possible.
4. **USE** ``pragma once`` instead of header guards.
5. **USE** ``enum class`` instead of ``enum`` whenever possible.
6. **ALWAYS** declare variables as close to first usage as possible - this isn't C!
7. **ALWAYS** pass non-trivial parameters by reference.
8. **PREFER** a composite return value (e.g. ``pair``, POD ``struct``) to multiple out parameters.
9. **PREFER** ``auto`` whenever possible, but use as many type modifiers (``const``, ``volatile``, ``&``, ``*``) as possible.
10. **AVOID** `volatile` unless there is a very strong justification (there usually isn't).
11. **ALWAYS** use ``using`` statements instead of ``typedef`` for aliases.
12. **USE** function qualifiers (``override``, ``final``, ``const``) liberally.
13. **PREFER** an enumeration to multiple booleans.
14. **USE** anonymous namespaces liberally in cpp files and export the minimum number of names from each compilation object.
15. **NEVER** use static free functions.

Numeric Types
-------------

1. **USE** ``size_t`` whenever dealing with data sizes.
2. **USE** types defined in **stdint.h** (``uint8_t``, ``uint16_t``, ``uint32_t``, etc.)
3. **AVOID** using signed types unless it's really necessary and reasonable.
4. **AVOID** using floating point arithmetic, especially in any part of consensus.

File / Directory Layout
***********************

If a cpp/h file contains a single class, the file should be named after the class and be UpperCamelCase.
If a cpp/h file contains utility functions, the file should be given a descriptive name and be UpperCamelCase.

We expect parallel source and test directory hierarchies.
For example,

::

    root
    - parser  # package name, directory containing source code
      Parser.h/cpp  # contains class Parser
      - ast
        - Ast.h/cpp  # contains various exports

    - tests  # directory containing tests for source code
      - ParserTests.cpp  # unit tests for parser/Parser.h/cpp
      - ast
        - AstTests.cpp  # unit tests for parser/ast/Ast.h/cpp

Naming
******

1. Static and free functions should be UpperCamelCase

2. Member function names should be lowerCamelCase

3. Constants (global or local) should be Upper_Camel_Case.

4. #defines should be TITLE_CASE

5. Local variables and function parameters should be lowerCamelCase

6. Struct members should be UpperCamelCase


Prefixes
--------

1. Prefix class instance members with ``m_``

2. Prefix class static members with ``s_``

3. Prefix globals with ``g_``

4. Prefix all pointers (both smart and raw) with ``p``

5. Never prefix anything with a single underscore (``_``).


Arrays
-------

If you pass size of an array somewhere, always give the size variable a name, that suggests what it actually is:

1. So if you actually expect **number of elements**, use name with ``Count`` postfix [e.g. ``nodeCount``]

2. If you want number of **bytes** use name like ``size_t nameSize``

Includes
********

1. Always use "/" in includes and NEVER "\\", (C standard WG14/N1256 point 6.4.7, C++ standard ISO/IEC 14882:2003 point 2.8, C++ standard ISO/IEC 14882:2011 (from working draft N3225) point 2.9)

2. Try to include the minimal number of files required for a successful build. Corollary: don't include anything you don't need.

3. Order includes from most specific to most general.

Style
*****

Classes, Methods and Members
----------------------------

Recommended class order:

1. Private constants (as they are usually used early)

2. Public constants

3. Methods

   1. Constructors

   2. Instance methods

   3. Static methods

4. Fields

   1. Public members (should probably be used only for POD types)

   2. Protected members

   3. Private members

Use an access modifier (``public:``, ``private:``) for each section even if the modifier is redundant.

Special Names
-------------

* Blockchain not BlockChain

* Filename not FileName

* Filesystem not FileSystem

* NotEmpty not NonEmpty

* Nonzero not NonZero or Notzero or NotZero

* Roundtrip not RoundTrip

* SubCache not Subcache

* ThreadPool not Threadpool

* Timestamp not TimeStamp

* ``Configuration`` for class names

* ``config`` for variable names

Indentation
-----------

single indent for block opening

.. code-block:: c++

    for (auto&& pEntity : entities) {
        singleEntityVector[0] = pEntity;
        auto result = dispatcher.dispatch(m_config.ValidationPolicy, singleEntityVector);
        m_config.pObserver->notify(*pEntity, observerContext);
    }

continuations use **double** indent

.. code-block:: c++

    CATAPULT_LOG(debug) << "comparing chain scores: " << localScore << " (local) vs "
            << remoteScore << " (remote)";
    return pState
            && pState->ImportanceInfo.Importance > Importance(0)
            && pState->Balances.get(Xem_Id) >= minHarvestingBalance;

initializer list, and ctors/function/method arguments, have **double** indent

.. code-block:: c++

    // mind the double indent for method arguments
    thread::future<std::unique_ptr<model::Block>> BlockAt(
            Height height,
            const io::BlockStorageView& storage) {
        if (Height(0) == height || storage.chainHeight() < height) {
            auto exception = CreateHeightException("unable to get block at height", height);
            return thread::make_exceptional_future<std::unique_ptr<model::Block>>(exception);
        }

        return thread::make_ready_future(storage.loadBlock(height));
    }

Bracing
-------

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

Empty Statements
----------------

* Do not use such a construct when ``for`` doesn't have a body

  .. code-block:: c++

     for (a; b; c);

  Instead use

  .. code-block:: c++

     for (a; b; c)
     {}

  This leaves clear intention of what you had in mind.
