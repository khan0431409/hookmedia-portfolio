# Muhammad Khan — HookMedia.ai Portfolio

Static portfolio website for **Muhammad Khan (HookMedia.ai)** built with plain HTML5, CSS3, and vanilla ES6+ JavaScript. Zero frameworks, build tools, or external JavaScript libraries.

## How to Run Locally

Because the site uses relative paths and plain static files, you can either:
1. Open `index.html` directly in any modern browser, or
2. Serve the folder locally (for example, with VS Code Live Server or `npx serve .`).

## How to Add a New Video Project

1. Upload your MP4 video into `assets/videos/` using a lowercase filename without spaces (e.g., `new_product_ad.mp4`). Keep files **under 25 MB** for fast loading and GitHub repository limits.
2. Open `js/main.js` and add a new object to the `PROJECTS` array at the top of the file:
   ```js
   {
     id: 'new-product-ad',
     order: 11,
     file: 'new_product_ad.mp4',
     title: 'New Product Ad',
     description: 'A short one-line summary of the video ad.',
     category: 'concept',
     aspect: '9:16',
     duration: '15s',
     disclaimer: '',
     featured: false
   }
   ```
3. If a video is confirmed client work, add its exact filename to `CLIENT_WORK_FILES` at the top of `js/main.js` (e.g., `const CLIENT_WORK_FILES = ['25-before-25.mp4'];`). Only files listed there receive the **Client project** badge.
4. Commit and push to `main`.

## How to Change the Live Domain

1. Update `SITE_URL` at the top of `js/main.js`.
2. Update the `<link rel="canonical">`, `og:url`, `og:image`, and `twitter:image` URLs in `index.html`.
3. Update the `<loc>` URL in `sitemap.xml` and the `Sitemap:` URL in `robots.txt`.

## Upload Limits & Security Notes

- GitHub recommends keeping individual files **under 25 MB** (hard limit 100 MB).
- Never commit `.zip`, `.pdf`, `.env`, private source files, or API keys—`.gitignore` is configured to exclude them.
