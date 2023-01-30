/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'primary': '#191612',
        'primary2': '#232323',
        'secondary': '#e65100',
        'text': '#333333',
        'accent': '#ffb74d',
        'lightgrey': '#ededed',
        'bg-lightgrey': '#fbfbfb',
        'bg-lightgrey2': '#f7f7f7',
        'bg-yellow': '#ffa727',
        'bg-black': '#666666',
        'grey': '#989898',
      }
    },
  },
  plugins: [],
}
