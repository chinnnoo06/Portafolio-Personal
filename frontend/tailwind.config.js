module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1C26',
        secondary: '#F2A922',
        light: '#dde1e9',
        background: '#f9f6ef'
      },
      fontFamily: {
        sans: [
          '-apple-system', 
          'BlinkMacSystemFont', 
          '"Segoe UI"', 
          'Roboto', 
          'Oxygen',
          'Ubuntu', 
          'Cantarell', 
          'Fira Sans', 
          'Droid Sans', 
          'Helvetica Neue',
          'sans-serif'
        ],
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          '"Courier New"',
          'monospace'
        ]
      }
    },
  },
  plugins: [],
}