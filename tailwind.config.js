module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        1618: '1fr 1.618fr', // Rasio emas untuk dua kolom
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce-in': {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.7)' 
          },
          '70%': { 
            opacity: '0.7', 
            transform: 'scale(1.05)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1)' 
          }
        },
        'scale-up': {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.8)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1)' 
          }
        },
        'fade-in-down': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(-10px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'bounce-in': 'bounce-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-up': 'scale-up 0.3s ease-out',
        'fade-in-down': 'fade-in-down 0.3s ease-out'
      }
    },
  },
  plugins: [],
};