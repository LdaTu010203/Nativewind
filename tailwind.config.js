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
          Background: "#000000",
          textTitle: "#FCFAF1",
          textContent: "#E6B31E",
          header: "#222831",
        },
        Light: {
          Background: "#FCFAF1",
          textTitle: "#343434",
          textContent: "#E6B31E",
          header: "#CACACA",
        },
      },
    },
  },
  plugin: [],
};
