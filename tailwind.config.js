/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          light: '#f8fafc', // slate-50
          DEFAULT: '#0f172a', // slate-900
          primary: '#2563eb', // blue-600
          accent: '#1e40af', // blue-800
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}