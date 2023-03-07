const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ["sans"]: [
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
        ["comfort"]: "Comfortaa, cursive",
        ...defaultTheme.fontFamily.sans,
      },
      colors: {
        light: {
          primary: "",
          secondary: "",
          background: "#F9F8F7",
        },
        dark: {
          primary: "",
          secondary: "",
          background: "#151928",
        },
      },
    },
  },
  plugins: [],
};
