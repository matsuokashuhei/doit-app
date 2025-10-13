#!/usr/bin/env bash
set -eu pipefail

echo "Running post-start.sh..."

pnpm add turbo --global
pnpm add turbo --save-dev --workspace-root
pnpm install

pnpm add @nestjs/cli --global

echo "Post-start script completed successfully."
