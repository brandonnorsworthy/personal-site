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
        'primary': 'var(--color-global-primary)',
        'primary-highlight': 'var(--color-global-primary-highlight)',
        'primary-shadow': 'var(--color-global-primary-shadow)',
        'secondary': 'var(--color-global-secondary)',
        'secondary-highlight': 'var(--color-global-secondary-highlight)',
        'secondary-shadow': 'var(--color-global-secondary-shadow)',
        'gray': 'var(--color-global-gray)',
        'gray-highlight': 'var(--color-global-gray-highlight)',
      },
      'wedding': {
        'primary-highlight-2': 'var(--color-wedding-primary-highlight-2)',
        'primary-highlight': 'var(--color-wedding-primary-highlight)',
        'primary': 'var(--color-wedding-primary)',
        'primary-shadow': 'var(--color-wedding-primary-shadow)',
        'secondary-highlight': 'var(--color-wedding-secondary-highlight)',
        'secondary': 'var(--color-wedding-secondary)',
        'secondary-shadow': 'var(--color-wedding-secondary-shadow)',
        'tertiary-highlight': 'var(--color-wedding-tertiary-highlight)',
        'tertiary': 'var(--color-wedding-tertiary)',
        'tertiary-shadow': 'var(--color-wedding-tertiary-shadow)',
        'gray-highlight': 'var(--color-wedding-gray-highlight)',
        'gray': 'var(--color-wedding-gray)',
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
