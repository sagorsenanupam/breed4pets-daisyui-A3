module.exports = {
  content: ["./**/*.html"], // make sure your HTML files are included
  theme: {
    extend: {
      keyframes: {
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "marquee-right": "marquee-right 20s linear infinite",
      },
    },
  },
  plugins: [],
};
