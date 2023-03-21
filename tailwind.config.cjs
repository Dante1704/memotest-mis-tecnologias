/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'auto-fill': 'repeat(auto-fill, minmax(50px, 130px))'
      }
    }
  },
  plugins: []
}
