/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'homeo-green': {
          50: '#E8F5E8',
          100: '#C8E6C9',
          500: '#4CAF50',
          600: '#388E3C',
          700: '#2E7D32',
          800: '#1B5E20',
        },
        'homeo-cream': {
          50: '#FEFEFE',
          100: '#F5F5DC',
          200: '#F0F0C8',
          300: '#E8E8B4',
        },
        'homeo-orange': {
          50: '#FFF3E0',
          100: '#FFE0B2',
          400: '#FFA726',
          500: '#FF9800',
          600: '#F57C00',
          700: '#E65100',
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-subtle': 'bounce 2s infinite',
      },
      backgroundImage: {
        'leaf-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232E7D32' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};