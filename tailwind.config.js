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
      padding: {
        heroXl: "128px",
        heroLg: "80px",
      },
    },
  },
  plugins: [],
};
