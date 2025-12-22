/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Removed darkMode: "class" - we are locking the style manually
  theme: {
    extend: {
      colors: {
        primary: "#13ec5b",        // Neon Green
        background: "#102216",     // Deep Forest Green (Main BG)
        surface: "#1c2e22",        // Slightly lighter green for Cards/Header
        border: "#23482f",         // Subtle green border
        "surface-dark": "#193322", // Background for cards/sections
        "surface-border": "#23482f",   // Slightly lighter for icon backgrounds
        "border-dark": "#326744",
        "text-muted": "#92c9a4",
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