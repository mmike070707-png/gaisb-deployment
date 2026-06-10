#!/bin/bash
echo -e "\033[1;33m[BUILD] Compiling GAISB.AI source code...\033[0m"
npm install
npm run build
echo "Build complete."
