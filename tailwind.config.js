/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'stroke-dasharray': 'stroke-dasharray',
        'stroke-dashoffset': 'stroke-dashoffset',
      },
      aspectRatio: {
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
