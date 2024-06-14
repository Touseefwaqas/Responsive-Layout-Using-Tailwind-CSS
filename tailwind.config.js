/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        "raleway": ["Raleway", 'sans-serif']
      }, 
      
      colors: {
        "dark-blue-bg": '#0c122c',
        "light-blue-bg": "#1e2c69",
        "loading-dark": "#151e47",
        "loading-bar-color-pink": "#ffa096",
        "loading-bar-color-dark-pink": "#fa4c91"
      },

      borderRadius: {
        '4xl': '6rem'
      }, 

      width: {
        '100': '26rem'
      }
    },
  },
  plugins: [],
}

