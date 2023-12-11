/** @type {import('tailwindcss').Config} */
// https://uicolors.app/create
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#f8f9fa",
        dark: "#212529",
        primary: {
          50: "#f3f6fb",
          100: "#e3ebf6",
          200: "#cdddf0",
          300: "#abc7e5",
          400: "#83aad7",
          500: "#7196d0",
          600: "#5175bf",
          700: "#4763ae",
          800: "#3f528e",
          900: "#364772",
          950: "#252c46",
        },
        secondary: {
          50: "#fef4f2",
          100: "#fde8e3",
          200: "#fcd5cc",
          300: "#f9b7a8",
          400: "#f38d76",
          500: "#ea7257",
          600: "#d54c2d",
          700: "#b33d22",
          800: "#943520",
          900: "#7b3221",
          950: "#43160c",
        },
      },
    },
  },
  plugins: [],
};
