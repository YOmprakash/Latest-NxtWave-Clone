



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Inter', 'sans-serif' ], 
      },
      colors: {
        'light-blue': '#183b56',
        'blue': '#0082f3',
        'button-bg': '#1565d8',
        
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(rgba(255, 255, 255, 0), #fff 14%, #fff)',
      },
    },
  },
  plugins: [],
}
