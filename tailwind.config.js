/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier New', 'Consolas', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        notion: {
          bg: '#ffffff',
          darkBg: '#191919',
          card: '#f7f6f3',
          darkCard: '#202020',
          border: '#e9e9e7',
          darkBorder: '#2e2e2e',
          hover: '#efeee9',
          darkHover: '#2a2a2a',
          text: '#37352f',
          darkText: '#e3e2de',
          muted: '#787774',
          darkMuted: '#9b9a97'
        }
      }
    },
  },
  plugins: [],
}
