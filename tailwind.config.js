module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: {
          600: "#4f46e5",
          700: "#4338ca",
        },
        orange: {
          100: "#ffedd5",
          700: "#c2410c",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
