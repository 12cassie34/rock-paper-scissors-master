module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: "hsl(39, 89%, 49%)",
        yellowGradient: "hsl(40, 84%, 53%)",
        blue: "hsl(230, 89%, 62%)",
        blueGradient: "hsl(230, 89%, 65%)",
        red: "hsl(349, 71%, 52%)",
        redGradient: "hsl(349, 70%, 56%)",
        purple: "hsl(261, 73%, 60%)",
        purpleGradient: "hsl(261, 72%, 63%)",
        aqua: "hsl(189, 59%, 53%)",
        aquaGradient: "hsl(189, 58%, 57%)",
        dark: "hsl(229, 25%, 31%)",
        navy: "hsl(229, 64%, 46%)",
        gray: "hsl(217, 16%, 45%)",
        background: "hsl(214, 47%, 23%)",
        backgroundGradient: "hsl(237, 49%, 15%)"
      },
      fontFamily: {
        barlow: ['"Barlow Semi Condensed"']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
