#!/bin/bash
# Move to the directory containing this script
pushd "$(dirname "$0")" >/dev/null || exit 1
IMG=registry.gitlab.com/hamstudy/hambook/watcher:s3
docker buildx build -f Dockerfile.watcher -t "$IMG" . --push --pull

# Check if the build was successful
if [ $? -ne 0 ]; then
  echo "Docker build failed."
  exit 1
fi
popd >/dev/null || exit 1