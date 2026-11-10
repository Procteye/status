# Procteye status

Uptime monitor and public status page for [Procteye](https://procteye.com), live at
[status.procteye.com](https://status.procteye.com) (fallback:
[procteye.github.io/status](https://procteye.github.io/status)).

- **Checks:** [Upptime](https://github.com/upptime/upptime) probes every component in
  `.upptimerc.yml` every 5 minutes from GitHub Actions and records the results in
  `history/`, `api/` and `graphs/`. An outage opens an issue labelled `status`.
- **Page:** `site/` is a static page that reads `history/summary.json` and the
  `status` issues in the browser. The "Procteye status site" workflow publishes it,
  with an Atom feed of incidents (`.github/scripts/build-feed.mjs`), to `gh-pages`.
  Upptime's own static site build is removed: `site.yml` and `update-template.yml`
  are deleted, and Setup CI no longer runs the template update or the site deploy,
  so nothing else writes to `gh-pages` or restores those files. Upgrade Upptime by
  hand: bump the `upptime/uptime-monitor` version in the remaining workflows.

## Local preview

Put sample `summary.json` and `issues.json` in `preview/` (gitignored), serve the repository
root (`python3 -m http.server 8000`) and open `http://localhost:8000/site/`. On `localhost`
the page reads `preview/` instead of GitHub.

## Tests

```sh
node --test .github/scripts/build-feed.test.mjs
```

## Licence

Upptime workflows: [MIT](./LICENSE) © Anand Chowdhary. Data in `history/`:
[Open Database License](https://opendatacommons.org/licenses/odbl/1-0/). Fonts in
`site/fonts/`: SIL Open Font License (see the licence files there).
