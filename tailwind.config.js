// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./components/**/*.{astro,html,js,jsx,ts,tsx}",
    "./pages/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-mint-100',
    'bg-mint-200',
    'bg-mint-300',
    'bg-mint-400',
    'bg-mint-500',
    'bg-mint-600',
    'bg-mint-700',
    'bg-mint-800',
    'bg-mint-900',
    'bg-purple-80',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        mint: {
          100: 'oklch(0.71 0.15 247)',
          200: 'oklch(0.69 0.10 186)',
          300: 'oklch(0.76 0.16 71)',
          400: 'oklch(0.69 0.17 293)',
          500: 'oklch(0.543 0.028 283)',
          600: '#319795',
          700: '#2C7A7B',
          800: '#285E61',
          900: '#234E52',
        },
        green: {
          100: '#44916F',
          200: '#10B981',
        },
        purple: {
          80: "#F3F4F6",
          400: "#8A2BE2",
          500: "#A78BFA",
        },
        orange: {
          100: '#E89F51',
          400: '#E89F51',
        },
        gray: {
          111: "#777695",
          300: "#F9FAFB",
          400: "#C0C0C0",
          700: "#4F4F4F",
          800: "#333333",
        },
      },
    },
  },
  plugins: [],
};
