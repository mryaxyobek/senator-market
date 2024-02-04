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

      maxHeight: {
        300: '300px',
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
        38: '38px',
        34: '34px',
        30: '30px',
      },
      
      lineHeight: {
        56: '56px',
        48: '48px',
        42: '42px',
        26: '26px',
        22: '22px',
      },


      // border
      borderRadius: {
        18: '18px',
      }
    },

    screens: {
      1350: '1350px',
      1140: '1140px',
      1100: '1100px',
      950: '950px',
      800: '800px',
      768: '768px',
      650: '650px',
      550: '550px',
      500: '500px',
      470: '470px',
    }
  },
  plugins: [],
}