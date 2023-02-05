/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        section_3: {
          100: "#0E123A",
          200: "#14154B",
        },
        section_4: {
          100: "#16263B",
          200: "#080F12",
        },
        section_5: {
          100: "#1D4CA4",
          200: "#2DCDDD",
          300: "#26A7B3",
        },
      },
      letterSpacing: {
        biggest: "5px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        xmd: "1007px",
        lg: "1024px",
        xl: "1300px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
