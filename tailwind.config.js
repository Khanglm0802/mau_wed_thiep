/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        poetic: {
          bg: '#FAF6F2',
          surface: '#FFF9F7',
          card: 'rgba(255, 253, 250, 0.85)',
          cream: '#FFFDF9',
          petal: '#FFF0F3',
          blush: '#FFE4E8',
          pink: '#FBCFE8',
          rose: '#FDA4AF',
          coral: '#FB7185',
          deep: '#E11D48',
          plum: '#4A2A33',
          text: '#54363F',
          muted: '#8E737B',
          border: 'rgba(235, 192, 197, 0.45)',
          'border-gold': 'rgba(221, 167, 165, 0.45)',
        },
        rosegold: {
          light: '#F8DFDA',
          DEFAULT: '#DDA7A5',
          medium: '#C88D93',
          dark: '#B76E79',
          accent: '#A45863',
        },
        champagne: {
          light: '#FFF9ED',
          DEFAULT: '#F5E6CC',
          gold: '#E3C18D',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
        script: ['Great Vibes', 'cursive'],
        handwriting: ['Dancing Script', 'Alex Brush', 'cursive'],
        body: ['Plus Jakarta Sans', 'Lora', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'poetic-card': '0 12px 35px -8px rgba(221, 167, 165, 0.22), 0 4px 15px -4px rgba(244, 114, 182, 0.12)',
        'poetic-glow': '0 0 25px rgba(253, 164, 175, 0.45), 0 0 50px rgba(253, 164, 175, 0.2)',
        'poetic-float': '0 20px 40px -15px rgba(183, 110, 121, 0.25)',
        'poetic-inner': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 1px 0 rgba(221, 167, 165, 0.15)',
        'rose-glow': '0 8px 30px rgba(244, 114, 182, 0.35)',
      },
      backgroundImage: {
        'gradient-poetic': 'linear-gradient(135deg, #FFF9F7 0%, #FFF0F3 50%, #FAF6F2 100%)',
        'gradient-rose-gold': 'linear-gradient(135deg, #F8DFDA 0%, #DDA7A5 50%, #C88D93 100%)',
        'gradient-romantic': 'radial-gradient(ellipse at top, #FFF0F3 0%, #FAF6F2 100%)',
      },
      borderRadius: {
        'arch': '120px 120px 24px 24px',
        'arch-sm': '80px 80px 18px 18px',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'float-gentle': 'floatGentle 4.5s ease-in-out infinite',
        'float-delayed': 'floatGentle 5s ease-in-out 2s infinite',
        'flutter': 'flutter 0.35s ease-in-out infinite alternate',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer-soft': 'shimmerSoft 3s infinite',
      },
      keyframes: {
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flutter: {
          '0%': { transform: 'scaleX(1)' },
          '100%': { transform: 'scaleX(0.2)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(0.97)' },
        },
        shimmerSoft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      }
    },
  },
  plugins: [],
}
