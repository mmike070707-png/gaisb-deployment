#!/bin/bash
echo -e "\033[0;31m[CLEANUP] Purging previous build artifacts...\033[0m"
rm -rf ./dist/* ./build/* ./logs/*
echo "Environment sanitized."
