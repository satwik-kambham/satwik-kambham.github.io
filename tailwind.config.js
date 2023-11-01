/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.njk",
    "./blog/**/*.{html,njk,md}",
    "./_includes/**/*.{html,njk,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}

