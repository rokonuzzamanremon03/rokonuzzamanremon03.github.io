/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0F0918',
        cardGlass: 'rgba(255, 255, 255, 0.05)',
        brandPurple: '#9B2CFA',
        brandPink: '#D642D0',
      },
      backgroundImage: {
        'purple-glow': 'radial-gradient(circle, rgba(155,44,250,0.15) 0%, rgba(15,9,24,1) 70%)',
      }
    },
  },
  plugins: [],
}