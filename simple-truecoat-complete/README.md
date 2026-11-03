# TrueCoat Painting Co. — Simple Site (demo)

This is a short, one-page demo website for a small residential and apartment painter.
The positioning is "professional for all budgets", from one room to the whole home.
The site has no backend. All enquiries go through WhatsApp or a phone call.

This version is a simpler copy of the `truecoat-complete` demo. It shows only what a visitor needs.

## Page sections

1. Navigation, with a WhatsApp button and "Request an Estimate".
2. Hero: one photo, the headline, two buttons and three short points.
3. Services: six compact cards with icons.
4. Painting options: three simple cards. They have no prices.
5. Our Work: four demo photos.
6. How we work: four steps and a short list of reasons.
7. Testimonials: two placeholders.
8. FAQ: five questions.
9. Contact: WhatsApp and Call buttons, and a short enquiry form.
10. Footer, and a fixed WhatsApp and Call bar on small screens.

## Run the site

1. Install the packages: `npm install`
2. Start the development server: `npm run dev`
3. Make the production build: `npm run build`
4. Preview the production build: `npm run preview`

Stack: React 18, TypeScript, Vite, Tailwind CSS 4 and lucide-react.

## Before launch: items that the owner must replace

1. **Contact details.** Open `src/data/config.ts`. Add the phone number, the WhatsApp number, the email, the service locations and the social links.
   - While the phone or WhatsApp number is empty, each contact button opens a demo notice. The notice shows the message that the button will send.
   - When you add a number, the buttons become real `wa.me` and `tel:` links. You do not need to change other files.
2. **Photographs.** All photographs are Unsplash sample images (see `CREDITS.md`). They are not TrueCoat projects.
   - Add real project photographs to `public/images` as WebP files at 640, 1024 and 1600 px wide.
   - Add each image to `src/data/images.ts`.
   - Add real projects to `clientProjects` in `src/data/projects.ts` with `isDemo: false`. When `clientProjects` has items, the gallery shows only those items, and the demo note goes away.
3. **Testimonials.** The two testimonials in `src/data/content.ts` are placeholders. Replace them with real reviews. Get permission from each customer before you show a name. If the list is empty, the section does not show.
4. **Services.** Confirm the six services in `src/data/services.ts`. Remove each service that the business does not provide.
5. **Statements.** Confirm the steps, the reasons and the FAQ answers in `src/data/content.ts`.
   - The reason "Residential project experience" shows "(to be confirmed by the owner)". Replace it with verified details, then set `pending: false`.
6. **Painting options.** The three options in `src/data/options.ts` are ways to describe a project. They are not packages. Do not add prices unless the owner wants to publish them.

## Where the content is

| File | Content |
| --- | --- |
| `src/data/config.ts` | Business name, contact details, service locations, social links |
| `src/data/services.ts` | Service cards and their icons |
| `src/data/options.ts` | The three painting options |
| `src/data/projects.ts` | Demo projects and client projects |
| `src/data/content.ts` | Navigation, hero points, steps, reasons, testimonials, FAQ |
| `src/data/images.ts` | Image list and responsive image sizes |
| `src/lib/whatsapp.ts` | WhatsApp and phone links, and all prefilled messages |

## Image paths

The image paths use `import.meta.env.BASE_URL`. Keep this pattern, because the site can run in a subfolder (for example on GitHub Pages).

## Known limits

- The fonts load from Google Fonts.
