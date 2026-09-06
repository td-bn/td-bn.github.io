# faber ihsan

Personal blog of Burhan — software engineer, data systems.

Astro 7 static site. Deployed to GitHub Pages (td-bn.github.io) via the workflow in
`.github/workflows/` on every push to `main`. Pages must be set to source from GitHub Actions.

## Write a post

Create `src/content/blog/<slug>.md`:

    ---
    title: The post title
    description: One line for the list and RSS.
    pubDate: 2026-09-06
    ---

    Body in markdown. MDX also works (`.mdx`).

## Diagrams

Draw in Excalidraw (VS Code extension or excalidraw.com), export as `.excalidraw.svg`,
drop into `src/assets/` or `public/`, embed with a plain markdown image. Hand-drawn is the house style.

## Local

    mise exec node@22 -- npm run dev     # http://localhost:4321
    mise exec node@22 -- npm run build   # outputs to dist/
