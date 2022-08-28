/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sea: ["Seaweed Script", "cursive"],
    },
    extend: {},
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
