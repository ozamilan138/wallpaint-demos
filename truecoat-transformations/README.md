# TrueCoat Painting Co. — Real Transformations (demo)

A one-page website for an affordable, reliable home and apartment painting business. The work is the focus: a "fresh coat" hero, a before-and-after slider and a filterable project gallery. Visitors contact the business through WhatsApp and phone calls.

This is a demo. The photos, the projects, the reviews and the contact details are not real. The list at the end of this file tells you what to replace before launch.

## Run the site

You need Node.js 20 or newer.

1. Install the packages: `npm install`
2. Start the development server: `npm run dev`
3. Make the production build: `npm run build`
4. Look at the production build: `npm run preview`

The stack is React 18, TypeScript, Vite, Tailwind CSS 4 and lucide-react. There is no backend. The fonts (Manrope, Inter and DM Sans) are stored in the project through Fontsource, so the site does not load fonts from Google.

## Where to edit

| What | File |
| --- | --- |
| Business name, phone, WhatsApp, email, service areas, social links | `src/data/config.ts` |
| Services | `src/data/services.ts` |
| Gallery projects (sample and real) | `src/data/projects.ts` |
| Photos (file names, sizes, alt text) | `src/data/photos.ts` |
| Reviews | `src/data/testimonials.ts` |
| Questions and answers | `src/data/faqs.ts` |
| Quality steps, commitments, process steps, navigation | `src/data/content.ts` |
| WhatsApp messages | `src/utils/whatsapp.ts` |

## Contact buttons

- While a phone or WhatsApp value in `src/data/config.ts` is empty, each WhatsApp or call button opens a demo notice. The notice shows the message that the button sends. No broken link opens.
- When you add a number, the buttons become real `https://wa.me/...` and `tel:` links. Use the international format with the country code, for example `+91 98765 43210`.
- Each button sends a message that fits it. A project card adds its title and category. A service link adds the service name.
- The contact form has no backend. It checks the required fields, then builds a WhatsApp message from the answers.

## Photos

Each photo is in `public/images` as WebP files at two or three widths. To add a photo:

1. Make WebP files at 800px and 1400px wide, for example `kitchen-blue-800.webp` and `kitchen-blue-1400.webp`.
2. Put the files in `public/images`.
3. Add an entry in `src/data/photos.ts` with the width, the height and the alt text.

## Before launch: replace these items

1. **Contact details.** Add the phone, WhatsApp number, email, service areas and social links in `src/data/config.ts`.
2. **Gallery photos.** All 15 gallery photos are Unsplash sample photos. Add real finished jobs to `clientProjects` in `src/data/projects.ts`. When that list has one or more projects, the gallery shows only the real projects and the "Sample photo" labels go away.
3. **Before-and-after slider.** The "before" photo is a digitally edited copy of the "after" photo. Replace both with two real photos of the same room (`sliderBefore` and `sliderAfter` in `src/data/photos.ts`). Then remove the "Illustrative demo" note in `src/components/Transformation.tsx`.
4. **Other photos.** The hero, services, quality, reviews and contact photos are also Unsplash samples. See `CREDITS.md`.
5. **Reviews.** The three reviews are placeholders. Add real reviews only with the customer's permission, and set `isPlaceholder` to `false`.
6. **Proof slots.** The "Real TrueCoat projects" and "Verified customer feedback" boxes in `src/components/WhyChooseUs.tsx` are slots. Replace them with real photos and reviews, or remove them.
7. **Content to confirm with the owner.** The service list, the four quality steps, the four commitments, the property and painting types in the form, and the answers to the questions. None of them promises a price, a time or a guarantee. Keep it that way unless the owner confirms one.
8. **Footer line.** Remove "Demo website. Sample photos from Unsplash" in `src/components/Footer.tsx` when the photos are real.
