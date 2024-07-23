/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        Dark: {
          PolyRegular: ["Poly-Regular"],
          PolyItalic: ["Poly-Italic"],
          Background: "#000000",
          White: "#FFFF",
          MainColor: "#F6F7D3",
          Gray: "#495664",
          header: "#929AAB",
        },
      },
    },
  },
  plugin: [],
};
