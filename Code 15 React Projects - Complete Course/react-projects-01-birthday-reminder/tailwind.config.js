/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        clrPink: "#f28ab2",
      },
      boxShadow: {
        lightShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      },
      gridTemplateColumns: {
        "auto-1": "auto 1fr",
      },
      outline: {
        outlinePink: "1px solid rgba(242, 138, 178, 1)",
      },
    },
  },
  plugins: [],
};
