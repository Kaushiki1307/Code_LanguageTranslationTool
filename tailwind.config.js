/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'gradient-y': 'gradient-y 10s ease infinite',
        'gradient-xy': 'gradient-xy 10s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
            'background-size': '200% 200%',
          },
          '50%': {
            'background-position': '100% 50%',
            'background-size': '200% 200%',
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-position': '50% 0%',
            'background-size': '200% 200%',
          },
          '50%': {
            'background-position': '50% 100%',
            'background-size': '200% 200%',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-position': '0% 0%',
            'background-size': '200% 200%',
          },
          '50%': {
            'background-position': '100% 100%',
            'background-size': '200% 200%',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 15px 2px rgba(56, 189, 248, 0.3)',
        'glow-lg': '0 0 25px 5px rgba(56, 189, 248, 0.3)',
      },
    },
  },
  plugins: [],
}
