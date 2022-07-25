/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        back: "#0F0F0F",
        gray: "#1d232a",
        violet: "#7C1DC1",
        pink: "#EB54BC",
        pacific: "#0FB6CA",
        turquoise: "#67D8DE",
        emerald: "#02DC85",
        mustard: "#FCD757",

      },
      fontFamily: {
        roboto: ['Roboto' , 'sans-serif'],
        montserrat: ['Montserrat' , 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
};
