# Maruti Paint House website (simple Aureline design)

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
6. Add the social media links in `src/config/business.ts`.
7. Confirm the service principles in `src/data/content.ts` with the owner.

## Search engines (SEO)

The production build makes one complete HTML page for each language: `/`, `/hi/` and `/gu/`. Search engines can read the text without JavaScript. Each page has:

- a title and a description with the city (Ahmedabad),
- a canonical link and `hreflang` links to the other two languages,
- link preview tags (`og:`),
- business data for Google (schema.org `HousePainter`), with the name, the phone, the town and the service areas.

The build also writes `sitemap.xml` and `robots.txt`. The code for all of this is in `src/entry-server.tsx` and `scripts/build.mjs`.

On the English page, a short script in `index.html` opens the Hindi or Gujarati page for a visitor who chose that language before, or whose browser uses that language. Old `?lang=` links also go to the correct page.

To change the service area:

1. Change `serviceLocations` and `address` in `src/config/business.ts`.
2. Change `serviceAreas`, `meta`, `hero.eyebrow` and `services.intro` in each file in `src/i18n`.

When the site moves to its own domain:

1. Change `siteUrl` in `src/config/site.ts`.
2. Change `--base` in `.github/workflows/pages.yml` to `/`. Add the domain in the GitHub Pages settings.
3. Put the Google Search Console code in `googleSiteVerification` in `src/config/site.ts`.
4. Submit `sitemap.xml` in Google Search Console.

Note: Search engines read `robots.txt` only at the root of a domain. On the GitHub Pages subfolder, the file has no effect.

## Where to change things

| What | File |
| --- | --- |
| Business name, phone, WhatsApp, email, areas, social links | `src/config/business.ts` |
| Site address and Google Search Console code | `src/config/site.ts` |
| All page text, the page titles and the descriptions (English, Hindi, Gujarati) | `src/i18n/en.ts`, `hi.ts`, `gu.ts` |
| WhatsApp messages | `src/lib/contact.ts` |
| Navigation, services, projects, palettes, principles, steps, testimonials | `src/data/content.ts` |
| Image files and sizes | `src/data/images.ts` |
| Colours and fonts | `tailwind.config.js` |

## Notes

- The colour palettes are illustrative. Screen colours are different from real paint, and the site tells the visitor to test physical samples.
- The site has no scroll animations. With reduced motion, the button and dialog transitions also stop.
- Image paths use `import.meta.env.BASE_URL`, so the site also works in a subfolder, for example on GitHub Pages.
- The secondary text colour is `#6A665F`, not the brief value `#77736C`. The brief value has a contrast of only 3.9:1 on the linen sections.
