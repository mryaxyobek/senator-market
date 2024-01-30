/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: 'blue',
        },
      },


      // w, h
      maxWidth: {
        1640: '1640px',
      },


      // transfrom, z
      zIndex: {
        1640: '1640px',
      }
    },
  },
  plugins: [],
}