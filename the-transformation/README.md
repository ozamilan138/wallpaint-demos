# Aureline Painting Co. — Demo 02: The Transformation

This is a one-page marketing website for a residential painting business. The before-and-after slider is the main feature. The site sends visitors to WhatsApp and to a phone call.

Stack: React 18, TypeScript, Vite, Tailwind CSS 4 and lucide-react. The site has no backend.

## Run the site

1. Install the packages: `npm install`
2. Start the development server: `npm run dev`
3. Make the production build: `npm run build`
4. Preview the production build: `npm run preview`

## Set the contact details

Open `src/config/business.ts` and set these values:

- `phone`: the full international number, for example `+44 20 7946 0000`.
- `whatsapp`: the full international number.
- `email`: the business email address.
- `serviceAreas`: the towns or districts that the business serves.
- `social`: the full profile URLs.

When a value is empty, the WhatsApp and call buttons open a demo notice. They do not open a broken link. When you set a value, the buttons become real `wa.me` and `tel:` links.

The prefilled WhatsApp messages are in the same file (`messages`). The project cards add the project title and category to the message.

## Replace the demo content before launch

All of the items below are demo content. Do not publish them as real business information.

1. **Photographs.** All photographs are sample images from Unsplash (Unsplash License). They do not show work by Aureline Painting Co. Put real project photographs in `public/images` as `name-800.webp` and `name-1600.webp` (and `name-2400.webp` for full-width images). Then update the file names in `src/data/content.ts`.
2. **Before-and-after pair.** The "before" image (`teal-before`) is a digitally altered copy of the "after" photograph. Replace both with real photographs of one room, taken from the same position.
3. **Projects.** The titles, rooms and descriptions in `projects` are samples.
4. **Services.** The six services are demo categories. Confirm the real list with the owner.
5. **Quality standards.** The five standards are proposals. Confirm each one with the owner.
6. **Proof slots.** `proofSlots` are empty on purpose. Add only verified facts (years, project count, guarantee, reviews).
7. **Testimonials.** The three quotations are placeholders. Use real reviews only with the permission of each customer.

## File structure

- `src/config/business.ts`: contact details and WhatsApp messages.
- `src/data/content.ts`: projects, services, standards, process steps, proof slots, testimonials and photo credits.
- `src/components/`: one component for each section, and shared parts (`ContactAction`, `ContactProvider`, `Picture`).
- `src/lib/contact.ts`: makes the WhatsApp, phone and email links.

## Accessibility and motion

- The slider works with a mouse, with touch, and with the keyboard (arrow keys, Page Up, Page Down, Home and End).
- The hero slideshow has a Pause button. It does not run when the user asks for reduced motion.
- All scroll animations stop when the user asks for reduced motion. Content stays visible if JavaScript does not run.
