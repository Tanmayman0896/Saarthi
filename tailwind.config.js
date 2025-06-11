/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lavender: {
          DEFAULT: '#E6E6FA',
          dark: '#B57EDC',
          light: '#F3E8FF',
        },
      },
    },
  },
  plugins: [require("daisyui")],
}
