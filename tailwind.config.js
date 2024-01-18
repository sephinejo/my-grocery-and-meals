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
        malachite: '#0BDA51',
        'celadon-opacity': '#ACE1AF99',
        celadon: '#ACE1AF',
        'laurel-green': '#A9BA9D',
        'medium-sea-green': '#3CB371',
        jade: '#00A86B',
        'grassy-green': '#9bc400',
        'islamic-green': '#009000',
        'dark-green': '#006400',
        'jets-gotham-green': '#00573F',
        'lacoste-green': '#004526',
        'brunswick-green': '#1B4D3E',
        'eagles-midnight-green': '#004953',
        'purple-mountains-majesty': '#8076a3',
        'misty-mountain-pink': '#f9c5bd',
        'factory-stone-purple': '#7c677f',
        feldgrau: '#4D5D53',
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
