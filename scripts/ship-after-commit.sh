#!/bin/sh
# After each commit: push the branch, and deploy production when it is main.
# Failure here does not undo the commit.

export PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:$PATH"

if [ -n "${VANTAGE_SHIP_HOOK:-}" ]; then
  exit 0
fi
export VANTAGE_SHIP_HOOK=1

repo=$(git rev-parse --show-toplevel) || exit 0
branch=$(git rev-parse --abbrev-ref HEAD) || exit 0

unset GIT_DIR GIT_WORK_TREE GIT_INDEX_FILE
cd "$repo" || exit 0

echo "Pushing $branch to origin..."
if ! git push origin HEAD; then
  echo "Push failed. The commit stays local." >&2
  exit 0
fi

if [ "$branch" != "main" ]; then
  echo "Pushed $branch. Production deploy runs from main."
  exit 0
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "Pushed main. Skipped production deploy because other files are still uncommitted." >&2
  exit 0
fi

if ! command -v vercel >/dev/null 2>&1; then
  echo "Pushed main. The Vercel CLI is not installed, so production was not deployed." >&2
  exit 0
fi

echo "Deploying production..."
if vercel deploy --prod --yes; then
  echo "Production deployment ready: https://vantagebridge.vercel.app"
else
  echo "Pushed main. Production deploy failed." >&2
fi

exit 0
