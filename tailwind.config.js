/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",


  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotateY(-10deg)' },
          '50%': { transform: 'rotateY(10deg)' },
        },

        shake :{
        '0%, 100%': { transform: 'translateX(2%)',

        },
        '50%': {
          transform: 'translateX(0)',

        }
      }
    }
    }
  }
};
