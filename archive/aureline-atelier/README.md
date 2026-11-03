# Aureline Painting Co. — Demo 01: Aureline Atelier

A single-page marketing website for a residential painting business.
The design follows a premium interior design studio: editorial serif type, warm neutral colours and large photography.

## Run the site

1. Install the packages: `npm install`
2. Start the development server: `npm run dev`
3. Make the production build: `npm run build`
4. Show the production build: `npm run preview`

## Stack

React 18, TypeScript, Vite, Tailwind CSS 3 and lucide-react. The site has no backend.

## Before launch

Do these steps before the site goes live:

1. Add the contact details in `src/config/business.ts`. While `phone` and `whatsapp` are empty, the buttons show a demo notice. They do not open broken links.
2. Confirm the service list with the owner. Edit it in `src/data/content.ts`.
3. Replace the sample photographs in `public/images` with verified client photographs. Update `src/data/images.ts` and `CREDITS.md`.
4. Remove the "Sample image" labels (`DemoTag`) and the demo note in `src/components/FeaturedProjects.tsx`.
5. Replace the placeholder testimonials in `src/data/content.ts` with real client feedback. Get the permission of each client first. Then set `isPlaceholder` to `false`.
6. Add the social media links and the service areas in `src/config/business.ts`.
7. Confirm the service principles in `src/data/content.ts` with the owner.

## Where to change things

| What | File |
| --- | --- |
| Business name, phone, WhatsApp, email, areas, social links | `src/config/business.ts` |
| WhatsApp messages | `src/lib/contact.ts` |
| Navigation, services, projects, palettes, principles, steps, testimonials | `src/data/content.ts` |
| Image files and sizes | `src/data/images.ts` |
| Colours and fonts | `tailwind.config.js` |

## Notes

- The colour palettes are illustrative. Screen colours are different from real paint, and the site tells the visitor to test physical samples.
- The site respects `prefers-reduced-motion`. With reduced motion, the hero photographs do not change and no content moves.
- The secondary text colour is `#6A665F`, not the brief value `#77736C`. The brief value has a contrast of only 3.9:1 on the linen sections.
