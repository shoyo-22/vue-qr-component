/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      blue: '#2C7DFA',
      'blue-shade': '#3685FF',
      'dark-navy': '#1F314F',
      gray: '#7D889E',
      'light-gray': '#D5E1EF',
    },
  },
  plugins: [],
};
