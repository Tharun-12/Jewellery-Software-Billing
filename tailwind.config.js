/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F4B',
          50: '#E8EDF5',
          100: '#C7D2E8',
          200: '#9BB0D1',
          300: '#6E8EBA',
          400: '#4A6FA0',
          500: '#2B5188',
          600: '#1A3A6E',
          700: '#0F2A5A',
          800: '#0B1F4B',
          900: '#071534',
        },
        crimson: {
          DEFAULT: '#D62828',
          50: '#FCEAEA',
          100: '#F9D2D2',
          200: '#F2A5A5',
          300: '#E97878',
          400: '#E15050',
          500: '#D62828',
          600: '#B51E1E',
          700: '#941717',
          800: '#731010',
          900: '#520A0A',
        },
        gold: {
          DEFAULT: '#F4B400',
          50: '#FEF6E0',
          100: '#FDEDC0',
          200: '#FBDD85',
          300: '#FACD4A',
          400: '#F4B400',
          500: '#D99E00',
          600: '#A87A00',
          700: '#785700',
          800: '#473400',
          900: '#171100',
        },
        accent: {
          blue: '#3B82F6',
          green: '#10B981',
          orange: '#F97316',
          purple: '#8B5CF6',
          red: '#EF4444',
        },
        light: '#F5F7FA',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)',
        card: '0 4px 20px -2px rgba(11,31,75,0.10)',
        cardhover: '0 20px 40px -5px rgba(11,31,75,0.18)',
        glow: '0 0 30px -5px rgba(244,180,0,0.35)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0B1F4B 0%, #0F2A5A 50%, #071534 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F4B400 0%, #D99E00 100%)',
        'hero-pattern': 'radial-gradient(circle at 20% 80%, rgba(244,180,0,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(214,40,40,0.05) 0%, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
