/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "Sans Serif"],
        poppins: ["Poppins", "Sans Serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
