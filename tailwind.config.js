/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  presets: [require("nativewind/preset")],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PolyRegular: ["Poly-Regular"],
        PolyItalic: ["Poly-Italic"],
      },
      fontSize: {
        dynamic: "var(--font-size-dynamic)",
      },
    },
  },
  plugin: [],
};
