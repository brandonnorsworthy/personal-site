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
        'primary': 'var(--color-wedding-primary)',
        'primary-highlight': 'var(--color-wedding-primary-highlight)',
        'primary-shadow': 'var(--color-wedding-primary-shadow)',
        'secondary': 'var(--color-wedding-secondary)',
        'secondary-highlight': 'var(--color-wedding-secondary-highlight)',
        'secondary-shadow': 'var(--color-wedding-secondary-shadow)',
        'gray': 'var(--color-wedding-gray)',
        'gray-highlight': 'var(--color-wedding-gray-highlight)',
      },
      'white': colors.white,
      'black': colors.black,
      'gray': colors.gray,
      'red': colors.red,
      'green': colors.green,
      'blue': colors.blue,
      'yellow': colors.yellow,
    },
    dropShadow: {
      'routeTilesTitle': '0 1px 2px rgba(0, 0, 0, 0.75)',
      'routeTilesDescription': '0 1px 2px rgba(0, 0, 0, 0.75)',
    }
  },
  plugins: [],
}
