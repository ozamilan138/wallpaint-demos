# TrueCoat Painting Co. — Homes Made Beautiful (demo)

This is a one-page demo website for a residential painting company. The page shows the work first, explains the services, and makes it easy to ask for an estimate on WhatsApp or by phone.

The stack is React 18, TypeScript, Vite, Tailwind CSS 4 and lucide-react. The site has no backend.

## Run the site

1. Install the packages: `npm install`
2. Start the development server: `npm run dev`
3. Make the production build: `npm run build`
4. Look at the production build: `npm run preview`

## Connect the real contact details

All contact details are in `src/data/config.ts`. They are empty now.

- While a value is empty, each WhatsApp or call button opens a demo notice. The notice shows the message that the button will send. No broken link opens.
- When you add a number, the buttons become real `wa.me` and `tel:` links.
- Write the full international number, for example `+44 7700 900000`.

## Sections

1. Navigation, with a WhatsApp button and "Request an Estimate".
2. Hero: "See the Difference a Beautifully Painted Home Can Make."
3. Featured transformation: a before-and-after slider. It works with a mouse, a finger and the keyboard (arrow keys, Page Up, Page Down, Home, End).
4. Project gallery with seven filters. The filter is kept in the address, for example `?projects=Kitchens`.
5. Project types: single room, complete apartment, full residential.
6. Services, with a WhatsApp message for each service.
7. Quality standards.
8. How we work (four steps).
9. Options for different budgets. The page shows no prices.
10. Trust section, with values, photo slots and business facts.
11. Testimonials (placeholders).
12. FAQ accordion.
13. Enquiry form. It checks the fields and makes a structured WhatsApp message.
14. Final call to action, footer and a fixed WhatsApp and call bar on phones.

## Where to edit the content

| Content | File |
| --- | --- |
| Business name, phone, WhatsApp, email, service locations, social links | `src/data/config.ts` |
| Projects and project categories | `src/data/projects.ts` |
| Services | `src/data/services.ts` |
| Project types, quality steps, process steps, budget topics, values, business facts | `src/data/content.ts` |
| Testimonials | `src/data/testimonials.ts` |
| FAQ | `src/data/faqs.ts` |
| Photos (file names, alt text, sizes) | `src/data/photos.ts` |
| WhatsApp message text | `src/utils/contact.ts` |

## Replace before launch

- **Contact details.** Add them in `src/data/config.ts`.
- **Photos.** All photos are demo images from Unsplash. They are not TrueCoat projects, and each one shows a "Demo image" label. Some images are realistic 3D renders. `CREDITS.md` gives the source of each photo.
- **Real projects.** Add verified projects to `clientProjects` in `src/data/projects.ts`. When that list has items, the gallery shows them and hides the demo projects. Set `source: 'client'` for each real project.
- **Before-and-after slider.** The "before" image is a digitally changed copy of the "after" photo. Put two real photos of the same room in `public/images`, then change `featured` in `src/components/Transformation.tsx` and set `illustrative: false`.
- **Testimonials.** The three entries are placeholders. Replace them with real reviews, and get permission from each customer first. Set `placeholder: false` for each real review.
- **Business facts.** `trustFacts` in `src/data/content.ts` show "To be confirmed". Add only facts that the business can prove.
- **Services, quality steps, values and FAQ answers.** These are demo text. The owner must confirm them.
- **Service locations and social links.** Add them in `src/data/config.ts`.

## Images

Each photo has an 800 px and a 1600 px WebP file in `public/images`. Full-width photos also have a 2400 px file. Images below the first screen load lazily.
