module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'brick-pattern': `
          linear-gradient(to right, #eaeaea 1px, transparent 1px),
          linear-gradient(to bottom, #eaeaea 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'brick': '50px 50px',
      },
      fontFamily: {
        'luana': ['"Amatic SC"', 'cursive'],
        great: ['"Great Vibes"', 'cursive'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],

      },
    },
    plugins: [],
  },
};
