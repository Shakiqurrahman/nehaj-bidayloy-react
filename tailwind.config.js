/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#b22945",
          100: "#fce7e8", //button - disabled bg
          200: "#f8d3d7",
          300: "#f2afb4",
          400: "#ea828d",
          500: "#de5567", //button - default
          600: "#c9354f",
          700: "#b22945", //button - hover
          800: "#8e233d",
          900: "#7a2138",
        },
        secondary: {
          DEFAULT: "#523633",
        },
        accent: {
          DEFAULT: "#C2894C",
        },
      },
      boxShadow: {
        box: "0 0 10px 1px rgba(0,0,0,0.1)",
        "box-lg": "0 0 15px 1px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
