/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1050px",
      xl: "1440px",
    },
    extend: {
      // colors: {
        
      // },
    },
  },
  plugins: [],
};