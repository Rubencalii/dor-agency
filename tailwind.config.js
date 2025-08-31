/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37",
        black: "#000000",
      },
      fontFamily: {
        elegant: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [],
};
