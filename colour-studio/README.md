# Aureline Painting Co. — The Colour Studio (demo)

This is a one-page website for a residential painting business. Its main feature is a colour discovery tool. A visitor selects a room, a mood and a palette. Then the visitor sends the choices to the business on WhatsApp.

Stack: React 18, TypeScript, Vite, Tailwind CSS 4 and lucide-react. The site has no backend.

## Run the site

1. Install the packages:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Make the production build:

   ```bash
   npm run build
   ```

4. Show the production build on your computer:

   ```bash
   npm run preview
   ```

## Before launch

The items below are demo content. Replace each one before you publish the site.

1. **Contact details.** Open `src/config/business.ts`. Add the phone number, the WhatsApp number, the email, the service areas and the social links. Use the WhatsApp number in international format, with digits only.
2. **Photos.** All photos are Unsplash demo images. They do not show work by the business. Put real photos in `public/images` and update `src/data/images.ts` and `src/data/content.ts`. See `CREDITS.md`.
3. **Portfolio.** Replace the items in `portfolio` in `src/data/content.ts` with real projects.
4. **Testimonials.** The three cards are placeholders. Replace them only with genuine reviews. Use a customer name only if the customer gives permission.
5. **Services, finishes and principles.** Confirm each item with the business owner, and remove the items that the business does not offer.
6. **Palettes.** The hex values in `src/data/colourDiscovery.ts` are screen colours for inspiration only. They are not matched to a paint brand.

If a contact value is empty, the WhatsApp and call buttons do not open a broken link. They show a demo notice, and the WhatsApp notice shows the message that the button will send.

## Where to edit

| What | File |
| --- | --- |
| Contact details | `src/config/business.ts` |
| Rooms, moods and palettes | `src/data/colourDiscovery.ts` |
| Page text, gallery, services, finishes, portfolio, steps, testimonials | `src/data/content.ts` |
| Image list | `src/data/images.ts` |
| WhatsApp message text | `src/lib/messages.ts` |
| Colours and fonts | `src/index.css` |

## Notes

- The secondary text colour from the brief (`#74766E`) has a contrast of 4.26:1 on the cream background. Small text uses `#62645D` (5.55:1) to meet WCAG AA. Large text can use `#74766E`.
- The hero photos change every 6 seconds. The slideshow stops on hover, on focus, when the tab is hidden, when the visitor selects a look, and when the visitor clicks the pause button. With reduced motion, the slideshow does not move.
