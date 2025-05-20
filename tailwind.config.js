const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/Pages/**/*.{js,ts,jsx,tsx}',
    './src/PageComponents/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xxs: '320px',
      xs: '480px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        title: ['Roboto', 'sans-serif'],
        text: ['Open Sans', 'sans-serif']
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        60: '0.6',
        70: '0.7',
        80: '0.8'
      },
      height: {
        '11rem': '11rem',
        '14rem': '14rem',
        '18rem': '18rem',
        '20rem': '20rem',
        '22rem': '22rem',
        '23rem': '23rem',
        '24rem': '24rem',
        '28rem': '28rem',
        '30rem': '30rem',
        '36rem': '36rem',
        '38rem': '38rem',
        '64rem': '64rem',
        '66rem': '66rem',
        '68rem': '68rem',
        '60vh': '60vh',
        '80vh': '80vh',
        '100vh': '100vh'
      },
      width: {
        '20rem': '20rem'
      },
      colors: {
        primary: 'var(--primary-color)',
        primaryText: 'var(--text-color)',
        background: 'var(--bg-color)',
        cardBackground: '#2e2e2e'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
