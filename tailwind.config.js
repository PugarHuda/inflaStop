import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
      },
    },
  },
  darkMode: "class", // mode gelap diaktifkan dengan kelas
  plugins: [nextui()], // panggil plugin NextUI
};
