/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        pattern:
          "url('../images/bg-pattern-top.svg'), url('../images/bg-pattern-bottom.svg')",
        "pattern-card": "url('../images/bg-pattern-card.svg')",
      },
      colors: {
        cyan: "#19a2ae",
        "desaturated-blue": "#2d3248",
        gray: "#969696",
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
