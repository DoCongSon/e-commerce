/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        primary: ['Inter', 'sans-serif'],
      },
      colors: {
        "buttons": "#DB4444"
      }
    },
  },
  plugins: [],
}

