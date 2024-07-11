/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**/*.{html,ts}",
    "./src/**/**/**/*.{html,ts}",
    "./src/**/**/**/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito": ['Nunito', 'sans-serif'],
      },
      colors: {
        "main": "#34285a",
      },
      keyframes: {
        ballSlideInFromRight: {
          '0%': { transform: 'translateX(130%) rotate(180deg)', opacity: 0 },
          '100%': { transform: 'translateX(0) rotate(0deg)', opacity: 1 }
        },
        popup: {
          '0%': { transform: 'scale(0.25)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 }
        },
        dropdown: {
          '0%': { transform: 'translateY(-50%) scaleY(0)', transformOrigin: "top", opacity: 0 },
          '100%': { transform: 'translateY(0) scaleY(1)', opacity: 1 }
        },
        lateralBounce: {
          '0%': { transform: 'rotate(0deg)' },
          '33%': { transform: 'rotate(-45deg)' },
          '66%': { transform: 'rotate(15deg)' },
          '100%': { tranform: 'rotate(0deg)' }
        },
        shake: {
          '0%': { transform: 'rotate(0deg)' },
          '12.5%': { transform: 'rotate(30deg)' },
          '25%': { transform: 'rotate(0deg)' },
          '37.5%': { transform: 'rotate(-30deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '62.5%': { transform: 'rotate(30deg)' },
          '75%': { transform: 'rotate(0deg)' },
          '87.5%': { transform: 'rotate(-30deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        squeleton: {
          '0%': { filter: 'opacity(80%)' },
          '50%': { filter: 'opacity(40%)' },
          '100%': { filter: 'opacity(80%)' },
        }
      },
      animation: {
        ballSlideInFromRight: 'ballSlideInFromRight 1s ease-out',
        popup: 'popup 0.3s ease-out',
        dropdown: 'dropdown 0.2s linear',
        lateralBounce: 'lateralBounce 0.3s ease-out',
        shake: 'shake 0.3s ease-out',
        squeleton: 'squeleton 2s ease-out infinite'
      }
    },
  },
  plugins: [],
}

