# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# This code was originally taken from https://github.com/jdillard/sphinx-gitstamp

import os
import datetime
from sphinx import errors
from github import Github

from sys import version_info
print(version_info)
# Gets the datestamp of the latest commit on the given file
# Converts the datestamp into something more readable
# Skips files whose datestamp we can't parse.
# Expected git datestamp format: 2017-06-07 11:57:38 +1000
# Output to June 7, 2017

class GHCachedUser:
    """
    A user cached from GitHub
    """
    def __init__(self, name):
        self.name = name
        self.login = None
        self.commits = None
        self.avatar_url = "/_static/images/user-placeholder.png"

def page_context_handler(app, pagename, templatename, context, doctree):
    import git
    global g
    if g is None:
        # We have already errored about this
        pass
    fullpagename = pagename if not app.confdir else os.path.join(app.confdir, pagename)

    # Don't barf on "genindex", "search", etc
    if not os.path.isfile("%s.rst" % fullpagename):
        return

    try:
        commits = g.iter_commits('--all', max_count=1, paths="%s.rst" % fullpagename)
        # Splits on newline to get the first (highest commits) contributor, then handles whitespace, then gets info
        try:
            most_commits, _most_user = g.git.shortlog('-sne', '--', ("%s.rst" % fullpagename)).split('\n')[0].strip().split('\t')

        # Parses all of 'first_name last_name <email>', 'first_name middle_name last_name <email>', and 'name <email>' correctly
            most_user_name = ' '.join(_most_user.split(' ')[:-1])
            most_user_email = _most_user.split(' ')[-1][1:-1]
        except Exception:
            print(g.git.shortlog('-sne', '--', ('%s.rst' % fullpagename)).split('\n')[0])
            raise Exception(g.git.shortlog('-sne', '--', ('%s.rst' % fullpagename)).split('\n')[0])
    
        if not commits:
            # Don't datestamp generated rst's (e.g. imapd.conf.rst)
            # Ideally want to check their source - lib/imapoptions, etc, but
            # that involves getting the source/output pair into the extension.
            return

        commit = next(iter(commits))
        context['gitstamp'] = datetime.datetime.fromtimestamp(commit.authored_date).strftime("%Y&#8209;%m&#8209;%d")

        last_user = GHCachedUser(commit.author.name)
        main_user = GHCachedUser(most_user_name)
        main_user.commits = most_commits
        if 'gh' in globals():
            # Look in cache first to avoid spamming GitHub
            if commit.author.email in gh_user_cache:
                last_user = gh_user_cache[commit.author.email]
            else:
                # Search GitHub and retrieve first user with matching email (if any)
                gh_users = gh.search_users(commit.author.email)
                if gh_users.totalCount:
                    gh_user = next(iter(gh_users))
                    last_user.name = gh_user.name
                    last_user.login = gh_user.login
                    last_user.avatar_url = gh_user.avatar_url
                else:
                    # Try searching the commit hash instead
                    gh_commit = gh_repo.get_commit(commit.hexsha)
                    if gh_commit:
                        last_user.name = gh_commit.author.name
                        last_user.login = gh_commit.author.login
                        last_user.avatar_url = gh_commit.author.avatar_url

                gh_user_cache[commit.author.email] = last_user
            # Repeat above for main_user
            if most_user_email in gh_user_cache:
                main_user = gh_user_cache[most_user_email]
            else:
                gh_users = gh.search_users(most_user_email)
                if gh_users.totalCount:
                    gh_user = next(iter(gh_users))
                    main_user.name = gh_user.name
                    main_user.login = gh_user.login
                    main_user.avatar_url = gh_user.avatar_url

        context['gitLastAuthor'] = last_user.name
        context['gitLastLogin'] = last_user.login
        context['gitLastAvatar'] = last_user.avatar_url
        context['gitMainAuthor'] = main_user.name
        context['gitMainLogin'] = main_user.login
        context['gitMainAvatar'] = main_user.avatar_url
        context['gitMainCommits'] = main_user.commits


    except git.exc.GitCommandError:
        # File doesn't exist or something else went wrong.
        raise errors.ExtensionError("Can't fetch git history for %s.rst." %
                                    fullpagename)
    except StopIteration:
        print("File not under source control yet.")


# Only add the page context handler if we're generating html
def what_build_am_i(app):
    global g
    if app.builder.format != 'html':
        return

    try:
        import git
    except ImportError:
        raise errors.ExtensionError("gitpython package not installed. Required to generate html. Please run: pip install gitpython")

    try:
        global g
        g = git.Repo('.')
    except Exception:
        print("gitstamp extension enabled, but no git repository found. No git datestamps will be generated.")
    else:
        app.connect('html-page-context', page_context_handler)

    try:
        global gh
        global gh_repo
        global gh_user_cache
        token = os.getenv('GITHUB_TOKEN')
        if token:
            gh = Github(token)
            gh_repo = gh.get_repo('symbol/symbol-docs')
            gh_user_cache = {}
        else:
            raise errors.ExtensionError("Missing GITHUB_TOKEN environment variable.")
    except Exception as e:
        print(e)
        print("gitstamp extension enabled, but GitHub link failed. No GH links will be generated.")

# We can't immediately add a page context handler: we need to wait until we
# know what the build output format is.
def setup(app):
    app.add_config_value('gitstamp_fmt', "%b %d, %Y", 'html')
    app.connect('builder-inited', what_build_am_i)

    return {
        'parallel_read_safe': False
    }
