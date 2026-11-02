# TrueCoat Painting Co. — Paint & Plan (demo)

A one-page demo website for a residential and apartment painting business. Visitors explore colour ideas, make a simple painting plan, and send it to the business on WhatsApp.

The site uses React 18, TypeScript, Vite, Tailwind CSS 4 and lucide-react. It has no backend. No form data goes to a server.

## Run the site

```bash
npm install
npm run dev
```

To make the production build and look at it:

```bash
npm run build
npm run preview
```

## Set the business details

Open `src/config/business.ts`. Put the real values in these fields:

1. `phone`: the number for calls, in international format, for example `+44 20 7946 0000`.
2. `whatsapp`: the WhatsApp number with digits only, for example `447946000000`.
3. `email`.
4. `serviceLocations`: the towns or areas that the business serves.
5. `social`: the links to the social media pages.
6. `budgetRanges`: the budget choices in the project form. Use broad ranges in the local currency.

IMPORTANT: Do not put an example number in the config. While a number is empty, each WhatsApp or call button opens a demo notice and does not make a broken link. The notice shows the message that the button will send.

## Where the content is

| What | File |
| --- | --- |
| Business details | `src/config/business.ts` |
| Rooms, styles and colour palettes | `src/data/planner.ts` |
| Services, finishes, inspiration photos, projects, process, values, testimonials | `src/data/content.ts` |
| Photo list (sizes for `srcset`) | `src/data/images.ts` |
| WhatsApp messages | `src/lib/whatsapp.ts` |

## Replace before launch

- **Photos.** All photos are demo images from Unsplash (see `CREDITS.md`). They do not show TrueCoat work. Replace the gallery photos with real project photos. For a real project, set `demo: false` in `src/data/content.ts`. The label then changes from "Sample image" to "TrueCoat project".
- **Testimonials.** The three testimonials are placeholders. Replace them only with real reviews that you have permission to show, and set `placeholder: false`.
- **Services and finishes.** These are demo lists. Keep only the services and finishes that the business offers.
- **Values.** The five values are proposed values. The owner must confirm them.
- **Budget ranges.** The labels in `budgetRanges` are demo values.
- **Credits.** If you keep any Unsplash photo, you can add the photographer name from its Unsplash page.

## How the colour planner works

The visitor selects a room, a style and a palette, in any order. The plan card updates after each choice and shows a drawing of the room in the palette colours. The WhatsApp message contains only the steps that the visitor completed, and it asks for help with the other steps. The Reset button clears all choices.

The project form adds the planner choices to its message. The fixed mobile bar also sends the current plan.

The screen colours are approximate. The site tells visitors to test real paint samples on the wall.

## Accessibility

- The planner choices are native radio buttons. Arrow keys, Tab and Space work.
- A selected choice shows a thick ring, a check mark and the word "Selected", so the state does not depend on colour only.
- Swatch labels use dark or light text from the swatch luminance. On mid-tone swatches the label sits on a white chip, so the contrast stays at 4.5:1 or more.
- The form shows an error summary and an error message next to each field.
- The site respects `prefers-reduced-motion`.
