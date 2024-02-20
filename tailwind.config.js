/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brown': '#2E1012',
        'yellow' : '#F3CC4D',
      },
      fontFamily:{
        font: ["DM Serif Display", 'serif']
      }
    },
  },
  plugins: [],
}

