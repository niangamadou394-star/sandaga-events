/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#1E1230',
        'night-2': '#291A3D',
        'night-3': '#34234B',
        gold: '#D4AF6A',
        'gold-bright': '#EBCE87',
        bissap: '#B6404F',
        ivory: '#F5EFE6',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
