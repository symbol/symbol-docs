#################
Commit discipline
#################

Summary
*******

OK, so you’ve finished your work and you are naturally eager to git push it and start working on something else, new and exciting. I know the feeling, we have all been there.

Well, I have news for you: The **truly excellent developer** grits their teeth and walks the extra mile, spending the time to write a **good commit message** for all of posterity to see.

Just like a tree is harder **to implement** than a list, but provides orders of magnitude better **runtime performance**, writing good commit messages takes **you** more time, but saves time for **everybody else** reading your code in the future (including your future self).

There is a **net gain** for everybody here. Just consider what happens when **you** need to review **somebody else**'s code and it has been tagged with proper git messages. Cool, isn’t it? A game-changer even?

We strive to be **truly excellent developers** here, so grit your teeth and spend the time to write a **good commit message** after every completed job. This guide explains you how to do it.

.. note::

    Proper commit messages are **extremely important** as they simplify **maintainability**:

    * They ease code **understanding** and **debugging** by providing the **reasons** behind each source code line.

    * They allow **automated** CHANGELOG and version generation.

.. caution::

    The following commit message **format** and **content** are **mandatory**, and will be **enforced by server hooks** in the future (`symbol-infra/issues/17 <https://github.com/symbol/symbol-infra/issues/17>`__).

Commit Message Content
**********************

This is the most important bit of this document:

**A good commit message explains the reason behind the change**, this is, the **why** of the commit.

**What** the commit does, and **how** it does it, is already shown in the actual commit. The good commit message includes the missing information, like:

* **The reason behind the change**: Why was this needed?

* **The need for the change**: How were things working before, what was wrong with that, and how will things work after this commit?

* **The summary of the change**, when it is too long to be easily understood by reading the code. Feel free to add bullet lists or diagrams when required to understand a big code drop.

* **Pointers to extra information**: No detail should be omitted. Include links to every bit of information that helped you produce this commit, so other developers can retrace your steps if required. This means links to Jira or GitHub issues, Wikipedia articles or Stack Overflow discussions.

Commit Message Format
*********************

Additionally, if the commit message adheres to a strict format, it can enable some interesting automation.

We have decided to follow the `Conventional Commits <https://www.conventionalcommits.org/en/v1.0.0/>`__ specification:

  The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with `SemVer <http://semver.org/>`__, by describing the features, fixes, and breaking changes made in commit messages.

The benefits are:

* **Easier communication**, as the nature of changes is clear.

* CHANGELOGs are **generated automatically**.

* Versions are **bumped automatically** based on the types of commits landed.

In summary, all commits must have this format:

.. code-block:: text

    <type>[optional scope]: <description>

    <body>

    [optional footer(s)]

Type
----

Valid types (based on `the Angular convention <https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md>`__) are:

.. csv-table::
    :delim: ;
    :header: Type, Meaning
    :widths: 20 80

    ``build``    ; Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
    ``ci``       ; Changes to the CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs).
    ``docs``     ; Documentation only changes.
    ``feat``     ; A new feature. **This will change the** ``MINOR`` **version**.
    ``fix``      ; Patches a bug in the codebase. **This will change the** ``PATCH`` **version**.
    ``perf``     ; A code change that improves performance.
    ``refactor`` ; No functional changes, just moving code around for maintainability.
    ``style``    ; Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, …).
    ``test``     ; Adding missing tests or correcting existing ones.

The type can be followed by an exclamation mark ``!`` indicating that this is an **API BREAKING CHANGE** (see the footer section below).

Scope
-----

A scope may be provided after a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., ``feat(parser): add ability to parse arrays``.

Footer
------

One or more footers may be provided one blank line after the body. Each footer must consist of a word token, followed by either a ``:<space>`` or ``<space>#`` separator, followed by a string value (this is inspired by the `git trailer convention <https://git-scm.com/docs/git-interpret-trailers>`__).

``BREAKING CHANGE`` is a special token that **will change the** ``MAJOR`` **version**. This can also be indicated with a ``!`` after the type or scope.

Examples:

* ``Reviewed-by: John Doe <john.doe@nem.software>``
* ``Co-authored-by: John Doe <john.doe@nem.software>``
* ``Fixes #1024``
* ``BREAKING CHANGE: environment variables now take precedence over config files``

Description
-----------

It follows the colon and space after the type/scope prefix. The description is a single-line summary of the code changes, e.g., ``fix: array parsing issue when multiple spaces were contained in string``.

Body
----

This goes into the ``<body>`` of the commit message and it should try to address **all the points** in the ``Commit Message Content`` section above.

The body can be omitted **only** when the commit is **short**, its description is **self-explanatory** and links to further information (like issue numbers, if any) are already given in the **footer**.

**Skipping the body should be a rare case**. A clear example could be ``fix: spelling errors``, but coding typos must definitely have a body: Even though the fix might be simple, the commit message must explain at least what the ill effects were.

Examples
********

* Commit message with description and breaking change footer:

  .. code-block:: text

     feat: Allow provided config object to extend other configs

     BREAKING CHANGE: `extends` key in config file is now used for
     extending other config files.

* Commit message with ``!`` to draw attention to breaking change:

  .. code-block:: text

     refactor!: Drop support for Node 6

* Commit message with both ``!`` and BREAKING CHANGE footer:

  .. code-block:: text

     refactor!: Drop support for Node 6

     BREAKING CHANGE: Refactor to use JavaScript features not available
     in Node 6.

* Commit message with no body:

  .. code-block:: text

     docs: Correct spelling of CHANGELOG

* Commit message with scope:

  .. code-block:: text

     feat(lang): Add Polish language

* Commit message with multi-paragraph body and multiple footers:

  .. code-block:: text

     fix: Correct minor typos in code

     See the issue for details on the typos fixed.

     Some of them seeped into the UI so this is important.

     Reviewed-by: Z
     Refs #133
