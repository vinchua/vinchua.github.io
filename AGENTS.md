# Agent Guidelines

## Explaining problems

When investigating an issue, explain what is happening in plain language a
non-specialist can follow: what broke, why, and what the fix does. Skip jargon
where a normal word works.

Avoid stock AI-sounding phrases, especially "smoking gun", "it's not just X,
it's Y", "let's dive in", and similar filler.

## Git: approval required

Do **not** run any of the following without explicit approval from Vincent first:

- `git push` (including to `master`)
- `gh pr create`
- `gh pr merge`
- Anything else that publishes changes to the remote

Local work is fine: edit files, run `hugo --gc --minify`, and verify the build
under `public/`. Then stop and show the result. Wait for an explicit
"push it" / "approve" before publishing.

## Site notes

- Static site built with Hugo + PaperMod; deployed to GitHub Pages (`gh-pages`)
  by `.github/workflows/hugo.yml` on push to `master`.
- The home page is the About Me; there are no placeholder blog posts.
  Blog/Archive/Search/Tags menu items stay hidden until posts exist.
- Text color overrides live in `assets/css/extended/custom.css`.
