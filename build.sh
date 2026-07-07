#!/bin/sh
set -e
npm run generate
mkdir -p dist
cp -r .output/public/. dist
