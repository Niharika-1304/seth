/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F3D2B", // Deep Green
        neutral: "#2B2B2B", // Charcoal
        background: "#F4F1EA", // Cream
        accent: "#C2A46D", // Muted Gold
        lime: "#BFFF00", // Vibrant Lime for buttons and highlights
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '4rem',
        'xl': '8rem',
      }
    },
  },
  plugins: [],
}
