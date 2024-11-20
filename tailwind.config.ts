import { nextui } from "@nextui-org/theme";
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "node_modules/react-responsive-iframe-viewer/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {}
  },
  darkMode: "class",
  plugins: [nextui(), require("@tailwindcss/typography")]
};