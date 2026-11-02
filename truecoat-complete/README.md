# TrueCoat Painting Co. — The Complete Painting Solution (demo)

This is a one-page demo website for a residential and apartment painting business.
The positioning is "professional for all budgets".
The site has no backend. All enquiries go through WhatsApp or a phone call.

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
   - Register each image in `src/data/images.ts`.
   - Add real projects to `clientProjects` in `src/data/projects.ts` with `isDemo: false`. Then remove the items in `demoProjects`.
   - When no demo project remains, the "Demo content" note and the "Demo image" labels go away.
3. **Testimonials.** The three testimonials in `src/data/content.ts` are placeholders. Replace them with real reviews. Get permission from each customer before you show a name.
4. **Services.** Confirm the six services in `src/data/services.ts`. Remove each service that the business does not provide.
5. **Statements.** Confirm the text in `src/data/content.ts`: the introduction highlights, the quality steps, the reasons, the process steps and the FAQ answers.
   - The reason "Residential project experience" shows "To be confirmed by the owner". Replace its text with verified details, then set `pending: false`.
6. **Painting options.** The three options in `src/data/options.ts` are ways to describe a project. They are not packages. Do not add prices unless the owner wants to publish them.

## Where the content is

| File | Content |
| --- | --- |
| `src/data/config.ts` | Business name, contact details, service locations, social links |
| `src/data/services.ts` | Service cards |
| `src/data/options.ts` | Painting options, the floor plan rooms, the suggestion rule |
| `src/data/projects.ts` | Portfolio categories, demo projects, client projects |
| `src/data/content.ts` | Navigation, hero points, introduction, quality steps, reasons, process, testimonials, FAQ |
| `src/data/images.ts` | Image list and responsive image sizes |
| `src/lib/whatsapp.ts` | WhatsApp and phone links, and all prefilled messages |

## Features

- A floor plan of an example home in the "Different Homes. Different Needs." section. The visitor taps the rooms to paint. The plan shows the closest option, and the marked rooms go into the WhatsApp messages and the enquiry form.
- An enquiry form with validation. It makes a structured WhatsApp message. It does not send data to a server.
- Prefilled WhatsApp messages for each service, option and project.
- A gallery with category filters.
- An accessible FAQ accordion, a mobile menu with a focus trap, and a fixed contact bar on small screens.
- Motion respects `prefers-reduced-motion`.

## Known limits

- The gallery filter does not change the page URL.
- The fonts load from Google Fonts.
- There is no video on the page.
