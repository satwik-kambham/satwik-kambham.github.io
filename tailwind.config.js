/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.njk",
    "./blog/**/*.{html,njk,md}",
    "./_includes/**/*.{html,njk,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

