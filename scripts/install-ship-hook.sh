#!/bin/sh
# Point the local post-commit hook at scripts/ship-after-commit.sh.
# Safe when .git is absent, such as a Vercel build.

cd "$(dirname "$0")/.." || exit 0

if [ ! -d .git ]; then
  exit 0
fi

mkdir -p .git/hooks
ln -sfn ../../scripts/ship-after-commit.sh .git/hooks/post-commit
chmod +x scripts/ship-after-commit.sh
