/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fixate-blue": "#3A5582",
        "fixate-blue-sticky": "#2D4772",
      },
    },
  },
  plugins: [],
};
