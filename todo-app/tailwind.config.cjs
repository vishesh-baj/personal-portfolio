/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      monsterrat: ["Montserrat", "sans serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    theme: ["dark"],
  },
};
