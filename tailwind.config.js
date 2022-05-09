module.exports = {
  mode: "jit",
  purge: ["*.html", "tailwind.css"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2A78BF",
        accent: "#F9912A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
