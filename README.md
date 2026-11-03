# Painting Company Website Demos

This repository contains three simple demo websites for a small residential painting company. Each demo is a separate React 18, TypeScript, Vite and Tailwind CSS project in its own folder.

| No. | Folder | Brand |
|---|---|---|
| 01 | `simple-aureline` | Aureline Painting Co. (premium) |
| 02 | `simple-truecoat-trusted` | TrueCoat Painting Co. (affordable and reliable) |
| 03 | `simple-truecoat-complete` | TrueCoat Painting Co. (professional for all budgets) |

The folder `archive/` contains the nine first versions of the demos. These versions are larger and have more features. The workflow does not publish them.

## Run a demo on your computer

1. Open the folder of the demo, for example `cd simple-truecoat-trusted`.
2. Run `npm install`.
3. Run `npm run dev`.

## Deployment

The workflow in `.github/workflows/pages.yml` builds the three demos and publishes the result to GitHub Pages. It starts when you push to the `main` branch. Each demo goes into a subfolder of the site. The page in `site/index.html` links to the three demos.

## Demo content

- The business names are temporary.
- The contact details are empty. Each WhatsApp or call button shows a demo notice until you add the details in the configuration file of the demo.
- The photos come from Unsplash. They do not show completed projects.
- The testimonials are placeholders.

The README in each folder lists the items that the owner must replace before launch.
