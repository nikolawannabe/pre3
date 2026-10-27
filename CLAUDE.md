# Working on the Pre-3 site

Hugo site (Ananke theme) for Peninsula Pre-3 Cooperative Preschool, modeled on the PCYO site (`~/pcyo`).
Pushing to `main` will deploy to GitHub Pages through a GitHub Action (`.github/workflows/hugo.yaml`).

Pre-3 is **no longer connected to Peninsula College**: no college partnership, college credits, college
calendar, or college faculty anywhere on the site.

## Rules

- Never commit or push; git is read-only for Claude. Case reviews and commits all changes.
- After a change, test it on the local Hugo server and report what changed.

## Code style

All generated code must be human readable and editable, and properly designed with separation of concerns:

- **Data** lives in `data/` (`brand.yaml`, `terms.yaml`, `classes.yaml`, `footer.yaml`) and content front matter,
  not hard-coded in templates.
- **Logic** goes in small partials that `return` values and print no markup (for example `partials/contrast-ratio.html`).
- **Markup** goes in view partials, shortcodes and layouts that only display what the logic partials return.
- **Styles** go in stylesheets (`assets/ananke/css/`, listed in `custom_css` in `hugo.toml`), not in `<style>` blocks
  or computed `style=""` attributes. A single CSS custom property set from data (such as `--term`) is fine.
- Name values instead of using magic numbers, keep one source of truth for each value, and comment the "why".
- Prefer small, single-purpose files with a short header comment saying what they do and what they take.
- Use specific class names (for example `brand-term__badge`) and check the site for existing uses first.
- **Internal links** must work when the site is served under a subpath (e.g. `nikolawannabe.github.io/pre3/`):
  write them without a leading slash (`classes/`) and pass them through `relURL` in templates, or use
  `{{< relref "/events" >}}` in markdown. A leading `/` skips the subpath.

## Brand and accessibility

- **Brand:** the style guide at `/branding/` (`content/branding.html`). Colors and fonts are CSS variables in
  `assets/ananke/css/brand.css`. Each brand color is a pastel (backgrounds only) and a deep shade (text, icons,
  buttons). Never put text in a pastel color.
- **Accessibility:** WCAG 2.1 AA wherever possible (text contrast 4.5:1, or 3:1 for large text and icons;
  alt text; keyboard access; meaningful link text). `layouts/partials/contrast-ratio.html` computes contrast.
- **If a requested change would not follow the brand guide or WCAG, say how, and get confirmation first.**

## Local server

- The snap `hugo` can't run inside Claude's sandbox; run `/snap/hugo/current/bin/hugo` with the sandbox off.
- Hugo with libsass rejects modern CSS color syntax like `rgb(0 0 0 / 0.1)`; use `rgba(0, 0, 0, 0.1)`. It also
  rejects CSS `min()`, `max()` and `clamp()` with mixed units; use max-width and media queries instead.
- `hugo server` doesn't pick up edits to the `custom_css` stylesheets until it restarts or `hugo.toml` changes.
