####################################
Organization Contribution Guidelines
####################################

We want to make it as easy as possible for **YOU** to contribute to Symbol.
We are currently in the process of consolidating our organization repositories but will try to keep this documentation up to date.

We rely heavily on automated code checks - linting, building and testing - in combination with code reviews.

Coding and Review Guidelines
****************************

Fundamentally, we believe that coding is as much art as science and a good code review will have some bit of back and forth between reviewers and author. Consequently, during the course of a review, there might be multiple commits incorporating feedback. While keeping these separate during the review helps the reviewers, the usefulness of memorializing these changes is minimal. As a result, we generally squash all commits composing a Pull Request into a single commit. This helps to keep our git log tidy as well as strongly encourage relatively small, single purpose Pull Requests.

If you're working on a small, single part change, you should be working off of the development (``dev``) branch.
When merging, ``--no-ff`` option is recommended.

If you're working on a larger, multi-part change, you should be working off of a feature (`feature/*`) branch.
When merging, ``--ff`` option is recommended in order to group all related changes.

Checklist **BEFORE** opening a Pull Request:

1. Do not combine multiple changes in a single review. For example, if you want to rename a commonly used function and change its functionality, we'd much prefer two PRs - one for the rename and one for the functionality change - rather than one. **NEVER** combine reformatting changes with functionality changes.

2. Run linter on code and update code to pass. In most projects, you can run ./lint.sh from project root. If such a file is not present, check the project-specific README on how to run the linter or look at the commands executed by the CI pipeline.

3. Write unit tests for all new code. We strive for 95%+ branch coverage across all of our project.

4. Make sure all unit tests - new and existing - pass.

5. Make sure build quality gates / automated CI pipelines all pass.

6. Perform a self-review. Review your code as if you're reviewing someone else's.

Once you've completed all the previous steps, open a Pull Request on GitHub.

1. Be open to feedback and not defensive.

2. Incorporate feedback from maintainers in a timely fashion.

3. Wait for approval of at least two contributors, including at least one senior maintainer. If you are modifying existing code, it's recommended to have the original author review, if possible.

4. Rebase and squash your Pull Request before merging into its destination - either ``dev`` or a ``feature/*`` branch. If you don't have permissions for this, someone will do this for you.
