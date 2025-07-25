########################
Python Coding Guidelines
########################

Most of our python guidelines are enforced by various linters.
We are currently using ``isort``, ``pycodestyle`` and ``pylint`` - oh my!
We encourage you to familiarize yourself with the settings.

Python Version
**************

All of our python code targets **Python 3** exclusively.
We don't offer support for Python 2 at all.

We try to target the oldest supported Python 3 version, which is currently **3.7**.
Exceptions can be granted on a per-project basis to use a newer version if certain features are required.

File / Directory Layout
***********************

When creating a python project, we make use of python modules.
If a project is producing a single executable, the executable code should be in ``__main__.py``.

If a python file contains a single class, the file should be named after the class and be UpperCamelCase.
If a python file contains utility functions, the file should be given a descriptive name and be snake_case.

We expect parallel source and test directory hierarchies.
For example,

::

    root
      - parser  # package name, directory containing source code
        - __init__.py
        - __main__.py  # optional for executables
        Parser.py  # contains class Parser
        - ast
          - __init__.py
          - ast.py  # contains various exports

      - tests  # directory containing tests for source code
        - __init__.py
        - test_Parser.py  # unit tests for parser/Parser.py
        - ast
          - __init__.py
          - test_ast.py  # unit tests for parser/ast/ast.py

Naming
******

Most naming rules are enforced by lint, but for avoidance of doubt:

1. Class names should be UpperCamelCase.
2. Constants should be TITLE_CASE.
3. Everything else should be snake_case.

Private function and member names should be prefixed with a single underscore (_).
Such functions should never be imported by other modules nor accessed outside of the containing class.
