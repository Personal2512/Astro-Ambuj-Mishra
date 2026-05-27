/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        // Main dark background
        midnight: "#07111F",

        // Premium teal
        teal: "#0E7490",

        // Soft luxury mint
        seafoam: "#9AE6D8",

        // Royal gold
        gold: "#EAB308",

        // Warm premium white
        cream: "#EAB308",

        // Extra optional colors
        purpleGlow: "#6D28D9",
        cardBg: "#101B2D",
      },
    },
  },
  plugins: [],
};