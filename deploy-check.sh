#!/usr/bin/env bash
# Prueft, ob die lokalen Dateien mit dem uebereinstimmen, was live ausgeliefert wird.
# Aufruf:  ./deploy-check.sh [pfad/zum/lokalen/ordner]
# Ohne Argument wird der Ordner benutzt, in dem das Skript liegt.
set -uo pipefail

BASE="${1:-$(cd "$(dirname "$0")" && pwd)}"
HOST="https://biohackingkompakt.de"
DATEIEN=(
  index.html
  impressum.html
  datenschutz.html
  css/style.css
  js/app.js
  js/mydata.js
  js/vitals.js
  js/enhance.js
  js/data/supplements.js
  js/data/tips.js
  js/data/goals.js
  js/data/products.js
  js/data/experimental.js
  js/data/khavinson.js
  js/data/therapies.js
  js/data/signalwege.js
  js/data/erfahrungen.js
)

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
abweichung=0
fehlt=0

printf '%-34s %-8s %s\n' DATEI STATUS HINWEIS
printf '%.0s-' {1..70}; printf '\n'

for f in "${DATEIEN[@]}"; do
  lokal="$BASE/$f"
  if [ ! -f "$lokal" ]; then
    printf '%-34s %-8s %s\n' "$f" "-" "lokal nicht vorhanden, uebersprungen"
    continue
  fi
  mkdir -p "$TMP/$(dirname "$f")"
  # Cache-Buster, damit nicht die CDN-Kopie gemessen wird
  code=$(curl -s -o "$TMP/$f" -w '%{http_code}' "$HOST/$f?cb=$RANDOM$RANDOM")
  if [ "$code" != "200" ]; then
    printf '%-34s %-8s %s\n' "$f" "FEHLT" "HTTP $code"
    fehlt=$((fehlt+1)); continue
  fi
  a=$(md5sum "$lokal" | cut -d' ' -f1)
  b=$(md5sum "$TMP/$f" | cut -d' ' -f1)
  if [ "$a" = "$b" ]; then
    printf '%-34s %-8s\n' "$f" "OK"
  else
    printf '%-34s %-8s %s\n' "$f" "ANDERS" "muss hochgeladen werden"
    abweichung=$((abweichung+1))
  fi
done

printf '%.0s-' {1..70}; printf '\n'
echo "Abweichungen: $abweichung   fehlend: $fehlt"

# Cache-Buster pruefen: jeder ?v= in index.html muss zum Dateiinhalt passen
if [ -f "$BASE/index.html" ]; then
  falsch=0
  for ref in $(grep -o '\(js\|css\)/[^"?]*?v=[0-9a-f]*' "$BASE/index.html"); do
    datei="${ref%%\?v=*}"; wert="${ref##*\?v=}"
    soll=$(sha1sum "$BASE/$datei" 2>/dev/null | cut -c1-8)
    if [ "$soll" != "$wert" ]; then echo "WARNUNG: Cache-Buster veraltet: $datei (python3 buster.py)"; falsch=$((falsch+1)); fi
  done
  [ "$falsch" -eq 0 ] && echo "Cache-Buster: alle passend"
fi

[ "$abweichung" -eq 0 ] && [ "$fehlt" -eq 0 ]
