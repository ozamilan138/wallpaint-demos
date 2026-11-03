# Aureline Painting Co. — Simple version

A short, single-page website for a small residential painting business.
This version is a simpler copy of the Aureline Atelier demo. It keeps the warm neutral colours and the serif type, but it shows only what a visitor needs.

## Sections

1. Navigation, with a simple menu on phones.
2. Hero: one photograph, the headline and two buttons.
3. Our Services: six services as a short list. Each service has a WhatsApp link.
4. Our Work: four sample photographs.
5. Colour Ideas: four palettes. Each palette has a WhatsApp button.
6. About: how it works, why choose us, and up to two testimonials.
7. Contact: WhatsApp and Call buttons, and the contact details.
8. Footer.

On phones, a fixed bar shows WhatsApp and Call.

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
3. Replace the sample photographs in `public/images` with real client photographs. Update `src/data/images.ts` and `CREDITS.md`.
4. Remove the "Sample image" labels (`DemoTag`) and the demo note in `src/components/OurWork.tsx`.
5. Add real testimonials in `src/data/content.ts`. Get the permission of each client first. Set `isPlaceholder` to `false`. When one real testimonial exists, the site shows only the real ones.
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
- The site has no scroll animations. With reduced motion, the button and dialog transitions also stop.
- Image paths use `import.meta.env.BASE_URL`, so the site also works in a subfolder, for example on GitHub Pages.
- The secondary text colour is `#6A665F`, not the brief value `#77736C`. The brief value has a contrast of only 3.9:1 on the linen sections.
