/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f4',
          100: '#fbe6e9',
          200: '#f7cfd6',
          300: '#efa9b6',
          400: '#e3778e',
          500: '#d24b69',
          600: '#ba3251',
          700: '#9b2440',
          800: '#641D32', // Deep Maroon primary
          900: '#4a1424',
          950: '#2b0712',
        },
        saffron: {
          50: '#fef9ee',
          100: '#fdf1d6',
          200: '#fbe2ad',
          300: '#f7cd79',
          400: '#f2b144',
          500: '#E99A24', // Saffron primary
          600: '#cb7a17',
          700: '#a35715',
          800: '#844418',
          900: '#6d3918',
          950: '#3e1d09',
        },
        gold: {
          50: '#fbf8ee',
          100: '#f6eed6',
          200: '#ecdbac',
          300: '#dec27b',
          400: '#d3ab52',
          500: '#C6A15B', // Muted Gold primary
          600: '#ab8240',
          700: '#8a6234',
          800: '#724f2f',
          900: '#60422b',
        },
        ivory: {
          DEFAULT: '#FFF9F0',
          50: '#ffffff',
          100: '#FFF9F0',
          200: '#fef1df',
          300: '#fbe3c3',
        },
        charcoal: {
          DEFAULT: '#25211F',
          50: '#f6f5f5',
          100: '#e7e5e4',
          200: '#d6d3d1',
          300: '#a8a29e',
          400: '#78716c',
          500: '#57534e',
          600: '#44403c',
          700: '#35312f',
          800: '#25211F', // Dark Charcoal
          900: '#1a1716',
          950: '#0f0e0d',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'spiritual': '0 10px 30px -5px rgba(100, 29, 50, 0.12), 0 4px 10px -2px rgba(233, 154, 36, 0.08)',
        'spiritual-lg': '0 20px 40px -10px rgba(100, 29, 50, 0.18), 0 8px 16px -4px rgba(233, 154, 36, 0.15)',
        'gold-glow': '0 0 20px rgba(198, 161, 91, 0.35)',
        'saffron-glow': '0 0 20px rgba(233, 154, 36, 0.35)',
      },
      backgroundImage: {
        'gradient-divine': 'linear-gradient(135deg, #641D32 0%, #4a1424 50%, #2b0712 100%)',
        'gradient-saffron': 'linear-gradient(135deg, #E99A24 0%, #cb7a17 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C6A15B 0%, #ab8240 100%)',
      }
    },
  },
  plugins: [],
}
