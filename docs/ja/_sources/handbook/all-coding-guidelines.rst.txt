########################
Symbol Coding Guidelines
########################

Symbol uses multiple languages in its development, each with its own coding standards.
Nonetheless, we have some common principles we use across all languages.

Regions
*******

In long files, we use ``region`` and ``endregion`` tags to group related code.
This makes these files easier to navigate.

``region`` tags should always be surrounded by blank lines with one exception. If they are the first line of a new indent level, a preceding blank line is not required.
``endregion`` tags should always be surrounded by blank lines.

For example,

.. code-block:: python

    class Something:
        # region load

        ...

        # endregion

        # region save

        ...

        # endregion

.. note:: In C style languages, the tags are opened and closed with ``//`` single line comments instead of ``#``.

Unit Testing
************

We prefer to structure unit tests in the Arrange / Act / Assert form in order to clearly delineate the code under test and the assertions being tested.
Unit tests should contain comments breaking tests into the three sections when they are present.
This is somewhat of a judgement call as some tests will not have all three sections.

For example,

.. code-block:: python

    # Arrange:
    wordlist = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'eta', 'theta', 'iota', 'kappa', 'lambda']
    encoder = WordEncoder(wordlist)

    # Act:
    words = encoder.encode(0)

    # Assert:
    self.assertEqual(['alpha'], words)

For a more thorough discussion, please review this blog post: https://symbolblog.com/developer-guides/how-to-write-good-unit-tests.

Commenting / Documentation
**************************

Include a copyright statement at the top of each file. For new projects, use the default copyright contents.
Copyright and all related rights should be waived for all contributions and via CC0 for all written works.

We document all public methods and classes with at least a sentence or two.
For projects intended to be used as libraries by external developers, like SDKs, it's recommended to document all parameters.
For other projects, it's often enough to just reference the parameters without documenting each in detail.

We believe that code should be for the most part self-documenting so use inline comments sparingly.
Prefer well structured code and good names to inline comments.
For example, Instead of using comments to delineate the steps of a complicated process, we prefer to refactor the code to have a well-named function per step.
Inline comments can be used where the purpose of the code is not immediately clear to the reader.

Naming
******

Avoid unpronounceable names and abbreviations.
Use a spell checker! ``codespell`` is recommended.

1. User defined types (``class``, ``struct``, ``enum``) should be UpperCamelCase and be nouns. [e.g. ``MyEnum``, ``NodeEndpoint``]

2. Function names should contain verbs [e.g. ``DoSomething``, ``TryDoSomething`]

   Functions that fail by throwing exceptions should be optimistically named [e.g. `DoSomething`].

   Functions that fail by returning error codes should be prefixed with `Try` to indicate that something needs to be checked by the caller [e.g. `TryDoSomething`].

3. Boolean properties should generally begin with ``is``, ``has`` or ``should``.

   ``isOpen()`` instead of ``open()``

4. Non-boolean properties should generally avoid ``get`` and ``set`` prefixes:

   ``value(12)`` instead of ``setValue(12)``

   ``value()`` instead of ``getValue()``

Logging
*******

Not all frameworks support the full spectrum of logging levels.
A description of logging levels from most to least severe follows:

- **FATAL** - Critical error that will require the immediate exit of the program.
- **ERROR** - Serious error that the node operator might need to act on but will not terminate the program.
- **WARNING** - Error of which the node operator should be made aware but unlikely requires action.
- **IMPORTANT** - Informational message with additional emphasis.
- **INFO** - Informational message logged by default.
- **DEBUG** - Verbose informational message that might be disabled by default.
- **TRACE** - Low level debugging information that will almost always be disabled.


Vertical Spacing
****************

Generally, there should be a blank line after any de-indentation.
One exception is the closing of braces.

For example,

.. code-block:: python

    if token:
        return token  # next line de-indents so should be blank

    return {
        'token': token  # next line closes the prior brace, so shouldn't be blank
    }

Trim trailing whitespace from all lines.
End every file with a newline.

Horizontal Line Length
**********************

Maximum line length is 140 characters.

Token Spacing
*************

* Always put a space after commas ',', like:

  .. code-block:: c++

     outputAsciiString(buffer, something, elsewhere);

  Not:

  .. code-block:: c++

     outputAsciiString(buffer,something,elsewhere);

* Always put a space after semicolons ';' in for, that is ok:

  .. code-block:: c++

     for (size_t j = 0; j < foo.size() - 1; ++j)

  This one's not:

  .. code-block:: c++

     for (size_t j = 0;j < sections.size();++j)

Operators
---------

In case of operators please put additional space before and after them. This makes code much more readable.

This should be always used in case of binary operators, including ``=``, ``==``, ``!=``, ``&&``, ``||``. So this one's ok:

.. code-block:: c++

    for (size_t j = 0; j < foo.size() - x * 4; ++j)

While this one is not:

.. code-block:: c++

    for (size_t j=0; j<foo.size()-x*4; ++j)

Language Specific Guides
************************

.. toctree::
    :maxdepth: 1

    cpp-coding-guidelines
    javascript-coding-guidelines
    python-coding-guidelines
