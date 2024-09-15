/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'mainfont': 'var(--font-family)',
      'paragraphfont': 'var(--font-montserrat)'
    },
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'gradient-light': '#d7e9ff',
        'gradient-medium': '#70a5ff',
        'gradient-dark': '#4378ff',

        
        'primary-white': '#ffffff',
        'soft-gray': '#cfd8e3',

        
        'button-bg': '#1a3b91',
        'button-text': '#ffffff',

        'card-bg': '#edf5ff',
        'card-border': '#b0c7e9',
        'amount-text': '#000000',
        'menu-bg': '#1c1c1e',
        'input-bg': '#e9f0f7',

        'mainfont': 'var(--font-family)',
        'paragraphfont': 'var(--font-montserrat)',
        'blue-light': '#e0f1ff', // light blue
        'blue-dark': '#004aad', // dark blue
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(180deg, #e0f1ff 0%, #004aad 100%)',
        'gradient-white': 'linear-gradient(45deg, #eee 0%, #fff 100%)',
      }
    },
  },
  plugins: [],
}
