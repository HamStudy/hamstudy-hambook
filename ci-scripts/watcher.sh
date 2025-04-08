#!/bin/bash -e

# Default environment variables with container-level override support
REPO_URL="${REPO_URL:-https://github.com/HamStudy/hamstudy-hambook.git}"
REPO_DIR="${REPO_DIR:-/app/repo}"
BUILD_BASE_DIR="${BUILD_BASE_DIR:-/build}"
CONFIGMAP_NAME="${CONFIGMAP_NAME:-hambook-output}"
NAMESPACE="${NAMESPACE:-signalstuff}"
BRANCH="${BRANCH:-main}"
SLEEP_DURATION="${SLEEP_DURATION:-60}"
KEEP_BUILD_COUNT="${KEEP_BUILD_COUNT:-10}"

# Project configuration - list all projects here
PROJECTS="tech2022"
# Add more projects as needed, e.g.: PROJECTS="tech2022 general2023 extra2024"

# Initialize script variables
FORCE_REBUILD=false
IMMEDIATE_CHECK=false

SASSPATH=$(dirname $(which -a sass | grep -v 'node_modules/.bin/sass' | uniq | head -n 1))
# If not found or empty, bail out or fall back to just calling hugo
if [ -z "$SASSPATH" ]; then
  echo "Warning: No matching sass found outside of node_modules/.bin"
  exit 2
fi
PATH=$SASSPATH:$PATH

# Create a function to clean up child processes
cleanup() {
  echo "Received shutdown signal, cleaning up..."
  # Kill all child processes
  pkill -P $$ || true
  exit 0
}

# Set up trap for common signals
trap cleanup INT TERM

# Function to calculate hash for a specific project
get_project_hash() {
  local project="$1"
  (find "$project/hugo" -type f -not -path "$project/hugo/public/*" -not -path "$project/hugo/resources/*" -exec sha256sum {} \;) | sort
}

# Function to calculate all project hashes
calculate_project_hashes() {
  for project in $PROJECTS; do
    local hash_var_name="CURRENT_${project}_HASH"
    declare -g "$hash_var_name"="$(get_project_hash "$project")"
    echo "Calculated hash for $project: $(echo ${!hash_var_name} | sha256sum)..."
  done
}

# Function to calculate hugo common hash
get_hugo_common_hash() {
  (find hugo-common -type f -exec sha256sum {} \;) | sort
}

# Function to calculate hugo root hash (excluding specific directories)
get_hugo_root_hash() {
  (find hugo-root -type f -not -path "hugo-root/public/*" -not -path "hugo-root/resources/*" -exec sha256sum {} \;) | sort
}

# Upload a file or data string to S3
s3_upload() {
  local key="$1"   # key or file name in the bucket
  local data="$2"  # data to upload (if empty, then use file from $3)
  if [ -n "$data" ]; then
    echo "$data" | aws s3 cp - "${S3_BUCKET}/${key}"
  else
    aws s3 cp "$3" "${S3_BUCKET}/${key}"
  fi
}

# Download a file from S3 to stdout
s3_download() {
  local key="$1"
  aws s3 cp "${S3_BUCKET}/${key}" - 2>/dev/null
}

# Function to get file size in bytes
get_file_size() {
  stat -c%s "$1" 2>/dev/null || stat -c "%s" "$1" 2>/dev/null || wc -c < "$1"
}

gzip_compress() {
  local file="$1"
  pigz -9 -k -f "$file"
}

# Function to get human readable file size
get_human_size() {
  local size="$1"
  if [ "$size" -gt 1048576 ]; then
    # Size in MiB, format with up to 2 decimal places
    printf "%.2f MiB" "$(echo "scale=6; $size/1048576" | bc)"
  else
    # Size in KiB, format with up to 2 decimal places
    printf "%.2f KiB" "$(echo "scale=6; $size/1024" | bc)"
  fi
}

# Function to compress static assets in a given directory
compress_static_assets() {
  local source_dir="$1"
  if [ -z "$source_dir" ]; then
    echo "Error: No source directory provided to compress_static_assets"
    return 1
  fi
  
  echo "Compressing static assets in $source_dir..."
  find "$source_dir" -type f \( \
    -iname \*.html -o \
    -iname \*.htm -o \
    -iname \*.json -o \
    -iname \*.css -o \
    -iname \*.xml -o \
    -iname \*.svg -o \
    -iname \*.js -o \
    -iname \*.ts -o \
    -iname \*.map \
  \) -print0 | while IFS= read -r -d '' file; do
    # Check if compressed versions are older than source file
    if [ ! -f "${file}.gz" ] || [ "${file}" -nt "${file}.gz" ]; then
      echo "Compressing gzippish: $file"
      local orig_size
      local new_size
      orig_size=$(get_file_size "$file")
      gzip_compress "$file"
      new_size=$(get_file_size "${file}.gz")
      echo "Compressed [$file]: $(get_human_size $orig_size) -> $(get_human_size $new_size)"
    else
      echo "Skipping gzip compression for $file (compressed file exists and is up to date)"
    fi

    if [ ! -f "${file}.br" ] || [ "${file}" -nt "${file}.br" ]; then
      echo "Compressing with brotli: $file"
      brotli -f -k -v "$file"
    else
      echo "Skipping brotli compression for $file (compressed file exists and is up to date)"
    fi
  done
}

# Function to load stored hash with fallback
load_hash() {
  local key="$1"
  local fallback_command="$2"
  local fallback_message="$3"

  if aws s3 ls "${S3_BUCKET}/${key}" >/dev/null 2>&1; then
    echo "Loaded previous hash from S3 key ${key}" >&2
    FORCE_REBUILD=false
    s3_download "$key"
  else
    echo "$fallback_message" >&2
    FORCE_REBUILD=true
    $fallback_command
  fi
}

# Function to clean old builds
clean_old_builds() {
  echo "Cleaning old builds..."
  cleanup_needed=false
  
  # List all build archives (keys)
  builds=$(aws s3 ls "${S3_BUCKET}/" | grep -E '[0-9]{14}-[a-f0-9]+\.tar\.gz' | awk '{print $4}' | sort -r)
  
  count=0
  for build in $builds; do
    count=$((count + 1))
    if [ $count -gt $KEEP_BUILD_COUNT ]; then
      echo "Deleting old build: $build"
      aws s3 rm "${S3_BUCKET}/${build}"
      cleanup_needed=true
    fi
  done
  
  if $cleanup_needed; then
    echo "Cleanup complete"
  else
    echo "No cleanup needed"
  fi
}

# Function to update configmap and save state
update_build_state() {
  local output_name="$1"  # Name without extension
  local new_hash="$2"
  LAST_BUILD_TIME="$3"
  
  s3_upload "last_hash" "$new_hash"
  s3_upload "last_output" "$output_name"
  s3_upload "last_build_time" "$LAST_BUILD_TIME"
  
  # Log out the current state
  echo "Current state:"
  echo " - Last hash: $new_hash"
  echo " - Last output: ${output_name}.tar.gz"
  echo " - Last build time: $LAST_BUILD_TIME"
  echo " - Last Hugo common hash: $(echo $CURRENT_HUGO_COMMON_HASH | sha256sum)"
  echo " - Last Hugo root hash: $(echo $CURRENT_HUGO_ROOT_HASH | sha256sum)"
  
  # Log project hashes
  for project in $PROJECTS; do
    local current_hash_var="CURRENT_${project}_HASH"
    echo " - Last $project hash: $(echo ${!current_hash_var} | sha256sum)"
  done
  echo "--"
  
  # Get the current path from configmap before updating
  local current_path=$(kubectl get configmap "$CONFIGMAP_NAME" -n "$NAMESPACE" -o jsonpath='{.data.current_path}')
  
  echo "Updating ConfigMap ${NAMESPACE}/$CONFIGMAP_NAME with new output (${output_name}.tar.gz)..."
  kubectl patch configmap "$CONFIGMAP_NAME" \
    -n "$NAMESPACE" \
    --type=json \
    -p="[
      {'op': 'replace', 'path': '/data/current_path', 'value': '${output_name}.tar.gz'},
      {'op': 'replace', 'path': '/data/previous_path', 'value': '$current_path'},
      {'op': 'replace', 'path': '/data/last_build_time', 'value': '$LAST_BUILD_TIME'}
    ]"
}

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

# Build function to handle multiple projects
run_build() {
  local output_dir="$1"
  local rebuild_common=false
  
  # Create the output directory
  mkdir -pv "$BUILD_BASE_DIR/$output_dir"
  
  # Check if common files changed
  if [ "$CURRENT_HUGO_COMMON_HASH" != "$LAST_HUGO_COMMON_HASH" ]; then
    rebuild_common=true
    echo " -- Common files changed, all projects will be rebuilt."
  fi
  
  # Check if root changed
  if [ "$CURRENT_HUGO_ROOT_HASH" != "$LAST_HUGO_ROOT_HASH" ]; then
    echo " -- Rebuilding hugo-root..."
    run_or_error hugo -s hugo-root --minify --config hugo.yaml,hugo-prod.yaml --cleanDestinationDir
    # Compress root assets
    echo " -- Compressing hugo-root assets..."
    compress_static_assets "hugo-root/public"
  else
    echo " -- No changes in hugo-root, skipping rebuild."
  fi
  # Copy root files to output directory
  echo " -- Copying hugo-root files to $BUILD_BASE_DIR/$output_dir/..."
  cp -r hugo-root/public/* "$BUILD_BASE_DIR/$output_dir/"
  
  # Check and build each project
  for project in $PROJECTS; do
    local current_hash_var="CURRENT_${project}_HASH"
    local last_hash_var="LAST_${project}_HASH"
    
    if $rebuild_common || [ "${!current_hash_var}" != "${!last_hash_var}" ]; then
      echo " -- Rebuilding $project..."
      run_or_error hugo -s "$project/hugo" --minify --config hugo.yaml,hugo-prod.yaml --cleanDestinationDir
      
      # Compress project assets
      echo " -- Compressing $project assets..."
      compress_static_assets "$project/hugo/public"
    else
      echo " -- No changes in $project, skipping rebuild."
    fi
    
    # Copy project files to output directory
    echo " -- Copying $project files to $BUILD_BASE_DIR/$output_dir/$project..."
    mkdir -p "$BUILD_BASE_DIR/$output_dir/$project"
    cp -rv "$project/hugo/public/"* "$BUILD_BASE_DIR/$output_dir/$project/"
  done
  
  return 0
}

run_or_error() {
  # Run in a subshell to manage signals
  (
    # Set up signal handling in the subshell
    trap 'exit 1' INT TERM
    
    # Run the actual command
    "$@"
  )
  local ret=$?
  if [ $ret -ne 0 ]; then
    echo "Command failed: $*"
    cat /home/builder/.npm/_logs/* 2>/dev/null || true
    exit 1
  fi
  return $ret
}

handle_usr1() {
  IMMEDIATE_CHECK=true
  if [ -n "$PID" ]; then
    kill "$PID" 2>/dev/null || true
  fi
}

# Print configuration
echo "Starting watcher script at $(date)"
echo "REPO_URL: $REPO_URL"
echo "BRANCH: $BRANCH"
echo "BUILD_BASE_DIR: $BUILD_BASE_DIR"
echo "CONFIGMAP_NAME: $CONFIGMAP_NAME"
echo "NAMESPACE: $NAMESPACE"
echo "SLEEP_DURATION: $SLEEP_DURATION"
echo "KEEP_BUILD_COUNT: $KEEP_BUILD_COUNT"
echo "S3_BUCKET: $S3_BUCKET"
echo "AWS_ENDPOINT_URL: $AWS_ENDPOINT_URL"
echo "PROJECTS: $PROJECTS"

export HUGO_NUMWORKERMULTIPLIER=1

trap 'handle_usr1' USR1
trap 'echo "Exiting..."; exit 0' INT TERM

# Clone the repository if it doesn't exist
if [ ! -d "$REPO_DIR" ]; then
  echo "Cloning repository from $REPO_URL into $REPO_DIR..."
  git clone --depth 10 "$REPO_URL" "$REPO_DIR" -b "$BRANCH"
  echo "Done"
fi

cd $REPO_DIR
# Ensure the node modules are installed
npm ci

#region Main loop

# Load stored hashes
CURRENT_HASH=$(load_hash "last_hash" "git rev-parse --short HEAD~" "No previous hash found, using previous to force build")
LAST_BUILD_TIME=$(s3_download "last_build_time" || echo "0")

# Init common hash values
LAST_HUGO_COMMON_HASH=""
LAST_HUGO_ROOT_HASH=""

# Init project hash values
for project in $PROJECTS; do
  declare -g "LAST_${project}_HASH"=""
done

# Calculate current hashes
calculate_project_hashes
CURRENT_HUGO_COMMON_HASH=$(get_hugo_common_hash)
CURRENT_HUGO_ROOT_HASH=$(get_hugo_root_hash)

while true; do
  CURRENT_TIME=$(date +%s)
  
  if $IMMEDIATE_CHECK; then
    echo "Signal received. Forcing rebuild..."
    FORCE_REBUILD=true
    IMMEDIATE_CHECK=false
  fi

  # Fetch latest git changes
  echo "Fetching latest changes from $REPO_URL branch $BRANCH..."
  if ! git fetch origin "$BRANCH"; then
    echo "Failed to fetch updates from $REPO_URL. Skipping this iteration."
    sleep "$SLEEP_DURATION" & PID=$!
    wait $PID || true
    unset PID
    continue
  fi
  
  # Check for git changes
  NEW_HASH=$(git rev-parse --short origin/${BRANCH})
  if [ "$CURRENT_HASH" != "$NEW_HASH" ]; then
    echo "New git changes detected ($CURRENT_HASH -> $NEW_HASH). Pulling and forcing rebuild..."
    git reset --hard origin/${BRANCH}
    git lfs pull
    FORCE_REBUILD=true
    
    # Run imports for all projects
    for project in $PROJECTS; do
      echo " -- Running import for $project"
      node src/import.js -f hugo $project -o $project/hugo
    done
    
    # Calculate new hashes after import
    calculate_project_hashes
    CURRENT_HUGO_COMMON_HASH=$(get_hugo_common_hash)
    CURRENT_HUGO_ROOT_HASH=$(get_hugo_root_hash)
  else
    echo "No new git changes detected."
  fi

  if $FORCE_REBUILD; then
    # Generate a unique output name
    TIMESTAMP=$(date +%Y%m%d%H%M%S)
    OUTPUT_NAME="${TIMESTAMP}-${NEW_HASH}"
    
    build_start=$(date +%s)
    echo "Starting build"
    
    echo "!!! Building Hugo site into $OUTPUT_NAME at $(date) !!!"

    if run_build "$OUTPUT_NAME"; then
      echo " -- Creating tar.gz archive..."
      echo tar -czvf "${BUILD_BASE_DIR}/${OUTPUT_NAME}.tar.gz" -C "${BUILD_BASE_DIR}/${OUTPUT_NAME}" .
      tar -czvf "${BUILD_BASE_DIR}/${OUTPUT_NAME}.tar.gz" -C "${BUILD_BASE_DIR}/${OUTPUT_NAME}" .
      
      echo " -- Uploading archive to S3..."
      # Upload the tar.gz file to S3
      aws s3 cp "${BUILD_BASE_DIR}/${OUTPUT_NAME}.tar.gz" "${S3_BUCKET}/${OUTPUT_NAME}.tar.gz"
      
      update_build_state "$OUTPUT_NAME" "$NEW_HASH" "$CURRENT_TIME"
      
      build_end=$(date +%s)
      duration=$((build_end - build_start))
      echo "!!! Build completed in $(format_duration $duration) !!!"
      
      # Clean up the local build and archive files
      rm -rf "${BUILD_BASE_DIR}/${OUTPUT_NAME}"
      rm -f "${BUILD_BASE_DIR}/${OUTPUT_NAME}.tar.gz"
      
      # Update current hash after successful build
      CURRENT_HASH=$NEW_HASH
      # Update last hash values for all projects
      for project in $PROJECTS; do
        current_hash_var="CURRENT_${project}_HASH"
        last_hash_var="LAST_${project}_HASH"
        declare -g "$last_hash_var"="${!current_hash_var}"
      done
      LAST_HUGO_COMMON_HASH=$CURRENT_HUGO_COMMON_HASH
      LAST_HUGO_ROOT_HASH=$CURRENT_HUGO_ROOT_HASH
    else
      echo "!!! Build failed, skipping tar and upload !!!"
    fi
  fi
  FORCE_REBUILD=false

  # Clean up old builds
  clean_old_builds

  # Sleep in the background and wavit for signals
  sleep "$SLEEP_DURATION" & PID=$!
  wait $PID || true
  unset PID
done

#endregion