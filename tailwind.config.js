/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        typeScriptLogoColor: "#3178C6",
        reactLogoColor: "#61DBFB",
        pythonYellowLogoColor: "#FFD43B",
        javascriptLogoColor: "#f7df1e"
      },
    },
  },
  plugins: [],
}