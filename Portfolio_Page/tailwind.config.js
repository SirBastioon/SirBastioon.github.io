/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/SectionWorks.jsx",
    "./src/components/SectionCompany.jsx",
    "./src/components/SectionContact.jsx",
    "./src/components/SectionHero.jsx",
    "./src/components/Header.jsx",
    "./src/components/Footer.jsx",
    "./src/Main.jsx"
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideIn: 'slideIn 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
