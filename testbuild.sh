#!/bin/bash -e

# Define build directory
BUILD_DIR="./build"
PROJECTS="tech2022"  # Add more projects as needed

# Function to get elapsed time in human readable format
format_duration() {
  local duration=$1
  local minutes=$((duration / 60))
  local seconds=$((duration % 60))
  if [ "$minutes" -gt 0 ]; then
    echo "${minutes}m ${seconds}s"
  else
    echo "${seconds}s"
  fi
}

# Function to run commands and exit on error
run_or_error() {
  "$@"
  local ret=$?
  if [ $ret -ne 0 ]; then
    echo "Command failed: $*"
    exit 1
  fi
  return $ret
}

# Clean build directory
echo "Cleaning build directory..."
rm -rf "$BUILD_DIR"
mkdir -p "$BUILD_DIR"

# Run the import for each project
echo "Running import for projects..."
for project in $PROJECTS; do
  echo " -- Importing $project"
  run_or_error node src/import.js -f hugo $project -o $project/hugo
done

build_start=$(date +%s)
echo "Starting build at $(date)"

# Build root
echo " -- Building hugo-root..."
run_or_error hugo -s hugo-root --minify --config hugo.yaml,hugo-prod.yaml --cleanDestinationDir

# Copy root files to build directory
echo " -- Copying hugo-root files to build directory..."
cp -r hugo-root/public/* "$BUILD_DIR/"

# Build each project
for project in $PROJECTS; do
  echo " -- Building $project..."
  run_or_error hugo -s "$project/hugo" --minify --config hugo.yaml,hugo-prod.yaml --cleanDestinationDir
  
  # Copy project files to build directory
  echo " -- Copying $project files to build directory..."
  mkdir -p "$BUILD_DIR/$project"
  cp -r "$project/hugo/public/"* "$BUILD_DIR/$project/"
done

build_end=$(date +%s)
duration=$((build_end - build_start))
echo "Build completed in $(format_duration $duration)"
echo "Output is available in the $BUILD_DIR directory"