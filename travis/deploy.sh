#!/usr/bin/env bash
set -e

echo "Build docs..." && echo -en "travis_fold:start:Build.AllDocs\\r"
make alldocs
echo -en "travis_fold:end:Build.AllDocs\\r"

echo "Link Check..." && echo -en "travis_fold:start:Link.Check\\r"
# make linkcheck
echo -en "travis_fold:end:Link.Check\\r"

#  The $SKIP_RELEASE_PUBLISH env variable can avoid republishing if the release process fails.
if [ "$SKIP_RELEASE_PUBLISH" = "true" ]; then
   echo "Skipping publishing of docs"
else
   echo "Publishing..." && echo -en "travis_fold:start:Publish\\r"

   git config user.name "symbol-bot"
   git config user.email "${GITHUB_EMAIL}"
   git remote add github "https://${GITHUB_TOKEN}@github.com/symbol/symbol-docs.git" > /dev/null 2>&1

   echo "Creating gh-pages branch"
   git checkout -b gh-pages

   echo "Copying files"
   mv -f -t docs build/html/*

   echo "Adding docs folder"
   git add -A docs
   echo "Committing"
   git commit -m "Release docs" > /dev/null 2>&1
   echo "Pushing"
   git push --set-upstream github gh-pages --force
   echo -en "travis_fold:end:Link.Publish\\r"
fi
