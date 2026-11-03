# TrueCoat Painting Co. — demo website

A one-page website for a residential and apartment painting business.
The site gets visitors to send a WhatsApp message or to make a phone call.

This is a demo. The contact details, the photos, the reviews and some of the text are placeholders.

## Run the site

```
npm install
npm run dev
```

To make and check the production build:

```
npm run build
npm run preview
```

## Stack

- React 18, TypeScript, Vite
- Tailwind CSS 4 (with the `@tailwindcss/vite` plugin)
- lucide-react for icons
- No backend. The enquiry form writes a WhatsApp message.

## Where to change the content

| What | File |
| --- | --- |
| Business name, phone, WhatsApp, email, service areas, social links | `src/data/config.ts` |
| The default WhatsApp message | `src/data/config.ts` |
| Services | `src/data/services.ts` |
| Project gallery | `src/data/projects.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Navigation, hero statements, benefits, process steps, FAQ, form options | `src/data/content.ts` |
| Hero and section photos | `src/data/images.ts` and `public/images` |
| WhatsApp and phone links, message text | `src/utils/whatsapp.ts` |

## Contact behaviour

- While the phone or WhatsApp number in `src/data/config.ts` is empty, each WhatsApp or call button opens a demo notice. The notice shows the message that the button will send. The site makes no broken `wa.me` or `tel:` links.
- When you add the numbers, the same buttons become real links. Use the international format, for example `+44 7700 900123`.
- The service links and the project cards add the service or the project category to the message.
- The enquiry form checks the required fields. Then it opens WhatsApp with one structured message.

## Before launch, the owner must replace these items

1. Add the phone number, the WhatsApp number, the email, the service areas and the social links in `src/data/config.ts`.
2. Replace the demo photos. Add real projects to `realProjects` in `src/data/projects.ts`. When that list has items, the gallery shows only the real projects and the demo notice goes away.
3. Replace the three placeholder testimonials in `src/data/testimonials.ts` with real reviews. Get permission from each customer before you show a name. Set `isPlaceholder` to `false`.
4. Confirm the service list, the hero statements ("Residential Painting", "Clear Estimates", "Dependable Service") and the four benefits.
5. Read the FAQ answers in `src/data/content.ts`. Change them to match the real policies of the business.
6. Remove the demo notes: the line under the services, and the "Demo website" text in the footer.

## Notes

- Photo sources are in `CREDITS.md`.
- Small grey text on the light green sections uses `#5E6760`, not the brief colour `#6B746D`. On `#F0F3ED`, the brief colour gives only 4.32:1 contrast. The AA minimum is 4.5:1.
- The mobile contact bar is fixed at the bottom of the screen. The footer has a bottom padding that is taller than the bar, so the bar does not cover the page content.
