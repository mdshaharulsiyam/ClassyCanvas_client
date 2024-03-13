/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clashBold: ["ClashDisplayBold", "sans-serif"],
        clashSemibold: ["ClashDisplaySemibold", "sans-serif"],
        clashRegular: ["ClashDisplayRegular", "sans-serif"],
        clashLight: ["ClashDisplayLight", "sans-serif"],
        clashMedium: ["ClashDisplayMedium", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
