/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        section: "#1e1e7f",
      },
      letterSpacing: {
        biggest: "5px"
      },
    },
  },
  plugins: [],
};
