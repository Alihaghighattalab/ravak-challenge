/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        "primary-color": "#015699",
        "primary-color-dark": "#01457a",
        "secondry-color": "#F7F7F9",
        "sidebar-items-text-color": "#777577",
        "selected-sidebar-items": "#E6E8EA",
        "selected-sidebar-items-text-color": "#11212D",
      }
    },
  },
  plugins: [],
}

