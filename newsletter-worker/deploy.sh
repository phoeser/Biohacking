#!/bin/bash
# Deploy des Newsletter-Workers. Liest den Cloudflare-Schluessel aus der Schluesseldatei, zeigt ihn nie an.
cd "$(dirname "$0")"
export CLOUDFLARE_API_TOKEN="$(head -c 400 ~/mnt/Biohacking/.deploy/cloudflare.txt | awk '{print $1; exit}')"
W=~/bkmcp150/biohacking-kompakt-mcp-server/node_modules/.bin/wrangler
timeout 160 $W "$@" 2>&1 | grep -v -i "token" | tail -25
