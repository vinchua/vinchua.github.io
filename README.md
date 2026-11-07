# vinchua.github.io

Personal site of Vincent Chua, built with [Hugo](https://gohugo.io/) and the
[PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme, deployed to
GitHub Pages.

This site was previously built with Eleventy; the content was migrated to Hugo.

## Requirements

- [Hugo extended](https://gohugo.io/installation/) **v0.158.0+** (PaperMod requirement)
- Git (the theme is a git submodule)

On macOS: `brew install hugo`.

## Local development

```sh
git clone --recurse-submodules https://github.com/vinchua/vinchua.github.io.git
cd vinchua.github.io

# If you cloned without --recurse-submodules:
git submodule update --init --recursive

hugo server -D
# → http://localhost:1313/
```

## Structure

| Path | Purpose |
|---|---|
| `hugo.toml` | Site config: menus, PaperMod params, home intro, search/archive outputs |
| `content/blog/` | Blog posts |
| `content/about.md` | About page (`/about/`) |
| `content/archives.md` | Archive page (`/archives/`) |
| `content/search.md` | Search page (`/search/`) |
| `layouts/404.html` | Custom 404 page |
| `static/` | Files served as-is (`Resume.pdf`) |
| `themes/PaperMod` | Theme, pinned as a git submodule |
| `.github/workflows/hugo.yml` | Builds the site and publishes `public/` to `gh-pages` |

## Writing a post

```sh
hugo new content blog/my-post.md
hugo server -D
```

Posts use front matter such as:

```yaml
---
title: "My post"
date: 2026-11-07
draft: false
tags: ["devops"]
categories: ["blog"]
description: "Short summary."
---
```

## Deploying

Push to `master` (or run the workflow manually). The GitHub Actions workflow
installs Hugo extended, builds with `--gc --minify`, and pushes the result to
the `gh-pages` branch, which GitHub Pages serves.

## Updating the theme

```sh
git submodule update --remote themes/PaperMod
git add themes/PaperMod && git commit -m "Update PaperMod"
```

## Credits

- Theme: [PaperMod](https://github.com/adityatelange/hugo-PaperMod) (MIT)
- Site generator: [Hugo](https://gohugo.io/)
