/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black':'#000000',
        'gray':'#0D0D0D',
        'textgray':'#787878'
         },
         fontFamily:{
          'inter':["Inter", "sans-serif"],
         }

    },
  },
  plugins: [],
}