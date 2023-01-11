/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
      'sphone': '362px',
      // => @media (min-width: 640px) { ... }

      'iphone': '377px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },},
  },
  plugins: [],
}
