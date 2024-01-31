/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#040D12',
          green: '#07AE6E',
          gray: '#B1B1B1',
          white: '#ffffff',
        },
      },


      // w, h
      maxWidth: {
        1640: '1640px',
      },


      // transfrom, z
      zIndex: {
        1640: '1640px',
      },


      // background      
      backgroundOpacity: {
        12: '0.12',
      },


      // font
      fontSize: {
        44: '44px',
      },

      lineHeight: {
        56: '56px',
        26: '26px',
        22: '22px',
      },


      // border
      borderRadius: {
        18: '18px',
      }
    },

    screens: {
      768: '768px',
    }
  },
  plugins: [],
}