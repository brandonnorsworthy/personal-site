const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mobile': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'global': {
        'primary': '#1A1A1A',
        'primary-highlight': '#FFFFFF',
        'primary-shadow': '#000000',
        'secondary': '#cb7533',
        'secondary-highlight': '#FFFFFF',
        'secondary-shadow': '#8a4b1d',
        'gray': '#373737',
        'gray-highlight': '#cacaca',
      },
      'wedding': {
        'primary-highlight-2': '#EDF6F8',
        'primary-highlight': '#A8C5C9',
        'primary': '#6D8CA3',
        'primary-shadow': '#45525F',
        'secondary-highlight': '#DFF2F5',
        'secondary': '#A8C5C9',
        'secondary-shadow': '#8DAEB3',
        'tertiary-highlight': '#F5E4DF',
        'tertiary': '#E2B2A0',
        'tertiary-shadow': '#BD8062',
        'gray-highlight': '#FBFEFF',
        'gray': '#E5ECEF',
      },
      'white': colors.white,
      'black': colors.black,
      'gray': colors.gray,
      'red': colors.red,
      'green': colors.green,
      'blue': colors.blue,
      'yellow': colors.yellow,
    },
    boxShadow: {
      'inset-t-b': 'inset 0 30px 30px -15px rgba(0, 0, 0, 1), inset 0 -30px 30px -15px rgba(0, 0, 0, 1)'
    },
    dropShadow: {
      'routeTilesTitle': '0 1px 2px rgba(0, 0, 0, 0.75)',
      'routeTilesDescription': '0 1px 2px rgba(0, 0, 0, 0.75)',
      'minecraftText': '4px 4px 0 rgba(75, 75, 75, 0.75)',
    },
    backgroundImage: {
      'minecraft-dirt': 'url("/images/minecraft/dirtRepeat.png")',
    },
    backgroundSize: {
      '16': '4rem',
      '32': '8rem',
      '64': '16rem',
    }
  },
  plugins: [],
}
