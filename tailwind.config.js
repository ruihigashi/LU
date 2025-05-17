/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#fce4ec",
          DEFAULT: "#ec407a",
          dark: "#ad1457",
        },
      },
      fontFamily: {
        sans: ["'Noto Sans JP'", "sans-serif"],
        'luana': ['"Amatic SC"', 'cursive'],
      },
    },
  },
  plugins: [],
};
