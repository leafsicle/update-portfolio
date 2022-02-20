module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkmode: true,
  theme: {
    extend: {
      colors: {
        primary: '#084887',
        secondary: '#00A6FB',
        red: '#B3001B',
        white: '#F4F4F9',
        active: '#FFC914',
      },
      fontFamily: {
        sans: ['Permanent Marker', 'cursive'],
        serif: ['Permanent Marker', 'cursive'],
      },
    },
  },
  plugins: [],
}
