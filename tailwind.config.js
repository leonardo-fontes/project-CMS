/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gradient': 'var(--gradient-color)',
        'primary': 'var(--primary-color)',
        'gray': { 3: '#515151' },
        'blue': {
          3: '#0F4FAA'
        }
      },
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
      },
      boxShadow: {
        navbarPlataform: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
        input: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
};
