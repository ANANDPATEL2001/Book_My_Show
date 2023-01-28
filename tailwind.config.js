/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: { DEFAULT: '#6B7280', 50: '#CDD0D5', 100: '#C2C5CC', 200: '#ACB0BA', 300: '#969BA7', 400: '#7F8694', 500: '#6B7280', 600: '#515761', 700: '#383C43', 800: '#1E2024', 900: '#050506' },

        premier: { DEFAULT: '#1E2024', 50: '#B7BBC3', 100: '#ACB0BA', 200: '#969BA7', 300: '#7F8694', 400: '#6B7280', 500: '#515761', 600: '#383C43', 700: '#1E2024', 800: '#050506', 900: '#000000' },
      }
    },
  },
  plugins: [],
}