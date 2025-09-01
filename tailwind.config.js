// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#1D4ED8', // Example primary color (blue)
//         secondary: '#10B981', // Example secondary color (green)
//       },
//       fontFamily: {
//         sans: ['Helvetica', 'Arial', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
