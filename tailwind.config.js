/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a1f2b", // Deep navy background
        cardBg: "#112e3e",     // Slightly lighter navy for cards
        orangeAccent: "#f5820d", // Signature orange
        orangeHover: "#d46f0a",
        creamText: "#f9f6f0",  // Soft cream text
        mutedText: "#a0b2be",  // Muted light gray/blue
      },
    },
  },
  plugins: [],
};
