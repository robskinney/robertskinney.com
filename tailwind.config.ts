import { heroui } from "@heroui/theme";
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "node_modules/react-responsive-iframe-viewer/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {}
  },
  darkMode: "class",
  plugins: [heroui(), require("@tailwindcss/typography")]
};