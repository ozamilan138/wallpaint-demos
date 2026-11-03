# TrueCoat Painting Co. — simple demo website

This is a short one-page website for a small residential painting business.
The site gets visitors to send a WhatsApp message or to make a phone call.

This version is the simple version of the "Trusted Choice" demo. It shows only what a visitor needs. It has fewer sections, fewer photos and no scroll animation.

This is a demo. The contact details, the photos, the reviews and some of the text are placeholders.

## Page sections

1. Navigation, with a call button and a menu on phones.
2. Hero: one photo, the headline, two buttons and three short statements.
3. Our Services: six services with icons. Each service has an "Ask About This" WhatsApp link.
4. About Us: a short paragraph, the four benefits and the service areas.
5. Our Work: four photos.
6. How It Works: four steps.
7. What Customers Say: up to two reviews.
8. Questions Before You Start: five questions.
9. Contact: WhatsApp and Call buttons, the contact details and the estimate form.
10. Footer, and a WhatsApp and Call bar on phones.

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
- No backend. The estimate form writes a WhatsApp message.

## Where to change the content

| What | File |
| --- | --- |
| Business name, phone, WhatsApp, email, service areas, social links | `src/data/config.ts` |
| The default WhatsApp message | `src/data/config.ts` |
| Services and their icons | `src/data/services.ts` |
| Project photos | `src/data/projects.ts` |
| Reviews | `src/data/testimonials.ts` |
| Navigation, hero statements, benefits, steps, questions, form options | `src/data/content.ts` |
| Hero photo | `src/data/images.ts` and `public/images` |
| WhatsApp and phone links, message text | `src/utils/whatsapp.ts` |

## Contact behaviour

- While the phone or WhatsApp number in `src/data/config.ts` is empty, each WhatsApp or call button opens a demo notice. The notice shows the message that the button will send. The site makes no broken `wa.me` or `tel:` links.
- When you add the numbers, the same buttons become real links. Use the international format, for example `+44 7700 900123`.
- The service links add the name of the service to the message.
- The estimate form checks the required fields. Then it opens WhatsApp with one structured message.

## Before launch, the owner must replace these items

1. Add the phone number, the WhatsApp number, the email, the service areas and the social links in `src/data/config.ts`.
2. Replace the demo photos. Add real projects to `realProjects` in `src/data/projects.ts`. When that list has items, the site shows only the real projects, and the demo note goes away.
3. Replace the two placeholder reviews in `src/data/testimonials.ts` with real reviews. Get permission from each customer before you show a name. Set `isPlaceholder` to `false`. The site shows a maximum of two reviews.
4. Confirm the service list, the hero statements ("Residential Painting", "Clear Estimates", "Dependable Service") and the four benefits.
5. Read the answers in `src/data/content.ts`. Change them to match the real policies of the business.
6. Remove the demo notes: the line under the services, and the "Demo website" text in the footer.

## Notes

- Photo sources are in `CREDITS.md`.
- Small grey text on the light green sections uses `#5E6760`, not the brief colour `#6B746D`. On `#F0F3ED`, the brief colour gives only 4.32:1 contrast. The AA minimum is 4.5:1.
- Image paths use `import.meta.env.BASE_URL`, so the site also works in a subfolder, for example on GitHub Pages.
- The mobile contact bar is fixed at the bottom of the screen. The footer has a bottom padding that is taller than the bar, so the bar does not cover the page content.
