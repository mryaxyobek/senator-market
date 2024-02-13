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
          red: '#C70909',
          blue: '#1b56ff',
        },
        'card-bg': '#1b234d',
      },

      // w, h
      width: {
        72: '72px'
      },

      height: {
        72: '72px'
      },

      maxWidth: {
        1640: '1440px',
      },

      maxHeight: {
        300: '300px',
      },


      // flex & grid
      gridTemplateColumns: {
        15: 'repeat(15,1fr)'
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
      // default
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // other
      1350: '1350px',
      1140: '1140px',
      1100: '1100px',
      950: '950px',
      800: '800px',
      768: '768px',
      715: '715px',
      650: '650px',
      550: '550px',
      500: '500px',
      470: '470px',
      400: '400px',
      350: '350px',
    }
  },
  plugins: [],
}