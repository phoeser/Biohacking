# Newsletter-Worker (nl.biohackingkompakt.de)

Cloudflare-Worker für den Newsletter von Biohacking Kompakt (seit 28.10.2026).
Anmeldung mit Double-Opt-in, Bestätigung, Abmeldung (auch One-Click), Versand-Start.

- Speicher: Workers KV `bk-newsletter-abos` (Binding `ABOS`), Rate-Limit-Namespace 1003.
- Mails: Make-Szenarien „BK Newsletter – Bestätigungsmail“ (10062850) und „BK Newsletter – Versand“ (10062851), Absender kontakt@ (SMTP-Verbindung 14589517).
- Secrets nur per `./deploy.sh secret put <NAME>`: `ADMIN_KEY` (liegt in `.deploy/newsletter-admin.txt`), `HOOK_DOI`, `HOOK_VERSAND`. Nie in Dateien oder Commits.
- Deploy: `./deploy.sh deploy` (liest `.deploy/cloudflare.txt`, nutzt das Wrangler aus dem MCP-Server-Ordner).
- Admin: `python3 admin.py statistik | export | versand <json>` – `versand` erwartet `{betreff, html, text}` (html mit `%%ABMELDEN%%`), optional `nur_an: [...]` für einen Testversand oder `trocken: true`.
- Seiten, Anmeldekasten, Archiv und Mailfassung baut `newsletter.py` im Repo-Wurzelverzeichnis.
