# Contributing to symbol-docs

First off, thank you for considering contributing to symbol-docs.

The Symbol Documentation is an open-source project, and we love to receive contributions from our community — you!

There are many ways to contribute, from writing guides, improving the documentation, submitting errors and requests or
writing new pieces of documentation that can be incorporated into the docs itself.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project.
In return, they should reciprocate that respect in addressing your issue, assessing changes, and help you finalize your pull requests.

## Error reports

If you think you have found an error in the symbol-docs, first make sure that you are testing against the latest version of symbol-docs - your issue may already have been fixed. If not, search our issues list on GitHub in case a similar issue has already been opened.

It is very helpful if you can prepare a reproduction of the error. It makes it easier to find the problem and to fix it.

Please, take into consideration the next template to report your issue:

    **Describe the error**
    A clear and concise description of what the error is.

    **To Reproduce**
    Steps to reproduce the behavior:
    1. Go to '...'
    2. Click on '....'
    3. Scroll down to '....'
    4. See error

    **Expected behavior**
    A clear and concise description of what you expected to happen.

    **Screenshots**
    If applicable, add screenshots to help explain your problem.

Open a new issue [here][github-issues].

## Requests

If you find yourself wishing for content that does not exist in symbol-docs, you are probably not alone.
Most of the documentation and guides that symbol-docs have today have been added because our users saw the need.
Open an [issue][github-issues] on our issues list on GitHub which describes the missing documentation or improvement
you would like to see.

If the improvement is not related to documentation, but with a specific project, please check CONTRIBUTING.md in the
project repository.

## Contributing code and documentation changes

To expand and improve the symbol-docs, please find or open an issue about it first.

Talk about what you would like to do. It may be that somebody is already working on it,
or that there are particular issues that you should know about before implementing the change.

We enjoy working with contributors to get their pull-requests accepted.

### Building symbol-docs

If the documentation change is small, you can use the *"Edit on Github"* button at the top of the page.

For substantial changes or contributions, you may need to fork the main symbol-docs repository and clone
it to your local machine. See [github help page](https://help.github.com/articles/fork-a-repo/) for help.

First, make sure you have Python 2.7 or 3.4+ and pip installed.

Then, install requirements using pip:

`pip install -r requirements.txt`

Run the following command and open the provided URL in a browser.

`make livehtml`

### Updating translations

1. Generate the `.pot` files with `make gettext`.

2. Update the Japanese `.po` files with `sphinx-intl update  -p build/gettext -l ja`

3. Make sure that all files to be sent to Transifex are present in the `.tx/config` index with:

   `sphinx-intl update-txconfig-resources --pot-dir build/gettext`

   Commit any changes detected (beware of pages which do not use Transifex for translation like `handbook/vision.rst`).

4. Commit and push the changes in the `source/locale` folder. Travis will send the changes to Transifex.

### Submitting your changes

Once your changes and tests are ready to submit for review:

1. Test your changes.

    Run `make livehtml` and preview your changes.

2. Submit a pull request.

    Push your local changes to your forked copy of the repository and [submit a pull request](https://help.github.com/articles/about-pull-requests/). In the pull request, choose a title which sums up the changes that you have made, and in the body provide more details about what your changes do. Also mention the number of the issue where discussion has taken place, e.g. "Closes #123".

Then sit back and wait. There will probably be a discussion about the pull request and, if any changes are needed, we would love to work with you to get your pull request merged into symbol-docs.

### Contributing License Notice

When you contribute code, you affirm that the contribution is your original work and that you license the work to the project under the project's open-source license.

Whether you state this explicitly, by submitting any copyrighted material via pull request, email, or other means you agree to license the material under the project's open source license and warrant that you have the legal authority to do so.

*CONTRIBUTING.md is based on [CONTRIBUTING-template.md](https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md)* , [elasticsearch/CONTRIBUTING](https://github.com/elastic/elasticsearch/blob/master/CONTRIBUTING.md) and [spark/CONTRIBUTING](https://github.com/apache/spark/blob/master/CONTRIBUTING.md)

[pull-request]: https://help.github.com/articles/about-pull-requests/
[github-issues]: https://github.com/symbol/symbol-docs/issues
