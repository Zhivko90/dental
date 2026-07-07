/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        porcelain: "#EAEEEC",
        enamel: "#FBFCFB",
        deep: "#0E3330",
        deep2: "#0A2624",
        teal: { DEFAULT: "#1C6E63", hover: "#175A51" },
        sage: { DEFAULT: "#8FB3A6", soft: "#D7E4DE" },
        gold: { DEFAULT: "#C29A45", soft: "#E8D9AF" },
        ink: "#12302C",
        muted: "#5A6E68",
        line: "rgba(14,51,48,0.12)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { wrap: "1180px" },
      boxShadow: { soft: "0 24px 60px -28px rgba(10,38,36,0.45)" },
    },
  },
  plugins: [],
};