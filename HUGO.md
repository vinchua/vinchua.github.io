# Hugo + PaperMod preview branch

This branch scaffolds a Hugo build using the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme, alongside the existing Eleventy sources. `master` is untouched.

## Preview locally

```sh
git submodule update --init --recursive   # only needed after a fresh clone
hugo server -D
# → http://localhost:1313/
```

Hugo extended **v0.158.0+** is required (PaperMod requirement); this repo was tested with v0.169.0. On macOS: `brew install hugo`.

## Layout

| Path | Purpose |
|---|---|
| `hugo.toml` | Site config: title, menus, PaperMod params, search/archive outputs |
| `content/posts/` | Blog posts (Markdown) |
| `content/about.md` | About page |
| `content/archives.md` | Archive page (`layout: archives`) |
| `content/search.md` | Search page (`layout: search`) |
| `static/` | Files served as-is (`Resume.pdf`) |
| `themes/PaperMod` | Theme, pinned as a git submodule |
| `.github/workflows/hugo.yml` | Build + deploy to the `gh-pages` branch |

The old Eleventy sources were moved to `legacy-eleventy/` (with `git mv`, so history is preserved) to keep `content/` Hugo-only. They are untouched otherwise; delete that folder when you're happy with the migration.

## Deploying

The workflow runs on pushes to `master` (or manual dispatch), builds with Hugo, and pushes `public/` to `gh-pages`, which is the branch GitHub Pages already serves from.

Before merging this branch into `master`, disable or delete `.github/workflows/eleventy_build.yml` so the two workflows don't fight over `gh-pages`.

## Updating the theme

```sh
git submodule update --remote themes/PaperMod
git add themes/PaperMod && git commit -m "Update PaperMod"
```
