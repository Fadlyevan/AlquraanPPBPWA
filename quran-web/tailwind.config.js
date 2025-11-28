/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5016',
        secondary: '#6BAA3D',
        accent: '#D4AF37',
      },
    },
  },
  plugins: [],
}

