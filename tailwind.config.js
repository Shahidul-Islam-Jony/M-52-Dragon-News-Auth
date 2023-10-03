/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:"'Poppins', sans-serif"   //setting custom font in tailwind
      }
    },
  },
  plugins: [require("daisyui")],
}

