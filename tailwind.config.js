/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        leagueSpartan: 'League Spartan, sans-serif'
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700'
      },
      colors: {
        veryDarkBlue: '#1B1D23',
        darkGray: '#60636D',
        mediumGrey: '#7D828F',
        lightGrey: '#C8CCD8',
        veryLightGrey: '#EEEFF4',
        red: '#DF5656',
      }
    },
  },
  plugins: [],
}

