/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        "brand-bg": "#EFFFFB",      // Light Mint Background
        "brand-green": "#50D890",   // Primary Action Color
        "brand-blue": "#4F98CA",    // Secondary Accent
        "brand-dark": "#272727",    // Main Text Color
        "brand-light": "#FFFFFF",   // White surfaces
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        lg: "2rem",
        xl: "3rem",
      },
    },
  },
  plugins: [],
}