/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        darker: ['Darker'],
      },
      transitionProperty: {
        'stroke-dasharray': 'stroke-dasharray',
        'stroke-dashoffset': 'stroke-dashoffset',
      },
    },
  },
  plugins: [],
}
