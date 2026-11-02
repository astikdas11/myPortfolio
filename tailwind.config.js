/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFBF8',
          100: '#F7F5EF', // Base reference warm ivory/cream
          200: '#EFECE2',
          300: '#E2DDD0',
          400: '#C8C2B3',
          500: '#A9A293',
        },
        charcoal: {
          900: '#141414',
          850: '#1B1B1B', // Base dark charcoal typography
          800: '#252525',
          700: '#383838',
          600: '#52514D',
          500: '#6E6C66',
          400: '#949189',
        },
        sage: {
          50: '#F4F7F5',
          100: '#E4ECE6',
          200: '#CADBD0',
          300: '#A4C0AE',
          500: '#6B8E78',
          600: '#527960',
          700: '#3D5E4A',
        },
        brass: {
          400: '#D6B475',
          500: '#C5A059',
          600: '#AA8540',
        },
        door: {
          navy: '#1E293B',
          purple: '#37324B',
          sage: '#3B4D43',
          clay: '#543D37',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        editorial: ['Outfit', 'Syne', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'notebook': '0 20px 45px -12px rgba(27, 27, 27, 0.15), 0 0 0 1px rgba(27, 27, 27, 0.06)',
        'notebook-hover': '0 30px 60px -15px rgba(27, 27, 27, 0.22), 0 0 0 1px rgba(27, 27, 27, 0.08)',
        'paper-edge': 'inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 2px rgba(0,0,0,0.05)',
        'elevation': '0 10px 30px -10px rgba(0,0,0,0.07)',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
      }
    },
  },
  plugins: [],
}

