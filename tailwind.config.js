/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Assistant', 'sans-serif'],
      default: ['Space Grotesk', 'sans-serif'],
    },
    extend: {
      colors: {
        celadon: '#ACE1AF',
        'celadon-opacity': '#ACE1AF99',
        'baby-blue': '#89CFF0',
        'laurel-green': '#A9BA9D',
        'islamic-green': '#009000',
        'dark-green': '#006400',
        'brunswick-green': '#1B4D3E',
        'eagles-midnight-green': '#004953',
        'dark-blue': '#00008B',
        'dark-blue-opacity': '#00008B99',
        'astros-navy': '#002D62',
        'braves-navy': '#13274F',
        black: '#14140F',
      },
      maxWidth: {
        contentWidth: '40rem',
      },
      minHeight: {
        contentHeight: '30rem',
      },
    },
  },
  plugins: [],
};
