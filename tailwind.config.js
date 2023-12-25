/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        JazzyJade: "#55D6C2",
        EssenceViolet: "#EFEDED",
        Incarnadine: "#B00020",
        BianchiGreen: "#36d7b7",
        PressingmyLuck: "#03cc17",
        fontFamily: {
          customRoboto: ['Roboto', 'sans-serif'],
        },
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}