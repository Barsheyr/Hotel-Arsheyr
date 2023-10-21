/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Hind Siliguri', sans-serif"],
      secondary: ["Work Sans sans-serif"],
      tertiary: ["Ubuntu, sans-serif"],
    },
    extend: {},
    backgroundImage: {
      room: "url('./assets/images/room.jpg')",
      roompage: "url('./assets/images/header-4.jpg')",
    },
  },
  plugins: [],
};
