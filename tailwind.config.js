/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightCyan: 'hsl(193, 38%, 86%)',
        neonGreen: 'hsl(150, 100%, 66%)',
        grayishBlue: 'hsl(217, 19%, 38%)',
        darkGrayishBlue: 'hsl(217, 19%, 24%)',
        darkBlue: 'hsl(218, 23%, 16%)'
      },
      fontFamily: {
        sans: [ 'Manrope', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        quote: '28px'
      },
      screens: {
        mobile: '375px',
        desktop: '1440px'
      }
    },
  },
  plugins: [],
}
