/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html", "./src/**/*.jsx","./src/**/*.tsx" ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/img.png')",
      },
    },
  },
  plugins: [],
}
