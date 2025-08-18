/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  safelist: ['font-sen'], // Гарантирует, что font-sen не удаляется
  theme: {
    extend: {
      fontFamily: {
        sen: ['Sen', 'sans-serif'],
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-in-out',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};