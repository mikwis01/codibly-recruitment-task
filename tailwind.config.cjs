/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayLight: "#7d7d7d",
        graySemiLight: "#202020",
        graySemiDark: "#1b1b1b",
        grayDark: "#141414",
        purpleLight: "#b13aad",
        purpleDark: "#6f21ab"
      }
    }
  },
  plugins: []
}
