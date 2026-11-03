# TrueCoat Painting Co. — Your Home, Your Colours (demo)

This is a one-page demo website for a residential painting business. Visitors explore colours, plan their painting project, and send their choices to the business on WhatsApp.

The site uses React 18, TypeScript, Vite, Tailwind CSS 4 and lucide-react. It has no backend. The planner choices stay in the browser memory only.

## Run the site

1. Install the packages:

   ```
   npm install
   ```

2. Start the development server:

   ```
   npm run dev
   ```

3. To make and test the production build, run:

   ```
   npm run build
   npm run preview
   ```

## What the page contains

1. Navigation, with a mobile menu and a WhatsApp button.
2. Hero, with six paint chips. A chip starts the planner with that palette.
3. Colour planner in five steps: room, mood, palette, project details and summary. Every step is optional.
4. Inspiration gallery, with a filter for five types of space. The filter is kept in the address, for example `?space=kitchen`.
5. Services.
6. Paint finishes.
7. How it works, in four steps.
8. Why choose us.
9. Testimonials (placeholders).
10. Questions and answers.
11. Final call to action, with an enquiry form.
12. Footer and a fixed WhatsApp and Call bar on small screens.

## Before launch: what the owner must change

### Contact details

Open `src/data/config.ts` and add:

- the phone number,
- the WhatsApp number,
- the email address,
- the service locations,
- the links to the social media accounts.

While the phone or WhatsApp number is empty, the buttons show a demo notice and do not open a broken link. When you add a number, the buttons become real `wa.me` and `tel:` links.

### Photos

All photos are demo images from Unsplash. They do not show TrueCoat projects. `CREDITS.md` lists the source of each photo.

- To add real project photos, put the files in `public/images`. Then add each project to `clientProjects` in `src/data/projects.ts`. When this list has items, the gallery shows only the real projects.
- Remove the "Demo image" labels and the demo text in the gallery introduction (`src/components/InspirationGallery.tsx`).
- Replace the other photos (hero, rooms, moods, services and finishes) in `src/data/images.ts` and the data files.

### Content to confirm

- `src/data/services.ts`: the services. Remove a service that the business does not offer.
- `src/data/content.ts`: the paint finishes, the process steps and the service principles. Show only the finishes that the business offers.
- `src/data/faqs.ts`: the answers. Add details such as areas and visit arrangements.
- `src/data/content.ts`: the testimonials. These are placeholders. Replace them only with real reviews that customers give permission to publish.
- `src/data/planner.ts`: the budget options. They are broad words on purpose. Do not add prices.

### Colours

The palette colours in `src/data/palettes.ts` are for inspiration only. They are not codes of a paint brand. The page tells visitors that screen colours are approximate and that they must test real paint samples.

## Where the code is

| Folder or file | Contents |
| --- | --- |
| `src/data/` | All content and settings: `config.ts`, `palettes.ts`, `moods.ts`, `roomCategories.ts`, `planner.ts`, `services.ts`, `projects.ts`, `faqs.ts`, `content.ts`, `images.ts` |
| `src/lib/planner.tsx` | The planner state (React context) |
| `src/lib/messages.ts` | The WhatsApp messages and the summary rows |
| `src/lib/contact.ts` | The WhatsApp and phone links |
| `src/lib/colour.ts` | The contrast calculation for swatch labels |
| `src/components/planner/` | The planner steps, the palette cards and the summary |
| `src/components/` | The page sections |
