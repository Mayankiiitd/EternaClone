/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
    "./store/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ax: {
          bg: "#0b0e12",
          panel: "#0f1319",
          panel2: "#121722",
          textMuted: "#9aa4b2",
          accent: "#2f8fff",
          sol: "#2d66ff",
          good: "#14c184",
          bad: "#ff4d4d",
          warn: "#f5a524",
        }
      }
    },
  },
  plugins: [],
};
