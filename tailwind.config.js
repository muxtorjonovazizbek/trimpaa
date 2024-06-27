/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.responsive-text': {
          fontSize: 'clamp(1rem, 2vw + 1rem, 3rem)',
        },
      }

      addUtilities(newUtilities, ['responsive'])
    }
  ],
  plugins: [],
}