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
        heroXl: "186px",
        heroLg: "80px",
      },
      screens: {
        tall: { raw: "(min-height: 678px) and (max-width: 640px)" },
        tallsm: { raw: "(max-height: 600px) and (max-width: 768px)" },
        tallmd: { raw: "(min-height: 915px) and (max-width: 1024px)" },
      },
    },
  },
  plugins: [],
};
