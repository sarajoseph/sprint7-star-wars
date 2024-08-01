/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/*.tsx', './src/**/*.tsx'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: ['black'],
    darkTheme: 'black', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root' // The element that receives theme color CSS variables
  }
}
