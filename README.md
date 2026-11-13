# Muhammad Khan — HookMedia.ai Portfolio (Flat Single-Folder Edition)

Static portfolio website for **Muhammad Khan (HookMedia.ai)** built with plain HTML5, CSS3, and vanilla ES6+ JavaScript. Every file sits in the same root folder (no subfolders required) so you can upload everything directly via GitHub's **Choose your files** button.

## How to Run Locally

Open `index.html` directly in any modern browser.

## How to Add a New Video Project

1. Upload your `.mp4` video directly into the root folder alongside `index.html` using a lowercase filename without spaces (keep files **under 25 MB**).
2. Open `main.js` and add a new entry to the `PROJECTS` array at the top of the file.
3. If a video is confirmed client work, add its exact filename to `CLIENT_WORK_FILES` at the top of `main.js` (e.g., `const CLIENT_WORK_FILES = ['25-before-25.mp4'];`).
4. Commit and push to `main`.
