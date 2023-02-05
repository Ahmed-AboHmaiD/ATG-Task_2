/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        section_1: {
          100: "#6311A8",
        },
        section_2: {
          100: "#4A27CC",
          200: "#1C0362",
        },
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
        section_6: {
          100: "#012C91",
        },
        section_7: {
          100: "#00834C",
          200: "#00B769",
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
