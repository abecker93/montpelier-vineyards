const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      xl: '100rem'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      black: '#0f161a'
    },
    extend: {
      screens: {
        xs: '375px',
        xsm: '425px',
      },
      colors: {
        beige: {
          DEFAULT: '#ffefbd'
        },
        marv: {
          DEFAULT: '#53293b'
        },
        blueMetal: {
          DEFAULT: '#1985a1'
        },
        seaweed: {
          DEFAULT: '#66a182'
        },
        cotta: {
          DEFAULT:'#e87461'
        },
        brown: {
          DEFAULT:'#E0C3A5'
        }
      }
    },
    ...defaultTheme
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
