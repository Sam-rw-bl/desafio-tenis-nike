/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "sans":["Poppins "]
      },
      backgroundImage:{
        "tenis": url('/img/bg.png')
      },
    },
  },
  plugins: [],
}