/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        batang: ["Gowun Batang", "serif", ...defaultTheme.fontFamily.sans],
        "sun-batang": ["sun", "sans-serif"],
      },
    },
  },
  plugins: [],
};
