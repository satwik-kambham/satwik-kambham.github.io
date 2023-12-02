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
        "paper-dark": "#262626",
        "ink-light": "#262626",
        "ink-dark": "#eeefe9",
        "ink-muted-light": "#4c4c4c",
        "ink-muted-dark": "#bbbcb7",
        "paper-secondary-light": "#e6e8de",
        "paper-secondary-dark": "#393938",
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

