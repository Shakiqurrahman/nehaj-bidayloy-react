/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@ckeditor/ckeditor5-react/**/*",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#002E5D",
          white: "#FFFFF0",
          dark: "#0A0C10",
          golden: "#BA7901",
        },
        secondary: {
          gray: "#B3B3B3",
          blue: "#90CAF9",
          "charcoal-gray": "#444444",
        },
        accent: {
          golden: "#D4AF37",
          tint: "#FFFDF4",
        },
        alert: {
          green: "#4CAF50",
          orange: "#FF9800",
          red: "#F44336",
        },
        light: {
          dark: "#424345",
          grey: "#D8D8D8",
        },
        dark: {
          grey: "#7D7E80",
        },
        blue: {
          grey: "#95A1AD",
        },
        ivory: {
          grey: "#C2BBA8",
        },
        grey: "#B9B9B9",
        onubadh: "#3A0B53",
        probondho: "#005E51",
        notes: "#646666",
        history: "#530000",
        sahitto: "#044607",
        arts: "#460024",
        cinema: "#003D4B",
        "dhormo-tottho": "#482E00",
      },
      fontFamily: {
        niladri: ['"Niladri", sans-serif'],
        "mainak-signature": ['"Mainak", sans-serif'],
        notoserif: ['"Noto Serif Bengali", sans-serif'],
        abhaya: ['"AbhayaLibre", sans-serif'],
        blinker: ['"Blinker", sans-serif'],
        lexend: ['"Lexend", sans-serif'],
        "syne-mono": ['"Syne Mono", sans-serif'],
      },
    },
  },
  plugins: [],
};
