############################
JavaScript Coding Guidelines
############################

Most of our javascript guidelines are enforced by various linters.
We are currently using ``eslint``.
We encourage you to familiarize yourself with the settings.

NodeJS Version
**************

We generally strive to support the newest Active LTS NodeJS version.

File / Directory Layout
***********************

If a javascript file contains a single class, the file should be named after the class and be UpperCamelCase.
If a javascript file contains utility functions, the file should be given a descriptive name and be snake_case.

We expect parallel source and test directory hierarchies.
For example,

::

    root
      - parser  # package name, directory containing source code
        Parser.js  # contains class Parser
        - ast
          - ast.js  # contains various exports

      - tests  # directory containing tests for source code
        - Parser_spec.js  # unit tests for parser/Parser.js
        - ast
          - ast_spec.js  # unit tests for parser/ast/ast.js

      - package.json

Naming
******

1. Class names should be UpperCamelCase.
2. Constants should be TITLE_CASE.
3. Everything else should be lowerCamelCase.

Variables
*********

Prefer ``const`` and only use ``let`` on an exception basis.

Modules
*******

Since most of our javascript code has historically been run in NodeJS and was written before NodeJS added first class support for ES6 modules, most existing code is using CommonJS module conventions.

For projects where CommonJS is already used, we recommend continuing to use CommonJS.
For new projects, we recommend using ES6 modules.

Package Manager
***************

We recommend using npm instead of yarn for managing packages.

Polyfills
*********

We generally do not use polyfills and things like Babel for code running in NodeJS.
We have found that transpiling often violates the principle of least surprise, so try to avoid it in most cases.
