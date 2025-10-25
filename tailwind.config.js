/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./catalog.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5F3F',
        accent: '#4A8B5C',
        'dark-green': '#1A3A2A',
        background: '#FAFAF8',
        text: '#2C2C2C',
        light: '#F5F5F0',
      },
      fontFamily: {
        'heading': ['Cormorant Garamond', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
