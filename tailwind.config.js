/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'StrongCyan': 'hsl(171, 66%, 44%)',
        'LightBlue': 'hsl(233, 100%, 69%)',
        'DarkGrayishBlue': 'hsl(210, 10%, 33%)',
        'GrayishBlue': 'hsl(201, 11%, 66%)'
      },
      backgroundImage:{
        "bg-header-desktop" : "url('/images/bg-header-desktop.png')",
        "bg-header-mobile" : "url('/images/bg-header-mobile.png')"

      }
    },
  },
  plugins: [],
}