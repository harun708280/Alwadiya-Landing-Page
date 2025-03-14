/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",       // Ensure this is included
    "./src/**/*.{html,js}" // Fix content paths
  ],
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
        'bangladesh': "url('/src/assets/bg/expanding.png')",
      },
    },
  },
  plugins: [],
};
