/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#DA0017",
        secondary: "#0A0001",
      },
      fontFamily: {
        darker: ["Darker Grotesque", "sans-serif"],
      },
      backgroundImage: {
        'hero': "url('/src/assets/bg/hero.png')", 
      },
    },
  },
  plugins: [],
};
