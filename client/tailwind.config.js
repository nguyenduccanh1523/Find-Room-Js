
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      width: {
        '1100': '1100px',
      },
      backgroundColor: {
        primary: '#F5F5F5',
        secondary: '#1266dd',
        danger: '#f73859',
        'overlay-30': 'rgba(0,0,0,0.3)',
        'overlay-70': 'rgba(0,0,0,0.7)',
      },
      maxWidth: {
        '600': '600px',
        '1100': '1100px'
      },
      minWidth: {
        '300': '300px',
        '200': '200px'
      },
      cursor: {
        pointer: 'pointer'
      },
    },
  },
  plugins: [],
}