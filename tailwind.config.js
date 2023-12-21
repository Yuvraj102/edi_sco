module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        indigo: { A200_99: "#6462fc99", A200_66: "#6462fc66", A200: "#6462fc" },
        gray: {
          50: "#fafafc",
          500: "#aaabb0",
          700: "#555459",
          800: "#3a393e",
          900: "#1a1a1c",
          "900_33": "#25232e33",
          "900_01": "#1c1c1c",
          "900_4c": "#25232e4c",
          "500_33": "#aaabb033",
        },
        blue_gray: { 900: "#313133", "900_33": "#31313133" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
