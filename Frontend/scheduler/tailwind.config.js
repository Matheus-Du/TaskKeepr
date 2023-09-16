/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1/8': '12.5%',  // Customize w-1/8 to be 12.5%
        '2/8': '25%',    // Customize w-2/8 to be 25%
        '3/8': '37.5%',  // Customize w-3/8 to be 37.5%
        '4/8': '50%',    // Customize w-4/8 to be 50%
        '5/8': '62.5%',  // Customize w-5/8 to be 62.5%
        '6/8': '75%',    // Customize w-6/8 to be 75%
        '7/8': '87.5%',  // Customize w-7/8 to be 87.5%
        '8/8': '100%',   // Customize w-8/8 to be 100% (full width)
      },
    },
    colors: {
      backgroundWork: '#0E1115',
      gray: {
        900: '#202225',
        800: '#2f3136',
        700: '#36393f',
        600: '#4f545c',
        400: '#d4d7dc',
        300: '#e3e5e8',
        200: '#ebedef',
        100: '#f2f3f5', 
      },
      blue: {
        500: '#90CAF9'
      }
    }
  },
  plugins: [],
}