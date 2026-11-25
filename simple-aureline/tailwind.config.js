/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F8F6F1',
        linen: '#EEEAE2',
        ink: '#282722',
        stone: '#77736C',
        // The brief value #77736C gives only 3.9:1 on linen. Use muted for small secondary text.
        muted: '#6A665F',
        bronze: '#9A8063',
        // A darker bronze for small text. It keeps a contrast of 4.5:1 on paper and linen.
        'bronze-deep': '#76604A',
        night: '#24231F',
        // Text colours for the dark sections.
        sand: '#B59C7E',
        mist: '#A9A49A',
      },
      fontFamily: {
        // The Noto fonts give the Hindi (Devanagari) and Gujarati letters. Latin letters keep the brand fonts.
        serif: ['"Cormorant Garamond"', '"Noto Serif Devanagari"', '"Noto Serif Gujarati"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', '"Noto Sans Devanagari"', '"Noto Sans Gujarati"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '88rem',
      },
    },
  },
  plugins: [],
}
