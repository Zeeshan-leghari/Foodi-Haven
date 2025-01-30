/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add cursor utilities
      cursor: {
        'custom-pointer': 'pointer',
        'custom-wait': 'wait',
        'custom-grab': 'grab',
      },
      
      // Your existing animations
      keyframes: {
        
        'slide-up': {
          '0%': { 
            transform: 'translateY(20px)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1' 
          },
        },
        'fade-in': {
          '0%': { 
            opacity: '0' 
          },
          '100%': { 
            opacity: '1' 
          },
        }
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
    }
  },
  plugins: [],
}

