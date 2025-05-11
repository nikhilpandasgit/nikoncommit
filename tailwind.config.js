/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './posts/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  safelist: [
    'bg-green-600', 'bg-blue-600', 'bg-yellow-600',
    'bg-gray-500', 'bg-red-600',
    'text-white', 'text-black'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Bricolage Grotesque"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};