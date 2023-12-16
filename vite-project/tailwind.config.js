/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#fa8b8b",
        bgimage: "#fe1f1f",
        overalbg: "#FFF4F4",
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
