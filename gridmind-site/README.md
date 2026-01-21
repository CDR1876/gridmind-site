# GridMind Studio — Static Site

This is a static HTML/CSS build intended for Cloudflare Pages.

## Deploy (Cloudflare Pages)
- Framework preset: None
- Build command: exit 0
- Build output directory: public

## Replace images
Drop your exported Canva images into:
public/assets/

Keep the same filenames:
hero.jpg, discover-1.jpg, discover-2.jpg, talev.jpg, community.jpg, how-we-build.jpg, connect.jpg, legal-bg.jpg


## Fonts

This build expects optional self-hosted fonts.

Put these files into `public/fonts/` (or leave them out and the site will fall back to web-safe fonts):

- `Horizon.woff2` (and/or `Horizon.woff`)
- `HelveticaWorld-Bold.woff2` (and/or `HelveticaWorld-Bold.woff`)
- `NeoTech-Regular.woff2` (and/or `NeoTech-Regular.woff`)

If you only have `.ttf/.otf`, convert to `.woff2` for the web (best performance).
