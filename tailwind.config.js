/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Brand:'#01B075',
        Brandred:'#FA4836',
        Card:'#1A1A1A',
        CardDark:'#0E0E0E',
        CardBright:'#252525',
        Background:'#0E0E0E',
        SubItem:'#8b8b8b'
      },
      borderRadius:{
        Brand:'5px'
      },
      spacing:{
        'brand': '2rem',
        'brandgap':'0.8rem'
      },
      fontFamily: {
        sans: "Outfit"
        
    },
  },
  plugins: [],
}}