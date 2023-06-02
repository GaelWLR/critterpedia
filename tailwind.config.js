/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      primary: '#ecf3d1',
      secondary: '#cbe5b8',
      tertiary: '#0f833c'
    },
    extend: {
      grayscale: {
        20: '20%'
      },
      fontFamily: {
        sans: ['Fink Heavy', 'sans-serif']
      },
      transitionProperty: {
        maxw: 'max-width',
        link: 'grayscale, opacity'
      }
    }
  },
  plugins: []
};
