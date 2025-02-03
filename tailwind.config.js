/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/pages/*.html"],
  theme: {
    fontFamily: {
      serif: ["Poppins", "serif"]
    },
    extend: {
      colors: {
        heroline: "#920038",
      },
        },
  },
  plugins: [],
};

