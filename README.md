# Painting Company Website Demos

This repository contains nine demo websites for a residential painting company. Each demo is a separate React 18, TypeScript, Vite and Tailwind CSS project in its own folder.

| No. | Folder | Brand and concept |
|---|---|---|
| 01 | `aureline-atelier` | Aureline: editorial interior design studio |
| 02 | `the-transformation` | Aureline: portfolio with a before-and-after slider |
| 03 | `colour-studio` | Aureline: colour discovery tool |
| 04 | `truecoat-trusted` | TrueCoat (affordable and reliable): trust and enquiry form |
| 05 | `truecoat-transformations` | TrueCoat (affordable and reliable): portfolio with a slider |
| 06 | `truecoat-paint-plan` | TrueCoat (affordable and reliable): colour planner |
| 07 | `truecoat-complete` | TrueCoat (all budgets): flexible painting options |
| 08 | `truecoat-homes` | TrueCoat (all budgets): portfolio with a slider |
| 09 | `truecoat-your-colours` | TrueCoat (all budgets): planner with a requirements summary |

## Run a demo on your computer

1. Open the folder of the demo, for example `cd truecoat-trusted`.
2. Run `npm install`.
3. Run `npm run dev`.

## Deployment

The workflow in `.github/workflows/pages.yml` builds each demo and publishes the result to GitHub Pages. It starts when you push to the `main` branch. Each demo goes into a subfolder of the site. The page in `site/index.html` links to the nine demos.

## Demo content

- The business names are temporary.
- The contact details are empty. Each WhatsApp or call button shows a demo notice until you add the details in the configuration file of the demo.
- The photos come from Unsplash. They do not show completed projects.
- The testimonials are placeholders.

The README in each folder lists the items that the owner must replace before launch.
