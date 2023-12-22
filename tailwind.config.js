/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        gold: "#FFD700",
        champagne: "#f4e6ce",
        burgundy: "#800020",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      maxWidth: {
        sectionWidth: "1480px",
      },
      padding: {
        sectionPX: "80px",
        sectionPY: "80px",
        heroPY: "128px",
      },
    },
  },
  plugins: [],
};
