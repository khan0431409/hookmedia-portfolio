# Muhammad Khan — HookMedia.ai Portfolio

Live site: **https://khan0431409.github.io/hookmedia-portfolio/**

Static portfolio website for **Muhammad Khan (HookMedia.ai)** built with plain HTML5, CSS3, and vanilla ES6+ JavaScript—zero external libraries, zero frameworks, and zero build tools.

## Folder Structure

The repository uses a **flat folder structure** where `index.html`, `style.css`, `main.js`, `404.html`, `favicon.svg`, `og-image.jpg`, `robots.txt`, and `sitemap.xml` sit in the repository root.

Videos (`.mp4`) can sit either directly in the **repository root** (`./`) or inside **`assets/videos/`**. `main.js` automatically checks both locations (`VIDEO_SEARCH_PREFIXES = ['', 'assets/videos/']`) and caches the resolved URL.

## How to Add a New Video

1. Keep every `.mp4` file **under 25 MB** (GitHub's web uploader rejects files 25 MB or larger, and smaller files load faster on mobile networks).
2. Upload your `.mp4` file to the repository root or `assets/videos/` (both spaces and underscores in filenames are resolved automatically).
3. Open `main.js` and add one new object entry to the `PROJECTS` array near the top of the file.
4. Commit your changes to the `main` branch.

## Client Work vs. Concept Ads (`CLIENT_WORK_FILES`)

By default, every video is labelled **Concept ad**. If a video is confirmed paid client work, add its exact lowercase filename to `CLIENT_WORK_FILES` at the top of `main.js` (for example: `const CLIENT_WORK_FILES = ['25-before-25.mp4'];`). Only list files that are confirmed client work.

## Optional Poster Images

If you upload a `.jpg` poster image with the exact same base name next to a video in the same folder (for example, `burger_ad.jpg` next to `burger_ad.mp4`), the card will display that poster image with `preload="none"` and load the video on hover or click. If no `.jpg` poster exists, the card automatically displays a frame preview from `#t=0.5`.
