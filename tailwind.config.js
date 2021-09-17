module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      colorLight: "var(--colorLight)",
      colorDark: "var(--colorDark)",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#f2f2f2",
      secondary: "#202C36",
      headerBackground: "#2B3844",
    }),

    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', "sans-serif"],
      },
      fontWeight: {
        normal: 300,
        bold: 600,
        extra: 800,
      },
      fontSize: {
        small: "14px",
        normal: "1rem",
        big: "18px",
        bold: "24px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
