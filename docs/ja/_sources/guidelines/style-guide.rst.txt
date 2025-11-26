###########
Style guide
###########

As |codename| grows as an open source project, more developers will begin to
rely on documentation to provide quick and efficient education about the
platform. It is thus imperative that a high level of cohesion is
achieved across numerous articles on the |sitename|. The
following style guide will provide a guideline to improve the
consistency and quality of writing from the |codename| technical writing team.

***************
Getting started
***************

Before you start your writing process, here are some things to consider:

1. Determine purpose and use

   Establishing the purpose of your article should be the first step of your writing process. Determine what you want the readers to know when they finish reading. Defining the objectives will help you with each subsequent step in writing.

2. Identify the audience and their need

   Keep in mind that the documentation will be mostly read by curious or contributing **developers** and **system integrators**, who we should assume to have at least an elementary level of technical knowledge. Determine what information, and how much detail, the readers need to achieve the purpose of your article.

3. Organize the information

   Once you have determined what information the readers need, organize the information in a logical manner for the best flow and comprehension.

You are now ready to begin writing! Visit this :doc:`page <suggesting-changes>` to learn how to download the project and submit documentation.

*****
Tools
*****

**Sphinx**: |sphinx| is the documentation generator we use to
facilitate writing documentation. Its features (extensive
cross-references, hierarchical structure, automatic indices, etc) and
range of languages make it a useful tool for our purposes.

**reStructuredText**: Sphinx uses |rst| as its
markup syntax. reStructuredText is a straightforward yet powerful system
that is a major strength of using Sphinx. You can refer to the
reStructuredText |rst-cheat-sheet| for the basics.

**GitHub**: GitHub is the hosting service we use for our
documentation. To commit your contributions, you will need to be
familiar with the platform. Beginners can start learning by reading this
|gh-introduction| to Git.

**Transifex**: Transifex is the collaborative localization platform we
use to translate our documentation to various languages. Follow our
:doc:`guide <translating-the-documentation>` to start contributing to the translations.

****************
Writing patterns
****************

While it is unreasonable to expect all of the many writers on the
technical writing team to have an identical writing style, we can
attempt to have a consistent voice that resonates with the readers by
maintaining a similar writing pattern. Keep in mind these basic rules as
you write.

Tone
====

.. csv-table::
    :header: "Do", "Don't"
    :delim: ;

    Use American English variant.; Use UK Spelling/grammar: "colo**u**r".
    Be friendly, maintaining a professionalism.; Use too much contractions, slang, colloquialism, buzz words, excessive exclamation marks.
    Use active voice & present tense by default.; Use passive voice.
    Address the reader as "you" by default. Use "we" as the default pronoun in your article unless you are referring to a personal recommendation.; Use “you” to describe an action the user has to do.
    Write documentation for an international audience, with diversity and inclusivity in mind.; Include culturally or politically controversial ideas or examples.
    Be Concise.; Use long sentences or filler words in excess ("simply", "really", "just", "please").

Basic formatting
================

Maintaining a uniform format is also essential for consistency.

.. csv-table::
    :header: "Case", "Example"
    :delim: ;

    Defining new or important vocabulary.; **Private Key** is a random 256-integer.
    Emphasizing important differences.; If valid, the harvester stores the transaction in a block, and it reaches the **confirmed** status.
    Writing headers for a table.; This table.
    Writing titles.; Basic formatting (first letter capitalized).
    Writing numbers; 1,000.5. Use the period (full stop) as the decimal separator.
    Referencing variable values, functions, file names, mosaic ids, addresses or urls.; |codename| has a rewrite limit of ``360`` blocks. Once a transaction has more than 360 confirmations, it cannot be reversed.
    Warning the reader.; Use notes. :doc:`Example <../getting-started/setup-workstation>`
    Providing helpful hyperlinks throughout your article.; transfer transactions are used to send :doc:`mosaics <../concepts/mosaic>` between two :doc:`accounts <../concepts/account>`.
    Explaining a difficult concept with many steps.; Break information and actions into bulleted or numbered lists when possible.

Code snippets
=============

Common practices to include code snippets in a document.

.. csv-table::
    :header: "Case", "Example"
    :delim: ;

    Documenting bash commands.; Do not add ``$>`` before bash commands: ``symbol-cli account info``.
    Using code snippets.;  Import them from a file using the ``.. viewsource::`` directive. :doc:`Example <writing-a-guide>`
    Displaying a subset of the code; Use the comments ``/* start block 01*/`` and ``/* end block 01 */`` to divide code blocks. :doc:`Example <writing-a-guide>`

If you are writing a guide, you might find helpful this :doc:`guideline <writing-a-guide>`.

Terms
=====

List of terms that are prone to be written in different ways.

.. csv-table::
    :header: "Correct", "Incorrect"
    :delim: ;

    API; Api, Api
    blockchain; block chain
    Catapult; catapult, NEM Catapult
    CLI; cli, Cli
    GitHub, github, Github
    id; ID
    JavaScript; Javascript, javascript
    MongoDB; mongodb, Mongodb
    NEM; Nem, nem
    Node.js; nodejs, node.js
    RxJS; rxjs
    SDK; Sdk, Sdk
    SHA-256; SHA256, Sha-256
    Smart Asset System; Smart asset system
    Symbol; symbol, NEM Symbol
    TransferTransaction; Transfer Transaction, transfer transaction
    TypeScript; typescript, Typescript
    Whitepaper; WhitePaper

.. |sphinx| raw:: html

   <a href="http://www.sphinx-doc.org/en/master/" target="_blank">Sphinx</a>

.. |rst| raw:: html

   <a href="http://docutils.sourceforge.net/rst.html" target="_blank">reStructuredText</a>

.. |rst-cheat-sheet| raw:: html

   <a href="https://github.com/ralsina/rst-cheatsheet/blob/master/rst-cheatsheet.rst" target="_blank">cheat-sheet</a>

.. |gh-introduction| raw:: html

   <a href="https://guides.github.com/introduction/git-handbook/" target="_blank">introduction</a>
