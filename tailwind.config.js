/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.njk",
    "./blog/**/*.{html,njk,md}",
    "./_includes/**/*.{html,njk,md}",
  ],
  theme: {
    extend: {
      colors: {
        "paper-light": "#eeefe9",
        "ink-light": "#262626",
        "paper-secondary-light": "#e6e8de",
      },
      fontFamily: {
        "typewriter": ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/icons/cogs.svg')",
        "hero-pattern-dark": "url('/icons/cogs-dark.svg')",
      },
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}

