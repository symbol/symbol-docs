#!/bin/bash

set -ex

echo "Publishing..."
git remote add github "https://${GITHUB_ACCESS_TOKEN}@github.com/symbol/symbol-docs.git" > /dev/null 2>&1

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
echo "Publish docs"
