module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main-color": "var(--main-color)",
      },
      width: {
        95: "95%",
        85: "85%",
        48: "48%",
        32: "32%",
        23: "23%",
      },
      borderWidth: {
        1: "1px",
      },
      minWidth: {
        32: "32%",
      },
      height: {
        90: "90vh",
        80: "80vh",
      },
      maxHeight: {
        90: "90vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
