######################
Documentation workflow
######################

The project board
=================

There is a GitHub project board (a regular `Kanban <https://en.wikipedia.org/wiki/Kanban>`__ board) keeping all pending **issues** organized: https://github.com/orgs/symbol/projects/8

Every GitHub issue assigned to the ``Documentation`` project goes to this board. Then you can drag & drop cards around to keep track of their progress until the tasks are done.

Only GitHub **issues** go to this board, not **Pull Requests**. When a PR is created to fix an issue, it should be linked to it but not be added to the ``Documentation`` project so that it does not show on the board.

The columns are:

- **Backlog**: Pending tasks. All new issues go to this column. You can create issues, but also anybody else in the world. Creating issues is actually encouraged by the link at the bottom of every doc page ("Give us your feedback").
- **Priority**: These are the tasks that should be worked on next. When you finish a task you should come to this column and start working on the task at the top.
- **In progress**: Tasks currently being worked on. The purpose of this column is to keep everybody informed on what you are currently working on.
- **Revision**: Finished tasks pending review or approval. Who should approve depends on the task and who created it.
- **Done**: Finished tasks. Typically issues are automatically closed when their linked PR is merged, and the issue moves automatically to the Done column.

Periodically (once a week?) you should review the **Priority** list, move cards to make sure the list is still current, and touch base with the Captains.

Issue labels
============

Issues are labelled for easier organization. These are the main labels:

- Errors

  - ``P1``: Information is wrong. This should be fixed ASAP.
  - ``P2``: Information is incomplete.
  - ``P3``: Aesthetic issues.

- Suggestions

  - ``enhancement``: Generic label for things that can be improved.
  - ``good first issue``: Simple tasks good for getting acquainted with the system. **Newcomers should start with these ones**.

Use the filter box in the project board to show only issues with a given label, like ``label:"good first issue"`` `for example <https://github.com/orgs/symbol/projects/8?card_filter_query=label%3A%22good+first+issue%22>`_.

Local testing
=============

The :doc:`doc-repos` document explains how to test your changes locally before pushing any changes to GitHub.

PR previews
===========

Every Pull Request generates a preview using `Netlify <https://app.netlify.com/sites/nemtech/overview>`__. The ``netlify`` bot will add a comment to the PR with links to the preview build status and results.

Use these previews to ensure the build works fine and to share the results with the team.

.. note:: Some features work differently on the preview, like :ref:`doc-redirections` or the site's favicon. If something does not work and you cannot find why, maybe it's worth doing the real deployment (pushing to the ``main`` branch) and observe the results.