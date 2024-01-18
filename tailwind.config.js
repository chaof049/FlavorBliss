/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "my-custom-font": ["my-custom-font", "Gilroy,Tahoma,sans-serif"],
      },
      backgroundImage:{
        'hero-pattern':"url(/hero-bg.png)",
      }
    },
  },
  plugins: [],
};
