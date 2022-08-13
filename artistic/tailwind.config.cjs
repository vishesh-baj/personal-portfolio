/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "Sans Serif"],
      },
      colors: {
        primaryBlack: "#0c0f0a",
        primaryRed: "#ff206e",
        primaryYellow: "#fbff12",
        primaryBlue: "#41ead4",
        primaryWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};
